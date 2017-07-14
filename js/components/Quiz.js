import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import React from 'react';
import _  from 'lodash';

class Header extends React.Component {
     render() {
         return (
           <div className='jumbotron'>
                <div className='container'>
                    <h1>Author Quiz</h1>
                    <p>Select the book written by the author shown</p>
                </div>
            </div>
             );
     }
}

class Footer extends React.Component {
     render() {
         return (
           <div className='footer'>
                <div className='container'>
                    <p className='credit text-muted'>Foooooter</p>
                </div>
            </div>
             );
     }
}



class Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = Quiz.initialState()
        
    }
   static propTypes = {
        books: React.PropTypes.array.isRequired
    }
    static initialState = () => {
        return {
                bgClass: 'neutral',
                showContinue: false
            };
    }

    handleBookSelected = (book) => {
        var isCorrect = this.checkAnswer(book);
        this.setState({
            bgClass: isCorrect ? 'pass' : 'fail',
            showContinue: isCorrect
        });
    }  

    checkAnswer = (book) => {
        return _.find(this.props.author.books, (b) => b === book ) ? true : false
    }
    
    handleContinue = () => {
        this.props.handleNewGame()
        this.setState(Quiz.initialState)
    }
    
    render() {
        return(
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'>
                        <img src={this.props.author.imageUrl} className="authorimage col-md-3" />
                    </div>
                     <div className='col-md-7'>
                        {this.props.books.map((book) => {
                             return <Book onBookSelected={this.handleBookSelected}title={book} />
                        }, this)}
                    </div>
                    <div className={'col-md-1 ' + this.state.bgClass}>
                    </div>
                </div>
                
                <div style={{display: this.state.showContinue ? '' : 'none'}} className='row'>
                    <div className='col-md-11'></div>
                    <div className='col-md-1'>
                        <Button onClick={this.handleContinue} className='btn btn-primary btn-lg pull-right'>
                            Continue
                        </Button>
                    </div>
                </div>

            </div>
            );
    }
}


export default class App extends React.Component {
   static propTypes = {
        data: React.PropTypes.array.isRequired
    }
    
    getRandomAuthor = (authors) => {
        return authors[Math.floor(Math.random()*authors.length)]
    }
    
    getInitialState = () => {
        let bookSet = new Set();
        let author = this.getRandomAuthor(this.props.data);
        let books = this.props.data.reduce((books, author) => {
            return books.concat(author.books);
        },[])
        bookSet.add(author.books[Math.floor(Math.random()*author.books.length)])
        
        while(bookSet.size < 4) {
            bookSet.add(books[Math.floor(Math.random()*books.length)])
        }
        
        return {author: author,  books: _.shuffle(Array.from(bookSet))
        }

    }
    
    newGame = () => {
        this.setState(this.getInitialState);
    }
    
    state = this.getInitialState();
    
    render() {
        return(
            <div className='top container'>
                <Header />
                <Quiz author={this.state.author} books={this.state.books} handleNewGame={this.newGame}/>
                <Footer />
            </div>
            );
    }
}

class Book extends React.Component {
    static propTypes = {
        title: React.PropTypes.string.isRequired
    }
    handleClick = () => {
        this.props.onBookSelected(this.props.title)
    }
    
    render() {
        return(
            <div onClick={this.handleClick}className='answer'>
                <h4>{this.props.title}</h4>
            </div>
            );
    }
}