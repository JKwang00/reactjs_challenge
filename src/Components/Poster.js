import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    font-size:12px;
`;

const Image = styled.div`
    background-image:url(${props=>props.bgUrl});
    height: 200px;
    background-size: cover;
    border-radious: 4px;
    background-position:center center;
    transition: 0.1s linear;
`;

const Rating = styled.span`
    bottom: 5px;
    right: 5px;
    position: absolute;
    opacity: 0;
    transition: 0.1s linear;
`;

const ImageContainer = styled.div`
    margin-bottom: 5px;
    position:relative;
    &:hover {
        ${Image} {
            opacity: 0.3;
        }
        ${Rating} {
            opacity:1 ;
        }
    }
`;

const Title = styled.span`
    display: block;
    font-size: 12px;
    margin-bottom: 3px;
`;
const Year = styled.span`
    font-size: 10px;
    color:rgba(255, 255, 255, 0.5);
`;

const Poster = ({id, imageUrl, title, rating, year, isMovie = false}) => (
    <Link to={ isMovie ? "/movie/"+id : "/show/"+id }>
        <Container>
            <ImageContainer>
                <Image bgUrl={
                        imageUrl ? 'https://image.tmdb.org/t/p/w500'+imageUrl : require("../assets/noPosterSmall.jpg")
                    }
                />
                <Rating>
                    <span role="img">⭐</span>
                    {rating}/10
                </Rating>
                
            </ImageContainer>
            <Title>{title.length > 15 ? title.substring(0,15)+"..." : title}</Title>
            <Year>{year}</Year>
        </Container>
    </Link>
);

export default Poster;