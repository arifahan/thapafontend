import React from 'react';
import styled from 'styled-components';
import HeroSection from './components/HeroSection';



const About = () => {
   
   

    return (
        <Wrapper>
            <HeroSection title="Online Selling" img="../images/hero-about.jpg"/>
        </Wrapper>
    );
};

const Wrapper = styled.section`

`;

export default About;