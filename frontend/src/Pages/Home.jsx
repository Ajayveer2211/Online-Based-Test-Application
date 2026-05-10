import React from 'react';
import '../App.css'; // Correct path to App.css from src
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const benefits = [
  {
    title: "Online assessments remove bias and promote equality",
    description:
      "Anonymous grading allows teachers at your school to mark and grade the tests without being affected by unconscious bias. Moreover, the exams can be catered to each student’s unique needs with accommodations such as text-to-speech, translation and allowing for extra time.",
  },
  {
    title: "Online teaching tools save your teachers time",
    description:
      "With an online teaching tool the teachers will have infrastructure to quickly create new exams as well as reuse old ones that are uploaded to the tool. With auto-marked functionality the marking is done automatically instead of going through each paper, which not only increases productivity but gets the feedback back to students faster.",
  },
  {
    title: "Paperless e-assessment",
    description:
      "With e-assessment you have everything in one place and there is no risk of losing students’ exams. And at the same time your school will be setting sustainability in focus by reducing unnecessary use of paper.",
  },
  {
    title: "Efficient online proctoring",
    description:
      "Lockdown security mode that prevents students from leaving the test browser, automated cheat prevention, and plagiarism detection help keep the integrity of exams intact.",
  },
  {
    title: "Efficient online proctoring",
    description:
      "Lockdown security mode that prevents students from leaving the test browser, automated cheat prevention, and plagiarism detection help keep the integrity of exams intact.",
  },
  {
    title: "Efficient online proctoring",
    description:
      "Lockdown security mode that prevents students from leaving the test browser, automated cheat prevention, and plagiarism detection help keep the integrity of exams intact.",
  },
];

function Home() {
  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <div className='curve' style={{height:"20px",width:"100%",backgroundColor:"darkkhaki"}}></div>

     
<div className="feature-section py-2 " style={{height:"200px", backgroundColor:"#e8eaeeff"}}>
{/* 
  <div>
    <img src="img/logo2.png" alt="" style={{height:"240px",width:"240px"}} />#e8eaeeff
  </div> */}
        <div className="container text-center d-flex">
          <div>
     <img src="img/ll.jpeg" alt=""style={{height:"190px", marginLeft:"-100px"}} />
  </div>
          <div style={{ width: "1000px", marginLeft: "170px" }}>
            <h2 className="mb-3" style={{ fontWeight: "300", fontSize:"30px" ,marginTop:"20px" }}>
              Everything you need to create and conduct secure comprehensive exams📃✏️
            </h2>
            <p className="text-muted mb-3" style={{fontSize:"20px"}}>
              We simplify all the moving pieces so you can administer your exams securely and with confidence without technical complexity.
            </p>
            
          </div>
          
          {/* <img src="img/ll.png" alt=""style={{height:"180px"}} /> */}
         
          </div>
          
          </div>

           <div className='curve' style={{height:"20px",width:"100%",backgroundColor:"darkkhaki"}}></div>






      {/* ===== Slider Section ===== */}
      <div >
      <div className="slider-container" style={{marginBottom: "0"}}>
        <Slider {...sliderSettings}>
          <div>
            <img src="img/ppp.png.jpg" alt="Slide 1" style={{width: "100%", height: "500px", objectFit: "cover"}} />
          </div>
          <div>
            <img src="img/pp.jpeg" alt="Slide 2" style={{width: "100%", height: "500px", objectFit: "cover"}} />
          </div>
          <div>
            <img src="img/pppp.png.jpg" alt="Slide 3" style={{width: "100%", height: "500px", objectFit: "cover"}} />
          </div>
        </Slider>
      </div>
      </div>


       {/* ===== Marquee Announcement Bar ===== */}
       <div style={{backgroundColor:"white", height:"60px"}}>
      <div style={{ backgroundColor: "#2b3849", color: "white", padding: "5px 0", display: "flex", alignItems: "center",marginTop:"27px" }}>
        <strong style={{ marginLeft: "15px", marginRight: "20px", whiteSpace: "nowrap" }}>Announcements</strong>
        <marquee behavior="scroll" direction="left" scrollamount="6" style={{ flex: 1, color: "black", backgroundColor: "white", padding: "5px" }}>
          <a href="#" style={{ textDecoration: "none", color: "black" }}>
             🚀 Welcome to the Online Based Test Platform! | 📢 Practice for Competitive Exams Anytime, Anywhere | 📝 New Test Series for 2025 Now Available! | 🏆 Track Your Performance Instantly | ⏳ Limited Time Offer: Get Free Access to 5 Mock Tests
          </a>
        </marquee>
      </div>
      </div>
      <br></br>

      {/* Feature Section */}
      

         
  {/* Cards Section */}
  <div className='card1'> <h3 style={{textAlign:"center", marginTop:"20px", marginBottom:"-16px"}}>Fearures</h3>
        <br />
      <div className="features-wrapper ">

       
        <div className="features-grid">
          <div className="feature-card examiner">
            <div className="feature-overlay">
              <div style={{width:"240px", height:"160px", border:"2px solid white",}}>
              <h2 style={{marginTop:"40px"}}>EXAMINER</h2>
              <p>FEATURES</p>
              </div>
            </div>
          </div>

          <div className="feature-card student" >
            <div className="feature-overlay">
              <div style={{width:"235px", height:"160px", border:"2px solid white",}}>
              <h2 style={{marginTop:"40px"}}>STUDENT</h2>
              <p>FEATURES</p>
              </div>
            </div>
          </div>

          <div className="feature-card test">
            <div className="feature-overlay">
              <h2>   TEST</h2>
              <p>SERIES</p>
            </div>
          </div>

          <div className="feature-card all">
            <div className="feature-overlay">
              <h2 className="all">  A   L  L</h2>
              <p className="all">FEATURES</p>
            </div>
          </div>
        </div>
      </div>


</div>
        


      {/* CTA Buttons Section */}<div style={{backgroundColor:""}}>
      <div className="cta-buttons text-center" style={{ margin: "60px 0",backgroundColor:"rgb(238,242,246)" }}>
        <button className="btn-outline-cta ">Discover more features</button>
        <button className="btn-dark-cta" style={{ marginLeft: "30px" }}>
          <span className="play-icon">▶️</span> See video
        </button>
      </div>
      </div>



    




<div className="stats-section">
        <h2 className="stats-title">
          Trusted by over <strong>270 000</strong> teachers across the world
        </h2>
        <div className="stats-items">
          <div className="stat">
            <h3>20 000+</h3>
            <p>Schools</p>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <h3>1000+</h3>
            <p>Universities</p>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <h3>50 million</h3>
            <p>Exams started</p>
          </div>
        </div>
      </div>

      {/* Why Choose Section */}
{/*     
      <div className="why-choose" style={{ padding: "80px 20px", backgroundColor: "#fff", display:"flex" }}>
        <div className="why-choose-container" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "60px", maxWidth: "1200px", margin: "auto" }}>
          <div><img src="img/file.png" alt="" style={{height:"400px",width:"500px"}} /></div>
          <div className="why-choose-content" style={{ maxWidth: "600px",float:"right" }}>
            <h2 style={{ fontSize: "32px", color: "#0a2540", marginBottom: "20px" }}>Why choose Exam.net?</h2>
            <p style={{ fontSize: "20px", color: "#2c2e3f", marginBottom: "30px" }}>
              <strong>86%</strong> of the teachers say TestNest is a <strong>time-saver</strong>
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li style={{ fontSize: "18px", marginBottom: "20px", lineHeight: "1.6", position: "relative", paddingLeft: "30px", color: "#3b3f4f" }}>
                <span style={{ position: "absolute", left: 0, color: "orange" }}>✓</span>
                <a href="#auto-marked" style={{ color: "#0074d9", textDecoration: "none", fontWeight: "500" }}>Auto-marked exams</a> allow you to save time marking so that you can focus on more meaningful tasks and deliver feedback to your students promptly.
              </li>
              <li style={{ fontSize: "18px", marginBottom: "20px", lineHeight: "1.6", position: "relative", paddingLeft: "30px", color: "#3b3f4f" }}>
                <span style={{ position: "absolute", left: 0, color: "orange" }}>✓</span>
                No more time wasted deciphering messy handwriting for long-form questions and essays.
              </li>
              <li style={{ fontSize: "18px", marginBottom: "20px", lineHeight: "1.6", position: "relative", paddingLeft: "30px", color: "#3b3f4f" }}>
                <span style={{ position: "absolute", left: 0, color: "orange" }}>✓</span>
                <a href="#question-library" style={{ color: "#0074d9", textDecoration: "none", fontWeight: "500" }}>Individual question library</a> - by reusing questions from previous exams, you create new assessments quickly.
              </li>
            </ul>
          </div>
        </div>
      </div>

 

  


      <div className="why-choose" style={{ padding: "80px 20px", backgroundColor: "#fff", display:"flex" }}>
        <div className="why-choose-container" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "60px", maxWidth: "1200px", margin: "auto" }}>
          <div className="why-choose-content" style={{ maxWidth: "600px",float:"right" }}>
            <h2 style={{ fontSize: "32px", color: "#0a2540", marginBottom: "20px" }}>Why choose Exam.net?</h2>
            <p style={{ fontSize: "20px", color: "#2c2e3f", marginBottom: "30px" }}>
              <strong>86%</strong> of the teachers say Exam.net is a <strong>time-saver</strong>
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li style={{ fontSize: "18px", marginBottom: "20px", lineHeight: "1.6", position: "relative", paddingLeft: "30px", color: "#3b3f4f" }}>
                <span style={{ position: "absolute", left: 0, color: "orange" }}>✓</span>
                <a href="#auto-marked" style={{ color: "#0074d9", textDecoration: "none", fontWeight: "500" }}>Auto-marked exams</a> allow you to save time marking so that you can focus on more meaningful tasks and deliver feedback to your students promptly.
              </li>
              <li style={{ fontSize: "18px", marginBottom: "20px", lineHeight: "1.6", position: "relative", paddingLeft: "30px", color: "#3b3f4f" }}>
                <span style={{ position: "absolute", left: 0, color: "orange" }}>✓</span>
                No more time wasted deciphering messy handwriting for long-form questions and essays.
              </li>
              <li style={{ fontSize: "18px", marginBottom: "20px", lineHeight: "1.6", position: "relative", paddingLeft: "30px", color: "#3b3f4f" }}>
                <span style={{ position: "absolute", left: 0, color: "orange" }}>✓</span>
                <a href="#question-library" style={{ color: "#0074d9", textDecoration: "none", fontWeight: "500" }}>Individual question library</a> - by reusing questions from previous exams, you create new assessments quickly.
              </li>
            </ul>
          </div>
          <div><img src="img/file.png" alt="" style={{height:"400px",width:"500px"}} /></div>
        </div> */}
      {/* </div> */}


<div className="how-it-works-btn-wrapper">
        <button className="how-it-works-btn">How it works</button>
      </div>


      
      <div className="use-cases-section ">
      <h2 className="use-cases-title">Just a few ways you can use TestNest </h2>
      <div className="use-cases-cards">
        <div className="use-case-card text-center">
          <img src="img/im1.png" alt="Final exams" />
          <h3>Final and high stakes exams</h3>
          <p>
            Ensure academic integrity with our security and proctoring features.
          </p>
        </div>

        <div className="use-case-card text-center">
          <img src="img/im2.png" alt="Quizzes" />
          <h3>Quizzes and exit tickets</h3>
          <p>
            Fun and interactive question types that are marked for you automatically.
          </p>
        </div>

        <div className="use-case-card text-center">
          <img src="img/im3.png" alt="Essays" />
          <h3 >  Essays and homework</h3>
          <p>
            Create clean and focused digital environment for your students.
          </p>
        </div>

        <div className="use-case-card text-center">
          <img src="img/im4.png" alt="Entrance exams" />
          <h3>Entrance exams</h3>
          <p>
            Automate the workflow with exam start and submission scheduler.
          </p>
        </div>
      </div>
    </div>


    {/* Subjects Section */}
      <div className="subjects-section">
        <h2>Exams tailored to your subject</h2>
        <p>Choose your subject to see what tools are available to you.</p>
        <div className="subjects-container">
          <div className="subject "><i className="fas fa-calculator"></i> Math</div>
          <div className="subject"><i className="fas fa-atom"></i> Physics</div>
          <div className="subject"><i className="fas fa-flask"></i> Robotics</div>
          <div className="subject"><i className="fas fa-dna"></i> Data Structure</div>
          <div className="subject active"><i className="fas fa-landmark"></i> Java</div>
          <div className="subject"><i className="fas fa-language"></i> English</div>
          <div className="subject"><i className="fas fa-code"></i> Computer Programming</div>
          <div className="subject"><i className="fas fa-globe"></i> Languages</div>
          <div className="subject"><i className="fas fa-users"></i> Compiler</div>
          <div className="subject"><i className="fas fa-university"></i> Artificial intelligence</div>
        </div>
      </div>
    
<div style={{backgroundColor:" #f9f9fb"}}>

     <div className="testimonial-section">
      <div className='pc1'>
        
      <div className="testimonial-card">
        <h3>Antonius Sugiarto</h3>
        <p className="position">
          High School Physics Teacher, Santa Laurensia School
        </p>
        <p className="quote">
          One type of question on my exams is drawing ray diagrams such as LIGHT & OPTICS. With Exam.net, I can give that type of question. This includes how to type formulas in physics using special symbols correctly. I use Exam.net for designing my daily tests, quizzes, and final exams.
        </p>
        <a href="#" className="more-link">
          More words from science teachers →
        </a>
      </div>
      </div>

      <div className="features-list">
        <ul>
          <li>GeoGebra: A tool with both graphing and algebra capabilities</li>
          <li>Desmos: A tool for constructing and analyzing mathematical graphs</li>
          <li>Calculator</li>
          <li>Equation Editor</li>
          <li>Drawing Area</li>
          <li>Teacher Uploaded Resources such as a list of equations</li>
          <li>Text editor toolbar includes Greek letters and equation symbols</li>
          <li>Scan handwritten drawings</li>
        </ul>
      </div>
    </div>



    

        <div className="cta-buttons" style={{backgroundColor:" #f9f9fb",marginTop:"-20px"}}>
          <button className="btn dark-btn" style={{marginBottom:"30px"}}>Try it now</button>
          <button className="btn light-btn" style={{marginBottom:"30px"}}>How it works</button>
        </div>
     
</div>



<br></br>


   <div className="lms-wrapper ">
      <div className="lms-container">
        <div className="lms-left">
          <img src="img/h.jpg" alt="LMS Integration" />
        </div>
        <div className="lms-right">
          <h2>
            Simplify communication between teachers and students through learning platform integrations
          </h2>
          <p>
            Automate exam workflow by integrating Exam.net with <strong>Google Classroom</strong> and <strong>Microsoft Teams</strong>. Seamlessly connect Exam.net to your learning platform and enable students to start exams from their feed. With 1-click, return exam results to students.
          </p>
          <div className="lms-logos">
            <img src="img/g.jpeg" alt="Google for Education" style={{height:"50px"}}/>
            <img src="img/m.jpeg" alt="Microsoft Teams" style={{height:"50px"}} />
          </div>
         
        </div>
      </div>
      <br/>
           <button className="lms-button" style={{marginLeft:"350px"}}>Learn more about our LMS integrations</button>
    </div>




    <div className="customer-stories">
      <h2 className="heading">Customer stories</h2>
      <div className="stories-wrapper">
        {/* Christ's College */}
        <div className="story-card story1">
          <img src="img/i1.png" alt="Christ's College" className="story-logo" /><br/><br/>
          <h3 className="school-name">Christ’s College</h3>
          <p className="description">
            Christ’s College had previously trialled different online assessment platforms, and Exam.net had been an
            easy choice, particularly for its ease of use and useful features. As teaching returned to the classroom,
            though, the question remained as to whether teaching and learning would benefit from the continued use of
            Exam.net.
          </p>
          <a href="#" className="read-story">Read story →</a>
        </div>

        {/* Larbert High */}
        <div className="story-card story2">
          <img src="img/i2.png" alt="Larbert High" className="story-logo" /><br/><br/>
          <h3 className="school-name">Larbert High</h3>
          <p className="description">
            With over 2000 students and 150 teachers, Larbert High School in Falkirk, is the largest non-denominational
            school in Scotland. Among its diverse student body, 40% are registered with Additional Support Needs (ASN),
            presenting unique challenges in providing equitable assessments.
          </p>
          <a href="#" className="read-story">Read story →</a>
        </div>
      </div>

      <button className="all-stories-btn">All customer stories</button>
    </div>


<div className='free'>
    <section className="free-trial-section">
      <div className="free-trial-left" style={{marginLeft:"200px"}}>
        <h2>Create and conduct your first exam in less than an hour</h2>
        <ul className="benefits-list">
          <li>Without talking to a salesperson or scheduling a demo</li>
          <li>Without putting a credit card on file</li>
          <li>Without installing software or performing technical integrations</li>
          <li>Without creating student accounts</li>
        </ul>
       
      </div>

      <div className="free-trial-right">
        <img src="img/h2.jpg" alt="Exam creation interface"  style={{width:"650px",marginTop:"-70px"}}/>
      </div>
 
    </section>
    <div style={{ backgroundColor:"#f9fafb", marginTop:"-30px"}}>
     <button className="start-trial-btn" style={{marginLeft:"750px"}}>Start your free trial</button>
        <p className="trial-note" style={{marginLeft:"680px", fontSize:"20px"}}>75-day free trial. No credit card required</p>
        </div>
</div>
<br/><br/>










      {/* Benefits Section */}
      <section className="benefits-section">
        <h2>
          <span className="bold-text">Still not convinced?</span> Here are some
          benefits of using an online test platform at your school
        </h2>
        <div className="benefits-grid">
          {benefits.map((item, index) => (
            <div className="benefit-card" key={index}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        <div className="button-group">
          <button className="btn-outline" style={{width:"350px" , fontSize:"20px"}}>Request a price quote</button>
          <button className="btn-filled" style={{width:"200px"}}>Book a demo</button>
        </div>
      </section>
    </>
  );
}

// Feature Section Data
const featureData = [
  {
    icon: 'img/icon1.png',
    title: 'Create an exam in minutes',
    description: 'by uploading an existing exam as PDF'
  },
  {
    icon: 'img/icon2.png',
    title: 'Empower every student',
    description: "by customizing exams to each student's individual needs"
  },
  {
    icon: 'img/icon3.png',
    title: 'Prevent cheating',
    description: 'with our secure browser lockdown mode'
  },
  {
    icon: 'img/icon4.png',
    title: 'Collect the exams your way.',
    description: ' Stand... (custom message)',
    className: 'icon4'
  },
  {
    icon: 'img/icon5.png',
    title: 'Auto-mark your exams',
    description: ' based on the answers',
    className: "icon5"
  }
];

export default Home;