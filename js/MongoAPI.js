import {get} from 'jquery'
import ServerActions from "./actions/ServerAction"
let MongoAPI = {
    fetchLinks() {
        console.log('Mongo API');
        get('/data/links').done(resp => {
             ServerActions.receiveLinks(resp);
        }) ;
    }
}

export default MongoAPI