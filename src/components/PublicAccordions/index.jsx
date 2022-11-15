import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import bx_plus from '../../images/icons/icon/bx_plus.png'
import bx_minus from '../../images/icons/icon/bx_minus.png'
import { AccordionBodyText, AccordionTitle, AccordionTitleImg, AccordionWrapper } from './styles';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  background: '#FFFFFF',
  border: '1px solid #EDEEFE',
  borderRadius: '20px',
  marginBottom: '10px',
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    aria-controls="panel1bh-content"
    id="panel1bh-header"
    {...props}
  />
))(({ theme }) => ({
  border: 'none',
  padding: '20px',

  backgroundColor:
    theme.palette.mode === 'dark' ? 'transparent' : 'transparent',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-content': {
    margin: '0 0 0 0',
    display: "flex",
    justifyContent: "space-between",
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: '10px 46px',
  // fontSize: '60px',
}));

export default function PublicAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <AccordionWrapper>
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary id="panel1d-header" aria-controls="panel1bh-content">
          <div>
            <AccordionTitleImg>
              <img src={require('../../images/icons/icon/question.png')} alt="question" />
            </AccordionTitleImg>
            <AccordionTitle>Aholini ro‘yxatga olish nima uchun zarur?</AccordionTitle>
          </div>
          {expanded === 'panel1' ? <img src={bx_minus} alt="plus" /> : <img src={bx_plus} alt="plus" />}
        </AccordionSummary>
        <AccordionDetails>
          <AccordionBodyText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </AccordionBodyText>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <div>
            <AccordionTitleImg>
              <img src={require('../../images/icons/icon/question.png')} alt="question" />
            </AccordionTitleImg>
            <AccordionTitle>O’zbekiston hududida birinchi aholini ro‘yxatga olish tadbiri qachon o‘tkazilgan?</AccordionTitle>
          </div>
          {expanded === 'panel2' ? <img src={bx_minus} alt="plus" /> : <img src={bx_plus} alt="plus" />}
        </AccordionSummary>
        <AccordionDetails>
          <AccordionBodyText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </AccordionBodyText>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <div>
            <AccordionTitleImg>
              <img src={require('../../images/icons/icon/question.png')} alt="question" />
            </AccordionTitleImg>
            <AccordionTitle>Birinchi marta aholini ro‘yxatga olingandan beri O’zbekistonda aholi soni qanchaga o‘zgardi?</AccordionTitle>
          </div>
          {expanded === 'panel3' ? <img src={bx_minus} alt="plus" /> : <img src={bx_plus} alt="plus" />}
        </AccordionSummary>
        <AccordionDetails>
          <AccordionBodyText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </AccordionBodyText>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel5'}
        onChange={handleChange('panel5')}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <div>
            <AccordionTitleImg>
              <img src={require('../../images/icons/icon/question.png')} alt="question" />
            </AccordionTitleImg>
            <AccordionTitle>Aholini ro‘yxatga olish tadbiri qaysi me’yoriy- huquqiy hujjatga asosan o‘tkaziladi?</AccordionTitle>
          </div>
          {expanded === 'panel5' ? <img src={bx_minus} alt="plus" /> : <img src={bx_plus} alt="plus" />}
        </AccordionSummary>
        <AccordionDetails>
          <AccordionBodyText>
            O‘zbekiston Respublikasi Prezidentining 2019 yil 5 fevraldagi “O‘zbekiston Respublikasida 2022 yilda aholini ro‘yxatga olishni o‘tkazish konsepsiyasini tasdiqlash to‘g‘risida”gi PF-5655-son Farmonida alohida band sifatida O‘zbekiston Respublikasining “Aholini ro‘yxatga olish to‘g‘risida”gi qonuni loyihasini ishlab chiqish vazifasi yuklatilgan. 2020 yil 16 mart kuni “Aholini ro‘yxatga olish to‘g‘risida”gi qonun qabul qilindi. Mazkur qonun quyidagilarni nazarda tutadi, aholini ro‘yxatga olishni o‘tkazishning maqsadi, tartibi, davri va muddatlarini aniqlash; zamonaviy texnologiya va uslubiyotlar asosida aholini ro‘yxatga olish tadbirini o‘tkazish va tashkil etish; aholini ro‘yxatga olishni o‘tkazishda ishtirok etuvchi davlat hokimiyati va boshqaruv organlarining vazifalari, funksiyalari va javobgarligini belgilash; jismoniy va yuridik shaxslarni ushbu jarayonlarga qatnashishi uchun aniq mexanizmlar va ularning mehnatiga haq to‘lash manbalarini belgilash; yakuniy natijalarni amalga oshirish uchun tashkiliy-amaliy, huquqiy, iqtisodiy va boshqa chora-tadbirlarni keltirib o‘tish inobatga olinishi ko‘rsatib o‘tilgan.
          </AccordionBodyText>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel4'}
        onChange={handleChange('panel4')}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <div>
            <AccordionTitleImg>
              <img src={require('../../images/icons/icon/question.png')} alt="question" />
            </AccordionTitleImg>
            <AccordionTitle>Aholini ro‘yxatga olish tadbirini kim o‘tkazadi?*</AccordionTitle>
          </div>
          {expanded === 'panel4' ? <img src={bx_minus} alt="plus" /> : <img src={bx_plus} alt="plus" />}
        </AccordionSummary>
        <AccordionDetails>
          <AccordionBodyText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </AccordionBodyText>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel6'}
        onChange={handleChange('panel6')}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <div>
            <AccordionTitleImg>
              <img src={require('../../images/icons/icon/question.png')} alt="question" />
            </AccordionTitleImg>
            <AccordionTitle>Aholini ro‘yxatga olish tadbirini o‘tkazishda qaysi moliyalashtirish manbalaridan foydalaniladi?</AccordionTitle>
          </div>
          {expanded === 'panel6' ? <img src={bx_minus} alt="plus" /> : <img src={bx_plus} alt="plus" />}
        </AccordionSummary>
        <AccordionDetails>
          <AccordionBodyText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </AccordionBodyText>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel7'}
        onChange={handleChange('panel7')}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <div>
            <AccordionTitleImg>
              <img src={require('../../images/icons/icon/question.png')} alt="question" />
            </AccordionTitleImg>
            <AccordionTitle>O‘zbekiston uchun shuncha pul sarflab aholini ro‘yxatga olish tadbirini o‘tkazish qanchalik muhim?</AccordionTitle>
          </div>
          {expanded === 'panel7' ? <img src={bx_minus} alt="plus" /> : <img src={bx_plus} alt="plus" />}
        </AccordionSummary>
        <AccordionDetails>
          <AccordionBodyText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </AccordionBodyText>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel8'}
        onChange={handleChange('panel8')}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <div>
            <AccordionTitleImg>
              <img src={require('../../images/icons/icon/question.png')} alt="question" />
            </AccordionTitleImg>
            <AccordionTitle>Aholini hisobga olish davri nima?</AccordionTitle>
          </div>
          {expanded === 'panel8' ? <img src={bx_minus} alt="plus" /> : <img src={bx_plus} alt="plus" />}
        </AccordionSummary>
        <AccordionDetails>
          <AccordionBodyText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </AccordionBodyText>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel9'}
        onChange={handleChange('panel9')}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <div>
            <AccordionTitleImg>
              <img src={require('../../images/icons/icon/question.png')} alt="question" />
            </AccordionTitleImg>
            <AccordionTitle>Aholini ro‘yxatga olish tadbirida necha yoshdan boshlab ro’yxatga olish mumkin?</AccordionTitle>
          </div>
          {expanded === 'panel9' ? <img src={bx_minus} alt="plus" /> : <img src={bx_plus} alt="plus" />}
        </AccordionSummary>
        <AccordionDetails>
          <AccordionBodyText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </AccordionBodyText>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel10'}
        onChange={handleChange('panel10')}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <div>
            <AccordionTitleImg>
              <img src={require('../../images/icons/icon/question.png')} alt="question" />
            </AccordionTitleImg>
            <AccordionTitle>Harbiy xizmatdagi aholi qanday ro’xatdan o’tadi</AccordionTitle>
          </div>
          {expanded === 'panel10' ? <img src={bx_minus} alt="plus" /> : <img src={bx_plus} alt="plus" />}
        </AccordionSummary>
        <AccordionDetails>
          <AccordionBodyText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </AccordionBodyText>
        </AccordionDetails>
      </Accordion>
    </AccordionWrapper>
  );
}