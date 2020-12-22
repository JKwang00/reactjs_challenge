import React from "react";
import { tvApi } from "../api";

const Seasons = ({seasons}) => {
    return (
        <div>
            {
                seasons.map((season, index) => {
                    return (
                        <div key={index}>
                            <p style={ {paddingBottom: '10px'} }>
                                <img
                                    src={season.poster_path ? `https://image.tmdb.org/t/p/w200${season.poster_path}` : require("./assets/noPosterSmall.jpg")}
                                    width="200px" alt={season.name}/><br/>
                                🔳{season.name} ({season.episode_count} episode{season.episode_count > 1 && `s`})
                            </p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Seasons;