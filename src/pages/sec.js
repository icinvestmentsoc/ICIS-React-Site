import React from 'react'
export default function SEC(){
    return (
        <div>
      <section id="learn" class="pt-4 px-3 bg-dark text-light">
        <div class="container">
       
        <div class="row align-items-center justify-content-between">
    
        <div class="col-md p-md-5 pt-2">
        <h2 class="fw-bold"> ABOUT THE SEC </h2>
          <p class="lead"> The Investment Society's flagship lecture course has been remodelled with a revised
            syllabus and teaching style to boost your knowledge and skills for a career in
            Investment and Finance. </p>
          <p class="lead"> We will be delivering the technicals and fundamentals you need to navigate your way
            through the world of finance, with topics including key players, equities, derivatives, fixed income 
            and more.</p>
          <p class="lead"> This year's SEC is a 7-part lecture series (held on Saturdays, starting from 15 October). Upon completion of the graded exam at the
            end of the course, you will be given a certificate that you can present to prospective
            employers on your CV. </p>
          <p class="lead">Registration is now closed.</p>
          {/*<div>
                <a href="https://forms.office.com/r/p8YurNE1Qn" class="btn btn-primary btn-sm"><i class="bi bi-chevron-right"></i> REGISTRATION</a>
          </div>*/}
          
        </div>
        <div class="col-md mb-1 mt-sm-1">
        <img src="img/sec/SEC coloured.svg" class="mx-auto d-block" alt="" width="60%" />
            </div>
        </div>
        </div>
    </section>
        

    <section class="pt-5 p-lg-5" id="questions">
        <div class="container">
          <h2 class="text-center mb-4">Frequently Asked Questions</h2>
          <div class="accordion accordion-flush" id="questions">
            {/*Item 1*/}
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#question-one">
                  Is this course only for current students at Imperial?
                </button>
              </h2>
              <div id="question-one" class="accordion-collapse collapse" data-bs-parent="#question">
                <div class="accordion-body">No, it is open to all, but we will be giving current students at Imperial priority. 
                </div>
              </div>
            </div>
            {/*Item 2*/}
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#question-two">
                  Do I need to know anything about finance before joining this course?
                </button>
              </h2>
              <div id="question-two" class="accordion-collapse collapse" data-bs-parent="#question">
                <div class="accordion-body">
                Absolutely not – you do not need any experience and we will be starting with the basics of finance and teaching 
                from the ground up. If you do have experience, that’s great too! There is something for everyone in our course. 
                </div>
              </div>
            </div>
            {/*Item 3*/}
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#question-three">
                  Are lectures online/recorded?
                </button>
              </h2>
              <div id="question-three" class="accordion-collapse collapse" data-bs-parent="#question">
                <div class="accordion-body">
                  Yes, lectures will be posted online and recorded. 
                </div>
              </div>
            </div>
            {/*Item 4*/}
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#question-five">
                  How does certification work?
                </button>
              </h2>
              <div id="question-five" class="accordion-collapse collapse" data-bs-parent="#question">
                <div class="accordion-body">At the end of the course we will conduct an exam of the content we have taught over the 7 weeks. 
                If you pass, you will then be sent a certificate that Investment Society will endorse should you elect to put this on your CV. </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    )
}