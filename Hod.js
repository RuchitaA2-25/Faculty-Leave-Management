import React from 'react';
import styled from 'styled-components';
import spinner from './spinner.gif';
import './Hod.css';

const Hod = ({posts}) => {
    return (
        <MainContainer>
                {!posts.length ? (
                     <img src ={spinner} alt="loading..."/>
                ) : (
                posts.map(( article,key ) => (
                <div className="container"key={key}>
                    <table>
                    <tr>
                        <th>Name</th>
                        <th>Designation</th>
                        <th>Date-From</th>
                        <th> Date-To</th>
                        <th>Type of Leave</th>
                        <th>Reason</th>
                        <th>Alternative Faculty</th>
                    </tr>
                    <tr>
                        <td>{article.name}</td>
                        <td>{article.designation}</td>
                        <td>{article.from}</td>
                        <td>{article.to}</td>
                        <td>{article.typeofleave}</td>
                        <td>{article.reason}</td>
                        <td>{article.alternativefaculty}</td>
                    </tr>

                
                    </table><br></br>
               
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

export default Hod;

//MAIN CONTAINER
const MainContainer = styled.div`
margin: 4rem 0;

img {
    width: 10rem;
    display: block;
    margin: 0 auto;
}
`;
