import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.header`
    color: white;
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    padding: 0px 10px;
    background-color: rgba(20, 20, 20, 0.8);
    z-index: 10;
    box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul`
    display:flex;
`;

const Item = styled.li`
    display: inline-block;
    width: 70px;
    height: 50px;
    border-bottom: 3px solid
        ${props => props.current ? "#3498db" : "transparent"};
    transition:border-bottom .5s ease-in-out
`;

const SLink = styled(Link)`
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const HeaderCi = ( {location:{pathname}} ) => {
    return (
    <Header>
        <List>
            <Item current={pathname==="/" || pathname.includes("movie")}>
                <SLink to="/">Movies</SLink>
            </Item>
            <Item current={pathname==="/tv" || pathname.includes("show")}>
                <SLink to="/tv">TV</SLink>
            </Item>
            <Item current={pathname==="/search"}>
                <SLink to="/search">Search</SLink>
            </Item>
        </List>
    </Header>);
};

export default withRouter(HeaderCi);