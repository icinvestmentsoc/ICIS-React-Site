
export default function Events() {
  return (
    <>
      <section class="pt-3 pb-2 px-3 bg-secondary text-light">
        <div class="container">
          <h2 style={{ textAlign: "center" }}>EVENTS</h2>
          <div class="row text-center g-1 g-md-4"> {/* g is for gutters, not gap. A google image will suffice to explain what the gutter is. */}
            <div class="col-md d-md-flex align-items-stretch">
              <div class="card bg-dark text-light" style={{ width: "100%" }}>
                <div class="card-body text-center">
                  <div class="h1 mb-3">
                    <i class="bi bi-trophy"></i>
                  </div>
                  <h5 class="card-title mb-3">
                    <span class="fs-1" style={{ color: "#90EE90" }}>1<sup>st</sup></span><br />Place
                  </h5>
                  <p class="card-text fs-3">
                    A final round interview at Temasek
                  </p>
                  <p class="card-text">+ £300</p>
                </div>
              </div>
            </div>
            <div class="col-md d-md-flex align-items-stretch">
              <div class="card bg-dark text-light" style={{ width: "100%" }}>
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

          </div>
        </div>
      </section>

    </>
  )
}