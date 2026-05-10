import React from "react";
import "../App.css";

export default function Features() {
  return (
    <div>
      {/* Header Section */}
      <div className="features-container">
        <h1 className="features-heading">Main Features of Test You</h1>
      </div>

      {/* Cards Section */}
      <div className="features-wrapper">
        <div className="features-grid">
          <div className="feature-card examiner">
            <div className="feature-overlay">
              <div style={{width:"250px", height:"160px", border:"2px solid white",}}>
              <h2 style={{marginTop:"40px"}}>EXAMINER</h2>
              <p>FEATURES</p>
              </div>
            </div>
          </div>

          <div className="feature-card student">
            <div className="feature-overlay">
              <div style={{width:"250px", height:"160px", border:"2px solid white",}}>
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

      {/* Detailed Features Section */}
      <div className="detailed-features container">
        <div className="feature-card">
          <div ><img src="img/1.png" alt="Password Protected" /></div>
          <div className="content"><h2 className="h">Password Protected Tests</h2>
          <p>We understand how important confidentially matters for you, so all test you create or conduct are password protected. Only people who have access can give test. You can also create test for public if do not set any password.</p>
          </div>
        </div>

        <div className="feature-card" style={{marginBlockStart:'20px'}}>
          <img src="img/clock.png" alt="Time Flexibility" />
          <div className="content"><h2 className="h">Time Flexibility</h2>
          <p>Want to restrict people to give test at odd times? Bingo! With “Time Flexibility” feature choose your own Date, Time and Hours for conducting test.
</p>
        </div>
        </div>

        <div className="feature-card">
          <img src="img/group.png" alt="Create Groups" />
         <div className="content"> <h2 className="h">Create Exclusive Groups</h2>
          <p>User can create different groups through his account to assign different test to each group, E.g. A HR manager can make one group for one designation while another group for other designation. Same can be done by Examiner to make different group for different section or classes of students.</p>
        </div>
        </div>

        <div className="feature-card">
          <img src="/img/negmark.png" alt="Negative Marking" />
         <div className="content"> <h2 className="h">Negative Marking</h2>
          <p>Want to prevent people from to give test as a guessing game? Use this feature to enable negative marking for choosing each wrong option in your test.</p>
        </div>
        </div>

        <div className="feature-card">
          <img src="/img/2.png" alt="Import Test" />
         <div className="content"> <h2 className="h">Import Test</h2>
          <p>We understand how tedious and time consuming is to create test paper, when you have lots of questions. Use “Import Test” feature to upload test through excel sheet.</p>
        </div>
        </div>

        <div className="feature-card">
          <img src="/img/3.png" alt="Email Notification" />
          <div className="content"><h2 className="h">Email Notification</h2>
          <p>Get real time update of test results through enabling this feature, whenever a candidate completes his test, an automated email notification will be sent to you on registered Email with his/her scoreboard.</p>
        </div>
        </div>

        <div className="feature-card">
          <img src="/img/4.png" alt="Reattempt" />
        <div className="content">  <h2 className="h">Reattempt Control</h2>
          <p>You have access to control number reattempt can be done by a candidate. Enabling this feature you can choose from option like – Once only, Infinite or Every hour etc.
</p>
        </div>
        </div>

        <div className="feature-card">
          <img src="/img/5.png" alt="Multiple Format Test" />
        <div className="content"><h2 className="h">Multiple Format Test</h2>
          <p>You can create test in various formats like “Fill in the blanks”, “True/False” “Objective with multiple options” and “Subjective”.
</p>
        </div>
        </div>

        <div className="feature-card">
          <img src="/img/6.png" alt="Public Tests" />
        <div className="content"> <h2 className="h">Public Tests</h2>
          <p>You can also publish your test for all user means publicly.</p>
        </div>
        </div>

         <div className="feature-card">
          <img src="/img/7.png" alt="Public Tests" />
        <div className="content"> <h2 className="h">Virtual Discussion.</h2>
          <p>After successful completion of test, candidates can put comments, feedback, queries regarding test, which can be notified to you with test results. You can also reply them back from your account.</p>
        </div>
        </div>

         <div className="feature-card">
          <img src="/img/8.png" alt="Public Tests" />
        <div className="content"> <h2 className="h">Share Test on Social Site</h2>
          <p>Share your test online on Facebook, LinkedIn and Twitter etc.</p>
        </div>
        </div>

         <div className="feature-card">
          <img src="/img/9.png" alt="Public Tests" />
        <div className="content"> <h2 className="h">Resume Incomplete Test</h2>
          <p>MThis is one of exclusive feature of TestYou, where in student can resume his incomplete test. If due to Power off, Browser crash and other technical glitches student do not able to submit the test, with this feature enabled, candidate can resume his test from where he left it out, with remaining time and questions.
</p>
        </div>
        </div>

         <div className="feature-card">
          <img src="/img/10.png" alt="Public Tests" />
        <div className="content"> <h2 className="h">Control Result Output.</h2>
          <p>Examiner can control format of results in various type such as Marks, Percentage and Percentile. Also there is option of “to show result to student” or Email results to students enable/disable this as per your will.</p>
        </div>
        </div>


         <div className="feature-card">
          <img src="/img/11.png" alt="Public Tests" />
        <div className="content"> <h2 className="h">Import contacts from Gmail</h2>
          <p>Import contacts from your Gmail account to allow access to your exclusive contact list to attempt test.</p>
        </div>
        </div>


         <div className="feature-card">
          <img src="/img/12.png" alt="Public Tests" />
        <div className="content"> <h2 className="h">Miscellaneous.</h2>
          <p>Apart from above listed features TestYou provides various miscellaneous features for Examiner such Number of questions per page, Allow back button and many more.</p>
        </div>
        </div>



        
      </div>
    </div>
  );
}
