import React from 'react';
import styled from 'styled-components';
import Helmet from "react-helmet";
import Section from '../../Components/Section';
import Loader from '../../Components/Loader';
import Message from '../../Components/Message';
import Poster from '../../Components/Poster';

const Container = styled.div`
    padding:0px 20px;
`;

const PrintSection = data => {
    return (
        data && data.length > 0 &&
        <Section
            title="now Playing"
            children={
                data.map( movie => {
                    return (
                        <Poster
                            key={movie.id}
                            id={movie.id}
                            imageUrl={movie.poster_path}
                            title={movie.original_title}
                            rating={movie.vote_average}
                            year={movie.release_date.substring(0, 4)}
                            isMovie={true}
                        />
                );
            })
        }/>
    );
}

const MoviePresenter = ({nowPlaying, upcomming, popular, error, loading}) => {
    return (
        <>
            <Helmet>
                <title>Movies | MovieFlex</title>
            </Helmet>
            {loading ? <Loader/> : (
                <Container>
                    <Helmet>
                        <title>Movies | MovieFlex</title>
                    </Helmet>
                    {PrintSection(nowPlaying)}
                    {PrintSection(upcomming)}
                    {PrintSection(popular)}

                    {error && <Message text={error}/>}

                </Container>
            )}
        </>
    );

}

export default MoviePresenter;