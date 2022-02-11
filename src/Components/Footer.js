import React from 'react'

const Footer = () => {
    return (
        <footer className='site-footer'>
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-6 mb-5">
              <p className='pt-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex optio, impedit, exercitationem iste voluptas quaerat dolore aliquam adipisci, repellat voluptatem dolores voluptatum vero officia quidem perspiciatis quas beatae ducimus excepturi.</p>
              <div className="row icons">
              {/* <div className='col-md-1'><i className="fab fa-facebook-square"></i></div> */}
              <div className='col-md-7'><h4 className='text-uppercase text-warning'>Greenford overseas</h4></div>
              <div className='col-md-5 px-2 py-1'>

                <a class="text-blue-100 hover:text-blue-600 font-semibold block p-2 text-sm"
                  href="/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-facebook-square"></i>
                </a>
                <a class="text-blue-100 hover:text-blue-600 font-semibold block p-2 text-sm"
                  href="/"
                >
                  <i className="fab fa-twitter-square"></i>
                </a>
                <a class="text-blue-100 hover:text-blue-600 font-semibold block p-2 text-sm"
                  href="/"
                >
                  <i class="fab fa-instagram-square"></i>
                </a>
              </div>
              </div>
            </div>

            <div className="col-md-2 mb-5">
              <h2 className='text-uppercase'>Our Company</h2>
              <ul className="list-unstyled footer-link">
                <li><a href="#" className='text-uppercase'>Home</a></li>
                <li><a href="#" className='text-uppercase'>About us</a></li>
                <li><a href="#" className='text-uppercase'>our products</a></li>
                <li><a href="#" className='text-uppercase'>media</a></li>
                <li><a href="#" className='text-uppercase'>contact us</a></li>
              </ul>
            </div>

            <div className="col-md-2 mb-5">
              <h2 className='text-uppercase'>Our Products</h2>
              <ul className="list-unstyled footer-link">
                <li><a href="#" className='text-uppercase'>Home</a></li>
                <li><a href="#" className='text-uppercase'>About Us</a></li>
                <li><a href="#" className='text-uppercase'>our products</a></li>
                <li><a href="#" className='text-uppercase'>media</a></li>
                <li><a href="#" className='text-uppercase'>contact us</a></li>
              </ul>
            </div>

            <div className="col-md-2 mb-5">
              <h3 className='text-uppercase'>Contact Us</h3>
              <ul className="list-unstyled footer-link">
                <li style={{fontSize: "15px"}}><a href="tel:+91 7588777800" className="ml-2 text-bold">
                  <i class="fas fa-phone-alt"></i>
                  {"  "}
                </a>+91 7545856952</li>
                <li style={{fontSize: "15px"}}><a href="tel:+91 7588777800" className="ml-2 text-bold">
                <i class="fas fa-envelope"></i>
                  {"  "}
                </a>support@greenford.net.in</li>
              </ul>
            </div>
            <hr style={{ height: "2px solid", color:"white"}}/>
            <div class="flex flex-wrap items-center md:justify-between justify-center">
                        <div class="w-full md:w-4/12 mx-auto text-center">
                            <div class="text-sm font-semibold py-10 ">
                                © <span id="get-current-year">2022 </span>
                                GREENFORD OVERSEAS | Designed & developed
                                by{" "}
                                <a href="http://5techg.com" target="_blank">
                                    ME
                                </a>
                            </div>
                        </div>
                    </div>
          </div>
        </div>
      </footer>

    )
}

export default Footer
