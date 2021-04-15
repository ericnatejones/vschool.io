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
    font-size: 20px;
    line-height: 32px;
    color: ${gray.darkest};
`

const Description = styled.p`
    font-size: 14px;
    line-height: 24px;
    color: ${gray.darker};
    margin-bottom: 64px;
`

const TeamTitle = styled.h1`
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    color: ${gray.darkest};
`

const TeamCard = styled.div`
    display: inline-block;
    width: 48%;
    padding: 20px;
    margin: 45px 0;
`

const TeamImage = styled.img`
    width: 100%;
`

const TeamLogo = styled.div`
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    height: 58px;
    width: 100px;
    margin: auto;
`

const TeamName = styled.h5`
    font-size: 11px;
    text-align: center;
    margin-bottom: -10px;
`

const TeamRole = styled.p`
    font-size: 9px;
    margin: 0;
    text-align: center;
`

const Team = props => {
    const {
        team_subtitle: { text: teamSub },
        team_title: { text: teamTitle },
    } = props
    const data = useStaticQuery(graphql`
        {
            prismicCoursePage(uid: { eq: "design" }) {
                data {
                    body1 {
                        ... on PrismicCoursePageBody1TeamIndividuals {
                            id
                            items {
                                team_individual_name {
                                    text
                                }
                                team_individual_image {
                                    alt
                                    url
                                }
                                team_individual_logo {
                                    alt
                                    url
                                }
                                team_individual_title {
                                    text
                                }
                            }
                            primary {
                                team_individual_type {
                                    text
                                }
                            }
                        }
                    }
                }
            }
        }
    `)

    const mappedTeams = data.prismicCoursePage.data.body1.map(
        ({
            items,
            primary: {
                team_individual_type: { text: teamType },
            },
        }) => {
            return (
                <div>
                    <TeamTitle>{teamType}</TeamTitle>
                    {items.map(
                        ({
                            team_individual_name: { text: indName },
                            team_individual_image: { alt: imgAlt, url: imgUrl },
                            team_individual_logo: {
                                alt: logoAlt,
                                url: logoUrl,
                            },
                            team_individual_title: { text: indTitle },
                        }) => {
                            return (
                                <TeamCard>
                                    <TeamImage src={imgUrl} alt={imgAlt} />
                                    <TeamName>{indName}</TeamName>
                                    <TeamRole>{indTitle}</TeamRole>
                                    {logoUrl && (
                                        <TeamLogo
                                            style={{
                                                backgroundImage: `url(${logoUrl})`,
                                            }}
                                            alt={logoAlt}
                                        />
                                    )}
                                </TeamCard>
                            )
                        }
                    )}
                </div>
            )
        }
    )

    return (
        <Container>
            <Title>{teamTitle}</Title>
            <Description>{teamSub}</Description>
            {mappedTeams}
        </Container>
    )
}

export default Team