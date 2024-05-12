import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



const App = () => {


 const [searchQuery, setsearchQuery] = useState("")

  const settingState = (element) => {
    setsearchQuery(element);
  }



  let pageSize = 20;
  let apiKey2 = "245480d0613740bd9a9132a1c8967b90";
  let apiKey = "1975b4cf1be840f0925577b3c5a30977";
  let apiKey3 = "34c1ed7660ce43ffaf637a434fa8aeb7";


  const router = createBrowserRouter([
    {
      path: "/general",
      element: <><Navbar settingState={settingState} /> <News key="general" pageSize={  pageSize} country="in" category="general" apiKey={  apiKey} searchQuery={ searchQuery} /></>
    },
    {
      path: "/technology",
      element: <><Navbar settingState={settingState} /> <News key="technology" pageSize={  pageSize} country="in" category="technology" apiKey={  apiKey} searchQuery={ searchQuery} /></>
    },
    {
      path: "/health",
      element: <><Navbar settingState={settingState} /> <News key="health" pageSize={  pageSize} country="in" category="health" apiKey={  apiKey} searchQuery={ searchQuery} /></>
    },
    {
      path: "/sports",
      element: <><Navbar settingState={settingState} /> <News key="sports" pageSize={  pageSize} country="in" category="sports" apiKey={  apiKey} searchQuery={ searchQuery} /></>
    },
    {
      path: "/business",
      element: <><Navbar settingState={settingState} /> <News key="business" pageSize={  pageSize} country="in" category="business" apiKey={  apiKey} searchQuery={ searchQuery} /></>
    },
    {
      path: "/entertainment",
      element: <><Navbar settingState={settingState} /><News key="entertainment" pageSize={  pageSize} country="in" category="entertainment" apiKey={  apiKey} searchQuery={ searchQuery} /></>
    },
    {
      path: "/science",
      element: <> <Navbar settingState={settingState} /> <News key="science" pageSize={  pageSize} country="in" category="science" apiKey={  apiKey} searchQuery={ searchQuery} /></>
    },
    {
      path: "/",
      element: <> <Navbar settingState={settingState} /> <News key="general2" pageSize={  pageSize} country="in" category="general" apiKey={  apiKey} searchQuery={ searchQuery} /></>
    }
  ])
  return (
    <>
      <RouterProvider router={router} />

    </>
  )
}
export default App;
