import React from "react";
import styled from "styled-components";
import ProductList from './components/ProductList';
import Sort from './components/Sort';
import FilterSecion from './components/FilterSecion';
import { useFilterContext } from "./context/FilterContext";

const Products = () => {



  return <Wrapper>
      <div className="container grid grid-filter-column">
          <div>
            <FilterSecion />
          </div>
          <section className="porduct-view--sort">
            <div className="sort-filter">
              <Sort />
            </div>
            <div className="main-product">
              <ProductList>  </ProductList>
            </div>
          </section>
        </div>
  </Wrapper>;
};

const Wrapper = styled.section`
  padding-top: 5rem;
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Products;
