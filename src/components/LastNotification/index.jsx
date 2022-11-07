import React from 'react'
import { 
  NotificationHeader, 
  NotificationWrapper, 
  // MyIconButton, 
  // MyCloseIcon, 
  NotificationBody
} from './styles'
import { Notifications1 } from './Notifications/Notifications1'
import { Notifications2 } from './Notifications/Notifications2'
import { Notifications3 } from './Notifications/Notifications3'
import { Notifications4 } from './Notifications/Notifications4'
import { Notifications5 } from './Notifications/Notifications5'

export default function LastNotification() {
  return (
    <NotificationWrapper>
        <NotificationHeader>
            <h4>Last notifications</h4>
            {/* <MyIconButton>
              <MyCloseIcon/>
            </MyIconButton> */}
        </NotificationHeader>
        <NotificationBody>

          <Notifications1/>
          <Notifications2/>
          <Notifications3/>
          <Notifications4/>
          <Notifications5/>

        </NotificationBody>
    </NotificationWrapper>
  )
}