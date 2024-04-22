import React from 'react';

const PersonCard = ({
    ownerFirstName,
    ownerLastName,
    contact,
    animalType,
    breed,
    petAge,
    color
}) => {
    return (
    <div className="person-card" style={{ marginBottom: '20px', textAlign: 'left' }}>
    <h2>{ownerLastName}, {ownerFirstName}</h2>
    <p>Contact: {contact}</p>
    <p>Type of Animal: {animalType}</p>
    <p>Breed: {breed}</p>
    <p>Age: {petAge}</p>
    <p>Color: {color}</p>
    </div>
);
};

export default PersonCard;
