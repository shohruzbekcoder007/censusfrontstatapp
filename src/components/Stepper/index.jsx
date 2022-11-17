import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { StepperBody, StepperWrapper, Step } from './styles';

export default function Stepper({activeItem}) {
    return (
        <StepperWrapper>
            <Grid container spacing={0}>
                <Step item xs={3}>
                    <StepperBody active={activeItem == 1?true:false}>
                        <p>
                            <span>1. </span>
                            Kirish
                        </p>
                    </StepperBody>
                </Step>
                <Step item xs={3}>
                    <StepperBody active={activeItem == 2?true:false}>
                        <p>
                            <span>2. </span>
                            So'rovnoma turi
                        </p>
                    </StepperBody>
                </Step>
                <Step item xs={3}>
                    <StepperBody active={activeItem == 3?true:false}>
                        <p>
                            <span>3. </span>
                            So’rovnoma to’ldirish
                        </p>
                    </StepperBody>
                </Step>
                <Step item xs={3}>
                    <StepperBody active={activeItem == 4?true:false}>
                        <p>
                            <span>4. </span>
                            So’rovnoma yakuni
                        </p>
                    </StepperBody>
                </Step>
            </Grid>
        </StepperWrapper>
    )
}
