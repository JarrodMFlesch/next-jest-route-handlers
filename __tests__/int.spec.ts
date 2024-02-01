import { startJestServer } from "../helpers/startJestServer";

require('isomorphic-fetch');

let apiURL: string;

describe('route.ts', () => {
  beforeAll(async () => {
    const { serverURL } = await startJestServer()
    apiURL = serverURL;
  })

  it('should return a 200 status code', async () => {
    const test = await fetch(`${apiURL}/api/test`);

    expect(test.status).toStrictEqual(200);
  });
});