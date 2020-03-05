import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import Header from './Header';
import Tabela from './Tabela';
import Form from './Formulario';
import PopUp from "./PopUp";
import ApiService from './ApiService';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      authors: [],
    };
  }



  removeAuthor = (index) => {
    const { authors } = this.state;

    this.setState(
      {
        authors: authors.filter((autor, posAtual) => {
          console.log(index, posAtual)
          return posAtual !== index;
        }),
      }
    );
    PopUp.showMessage('error', 'Author removed!');
  }

  submitListener = autor => {
    this.setState({ authors: [...this.state.authors, autor] });
    PopUp.showMessage('success', 'Author added');
  }

  componentDidMount() {
    ApiService.AuthorList()
      .then(res => {
        this.setState({authors: [...this.state.authors, ...res ]})
      });
  }

  render() {
    //TEST
    // ApiService.ListName()
    // .then(res => console.log(res))

    return (
      <Fragment>
        <Header/>
        <div className="container mb-10">
          <h1>Exercise One</h1>
          <Tabela authors={this.state.authors} removeAuthor={this.removeAuthor} />
          <Form submitListener={this.submitListener}/>
        </div>
      </Fragment>
    );
  }

}

export default App;
