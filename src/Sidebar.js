import React from "react"

import "./Sidebar.css"
import { Layout, Menu, Breadcrumb, Icon , Button , Row, Col } from 'antd';
import { connect } from 'react-redux'
import { addOne, minusOne } from './actions/index'
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class Sidebar extends React.Component {

  componentWillMount(){
  }
  handlersminus(v){
    this.props.minusOne(v.listingId)
  }
  handleradd(v){
    this.props.addOne(v.listingId)
  }
  handler(){

  }
  state = {
    collapsed: false,
    card:[
      {"index":0,"name":"产品名称1","num":1},
      {"index":1,"name":"产品名称2","num":2},
    ]
  };

  render() {
    console.log(this.props)
    return (
        <Sider>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>购物车</span>
            </Menu.Item>
            { this.props.cart ?
              this.props.cart.map(v => {
                return(
                  <Menu.Item key={v.listingId}>
                      <Row>
                        <Col span={16}>
                            <Icon type="desktop" />
                            <span>{v.listing.product.name}</span>
                        </Col>
                        <Col span={8}>
                            <Button type="dashed" size="small" onClick={() => this.handlersminus(v)}>-</Button>
                            <span> {v.quantity} </span>
                            <Button type="dashed" size="small" onClick={() => this.handleradd(v)} >+</Button>
                        </Col>
                      </Row>
                  </Menu.Item>
              )
            }):[]
            }
          </Menu>
          <Footer>
            <Button type="dashed" onClick = {() => this.handler()}>购物车结算</Button>
          </Footer>
        </Sider>
    );
  }
}
function mapStateToProps(state){
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps,{ addOne, minusOne })(Sidebar)
