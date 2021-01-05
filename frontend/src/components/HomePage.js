import React, { Component } from "react";
import { render } from "react-dom";
// import HomePage from "./HomePage";
// import React, { Component, useState, useEffect } from "react";
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;
import 'antd/dist/antd.css';

import axios from 'axios';
const axiosInstance = axios.create({ baseURL: window.location.href });

import { Skeleton, Switch, Card, Avatar } from 'antd';
import { UpOutlined, DeleteOutlined, DownOutlined, CopyOutlined } from '@ant-design/icons';

const { Meta } = Card;



export default class HomePage extends Component {
    state = {
        dataList: []
    }
    constructor(props) {
        super(props);
        
    }

    render() {
        const {dataList} = this.state.dataList;
        // debugger;
        const cardList = dataList.map(data => {
            return (
                <Card
                    style={{ width: 300, marginTop: 16 }}
                    actions={[
                        <UpOutlined />,
                        <DownOutlined />,
                        <CopyOutlined />,
                        <DeleteOutlined />
                    ]}
                >
                    <Skeleton loading={false} avatar active>
                        <Meta
                            title={data.data_id}
                            description={data.rule_name}
                        />
                    </Skeleton>
                </Card>
            )}
        )
        return (

        )
    }
}