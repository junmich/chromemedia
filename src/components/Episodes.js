import React, { useState, useEffect } from 'react';
import { Header, List } from 'semantic-ui-react'
import Episode from './Episode';


const Episodes = ({ anime }) => {
    const [episodeList, setEpisodeList] = useState([]);
    useEffect(() => {
        console.log('anime');
        const axios = require('axios');

        const config = {
        method: 'get',
        url: `https://kitsu.io/api/edge/anime/${anime.id}/episodes`,
        headers: { }
        };

        axios(config)
        .then(function (response) {
            setEpisodeList(response.data.data);    
            console.log('character list',response.data.data);
        })
        .catch(function (error) {
        console.log('character list', error);
        });

    }, []);

    return (
        <div>
            <Header as="h3">Episodes</Header>
            <List>
                    {episodeList.map((episode, id) => (
                        <Episode key={id} episode={episode} />
                ))}
            </List>
        </div>
    );
}

export default Episodes;

