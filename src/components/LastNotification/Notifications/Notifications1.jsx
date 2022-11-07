import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import {
    NotificationInfor,
    NotificationInforTop,
    NotificationInforBottom
  } from '../styles'

export const Notifications1 = () => {

    const themeContext = useContext(ThemeContext)

    const ntheme = {
        border: themeContext.color.green,
        bg: "#F4FFFA"
    }

    return (
        <NotificationInfor ntheme={ntheme}>
            <NotificationInforTop>
                <h5>To’dirilgan forma nomi</h5>
                <img src={require('../../../images/icons/icon/delete/normal.png')} alt="delete" />
            </NotificationInforTop>
            <NotificationInforBottom>
                <span>Siz to'ldirgan shaxsga doir forma qabul qilindi</span>
                <div>
                    <img src={require('../../../images/icons/icon/check.png')} alt="check" />
                    <span></span>
                </div>
            </NotificationInforBottom>
        </NotificationInfor>
    )
}