import M from 'materialize-css';

const PopUp = {
  showMessage: (state, msg) => {
    if( state === 'success') {
      M.toast({html: msg, classes: 'green', displayLength: 2000});
    }

    if(state === 'error') {
      M.toast({html: msg, classes: 'red', displayLength: 2000});
    }
  }
}

export default PopUp;
