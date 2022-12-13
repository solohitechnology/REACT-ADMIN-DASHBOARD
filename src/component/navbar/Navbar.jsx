import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import EditNotificationsOutlinedIcon from '@mui/icons-material/EditNotificationsOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { DarkMOdeContext } from '../../contex/darkModeContext';
import { useContext } from 'react';

const Navbar = () => {
  const { dispatch } = useContext(DarkMOdeContext);
  return (
    <div className="Navbar">
      <div className="Wrapper">
        <div className="search">
          <input type="search" placeholder='search....' />
          <SearchIcon />
        </div>
        <div className="items">
          <div className="item">
            < LanguageIcon className='icon' />
            English
          </div>
          <div className="item">
            <DarkModeOutlinedIcon className='icon' onClick={() => dispatch({ type: "TOGGLE" })} />

          </div>

          <div className="item">
            <ListOutlinedIcon className='icon' />

          </div>

          <div className="item">
            <EditNotificationsOutlinedIcon className='icon' />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <TextsmsOutlinedIcon className='icon' />
            <div className="counter">2</div>

          </div>
          <div className="item">
            < AcUnitIcon className='icon' />

          </div>

          <div className="item">
            <img src="./photo/user.png" alt="" className='avatar' />

          </div>


        </div>
      </div>
    </div>
  )
}

export default Navbar