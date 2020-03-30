import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/*
Display a list of movies where each movie contains a list of users that favorited it.

For detailed instructions, refer to instructions.md.
*/

const profiles = [
  {
    id: 1,
    userID: '1',
    favoriteMovieID: '1',
  },
  {
    id: 2,
    userID: '2',
    favoriteMovieID: '1',
  },
  {
    id: 3,
    userID: '4',
    favoriteMovieID: '5',
  },
  {
    id: 4,
    userID: '5',
    favoriteMovieID: '2',
  },
  {
    id: 5,
    userID: '3',
    favoriteMovieID: '5',
  },
  {
    id: 6,
    userID: '6',
    favoriteMovieID: '4',
  },
];

const users = {
  1: {
    id: 1,
    name: 'Jane Jones',
    userName: 'coder',
  },
  2: {
    id: 2,
    name: 'Matthew Johnson',
    userName: 'mpage',
  },
  3: {
    id: 3,
    name: 'Autumn Green',
    userName: 'user123',
  },
  4: {
    id: 3,
    name: 'John Doe',
    userName: 'user123',
  },
  5: {
    id: 5,
    name: 'Lauren Carlson',
    userName: 'user123',
  },
  6: {
    id: 6,
    name: 'Nicholas Lain',
    userName: 'user123',
  },
};

const movies = {
  1: {
    id: 1,
    name: 'Planet Earth',
  },
  2: {
    id: 2,
    name: 'Selma',
  },
  3: {
    id: 3,
    name: 'Million Dollar Baby',
  },
  4: {
    id: 4,
    name: 'Forrest Gump',
  },
  5: {
    id: 5,
    name: 'Get Out',
  },
};
//we can make the profile to be our main array.
//there should be a list of a movie that we iterate through, 
// for each list of the movie, there is a variable called id
// we then iterate through the list of 

//we can iterate through the profile array to find and turn them into a list 
// of a list called combinedList, basically if the favoriteMovieID is the same
// the combinedList should have five elements/sublist (this can easily be get from the movies.length

// if the sublist has the length of zero, we still printout the name by saying movies[id].name but we say nobody likes it
// if the sublist has non-zero length, we will iterate throught the  whole list, but this time we will make another for loop that print the users[users.id] instead
class App extends Component {
  constructor (props){
   super(props);
    this.combinedList = {}; // this is the film list, it should have 5 substring 
    var i;
    for ( i = 1; i < 6; i++)
    {
      if ( i===Number(profiles[i].favoriteMovieID))
      {
        //if (this.combinedList[i].length ==0)
          this.combinedList[i].push(profiles[i].userID);
      }
      
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>How Popular is Your Favorite Movie?</h2>
		<Dashboard
			
    
    ));
		
      </div>
    );
  }
}

export default App;
