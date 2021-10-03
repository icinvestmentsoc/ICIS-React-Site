import { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

export default function Home () {
  return (
    <>
      <section class="bg-dark text-light p-5 pt-lg-5 text-center text-sm-start">
        <div class="container">
          <div class="d-sm-flex align-items-center justify-content-between">
            <div>
              <h1>Welcome to <span class="text-info">Imperial College Investment Society!</span></h1>
              <p class="lead my-4">
                A society with the purpose of increasing our members'​ exposure to the investment industry.
                <br />We are Imperial College's fastest growing society, with more than 900 members in our community.
              </p>
              {/*<button type="button" class="btn btn-primary btn-lg"><i class="bi bi-chevron-right"></i> Free membership</button>*/}
              <a href="https://www.imperialcollegeunion.org/activities/a-to-z/investment" target="_blank" class="btn btn-primary btn-lg active" role="button" aria-pressed="false" mx-2>
                <i class="bi bi-chevron-right"></i> Free Membership</a>
              {/*
                        <a class="btn btn-primary btn-lg active" style="background-color: #3b5998;" href="#!" role="button">
                        <i class="fa fa-facebook fa-2x"></i> Facebook</a>*/}

              <div class="row justify-content-start">
                <div class="col-lg-6 py-1">
                  <div class="list-group py-3">
                    <div class="btn-group " role="group" aria-label="Social Media Icons">
                      <a class="btn btn-primary py-1 " style={{ backgroundColor: "#3b5998" }} href="https://www.facebook.com/ic.investmentsociety" target="_blank" role="button" aria-pressed="false" mx-2 pb-2 >
                        <i class="bi bi-facebook "></i> Facebook  </a>
                      <a class="btn btn-primary py-1" style={{backgroundColor: "purple"}} href="https://www.instagram.com/ic.investmentsociety/" target="_blank" role="button" aria-pressed="false" mx-2>
                        <i class="bi bi-instagram"> </i> Instagram </a>
                      <a class="btn btn-primary py-1 " style={{backgroundColor: "rgb(7, 38, 122)"}} href="https://www.linkedin.com/company/ic-investment/about/" target="_blank" role="button" aria-pressed="false" mx-4>
                        <i class="bi bi-linkedin">  </i> LinkedIn</a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <img class="img-fluid w-25 d-none d-md-block mb-4" src="img/bull-w.svg" alt="" />

          </div>
        </div>
      </section>
      {/*Boxes*/}
      <section class="pt-4 p-md-5">
        <div class="container">
          <div class="row text-center g-md-4"> {/*g is for gutters, not gap. A google image will suffice to explain what the gutter is.*/}
            <div class="col-md d-flex align-items-stretch">
              <div class="card bg-dark text-light">
                <div class="card-body text-center">
                  <div class="h1 mb-3">
                    <i class="bi bi-people"></i>
                  </div>
                  <h3 class="card-title mb-3">
                    Industry Insights
                  </h3>
                  <p class="card-text">
                    Join us as we host discussions from the leading investment firms, including Goldman Sachs and JP Morgan!
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md d-flex align-items-stretch">
              <div class="card bg-dark text-light">
                <div class="card-body text-center">
                  <div class="h1 mb-3">
                    <i class="bi bi-journal-text"></i>
                  </div>
                  <h3 class="card-title mb-3">
                    SEC Course
                  </h3>
                  <p class="card-text">
                    Our Securities and Education Certificate, where we teach our members about fundamental and technical investment analysis.
                  </p>
                  <a href="/SEC" class="btn btn-primary stretched-link">Read More</a>
                </div>
              </div>
            </div>
            <div class="col-md d-flex align-items-stretch">
              <div class="card bg-secondary text-light">
                <div class="card-body text-center">
                  <div class="h1 mb-3">
                    <i class="bi bi-book-half"></i>
                  </div>
                  <h3 class="card-title mb-3">
                    Impact Investing Challenge 2021
                  </h3>
                  <p class="card-text">
                    Pitch your way to £550 worth of prizes and a final round internship interview at Temasek.
                  </p>
                  <a href="/impactinvesting" class="btn btn-primary stretched-link">Read More</a>
                </div>
              </div>
            </div>
            <div class="col-md d-flex align-items-stretch">
              <div class="card bg-secondary text-light">
                <div class="card-body text-center">
                  <div class="h1 mb-3">
                    <i class="bi bi-play-fill"></i>
                  </div>
                  <h3 class="card-title mb-3">
                    QT Capital Research Analysts Applications
                  </h3>
                  <div class="mb-4">
                  <p class="card-text">
                    Apply to become an analyst in our investment fund.
                  </p>
                  </div>
                  <a href="/qtcapital" class="btn btn-primary stretched-link">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="pt-4 p-md-5 bg-dark text-light">
        <div class="container">
          <div class="row text-center g-md-4">
             {/*g is for gutters, not gap. A google image will suffice to explain what the gutter is.*/}
             <h2>Investment Society Events</h2>
            <div class="col-md d-flex align-items-stretch">
              <div class="card bg-light text-dark">
                <div class="card-body text-center">
                  <div class="h2 mb-3">
                    An introductory presentation to the Investment Society and our own QT Capital
                  </div>
                  <h3 class="card-title mb-3">
                    12 Oct 2021 18:00-20:30  
                  </h3>
                  <h3 class="card-title mb-3">
                   <strong> Huxley 308/311 </strong> 
                  </h3>
                  <p class="card-text">
                   <p> The Investment Society kicks off the year with an introductory presentation to showcase its projects, courses and
                    programmes that you can get involved in! </p>
                   <p> You'll be able to find us in Huxley(located in the Computing department)and network with the committee and fellow members.</p>
                   <p> <strong><p>Join us for the good vibes(and the free food,hopefully!)-we hope to see you there!</p></strong> </p>
                  </p>
                  <img src="img/main-logo-black-outlined.svg" width="70%"></img>
                </div>
              </div>
            </div>
            
            <div class="col-md d-flex align-items-stretch">
              <div class="card bg-secondary text-light">
                <div class="card-body text-center">
                  <div class="h2 mb-5">
                    Demystifying Chinese Investments with ChineseAlpha
                  </div>
                  <h3 class="card-title mb-3">
                    19 Oct 2021 18:00-20:30  </h3>
                    <h3 class="card-title mb-3">
                     <strong>Huxley 308/311</strong>
                  </h3>
                  <p class="card-text mb-4">
                  <p>  The Investment Society will collaborate with ChineseAlpha to understand how to invest in Chinese equity. In this event,
                    you will be introduced to Chinese macroeconomics,followed by regulation concerns and its unique VIE structure,
                    and finally understand Chinese portfolio allocations and research methods. </p>
                  </p>
                  <p class="card-text mb-5">
                  <p> <strong>Contact Ethan Cui (qc420@ic.ac.uk) for more information.</strong> </p>
                  </p>
                  <img src="img/partners/CA_logo.svg"></img>
                </div>
              </div>
            </div>
            <div class="col-md d-flex align-items-stretch">
              <div class="card bg-light text-dark">
                <div class="card-body text-center">
                  <div class="h2 mb-3">
                    An Introduction to AmplifyMe and the Finance Accelerator Simulation
                  </div>
                  <h3 class="card-title mb-3">
                    27 Oct 2021 16:00 onwards
                  </h3>
                  <h3 class="card-title mb-3">
                    <strong>LOCATION TBC</strong>
                  </h3>
                  <div class="mb-4">
                  <p class="card-text">
                    <p>Join Amplify on the 27<sup>th</sup> October to experience the same trading simulations used
                    by the world leading banks to enhance your market awareness. Gain hands on experience of both the 
                    sell-side and buy-side giving you exposure to life as a market maker as well as an asset manager.</p>
                  </p>
                  <p class="card-text mb-5">
                  <p> <strong>Contact George Spencer (gws19@ic.ac.uk) for more information.</strong> </p>
                  </p>
                  <img src="img/partners/amplify-logo.png" width="50%"></img>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*bronze sponsors*/}
     {/*<section id="bronze_sponsors" class="py-5 p-lg-5 bg-dark">
        <div class="container">
        <h2 style={{ textAlign: "center" }}> <span style={{
            backgroundImage: `linear-gradient(
                to right,
                #462523 0,
                       #cb9b51 22%, 
                #f6e27a 45%,
                #f6f2c0 50%,
                #f6e27a 55%,
                #cb9b51 78%,
                #462523 100%
                )`,
            color: "transparent",
            WebkitBackgroundClip: "text", backgroundClip: "text"
          }}>BRONZE SPONSORS</span> </h2>
          <div class="row text-center g-2"> {/* g is for gutters, not gap. A google image will suffice to explain what the gutter is.
            <div class="col-md">
              <img class="img-fluid " alt="Responsive image" src="img/bronze sponsors/logo_careerships.svg" />
            </div>
            <div class="col-md align-self-end">
              <img class="img-fluid w-50" alt="Responsive image" src="img/bronze sponsors/aragon.svg" />
            </div>
          </div>
        </div>
        </section> */}

      {/*Learn Sections*/}
      <section id="learn" class="py-5 p-lg-5">
        <div class="container">
          <div class="row align-items-center justify-content-between">
            <div class="col-md">
              <img src="img/Diversity.svg" class="img-fluid" alt="" />
            </div>
            <div class="col-md pt-4 p-md-5">
              <h2>A growing society</h2>
              <p class="lead">Despite a challenging academic year (with virtual events), our society's membership has grown by 30% with a diverse mix of personalities.</p>
              <p class="lead">We host interactive weekly investment meetings where our members have the chance to present, ask questions and vote on whether to add investment pitches to our virtual portfolio.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="learn" class="py-5 p-lg-5 bg-dark text-light">
        <div class="container">
          <div class="row align-items-center justify-content-between">
            <div class="col-md pt-4 p-md-5">
              <h2>Our Mission</h2>
              <p class="lead">The Imperial College Investment Society was founded in October 2015, with the aim of educating members on investment value techniques and has grown steadily year on year. We host interactive weekly investment meetings where our members have the chance to present, ask questions and vote on whether to add investment pitches to our virtual portfolio. </p>
              <p class="lead"> By submersing themselves in the world’s financial news, jargon and investment theory our members develop vital commercial awareness and financial acumen, which is critical to delivering value in any setting. </p>
              <p class="lead"> We also expose our members to a diverse range of career opportunities ranging from Banking to Asset Management through office visits and speaker sessions from industry professionals.</p>
            </div>
            <div class="col-md">
              <img src="img/dollar.svg" class="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/*Question Accordian*/}
      <section class="pt-5 p-lg-5" id="questions">
        <div class="container">
          <h2 class="text-center mb-4">Frequently Asked Questions</h2>
          <div class="accordion accordion-flush" id="questions">
            {/*Item 1*/}
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#question-one">
                  How can I join the mailing list?
                </button>
              </h2>
              <div id="question-one" class="accordion-collapse collapse" data-bs-parent="#question">
                <div class="accordion-body">You can join our mailing list through the Imperial College Union (ICU) website by following the link above.
                  Alternatively, you can click here to be taken to our ICU page.
                  Log in using your shorthand Imperial College Username (e.g. abc123) and click the “Join” button
                  underneath the membership row.
                </div>
              </div>
            </div>
            {/*Item 2*/}
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#question-two">
                  When will the SEC form be released?
                </button>
              </h2>
              <div id="question-two" class="accordion-collapse collapse" data-bs-parent="#question">
                <div class="accordion-body">
                  Our Securities and Education Certificate (SEC) will open for registration around the second week of October, with lectures shortly following.
                  More information about the selection criteria and lecture syllabus will be released in due course – so be sure to sign up to our mailing list and our social media channels.
                </div>
              </div>
            </div>
            {/*Item 3*/}
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#question-three">
                  Do I need to know anything before signing up to the SEC?
                </button>
              </h2>
              <div id="question-three" class="accordion-collapse collapse" data-bs-parent="#question">
                <div class="accordion-body">There is no prerequisite knowledge required for the SEC!
                  The course has been designed this year with a  revised syllabus and teaching style to boost your knowledge and skills.
                  It will deliver on fundamentals and technicals that you will need for a career in finance and investment, so don’t worry – we’ll take you from the basics. </div>
              </div>
            </div>
            {/*Item 4*/}
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#question-five">
                  What programmes does the society run? Can I join them?
                </button>
              </h2>
              <div id="question-five" class="accordion-collapse collapse" data-bs-parent="#question">
                <div class="accordion-body">So far, the society has offered one program for associates in our digital marketing team.
                  More programmes will be opening up soon and we will be advertising them in our mailing list, alongside our social media channels!
                  They are open to all ICIS members who are Imperial College & Business School students enrolled in 2021/22. </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/*Contact & Map*/}
      <section class="py-3 p-lg-5">
        <div class="container">
          <div class="row g-4">
            <div class="col-md">
              <h2 class="text-center mb-4">Contact Info</h2>
              <ul class="list-group list-group-flush lead">
                {/* remove some borders and rounded corners to render list group items edge-to-edge in a parent container (e.g., cards). */}
                <li class="list-group-item">
                  <span class="fw-bold">Main Location:</span> South Kensington Campus, Imperial College
                </li>
                <li class="list-group-item">
                  <span class="fw-bold">Usual event date:</span> Tuesdays 18:00 – 20:00
                </li>
                <li class="list-group-item">
                  <span class="fw-bold">Email:</span> icu.investmentsociety@imperial.ac.uk
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}