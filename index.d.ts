import { HttpDecorator } from "sfn";
import * as Validator from "sfn-validator";

export function validate(
    target: "req.body" | "req.params" | "req.query" | "req.cookies" | "req.session",
    rule: Validator | {
        [field: string]: Validator.ValidTypes | Validator.Rule
    }
): HttpDecorator;

export default validate;