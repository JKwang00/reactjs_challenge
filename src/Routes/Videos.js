import React from "react";
const Videos = ({videos: {results}}) => {
    return (
        results.map( (video) => {
            return (
                <div key={video.id}>
                    <iframe title="trailer" src={`https://youtube.com/embed/${video.key}`} width="600px"
                            height="400px"></iframe>
                </div>
            )
        })
    );
}
export default Videos;