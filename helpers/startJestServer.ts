import path from 'path'
import next from "next"
import { createServer } from 'http'
import { parse } from 'url'

export const startJestServer = async () => {
  const port = 2024
  const serverURL = `http://localhost:${port}`

  const app = next({
    dev: true,
    hostname: 'localhost',
    port,
    dir: path.resolve(__dirname, '..'),
  })
  const handle = app.getRequestHandler()
  await app.prepare()

  createServer(async (req, res) => {
    try {
      if (!req?.url) throw new Error('Invalid Request URL')
      const parsedUrl = parse(req.url, true)

      await handle(req, res, parsedUrl)
    } catch (err) {
      console.error('Error occurred handling', req.url, err)
      res.statusCode = 500
      res.end('internal server error')
    }
  })
    .once('error', (err) => {
      console.error(err)
      process.exit(1)
    })
    .listen(port, () => {
      console.log(`> Ready on ${serverURL}`)
    })

  return { serverURL }
}