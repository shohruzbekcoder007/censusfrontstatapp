import React from "react"
import defaultTheme from './theme/defaultTheme'
import ResponsiveDrawer from './components/Main'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Panel from './components/Panel'
import { ThemeProvider  } from 'styled-components'
import { QueryClient, QueryClientProvider} from 'react-query'
import PublicPage from "./components/PublicPage"
import PublicLogin from "./components/PublicLogin"
import { ThemeProvider as MuiTheme } from '@mui/material/styles'
import muiTheme from './theme/muiTheme'
import PublicAbout from "./components/PublicAbout"
import PublicRequest from "./components/PublicRequest"
import PublicAgreement from "./components/PublicAgreement"
import PublicFaq from "./components/PublicFaq"
import PublicContact from "./components/PublicContact"

const queryClient = new QueryClient()

function App() {
  return (
    <MuiTheme theme={muiTheme}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <ThemeProvider theme={defaultTheme}>
              <Routes>
                  <Route path="/" element={<ResponsiveDrawer/>}>
                    <Route index element={<Panel/>}/>
                    <Route path="surovnoma" element={<p>salom2</p>} />
                    <Route path="sozlamalar" element={<p>salom3</p>} />
                  </Route>
                  <Route path="/public" element={<PublicPage/>}>
                    <Route index element={<PublicLogin/>}/>
                    <Route path="about" element={<PublicAbout/>} />
                    <Route path="request" element={<PublicRequest/>} />
                    <Route path="agreement" element={<PublicAgreement/>} />
                    <Route path="faq" element={<PublicFaq/>} />
                    <Route path="contact" element={<PublicContact/>} />
                  </Route>
              </Routes>
          </ThemeProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </MuiTheme>
  );
}

export default App;
