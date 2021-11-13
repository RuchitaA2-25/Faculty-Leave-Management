import React from 'react';
import styled from 'styled-components';

export const Footer = () => {
    return <FooterContainer>
        <br/>
        
        &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
     <b> Toll Free</b> : 1800 31300 1566
     &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
   
     <b>Phone </b>: +91 90110 39800 / 90110 22567
     &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
   
     <b>Email</b> : registrar@sanjayghodawatuniversity.ac.in
     

    </FooterContainer>; 
};
export default Footer;

//FOOTER CONTAINER
const FooterContainer = styled.footer`
background: #fde783f2;
height: 3.5rem;

left: 0;
bottom: 0;
width: 100%;
`;