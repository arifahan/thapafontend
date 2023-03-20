import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from './styles/Button';

const Error = () => {
    return (
        <Wrapper>
            <div className="container">
                <h2>404</h2>
                <h3>UH OH! You're Lost.</h3>
                <p>The page you are looking for dose not exist. How you got here is a mystery. But you can click the button bellow to go back to the homepage.</p>
                <NavLink to="/">
                    <Button>Go Back</Button>
                </NavLink>
            </div>
        </Wrapper>
    );
};

const Wrapper =styled.section`
    .container {
        padding: 9rem 0;
        text-align: center;
        width: 60%;
        h2 {
            font-size: 10rem;
        }
        h3 {
            font-size: 5.2rem;
        }
        p {
            margin: 2rem 0;
        }
    }
`;

export default Error;