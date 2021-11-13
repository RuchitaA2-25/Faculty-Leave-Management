import React from 'react';
import styled from 'styled-components';

const Header = () => {
    return(<MainContainer></MainContainer>
    );
    
};

export default Header;

//MAIN CONTAINER
const MainContainer = styled.header`
 background: url(../../images/banner.png)no-repeat center/cover;
 height: 13rem;
 h1{
    transform: translate(-50%, -60%);
    color: black;
    font-weight: 900;
    position: absolute;
    top: 10%;
    left: 50%;
 }
`;