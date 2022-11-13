import React from "react"
import { PublicPageTitle, PublicPageContainer } from "../../global_styles/styles"
import Heading1 from "../../helper_components/Heading1"
import PublicFooter from "../PublicFooter"


export default function PublicContact() {
    return (
        <>
            <PublicPageContainer>
                <PublicPageTitle>
                    <Heading1 color="black" size="4em">Biz bilan bog’lanish oson!</Heading1>
                </PublicPageTitle>
            </PublicPageContainer>
            <PublicFooter/>
        </>
    )
}