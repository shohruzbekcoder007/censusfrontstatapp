import React from 'react'
import { Heading } from './styles'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'

export default function Heading1({ children, color }) {

    const themeContext = useContext(ThemeContext)

    return (
        <Heading color={themeContext.color[color]}>{children}</Heading>
    )
}
