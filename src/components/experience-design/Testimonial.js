import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import {} from '@vschool/lotus'
// import dustinImg from '../../images/dustin.png'

const Container = styled.div`
  background-color: #FFEEDE;
  padding-top: 56px;
  padding-left: 24px;
  padding-right: 24px;

  @media (min-width: 900px){
    display: flex;
    justify-content: center;
  }
`
  
const CiteContainer = styled.div`
  border: 2px solid #FF8F26;
  padding-left: 32px;
  padding-right: 32px;
  padding-top: 64px;
  padding-bottom: 80px;
  width: 366px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 330px) and (max-width: 414px){
    width: 315px;
  }

  @media (min-width: 900px){
    grid-column: 2 / 3;
    width: 550px;
    height: 436px;
    padding-left: 40px;
    padding-right: 40px;
  }

  @media (min-width: 1024px){
    width: 616px;
    padding-left: 72px;
    padding-right: 48px;
    padding-top: 56px;
  }
`

const H2 = styled.h2`
  color: #432103;	
  font-family: "aktiv-grotesk-extended";	
  font-size: 32px;	
  font-weight: bold;	
  line-height: 36px;

  @media (min-width: 330px) and (max-width: 414px){
    font-size: 28px;
  }

`

const H4 = styled.h4`
  color: #BF6B1C;	
  font-family: "aktiv-grotesk-extended";	
  font-size: 20px;	
  font-weight: 800;
  line-height: 24px;
  padding-top: 24px;

  @media (min-width: 1024px){
    padding-top: 32px;
  }
`

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;

  @media (min-width: 900px){
    display: default;
    grid-row: 1 / 2;
  }
`

const DustinImg = styled.img`
  border-bottom: 20px solid #C767D9;
  margin-top: -24px;

  @media (min-width: 330px) and (max-width: 414px){
    width: 280px;
  }

  @media (min-width: 900px){
    height: 357px;
    width: 320px;
    margin-right: -32px;
    margin-top: -32px;
  }
`

const GridContainer = styled.div`
  @media (min-width: 900px){
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 860px;
  }
`


function Testimonial(props){
  const { 
    prismicXdPage: {
      data: {
        testimonial_text: {
          text
        },
        testimonial_cite: {
          text: cite
        },
        testimonial_image: {
          url: dustinImg
        }
      }
    }
  } = useStaticQuery(graphql`
  {
    prismicXdPage {
      data {
        testimonial_text {
          text
        }
        testimonial_image {
          url
        }
        testimonial_cite {
          text
        }
      }
    }
  }
`)
  return (
    <Container>
      <GridContainer>
        <CiteContainer>
          <H2>"{text}"</H2>
          <H4>{cite}</H4>
        </CiteContainer>
        <FlexContainer>
          <DustinImg src={dustinImg}/>
        </FlexContainer>
      </GridContainer>
    </Container>
  )
}

export default Testimonial