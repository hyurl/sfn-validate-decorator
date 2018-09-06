import { before, HttpController, HttpError, Validator, HttpDecorator } from "sfn";
import get = require("lodash/get");

export function validate(
    target: "req.body" | "req.params" | "req.query" | "req.cookies" | "req.session",
    rule: Validator | {
        [field: string]: Validator.ValidTypes | Validator.Rule
    }
): HttpDecorator {
    return before((ctrl: HttpController) => {
        rule = rule instanceof Validator ? rule : new Validator(rule);

        try {
            rule.validate(get(ctrl, target));
        } catch (err) {
            throw new HttpError(400, (<Error>err).message);
        }
    });
}

export default validate;