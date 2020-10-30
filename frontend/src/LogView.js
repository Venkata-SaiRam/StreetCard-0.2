import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import {Form, Layout, Spin, Table} from 'antd';
import Header from './Header.js'
import StreetCardFooter from './StreetCardFooter'
import SiderComponent from './SiderComponent';
import SiderComponentServiceProvider from './SiderComponentServiceProvider';


/**
 * Creating a table for rendering the timestamp logo.
 * Table should display info based on what is known about the user
 */

const {Content} = Layout;

class LogView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            columns: [
                {
                    title: 'DateTime',
                    dataIndex: 'datetime',
                },
                {
                    title: 'Personal ID',
                    dataIndex: 'personalId',
                },

                {
                    title: 'Client Name',
                    dataIndex: 'clientName',
                },

                {
                    title: 'Service Provider',
                    dataIndex: 'serviceProvider',
                },
                {
                    title: 'Total Amount',
                    dataIndex: 'totalAmount',
                },
                {
                    title: 'Units Purchased',
                    dataIndex: 'unitPurchased',
                },

            ],
            dataSource: [
                {
                    id: '',
                    datetime: '',
                    clientName: '',
                    serviceProvider: '',
                    personalId: '',
                    totalAmount: '',
                    unitPurchased: '',

                }
            ]

        }

        this.handleSuccessfulLogoutAction = this.handleSuccessfulLogoutAction.bind(this);
        this.setPagecomponent = this.setPagecomponent.bind(this);
    }

    componentDidMount() {
        fetch(process.env.REACT_APP_IP + 'homeless/' + this.props.handleHomelessPersonId.toString() + '/logs/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
        }).then(res => {
            if (res.status == 200) {
                res.json().then(json => {
                    this.setState({
                            isLoaded: true,
                            dataSource: json,
                        }
                    )
                })
            } else if (Math.round(res.status / 100) == 4) {
                if (window.confirm("Error, No record found for this personal ID" )) {
                    this.props.history.push('/socialWorkerRegister');
                } else {
                    this.props.history.push('/socialWorkerRegister');
                }
            } else if (Math.round(res.status / 100) == 5) {
                if (window.confirm("Server Error: " + (res.status).toString())) {
                    this.props.history.push('/socialWorkerRegister');
                } else {
                    this.props.history.push('/socialWorkerRegister');
                }
            }

        })
    }

    handleSuccessfulLogoutAction() {
        this.props.handleLogout();
        this.props.history.push('/login');
    }


    setPagecomponent(pageComponentValue) {
        this.props.updatePageComponent(pageComponentValue)
        this.props.history.push('/socialWorkerRegister');
    };

    render() {
        //const {spID=''} = this.props.location.state.serviceProviderId || {};
        // var spID = "";
        // console.log("und ", this.props.serviceProviderId);
        // if(!this.props.location.state.serviceProviderId){
        //     spID = "";
        // }else{
        //     spID = "1";
        // }
        const formItemLayout = {
            labelCol: {
                xs: {span: 24},
                sm: {span: 8}
            },
            wrapperCol: {
                xs: {span: 24},
                sm: {span: 16}
            }
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0
                },
                sm: {
                    span: 16,
                    offset: 4
                }

            }

        };

        if (this.state.isLoaded) {
            return (
                <Layout className="layout">
                    <Header
                        handleSuccessfulLogoutAction={this.handleSuccessfulLogoutAction}
                        loggedInStatus={this.props.loggedInStatus}
                    />

                    <Layout>

                        {this.props.location.state.serviceProviderId === "2" ? (
                             <SiderComponent
                            setPagecomponent={this.setPagecomponent}
                        />
                            ) : (
                              <SiderComponentServiceProvider
                            setPagecomponent={this.setPagecomponent}
                        />
                            )}
                        <Content className="content-enroll">
                            <div>
                                <Table className="site-layout-content-viewappointment"
                                       dataSource={this.state.dataSource}
                                       columns={this.state.columns} scroll={{x: 1500, y: 500}}/>
                            </div>
                        </Content>
                    </Layout>
                    <StreetCardFooter/>
                </Layout>
            );
        } else {
            return (
                <Layout className="layout">
                    <Header
                        handleSuccessfulLogoutAction={this.handleSuccessfulLogoutAction}
                        loggedInStatus={this.props.loggedInStatus}
                    />

                    <Layout>
                        {this.props.location.state.serviceProviderId === "2" ? (
                             <SiderComponent
                            setPagecomponent={this.setPagecomponent}
                        />
                            ) : (
                              <SiderComponentServiceProvider
                            setPagecomponent={this.setPagecomponent}
                        />
                            )}

                        <Content className="content-login">
                            <div className="site-layout-content-login">
                                <span>Loading . . .<Spin size="small"/></span>
                            </div>
                        </Content>
                    </Layout>
                    <StreetCardFooter/>
                </Layout>
            );
        }


    }
}

const WrappedLogTable = Form.create({name: "log"})(
    LogView
);

export default WrappedLogTable;