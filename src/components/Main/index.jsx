import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Sidebar from '../Sidebar';
import { Outlet } from 'react-router-dom'
import Header from '../Header';
// import LastNotification from '../LastNotification';
import { MainWrapper } from './styles';
import { MainWrapperAllPages } from '../../global_styles/styles';
import SidebarMini from '../SidebarMini';

function ResponsiveDrawer(props) {

  const [big, setBig] = React.useState(false)

  return (
    <MainWrapperAllPages>
      <Box sx={{ display: 'flex'}}>
        <CssBaseline />
        {
          big?<Sidebar/>:<SidebarMini/>
        }
        <Box
          component="main"
          sx={big?{ width: '100%', marginLeft: '329px'}:{ width: '100%', marginLeft: '120px'}}
        >
          <Header big={big}/>
          <MainWrapper takeViewportHeight>
            <Outlet/>
            {/* <LastNotification/> */}
          </MainWrapper>
        </Box>
      </Box>
    </MainWrapperAllPages>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;
