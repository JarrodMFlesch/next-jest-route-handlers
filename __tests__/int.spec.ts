import { startJestServer } from "../helpers/startJestServer";

require('isomorphic-fetch');

describe('route.ts', () => {
  it('should return a 200 status code', async () => {
    const { serverURL } = await startJestServer()
    const test = await fetch(`${serverURL}/api/test`);

    expect(test.status).toStrictEqual(200);
  });
});