import React from 'react'
import Styled from 'styled-components'
import goodie2 from '../../assets/images/red_cartoon 3.svg'
import linkedin from '../../assets/socials/linkedin.png'
import twitter from '../../assets/socials/twitter.png'
import facebook from '../../assets/socials/facebook.png'
import pinterest from '../../assets/socials/pinterest.png'
import red_cartoon4 from '../../assets/images/red_cartoon 4.svg'
import Group80 from '../../assets/images/Group 80.svg'


const Footer = () => {
  return (
      
    <StyledFooter>
    <Smailredballon><img style={{ width:200 }} src={goodie2}  /></Smailredballon>
   <SocialContainer>
       <img style={{paddingRight:15 }} src={linkedin} />
       <img style={{ paddingRight:15 }} src={twitter} />
       <img style={{ paddingRight:15 }} src={facebook} />
       <img style={{  }} src={pinterest} /> 
   </SocialContainer> 
   <SmileBaloon>
   <img style={{  position:'absolute'}} src={Group80} />
   <Cartoon4img><img style={{}} src={red_cartoon4}  /></Cartoon4img>
   </SmileBaloon>
    
    </StyledFooter>
    
  )
}

export default Footer

const SmileBaloon = Styled.div`
   margin-left: 62%;

`;

const Cartoon4img = Styled.div`
    margin-left: 125%;
    margin-Top: 35%;

`;


const Smailredballon = Styled.div`
   width:200;
   
`;

const SocialContainer = Styled.div`
   padding: 80px 20px;
`;


const StyledFooter = Styled.div`
    display: flex;
    border-top: 1px solid #D8D8D8; 
   // padding: 80px 343px 110px;
    background: #FAFAFA;
`;
