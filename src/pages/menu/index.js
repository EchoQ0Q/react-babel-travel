import React, { Component } from "react";
import "./style.scss";

import { Menu, Icon } from "antd";

const SubMenu = Menu.SubMenu;

export default class Menus extends Component {
  render() {
    return (
      <Menu
        className="menu-wrap"
        onClick={this.handleClick}
        defaultSelectedKeys={["1"]}
        openKeys="sub1"
        mode="inline"
      >
        <SubMenu
          key="sub1"
          title={
            <span>
              <Icon type="menu" />
              <span>目录</span>
            </span>
          }
        >
          <Menu.Item key="1">Option 1</Menu.Item>
          <Menu.Item key="2">Option 2</Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}
