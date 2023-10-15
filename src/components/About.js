function About() {
  return (
    <>
      <div style={{marginTop:'15rem',width:'100%',height:'10px'}} className="about-scroll"></div>

      <div className="container about">
        <div className="row">
          <div className="col-md-6 text-center">
            <img alt="about" src="./img/img1.png" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h2 className="main-title about-h2">PORTFOLIO</h2>
            <p className="main-p">
            Our software company's portfolio showcases a diverse range of transformative projects.
             We've empowered businesses with tailored solutions, from cutting-edge mobile apps
              that enhance user engagement to robust web platforms that drive online presence and
               e-commerce success. Our expertise extends to enterprise-level software, ensuring 
               efficiency and scalability. We've delved into machine learning and AI, crafting 
               intelligent applications that redefine automation and data-driven decision-making.
                Our portfolio embodies versatility, demonstrating our ability to adapt to industry-specific needs,
                 be it healthcare, finance, or education. Every project reflects our unwavering commitment to
                  excellence and innovation, with the goal of future-proofing our clients in a rapidly evolving digital world.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
