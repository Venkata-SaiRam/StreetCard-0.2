import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import {Button, Cascader, Form, InputNumber, Layout} from "antd";
import Header from './Header'
import './transaction.css'
import StreetCardFooter from './StreetCardFooter'

const {Content} = Layout;
const header = ["Product Id", "Product Name", "Cost Per Item", "Donated", "Initial Cost", "Units Available", "Given Units", "Amount", "Service Provider", "Client ID", "Client Name"];
const category = [
    {
        value: "Shoes",
        label: "Shoes"
    },
    {
        value: "PersonalHygieneItems",
        label: "Personal Hygiene Items"
    },
    {
        value: "MealPass",
        label: "Meal Pass"
    },
    {
        value: "TransportPass",
        label: "Transport Pass"
    },
    {
        value: "Clothing",
        label: "Clothing"
    },
    {
        value: "RainGear",
        label: "Rain Gear"
    },
    {
        value: "PetFood",
        label: "Pet Food"
    },
    {
        value: "Medications",
        label: "Medications"
    },
    {
        value: "Boots",
        label: "Boots"
    },
    {
        value: "Blankets",
        label: "Blankets"
    },
    {
        value: "SleepingBags",
        label: "Sleeping Bags"
    }
];


class Transaction extends React.Component {
    constructor(props) {
        super(props);
        console.log("props client", props);
        this.state = {
            isLoaded: false,
            totalAmount: 0,
            selectedCategory: "",
            personalID: props.homelessPersonId,
            productData: [
                {
                    productId: '',
                    productName: '',
                    donation: '',
                    costwhenbrought:'',
                    costPerItem: '',
                    unitsAvailable: '',
                    serviceProvider: '',
                    quantity: 0,
                    amount: 0,
                    index1: 0
                }
            ]

        }
        this.handleSuccessfulLogoutAction = this.handleSuccessfulLogoutAction.bind(this);
        this.setPagecomponent = this.setPagecomponent.bind(this);
        this.renderTableHeader = this.renderTableHeader.bind(this);
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err) => {
            if (!err) {
                var registerRequestObject = {};
                var prodData = [];
                this.state.productData.forEach((key, index) => {
                    if (key.quantity > 0) {
                        console.log("keys", key);
                        prodData.push({
                            productId: key.productId,
                            serviceProvider: key.serviceProvider,
                            unitPurchased: Number(key.quantity)
                        })
                        registerRequestObject.serviceProvider = key.serviceProvider;
                        registerRequestObject.personalID = this.state.personalID;
                        registerRequestObject.unitPurchased = Number(key.quantity) ;
                        registerRequestObject.totalAmount = this.state.totalAmount;
                        registerRequestObject.clientName = this.props.location.state.clientName;
                    }
                })

                var transactionPostObject = {
                    totalAmount: Number(this.state.totalAmount),
                    transaction_detail: prodData
                };

                fetch(process.env.REACT_APP_IP + 'homeless/' + this.props.homelessPersonId + '/transaction/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    },
                    body: JSON.stringify(transactionPostObject)
                })
                    .then(res => res.json())

                this.state.productData.forEach((key, index) => {
                    if (key.quantity > 0) {
                        var updateProductDetails = {
                            productId: key.productId,
                            costPerItem: key.costPerItem,
                            productName: key.productName,
                            unitsAvailable: key.unitsAvailable - key.quantity,
                            serviceProvider: key.serviceProvider,
                            category: key.category,
                            donation: key.donation,
                            costwhenbrought: key.costwhenbrought
                        };


                        fetch(process.env.REACT_APP_IP + 'product/' + key.productId + '/', {
                            method: 'PUT',
                            headers: {
                                'Content-Type': 'application/json',
                                Authorization: `Bearer ${localStorage.getItem('token')}`
                            },
                            body: JSON.stringify(updateProductDetails)
                        })
                            .then(res => res.json()).then(json => {
                            this.props.history.push('/transactionComplete');
                        });
                    }
                })
                setTimeout(this.waitComponent(registerRequestObject), 1000);
            }
        });
    }

    waitComponent(registerRequestObject) {
        console.log("reg" , registerRequestObject);
        //should only run after get request has successfully
        fetch(process.env.REACT_APP_IP + 'homeless/' + registerRequestObject.personalID + '/logs/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(registerRequestObject)
        })
            .then(res => res.json())
            .then(
                json => {

                });
    }

    takeIntput = (e, index) => {

        let prodData = JSON.parse(JSON.stringify(this.state.productData));
        var beforeTotal = (prodData[index].quantity && prodData[index].costPerItem) ? prodData[index].quantity * prodData[index].costPerItem : 0;
        prodData[index].quantity = e.target.value;
        prodData[index].amount = prodData[index].quantity * prodData[index].costPerItem;
        var afterTotal = this.state.totalAmount - beforeTotal + prodData[index].amount;
        afterTotal = afterTotal.toFixed(2);
        this.setState({productData: prodData});
        this.setState({totalAmount: afterTotal});
    }


    componentDidMount() {
        fetch(process.env.REACT_APP_IP + 'product/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
        })
            .then(res => res.json())
            .then(json => {
                let prod = [];
                json.forEach((key, index) => {
                    key = {
                        ...key, "unitsPurchased": 0,
                        "amount": 0, "index1": index
                    }
                    prod.push(key)

                })
                this.setState({
                        isLoaded: true,
                        productData: prod,
                    }
                )

            })

    }

    handleSuccessfulLogoutAction() {
        this.props.handleLogout();
        this.props.history.push('/login');
    }

    setPagecomponent(pageComponentValue) {
        this.props.updatePageComponent(pageComponentValue);
        this.props.history.push('/socialWorkerRegister');
    }

    renderTableHeader() {
        let res = [];
        for (let i = 0; i < header.length; i++) {
            res.push(<th key={header[i]}>{header[i]}</th>)
        }
        return res;
    }

    renderTableData() {


        this.state.productData.filter(item => item.category === this.state.selectedCategory).map((item, index) => {

        })
        var newData = this.state.productData.filter((item) => {
            if (!this.state.selectedCategory) {
                return true;
            } else if (this.state.selectedCategory && item.category === this.state.selectedCategory) {
                return true;
            }
            return false;
        })
        return newData.map((product, index) => {
            console.log("product ", product);
            const {productId, productName, donation, costwhenbrought, costPerItem, unitsAvailable, amount, index1, serviceProvider} = product//destructuring
            return (
                <tr key={productId}>
                    <td align={"center"}>{productId}</td>
                    <td align={"center"}>{productName}</td>
                    <td align={"center"}>{costPerItem}</td>
                    <td align={"center"}>{donation}</td>
                    <td align={"center"}>{costwhenbrought}</td>
                    <td align={"center"}>{unitsAvailable}</td>
                    <td><InputNumber min={0} max={unitsAvailable} defaultValue={0}
                                     onBlur={(e) => this.takeIntput(e, index1)}/></td>
                    <td>{amount}</td>
                    <td>{serviceProvider}</td>
                    <td>{this.state.personalID}</td>
                    <td>{this.props.location.state.clientName}</td>
                </tr>
            )
        })
    }


    render() {
        const formItemLayout = {
            labelCol: {
                xs: {span: 24},
                sm: {span: 8},
            },
            wrapperCol: {
                xs: {span: 24},
                sm: {span: 16},
            },
        };
        return (
            <Layout className="layout">
                <Header
                    handleSuccessfulLogoutAction={this.handleSuccessfulLogoutAction}
                    loggedInStatus={this.props.loggedInStatus}/>
                <Layout>
                    <Content className="content-enroll">
                        <div className="transaction-layout-content">
                            <Cascader style={{width: "100%", border: "2px solid lightgrey"}} options={category}
                                      placeholder="Product Category"
                                      onChange={(e) => {
                                          this.setState({selectedCategory: e[0]})
                                      }}/>
                            <br/>
                            <br/>
                            <table id='inventory'>
                                <thead>
                                <tr>{this.renderTableHeader()}</tr>
                                </thead>
                                <tbody>
                                <tr>{this.renderTableHeader}</tr>
                                {this.renderTableData()}
                                </tbody>
                            </table>
                            <Form {...formItemLayout}>
                                <table style={{border: "2px solid lightgrey", width: "100%", textAlign: "right"}}>
                                    <tr>
                                        <td><b>Total Amount: ${this.state.totalAmount}</b></td>
                                        <td>
                                            <Button type="primary" htmlType="submit" size="medium"
                                                    className="registration-submit-button"
                                                    onClick={this.handleSubmit}>Submit</Button>
                                        </td>
                                    </tr>
                                </table>
                            </Form>
                        </div>
                    </Content>
                </Layout>
                <StreetCardFooter/>
            </Layout>
        );
    }
}

const WrappedTransaction = Form.create({name: 'time_related_controls'})(Transaction);


export default WrappedTransaction;
