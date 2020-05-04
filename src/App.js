import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import Header from './Components/Header/Header';
import Tabela from './Components/Table/Tabela';
import Form from './Components/Form/Formulario';
import PopUp from "./Utils/PopUp";
import ApiService from './API/ApiService';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      authors: [],
    };
  };

  removeAuthor = id => {
    const { authors } = this.state;

    this.setState(
      {
        authors: authors.filter((author) => {
          // return those who the id is different from the id which was clicked (removed).
          return author.id !== id;
        })
      }
    );
    PopUp.showMessage('error', 'Author removed!');
    ApiService.RemoveAuthor(id);
  };

  submitListener = author => {
    ApiService.CreateAuthor(JSON.stringify(author))
              .then(res => res)
              .then(author => {
                this.setState({ authors: [...this.state.authors, author] });
                PopUp.showMessage('success', 'Author added');

              })
              .catch(err => PopUp.showMessage('error', 'Something went wrong with SubmitListener.'));
  };

  // Called just after the component is built
  componentDidMount() {
    ApiService.AuthorList()
    .then(res => {
      this.setState({authors: [...this.state.authors, ...res]})
    })
  };

  render() {
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
