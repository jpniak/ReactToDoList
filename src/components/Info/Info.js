import React from 'react';
import Container from '../Container/Container.js';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import { infoData } from '../../data/dataStore';




const Info = (props) => (
  

  <Container>
    <h2>{infoData.description}</h2>
    <p>{infoData.content}</p>
    <Hero titleText={infoData.title} imageSourceText={infoData.image}/>

  </Container>
);


export default Info;
