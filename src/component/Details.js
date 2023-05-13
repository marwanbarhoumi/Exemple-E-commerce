import React from "react";
import { Link, useParams } from "react-router-dom";

const Details = ({list}) => {
  const {idmov} = useParams()
  const person = list.find((el) => el.id == idmov)
  return (
    <div>
      <div className="info">
        <div>Name: {person.name}</div>
        <div>Age: {person.age}</div>
        <div>Phone: {person.phone}</div>
        <div>Adress: {person.adress}</div>
        <Link to={'/'}>
      <button variant="primary">Retour</button>
      </Link>
      </div>
    </div>
  );
};

export default Details;
