import React, { useState, useEffect } from 'react';
import { Card, Image, Placeholder } from 'semantic-ui-react'

const Character = ({ character }) => {
    const [characterInfo, setCharacterInfo] = useState(null);
    // const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!character) return;
        // setLoading(true);
        const axios = require('axios');

        const config = {
        method: 'get',
        url: `https://kitsu.io/api/edge/anime-characters/${character.id}/character`,
        headers: { }
        };

        axios(config)
        .then(function (response) {
            setCharacterInfo(response.data.data);
            // setLoading(false);
            console.log('character', response.data.data);
        })
        .catch(function (error) {
        console.log('anime list', error);
        });

    }, [character]);

    return (
        <Card>
              {!characterInfo ? (
                <Placeholder>
                  <Placeholder.Image square />
                </Placeholder>
              ) : (
                //   <div>test</div>
                <div>
                    <Image src={characterInfo && characterInfo.attributes.image ? characterInfo.attributes.image.original : null} />
                </div>
                
              )}

              <Card.Content>
                {!characterInfo ? (
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
                    <Card.Header>{characterInfo && characterInfo.attributes.canonicalName}</Card.Header>
                    {/* <Card.Meta>{card.date}</Card.Meta> */}
                    <Card.Description>
                        {/* <Icon name="star" /> {anime.attributes.averageRating}
                        <Icon name="heart" /> {anime.attributes.favoritesCount} */}
                    </Card.Description>
                  </div>
                )}
              </Card.Content>
            </Card>
    );
}

export default Character;