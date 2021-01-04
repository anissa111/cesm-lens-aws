import React from 'react'
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from './SidebarElements'

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Icon>
        <CloseIcon></CloseIcon>
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="overview">Overview</SidebarLink>
          <SidebarLink to="data-access">Data Access</SidebarLink>
          <SidebarLink to="data">Data</SidebarLink>
          <SidebarLink to="known-issues">Known Issues</SidebarLink>
          <SidebarLink to="data-citation">Data Citation</SidebarLink>
          <SidebarLink to="updates">Updates</SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
