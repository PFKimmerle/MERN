import './App.css'; 
import React from 'react';
import PersonCard from './PersonCard';

const App = () => {
return (
    <div style={{ margin: '20px' }}>
    <PersonCard
        ownerFirstName="Jane"
        ownerLastName="Doe"
        contact="123-456-7890"
        animalType="Dog"
        breed="Golden Retriever"
        petAge="3"
        color="Golden"
    />
    <PersonCard
        ownerFirstName="John"
        ownerLastName="Smith"
        contact="987-654-3210"
        animalType="Cat"
        breed="Siamese"
        petAge="5"
        color="Cream"
    />
    <PersonCard
        ownerFirstName="Millard"
        ownerLastName="Fillmore"
        contact="456-123-7890"
        animalType="Bird"
        breed="Parrot"
        petAge="2"
        color="Green"
    />
    <PersonCard
        ownerFirstName="Maria"
        ownerLastName="Garcia"
        contact="654-321-9870"
        animalType="Rabbit"
        breed="Holland Lop"
        petAge="1"
        color="White"
    />
    </div>
);
};

export default App;
