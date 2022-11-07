import React from 'react'
import { PanelWrapper } from '../../global_styles/styles'
import RegistrationList from '../RegistrationList'
import Box from '@mui/material/Box'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import ParagraphText from '../../helper_components/ParagraphText'

export default function Panel() {

  const themeContext = useContext(ThemeContext)

  return (
    <PanelWrapper>
      <RegistrationList/>
      <Box
            sx={{
                width: "100%",
                backgroundColor: "#ffffff",
                borderRadius: "5px",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                marginBottom: "25px"
            }}
        >
          <Box
            sx={{
              minWidth: "92px",
              paddingTop: "58px"
            }}
          >
            <button style={{borderRadius: "50%", border: 0, outline: 0, cursor: "pointer"}}>
              <img src={require('../../images/icons/icon/slider_arrow.png')} alt="slider_arrow"/>
            </button>
          </Box>
          <Box
            sx={{
              textAlign: "center",
              padding: "30px 0"
            }}
          >
            <ParagraphText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate eu, tristique euismod enim enim. Enim nibh semper nisl ipsum felis id sed. Euismod lobortis diam morbi nunc sed. Lectus euismod vel adipiscing augue erat sit quisque posuere in. Sed amet pulvinar ultricies tellus. Morbi pellentesque dolor dui nibh magna mattis. Vel nulla nibh tincidunt ut eget nulla. Quis est sed iaculis et. Massa arcu habitant a eu nunc, quisque velit pellentesque. Tempus massa aliquam et sit integer maecenas lectus. Ut suspendisse sed mi vestibulum. Fermentum.
            </ParagraphText>
          </Box>
          <Box
            sx={{
              minWidth: "92px",
              paddingTop: "58px"
            }}
          >sdaf</Box>
        </Box>
    </PanelWrapper>
  )
}
