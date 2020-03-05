import validator from 'validator';

class FormValidator {

  // Receive the 'new FormValidator'.
  constructor(validations) {
    this.validations = validations;
  }

  validates(state) {
    let validation = this.valid();

    this.validations.forEach(rule => {
      // Recovering the info from 'new FormValidator'.
      const fieldPrice = state[rule.field.toString()];
      const args = rule.args || [];
      // Recovering the method that is 'empty' in 'new FormValidator'.
      const methodValidation = typeof rule.method === 'string' ?
      validator[rule.method] : rule.method

      // After recover the item, it must be validated.
      if (methodValidation(fieldPrice, ...args, state) !== rule.validWhen) {

        validation[rule.field] = {
          isInvalid: true,
          message: rule.message
        }
        validation.isValid = false;
      }
    });

    return validation;
  }

  valid() {
    const validation = {}

    this.validations.map(rule => (
      validation[rule.field] = { isInvalid: false, message: '' }
    ));
    return { isValid: true, ...validation };
  }
}

export default FormValidator;
