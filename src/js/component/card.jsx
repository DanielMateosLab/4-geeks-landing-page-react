import React from "react"

const Card = ({ imgSrc = "https://via.placeholder.com/500x325", title, body, buttonText}) => (
    <div>
        <img className="card-img-top" src={imgSrc} />
        <div class="card-body">
            <h5 class="card-title"> { title } </h5>
            <p class="card-text"> { body } </p>
            <a href="#" class="btn btn-primary"> { buttonText } </a>
        </div>
    </div>
)