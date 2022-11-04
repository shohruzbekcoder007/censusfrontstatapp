import React, { useContext } from 'react'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import visibility from '../../images/icons/icon/visibility.png'
import defaultTheme from '../../context/theme_context'
import {
    HeaderSettingsButton,
    HeaderSettingsText,
    HeaderSettingsImage
} from './styles'

export default function HeaderSettings() {

  let  theme = useContext(defaultTheme);

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
      <HeaderSettingsButton theme={theme} onClick={handleClick}>
          <HeaderSettingsImage theme={theme}>
            <img src={visibility} alt="visibility"/>
          </HeaderSettingsImage>
          <HeaderSettingsText theme={theme}>
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
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
