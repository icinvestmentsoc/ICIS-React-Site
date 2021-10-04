import React from 'react'
import ReactDOM from 'react-dom'
export default function ImpactInvesting() {
  return (
    <div>
      <section id="learn" class="pt-3 px-3 bg-dark text-light">
        <div class="container">
          <div class="row align-items-center justify-content-between">
            <div class="col-md p-md-5">
              <h2 class="fw-bold">IMPACT INVESTING CHALLENGE 2021</h2>
              <h3 class="fw-lighter">ABOUT</h3>
              <p class="lead"> The Impact Investing Challenge 2021 is open to undergraduate students from all degree backgrounds
                and levels of experience in investment with the aim of introducing them to the world of fundamental
                investing and the investment industry. </p>
              <p class="lead"> In partnership with Temasek, the Imperial College Investment Society, Cambridge Investment Banking
                Society, Trinity Student Managed Fund and UCL Economics & Finance Society are proud to offer
                students from the UK and Ireland a valuable opportunity to both develop their investing skills and
                compete to win attractive prizes - including a final round interview
                for Temasek's 2022
                Associate Internship Programme (for students graduating in Winter 2022 / Summer 2023 only)! </p>
              <p class="lead"> Bearing this in mind, we will be hosting an exclusive networking session for all participants with
                Temasek, with an additional training session on pitchbook layout and technicals, allowing you to walk
                away with valuable insight into investing and build your network in the industry regardless of your
                results.</p>
              <p class="lead"> Places will be allocated on a first come first serve basis so do take advantage of this unique opportunity
                and register your team ASAP using the form below: </p>
              <div>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScxEcttssqPQDut4wmnVVEcgp1vGWHaJYaCf684yHRGnDLALw/viewform" class="btn btn-primary btn-sm fs-3"> <i class="bi bi-chevron-right"></i> Register here </a>
              </div>
              {/*<a href="" class="btn btn-light mt-3">
              <i class="bi bi-chevron-right"></i> Read More
  </a>*/}
              <p class="lead mt-3 mb-0">Deadline for registration: 23:59, 17th September</p>
              <br />
              <p class="lead"> For any queries or issues, please email <br />icisinvestmentsoc @gmail.com</p>
            </div>
            <div class="col-md mb-3 mb-md-0">
              <img src="img/competition/Untitled 5 (1) (1).svg" class="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section id="learn" class="pt-3 px-3 bg-light text-dark">
        <div class="container">
          <div class="row align-items-center justify-content-between">
            <div class="col-md p-md-5">
              <h2 class='fw-bold'>EVENT DETAILS</h2>
              <p class="lead"> Participants will form teams of 3-4 to submit a pitch book of an equity investment idea falling under
                one of our investment themes. To ensure that each team has the same amount of time to work on
                their pitchbook, investment themes, guidelines and rules will be withheld until the deadline of
                registration (23:59, 17th September). Individuals or groups looking for teammates are welcome to
                register and we will match you with available teammates. </p>
              <p class="lead"> The top 10 teams from the pitchbook submissions will be invited to pitch their investment idea to a
                panel including judges from partnering societies. At the end of this, the top 5 teams will advance to
                the grand finals where they will present in front of experienced judges from Temasek, well-known
                investment firms and professors.</p>
              <p class="lead">If you make it this far, well done!<br />Your efforts will be noted by
                Temasek.</p>
              <p class="font-weight-bold lead">The top 3 teams will receive cash prizes with the eligible students additionally being fast tracked to
                a final round interview with Temasek.</p>
              <p class="lead"> At the end of the competition, all participants who submitted a pitchbook will receive a signed
                certificate of participation and the top 10 teams will receive an honorable mention on our websites
                and social media.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="pt-3 px-3">
        <div class="container">
          <div class="row text-center g-1 g-md-4"> {/* g is for gutters, not gap. A google image will suffice to explain what the gutter is. */}
            <div class="col-md d-md-flex align-items-stretch">
              <div class="card bg-dark text-light" style={{width:"100%"}}>
                <div class="card-body text-center">
                  <div class="h1 mb-3">
                    <i class="bi bi-trophy"></i>
                  </div>
                  <h5 class="card-title mb-3">
                    <span class="fs-1" style={{color:"#90EE90"}}>1<sup>st</sup></span><br />Place
                  </h5>
                  <p class="card-text fs-3">
                    A final round interview at Temasek
                  </p>
                  <p class="card-text">+ £300</p>
                </div>
              </div>
            </div>
            <div class="col-md d-md-flex align-items-stretch">
              <div class="card bg-dark text-light" style={{width:"100%"}}>
                <div class="card-body text-center">
                  <div class="h1 mb-3">
                    <i class="bi bi-award"></i>
                  </div>
                  <h5 class="card-title mb-3">
                    <span class="fs-1">2<sup>nd</sup></span><br />Place
                  </h5>
                  <p class="card-text fs-1">
                    £150
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md d-md-flex align-items-stretch">
              <div class="card bg-secondary text-light" style={{width:"100%"}}>
                <div class="card-body text-center">
                  <div class="h1 mb-3">
                    <i class="bi bi-award-fill"></i>
                  </div>
                  <h5 class="card-title mb-3">
                    <span class="fs-1">3<sup>rd</sup></span><br />Place
                  </h5>
                  <p class="card-text fs-1 align-bottom">
                    £100
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Sequence of events / carousel */}
      <section id="structure">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title mb-5 justify-center" style={{textAlign:"center"}}>Impact Investing Challenge 2021 Timeline</h4>
                  <div class="hori-timeline" dir="ltr">
                    <ul class="list-inline events d-xl-flex align-items-stretch">
                      <li class="list-inline-item event-list">
                        <div class="px-4">
                          <div class="event-date text-light"><span class="event-date-text bg-soft-primary">17<sup>th</sup> Sep 23:59</span></div>
                          <h5 class="font-size-16">Registration Deadline</h5>
                          <p class="text-muted">Register with your team in groups of 3 or 4.
                            Those without a team will be assigned to groups randomly. </p>
                          <p class="text-muted"></p>
                          <p class="text-muted"></p>
                          <div>
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLScxEcttssqPQDut4wmnVVEcgp1vGWHaJYaCf684yHRGnDLALw/viewform" class="btn btn-primary btn-sm"> <i class="bi bi-chevron-right"></i> Register here</a>
                          </div>
                        </div>
                      </li>
                      <li class="list-inline-item event-list">
                        <div class="px-4">
                          <div class="event-date text-light"><span class="event-date-text bg-soft-primary">20<sup>th</sup>-21<sup>st</sup> Sep</span></div>
                          <h5 class="font-size-16">Resources Release</h5>
                          <p class="text-muted"> Temasek and Investment Society wil provide a pitchbook tutorial and announce the competition themes.</p>
                        </div>
                      </li>
                      <li class="list-inline-item event-list">
                        <div class="px-4">
                          <div class="event-date text-light"><span class="event-date-text bg-soft-primary">3<sup>rd</sup> Oct 23:59</span></div>
                          <h5 class="font-size-16">Submission Deadline</h5>
                          <p class="text-muted">Every team must submit a pitchbook in the form of a PowerPoint presentation with additional notes
                            and a valuation spreadsheet.
                          </p>

                        </div>
                      </li>
                      <li class="list-inline-item event-list">
                        <div class="px-4">
                          <div class="event-date text-light"><span class="event-date-text bg-soft-primary">8<sup>th</sup> Oct</span></div>
                          <h5 class="font-size-16">Top 10 Round</h5>
                          <p class="text-muted">Top 10 teams will be announced.</p>
                        </div>
                      </li>
                      <li class="list-inline-item event-list">
                        <div class="px-4">
                          <div class="event-date text-light"><span class="event-date-text bg-soft-primary">11<sup>th</sup> Oct</span></div>
                          <h5 class="font-size-16">Presentation to Judges</h5>
                          <p class="text-muted">Top 10 teams will present to neutral judges.</p>
                        </div>
                      </li>
                      <li class="list-inline-item event-list">
                        <div class="px-4">
                          <div class="event-date text-light"><span class="event-date-text bg-soft-primary">12<sup>th</sup> Oct</span></div>
                          <h5 class="font-size-16">Top 5 Announcement</h5>
                          <p class="text-muted">Top 5 teams will be announced.</p>

                        </div>
                      </li>
                      <li class="list-inline-item event-list">
                        <div class="px-4">
                          <div class="event-date text-light"><span class="event-date-text bg-soft-primary">16<sup>th</sup> Oct</span></div>
                          <h5 class="font-size-16">Grand Final</h5>
                          <p class="text-muted">Top 5 teams will progress to the final with Temasek.</p>

                        </div>
                      </li>

                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Competition Themes */}
      <section id="structure" class="pt-3 px-3">
        <div class="container">
          <div class="row align-items-center justify-content-between">
            <div class="col-md">
              <img src="img/competition/Asset 14.svg" class="mx-auto d-block mb-4" width="30%" /> </div>
            <div class="col-md text-md-end">
              <h2>Theme #1: Decarbonisation and Alternative  Energy </h2>
              <p class="lead"> With regulations encouraging more and more enterprises to go carbon neutral,
                which companies are going to benefit from this carbon-offsetting boom?
                <br />  <strong>Which companies are well-positioned for the shift to EVs and alternative energy?
                </strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="learn" class="pt-3 px-3 bg-dark text-light">
        <div class="container">
          <div class="row align-items-center justify-content-between">
            <div class="col-md">
              <h2>Theme #2: Food Sustainability </h2>
              <p class="lead"> Ever had a Gregg’s vegan sausage roll?We think that societal food habits are changing rapidly.
                <br /> <strong> Which companies have the potential to lead this change?</strong></p>
            </div>
            <div class="col-md mb-1">
              <img src="img/competition/Asset 15.svg" class="mx-auto d-block" alt="" width="50%" />
            </div>
          </div>
        </div>
      </section>

      <section id="structure" class="pt-3 pt-md-4 px-3">
        <div class="container">
          <div class="row align-items-center justify-content-between">
            <div class="col-md text-md-end">
              <img src="img/competition/Asset 12.svg" class="mx-auto d-block mb-4" alt="" width="45%" /> </div>
            <div class="col-md text-md-end">
              <h2>Theme #3: Longer Lifespans</h2>
              <p class="lead">In Asia and elsewhere, people are living longer. This leads to changes in behaviour,
                consumption, and ever more novel and innovative ways to monitor healthcare.
                <br /> <strong> Which companies are ahead of the game?</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Instructions */}
      <section id="learn" class="pt-3 px-3 bg-light text-dark">
        <div class="container">
          <div class="row align-items-center justify-content-between">
            <div class="col-md p-md-5">
              <h2 class='fw-bold'>INSTRUCTIONS TO PARTICIPANTS</h2>
              <ol>
                <li>Select a globally listed equity falling under
                  <strong> one </strong>of our investment themes:
                  Decarbonisation and Alternative Energy, Food Sustainability & Longer life spans.</li>
                <li>
                  Attend our exclusive events for further guidance:
                  <ol type="a">
                    <li>Technicals Workshop and Competition Q&A: 20th September 1400:-16:00 BST.</li>
                    <li>Temasek Networking Event: 21st September 16:00-17:00 BST.</li>
                  </ol>
                </li>
                <li>Perform a valuation of  your chosen equity and create a pitchbook to explain why you think
                  it would make a good investment (further details under evaluation guidelines). </li>
                <li>Submit your pitchbook in <strong> and pdf format along with a valuation spreadsheet </strong> by <strong>3<sup>rd</sup> October 2021 23:59</strong>.
                  We will send out a submission form to all team leaders.</li>
                <li>Top 10 teams will be announced on <strong> 8<sup>th</sup> October 2021 </strong> </li>
                <li>Preliminary presentations for Top 10 teams will take place on <strong> 11<sup>th</sup> October 2021.</strong>
                </li>
                <li>Grand Finals for Top 5 on <strong>16<sup>th</sup> October 2021</strong>.</li>
              </ol>
              <h2 class="fw-bold">EXAMPLE STOCKS </h2>
              <p class="lead">A spreadsheet with example stocks for each theme can be accessed by clicking
                the button below.
              </p>
              <div class="mb-3">
                <a href="https://docs.google.com/spreadsheets/d/1aCYxvvbUp4rgHGxo54okMRYM8Wi7Zu4AS4CjH_WGHZw/edit#gid=0" class="btn btn-primary btn-sm" target="_blank"><i class="bi bi-chevron-right"></i> EXAMPLE STOCKS</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exclusive Events */}
      <section id="learn" class="pt-4 px-3 bg-dark text-light">
        <div class="container">
          <div class="row align-items-center justify-content-between">
            <div class="col-md ">
              <h2 class='fw-bold'>EXCLUSIVE EVENTS</h2>
              <h3> <strong>Technicals Workshop and Competition Q&#38; A, 20<sup>th</sup> September 14: 00-16: 00 BST
              </strong></h3>
              <p class="lead"> Hear and learn from the competition’s previous finalist and Temasek Summer Associate, Rohhil Chhabra,
                as he walks us through his winning pitchbook from last year.
                The Impact Investing Challenge organising committee will also be present to answer any questions you have
                pertaining to the competition.</p>
            </div>
            <div class="col-md p-3 ">
              <img src="img/rohil.jpeg" class="mx-auto d-block" alt="" width="55%" />
            </div>
          </div>
          <div class="row align-items-center justify-content-between pb-md-4">
            <div class="col-md">
              <h3> <strong>Temasek Networking Event, 21<sup>st</sup>September 16: 00-17: 00 BST
              </strong></h3>
              <p class="lead text-align"> Join us as we hear from Temasek
                investing professionals Yi-Lin Khoo (Associate Director, Investment Group - EMEA) and Uwe Hempel (Senior Associate, Investment Group - EMEA) as they take us through what makes a great pitchbook,
                talk about their personal background and experiences working in a global investment company,
                and provide tips about taking the next steps after the competition.</p>
            </div>
            <div class="col-md p-3">
              <img src="img/competition/Photo - Khoo Yi-Lin.jfif" class="mx-auto d-block" alt="" />
            </div>
            <div class="col-md p-5">
              <img src="img/competition/Photo - Uwe Hempel.jfif" class="mx-auto d-block" alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* Evaluation Guidelines */}
      <section id="learn" class="pt-4 px-3 bg-light text-dark">
        <div class="container">
          <div class="row align-items-center justify-content-between">
            <div class="col-md">
              <h2 class='fw-bold'>EVALUATION GUIDELINES</h2>
              <p class="lead">To identify the Top 10 teams, each pitchbook will be marked by a panel of judges from each partner university.
                <strong>In order to maintain neutrality</strong>, pitchbooks will be randomly sent off to each society’s panel of judges with only the team name visible on the submitted materials. A subsequent moderation meeting will be conducted between all society judges to finalise the Top 10 teams.
              </p>
              <p class="lead">For Top 10 presentations, each partner society will nominate 1 judge (total 4) to judge each presentation
                to ensure that the Top 5 team selection is unbiased.</p>
              <h3><strong> Level Marking Breakdown </strong></h3>
              <img src="img/competition/doughnut.svg" class="img-fluid" id="evaluation_donut" alt="Null" width="60%" />
              <h3><strong>Elaboration on evaluation donut</strong></h3>
              <ol>
                <li>Business model and industry (15%)
                  <ol type="a">
                    <li>What is the company’s business model?</li>
                    <li>How has the company stock performed historically?</li>
                    <li>   Who are the competitors?</li>
                    <li> What is the industry outlook, and what growth potential is there?</li>
                  </ol>
                </li>

                <li>Investment thesis including risk factors and mitigants (25%)
                  <ol type="a">
                    <li>What are the key drivers of the company?</li>
                    <li>What factors will affect the company’s revenue growth?</li>
                    <li>What are the risks to your thesis, and explain any mitigants against these risks?
                    </li>
                  </ol>
                </li>
                <li>Impact thesis (15%)
                  <ol type="a">
                    <li>How does the company’s operations relate to our themes?
                    </li>
                    <li>What effect/projections will the company have on the investment theme the stock falls under (quantitative)
                      and how does this compare to competitors?</li>
                    <li>Why do you think so?</li>
                    <li>How is the company doing in comparison to its sector in relation to ESG standards
                      (e.g.SASB, TCFD)?</li>
                  </ol>
                </li>
                <li>Valuation (20%)
                  <ol type="a">
                    <li>Discounted Cash Flow(DCF) analysis, Comparables Analysis.</li>
                    <li>What assumptions have you made in line with your investment thesis and why?</li>
                  </ol>
                </li>
                <li>Communication and Presentation
                  <ol type="a">
                    <li>Clean and clear slides (extra reasoning can be included in ppt comments),
                      and nicely formatted valuation sheet.
                    </li>
                    <li>Clear, concise presentation and responses to Q&A.</li>
                  </ol>
                </li>
              </ol>
            </div>
          </div>

        </div>
      </section>

      {/* Pitchbook rules */}
      <section id="learn" class="pt-3 px-3 bg-dark text-light">
        <div class="container">
          <div class="row align-items-center justify-content-between">
            <div class="col-md">
              <h2 class='fw-bold'>PITCHBOOK RULES</h2>
              <p class="lead">
                <ol>
                  <li>The chosen equity must be listed on an international exchange and be related to the investment themes. This link should be covered under Impact Thesis.</li>
                  <li>Pitchbook and valuation sheet should only contain team name and no mention of members’ names or universities. </li>
                  <li>Pitchbook should be no more than 8 slides (an extra 2 slides for appendix). </li>
                  <li>Pitchbook can contain explanations in the comments section of the ppt.  </li>
                  <li>Presentation for the pitchbook (for Top 10)  must not be longer than 30 minutes (15 mins for presentation +   15 mins for Q&A). </li>
                  <li>Pitchbooks and spreadsheets cannot be edited after the deadline for submission (3<sup>rd</sup> October 2021 23:59), with the exception of after the top 5 grand finalists have been announced on the 12<sup>th</sup> of October.
                    These 5 teams will have until the 15<sup>th</sup> October to submit their edited pitchbooks before the grand final on 16<sup>th</sup> October. </li>
                  <li>All members of presenting teams must speak during their respective teams presentation and Q&A.</li>
                </ol>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended ppt format */}
      <section id="structure" class="pt-3 px-3">
        <div class="container">
          <div class="row align-items-center justify-content-between">
            <div class="col-md ">
              <h2 class="fw-bold"> Recommended ppt Format </h2>

              <ol>
                <li>Executive Summary (1 slide)</li>
                <ol type="a">
                  <li>Company ticker, target price, time horizon.</li>
                  <li>Brief introduction to company and industry.</li>
                  <li>Summary of the investment/impact theses, including your view on the key drivers.</li>
                </ol>

                <li>Overview of industry and summary (1-2 slides)</li>
                <ol type="a">
                  <li>Give a brief overview of the historical context of the industry.</li>
                  <li>Explain the key themes in the industry and discuss the competitive landscape (e.g SWOT, Porter’s 5 Forces).</li>
                  <li>Analyse the total addressable market (TAM) for the company.</li>
                  <li>Explain the company’s business model and unit economics and compare this to the wider industry.</li>
                </ol>

                <li>Investment and Impact Thesis (1-2 slides)</li>
                <ol type="a">
                  <li>Identify the key drivers for the company. (Eg. patents for big pharma companies).</li>
                  <li>Explain your forward view of the key drivers, along with supporting evidence based on research. </li>
                  <li>Identify the catalysts that will cause the market to re-price the stock according to your view and investment horizon.</li>
                  <li>Explanation of how the company ties in with any one of the 3 main themes, and how it compares to competitors in delivering the theme.</li>
                  <li>Identify the specific impact factors of your chosen stock in relation to the relevant investment theme, where possible in a quantified manner (e.g reducing scope 1/2/3 carbon emissions by XX amount for an alternative energy stock).</li>
                  <li>Includes justification on how the long term impact can be realised.</li>
                  <li>Compare the company’s ESG metrics with competitors using the relevant ESG standards (e.g SASB, TCFD) - you may find some overlap with the theme/impact thesis.</li>
                </ol>

                <li>Valuation (1-2 slides)</li>
                <ol type="a">
                  <li>Screenshot of DCF, comparables valuation.</li>
                  <li>The valuation should reflect your investment thesis and all assumptions should be explained.</li>
                </ol>

                <li>Risks (1 Slide)</li>
                <ol type="a">
                  <li>Outline the key risks to your thesis and, where applicable, provide mitigating factors. </li>
                  <li>Provide a sense of the potential downside should the risk case play out</li>
                </ol>

                <li>Conclusion (1 Slide)</li>
                <li>Appendix (2 Slides)</li>
                <ol type="a">
                  <li>Eg. Sensitivity analysis, reference charts, references.</li>
                </ol>
              </ol>

            </div>
          </div>
        </div>
      </section>


      {/* Partners */}
      <section id="partners" class="py-5 p-lg-5 bg-secondary text-light">
        <div class="container text-center">
          <h2 class="fw-bold">PARTNERS</h2>
          <br /> <br />
          <div class="row mx-auto pb-5 pt-4">
            <div clas="col-md-6 offset-md-4 my-auto text-center">
              <img class="mx-auto d-block" alt="Responsive image" src="img/partners/Temasek_logo.png" width="50%" />
            </div>
          </div>
          <br />
          <div class="row text-center g-2"> {/* g is for gutters, not gap. A google image will suffice to explain what the gutter is. */}
            <div class="col-md">
              <img class="img-fluid " alt="Responsive image" src="img/partners/ICIS_logo.png" width="90%" />
            </div>
            <div class="col-md">
              <img class="img-fluid " alt="Responsive image" src="img/partners/CIBS_logo.png" width="50%" />
            </div>
            <div class="col-md">
              <img class="img-fluid " alt="Responsive image" src="img/partners/EFS_logo.png" width="60%" />
            </div>
            <div class="col-md">
              <img class="img-fluid " alt="Responsive image" src="img/partners/Trinity_logo.png" width="68%" />
            </div>
          </div>
        </div>
      </section>

      {/* If we don’t specify the position of the parent element, the child <div> will be positioned relative to the page. */}
      {/* About Temasek section */}
      <section id="learn" class="py-5 p-lg-5">
        <div class="container">
          <div class="row align-items-center justify-content-between">
            <div class="col-md p-5">
              <h2 class="fw-bold">ABOUT TEMASEK</h2>
              <p class="lead">Incorporated in 1974, Temasek is an investment company headquartered in Singapore. It is supported
                by 13 offices globally across 9 countries including the UK (London). </p>
              <p class="lead">As an active investor and engaged owner, Temasek aims to deliver sustainable value over the long
                term through its investment themes of Transforming Economies; Growing Middle Income
                Populations; Deepening Comparative Advantages; and Emerging Champions. As at 31 March 2021, it
                owns a portfolio of <span>&#163;</span>206 billion. </p>
              <p class="lead">For more information about Temasek please click on the button below.</p>
              <div>
                <a href="https://www.temasek.com.sg/en/index" class="btn btn-primary btn-sm"><i class="bi bi-chevron-right"></i> LEARN MORE</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )

}