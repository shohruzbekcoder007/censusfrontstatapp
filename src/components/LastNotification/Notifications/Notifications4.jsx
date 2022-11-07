import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import {
    NotificationInfor,
    NotificationInforTop,
    NotificationInforBottom,
    NotificationStatusWrapper
  } from '../styles'

export const Notifications4 = () => {

    const themeContext = useContext(ThemeContext)

    const ntheme = {
        border: themeContext.color.red,
        bg: "#FFF6F5"
    }

    return (
      <NotificationInfor ntheme={ntheme}>
        <NotificationInforTop>
          <h5>To’dirilgan forma nomi</h5>
          <span>2 kun minut oldin</span>
        </NotificationInforTop>
        <NotificationInforBottom>
          <span>Siz to'ldirgan shaxsga doir forma qabul qilindi</span>
          <NotificationStatusWrapper ntheme={{color: ntheme.border}}>
            <img src={require('../../../images/icons/icon/cancel.png')} alt="check"/>
            <span>Cancle</span>
          </NotificationStatusWrapper>
        </NotificationInforBottom>
      </NotificationInfor>
    )
  }