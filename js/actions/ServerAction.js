import AppDispatcher from '../AppDispatcher'
import ActionType from './ActionType'

let ServerActions = {
  receiveLinks(links) {
      console.log("In server action")
      AppDispatcher.dispatch({
         actionType : ActionType.RECEIVE_LINKS,
         links 
      });
  }  
};

export default ServerActions