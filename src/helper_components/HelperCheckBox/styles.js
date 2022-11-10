import { styled } from "@mui/system";
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';

export const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
    color: theme.palette.primary,
    '&.Mui-checked': {
        color: theme.palette.primary,
        width: "24px",
        height: "24px",
    },
    '&.MuiCheckbox-root': {
        width: "24px",
        height: "24px",
    }
}));

export const CustomTypography = styled(Typography)(({ theme }) => ({
    color: "#115E8C",
    paddingLeft: "16px",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "150%",
    margin: 0,
    '& label': {
        margin: 0
    }
}));

export const CustomFormControlLabel = styled(FormControlLabel)(({ }) => ({
    marginTop: "15px",
    marginLeft: 0,
}))