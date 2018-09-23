const { HttpController, HttpError } = require("sfn");
const { interceptAsync } = require("function-intercepter");
const Validator = require("sfn-validator");
const get = require("lodash/get");

function validate(target, rule) {
    return interceptAsync().before(function () {
        rule = rule instanceof Validator ? rule : new Validator(rule);

        try {
            rule.validate(get(this, target));
        } catch (err) {
            throw new HttpError(400, err.message);
        }
    });
}

exports.validate = exports.default = validate;