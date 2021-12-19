import React, { useState, useEffect } from 'react';
import { Header, List } from 'semantic-ui-react'


const Episode = ({ episode }) => {
    const [checkEpisode, setCheckEpisode] = useState(false);
    useEffect(() => {
        let episodes = localStorage.getItem('episodes');
        episodes = episodes ? JSON.parse(episodes) : [];
        console.log(episodes);
        if (episodes.filter(episodeCheck => episodeCheck == episode.id).length > 0) {
            setCheckEpisode(true);
        };
    }, []);

    const markEpisode=() => {
        let episodes = localStorage.getItem('episodes');
        episodes = episodes ? JSON.parse(episodes) : [];
        const index = episodes.indexOf(episode.id);
        if (index > -1) {
            episodes.splice(index, 1);
            setCheckEpisode(false);
        } else {
            episodes.push(episode.id);
            setCheckEpisode(true);
        }
        localStorage.setItem('episodes', JSON.stringify(episodes));
    };
    return (
            <List.Item>
                <List.Icon onClick={markEpisode} name='check' size="large" color={checkEpisode ? "green": "black"} />
                <List.Content>{episode.attributes.airdate}  {episode.attributes.number} {episode.attributes.canonicalTitle}</List.Content>
            </List.Item>
    );
}

export default Episode;


