import React from "react";
import { Card, Dropdown, Menu, Button } from "antd";
import { MoreOutlined } from "@ant-design/icons";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

// Sample data
const data = [
  { time: "01:00", newPatients: 38, oldPatients: 28 },
  { time: "02:00", newPatients: 32, oldPatients: 44 },
  { time: "03:00", newPatients: 50, oldPatients: 34 },
  { time: "04:00", newPatients: 42, oldPatients: 36 },
  { time: "05:00", newPatients: 85, oldPatients: 52 },
  { time: "06:00", newPatients: 77, oldPatients: 41 },
];

// Dropdown menu items
const menu = (
  <Menu>
    <Menu.Item key="1">Add</Menu.Item>
    <Menu.Item key="2">Delete</Menu.Item>
    <Menu.Item key="3">Refresh</Menu.Item>
  </Menu>
);

const PatientsSurveyChart = () => {
  return (
    <Card
      title="Patients Survey"
      extra={
        <Dropdown overlay={menu} placement="bottomRight">
          <Button type="text" icon={<MoreOutlined />} />
        </Dropdown>
      }
    >
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorNew" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorOld" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="time" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="newPatients"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorNew)"
            name="New Patients"
          />
          <Area
            type="monotone"
            dataKey="oldPatients"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorOld)"
            name="Old Patients"
          />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default PatientsSurveyChart;
