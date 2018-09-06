import { before, HttpController, HttpError } from "sfn";
import * as Validator from "sfn-validator";
import get = require("lodash/get");

export function validate(target: "req.body" | "req.params", rule: Validator | {
    [field: string]: Validator.ValidTypes | Validator.Rule
}) {
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