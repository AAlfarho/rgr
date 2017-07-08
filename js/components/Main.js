import React from 'react';
import MongoAPI from '../MongoAPI';
import LinkStore from "../stores/LinkStore"

let _getAppState = () => {
    return { links: LinkStore.getAll() }  
};

export default class Hello extends React.Component {
    constructor(props){
        super(props);
        
        this.state = _getAppState();
        //ES6 does not have autobind so we need to bind our onChange
        //however the bind will always return a function, so we need to keep 
        //track of such function in order to avoid leaks when removing the 
        //listener, for more info go to https://hjnilsson.com/2016/04/17/addChangeListener-removeChangeListener-bind-and-unbind/
        this._onChange = this.onChange.bind(this);
    }
    
    onChange (){
        console.log("In the view, on change")
        this.setState(_getAppState());
    }
    
    componentDidMount() {
        MongoAPI.fetchLinks();
        LinkStore.on('change', this._onChange)
    }
    
    componentWillUnmount() {
        debugger
        //verify this is working
        LinkStore.removeListener("change", this._onChange)
    }
    
    render(){
        let link_component = this.state.links.map(link => {
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
