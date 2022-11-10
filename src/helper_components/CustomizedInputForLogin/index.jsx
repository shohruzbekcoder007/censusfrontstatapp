import React from "react"
import { withStyles } from '@mui/styles'
import TextField from "@mui/material/TextField"
import email from '../../images/icons/icon/email.png'

const CssTextField = withStyles({
  root: {
    width: "100%",
    "& input.MuiInputBase-input": {
        color: "#002A44",
        paddingTop: "20px",
        paddingBottom: "20px",
        paddingLeft: "43px",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "14px",
        lineHeight: "150%"
    },
    "& label.Mui-focused": {
      color: "#002A44",
      paddingLeft: "0"
    },
    "& .MuiFormLabel-root": {
      paddingLeft: "30px",
      paddingTop: "3px"
    },
    "& .MuiFormLabel-filled": {
        padding: 0
      },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        backgroundColor: "transparent",
        border: "1px solid #DDDDDD",
        borderRadius: "10px"
      },
      "&:hover fieldset": {
        border: "1px solid #DDDDDD",
      },
      "&.Mui-focused fieldset": {
        border: "1px solid #DDDDDD",
      }
    }
  }
})(TextField);

export default function CustomizedInputForLogin({label}) {
  return (
    <div style={{position: "relative"}}>
        <img src={email} style={{position: "absolute", top: "24px", left: "20px"}} alt="email iconc" />
      <CssTextField
        // error
        label={label}
        variant="outlined"
        id="custom-css-outlined-input"
        // helperText="Incorrect entry."
      />
    </div>
  );
}
