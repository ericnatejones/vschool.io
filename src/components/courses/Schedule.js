import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { blue, gray } from "@vschool/lotus"

const Container = styled.section`
    background-color: ${gray.lighter};
    padding-top: 0;
    padding-bottom: 74px;

    @media (min-width: 800px) {
        padding-top: 0;
    }
`

const Title = styled.h1`
    font-size: 24px;
    line-height: 32px;
    color: ${gray.darkest};
`

const Text = styled.p`
    & > p {
        font-size: 16px;
        line-height: 24px;
        color: ${gray.darker};
        padding: 20px 0 60px;
    }
`

const Subtitle = styled.h3`
    font-size: 17px;
    line-height: 24px;
    text-align: center;
    font-weight: 800;
    color: ${gray.darkest};
`

const SubText = styled.p`
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    color: ${gray.darker};
    padding: 18px 0 48px;
`

const Image = styled.img`
    width: 100%;
`

const ImageText = styled.p`
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    color: ${gray.darker};
    padding-top: 30px;
`

const ComponentName = () => {
    const data = useStaticQuery(graphql`
        {
            prismicCoursePageSharedData {
                data {
                    schedule_carousel_images {
                        carousel_image {
                            url
                            alt
                        }
                    }
                    schedule_images_caption {
                        text
                    }
                    schedule_subtitle {
                        text
                    }
                    schedule_subtitle_paragraph {
                        text
                    }
                    schedule_text {
                        html
                    }
                    schedule_title {
                        text
                    }
                }
            }
        }
    `)

    const {
        schedule_carousel_images,
        schedule_images_caption: { text: schedImgCap },
        schedule_subtitle: { text: schedSubTitle },
        schedule_subtitle_paragraph: { text: schedPara },
        schedule_text: { html: schedText },
        schedule_title: { text: schedTitle },
    } = data.prismicCoursePageSharedData.data
    return (
        <Container>
            <Title>{schedTitle}</Title>
            <Text dangerouslySetInnerHTML={{ __html: schedText }}></Text>
            <Subtitle>{schedSubTitle}</Subtitle>
            <SubText>{schedPara}</SubText>
            {schedule_carousel_images.map(
                ({ carousel_image: { url: ImgUrl, alt: ImgAlt } }) => (
                    <Image src={ImgUrl} alt={ImgAlt} />
                )
            )}
            <ImageText>{schedImgCap}</ImageText>
        </Container>
    )
}

export default ComponentName
