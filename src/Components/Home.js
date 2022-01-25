import React from 'react'
import Card from './Card'
import Data from './ApiData'

const Home = () => {
    return (
        <div>
            {/* Carousel Section */}

            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                </div>
                <div class="carousel-inner w-75 h-50" style={{ margin: "auto" }}>
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

            {/* Welcome Section */}
            <div>
                <h2 className='text-center text-dark py-4'>WELCOME TO GREENFORD OVERSEAS</h2>
                <div className="container px-5 mx-5">
                    <div className="container px-5 mx-5">
                <ul className='px-5 mx-5' style={{ listStyle: "square" }}>
                    <li className='py-1'>Greenford Overseas is one of the leading fresh fruit, vegetable and spices export company from India.</li>
                    <li className='py-1'>Our main activity is export of Table grape, Pomegranate, Onion, Mango, Fruits & Fresh Vegetables, Spices and Essential Oil.</li>
                    <li className='py-1'>Geographical location: We are Located at Pune, Maharashtra (India) which is the only place in India where Fruits & vegetables are exported.</li>
                    <li className='py-1'>Nearest sea and air port is MUMBAI located only 4.00 hour journey from Pune. This is the major benefits of our geographical location.</li>
                </ul>
                </div>
                </div>
            </div>

            {/* Core Values Section */}
            <div className='services'>
                <h1 className="text-center text-dark py-5">CORE VALUES</h1>

                <div className='services-box'>
                    <div className="row justify-center py-4">
                        <div
                            className="col-lg-3 col-md-6 d-flex align-items-stretch px-2 py-3"
                            data-aos="zoom-in"
                            data-aos-delay="100"
                        >
                            <div className="icon-box  border border-success rounded-3 pt-1">
                                <div className="icon mt-0 py-2">
                                    <img

                                        src="https://img.icons8.com/external-itim2101-lineal-itim2101/64/000000/external-insurance-insurance-itim2101-lineal-itim2101-2.png"
                                        alt=""
                                    />
                                </div>
                                <hr className="mb-2" style={{width: "80%", margin: "auto"}} />
                                <h4>
                                    <a href="" className="font-bold">
                                        INFRASTRUCTURE
                                    </a>
                                </h4>
                                <hr className="mb-2" style={{width: "80%", margin: "auto"}}/>
                                    <p>We operate through our modern <br />pack house / cold storage facility for grapes, onion grading center & modern packing facility for Vegetable in India) with Best Hygienic conditions.</p>
                            </div>
                        </div>

                        <div
                            className="col-lg-3 col-md-6 d-flex align-items-stretch px-2 py-3"
                            data-aos="zoom-in"
                            data-aos-delay="200"
                        >
                            <div className="icon-box border border-success rounded-3 pt-1">
                                <div className="icon mt-0 py-2">
                                    <img
                                        src="https://img.icons8.com/external-flatart-icons-solid-flatarticons/64/000000/external-bank-taxes-flatart-icons-solid-flatarticons.png"
                                        alt=""
                                    />
                                </div>
                                <hr className="mb-2" style={{width: "80%", margin: "auto"}}/>
                                <h4>
                                    <a href="" className="font-bold">
                                        QUALITY
                                    </a>
                                </h4>
                                <hr className="mb-2" style={{width: "80%", margin: "auto"}}/>
                                    <p className='px-2'>Being quality conscious organization ,all our produce from associated growers are closely monitored in various growth stages till packaging, the produce can be tested in APEDA recognized laboratories as per customer’s need.</p>

                            </div>
                        </div>

                        <div
                            className="col-lg-3 col-md-6 d-flex align-items-stretch px-2 py-3" 
                            data-aos="zoom-in"
                            data-aos-delay="300"
                        >
                            <div className="icon-box border border-success rounded-3 pt-1">
                                <div className="icon mt-0 py-2">
                                    <img
                                        src="https://img.icons8.com/external-wanicon-lineal-wanicon/64/000000/external-bull-market-stock-market-wanicon-lineal-wanicon.png"
                                        alt=""
                                    />
                                </div>
                                <hr className="mb-2" style={{width: "80%", margin: "auto"}}/>
                                <h4>
                                    <a href="" className="font-bold">
                                        PACKAGING
                                    </a>
                                </h4>
                                <hr className="mb-2" style={{width: "80%", margin: "auto"}}/>
                                    <p>Greenford Overseas Packing is carried out in APEDA Approved pack house in hygienic packaging material to suit end users requirements for export as well as domestic market.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Packages Section */}
            <div className='my-3 rounded'>
                <h1 className="text-center text-info my-5">Our Packages</h1>
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
            </div>

            {/* Question Asked */}
            <div className='Questions  mx-5 mb-4'>
                <h1 className="div text-center text-danger my-4">Question Asked</h1>
                <div class="accordion accordion-flush mx-5" id="accordionFlushExample">
                    <div class="accordion-item mx-5">
                        <h2 class="accordion-header" id="flush-headingOne">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                Accordion Item #1
                            </button>
                        </h2>
                        <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                        </div>
                    </div>
                    <div class="accordion-item mx-5">
                        <h2 class="accordion-header" id="flush-headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                Accordion Item #2
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                        </div>
                    </div>
                    <div class="accordion-item mx-5">
                        <h2 class="accordion-header" id="flush-headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                Accordion Item #3
                            </button>
                        </h2>
                        <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
