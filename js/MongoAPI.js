import {post} from 'jquery'
import ServerActions from "./actions/ServerAction"
let MongoAPI = {
    fetchLinks() {
        console.log('Mongo API');
        post('/graphql', {
            query: `{
                      links{
                        _id,
                        title,
                        url
                      }
                    }`
        }).done(resp => {
             ServerActions.receiveLinks(resp.data.links);
        }) ;
    }
}

export default MongoAPI