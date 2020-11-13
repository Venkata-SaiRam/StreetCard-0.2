import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import {Button, Cascader, Form, Input, InputNumber, Layout, Col, Row} from "antd";
import './LabelWrap.css';


const {Content} = Layout;

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

const serviceProvider = [
    {
        value: "FP",
        label: "Food Pantry"
    },
    {
        value: "DIC",
        label: "Drop in Centre"
    },
    {
        value: "SH",
        label: "Shelter Home"
    },
    {
        value: "SK",
        label: "Soup Kitchen"
    }
];

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

const donationResponse = [
    {
        value:0,
        label:"No"
    },
    {
        value:1,
        label:"Yes"
    },

]

class AddProduct extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
            ifNoDonation: true
        }

    }

    handledonationResponse(fieldName, values) {
        console.log(fieldName, this)
        if (values[0] === 0) {
          this.setState({ ifNoDonation: false });
        } else {
          this.setState({ ifNoDonation: true });
          this.props.form.resetFields(fieldName);

        }
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                var newProduct = {};
                newProduct.productName = values.productName;
                newProduct.category = values.category[0];
                newProduct.donation = values.donationValue[0];
                newProduct.costwhenbrought = values.itemCost ?? 0;
                newProduct.unitsAvailable = values.unitsAvailable;
                newProduct.costPerItem = values.costPerItem;
                newProduct.serviceProvider = values.serviceProvider[0];

                fetch(process.env.REACT_APP_IP + 'product/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    },
                    body: JSON.stringify(newProduct)
                })
                    .then(res => res.json()).then(json => {
                    this.props.history.push('/productAdditionComplete');
                });
            }

        });
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
        <div>
            <Content >
                <div className="site-layout-content-homeless">
                    <Form {...layout} onSubmit={this.handleSubmit} >
                  
                        <Form.Item labelAlign={"left"} label="Product Name:">
                            {getFieldDecorator("productName", {
                                rules: [
                                    {
                                        message: "Please input the product name!",
                                        required: true,
                                    }
                                ]
                            })(<Input placeholder="Product Name"/>)}
                        </Form.Item>
                        
                        <Form.Item labelAlign={"left"}	label="Product Category">
                            {getFieldDecorator("category", {
                                rules: [
                                    {
                                        required: true,
                                        message: "Please select the category of the product!"
                                    }
                                ]
                            })(<Cascader options={category} placeholder="Category"/>)}
                        </Form.Item>
                       
                        <Form.Item labelAlign={"left"} label="Donation" >
                            {getFieldDecorator("donationValue", {
                                rules: [
                                    {
                                        required: true,
                                        message: "Please select a valid field value!"
                                    }
                                ]
                            })(<Cascader 
                                    options={donationResponse} 
                                    placeholder="Select the donation value"
                                    onChange={this.handledonationResponse.bind(this, "primaryWay")}
                               />)}
                        </Form.Item>

                        <Form.Item labelAlign={"left"} label="Item cost" >
                            {getFieldDecorator("itemCost", {
                                rules: [
                                    {
                                        required: false,
                                        message: "Please enter a cost value!"
                                    }
                                ]
                            })(<InputNumber style={{width: '100%'}} min={1} placeholder="Enter a cost amount" 
                            disabled={this.state.ifNoDonation}/> )}
                        </Form.Item>

                        <Form.Item labelAlign={"left"} label="No of units" >
                            {getFieldDecorator("unitsAvailable", {
                                rules: [
                                    {
                                        required: true,
                                        message: "Please input number of units!"
                                    }
                                ]
                            })(<InputNumber style={{width: '100%'}}   min={1} placeholder="Number of units"/>)}
                        </Form.Item>

                        <Form.Item labelAlign={"left"} label = "Price per unit" >
                            {getFieldDecorator("costPerItem", {
                                rules: [
                                    {
                                        required: true,
                                        message: "Please input the price per unit!"
                                    }
                                ]
                            })(<InputNumber style={{width: '100%'}}  min={0.00} step={0.01} placeholder="Cost Per Item"/>)}
                        </Form.Item>
                        <Form.Item labelAlign={"left"} label="Service Provider">
                            {getFieldDecorator("serviceProvider", {
                                rules: [
                                    {
                                        required: true,
                                        message: "Please select the your service provider!"
                                    }
                                ]
                            })(<Cascader options={serviceProvider} placeholder="Service Provider"/>)}
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" Text-align="center" htmlType="submit" className="login-form-button">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </Content>
        </div>
        );


    }
}


const WrappedAddProduct = Form.create({name: "addProduct"})(
    AddProduct
);

export default WrappedAddProduct;
