import React, { Component } from "react";
import { updateMenu } from "../../store/actionCreators";
import { connect } from "react-redux";
import { Menu, Icon } from "antd";

import "./style.scss";

const SubMenu = Menu.SubMenu;

class Menus extends Component {
  handleClick = ({ key }) => {
    this.props._updateMenu(key);
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

const mapDispatch = dispatch => {
  return {
    _updateMenu: (key) => {
      dispatch(updateMenu(key));
    }
  };
}

export default connect(null, mapDispatch)(Menus);
