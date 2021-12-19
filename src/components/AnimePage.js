import React from 'react';
import CharacterList from './CharacterList';
import Episodes from './Episodes';
import { Button, Icon, Grid, Image } from 'semantic-ui-react'

const AnimePage = ({ anime, handleBack }) => {
    
    const loading = false;
    return (
        <div style={{ margin: 10 }}>
            <Button icon labelPosition='left' onClick={handleBack}>
                <Icon name='left arrow' />
                Back
            
            </Button>
            <Grid celled>
                <Grid.Row>
                    <Grid.Column width={3}>
                        <Image src={anime.attributes.posterImage.medium} />
                        <div>
                            <Icon name="star" /> {anime.attributes.averageRating} from {anime.attributes.userCount}
                        </div>
                        <div>
                            <Icon name="heart" /> {anime.attributes.favoritesCount} Rank # {anime.attributes.ratingRank}
                        </div>

                        <div>
                            Rated {anime.attributes.ageRating} {anime.attributes.ageRatingGuide}
                        </div>
                        <div>
                            Aired on {anime.attributes.startDate}
                        </div>
                        <div>
                            Ongoing or Ended {anime.attributes.endDate}
                        </div>
                        <div>
                           Type: {anime.attributes.showType}
                        </div>
                    </Grid.Column>
                    <Grid.Column width={13}>
                        <p>
                            {`${anime.attributes.description}`}
                        </p>
                        <CharacterList anime={anime} />
                        <Episodes anime={anime} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    );
}

export default AnimePage;
