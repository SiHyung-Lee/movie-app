import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Top = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #000;
    height: 64px;
    width: 100vw;
    padding: 0 50px;
    box-sizing: border-box;
    z-index: 10;
    transition: top 0.2s linear;
`;

const Menu = styled.ul`
    display: flex;
`;

const MenuItem = styled.li`
    margin-right: 15px;
    a {
        padding: 0.5rem;
        color: ${(props) => (props.current ? "#ffd231" : "#fff")};
    }
`;

export default withRouter(({ location: { pathname } }) => (
    <Top>
        <Menu>
            <MenuItem current={pathname === "/" || pathname.includes("/movie")}>
                <Link to='/'>Movies</Link>
            </MenuItem>
            <MenuItem
                current={pathname === "/tv" || pathname.includes("/show")}>
                <Link to='/tv'>TV Shows</Link>
            </MenuItem>
            <MenuItem current={pathname === "/search"}>
                <Link to='/search'>Search</Link>
            </MenuItem>
        </Menu>
    </Top>
));
