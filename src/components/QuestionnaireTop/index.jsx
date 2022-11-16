import React from 'react'
import Box from '@mui/material/Box'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import Heading2 from '../../helper_components/Heading2'

export default function QuestionnaireTop() {
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
                marginBottom: "12px"
            }}
        >
            <Box
                sx={{
                    padding: "30px 30px 28px 30px",
                    width: "50%",
                }}
            >
                <Heading2 color="black" size="2.25em">
                    Xurmatli respondent, so'rovnomada qatnashish istagini bildirganingiz uchun rahmat! <br/>
                    Marhamat qilib, video qo'llanma bilan tanishib chiqing va so'rovnomada qatnashing!
                </Heading2>
            </Box>
            <Box
                sx={{
                    width: "50%",
                    // width: "438px",
                    position: "relative",
                    display: "inherit",
                    alignSelf: "end"
                }}
            >
                <img src={require('../../images/surovnoma_odamlar.png')} alt="registrator list" />
            </Box>
        </Box>
  )
}
