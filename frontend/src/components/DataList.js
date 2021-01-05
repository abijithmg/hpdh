import React, { Component } from "react";


const CardList(props) {
    const cardlist = props.dataList;
    console.log(props);
    const cardlist = cardlist.map((data) => {
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
}