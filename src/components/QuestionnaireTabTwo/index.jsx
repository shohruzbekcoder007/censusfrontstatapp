import React, { useState } from 'react'
import QuestionnaireTop from '../QuestionnaireTop'
import Stepper from '../Stepper'
import { CommentTitle, QuestionnaireTabBox, QuestionnaireTabBoxs, QuestionnaireTabBoxUl, QuestionnaireTabBoxLI, RadioLabel } from './styles'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Divider } from '@mui/material';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button'
// import FormLabel from '@mui/material/FormLabel';

const forsMessage = [
    {
        form: 1,
        forms: [
            "1-SHAKL. Turar joyning xususiyatlari va unda yashovchilar ro'yxati",
            "2-SHAKL. Shaxsga oid savolnoma",
            "5-SHAKL. Vaqtincha turgan joyi bo'yicha O'zbekiston Respublikasi fuqarolari va fuqaroligi bo'lmagan shaxslar uchun nazorat varaqasi"
        ]
    },
    {
        form: 2,
        forms: [
            "4-SHAKL. Aholining ayrim toifalariga nisbatan shaxsga doir ma'lumotlarni yig'ish bo'yicha savolnoma",
            "2A-SHAKL. Maxsus muassasa yoki tashkilotdagi shaxslar uchun shaxsga oid savolnoma"
        ]
    },
    {
        form: 3,
        forms: [
            "1-SHAKL. Turar joyning xususiyatlari va unda yashovchilar ro'yxati",
            "2-SHAKL. Shaxsga oid savolnoma"
        ]
    },
    {
        form: 4,
        forms: [
            "3-SHAKL. O'zbekiston Respublikasiga vaqtincha kelgan chet el fuqarolari uchun savolnoma"
        ]
    }
]

export default function QuestionnaireTabTwo() {

    const [forms, setForms] = useState(forsMessage[0].forms)

    const radioGroupChangeHandle = (event) => {
        setForms(forsMessage.find(elem => elem.form == event.target.value)?.forms || [])
    }

    return (
        <>
            <QuestionnaireTop />
            <Stepper activeItem={2} />
            <QuestionnaireTabBoxs>
                <QuestionnaireTabBox>
                    <FormControl>
                        <CommentTitle>
                            <img src={require('../../images/icons/icon/user/normal.png')} alt="izoh img" />
                            <p>Quyidagilardan mos variantni tanlang:</p>
                        </CommentTitle>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue={1}
                            name="radio-buttons-group"
                            onChange={radioGroupChangeHandle}
                            sx={{
                                paddingTop: "20px",
                                '& .MuiTypography-root': {
                                    fontSize: "8px"
                                }
                            }}
                        >
                            <FormControlLabel value={1} control={<Radio color="primary" />} label={<RadioLabel>O’zbekiston Respublikasi hududida doimiy yashovchi fuqaro yoki fuqaroligi bo’lmagan shaxslar</RadioLabel>} />
                            <FormControlLabel value={2} control={<Radio color="primary" />} label={<RadioLabel>Maxsus, ijtimoiy muassasa, tashkilotlarda doimiy yashovchi shaxslar</RadioLabel>} />
                            <FormControlLabel value={3} control={<Radio color="primary" />} label={<RadioLabel>12 oy va undan ortiq muddatda O’zbekiston Respublikasi hududida yashovchi chet el fuqarosi</RadioLabel>} />
                            <FormControlLabel value={4} control={<Radio color="primary" />} label={<RadioLabel>12 oydan kam muddatda O’zbekiston Respublikasi hududida yashovchi chet el fuqarosi</RadioLabel>} />
                        </RadioGroup>
                    </FormControl>
                    <Divider sx={{ backgroundColor: "#A5A5A5", borderColor: "#A5A5A5", margin: "15px 0" }} />
                    <Link to='/surovnoma/questionreport'>
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
                            Davom ettirish
                        </Button>
                    </Link>
                </QuestionnaireTabBox>
                <QuestionnaireTabBox>
                    <CommentTitle>
                        <img src={require('../../images/icons/icon/info/normal.png')} alt="izoh img" />
                        <p>Izoh</p>
                    </CommentTitle>
                    <QuestionnaireTabBoxUl>
                        {
                            forms.map((elem, index) => (
                                <QuestionnaireTabBoxLI key={index}>
                                    <img src={require('../../images/icons/icon/bullet/bullet.png')} alt="bullet png" />
                                    <span>
                                        {elem}
                                    </span>
                                </QuestionnaireTabBoxLI>
                            ))
                        }
                    </QuestionnaireTabBoxUl>
                </QuestionnaireTabBox>
            </QuestionnaireTabBoxs>
        </>
    )
}
