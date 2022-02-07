import React from 'react'

const Contact = () => {
    return (
        <>
            <div className='container country pt-5 bg-light'>
                <h2 className='text-center py-4 text-secondary'>Greenford Overseas Around The World</h2>
                <h6 className='px-5 text-danger'>Presently the firm is Exporting to around 36 Countries like USA, UK, CANADA, OMAN, QATAR, JORDAN, SINGAPORE, KUWAIT, SAUDI ARABIA, ALGERIA, MOROCCO, TUNISIE, NIGERIA, etc and are eager to expand all over the GLOBE.</h6>


                <div class="container table-data py-4">
                    <table className='border'>
                        <tbody className='border'>
                            <tr>
                                <td width="33%">
                                    <ul style={{ listStyle: "square" }}>
                                        <li>USA</li>
                                        <li>UK</li>
                                        <li>Canada</li>
                                        <li>Oman</li>
                                        <li>Jordan</li>
                                        <li>Singhapore</li>
                                        <li>UAE</li>
                                        <li>Qatar</li>
                                        <li>Oman</li>
                                        <li>Egypt</li>
                                        <li>Syria</li>
                                        <li>Algeria</li>
                                        <li>Iran</li>
                                        <li>Iraq</li>
                                    </ul>
                                </td>
                               
                                <td width="33%">
                                    <ul style={{ listStyle: "square" }}>
                                        <li>Kuwait</li>
                                        <li>Saudi Arabia</li>
                                        <li>Algeria</li>
                                        <li>Morocco</li>
                                        <li>Tunisie</li>
                                        <li>Nigeria</li>
                                        <li>China</li>
                                        <li>Singapore</li>
                                        <li>Kuwait</li>
                                        <li>Yemen</li>
                                        <li>Pakistan</li>
                                        <li>Saudi Arabia</li>
                                        <li>Jordan</li>
                                        <li>etc.</li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>

            <h1 className="text-center text-info pt-4 bg">Contact Us</h1>
            <div className="container">
                <div class="mb-3  ">
                    <label for="exampleFormControlInput1" class="form-label">Name</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Name" />
                </div>
                <div class="mb-3  ">
                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Email id" />
                </div>
                <div class="mb-3  ">
                    <label for="exampleFormControlInput1" class="form-label">Mobile No</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Mobile No" />
                </div>
                <div class="mb-3  ">
                    <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button className="btn btn-primary">Submit Feedback</button>
            </div>
        </>
    )
}

export default Contact
