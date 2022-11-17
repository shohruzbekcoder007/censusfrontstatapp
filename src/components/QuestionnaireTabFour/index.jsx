import { Button } from '@mui/material'
import React from 'react'
import Heading1 from '../../helper_components/Heading1'
import Heading2 from '../../helper_components/Heading2'
import Stepper from '../Stepper'
import { FinalContainer, FinalWrapper, FinalContent, FinalCode, FinalImg } from './styles'

export default function QuestionnaireTabFour() {
  return (
    <>
        <Stepper activeItem={4} />
        <FinalWrapper>
            <FinalContainer>
                <Heading1 color="blue" size="4em">
                  So’rovnomangiz muvaffaqiyatli yuborildi! 
                </Heading1>
                <Heading1 color="black" size="4em">
                  So’rovnomada qatnashganingiz uchun rahmat!
                </Heading1>
                <FinalContent>
                  So’rovnomalar tasdiqlash uchun topshirilganidan so’ng ularni o’zgartirish va ularni ko’zdan kechirish imkoningiz bo’lmaydi. Topshirilgan savolnomalar so’rovnomalar ro’yxatida paydo bo’lgandan so’ng browser oynasini yopishingiz mumkin! So’rovnomada ishtirokingiz uchun tashakkur etamiz!
                </FinalContent>
                <FinalCode>
                  <Heading2 color="black" size="3em">Tasdiqlash kodi: 12335</Heading2>
                </FinalCode>
                <FinalImg>
                  <img src={require('../../images/people.png')} alt="people" />
                </FinalImg>
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
                            To'ldirilgan so'rovnomani ko'rish
                        </Button>
            </FinalContainer>
        </FinalWrapper>
    </>
  )
}
