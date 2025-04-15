import React from 'react';
import styled from 'styled-components';

const Button = () => {
  return (
    <StyledWrapper>
      <div className="container">
        <button className="button">Shop Now!</button>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  button {
    font-size: 1.1em; /* Smaller font size */
    padding: 0.4em 0.6em; /* Reduced padding */
    border-radius: 0.4em; /* Slightly smaller border radius */
    border: none;
    background-color: #000; /* Initial background is black */
    color: #fff; /* Text color remains white */
    cursor: pointer;
    box-shadow: 2px 2px 3px #000000b4;
    transition: background-color 0.3s ease;
  }

  .container {
    position: relative;
    padding: 3px;
    background: linear-gradient(90deg, #39FF14, #24f666);
    border-radius: 0.8em; /* Slightly smaller border radius */
    transition: all 0.4s ease;
  }

  .container::before {
    content: "";
    position: absolute;
    inset: 0;
    margin: auto;
    border-radius: 0.8em; /* Adjusted to match container radius */
    z-index: -10;
    filter: blur(0);
    transition: filter 0.4s ease;
  }

  .container:hover::before {
    background: linear-gradient(90deg, #39FF14, #24f666);
    filter: blur(1.2em);
  }

  .container:active::before {
    filter: blur(0.2em);
  }

  .button:hover {
    background-color: #000; /* Change background to black on hover */
    transition: background-color 0.3s ease;
  }
`;

export default Button;
