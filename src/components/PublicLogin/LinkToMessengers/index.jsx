import React from 'react'
import { Messanger, MessangerWrapper } from './styles'
import facebook from '../../../images/icons/icon-facebook-btn.8a1ae57a.svg'
import instagram from '../../../images/icons/icon-instagram.7c0870fa.svg'
import telegram from '../../../images/icons/icon-telegram.4f3887d0.svg'

export default function LinkToMessengers() {
  return (
    <MessangerWrapper>
        <Messanger>
            <img src={facebook} alt="f1"/>
        </Messanger>
        <Messanger>
            <img src={instagram} style={{height: "33px"}} alt="f1"/>
        </Messanger>
        <Messanger>
            <img src={telegram} style={{height: "33px"}} alt="f1"/>
        </Messanger>
    </MessangerWrapper>
  )
}
