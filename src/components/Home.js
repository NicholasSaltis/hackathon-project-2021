import React, { useEffect, useState } from 'react';
import iss from '../apis/iss';
import astronaut from '../apis/astronaut';

const Home = () => {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [astronauts, setAstronauts] = useState([]);

  const issPosition = async () => {
    const response = await iss.get();
    // console.log(response.data.iss_position);
    setLatitude(response.data.iss_position.latitude);
    setLongitude(response.data.iss_position.longitude);
  };

  const getAstronauts = async () => {
    const response = await astronaut.get();
    // console.log(response.data.people);
    setAstronauts(response.data.people);
  };

  useEffect(() => {
    issPosition();
    getAstronauts();
  }, []);

  const renderedAstronauts = astronauts.map((astro) => {
    return (
      <li key={astro.name}>
        {astro.craft} - {astro.name}
      </li>
    );
  });

  return (
    <div>
      <h1>Home page</h1>

      <h3>ISS Position</h3>
      <h4>Latitide: {latitude}</h4>
      <h4>Longitude: {longitude}</h4>

      <h3>People In Space</h3>
      <ul>{renderedAstronauts}</ul>
    </div>
  );
};

export default Home;
