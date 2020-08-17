import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import "./App.css";

class App extends React.Component {
  constructor(props){
    super(props);
  }//생성자함수
  state={
    isLoading:true,
    movies:[]
  }
  getMovies=async()=>{ //axios기능이 끝날때 까지 기다려야함. 비동기 사용.
    const {data:{data:{movies}}}= await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    //async를 사용해야 await사용 가능
    
    //this.setState({movies:movies});
    this.setState({movies, isLoading:false});
  }
  componentDidMount(){
     this.getMovies();
  }

  render(){
    const {isLoading,movies}=this.state; //state 객체를 연결해 저장해줌.
   return(
    <section className="container">
   <div className="loader">
     {isLoading? <span className="loader__text">Loading...</span> 
      : (
        <div className="movies">
          {movies.map(movie=>{
   
     return <Movie key={movie.id} 
                  id={movie.id} year={movie.year} 
                  title={movie.title} summary={movie.summary}
                   poster={movie.medium_cover_image} genres={movie.genres}/>
   })}
        </div>
        )}</div>
   </section>
   ) 
  }
}

export default App;
