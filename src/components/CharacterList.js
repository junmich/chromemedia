import React, { useState, useEffect } from 'react';
import Character from './Character';
import { Card, Header } from 'semantic-ui-react'


const CharacterList = ({ anime }) => {
    const [characterList, setCharacterList] = useState([]);
    useEffect(() => {
        console.log('anime');
        const axios = require('axios');

        const config = {
        method: 'get',
        url: `https://kitsu.io/api/edge/anime/${anime.id}/characters`,
        headers: { }
        };

        axios(config)
        .then(function (response) {
            setCharacterList(response.data.data);    
            console.log('character list',response.data.data);
        })
        .catch(function (error) {
        console.log('character list', error);
        });

    }, []);

    return (
        <div>
            <Header as="h3">Characters</Header>
                <Card.Group doubling itemsPerRow={5} stackable>
                    {characterList.map((character, id) => (
                        <Character key={id} character={character} />
                ))}
            </Card.Group>
        </div>
    );
}

export default CharacterList;

