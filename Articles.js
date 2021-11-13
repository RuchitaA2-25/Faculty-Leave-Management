import React from 'react';
import styled from 'styled-components';
import spinner from './spinner.gif';

const Articles = ({posts}) => {
    return (
        <MainContainer>
                {!posts.length ? (
                     <img src ={spinner} alt="loading..."/>
                ) : (
                posts.map(( article,key ) => (
                <div className="container"key={key}>
                <h4>Name: {article.name}</h4>
                <h4>Designation: {article.designation}</h4>
                <h4>Date-From: {article.from}</h4>
                <h4>Date-To: {article.to}</h4>
                <h4>Duty Leave{article.dutyleave}</h4>
                <h4>Medical Leave{article.medicalleave}</h4>
                <h4>Casual Leave{article.casualleave}</h4>
                <h4>Reason: {article.reason}</h4>
                <h4>Alternative Facutly: {article.alternativefaculty}</h4>
                <div className="row">
                    <div className="col-sm-2">
                        <a href="#" className="btn btn-outline-success">Accept</a>
                    </div>
                    <div className="col-sm-2">
                        <a href="#" className="btn btn-outline-danger">Reject</a>
                    </div>
                </div>
                <hr/>
                </div>
                 ) ))}
        </MainContainer>
    );
};

export default Articles;

//MAIN CONTAINER
const MainContainer = styled.div`
margin: 4rem 0;

img {
    width: 10rem;
    display: block;
    margin: 0 auto;
}
`;
