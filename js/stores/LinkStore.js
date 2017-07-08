import AppDispatcher from '../AppDispatcher'
import ActionType from '../actions/ActionType'
import {EventEmitter} from 'events'

let _links = []
class LinkStore extends EventEmitter{
    constructor(props) {
        super(props);
        
        AppDispatcher.register(action => {
           switch(action.actionType) {
               case ActionType.RECEIVE_LINKS:
                   console.log("In store");
                   _links = action.links;
                   this.emit("change");
                   break;
                   default:
                   //do nothing
           } 
        });
    }
    
    getAll() {
        return _links;
    }
    
}

export default new LinkStore();