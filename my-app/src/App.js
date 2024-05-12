import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



export default class App extends Component {

  
  state={
    searchQuery:""
  }


  settingState=(element)=>{
    this.setState({searchQuery:element});
  }

 
  
  pageSize=20;
  apiKey="245480d0613740bd9a9132a1c8967b90";
  apiKey1="1975b4cf1be840f0925577b3c5a30977";
  apiKey2="34c1ed7660ce43ffaf637a434fa8aeb7";
  render() {
    
    const router =createBrowserRouter([
      {
        path:"/general",
        element:<><Navbar settingState={this.settingState}/> <News    key="general"   pageSize={this.pageSize} country="in" category="general" apiKey={this.apiKey} searchQuery={this.state.searchQuery}/></>
      },
      {
        path:"/technology",
        element:<><Navbar settingState={this.settingState}/> <News    key="technology"  pageSize={this.pageSize} country="in" category="technology" apiKey={this.apiKey} searchQuery={this.state.searchQuery}/></>
      },
      {
        path:"/health",
        element:<><Navbar settingState={this.settingState}/> <News    key="health"  pageSize={this.pageSize} country="in" category="health" apiKey={this.apiKey} searchQuery={this.state.searchQuery}/></>
      },
      {
        path:"/sports",
        element:<><Navbar settingState={this.settingState}/> <News    key="sports"  pageSize={this.pageSize} country="in" category="sports" apiKey={this.apiKey} searchQuery={this.state.searchQuery}/></>
      },
      {
        path:"/business",
        element:<><Navbar settingState={this.settingState}/> <News    key="business"  pageSize={this.pageSize} country="in" category="business" apiKey={this.apiKey} searchQuery={this.state.searchQuery}/></>
      },
      {
        path:"/entertainment",
        element:<><Navbar settingState={this.settingState}/><News    key="entertainment"  pageSize={this.pageSize} country="in" category="entertainment" apiKey={this.apiKey} searchQuery={this.state.searchQuery}/></>
      },
      {
        path:"/science",
        element:<> <Navbar settingState={this.settingState}/> <News     key="science" pageSize={this.pageSize} country="in" category="science" apiKey={this.apiKey} searchQuery={this.state.searchQuery}/></>
      },
      {
        path:"/",
        element:<> <Navbar settingState={this.settingState}/> <News  key="general2"  pageSize={this.pageSize} country="in" category="general" apiKey={this.apiKey} searchQuery={this.state.searchQuery} /></>
      }
    ])
    return (
      <>
      <RouterProvider router={router}/>
     
      </>
    )
  }
}
