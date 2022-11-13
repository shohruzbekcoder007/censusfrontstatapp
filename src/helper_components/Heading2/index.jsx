import React from 'react'
import { Heading } from './styles'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'

export default function Heading2({ children, color, size }) {

    const themeContext = useContext(ThemeContext)

    return (
        <Heading color={themeContext.color[color]} size={size}>{children}</Heading>
    )
}