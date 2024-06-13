const CarouselComponent = () => {
  return (
    <section className="padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-12 text-center">
            <h2 className="mb-lg-5 mb-4">Carousel Section</h2>
          </div>
          <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="img/2521.jpg" className="d-block w-100" alt="2521" />
              </div>
              <div className="carousel-item">
                <img src="img/atypical.jpg" className="d-block w-100" alt="atypical family" />
              </div>
              <div className="carousel-item">
                <img src="img/drslump.jpg" className="d-block w-100" alt="dr slump" />
              </div>
              <div className="carousel-item">
                <img src="img/samdalri.jpg" className="d-block w-100" alt="samdalri" />
              </div>
              <div className="carousel-item">
                <img src="img/qot2.jpg" className="d-block w-100" alt="qot" />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarouselComponent;
