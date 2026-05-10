
 import React from 'react';
import './Aboutus.css';
import { FileX } from 'lucide-react';

const Aboutus = () => {
    return (
      <>
      <div style={{display:"flex"}}>
      <div className="about-container">
      <div className="about-left" style={{marginLeft:"200px"}}>
        <h1>
          We understand the <br />
          realities of <span className="bold">the classroom</span>
        </h1>
        <hr className="orange-line" />
        <p style={{fontSize:"1.2rem"}}>
          At Exam.net, we are a passionate team of teachers, developers and
          innovators dedicated to making online assessments simple, secure, and
          effective. Many of us have a background in teaching, which means we
          truly understand the realities of the classroom. Our goal is to
          support teachers with intuitive tools that improve learning and save
          time.
        </p>
      </div>

    
    </div>
      <div className="about-right" style={{height:"500px", width:"1000px"}}>
        <img src="img/ab7.png" alt="Teacher" />
      </div>
</div>

{/* //2nd */}

 <div className="how-started-container ">
      <div className="how-started-text" style={{marginLeft:"200px"}}>
        <h2>How it all started</h2>
        <p style={{fontSize:"1.2rem"}}>
          It all started in 2016 when <strong>Erik Corell</strong>, a Swedish math teacher,
          found himself frustrated with the old-school way of giving exams. Digital exams
          offered advantages such as auto-marking and integrated tools and could eliminate
          problems like illegible handwriting and excessive paper waste. At the time, few
          digital exam platforms existed, and the ones that did felt over-complicated and out
          of touch with a teacher’s real needs in the classroom.
        </p>

        <p style={{fontSize:"1.1rem"}}>
          Determined to find a solution that worked in the real world for teachers, Erik teamed
          up with his friend <strong>Anders Torkelsson</strong>, an entrepreneur with a background
          in business and product development, and <strong>Martin Krisell</strong>, a math teacher
          and computer programmer, to develop Exam.net. What started with three friends has now
          grown into a company of over 30 experts, most of whom also have professional backgrounds
          in teaching. Teachers are at the center of everything we do because our software is for
          teachers by teachers.
        </p>
      </div>

      <div className="how-started-image" style={{marginTop:"70px"}}>
        <img src="img/ab1.png" alt="Founders working" />
      </div>
    </div>

{/* 3  */}

     <div className="mission-container">
      <div className="mission-image">
        <img src="img/ab2.jpg" alt="Team" />
      </div>
      <div className="mission-text">
        <h1>Our mission and values</h1>
        <p style={{fontSize:"1.1rem"}}>
          At Exam.net, we believe that each teacher is the authority in their classroom.
          That’s why Exam.net makes it easy for teachers like you to conduct your exams your way.
          We’ll never impose outside pedagogical frameworks or ideologies.
          We also understand that the student’s experience reflects directly on the teacher,
          so we make it possible for you to personalize exams to meet the needs of your individual students.
        </p>
        <div className="mission-buttons">
          <button className="try-button">Try It Now</button>
          <button className="how-button">How It Works</button>
        </div>
      </div>
    </div>


{/* 4 */}



<div className="team-member-section">
      <h2 className="team-title">Meet some of our team members</h2>

      <div className="team-member-content">
        <div className="team-image">
          <img src="img/ab3.png" alt="Team member" />
        </div>

        <div className="team-quote">
          <span className="quote-icon">❝</span>
          <p className="quote-text" style={{fontSize:"1.1rem"}}>
            Having previously worked as a teacher, I know how much time and effort teachers
            invest in their work and how deeply they care about their students. Developing
            software that supports teachers and facilitates students’ learning feels both
            fulfilling and meaningful, motivating me to keep improving as a developer.
          </p>
          <p className="quote-author" style={{fontSize:"1.1rem"}}>
            <strong>Martin Sandström Krisell</strong><br />
            <span>Full-stack developer & Former Teacher</span>
          </p>
        </div>
      </div>
    </div>

{/* 5 */}

  <div className="team-member-section right-layout" style={{display:"flex",marginLeft:"100px"}}>
      <div className="team-quote">
        <span className="quote-icon">❝</span>
        <p className="quote-text" style={{fontSize:"1.1rem"}}>
          Working in the EdTech industry, which will only continue to grow, is super exciting.
          At the same time, the mission to help teachers and schools feels deeply meaningful.
        </p>
        <p className="quote-author" style={{fontSize:"1.1rem"}}>
          <strong>Anu Sharma</strong><br />
          <span>Head of Marketing</span>
        </p>
      </div>

      <div className="team-image" style={{marginLeft:"50px"}}>
        <img src="img/ab4.png" alt="Anu Sharma" />
      </div>
    </div>



{/* 6  */}

 <div className="team-member-section">
      <div className="team-image" style={{marginTop:"30px"}}>
        <img src="img/ab5.png" alt="Aviva La Torre Ek" />
      </div>

      <div className="team-quote" style={{fontSize:"1.1rem"}}>
        <span className="quote-icon">❝</span>
        <p className="quote-text">
          Being part of the Teachiq group is a truly fulfilling experience. The company’s
          commitment to innovation and the empowerment of educators aligns perfectly with my
          passion for fostering success in the education sector.
        </p>
        <p className="quote-author">
          <strong>Aviva La Torre Ek</strong><br />
          <span>Customer Success Manager & Former Teacher</span>
        </p>
      </div>
    </div>

{/* 7  */}




  <div className="teachiq-banner">
      <img
        src="img/ab6.png"
        alt="Teachiq Logo"
        className="teachiq-logo"
      style={{height:"90px",width:"90px"}}/>

      <h2 className="teachiq-heading" style={{fontSize:"40px"}}>
        Exam.net is a brand under Teachiq
      </h2>

      <hr className="teachiq-divider" />

      <p className="teachiq-subtext" style={{fontSize:"21px"}}>
        Want to be part of our journey? Learn more about us.
      </p>

      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="teachiq-button"
      style={{height:"60px",width:"220px",fontSize:'22px'}}>
        Visit Teachiq ↗
      </a>
    </div>




      </>
    )


}

export default Aboutus;


