import React, {useEffect, useState} from 'react';
import Anime from './Anime';
import axios from 'axios';
import Topbar from './Topbar';
import { Card } from 'semantic-ui-react'

const AnimeList = ({selectAnime }) => {
    
    const [animeList, setAnimeList] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const [links, setLinks] = useState(null);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);


      useEffect(() => {
        if (!isFetching) return;
        fetchMoreListItems();
      }, [isFetching]);


      const fetchMoreListItems = () => {
        if (links && links.next) {
            callAnime(links.next).
            then(function (response) {
                setAnimeList(prevState => [...prevState, ...response.data.data]);
                localStorage.setItem('animes', JSON.stringify(animeList));
                setLinks(response.data.links);
              console.log(response.data.links);
            })
            .catch(function (error) {
              console.log(error);
            });
        }
      };

      const handleScroll = () => {
          console.log(window.innerHeight + document.documentElement.scrollTop !==
            document.documentElement.offsetHeight, window.innerHeight, document.documentElement.scrollTop,
            document.documentElement.offsetHeight, 'isFetching' +isFetching)
        if (
          window.innerHeight + document.documentElement.scrollTop !==
          document.documentElement.offsetHeight
        )
        return;
        setIsFetching((prevState) => !prevState);
      };

      const callAnime = (url) => {
        const config = {
            method: 'get',
            url,
            headers: { }
          };
          
          return axios(config);
      }

    useEffect(() => {
        callAnime('https://kitsu.io/api/edge/anime')
          .then(function (response) {
              setAnimeList(response.data.data);
              setLinks(response.data.links);
              localStorage.setItem('animes', JSON.stringify(response.data.data));
            console.log(response.data.links);
          })
          .catch(function (error) {
            console.log(error);
          });
          
    }, []);

    const animeFromLocal = () => {
        let animes = localStorage.getItem('animes');
        return animes ? JSON.parse(animes): [];
    }

    const filterStar = () => {
        let stars = localStorage.getItem('stars');
        stars = stars ? JSON.parse(stars): [];

        const newArray = animeFromLocal().filter(anime => {
            return stars.indexOf(anime.id) > -1;
        });

        setAnimeList(newArray);

    }

    const filterHeart = () => {
        let favorites = localStorage.getItem('favorites');
        favorites = favorites ? JSON.parse(favorites): [];

        const newArray = animeFromLocal().filter(anime => {
            return favorites.indexOf(anime.id) > -1;
        });

        setAnimeList(newArray);

    }

    return (
        <div style={{ margin: 10 }}>
            <Topbar results={animeList.length} filterStar={filterStar} filterHeart={filterHeart} />
             <Card.Group doubling itemsPerRow={3} stackable>
             {animeList.map((anime, id) => (
                 <Anime selectAnime={selectAnime} key={id} anime={anime} />
          ))}
            {isFetching && "Fetching more list items..."}
             </Card.Group>
        </div>

    )
}

export default AnimeList;
