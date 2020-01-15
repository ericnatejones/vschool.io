import React from "react"
import Layout from "../components/layout.js"
import SEO from "../components/seo.js"
import {
    AboutCourse,
    AsRealAsItGets,
    CallToAction,
    CourseBullets,
    FAQ,
    HeroHeader,
    HeroImage,
    ISA,
    LearnToCode,
    PaymentOptions,
    Ratings,
    Skills,
    Testimonial,
} from "../components/experience-design"

import { useStaticQuery, graphql } from "gatsby"

const ExperienceDesignPage = () => {
    const {
        prismicXdPage: {
            data: {
                main_page_title: { text },
            },
        },
    } = useStaticQuery(graphql`
        {
            prismicXdPage(data: { main_page_title: { text: {} } }) {
                data {
                    main_page_title {
                        text
                    }
                }
            }
        }
    `)
    return (
        <Layout>
            <SEO title={text} />
            <HeroHeader />
            <HeroImage />
            <AboutCourse />
            <Skills />
            <CourseBullets />

            {/* 
            <DownloadSyllabus />
                Temporary div to add spacing while syllabus is being created 
                Delete it uncomment the <DownloadSyllabus/> component above.
            */}
            <div style={{ backgroundColor: "#FBF9F6", height: 32 }}></div>
            {/* */}

            <AsRealAsItGets />
            <Testimonial />
            <Ratings />
            <ISA />
            <PaymentOptions />
            <CallToAction />
            <LearnToCode />
            <FAQ />
        </Layout>
    )
}

export default ExperienceDesignPage