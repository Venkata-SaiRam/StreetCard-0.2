import React, { Component } from "react";
import { Cascader, Col, Collapse, DatePicker, Form, Input, Row } from "antd";
import "./LabelWrap.css";

const { Panel } = Collapse;
const YesNoResponse = [
  {
    value: 0,
    label: "No"
  },
  {
    value: 1,
    label: "Yes"
  }
];

const TypeOfEventResponse = [
  {
    value: 1,
    label: "Referral to Prevention Assistance project"
  },
  {
    value: 2,
    label: "Problem Solving/Diversion/Rapid Resolution intervention or service"
  },
  {
    value: 3,
    label: "Referral to scheduled Coordinated Entry Crisis Needs Assessment"
  },
  {
    value: 4,
    label: "Referral to scheduled Coordinated Entry Housing Needs Assessment"
  },
  {
    value: 5,
    label: "Referral to post-placement/follow-up case management"
  },
  {
    value: 6,
    label: "Referral to Street Outreach project or services"
  },
  {
    value: 7,
    label: "Referral to Housing Navigation project or services"
  },
  {
    value: 8,
    label:
      "Referral to Non-continuum services: Ineligible for continuum services"
  },
  {
    value: 9,
    label:
      "Referral to Non continuum services: No availability in continuum services"
  },
  {
    value: 10,
    label: "Referral to Emergency Shelter bed opening"
  },
  {
    value: 11,
    label: "Referral to Transitional Housing bed/unit opening"
  },
  {
    value: 12,
    label: "Referral to Joint TH-RRH project/unit/resource opening"
  },
  {
    value: 13,
    label: "Referral to RRH project resource opening"
  },
  {
    value: 14,
    label: "Referral to PSH project resource opening"
  },
  {
    value: 15,
    label: "Referral to Other PH project/unit/resource opening"
  }
];

const EventResultType = [
  {
    value: 1,
    label: "Successful referral: client accepted"
  },
  {
    value: 2,
    label: "Unsuccessful referral: client rejected"
  },
  {
    value: 3,
    label: "Unsuccessful referral: provider rejected"
  }
];
