import React from 'react'
import Heading2 from '../../helper_components/Heading2';
import QuestionnaireTop from '../QuestionnaireTop'
import { QuestionnaireTabBoxs, QuestionnaireTabBox, QuestionnaireTabBoxUl, QuestionnaireTabBoxLI } from './styles';
import Button from '@mui/material/Button'
import YoutubeEmbed from '../YoutubeEmbed';

export default function QuestionnaireTabOne() {
  return (
    <>
      <QuestionnaireTop/>
      <QuestionnaireTabBoxs>
        <QuestionnaireTabBox>
          <Heading2 color="black" size="2em">
            So’rovnomada qatnashish jarayoni bo’yicha ketma-ketlik:
          </Heading2>
          <QuestionnaireTabBoxUl>
            <QuestionnaireTabBoxLI>
              <img src={require('../../images/icons/icon/bullet/bullet.png')} alt="bullet png" />
              <span>Video qo’llanma bilan tanishing;</span>
            </QuestionnaireTabBoxLI>
            <QuestionnaireTabBoxLI>
              <img src={require('../../images/icons/icon/bullet/bullet.png')} alt="bullet png" />
              <span>Video qo’llanma bilan tanishing;</span>
            </QuestionnaireTabBoxLI>
            <QuestionnaireTabBoxLI>
              <img src={require('../../images/icons/icon/bullet/bullet.png')} alt="bullet png" />
              <span>Video qo’llanma bilan tanishing;</span>
            </QuestionnaireTabBoxLI>
            <QuestionnaireTabBoxLI>
              <img src={require('../../images/icons/icon/bullet/bullet.png')} alt="bullet png" />
              <span>Video qo’llanma bilan tanishing;</span>
            </QuestionnaireTabBoxLI>
            <QuestionnaireTabBoxLI>
              <img src={require('../../images/icons/icon/bullet/bullet.png')} alt="bullet png" />
              <span>Video qo’llanma bilan tanishing;</span>
            </QuestionnaireTabBoxLI>
          </QuestionnaireTabBoxUl>
          <Button 
              variant="contained" 
              color="primary"
              sx={{
                  borderRadius: "5px",
                  padding: "12px 20px",
                  fontWeight: "700",
                  fontSize: "1.75em",
                  lineHeight: "21px",
                  textTransform: "inherit"
              }}
              >
              So’rovnomada qatnashishni boshlash
          </Button>
        </QuestionnaireTabBox>
        <QuestionnaireTabBox>
          <Heading2 color="black" size="2em">
            Video qo’llanma
          </Heading2>
          <YoutubeEmbed embedId="hNit29grY6Q"/>
        </QuestionnaireTabBox>
      </QuestionnaireTabBoxs>
    </>
  )
}