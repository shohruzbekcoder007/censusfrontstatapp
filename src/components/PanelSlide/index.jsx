import React from 'react'
import ParagraphText from '../../helper_components/ParagraphText'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import { HeaderSettingsImage } from './styles'

export default function PanelSlide() {
    return (
        <HeaderSettingsImage>
            <SliderArrow/>
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
            <SliderArrow next={true}/>
        </HeaderSettingsImage>
    )
}

const SliderArrow = ({next}) => {
    const style = next?{}:{ transform: "rotate(180deg)" }
    return (
        <Box
            sx={{
                minWidth: "92px",
                alignSelf: "center",
                textAlign: "center"
            }}
        >
            <IconButton>
                <img style={style} src={require('../../images/icons/icon/slider_arrow.png')} alt="slider_arrow" />
            </IconButton>
        </Box>
    )
}
