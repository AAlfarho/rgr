import React from 'react';
import MongoAPI from '../MongoAPI';
import LinkStore from "../stores/LinkStore"
import PropTypes from 'prop-types';

let _getAppState = () => {
    return { links: LinkStore.getAll() }  
};

class Main extends React.Component {
    static propTypes = {
    limit: PropTypes.number
    }
    
    static defaultProps = {
        limit: 4
    }
    
    state = _getAppState();
    
    /*
        Got rid of constructor as we were only using it for the binding, however
        using stage-0 es5 allows us for arrow anonymus function which binds it
    */
    // constructor(props){
    //     super(props);
        
    //     //ES6 does not have autobind so we need to bind our onChange
    //     //however the bind will always return a function, so we need to keep 
    //     //track of such function in order to avoid leaks when removing the 
    //     //listener, for more info go to https://hjnilsson.com/2016/04/17/addChangeListener-removeChangeListener-bind-and-unbind/
    //     this._onChange = this.onChange.bind(this);
    // }
    
    onChange = () => {
        console.log("In the view, on change")
        this.setState(_getAppState());
    }
    
    componentDidMount() {
        MongoAPI.fetchLinks();
        //because arrow function we dont need to bind the onchange hence the
        LinkStore.on('change', this.onChange)
    }
    
    componentWillUnmount() {
        LinkStore.removeListener("change", this.onChange)
    }
    
    render(){
        let link_component = this.state.links.slice(0, this.props.limit).map(link => {
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


export default Main