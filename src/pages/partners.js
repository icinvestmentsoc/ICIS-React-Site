import React from 'react'
export default function Partners() {
  return (
    <div>
      {/* gold sponsors */}
      <section id="learn" class="pt-3 pb-2 px-3 bg-dark text-light">
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
          }}> GOLD SPONSORS</span> </h2>
          <div class="row align-items-center justify-content-between">
            <div class="col-md mb-3 mb-md-0">
              <h3>Temasek</h3>
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
            <div class="col-md mb-3 mb-md-0">
              <div clas="col-md-6 offset-md-4 my-auto text-center">
                <img class="mx-auto d-block" alt="Responsive image" src="img/partners/Temasek_logo.png" width="50%" />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* bronze sponsors */}
      <section id="learn" class="pt-3 px-3 pb-2 bg-light text-dark">
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
          <div class="row align-items-center justify-content-between">
            <div class="col-md mb-3 mb-md-0">
              <h3>Aragon</h3>
              <p class="lead">Aragon Global Management is a long/short hedge fund active in the global equities markets, with a
                focus on the Tech, Consumer and Financials sectors.Founded in 2001 by Anne Dias, Aragon was
                started with initial capital from Julian Robertson of the Tiger Fund and became one of the largest
                hedge funds managed and started by a woman.It has received awards from Institutional Investor,
                The Hedge Fund Journal, and US Banker, among others.</p>
              <p class="lead">The firm has offices in New York and Paris.Aragon invests globally, with about half of the portfolio
                invested in non-US stocks and follows a fundamental investment strategy and a multi-year time
                horizon.</p>
              <p class="lead">For more information about Aragon please click on the button below.</p>
              <div>
                <a href="https://aragonglobal.com/en/home/intro" class="btn btn-primary btn-sm"><i class="bi bi-chevron-right"></i> LEARN MORE</a>
              </div>
            </div>
            <div class="col-md mb-3 mb-md-0">
              <div clas="col-md-6 offset-md-4 my-auto text-center">
                <img class="mx-auto d-block" alt="Responsive image" src="img/bronze sponsors/aragon-black.svg" width="50%" />
              </div>
            </div>
          </div>

          <div class="row align-items-center justify-content-between">
            
            <div class="col-md mb-3 mb-md-0">
              <h3>Careerships</h3>
              <p class="lead">Careerships is an award winning and internationally reaching career transformation company.
                With clients ranging from graduates through to C-Suite executives and heads of state,
                they operate across 12 countries and have a 100% success rate in helping individuals understand what they want to do with their career and then partner with them to help them achieve those objectives.</p>
              <p class="lead">
                Using a unique blend of psychology, human resources, people dynamics, artificial intelligence and research, they work in partnership with individuals to ensure that their career objectives and ambitions are realised. Founded in 2020 with aggressive growth plans and a mission to change the career landscape across the globe, they also partner with other professional and academic organisations and conduct pro bono work on a monthly basis to assist undergraduates.
              </p>
            </div>
            <div class="col-md mb-3 mb-md-0">
              <div clas="col-md-6 offset-md-4 my-auto text-center">
                <img class="mx-auto d-block" alt="Responsive image" src="img/bronze sponsors/logo_careerships.svg" width="50%" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* partners */}
      <section id="learn" class="pt-3 px-3 bg-white text-dark">
        <div class="container">
          <div class="row align-items-center justify-content-between">
            <h2 style={{ textAlign: "center" }}> <span> PARTNERS</span> </h2>
            <div class="col-md mb-3 mb-md-0">
              <h3>ChineseAlpha</h3>
              <p class="lead">ChineseAlpha is an equity research platform that demystifies listed Chinese companies by providing in-depth, quality research. </p>
              <p class="lead">
                Its goal is to become the ultimate reference for research and coverage of Chinese equity markets with the purpose of allowing global investors to make accurate and informed investment decisions.
              </p>
            </div>
            <div class="col-md mb-3 mb-md-0">
              <div clas="col-md-6 offset-md-4 my-auto text-center">
                <img class="mx-auto d-block" alt="Responsive image" src="img/partners/CA_logo.svg" />
              </div>
            </div>


          </div>
        </div>
      </section>
    </div>
  )
}