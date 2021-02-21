const defaultState = {
  login: false
};

const reducer = (state = defaultState, loginAction) => {
  // Change code below this line
  switch(loginAction.type){
    case 'LOGIN':
      state = {
        login: true
      };
    default:
      return state;
  }
  // Change code above this line
};

const store = Redux.createStore(reducer);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};
