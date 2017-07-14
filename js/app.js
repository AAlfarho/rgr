import React from"react";
import ReactDOM from "react-dom";
import Relay from 'react-relay';
import Main from './components/Main';
import App from './components/Quiz';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import CustomCSS from "style!../style/quiz.css";


class HomeRoute extends Relay.Route {
    static routeName = 'Home';
    static queries = {
        store: (Component) => Relay.QL`
        query MainQuery {
            store {${Component.getFragment('store')}}
        }
        `
    };
}

/*ReactDOM.render(
    <Relay.RootContainer
        Component = {Main}
        route = {new HomeRoute()}
    />,
    document.getElementById("react"));
    */
    
    var appData = [
        {
            name: 'Mark Twain', 
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/25/Mark_Twain%2C_Brady-Handy_photo_portrait%2C_Feb_7%2C_1871%2C_cropped.jpg',
            books: ['The Adventures of Huckleberry Finn']
        },
        {
            name: 'Joseph Conrad',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/07/Joseph_Conrad.PNG',
            books: ['Heart of Darkness']
        },
        {
            name: 'J.K. Rowling',
            imageUrl: 'http://cdn.images.express.co.uk/img/dynamic/20/590x/secondary/JK-Rowling-380764.jpg',
            imageSource: 'Wikimedia Commons',
            imageAttribution: 'Daniel Ogren',
            books: ['Harry Potter and the Sorcerers Stone']
        },
        {
            name: 'Stephen King',
            imageUrl: 'https://pbs.twimg.com/profile_images/378800000836981162/b683f7509ec792c3e481ead332940cdc.jpeg',
            imageSource: 'Wikimedia Commons',
            imageAttribution: 'Pinguino',
            books: ['The Shining','IT']
        },
        {
            name: 'Charles Dickens',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Dickens_Gurney_head.jpg',
            imageSource: 'Wikimedia Commons',
            books: ['David Copperfield', 'A Tale of Two Cities']
        },
        {
            name: 'William Shakespeare',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Shakespeare.jpg',
            imageSource: 'Wikimedia Commons',
            books: ['Hamlet', 'Macbeth', 'Romeo and Juliet']
        }
    ];
    ReactDOM.render(
    <App data={appData}/>,
    document.getElementById("author-react"));