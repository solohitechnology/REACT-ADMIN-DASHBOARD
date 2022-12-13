import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import BabyChangingStationIcon from '@mui/icons-material/BabyChangingStation';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import LoginIcon from '@mui/icons-material/Login';
import SettingsAccessibilityOutlinedIcon from '@mui/icons-material/SettingsAccessibilityOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom'
import { DarkMOdeContext } from '../../contex/darkModeContext';
import { useContext } from 'react';


const Sidebar = () => {
     const { dispatch } = useContext(DarkMOdeContext);
     return (
          <div className="Sidebar">
               <div className="top">
                    <Link to='/' style={{ textDecoration: 'none' }}>
                         <span className='logo'>Solohitech</span>
                    </Link>
               </div>
               <hr />
               <div className="center">
                    <ul>
                         <p className='title'>MAIN</p>
                         <li>
                              <DashboardIcon className='icon' />
                              <span>Dashboard</span>
                         </li>
                         <p className='title'>LIST</p>
                         <Link to='/users' style={{ textDecoration: 'none' }}>
                              <li>
                                   <GroupIcon className='icon' />

                                   <span>Uesers</span>

                              </li>
                         </Link>
                         <Link to="/products" style={{ textDecoration: 'none' }}>
                              <li>
                                   <ProductionQuantityLimitsIcon className='icon' />
                                   <span>Product</span>
                              </li>
                         </Link>
                         <li>
                              <BabyChangingStationIcon className='icon' />
                              <span>Oders</span>
                         </li>
                         <p className='title'>USEFUL</p>
                         <li>
                              <LocalShippingIcon className='icon' />
                              <span>Shiping </span>
                         </li>
                         <li>
                              <QueryStatsIcon className='icon' />
                              <span>Stats</span>
                         </li>
                         <li>
                              <NotificationsNoneOutlinedIcon className='icon' />
                              <span>Notification</span>
                         </li>
                         <p className='title'>SERVICE</p>
                         <li>
                              <SettingsSystemDaydreamOutlinedIcon className='icon' />
                              <span>System Helth</span>
                         </li>
                         <li>
                              <LoginIcon className='icon' />
                              <span>Logs</span>
                         </li>
                         <li>
                              <SettingsAccessibilityOutlinedIcon className='icon' />
                              <span>Settings</span>
                         </li>
                         <p className='title'>USER</p>
                         <li>
                              <AccountCircleIcon className='icon' />
                              <span>Profile</span>
                         </li>
                         <li>
                              < LogoutIcon className='icon' />
                              <span>Logout</span>
                         </li>
                    </ul>
               </div>
               <div className="bottom">
                    <div className="colorption" onClick={() => dispatch({ type: "LIGHT"})}></div>
                    <div className="colorption" onClick={() => dispatch({ type: "DARK"})}></div>
               </div>
          </div>
     )
}

export default Sidebar;