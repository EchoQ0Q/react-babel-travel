import React, { Component } from "react";
import store from "../../store/";
import "./style.scss";

import { Menu, Icon } from "antd";

const SubMenu = Menu.SubMenu;

class Menus extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    store.suscribe();
  }
  handleClick = ({ item, key }) => {
    this.props.updateMenu(key);
  };
  render() {
    return (
      <Menu
        className="menu-wrap"
        //defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        onClick={this.handleClick}
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
          <Menu.Item key="a">let和const</Menu.Item>
          <Menu.Item key="b">箭头函数</Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}

export default Menus;
