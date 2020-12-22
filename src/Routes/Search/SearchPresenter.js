import React from 'react';
import styled from 'styled-components';
import Helmet from "react-helmet";
import Loader from '../../Components/Loader';
import Section from '../../Components/Section';
import Message from '../../Components/Message';
import Poster from '../../Components/Poster';

const Container = styled.div`
    padding:0px 20px;
`;

const Form = styled.form`
    margin-bottom: 50px;
    width: 100%;
`;

const Input = styled.input`
    all: unset;
    font-size: 28px;
    width: 100%;
`;

const SearchPresenter = ({
    movieResults,
    tvResults,
    searchTerm,
    error,
    loading,
    handleSubmit,
    updateTerm}) => {

        let MovieSection = '';
        let TvSection = '';

        if(movieResults && movieResults.length > 0) {
            MovieSection = 
                <Section title="Movie Results" children={
                        movieResults.map( movie => {
                            return (
                                <Poster
                                    id={movie.id}
                                    imageUrl={movie.poster_path}
                                    title={movie.original_title}
                                    rating={movie.vote_average}
                                    year={movie.release_date.substring(0, 4)}
                                    isMovie={true}
                                />
                            )
                        })
                    }
                />;
        } else if(movieResults && movieResults.length === 0) {
            MovieSection = <Message color="#95a5a6" text={"Not Find Movie for : "+searchTerm} />;
        }

        if(tvResults && tvResults.length > 0) {
            TvSection = 
                <Section
                    title="TV Results" children={
                        tvResults.map( show => {
                            return (
                                <Poster
                                    id={show.id}
                                    imageUrl={show.poster_path}
                                    title={show.original_name}
                                    rating={show.vote_average}
                                    year={show.first_air_date.substring(0, 4)}
                                    isMovie={false}
                                />
                            )
                        })
                    }
                />;
            } else if(tvResults && tvResults.length === 0) {
            TvSection = <Message color="#95a5a6" text="Not Find TV" />
        }
        return (
            <Container>
                <Helmet>
                    <title>Search | MovieFlex</title>
                </Helmet>
                <Form onSubmit={handleSubmit}>
                    <Input
                        placeholder="Serch Movie or TV Shows.."
                        value={searchTerm}
                        onChange={updateTerm}
                    />
                </Form>
                
                {
                    loading ? <Loader /> :
                        <>
                            {MovieSection}
                            {TvSection}
                        </>
                }
                {error && <Message color="#e74c3c" text={error} />}
            </Container>
        );
    }

export default SearchPresenter;