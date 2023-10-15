import Card from "./Card";
function Services() {
  return (
    <div className="container services">
        <h2 className="main-title text-center">SERVICES</h2>
        <div className="card-cover">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-4 mb-2">
                        <Card title="Web Development" img="card1.png" text="Crafting user-friendly, responsive websites for seamless online experiences and business growth." />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="E-Commerce Services" img="card2.png" text="Comprehensive e-commerce solutions for online businesses, boosting sales and customer satisfaction." />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="Cyber Security" img="card3.png" text="Protecting digital assets from threats through robust defenses, vigilance, and proactive security measures." />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default Services;
