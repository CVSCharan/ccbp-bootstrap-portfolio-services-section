import './App.css';

function App() {
  return (
     <div className="bg-container">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1 className="heading mt-3">Services</h1>
                    <h1 className="heading1 mt-3">What I do</h1>
                </div>

                <div className="col-12 col-md-6 col-lg-4">
                    <div className="cardcontainer shadow mt-3">
                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-web-design-img.png" className="img"  alt="img1" />
                        <h1 className="cardheading">Static Websites</h1>
                        <p className="para">
                            A Static Website contains Web
                            pages with fixed content. Each
                            page is developed using HTML
                            and CSS and displays the same
                            information to every visitor.
                        </p>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-4">
                    <div className="cardcontainer mt-3">
                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-web-development-img.png" className="img" alt="img2" />
                        <h1 className="cardheading">Responsive Web design</h1>
                        <p className="para">
                            Responsive Web design is the
                            approach that suggests that
                            design and development should
                            respond to the user's behaviour
                            and environment based on
                            screen size, platform and
                            orientation.
                        </p>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-4">
                    <div className="cardcontainer mt-3">
                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-customize-img.png" className="img" alt="img3" />
                        <h1 className="cardheading">Customisable Layouts</h1>
                        <p className="para">
                            Customisable sites are
                            templates with set layouts. You
                            may be able to change photos
                            and colors, but your site will look
                            similar to many other sites due
                            to the template. The same goes
                            for.
                        </p>
                    </div>
                </div>



            </div>
        </div>
    </div>
  );
}

export default App;
