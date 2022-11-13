import React from "react"
import PublicFooter from "../PublicFooter"
import { PublicPageTitle, PublicPageContainer } from "../../global_styles/styles"
import Heading1 from "../../helper_components/Heading1"
import { PublicAgreementFaqBox, PublicAgreementFaqBoxImage, PublicAgreementFaqBoxText, PublicAgreementFaqWrapper } from "./styles"
import Heading2 from "../../helper_components/Heading2"

export default function PublicFaq() {
    return (
        <>
        <PublicPageContainer>
            <PublicPageTitle>
                <Heading1 color="black" size="4em">Qo’llanma</Heading1>
            </PublicPageTitle>
            <PublicAgreementFaqWrapper>
                <PublicAgreementFaqBox>
                    <PublicAgreementFaqBoxImage>
                        <img src={require('../../images/one_id.png')} alt="oneId" />
                    </PublicAgreementFaqBoxImage>
                    <PublicAgreementFaqBoxText>
                        <Heading2 size="2.5em" color="black">
                            Tizimga OneID orqali kirish
                        </Heading2>
                    </PublicAgreementFaqBoxText>
                </PublicAgreementFaqBox>
                <PublicAgreementFaqBox>
                    <PublicAgreementFaqBoxImage>
                        <img src={require('../../images/icons/icon/MaskGroup.png')} alt="oneId" />
                    </PublicAgreementFaqBoxImage>
                    <PublicAgreementFaqBoxText>
                        <Heading2 size="2.5em" color="black">
                            So'rovnomada qatnashish
                        </Heading2>
                    </PublicAgreementFaqBoxText>
                </PublicAgreementFaqBox>
                <PublicAgreementFaqBox>
                    <PublicAgreementFaqBoxImage>
                        <img src={require('../../images/icons/icon/MaskGroup1.png')} alt="oneId" />
                    </PublicAgreementFaqBoxImage>
                    <PublicAgreementFaqBoxText>
                        <Heading2 size="2.5em" color="black">
                            Shaxsiy ma'lumotlarni o'zgartirish
                        </Heading2>
                    </PublicAgreementFaqBoxText>
                </PublicAgreementFaqBox>
                <PublicAgreementFaqBox>
                    <PublicAgreementFaqBoxImage>
                        <img src={require('../../images/icons/icon/MaskGroup2.png')} alt="oneId" />
                    </PublicAgreementFaqBoxImage>
                    <PublicAgreementFaqBoxText>
                        <Heading2 size="2.5em" color="black">
                            Xabarlar sahifasi bilan ishlash
                        </Heading2>
                    </PublicAgreementFaqBoxText>
                </PublicAgreementFaqBox>
                <PublicAgreementFaqBox>
                    <PublicAgreementFaqBoxImage>
                        <img src={require('../../images/icons/icon/Union.png')} alt="oneId" />
                    </PublicAgreementFaqBoxImage>
                    <PublicAgreementFaqBoxText>
                        <Heading2 size="2.5em" color="black">
                            Maxsus imkoniyatlardan foydalanish
                        </Heading2>
                    </PublicAgreementFaqBoxText>
                </PublicAgreementFaqBox>
                <PublicAgreementFaqBox>
                    <PublicAgreementFaqBoxImage>
                        <img src={require('../../images/icons/icon/MaskGroup3.png')} alt="oneId" />
                    </PublicAgreementFaqBoxImage>
                    <PublicAgreementFaqBoxText>
                        <Heading2 size="2.5em" color="black">
                            Tizimda tilni o'zgartirish
                        </Heading2>
                    </PublicAgreementFaqBoxText>
                </PublicAgreementFaqBox>
            </PublicAgreementFaqWrapper>
        </PublicPageContainer>
        <PublicFooter/>
        </>
    )
}