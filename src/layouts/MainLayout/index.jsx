import React from 'react'
import HeaderComponent from '../../components/HeaderComponent'
import Sidebar from '../../components/SideBar'
import './style.scss'
import {Outlet} from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className='main-layout-container'>
        <HeaderComponent/>
        <div className='main-layout-container__content'>
        <Sidebar/>
        <div className='right-side'>
        <Outlet/>
        </div>
        </div>
    </div>
  )
}

export default MainLayout