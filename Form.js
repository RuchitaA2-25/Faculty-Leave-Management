import React, { useState } from 'react';
import styled from "styled-components";
import axios from "axios";
import { set } from 'mongoose';

const AddArticle = () => {
    const [name, setName] = useState("");
    const [designation, setDesignation] = useState("");
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [typeofleave, setTypeofleave] = useState(""); 
    const [reason, setReason] = useState("");
    const [alternativefaculty, setAlternativefaculty] = useState("");

    const changeOnClick = e => {
        e.preventDefault();

        const articles = {
            name,
            designation,
            from,
            to,
            typeofleave,
            reason,
            alternativefaculty
        };

        setName("");
        setDesignation("");
        setFrom("");
        setTo("");
        setTypeofleave("");
        setReason("");
        setAlternativefaculty("");

        axios.post("/articles/add", articles)
        .then(res => console.log(res.data))
        .catch(err => {console.log(err);
        });
    };

    return (
        <AddArticleContainer>
        <div className="container">
            <h1>Leave Application</h1>
        <form onSubmit={changeOnClick} encType ="multipart/form-data">
        <div className="form-group">
        <label htmlFor="name"> Name </label>
    <input type="text" value={name} onChange={e => setName(e.target.value)} className="form-control" placeholder="Name" required/>
  </div><br/>

  <div className="form-group">
    <label htmlFor="designation">Designation</label>
    <input type="text" value={designation} onChange={e => setDesignation(e.target.value)} className="form-control" placeholder="Designation" required/>
  </div><br/>

  <div className="form-group">
    <label htmlFor="from">Date-From </label>
    <input type="date" value={from} onChange={e => setFrom(e.target.value)} className="form-control" required/>
  </div><br/>

  <div className="form-group">
    <label htmlFor="to">Date-To</label>
    <input type="date" value={to} onChange={e => setTo(e.target.value)} className="form-control" required/>
  </div><br/>


 

<div className="form-group">
    <label htmlFor="typeofleave">Type of Leave</label>
    <input type="text" value={typeofleave} onChange={e => setTypeofleave(e.target.value)} className="form-control" placeholder="Type of Leave" required/>
  </div><br/>

  <div className="form-group">
    <label htmlFor="reason">Reason</label>
    <textarea value={reason} onChange={e => setReason(e.target.value)} className="form-control" rows="3" required></textarea>
  </div>
  <br/>

  

  <div className="form-group">
        <label htmlFor="alternativefaculty"> Alternative Faculty Name </label>
    <input type="text" value={alternativefaculty} onChange={e => setAlternativefaculty(e.target.value)} className="form-control" placeholder="Name" required/>
  </div><br/>

  <button type="submit" className="btn btn-primary" onClick={() => {alert("You're Leave Application has been placed successfully.");}}>Submit</button>
</form>
</div>
</AddArticleContainer>
    );
    
};

export default AddArticle;

//MAIN CONTAINER 
const AddArticleContainer = styled.div`
margin: 1.5rem auto;
padding: 3rem;
width: 31.25rem;

h1{
    font-weight: 900;
    color: #e22027;

}

.btn-primary{
    margin-top: 2rem;
    background: #e22027;
    border:none;
    &:hover {
        background: red;

    }
}
`;