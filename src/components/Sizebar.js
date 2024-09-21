import { CalendarIcon, ChevronDownIcon, ClockIcon, DesktopComputerIcon, ShoppingBagIcon, UserGroupIcon, UserIcon } from '@heroicons/react/outline'
import React from 'react'
import SidebarRow from './SidebarRow'

function Sizebar() {
  return (
    <div className='p-2 mt-5 flex-shrink-0 w-60 xl:w-72'>
      <SidebarRow src="./prof.jfif" title="Muhammad Hashir"/>
      <SidebarRow Icon={UserIcon} title="Friends"/>
      <SidebarRow Icon={UserGroupIcon} title="Groups"/>
      <SidebarRow Icon={ShoppingBagIcon} title="MarketPlace"/>
      <SidebarRow Icon={DesktopComputerIcon} title="Watch"/>
      <SidebarRow Icon={CalendarIcon} title="Event"/>
      <SidebarRow Icon={ClockIcon} title="Memories"/>
      <SidebarRow Icon={ChevronDownIcon} title="See More"/>
    </div>
  )
}

export default Sizebar