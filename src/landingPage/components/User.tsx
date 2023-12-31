import { useContext } from "react";
import { UserContext } from '@contexts/User'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem, Avatar, User } from "@nextui-org/react";
import { PiCoinLight } from "react-icons/pi";
import { RiUser3Line } from "react-icons/ri";
import { IoCarSportOutline, IoExitOutline  } from "react-icons/io5";
import { TbBike } from "react-icons/tb";
import { FiLogIn } from "react-icons/fi";
import { Link } from 'react-router-dom';
import Styles from '@landingPage/styles/User.module.css'

export function UserAvatar () {
  const userContextData = useContext(UserContext)
  return (
    <div className={Styles.container}>
      <Dropdown>
        <DropdownTrigger>
          <Avatar name={userContextData?.user?.name} />
        </DropdownTrigger>
        <DropdownMenu aria-label="user">
          <DropdownSection aria-label="User Info" title='User' showDivider>
            <DropdownItem key="username" color="primary" aria-label="username">
              <User name={`${userContextData?.user?.name} ${userContextData?.user.lastname}`} description={`${userContextData?.user.position} ${userContextData?.user.department}`} />
            </DropdownItem>
          </DropdownSection>
          <DropdownSection aria-label="Navigation" title='Navigation' showDivider>
            <DropdownItem aria-label="description" classNames={{base: Styles.textUser }} description='Manage the cars of bussiness' startContent={<IoCarSportOutline style={{ fontSize: '1.2rem' }}/>}>
              <Link to="/admin/cars">Cars</Link>
            </DropdownItem>
            <DropdownItem aria-label="description" classNames={{base: Styles.textUser }} description='Manage the motorcycles of bussiness' startContent={<TbBike style={{ fontSize: '1.2rem' }}/>}>
              <Link to="/admin/motorcycles">Motorcycles</Link>
            </DropdownItem>
            <DropdownItem aria-label="description" classNames={{base: Styles.textUser }} description='View the las selss of bussiness' startContent={<PiCoinLight style={{ fontSize: '1.2rem' }}/>}>
              <Link to="/admin/sells">Sells</Link>
            </DropdownItem>
            <DropdownItem aria-label="description" classNames={{base: Styles.textUser }} description='View and edit the users of bussiness' startContent={<RiUser3Line style={{ fontSize: '1.2rem' }}/>}>
              <Link to="/admin/users">Employees</Link>
            </DropdownItem>
          </DropdownSection>
          <DropdownSection title='Exit Zone' aria-label="logout">
            <DropdownItem description='Exit of app and log out' className="text-danger" color="danger" startContent={<IoExitOutline style={{ fontSize: '1.2rem' }}/>}>Log Out</DropdownItem>
          </DropdownSection>
        </DropdownMenu>
      </Dropdown>
    </div>
  )
}

export function UserToLogin () {
  return (
    <div className={Styles.container}>
      <Dropdown>
        <DropdownTrigger>
          <Avatar />
        </DropdownTrigger>
        <DropdownMenu aria-label="login">
          <DropdownSection aria-label="user" title="User">
            <DropdownItem aria-label="description" classNames={{base: Styles.textUser }} startContent={<FiLogIn />} description="Here you can login and access to buy cars" style={{ fontSize: '1.2rem' }}>
              <Link key="Login" to="/login">Sign In</Link>
            </DropdownItem>
          </DropdownSection>
        </DropdownMenu>
      </Dropdown>
    </div>
  )
}