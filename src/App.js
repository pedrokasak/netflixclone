import React, { useEffect,useState } from 'react';
import Tmdb from './Tmdb';
import './App.css';
import MovieRow from './components/MovieRow';
import FeatureMovie from './components/FeatureMovie';


export default () => {

  const[movieList, setMovieList] = useState([]);
  const[featuredData, setFeaturedData] = useState(null);

  useEffect(()=> {
    const loadAll = async ()  => {
      //Consumindo a lista total de filmes
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      //Usando a Featured
      let original = list.filter(i=>i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (original[0].items.results.length - 1));
      let chosen = original[0].items.results[randomChosen];
      console.log(chosen)
    }

      loadAll();
  }, []);

  return (
      <div className="page">
        {featuredData &&
          <FeatureMovie item={featuredData}/>
        }   
        <section className="lists">
          {movieList.map((item, key)=> (
            <MovieRow key={key} title={item.title} items={item.items} />
          ))}
        </section>
      </div>

  );

}