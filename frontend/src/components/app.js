import React, { Component } from "react";
import { render } from "react-dom";
// import HomePage from "./HomePage";
// import React, { Component, useState, useEffect } from "react";
import { Layout, Menu, Col, Row, Pagination, Table } from 'antd';
const { Header, Content, Footer } = Layout;
import 'antd/dist/antd.css';

import axios from 'axios';
const axiosInstance = axios.create({ baseURL: window.location.href });

import { Skeleton, Switch, Card, Avatar } from 'antd';
import { UpOutlined, DeleteOutlined, DownOutlined, CopyOutlined } from '@ant-design/icons';

const { Meta } = Card;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataList: []
    }
    this.fetchDataList = this.fetchDataList.bind(this);
  }
  fetchDataList() {
    axiosInstance.get(`http://localhost:8000/api/`)
      .then(res => {
        console.log(res);
        this.setState({
          dataList: res.data
        });
      }).catch(e => {
        console.log(e);
        // debugger;
      });
  }
  deleteHandler = () =>{

  }
  componentDidMount() {
    this.fetchDataList()
    console.log(this.state.dataList, ": Datalist")
  }
  render() {
    // const { dataList } = this.state.dataList;
    // debugger;
    // const cardList = this.state.dataList.map(data => {
    //   return (
    //     <Card
    //       style={{ width: 300, marginTop: 16 }}
    //       actions={[
    //         <UpOutlined />,
    //         <DownOutlined />,
    //         <CopyOutlined />,
    //         <DeleteOutlined />
    //       ]}
    //     >
    //       <Skeleton loading={false} avatar active>
    //         <Meta
    //           title={data.data_id}
    //           description={data.rule_name}
    //         />
    //       </Skeleton>
    //     </Card>
    //   )
    // }
    // )
    const columns = [
      // { title: 'Sl No', dataIndex: 'slno', key: 'slno' },
      { title: 'Data ID', dataIndex: 'data_id', key: 'data_id' },
      { title: 'Rule Name', dataIndex: 'rule_name', key: 'rule_name' },
      {
        title: 'Action',
        dataIndex: '',
        key: 'x',
        render: () => (
          <div>
            <UpOutlined onClick/>
            <DownOutlined />
            <CopyOutlined />
            <DeleteOutlined onClick={this.deleteHandler} />
          </div>
        ),
      },
    ];
    const dataTable = (
      <Table
        columns={columns}
        dataSource={this.state.dataList}
      />
    )
    return (
      <Layout className="layout">
        <Header>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">HPDH</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>

          <div className="site-layout-content">
            <Row>
              <Col span={24}>
                {/* {cardList} */}
                {dataTable}
              </Col>
            </Row>
          </div>

        </Content>
        <Footer style={{ textAlign: 'center' }}>©2020-2021</Footer>
      </Layout>
    )
  }
}

const appDiv = document.getElementById("app");
// render(<App name="pei"/>, appDiv);
render(<App />, appDiv);