import React from 'react'
import PublicHeader from '../PublicHeader'
import { PublicPageWrapper } from './styles'
import { Outlet } from "react-router-dom"

export default function PublicPage() {
  return (
    <PublicPageWrapper>
        <PublicHeader/>
        <Outlet/>
    </PublicPageWrapper>
  )
}
