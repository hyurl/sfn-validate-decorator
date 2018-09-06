# sfn-validate-decorator

**A decorator function for SFN controllers to validate inputs.**

This package currently supports only HttpControllers, since WebSocket way to 
transmit data is somewhat different and cannot be tracked by the current version
of SFN.

## Install

```sh
npm i sfn-validate-decorator
```

## Example

```typescript
import { HttpController } from "sfn";
import { validate } from "sfn-validate-decorator";

export default class extends HttpController {
    @validate("req.body", {
        username: {
            type: "string",
            required: true,
            length: [3, 18]
        },
        password: {
            type: "string",
            required: true,
            length: [3, 18]
        }
    })
    async register() {
        // ...
    }
}
```