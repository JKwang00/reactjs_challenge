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

const PrintSection = (data, title_name) => {
    return (
        data && data.length > 0 &&
        <Section
            title={title_name}
            children={
                data.map( show => {
                    return (
                        <Poster
                            key={show.id}
                            id={show.id}
                            imageUrl={show.poster_path}
                            title={show.original_name}
                            rating={show.vote_average}
                            year={show.first_air_date.substring(0, 4)}
                            isMovie={false}
                        />
                );
            })
        }/>
    );
}



const TVPresenter = ({topRated, popular, airingToday, error, loading}) => {
    return (
        <>
            <Helmet>
                <title>TV Shows | MovieFlex</title>
            </Helmet>
            {loading ? <Loader/> : (
                <Container>
                    {PrintSection(topRated,"topRated")}
                    {PrintSection(popular,"popular")}
                    {PrintSection(airingToday,"airingToday")}
                    {error && <Message text={error} />}
                </Container>
            )}
        </>
    );
}

export default TVPresenter;