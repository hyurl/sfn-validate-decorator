"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sfn_1 = require("sfn");
const get = require("lodash/get");
function validate(target, rule) {
    return sfn_1.before((ctrl) => {
        rule = rule instanceof sfn_1.Validator ? rule : new sfn_1.Validator(rule);
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