import React from 'react'
import { Outlet } from 'react-router-dom'
import { PanelWrapper } from '../../global_styles/styles'

export default function Questionnaire() {

    return (
        <PanelWrapper>
            <Outlet/>
        </PanelWrapper>
    )
}