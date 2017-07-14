import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import React from 'react';

class Hello extends React.Component {
    render(){
       return (
       <div>
            <h3>Hello {this.props.name}</h3>
                    <Jumbotron>
            <h1>Welcome to React</h1>
            <p>
              <Button
                bsStyle="success"
                bsSize="large"
                href="http://react-bootstrap.github.io/components.html"
                target="_blank">
                View React Bootstrap Docs
              </Button>
            </p>
        </Jumbotron>
        </div>
        );
    }
}

export default Hello