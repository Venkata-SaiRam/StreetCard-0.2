import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Form, Layout, Spin, Table, Button } from 'antd';
import { VerticalAlignBottomOutlined } from '@ant-design/icons';
import Header from './Header.js'
import StreetCardFooter from './StreetCardFooter'
import SiderComponent from './SiderComponent';
import SiderComponentServiceProvider from './SiderComponentServiceProvider';
import ExportJsonExcel from 'js-export-excel';


/**
 * Creating a table for rendering the timestamp logo.
 * Table should display info based on what is known about the user
 */

const { Content } = Layout;

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
                    title: 'Units Purchased',
                    dataIndex: 'unitPurchased',
                },
                {
                    title: 'Total Amount',
                    dataIndex: 'totalAmount',
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
                    json.map((jsonElement) => {
                        jsonElement.totalAmount = "$" +  jsonElement.totalAmount;
                    })
                console.log(json);
                    this.setState({
                        isLoaded: true,
                        dataSource: json,
                    }
                    )
                })
            } else if (Math.round(res.status / 100) == 4) {
                if (window.confirm("Error, No record found for this personal ID")) {
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

    downloadExcel = () => {
        const data = this.state.dataSource ?? '';//tabular data
        var option = {};
        let dataTable = [];
        if (data) {
            for (let i in data) {
                if (data) {
                    let obj = {
                        'Date Time': data[i].datetime,
                        'Personal ID': data[i].personalId,
                        'Client Name': data[i].clientName,
                        'Service Provider': data[i].serviceProvider,
                        'Total Amount': data[i].totalAmount,
                        'Units Purchased': data[i].unitPurchased,
                    }
                    dataTable.push(obj);
                }
            }
        }
        option.fileName = 'Log Information'
        option.datas = [
            {
                sheetData: dataTable,
                sheetName: 'Log Table',
                sheetFilter: ['Date Time', 'Personal ID', 'Client Name', 'Service Provider', 'Units Purchased', 'Total Amount'],
                sheetHeader: ['Date Time', 'Personal ID', 'Client Name', 'Service Provider', 'Units Purchased', 'Total Amount'],
                columnWidths: [12, 15, 10, 8, 8, 8],
            }
        ];

        var toExcel = new ExportJsonExcel(option);
        toExcel.saveExcel();
    }

    render() {
        //const {spID=''} = this.props.location.state.serviceProviderId || {};
        // var spID = "";
        // console.log("und ", this.props.serviceProviderId);
        // if(!this.props.location.state.serviceProviderId){
        //     spID = "";
        // }else{
        //     spID = "1";
        // }

        console.log(this.state.dataSource);
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 }
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 }
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
                <div>
                    <Layout className="layout">
                        <Header
                            handleSuccessfulLogoutAction={this.handleSuccessfulLogoutAction}
                            loggedInStatus={this.props.loggedInStatus}
                        />

                        <Layout>

                            <Content className="content-enroll">
                                <div>
                                    <Table className="site-layout-content-viewappointment"
                                        dataSource={this.state.dataSource}
                                        columns={this.state.columns} scroll={{ x: 1500, y: 500 }} />
                                </div>
                                <div style={{float: 'left', marginTop: '20px'}}>
                                    <Button onClick={this.props.history.goBack} size='large'>
                                       Go Back
                                    </Button>
                                </div>
                                <div style={{float: 'right', marginTop: '20px'}}>
                                    <Button onClick={this.downloadExcel} size='large'>
                                        Download as Excel Sheet
                                    </Button>
                                </div>
                            </Content>
                        </Layout>
                        <StreetCardFooter />
                    </Layout>
                </div>
            );
        } else {
            return (
                <div>
                    <Layout className="layout">
                        <Header
                            handleSuccessfulLogoutAction={this.handleSuccessfulLogoutAction}
                            loggedInStatus={this.props.loggedInStatus}
                        />

                        <Layout>
                            

                            <Content className="content-login">
                                <div className="site-layout-content-login">
                                    <span>Loading . . .<Spin size="small" /></span>
                                </div>
                            </Content>
                        </Layout>
                        <StreetCardFooter />
                    </Layout>
                </div>
            );
        }


    }
}

const WrappedLogTable = Form.create({ name: "log" })(
    LogView
);

export default WrappedLogTable;