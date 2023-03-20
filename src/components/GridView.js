import React from 'react';
import styled from 'styled-components';
import Product from './Product';

const GridView = ({products}) => {

    
    return (
        <Wrapper className="grid grid-three-column">
            {
            products.map((curElem) => <Product key={curElem.id} {...curElem}></Product>)
           }
        </Wrapper>
    );
};

const Wrapper = styled.section`
    margin-top: 5rem;
`;

export default GridView;