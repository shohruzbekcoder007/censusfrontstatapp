import React from 'react'
import Stepper from '../Stepper'
import { Link } from "react-router-dom"
import Button from '@mui/material/Button'

export default function QuestionnaireTabThree() {
  return (
    <>
        <Stepper activeItem={3} />
        <Link to='/surovnoma/questionfinal'>
            <Button 
                variant="contained" 
                color="primary"
                sx={{
                    borderRadius: "5px",
                    padding: "12px 20px",
                    fontWeight: "700",
                    fontSize: "1.75em",
                    lineHeight: "21px",
                    textTransform: "inherit"
                }}
                >
                Saqlash
            </Button>
          </Link>
    </>
  )
}
