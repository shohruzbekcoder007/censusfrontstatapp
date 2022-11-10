import React from 'react'
import CustomizedInputForLogin from "../../../helper_components/CustomizedInputForLogin"
import CustomCheckBox from "../../../helper_components/HelperCheckBox"
import LinkToMessengers from "../LinkToMessengers"
import { EnterButton } from "./styles"

export default function PublicLoginTel() {
    return (
        <>
            <CustomizedInputForLogin label="Email yoki telefon raqamingizni kiriting" />
            <CustomCheckBox />
            <EnterButton variant="contained" color="primary">Kirish</EnterButton>
            <LinkToMessengers />
        </>
    )
}
