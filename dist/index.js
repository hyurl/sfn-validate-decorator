"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sfn_1 = require("sfn");
const Validator = require("sfn-validator");
const get = require("lodash/get");
/**
 *
 * @param target The object name you wanna test, e.g. `req.body`.
 * @param rule
 */
function validate(target, rule) {
    return sfn_1.before((ctrl) => {
        rule = rule instanceof Validator ? rule : new Validator(rule);
        try {
            rule.validate(get(ctrl, target));
        }
        catch (err) {
            throw new sfn_1.HttpError(400, err.message);
        }
    });
}
exports.validate = validate;
exports.default = validate;
//# sourceMappingURL=index.js.map