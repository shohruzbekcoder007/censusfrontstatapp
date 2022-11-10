import React from 'react'
import { CustomCheckbox, CustomTypography, CustomFormControlLabel } from './styles'

export default function HelperCheckBox() {
    return (
        <CustomFormControlLabel
            control={<CustomCheckbox />}
            label={<CustomTypography
                variant="h1"
                gutterBottom
            >
                Kelishuvga rozilik
            </CustomTypography>} />
    )
}
