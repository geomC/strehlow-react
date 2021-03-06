import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { media } from '~/styles/Utils';
import { FullHeightMain } from '~/components/MainSection';
import HomeImage from '~/images/bg/sky_big.JPG';

const Wrapper = styled(FullHeightMain)`
  background-image: url(${HomeImage});

  ${media.l`
    background-position: 50% 75%;
  `}
`;

const StyledHeading = styled.h1`
  margin-bottom: 1em;
  text-align: center;
  
  ${media.s`
     font-size: 28px;
  `}
`;

const Slogan = styled.p`

`;

const Home = ({ heading, subheading }) => (
  <Wrapper>
    <StyledHeading>{heading}</StyledHeading>
    <Slogan>{subheading}</Slogan>
  </Wrapper>
);

Home.propTypes = {
    heading: PropTypes.string,
    subheading: PropTypes.string
};

Home.defaultProps = {
    heading: 'Please provide a heading',
    subheading: 'Please provide a subheading'
};

export default Home;
