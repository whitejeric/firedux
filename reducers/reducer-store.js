import {CURRENT_STORE} from '../actions/index'; //just grabbing the name, not the function

export default function(state = [], action){
  switch (action.type){
    case CURRENT_STORE:
      console.log('getting edit state:');
      console.log(state);
      return state;
  }
  return state;
}
