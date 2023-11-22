import { Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem, Avatar, User } from "@nextui-org/react";
import { RxDashboard } from "react-icons/rx";
import { IoCarSportOutline, IoExitOutline  } from "react-icons/io5";
import { TbBike } from "react-icons/tb";
import Styles from '@landingPage/styles/User.module.css'

export function UserAvatar () {
  return (
    <div className={Styles.container}>
      <Dropdown>
        <DropdownTrigger>
          <Avatar name="Bryan" />
        </DropdownTrigger>
        <DropdownMenu>
          <DropdownSection aria-label="User Info" title='User' showDivider>
            <DropdownItem key="username" color="primary">
              <User name='Bryan Turrubiates' description='CEO ZT Studios' />
            </DropdownItem>
          </DropdownSection>
          <DropdownSection aria-label="Navigation" title='Navigation' showDivider>
            <DropdownItem classNames={{base: Styles.textUser }} description='Info of bussiness' startContent={<RxDashboard style={{ fontSize: '1.2rem' }}/>}>Dashboard</DropdownItem>
            <DropdownItem classNames={{base: Styles.textUser }} description='Manage the cars of bussiness' startContent={<IoCarSportOutline style={{ fontSize: '1.2rem' }}/>}>Cars</DropdownItem>
            <DropdownItem classNames={{base: Styles.textUser }} description='Manage the motorcycles of bussiness' startContent={<TbBike style={{ fontSize: '1.2rem' }}/>}>Motorcycles</DropdownItem>
          </DropdownSection>
          <DropdownSection title='Exit Zone'>
            <DropdownItem description='Exit of app and log out' className="text-danger" color="danger" startContent={<IoExitOutline style={{ fontSize: '1.2rem' }}/>}>Log Out</DropdownItem>
          </DropdownSection>
        </DropdownMenu>
      </Dropdown>
    </div>
  )
}
