import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import {
    NotificationInfor,
    NotificationInforTop,
    NotificationInforBottom,
    NotificationStatusWrapper
  } from '../styles'

export const Notifications5 = () => {

    const themeContext = useContext(ThemeContext)

    const ntheme = {
        border: themeContext.color.green,
        bg: "#F4FFFA"
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
            <img src={require('../../../images/icons/icon/check.png')} alt="check"/>
            <span>Tasdiqlandi</span>
          </NotificationStatusWrapper>
        </NotificationInforBottom>
      </NotificationInfor>
    )
  }