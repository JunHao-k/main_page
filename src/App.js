import React from 'react'
import './App.css';


class App extends React.Component{
  state = {
    postArr: [
      {
        image: require('./weather.jpg').default,  
        date: '14th Jan 2021',
        title: 'Your Meteorological Service' ,
        text: 'Remember your umbrella!',
        link: 'https://junhao-k.github.io/weather_forecast/',
        
      },
      {
        image: require('./musicPict.jpg').default,  
        date: '14th Jan 2021',
        title: 'Beatbox',
        text: 'Born out of my interest in coding and music. Enjoy this piece of creation!',
        link: 'https://junhao-k.github.io/beatbox/',
        
      },
      {
        image: require("./guessNum.jpg").default,
        date: '14th Jan 2021',
        title: 'Guess the Number',
        text: 'Favourite game amongst friends to decide who gets to do the dirty work!',
        link: 'https://junhao-k.github.io/Guess-the-Number/',
      },
      {
        image: require('./ship.jpg').default,
        date: '14th Jan 2021',
        title: 'Battleship',
        text: 'My first solo project',
        link: 'https://junhao-k.github.io/Battleship/',
      }
    ],
  }

  
  displayPosts(){
    let posts = []
    
    for(let i of this.state.postArr){

      posts.push(
        <a href = {i.link} style = {{textDecoration: 'none'}}>
        <div class = 'post'>
          <div class = 'post-image' style = {{backgroundImage: `url(${i.image})`}}></div>
          <div class = 'post-content' >
            <div class = 'post-date' >{i.date}</div>
            <div class = 'post-title'>{i.title}</div>
            <div class = 'post-text'>{i.text}</div>
          </div>
        </div>
        </a>
      )
    }
  return posts
  }

  render(){
    return (
      <div className="App">
      
      <header>
          <div class = "profile-image"></div>
          <div class = "profile-name">Jun Hao</div>
          <div class = "subtext">Welcome to my world!</div>
          <div class = "subtext">Projects listed are built using ReactJS.</div>
      </header>
      
      <div class = 'main'>
        <div class = 'main-container'>
            {this.displayPosts()}
        </div>
      </div>
        <footer>
          <p>Made with &hearts; by Jun Hao</p>
        </footer>
      </div>
  
    )  
  }

}

export default App;
