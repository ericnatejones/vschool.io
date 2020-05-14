import React, { useContext } from "react"
import styled from "styled-components"
import PostPreview from "./PostPreview.js"
import TopPostPreview from "./TopPostPreview.js"
import LearnCodeOrDesign from "./LearnCodeOrDesign.js"
import SubscribeBanner from "./SubscribeBanner.js"
import { BlogFilterContext } from "./context/BlogFilterProvider.js"

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 96px;
    padding-top: 64px; 
`

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    grid-gap: 16px;
    width: 100%;
    max-width: 500px;
    padding: 0 16px;

    @media (min-width: 400px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (min-width: 1200px) {
        grid-template-columns: 1fr 1fr 1fr;
        max-width: 1080px;
        grid-gap: 24px;
    }
`

const SecondGridContainer = styled(GridContainer)``

const InfiniteGridContainer = styled(GridContainer)``

export default function BlogList(props) {
    const {
        posts,
        codeStartDate,
        designStartDate,
        learnHeader,
        learnBtnText,
        learnCodeLink,
        learnDesignLink,
        nextCodeSession,
        nextDesignSession,
        subscribeBtnText,
        subscribeHeader,
    } = props

    const { blogFilter } = useContext(BlogFilterContext)
    
    let currentPosts =
        blogFilter === "Blog Home"
            ? posts
            : posts.filter(
                  ({ node }) =>
                      node.primary_tag.name.toLowerCase() ===
                      blogFilter.toLowerCase()
              )
    return (
        <PageContainer>
            <GridContainer>
                <TopPostPreview {...currentPosts[0].node} />
                {currentPosts.slice(1, 6).map(({ node }) => (
                    <PostPreview key={node.id} {...node} />
                ))}
            </GridContainer>
            <LearnCodeOrDesign
                header={learnHeader}
                learnBtnText={learnBtnText}
                codeStartDate={codeStartDate}
                designStartDate={designStartDate}
                learnCodeLink={learnCodeLink}
                learnDesignLink={learnDesignLink}
                nextCodeSession={nextCodeSession}
                nextDesignSession={nextDesignSession}
            />
            <SecondGridContainer>
                {currentPosts.slice(1, 6).map(({ node }) => (
                    <PostPreview key={node.id} {...node} />
                ))}
            </SecondGridContainer>
            <SubscribeBanner
                header={subscribeHeader}
                btnText={subscribeBtnText}
            />
            <InfiniteGridContainer>
                {currentPosts.slice(1, 6).map(({ node }) => (
                    <PostPreview key={node.id} {...node} />
                ))}
            </InfiniteGridContainer>
        </PageContainer>
    )
}
