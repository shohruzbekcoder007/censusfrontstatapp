import React from 'react'
import { Paragraph } from './styles'

export default function ParagraphText({children, styles}) {
  return (
    <Paragraph style={styles}>{children}</Paragraph>
  )
}
