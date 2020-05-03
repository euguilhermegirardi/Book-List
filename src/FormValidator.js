import validator from 'validator';

class FormValidator {

  // Receive the 'new FormValidator'.
  constructor(rules) {
    // Receives an array of objects from the new FormValidator.
    this.rules = rules;
  }

  // How the validation works.
  toValidation(state) {
    let toVerification = this.validRules();

    // forEach() in the rules from the new FormValidator
    this.rules.forEach(rule => {

      // 'field' from 'new FormValidator'.
      const fieldPrice = state[rule.field.toString()];

      // Recovering the args from the rules in new FormValidator.
      const args = rule.args || [];

      // 'method' from the 'validator' and check if it's empty from the 'new FormValidator'.
      const methodValidation = typeof rule.method === 'string' ?
      validator[rule.method] : rule.method;

      // After recover the item, it must be validated.
      if (methodValidation(fieldPrice, ...args, state) !== rule.validWhen) {
        toVerification[rule.field] = {
          isInvalid: true,
          message: rule.message
        }
        toVerification.isValid = false;
      }
    });
    return toVerification;
  };

  // Returns the valid rules to the Form.
  validRules() {
    const validation = {};

    // map() the rules in the 'new FormValidator'.
    this.rules.map(rule => (
      validation[rule.field] = { isInvalid: false, message: '' }
    ));
    return { isValid: true, ...validation };
  };
}

export default FormValidator;
