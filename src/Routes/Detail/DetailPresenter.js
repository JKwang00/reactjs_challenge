import React from 'react';
import styled from 'styled-components';
import Helmet from "react-helmet";
import { Route, Link, withRouter } from "react-router-dom";
import Loader from '../../Components/Loader';
import Production from "../Production";
import Videos from "../Videos";
import Seasons from "../Seasons";

const Container = styled.div`
    height: calc(100vh - 50px);
    width: 100%;
    position: relative;
    z-index:1;
    padding: 50px;
`;

const Content = styled.div`
    display: flex;
    width: 100%;
    position: relative;
    z-index: 1;
    height: 100%;
`;

const Cover = styled.div`
    width: 30%;
    background-image: url(${props=>props.bgImage});
    background-position: center center;
    background-size: cover;
    height: 100%;
    border-radius: 13px;
`;

const Backdrop = styled.div`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background-image: url(${props=>props.bgImage});
    background-position: center center;
    background-size: cover;
    filter: blur(3px);
    opacity: 0.5;
`;

const Data = styled.div`
    width: 70%;
    margin-left: 10px;
`;

const Title = styled.h3`
    font-size: 32px;
    margin-bottom: 10px;
`;

const ItemContainer = styled.div`
    margin: 20px 0;
`;

const Item = styled.span``;

const Divider = styled.span`
    margin:0 10px;
`;

const Overview = styled.p`
    font-size: 12px;
    opacity: 0.7;
    line-height: 1.5;
    width: 50%;
`;

const InsideMenu = styled.div`
  margin: 20px 0px;
`;

const List = styled.ul`
  display: flex;
`;

const ItemButton = styled.li`
  margin-right: 20px;
  text-transform: uppercase;
  font-weight: 600;
  border: 2px solid #1abc9c;
  padding: 5px;
  border-radius: 3px;
  background-color: ${props => (props.active ? "#1abc9c" : "#fff")};
  color: ${props => (props.active ? "white" : "black")};
`;

const DetailPresenter = withRouter(({location: { pathname }, results, loading, error, isMovie}) => {
    const parentPath = isMovie ? "movie" : "show";
    return loading ? (
        <>
            <Helmet><title>Loading | MovieFlex</title></Helmet>
            <Loader />
        </>
        ) : (
        <Container>
            <Helmet>
                <title>{results.original_title ? results.original_title : results.original_name} | MovieFlex</title>
            </Helmet>
            <Backdrop bgImage={"https://image.tmdb.org/t/p/w500"+results.backdrop_path} />
            <Content>
                <Cover bgImage={results.poster_path ? "https://image.tmdb.org/t/p/w500"+results.poster_path : require("../../assets/noPosterSmall.jpg")} />
                <Data>
                    <Title>{results.original_title ? results.original_title : results.original_name}</Title>
                    <ItemContainer>
                        <Item>
                            {
                                results.release_date
                                    ? results.release_date.substring(0,4)
                                    : results.first_air_date.substring(0,4)
                            }
                        </Item>
                        <Divider>▪</Divider>
                        <Item>
                            {
                                results.runtime
                                    ? results.runtime
                                    : results.episode_run_time[0]
                            } min
                        </Item>
                        <Divider>▪</Divider>
                        <Item>
                            {
                                results.genres &&
                                results.genres.map( (genre, index) => {
                                    return index === results.genres.length - 1 ? genre.name : `${genre.name} / `;
                                })
                            }
                        </Item>

                        { isMovie && (
                        <>
                            <Divider>▪</Divider>
                            <Item>
                                <a href={`https://www.imdb.com/title/${results.imdb_id}`} target="_blank" rel="noopener noreferrer">
                                    <img alt="IDMB" src="https://m.media-amazon.com/images/G/01/IMDb/BG_rectangle._CB1509060989_SY230_SX307_AL_.png" style={ {height:'14px'} } />
                                </a>
                            </Item>
                        </>
                        )}
                    </ItemContainer>
                    <Overview>{results.overview}</Overview>
                    <InsideMenu>
                        <List>
                            <ItemButton active={pathname === `/${parentPath}/${results.id}/Videos`}>
                                <Link to={`/${parentPath}/${results.id}/Videos`}>Videos</Link>
                            </ItemButton>
                            <ItemButton active={pathname === `/${parentPath}/${results.id}/Production`}>
                                <Link to={`/${parentPath}/${results.id}/Production`}>Production</Link>
                            </ItemButton>
                            { !isMovie && (
                                <ItemButton active={pathname === `/show/${results.id}/Seasons`}>
                                    <Link to={`/show/${results.id}/Seasons`}>Seasons</Link>
                                </ItemButton>
                            ) }
                        </List>
                    </InsideMenu>
                    <Route path={`/${parentPath}/:id/Videos`} component={ () => <Videos videos={results.videos} />} />
                    <Route path={`/${parentPath}/:id/Production`} component={ () => {
                        return <Production production={results.production_companies} countries={results.production_countries} />
                    }} />
                    <Route path={`/show/:id/Seasons`} component={ () => {
                        return <Seasons seasons={results.seasons}  />
                    }} />
                </Data>
            </Content>
            
        </Container>
    );
});

export default DetailPresenter;