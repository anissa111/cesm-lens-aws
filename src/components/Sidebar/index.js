import React from 'react'
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon></CloseIcon>
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="overview" onClick={toggle}>
            Overview
          </SidebarLink>
          <SidebarLink to="data-access" onClick={toggle}>
            Data Access
          </SidebarLink>
          <SidebarLink to="data" onClick={toggle}>
            Data
          </SidebarLink>
          <SidebarLink to="notebooks" onClick={toggle}>
            Notebooks
          </SidebarLink>
          <SidebarLink to="data-citation" onClick={toggle}>
            Data Citation
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
