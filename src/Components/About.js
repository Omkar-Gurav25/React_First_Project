import React from 'react'
import Card from './Card'
import Data from './ApiData'

const About = () => {
    return (
        <>
            <div className="div container">
                <div className="div row my-4 d-flex align-items-center">
                    <div className="col-xs-12 col-md-6">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste harum aspernatur tempora, suscipit alias reprehenderit odio neque saepe odit at, iure animi, accusantium facere cum atque sunt nemo molestias itaque.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus error id, natus nisi ipsa cum odio delectus modi assumenda hic repudiandae voluptates, doloremque sequi qui eius repellendus in architecto a!</p>
                    </div>

                    <div className="col-xs-12 col-md-6">
                        <img src='../images/trail.jpg' class="d-block w-100 rounded" alt="..."></img>
                    </div>
                </div>

                {/* Team Section */}
                <div>
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
                </div>
            </div>
        </>
    )
}

export default About
