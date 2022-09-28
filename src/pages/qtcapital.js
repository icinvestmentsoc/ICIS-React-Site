import React from 'react'
export default function QTCapital(){
    return(
        <div>
        <section id="learn" class="pt-4 px-3 bg-dark text-light">
        <div class="container">
       
        <div class="row align-items-center justify-content-between">
    
        <div class="col-md p-md-2 pt-1">
        <h2 class="fw-bold"> INTRO TO QUEENS TOWER CAPITAL </h2>
          <p class="lead"> Queen’s Tower Capital is the undergraduate student run investment fund under 
          Imperial College Investment Society. The fund is designed to give students a taster of the world 
          of institutional investing. Led by the investment officers, the fund’s research analysts will 
          pitch their best investment ideas on a weekly basis (@ Tuesday 6pm, Huxley 311).  </p>
        </div>
        <div class="col-md mb-1">
        <img src="img/qtcapital/QT capital Logo MK-II White.svg" class="mx-auto d-block" alt="" width="45%" />
            </div>
        </div>
        </div>
    </section>
    
    

        <section id="learn" class="pt-4 px-3 bg-white text-dark">
        <div class="container">
        <div class="row align-items-center justify-content-between">
        <div class="col-md p-md-2 pt-1">
            <h2 class="fw-bold">Investment Philosophy</h2>
            <p class="lead">Our fund seeks to hold long only investments in high quality global companies with a 
            medium-term time horizon of 1-3 years that will increase in value over time and outperform the S&P500 through 
            realisation of intrinsic value over a wide range of geographies, sectors and market capitalisations within 
            a diversified portfolio comprising 100% shares.</p>
        </div>
        <div class="col-md p-md-2 pt-1">
        <img src="img/qtcapital/balance.svg" class="mx-auto d-block" alt="" width="70%" />
        </div>
         </div>   
        </div>
    </section>


        <section id="learn" class="pt-4 px-3 bg-white text-dark">
        <div class="container">
        <div class="row align-items-center justify-content-between">
        <div class="col-md p-md-2 pt-1">
            <h2 class="fw-bold">Team</h2>
            {/*Equity Team*/}
            <p class="fs-3">Equity Team</p>
            <p class="lead">Our equities team consists of sector heads and analysts working in tandem to 
            fundamentally value stocks in the following sectors:</p>
            <p class="lead">1.	Technology, Media and Telecommunications (TMT)
            <br />2.	Healthcare
            <br />3.	Renewables
            <br />4.	Industrials
            <br />5.	Transport
            <br />6.	Consumer & Retail
            <br />7.	Financials
            </p>
            <p class="lead">This comprises of 4 main roles:</p>
            <p class="lead">1.	Alumni Advisory Committee
            <br />This level consists of investment professional currently working in the investment sector. 
            Each term, 2 of the best pitches by our sector teams will have the chance to pitch to this committee for 
            feedback. This committee is also in charge of providing advice on the fund and its portfolio.</p>
            <p class="lead">2.	Investment Committee
            <br />This level consists of a few highly experienced students who have the final say on all 
            investment decisions the fund takes. </p>
            <p class="lead">3.	Sector Heads
            <br />Sector Heads are responsible for leading their analyst team in conducting fundamental 
            analyses, research of companies and investment pitches in their given sector. Students in this role have 
            good experience in conducting financial analysis of companies and are in charge of mentoring analysts 
            who may be new to the process.</p>
            <p class="lead">4.	Analysts
            <br />Analysts are in charge of conducting the investment pitches and analyses of the potential 
            companies they have identified as opportunities for the fund.</p>
            <p class="lead">We are currently recruiting for the roles of Sector Heads and Analysts.</p>
            
            {/*Systematic Trading and Quantitative Research Team*/}
            <p class="fs-3">Systematic Trading and Quantitative Research Team</p>
            <p class="fs-4">Systematic Trading Team</p>
            <p class="lead">The Systematic Fund seeks to develop and maintain momentum-based strategies that are 
            back tested and run virtually using the fund’s own back testing code written in Python.</p>
            <p class="lead">The Systematic Fund algorithms run across multiple different asset classes and allows 
            for both long and short positions that are benchmarked against the S&P 500. The systematic fund has 
            analyst teams working on different algorithms including long term outperformance algorithms (alpha strategies) 
            and systematic beta strategies.</p>
            <p class="lead">This year the systematic research group will also work on developing technical analysis 
            tools to provide main fund analysts with additional information about relative performances of stocks.</p>
            
            <p class="fs-4">Quantitative Research Team</p>
            <p class="lead">The Quantitative Research group aims to provide analysts with the opportunity to conduct 
            research and discuss financial market microstructure phenomena.</p>
            <p class="lead">Potential areas of interest for further study include:</p>
            <p class="lead">1.	Designing optimal execution algorithms
            <br />2.	Analysing market impact for different types of orders
            <br />3.	Calculating limit order fill probabilities
            <br />4.	Intraday volatility modelling
            </p>
        
        </div>
        <div class="col-md p-md-2 pt-1">
        <img src="img/qtcapital/balance.svg" class="mx-auto d-block" alt="" width="70%" />
        </div>
         </div>   
        </div>
    </section>

        </div>
    )
}