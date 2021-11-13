import React from 'react'
import { Link } from "react-router-dom";
import {
    faGoogle,
    faFacebook,
    faYoutube,
    faLinkedin
  } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import banner1 from '../images/banner1.png';
// import sguKolhapur from '../images/sgu-kolhapur.jpg';
import './Homepage.css';
const Homepage = () => {
    return (
<div>
    <link href="https://kit.fontawesome.com/a076d05399.js"></link>
    <title>HOME PAGE</title>

    <div className="width: 100%;height:150px;background-color: white;">
        <div className="display: inline-block;width: 21%;height:150px;background-color: #fdfdfd;">
        {/* <img src={banner1} alt="banner1" class="center" height={150} width={1360}></img> */}
        </div>
    </div>
    <br></br>
    
    <div className="width: 100%;height:70px;background-color: white;">
    {/* <h1 class="center"><i>COMPUTER SCIENCE AND ENGINEERING DEPARTMENT</i></h1><br></br> */}
   
    </div> 

    
   
    
    <div className="aboutus">  
          <h1 className = "a"><b>About Us: </b></h1>
             <p className="about">
             Sanjay Ghodawat University is offering world-class education in a state-of-the-art facility to promote education that empowers human resource.
Our university is internationally recognized university of excellence in creating and disseminating knowledge through value-based quality
education leading to betterment of mankind.
Computer Science and Engineering Department is established with an aim of building creative IT professionals to acquire core knowledge and
skills required by IT industry or research institutes to meet global challenges.
The courses are taught by the experienced, qualified faculty, industry experts and the global researchers.
The laboratories are well equipped with advanced software, high configuration computer systems for technical training and research work.
Knowledge sharing sessions are conducted by experts and alumni to keep up with the rapidly evolving technology on regular basis.
Our mission is to prepare students for life-long learning and leadership in a global academic culture and also to promote research and
development through conductive environment. 
            </p>
    </div>
<br></br>


<div className="why">
        <div className="one"><h1>Why <br></br> SGU?</h1></div>
        <div className="two">
            <p>
            <marquee>
            <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;100+&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;20+</h3> 
             <p>Recruiters offering best in class packages&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Foreign Universities Collaborations&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Industry Collaborations</p>
             </marquee>
            </p>
            
        </div>
</div><br></br>

<div className="l">
    <h2 ><b>Locate Us: </b></h2>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.686116613471!2d74.38006501481694!3d16.74250618846804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc103227ffea19b%3A0xba598d42f62e8fc1!2sSanjay%20Ghodawat%20University%20Kolhapur!5e0!3m2!1sen!2sin!4v1622116835629!5m2!1sen!2sin" className="map"></iframe>
</div><br></br>
     
    <div class="footer">
        <p> 
       <a href="https://www.facebook.com/SGUniversityKolhapur" className="hi">
        <FontAwesomeIcon icon={faFacebook} size="2x"/>&nbsp;&nbsp;
        </a>
        <a href="http://www.sanjayghodawatuniversity.ac.in/" className="hii" >
        <FontAwesomeIcon icon={faGoogle} size="2x"/>&nbsp;&nbsp;
        </a>
        <a href="https://www.youtube.com/watch?v=dia-Km9XXP4" className="hiii">
        <FontAwesomeIcon icon={faYoutube} size="2x" />&nbsp;&nbsp;
        </a>
        <a href="https://in.linkedin.com/company/sguniversity" className="hiiii">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />&nbsp;&nbsp;
        </a>
        
        </p>
    </div>   
    </div>
    )

  } 
  export default Homepage; 