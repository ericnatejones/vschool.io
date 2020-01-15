import React from 'react'
import styled from 'styled-components'
import { gray, black, white } from "@vschool/lotus"
import { graphql, useStaticQuery } from "gatsby"
// import isaBackground from '../../images/isa-background.png'

const Container = styled.div`
  background-color: ${gray.lighter};

  @media(min-width: 600px){
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`

const FlexContainer = styled.div`
  @media (min-width: 600px){
    padding-right: 44px;
    padding-left: 44px;
    width: 612px;
  }

  @media (min-width: 900px){
    display: flex;
    flex-direction: row;
    height: 300px;
    width: 900px;
    justify-content: center;
  }

  @media (min-width: 1104px){
    width: 1024px;
    padding: 0;
  }
`

const H2 = styled.h2`
  padding-top: 96px;
  padding-bottom: 56px;
  color: ${black};	
  font-family: "aktiv-grotesk";	
  font-size: 44px;	
  font-weight: 900;	
  line-height: 48px;	
  text-align: center;

  @media (min-width: 1024px){
    padding-top: 160px;
  }
`

const LearnMoreContainer = styled.div`
  border: 2px solid #D8D4CE;
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 80px;

  @media (min-width: 900px){
    width: 450px;
  }

  @media (min-width: 1104px){
    width: 559px
  }
`

const H3 = styled.h3`
  color: ${black};	
  font-family: "aktiv-grotesk";	
  font-size: 32px;	
  font-weight: 900;	
  line-height: 28px;
  padding-top: 56px;
  padding-bottom: 16px;

  @media (min-width: 900px){
    padding-top: 48px;
  }
`

const P = styled.p`
  color: ${gray.darker};	
  font-family: "aktiv-grotesk";	
  font-size: 16px;	
  font-weight: 500;	
  line-height: 24px;
  padding-bottom: 32px;

  @media (min-width: 330px) and (max-width: 414px){
    font-size: 14px;
  }

  @media (min-width: 900px){
    width: 375px;
  }
`

const Button = styled.button`
  height: 48px;	
  width: 206px;
  color: ${white};	
  font-family: "aktiv-grotesk-extended";	
  font-size: 14px;
  font-weight: 800;	
  letter-spacing: 1px;	
  line-height: 16px;	
  text-align: center;
  border: 2px solid ${black};	
  background-color: ${gray.darker};
  margin: 0 auto;
  box-shadow: 4px 4px 0 0 rgba(0,0,0,0.2);
  outline: none;

  :hover {
    transform: translate(2px, 2px);
    box-shadow: 2px 2px 0 0 rgba(100,100,100, 0.5);
  }

  :active {
    transform: translate(4px, 4px);
    box-shadow: inset 1px 1px #eee9;
    border-top: 1px solid #eee9;
    border-left: 1px solid #eee9;
  }
`

const AboutISABackground = styled.div`
  background-image: url(${props => props.isaBackground});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  height: 295px;
  padding: 0 24px;

  @media (min-width: 900px){
    width: 450px;
    height: 300px;
    padding-right: 0;
  }

  @media (min-width: 1104px){
    width: 465px;
  }
`

const AboutISA = styled.div`
  background-color: ${gray.light};
  padding: 0 32px;
  padding-top: 40px;
  padding-bottom: 16px;
  transform: translateY(-24px);
  margin-left: 24px;
  margin-right: 24px;

  @media (min-width: 330px) and (max-width: 414px){
    height: 318px;
  }

  @media (min-width: 900px){
    margin-top: 0;
    transform: translateX(0);
    transform: translateY(30px);
    height: 240px;
    width: 420px;
    margin-left: -56px;
    margin-right: 0;
  }

  @media (min-width: 1104px){
    width: 496px;
    transform: translateY(30px);
    margin-left: -55px;
  
  }
`

const H4 = styled.h4`
  color: ${black};	
  font-family: "aktiv-grotesk";	
  font-weight: 800;
  font-size: 24px;	
  line-height: 30px;
  padding-bottom: 14px;
`


function ISA(props){
  const { 
    prismicXdPage: {
      data: {
        isa_header1: {
          text: header
        },
        isa_sub: {
          text: subHeader
        },
        isa_header2: {
          text: header2
        },
        isa_info: {
          text
        },
        isa_image: {
          url: isaBackground
        },
        isa_learn_more_btn: {
          text: btnText
        },
        isa_learn_more_link: {
          url: link
        }
      }
    }
  } = useStaticQuery(graphql`
  {
    prismicXdPage {
      data {
        isa_sub {
          text
        }
        isa_info {
          text
        }
        isa_header2 {
          text
        }
        isa_header1 {
          text
        }
        isa_image {
          url
        }
        isa_learn_more_btn {
          text
        }
        isa_learn_more_link {
          url
        }
      }
    }
  }
`)
  return (
    <Container>
      <H2>Investing In Your Success</H2>
      <FlexContainer>
        <LearnMoreContainer>
          <H3>{ header }</H3>
          <P>{ subHeader }</P>
          <a href={ link }>
            <Button>{ btnText }</Button>
          </a>
        </LearnMoreContainer>
        <AboutISABackground isaBackground={isaBackground}>
        <AboutISA>
            <H4>{ header2 }</H4>
            <P>{ text }</P>
          </AboutISA>
        </AboutISABackground>
      </FlexContainer>
    </Container>
  )
}

export default ISA