let React = require("react")
let ReactDOM = require("react-dom")
import Relay from 'react-relay'
import Main from './components/Main'

ReactDOM.render(<Main limit={2} />, document.getElementById("react"))

console.log(
  Relay.QL`
   query Test {
      links{
        title
      }
    }
  `  
);