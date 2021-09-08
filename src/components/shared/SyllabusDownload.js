import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { blue, gray, Button } from "@vschool/lotus"
import DownloadSyllabus from "../../pages/syllabus/download"

const Section = styled.section`
    padding: 96px 16px;
    background-color: ${blue.lightest};

    @media (min-width: 800px) {
        padding: 160px 0;
    }
`

const Container = styled.div`
    /* position: relative; */
    /* border: 2px solid ${blue.base}; */
    /* max-width: 380px; */

    @media (min-width: 800px) {
        /* max-width: 840px; */
    }
`

const Title = styled.h4`
    font-weight: 900;
    font-size: 44px;
    line-height: 48px;
    text-align: center;
    color: ${gray.darkest};
`

const BlueSubtext = styled.p`
    font-family: "aktiv-grotesk-extended";
    font-weight: 800;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.25px;
    text-transform: uppercase;
    color: ${blue.base};
    padding-top: 18px;
    padding-bottom: 48px;
    text-align: center;

    @media (min-width: 800px) {
        font-size: 16px;
        line-height: 24px;
        padding-top: 18px;
        padding-bottom: 64px;
    }
`

const StyledButton = styled(Button)`
    background-color: ${blue.lightest};
    font-weight: 800;
    font-size: 14px;
    line-height: 16px;
    margin: 12px;
    text-align: center;
    letter-spacing: 1px;
    color: ${gray.darker};
    padding: 16px 44px;
    height: 56px;
    width: 290px;
`

const ButtonSpan = styled.span`
    margin-left: 10px;
    position: relative;
    bottom: 3px;
`

const ButtonDiv = styled.div`
    text-align: center;
`

export default function Rankings() {
  const data = useStaticQuery(graphql`
    {
      prismicSyllabusDownload {
        data {
          syllabus_icons {
            alt
            url
          }
          syllabus_subtitle {
            text
          }
          syllabus_title {
            text
          }
          syllabus_web {
            text
          }
          syllabus_xd {
            text
          }
        }
      }
    }
  `)
 
    const {
        syllabus_icons: { alt, url },
        syllabus_subtitle: { text: subtitle },
        syllabus_title: { text: title },
        syllabus_web: { text: web },
        syllabus_xd: { text: xd },
    } = data.prismicSyllabusDownload.data

    const download = async type => {
    
        var link = document.createElement("a");
        link.href = type === "xd" ? "https://drive.google.com/file/d/1lF1qMnhwLn1gaqefjSqS2AWxV_qXjHRQ/view?usp=sharing" : "https://drive.google.com/file/d/1TkmbmHhJXIyvH8rRr2UeIe7KhD14d1nz/view"
        link.target = "_blank";
        link.download = "V School Syllabus";
    
        document.body.appendChild(link);
    
        link.click();
        setTimeout(function () {
        window.URL.revokeObjectURL(link);
        }, 200);
            
    }

    return (
        <Section>
            <Container>
                <Title>{title}</Title>
                <BlueSubtext>{subtitle}</BlueSubtext>
                <ButtonDiv>
                    <StyledButton onClick={() => download('web')}><img src={url} alt={alt} /> <ButtonSpan>{web}</ButtonSpan></StyledButton>
                    <StyledButton onClick={() => download('xd')}><img src={url} alt={alt} /> <ButtonSpan>{xd}</ButtonSpan></StyledButton>
                </ButtonDiv>
            </Container>
        </Section>
    )
}
