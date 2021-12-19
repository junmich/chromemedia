import React, { useEffect, useState } from 'react';
import { Icon, Card, Image, Placeholder } from 'semantic-ui-react'

const Anime = ({ anime, selectAnime }) => {
    const [favorite, setFavorite] = useState(false);
    const [star, setStar] = useState(false);
    useEffect(() => {
        let favorites = localStorage.getItem('favorites');
        favorites = favorites ? JSON.parse(favorites) : [];
        console.log(favorites);
        if (favorites.filter(favorite => favorite == anime.id).length > 0) {
            setFavorite(true);
        };
        let stars = localStorage.getItem('stars');
        stars = stars ? JSON.parse(stars) : [];
        console.log(stars);
        if (stars.filter(star => star == anime.id).length > 0) {
            setStar(true);
        };
    }, []);
    const markFavorites=() => {
        let favorites = localStorage.getItem('favorites');
        favorites = favorites ? JSON.parse(favorites) : [];
        const index = favorites.indexOf(anime.id);
        if (index > -1) {
            favorites.splice(index, 1);
            setFavorite(false);
        } else {
            favorites.push(anime.id);
            setFavorite(true);
        }
        localStorage.setItem('favorites', JSON.stringify(favorites));
      
    };

    const markStars=() => {
        let stars = localStorage.getItem('stars');
        stars = stars ? JSON.parse(stars) : [];
        const index = stars.indexOf(anime.id);
        if (index > -1) {
            stars.splice(index, 1);
            setStar(false);
        } else {
            stars.push(anime.id);
            setStar(true);
        }
        localStorage.setItem('stars', JSON.stringify(stars));
    };
    return (
        <Card>
              {!anime ? (
                <Placeholder>
                  <Placeholder.Image square />
                </Placeholder>
              ) : (
                <Image onClick={() => selectAnime(anime)} src={anime.attributes.posterImage.medium} />
              )}

              <Card.Content>
                {!anime ? (
                  <Placeholder>
                    <Placeholder.Header>
                      <Placeholder.Line length='very short' />
                      <Placeholder.Line length='medium' />
                    </Placeholder.Header>
                    <Placeholder.Paragraph>
                      <Placeholder.Line length='short' />
                    </Placeholder.Paragraph>
                  </Placeholder>
                ) : (
                  <div>
                    <Card.Header>{anime.attributes.canonicalTitle}</Card.Header>
                    <Card.Description>
                        <span style={{ marginRight: 5 }}><Icon name="star" size="large" color={star ? 'yellow': 'black'} onClick={markStars}/> {anime.attributes.averageRating}</span>
                        <span style={{ marginRight: 5 }}><Icon name="heart" size="large" color={favorite ? 'red': 'black'} onClick={markFavorites} /> {anime.attributes.favoritesCount}</span>
                    </Card.Description>
                  </div>
                )}
              </Card.Content>
            </Card>
    )
}

export default Anime;
