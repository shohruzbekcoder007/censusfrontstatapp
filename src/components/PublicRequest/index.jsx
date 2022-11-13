import React from "react"
import { PublicPageContainer, PublicPageTitle } from "../../global_styles/styles"
import Heading1 from "../../helper_components/Heading1"
import PublicFooter from "../PublicFooter"
import PublicAccordions from '../PublicAccordions'

export default function PublicRequest() {
    return (
        <>
            <PublicPageContainer>
                <PublicPageTitle>
                    <Heading1 color="black" size="4em">Ko’p so’raladigan savollar</Heading1>
                </PublicPageTitle>
                <PublicAccordions/>
            </PublicPageContainer>
            <PublicFooter/>
        </>
    )
}