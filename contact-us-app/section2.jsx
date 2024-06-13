const AboutSection = () => {
  return (
    <section className="about-section section-padding" id="section_2">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-12 text-center">
            <h2 className="mb-lg-5 mb-4">About Me</h2>
          </div>

          <div className="col-lg-6 col-12 me-auto mb-4 mb-lg-0">
            <p>
              <strong>Yuliana</strong> merupakan seorang lulusan baru dari jurusan Teknik Elektro program studi D4 Jaringan Telekomunikasi Digital. Memiliki ketertarikan pada bidang Internet of Things, Mikrokontroler, dan komunikasi Fiber Optik.
            </p>
            <p>
              Dalam menempuh pendidikan sarjana terapan ini, saya mengikuti beberapa program di antaranya yakni Student Mobility Program focusing in Optical Communication in Universiti Tun Hussein Onn Malaysia 2020-2021 selama satu semester dengan nilai yang sangat memuaskan.
            </p>
          </div>

          <div className="col-lg-5 col-md-6 col-12 mb-4 mb-lg-1 mb-md-0">
            <div className="member-block">
              <div className="member-block-image-wrap">
                <img src="img/yuli.jpg" className="member-block-image img-fluid" alt="" />
                <ul className="social-icon">
                  <li className="social-icon-item">
                    <a href="https://www.linkedin.com/in/yulianaprastiwi/" className="social-icon-link bi-linkedin"></a>
                  </li>
                  <li className="social-icon-item">
                    <a href="#" className="social-icon-link bi-whatsapp"></a>
                  </li>
                </ul>
              </div>

              <div className="member-block-info d-flex align-items-center">
                <h4>Bachelors Graduation</h4>
                <p className="ms-auto">26th of August 2023</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
