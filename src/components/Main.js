import React, { useState, useEffect } from 'react';

import Header from './Header';
import AnimeList from './AnimeList';
import AnimePage from './AnimePage';


const Main = () => {
    const [anime, setAnime] = useState(null);
    const [results, setResults] = useState(0);
    
    const handleBack = () => {
        setAnime(null);
    }

    const selectAnime = (anime) => setAnime(anime);

    const AnimeView = () => {
        return (
            <div>
                <Header title = {anime.attributes.canonicalTitle} />
                <AnimePage anime={anime} handleBack={handleBack} />
            </div>
        )
    };

    const AnimeListView = () => {
        return (
            <div>
                <Header title = "Anime List" />
                {/* <Topbar results={results} /> */}
                <AnimeList selectAnime={selectAnime} setResults={setResults}  />
            </div>
        )
    }

    return (
        <div>
            {anime ? <AnimeView /> : <AnimeListView />}
        </div>
    );
}

export default Main;