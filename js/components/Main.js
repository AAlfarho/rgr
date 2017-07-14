import React from 'react';
import Relay from "react-relay";

class Main extends React.Component {

    /*
    The use of realy makes the state and the onchange, mount, unmount innecessary as that was
    vanilla flux patter, now we have relay.
    Relay will manage the state for us in the form of props
    */
    
    render(){
        let link_component = this.props.store.links.map(link => {
            return  <li key={link._id}>
                        <a href={link.url}>{link.title}</a>
                    </li>
        });
       return (
       <div>
            <h3>Links</h3>
            <ul>
                {link_component}
            </ul>
        </div>
        );
    }
}

Main = Relay.createContainer(Main, {
    fragments: {
        store: () => Relay.QL`
        fragment on Store {
            links{
                _id,
                title,
                url
            }
        }
        `
    }
});

export default Main