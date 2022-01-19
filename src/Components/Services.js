import React from 'react'
import Card from './Card'
import Data from './ApiData'

const Services = () => {
    return (
        <div>
            <div className='mb-4'>
                <h1 className="text-center text-info my-5">Our Services</h1>
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
    )
}

export default Services
