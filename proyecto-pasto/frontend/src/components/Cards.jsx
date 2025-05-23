import React from 'react';
import { Link } from 'react-router-dom';
//import '../assets/style/carnivalDays.css'; 

const Cards = ({ image, title, description, link }) => {
  return (
    <div className="col">
      <div className="card h-100 d-flex flex-column">
        <img src={image} className="card-img-top custom-image" alt={title}  style={{ height: '200px', objectFit: 'cover'}}/>
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title}</h5>
          <p className="card-text flex-grow-1">{description}</p>
          <Link to={link} className="btn btn-primary">
            Programación
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cards;