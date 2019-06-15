import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Main } from '~/components/MainSection';
import {
 Phone, Mail, MapPin, GitHub, Linkedin
} from 'react-feather';
import { media } from '~/styles/Utils';
import FlatRouterLink from '~/components/FlatRouterLink';

const Wrapper = styled(Main)`
  display: flex;
  justify-content: center;
`;

const GridWrapper = styled.div`
  flex: 1;
  width: 100%;
  display: grid; 
  justify-items: center;
  grid-template-columns: 100%; 
  grid-template-rows: repeat(100px auto auto);
  padding: 0 12px;
  text-align: center;

  ${media.m`
    max-width: 980px;   
    align-items: center;
    justify-items: center;
    grid-template-rows: 200px auto 1fr 100px; 
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 48px;
  `}
`;

const Heading = styled.h2`
  margin: 2em 0;

  ${media.s`
    margin: 1em 0 2em 0;
  `}

  ${media.m`
    margin: 3em 0;
  `}

`;

const Icon = styled.div`
  color: white;
  width: 33%;
  max-width: 100px;
  align-self: center;
 
  ${media.m`
    width: 33%;
    height: 33%;
    grid-row: 1;
  `}

  svg {
    width: 100%;
    height: 100%;
  }
`;

const Topic = styled.h3`
  margin: 1em 0;
 
  ${media.m`
    grid-row: 2;
  `}
`;

const InfoText = styled.p`
  align-self: flex-start;
  margin-bottom: 3em;

  ${media.m`
    margin-bottom: 0;
  `}
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: grey;
  margin-top: 3em;

  ${media.m`
    margin-top: unset;
    grid-column: 1 / 4;
    width: 100%;
    height: 100%;
  `}
`;

const FooterContact = styled.div`
  padding: 12px 8px;
  width: 120px;;
  display: flex;
  justify-content: space-between;
`;

const ContactLink = styled.a`
  display: block;
  color: grey;
   
  &&:hover {
    color: ${config.colors.black};
  }
`;

const StyledMapRouterLink = styled(FlatRouterLink)`
  margin-top: 2em;
`;


const Contact = ({
 heading, footerText, phone, mail, authorContacts, adressText
}) => (
  <Wrapper>
    <Heading>{heading}</Heading>
    <GridWrapper>

      <Icon><MapPin /></Icon>
      <Topic>Adresse</Topic>
      <InfoText>

        <strong>
          {adressText
          .split(', ')
          .join('\n')
          // FIXME: linebreak won't render
          }
        </strong>

        <StyledMapRouterLink to={config.nav.Anreise}>Auf der Karte ansehen</StyledMapRouterLink>

      </InfoText>

      <Icon><Phone /></Icon>
      <Topic>Telefon</Topic>
      <InfoText>
        Ihr Erreicht uns unter
        <br />
        <a href={`tel:${phone}`}>{phone}</a>
      </InfoText>

      <Icon><Mail /></Icon>
      <Topic>E-Mail</Topic>
      <InfoText>
      Schreibt uns!
        <br />
        <a href={`mailto:${authorContacts.mail}`} target="_blank">
          {mail}
        </a>

      </InfoText>

      <Footer>
        <p>{footerText}</p>
        <FooterContact>
          <ContactLink href={authorContacts.github} target="_blank"><GitHub /></ContactLink>
          <ContactLink href={authorContacts.linkedIn} target="_blank"><Linkedin /></ContactLink>
          <ContactLink href={`mailto:${authorContacts.mail}`} target="_blank"><Mail /></ContactLink>
        </FooterContact>
      </Footer>
    </GridWrapper>
  </Wrapper>
);


Contact.propTypes = {
  heading: PropTypes.string,
  footerText: PropTypes.string.isRequired,
  // authorContacts: PropTypes.shape(PropTypes.any).isRequired, FIXME: doc properly
  phone: PropTypes.string.isRequired,
  mail: PropTypes.string.isRequired
};

Contact.defaultProps = {
  heading: 'Get in Touch'
};

export default Contact;
