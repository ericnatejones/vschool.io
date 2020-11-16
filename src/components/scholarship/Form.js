import React, { useState } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql, navigate } from "gatsby"
import { blue, gray, TextInput, Button } from "@vschool/lotus"
import { formium } from "../../lib/formium"

const Section = styled.section`
    padding-bottom: 24px;

    @media (min-width: 800px) {
        padding-bottom: 32px;
    }
`

const FormContainer = styled.div`
    background-color: ${blue.lightest};
    padding: 32px 24px;
    border: 2px solid ${blue.base};
    width: 100%;
    max-width: 1024px;

    @media (min-width: 800px) {
        padding: 32px;
    }
`

const Header = styled.h3`
    margin-bottom: 32px;
    text-align: center;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    & > div {
        margin-bottom: 32px;
    }

    @media (min-width: 800px) {
        flex-direction: row;

        & > div {
            margin-right: 16px;
            margin-bottom: 0;
        }
    }
`

const Disclaimer = styled.p`
    color: ${gray.darker};
    font-size: 14px;
    line-height: 18px;
    margin-top: 16px;
    text-align: center;
`

const StyledButton = styled(Button)`
    @media (max-width: 599px) {
        width: 100%;
    }
`

export default function ApplicationForm() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    // TODO: Submit the data somewhere.
    // Chat with Cody about what happens after that.
    async function handleSubmit(e) {
        e.preventDefault()
        /**
        TODO:
        (1) Add the person to a customer.io (or ConvertKit) segment or tag
        (2) Send them an email with the link to the background info form (name and email in URL params)
        (3) Navigate them to the background info form with their name and email remembered
         */
        await formium.submitForm("scholarship-initial-form", { name, email })
        navigate(`/scholarships/application/background-info`, {
            state: { name, email },
        })
    }

    const data = useStaticQuery(graphql`
        {
            prismicScholarshipPageSharedData {
                data {
                    form_title {
                        text
                    }
                    form_disclaimer {
                        text
                    }
                    form_button_text {
                        text
                    }
                }
            }
        }
    `)

    const {
        form_title: { text: title },
        form_disclaimer: { text: disclaimer },
        form_button_text: { text: buttonText },
    } = data.prismicScholarshipPageSharedData.data

    return (
        <Section>
            <FormContainer>
                <Header>{title}</Header>
                <Form id="application-form" onSubmit={handleSubmit}>
                    <TextInput
                        type="text"
                        label="Name"
                        name="name"
                        placeholder="First and Last names"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                        validationText="auto-generate"
                    />
                    <TextInput
                        type="email"
                        label="Email"
                        name="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                        validationText="auto-generate"
                    />
                    <StyledButton size="lg">{buttonText}</StyledButton>
                </Form>
                <Disclaimer>{disclaimer}</Disclaimer>
            </FormContainer>
        </Section>
    )
}
