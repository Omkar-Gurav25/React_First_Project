import React from 'react'
import Card from './Card'
import Data from './ApiData'

const About = () => {
    return (
        <>
            <div className="div container" >
                <div className="div row my-1 d-flex align-items-center p-5">

                    <div className="col-xs-12 col-md-6 pt-5">
                        <h1 className='m-3 pt-3'>ABOUT US</h1>
                        <ul style={{ listStyle: "disc" }}>

                            <li className='m-1'><b>Established in the year 2020, started export with Agriculture and Spices.</b></li>
                            <li className='m-1'>From year 2020, Greenford Overseas increased operations apart from Export, supplying quality fruits and vegetable in the domestic market as well as leading supermarket chain in India.</li>
                            <li className='m-1'>We Export & supply <b>FRESH FRUITS, VEGETABLES, ONIONS, GRAINS AND SPICES.</b>With our sustainable crop solutions to produce safe and high quality fruits, vegetables and spices by lowering the residue levels, customized crop protection programs with the help of continuous involvements &amp; monitoring of growers at field level comply with Good agricultural practices.</li>

                        </ul>
                    </div>

                    <div className="col-xs-12 col-md-6">
                        {/* <img src='../images/trail.jpg' class="d-block w-100 rounded" alt="..."></img> */}

                        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                            </div>
                            <div class="carousel-inner w-100 h-100" style={{ margin: "auto" }}>
                                <div class="carousel-item active">
                                    <img src="./images/4.png" class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src="./images/5.png" class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src="./images/1.png" class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src="./images/3.png" class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src="./images/2.png" class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src="./images/6.png" class="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
                <hr />

                <div className='key-points'>
                    <ul style={{ listSytle: "disc"}}>
                        <li className='pb-2'>
                            <h3>Infrastructure</h3>
                            <p>- We operate through modern <b>pack house / cold storage facility for Grapes, Pomegranate &amp; Fresh Vegetables in a BRC and APEDA</b> accredited pack house.<br className='pb-1'/>
                            - We also have Onion packing facility in the center of growing area.</p>
                        </li>
                        <li className='pb-2'>
                            <h3>Quality</h3>
                            <p>- Being quality conscious organization ,all our produce from associated growers are closely monitored in various growth
                                 stages till <b>packaging, the produce can be tested in APEDA recognized laboratories</b> as per customer’s need.</p>
                        </li>

                        <li className='pb-2'>
                            <h3>Packing</h3>
                            <p>- Packing is carried out in <b>APEDA Approved pack house in hygienic packaging material </b>to suit end users requirements for 
                            export as well as domestic market.</p>
                        </li>

                        <li className='pb-2'>
                            <h3>How We Works</h3>
                            <p><b>- Greenford Overseas is associated with number of growers and provides them techno-managerial support since cultivation.</b>
                                 <br className='pb-1'/>- We have our own professional team which regularly is in touch with all growers in area of crop management, certifications,
                                  food safety and quality assurance.<br className='pb-1'/>- Our principle is to utilize our comprehensive experience to provide highest quality and
                                   excellent service to all the customers.<br className='pb-1'/>- We mainly export to <b>Netherlands, Germany, France, Italy, Canada, UK, Malaysia,
                                    Thailand, Singapore & Gulf Countries.</b></p>
                        </li>

                        <li className='pb-2'>
                            <h3>Mission</h3>
                            <p><b>“Quality is not an accident, miracle or an assumed thing but it is continuous</b> and sustained efforts of strong 
                                techno-managerial skill and<b> dedication towards target.</b> We are committed to ensure our strong privilege to fulfill 
                                the requirements of our valuable customers and strengthen the confidence and improve the prosperity of growers.”</p>
                        </li>
                    </ul>
                </div>
                {/* Team Section */}
                {/* <div>
                    <h1 className="text-info text-center">Our Team</h1>

                    <div className="div container">
                        <div className="div row">
                            {Data.map((values) => {
                                return (
                                    <>
                                        <Card title={values.title} image={values.images} data={values.data} />
                                    </>
                                )
                            })}
                        </div>
                    </div>
                </div> */}
            </div>
        </>
    )
}

export default About
