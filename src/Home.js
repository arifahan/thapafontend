import React from 'react';
import styled from 'styled-components';
import FeatureProducts from './components/FeatureProducts';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Trusted from './components/Trusted';

const Home = () => {


    return (
        <Wrapper>
            <HeroSection title="Online Shop" img="./images/hero.jpg"/>
            <FeatureProducts />
            <Services />
            <Trusted />
        </Wrapper>
        );
};
    const Wrapper = styled.section`
    font-size: 50px;
    `;
export default Home;