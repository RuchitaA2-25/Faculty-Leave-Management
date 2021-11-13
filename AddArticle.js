import React, { useState } from 'react';
import styled from "styled-components";
import axios from "axios";

const AddArticle = () => {
    const [name, setName] = useState("");
    const [designation, setDesignation] = useState("");
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [dutyleave, setDutyleave] = useState("");
    const [medicalleave, setMedicalleave] = useState("");
    const [casualleave, setCasualleave] = useState("");
    const [reason, setReason] = useState("");
    const [alternativefaculty, setAlternativefaculty] = useState("");

    const changeOnClick = e => {
        e.preventDefault();

        const articles = {
            name,
            designation,
            from,
            to,
            dutyleave,
            medicalleave,
            casualleave,
            reason,
            alternativefaculty
        };

        setName("");
        setDesignation("");
        setFrom("");
        setTo("");
        setDutyleave("");
        setMedicalleave("");
        setCasualleave("");
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
    <input type="text" value={name} onChange={e => setName(e.target.value)} className="form-control" placeholder="Name"/>
  </div><br/>

  <div className="form-group">
    <label htmlFor="designation">Designation</label>
    <input type="text" value={designation} onChange={e => setDesignation(e.target.value)} className="form-control" placeholder="Designation"/>
  </div><br/>

  <div className="form-group">
    <label htmlFor="from">Date-From </label>
    <input type="date" value={from} onChange={e => setFrom(e.target.value)} className="form-control" />
  </div><br/>

  <div className="form-group">
    <label htmlFor="to">Date-To</label>
    <input type="date" value={to} onChange={e => setTo(e.target.value)} className="form-control" />
  </div><br/>


 <div class="form-group">
    <label htmlFor="exampleFormControlSelect1">Type of Leave</label>
    <select class="form-control" id="exampleFormControlSelect1">
    <option></option>
    <option htmlFor="dutyleave" value={dutyleave} onChange={e => setDutyleave(e.target.value)} className="form-control">Duty Leave</option>
    <option htmlFor="medicalleave" value={medicalleave} onChange={e => setMedicalleave(e.target.value)} className="form-control">Medical Leave</option>
    <option htmlFor="casualleave" value={casualleave} onChange={e => setCasualleave(e.target.value)} className="form-control">Casual Leave</option>
    </select>
  </div><br/>

  <div className="form-group">
    <label htmlFor="reason">Reason</label>
    <textarea value={reason} onChange={e => setReason(e.target.value)} className="form-control" rows="3"></textarea>
  </div>
  <br/>

  

  <div className="form-group">
        <label htmlFor="alternativefaculty"> Alternative Faculty Name </label>
    <input type="text" value={alternativefaculty} onChange={e => setAlternativefaculty(e.target.value)} className="form-control" placeholder="Name"/>
  </div><br/>

  <button type="submit" className="btn btn-primary">Submit</button>
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