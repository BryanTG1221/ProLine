import { RxDashboard } from "react-icons/rx";
import { PiSteeringWheelLight } from "react-icons/pi";
import { PiMotorcycleLight } from "react-icons/pi";
import { PiCoinLight } from "react-icons/pi";
import { CiUser } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import LogoIcon from '@assets/favIcon.svg'
import Styles from '@businessStyles/Sidebar.module.css'
import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

export function Sidebar () {
  const location = useLocation()
  const [page, setPage] = useState(location.pathname)

  useEffect(() => {
    setPage(location.pathname)
  }, [location])
  return (
    <nav className={Styles.container}>
      <header className={Styles.header}>
        <img src={LogoIcon} width={20} />
        <ul className={Styles.list}>
          <li className={Styles.containerItem}>
            <Link to="/admin/dashboard">
              <RxDashboard className={`${Styles.icon} ${page === "/admin/dashboard" ? Styles.iconActive : ""}`} />
            </Link>
          </li>
          <li className={Styles.containerItem}>
            <Link to="/admin/cars">
              <PiSteeringWheelLight className={`${Styles.icon} ${page === "/admin/cars" ? Styles.iconActive : ""}`} />
            </Link>
          </li>
          <li className={Styles.containerItem}>
            <Link to="/admin/motorcycles">
              <PiMotorcycleLight className={`${Styles.icon} ${page === "/admin/motorcycles" ? Styles.iconActive : ""}`} />
            </Link>
          </li>
          <li className={Styles.containerItem}>
            <Link to="/admin/sells">
              <PiCoinLight className={`${Styles.icon} ${page === "/admin/sells" ? Styles.iconActive : ""}`} />
            </Link>
          </li>
          <li className={Styles.containerItem}>
            <Link to="/admin/users">
              <CiUser className={`${Styles.icon} ${page === "/admin/users" ? Styles.iconActive : ""}`} />
            </Link>
          </li>
        </ul>
      </header>
      <Link to="/">
        <CiLogout className={Styles.icon} style={{color: 'red'}}/>
      </Link>
    </nav>
  )
}