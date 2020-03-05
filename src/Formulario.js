import React, { Component } from 'react';
import FormValidator from './FormValidator';
import PopUp from "./PopUp";

class Formulario extends Component {

  constructor(props) {
    super(props);

    //
    this.validator = new FormValidator([
      {
      field: 'name',
      method: 'isEmpty',
      validWhen: false,
      message: 'Type a name'
      },
      {
        field: 'book',
        method: 'isEmpty',
        validWhen: false,
        message: 'Type a book'
      },
      {
        field: 'price',
        method: 'isInt',
        args: [{ min: 0, max: 9999 }],
        validWhen: true,
        message: 'Type a price'
      },
    ]);

    this.stateInicial = {
      name: '',
      book: '',
      price: '',
      validation: this.validator.valid()
    }

    this.state = this.stateInicial;
  }

  inputChangeListener = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  submitForm = () => {
    const validation = this.validator.validates(this.state);

    if (validation.isValid) {
      this.props.submitListener(this.state);
      this.setState(this.stateInicial);
    } else {
      const { name, book, price } = validation;
      const field = [name, book, price];
      const invalidFields = field.filter(el => {
        return el.isInvalid;
      });
      invalidFields.forEach(field => {
        PopUp.showMessage('error', field.message)
      })
    }
  }

  render() {
    const { name, book, price } = this.state;

    return (
      <form action="#">
        <div className="row">
          <div className="input-field col s4">
            <label htmlFor="name" className="input-field">Name</label>
            <input id="name" className="validate" type="text" name="name" value={name} onChange={this.inputChangeListener} />
          </div>

          <div className="input-field col s4">
            <label htmlFor="book" className="input-field">Book</label>
            <input id="book" className="validate" type="text" name="book" value={book} onChange={this.inputChangeListener} />
          </div>

          <div className="input-field col s4">
            <label htmlFor="price" className="input-field">Price</label>
            <input id="price" className="validate" type="text" name="price" value={price} onChange={this.inputChangeListener} />
          </div>
        </div>
        <button type="button" onClick={this.submitForm} className="btn waves-effect waves-light indigo darken-2">Save</button>
      </form>
    );
  }
}

export default Formulario;
