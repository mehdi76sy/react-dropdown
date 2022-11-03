import React, {useState, useEffect, useRef} from 'react'
import './dropdown.css'

import menu from '../../src/assets/menu-svgrepo-com.svg'
import user from '../../src/assets/user-svgrepo-com.svg'
import edit from '../../src/assets/edit-svgrepo-com.svg'
import inbox from '../../src/assets/inbox-svgrepo-com.svg'
import settings from '../../src/assets/settings-svgrepo-com.svg'
import help from '../../src/assets/help-svgrepo-com.svg'
import logout from '../../src/assets/logout-svgrepo-com.svg'
import login from '../../src/assets/login-svgrepo-com.svg'


const Dropdown = () => {

    const[open, setOpen] = useState(false);

    let menuRef = useRef();

    useEffect(() => {
        let handler = (e) => {
          if(!menuRef.current.contains(e.target)) {
            setOpen(false);
          }
      
        };
        document.addEventListener("mousedown", handler);
    
        return() => {
          document.removeEventListener("mousedown", handler);
        }
    
      });


  return (
    <div className="menu-container" ref={menuRef}>
        <div className="menu-trigger"
          onClick={() => {setOpen(!open)}}
        >
          <img src={menu}/>
        </div>

        <div className={`dropdown-menu ${open? 'active' : 'inactive'}`}>

          <div className='wrapper'>
            <h3>Hello</h3>
            <span>Frontend developer</span>
            <span>UI/UX designer</span>
          </div>
          
          <ul>
            <DropdownItem img={user} text={"My profile"}/>
            <DropdownItem img={edit} text={"Edit profile"}/>

            <DropdownItem img={inbox} text={"Inbox"}/>
            <DropdownItem img={settings} text={"Settings"}/>

            <DropdownItem img={help} text={"Help"}/>
            <DropdownItem img={logout} text={"Logout"}/>
            
          </ul>
        </div>
      </div>
  );
}

function DropdownItem(props) {
    return (
      <li className='dropdown-item'>
        <img src={props.img}></img>
        <a>{props.text}</a>
      </li>
    );
  }

export default Dropdown