import React from 'react'

const Card = ({title, image, data}) => {
    return (
        <>
            <div className="div col-xs-12 col-sm-6 col-md-4">
                <div class="card mb-3">
                    <img src={image} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{title}</h5>
                        <p class="card-text">{data}</p>
                        <a href="#" class="btn btn-primary">Read more</a>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Card
