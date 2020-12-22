import React from "react";

const Seasons = ({seasons}) => {
    return (
        <div>
            {
                seasons.map((season, index) => {
                    return (
                        <div key={index}>
                            <div style={ {paddingBottom: '10px'} }>
                                {season.poster_path && (
                                <img
                                    src={`https://image.tmdb.org/t/p/w200${season.poster_path}`}
                                    width="200px" alt={season.name} />
                                )}
                                <p>🔳{season.name} ({season.episode_count} episode{season.episode_count > 1 && `s`})</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Seasons;