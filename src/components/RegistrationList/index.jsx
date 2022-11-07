import React from 'react'
import Box from '@mui/material/Box'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import CaptionText from '../../helper_components/ParagraphText'
import CustomButton from '../../helper_components/CustomButton'
import IconButton from "@mui/material/IconButton";

export default function RegistrationList() {

    return (
        <>
            <RegistrationListItem/>
        </>
    )
}


const RegistrationListItem = () => {

    const themeContext = useContext(ThemeContext)

    return (
        <Box
            sx={{
                width: "100%",
                backgroundColor: "#ffffff",
                borderRadius: "5px",
                boxShadow: themeContext.effect.panel_shadow,
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                marginBottom: "25px"
            }}
        >
            <Box
                sx={{
                    padding: "30px 30px 28px 30px",
                }}
            >
                <CaptionText styles={{paddingBottom: "16px"}}>Hayrli tong, A'zam Mamatmurodov sizning keyingi “Aholini ro’yxatga olish” nomli so’rovnomaningiz Bugun soat 17:30da tizimga joylashtiriladi</CaptionText>
                <CustomButton>Davom ettirish</CustomButton>
            </Box>
            <Box
                sx={{
                    paddingTop: "6px",
                    width: "438px",
                    position: "relative"
                }}
            >
                <img src={require('../../images/OBJECTS.png')} alt="registrator list" />
                <IconButton
                    sx={{
                        position: "absolute",
                        top: "12px",
                        right: "36px"
                    }}
                >
                    <img src={require('../../images/icons/icon/Vector.png')} alt="registrator list" />
                </IconButton>
            </Box>
        </Box>
    )
}