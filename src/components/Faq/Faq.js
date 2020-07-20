import React from 'react';
import Container from '../Container/Container.js';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import { faqData } from '../../data/dataStore';




const Faq = (props) => (
  

  <Container>
    <h2>{faqData.description}</h2>
     <p>{faqData.content}</p>
    <Hero titleText={faqData.title} imageSourceText={faqData.image}/>

  </Container>
);


export default Faq;
