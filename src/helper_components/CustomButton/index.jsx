import React from 'react'
import { Button } from "./styles"

export default function CustomButton({children, disabled}) {
  return (
    <Button disabled={disabled} isDisabled={disabled}>{children}</Button>
  )
}
