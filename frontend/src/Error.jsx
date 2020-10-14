import React, {Component} from "react";
import "antd/dist/antd.css";
import {Button, Layout, Result} from 'antd';
import Header from "./Header";
import StreetCardFooter from "./StreetCardFooter";

const {Content} = Layout;

class Error extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginPageStatus: "LOGIN_HEADER"
        };
        this.handleSuccessfulLogoutAction = this.handleSuccessfulLogoutAction.bind(this);
        this.handleButton = this.handleButton.bind(this);
    }

    handleSuccessfulLogoutAction() {
        this.props.history.push('/login');
    }

    handleButton() {
        var {location} = this.props;
        location.state.errorCode == 403 ? this.props.history.push('/login') : this.props.history.goBack();
    }

    render() {
        var {location} = this.props;
        var sub_title = "";
        if(location.state.errorCode == 500) {
            sub_title = "This is an Internal Server Error. Please Contact Administrator."
        } else if(location.state.errorCode == 404) {
            sub_title = "Page Not Found."
        } else if(location.state.errorCode == 403) {
            sub_title = "You are not Authorized to access this page. Please Login Again"
        }
        var button_text = location.state.errorCode == 403 ? "Login" : "Go Back";
        return (
            <Layout>
                <Header loginPageStatus={this.state.loginPageStatus}/>
                <Content className="content-login">
                    <div className="site-layout-content-login">
                        <Result
                            status="error"
                            title="Oops! Something went wrong. Please try again"
                            subTitle={sub_title}
                            extra={[
                                <Button type="primary" key="console" onClick={this.handleButton}>
                                   {button_text}
                                </Button>,
                            ]}
                        />
                    </div>
                </Content>
                <StreetCardFooter/>
            </Layout>
        )
    }
}

export default Error;
