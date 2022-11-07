import React from 'react'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import visibility from '../../images/icons/icon/visibility.png'
import {
    HeaderSettingsButton,
    HeaderSettingsText,
    HeaderSettingsImage,
} from './styles'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'

export default function HeaderSettings() {

  const themeContext = useContext(ThemeContext)

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <HeaderSettingsButton onClick={handleClick}>
          <HeaderSettingsImage>
            <img src={visibility} alt="visibility"/>
          </HeaderSettingsImage>
          <HeaderSettingsText>
            Ko'rinish turi
          </HeaderSettingsText>
      </HeaderSettingsButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        sx={{
          '& .MuiPaper-root': {
            boxShadow: themeContext.effect.shadow,
            width: "204px",
            borderRadius: "5px",
          },
          '& MuiList-root': {
            paddingTop: 0,
            paddingBottom: 0
          }
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
