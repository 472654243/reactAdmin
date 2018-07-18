import React from 'react'
import { Menu, Icon } from 'antd';
import MenuConfig from './../../config/menuConfig'
import { NavLink } from 'react-router-dom'
import './index.less'

const SubMenu = Menu.SubMenu;

export default class NavLeft extends React.Component { 
  componentWillMount(){ 
    const menuTreeNode = this.renderMenu(MenuConfig)

    this.setState({
      menuTreeNode
    })
  }
  renderMenu = (data) => { 
    return data.map((item) => { 
      if (item.children) {
        return (
          <SubMenu key={item.key} title={<span><Icon type={item.icon} /><span>{item.title}</span></span>}>
            {this.renderMenu(item.children)}
          </SubMenu>
        )
      } 
      
      return <Menu.Item key={item.key}>{item.icon ? <Icon type={item.icon} /> : ''}
          <NavLink to={item.key}>{item.title}</NavLink>
        </Menu.Item>        
      
    })
  }
  render() { 
    return (
      <div className="nav-left">
        <div className="logo">
            <img src="/assets/logo-ant.svg" alt=""/>
            <h1>react Admin</h1>
        </div>
        <Menu>
          { this.state.menuTreeNode }
        </Menu>
      </div>
    );
  }
}