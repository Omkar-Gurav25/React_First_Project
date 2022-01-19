import React from 'react'

const Contact = () => {
    return (
        <>
            <h1 className="text-center text-info">Contact Us</h1>
            <div className="container">
                <div class="mb-3  ">
                    <label for="exampleFormControlInput1" class="form-label">Name</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Name"/>
                </div>
                <div class="mb-3  ">
                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Email id"/>
                </div>
                <div class="mb-3  ">
                    <label for="exampleFormControlInput1" class="form-label">Mobile No</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Mobile No"/>
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
