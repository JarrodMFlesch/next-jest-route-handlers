## Route.ts testing
To install and run the test suite, run the following commands in your terminal:
```bash
yarn && yarn test
```

## Expected result
```bash
 PASS  __tests__/int.spec.ts
  route.ts
    ✓ should return a 200 status code
```

## Current result (next@^14.1.1-canary.27)
```bash
 FAIL  __tests__/int.spec.ts
  route.ts
    ✕ should return a 200 status code (4086 ms)

  ● route.ts › should return a 200 status code

    expect(received).toStrictEqual(expected) // deep equality

    Expected: 200
    Received: 404
```