import React, {Component} from "react";
import "antd/dist/antd.css";
import {Button, Form, Layout, Result} from 'antd';
import Header from "./Header";
import SiderComponent from "./SiderComponent";
import StreetCardFooter from "./StreetCardFooter";
import SmileOutlined from "@ant-design/icons/lib/icons/SmileOutlined";

const {Content} = Layout;

class SuccessfulUpdate extends Component {
    constructor(props) {
        super(props);
        this.setPagecomponent = this.setPagecomponent.bind(this);
        this.handleSuccessfulLogoutAction = this.handleSuccessfulLogoutAction.bind(this);
        this.handleButton = this.handleButton.bind(this);
    }

    handleSuccessfulLogoutAction() {
        this.props.handleLogout();
        this.props.history.push('/login');
    }

    setPagecomponent(pageComponentValue) {
        this.props.updatePageComponent(pageComponentValue)
        this.props.history.push('/socialWorkerRegister');
    };

    handleButton(){
        this.props.history.push('/socialWorkerRegister');
    }

    render() {
        return (
            <Layout>
                <Header
                    handleSuccessfulLogoutAction={this.handleSuccessfulLogoutAction}
                    loggedInStatus={this.props.loggedInStatus}/>
                <Layout>
                    <SiderComponent
                        setPagecomponent={this.setPagecomponent}
                    />
                    <Content className="content-login">
                        <div className="site-layout-content-login">
                            <Result
                                status="success"
                                title="Update Successful"
                                subTitle=""
                                extra={[
                                    <Button type="primary" key="console" onClick={this.handleButton}>
                                        Go Back
                                    </Button>,
                                ]}
                            />
                        </div>
                    </Content>
                    <StreetCardFooter/>
                </Layout>
            </Layout>
        )
    }
}


export default SuccessfulUpdate;
