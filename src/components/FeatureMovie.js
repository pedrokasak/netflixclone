import React from "react";
import "./FeatureMovie.css";

export default ({item}) => {
    console.log(item)

    let firstDate = new Date(item.first_air_date)
    let genres = [];
    for (let i in item.genres) {
        genres.push(item.genres[i].name)
    }
    console.log(genres)
  return (
    <section className="featured" style={{
        backgroundSize: 'cover',
        backgroundPosition:'center',
        backgroundImage:`url(https://image.tmdb.org/t/p/original/${item.backdrop_path})`
    }}>
      <div className="featured--vertical">
        <div className="featured--horizontal">
            <div className="featured--name">{item.name}</div>
            <div className="featured--info">
                <div className="featured--points">Nota {item.vote_average}</div>     
                <div className="featured--year">{firstDate.getFullYear()}</div>     
                <div className="featured--seasons">{item.number_of_seasons}</div>     
                <div className="featured--overview">{item.overview}</div>        
                <div className="featured--buttons">
                <a href={`/watch/${item.id}`}>► Assistir</a>
                <a href={`/list/add/${item.id}`}>+ Minha Lista</a>
                </div>
                <div className="featured--genres"><strong>Generos: </strong>{genres.join(', ')}</div>        
            </div>
        </div>
      </div>
    </section>
  );
};
