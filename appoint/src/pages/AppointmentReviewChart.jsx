import React from "react";
import { Card, Dropdown, Button } from "antd";
import { MoreOutlined } from "@ant-design/icons";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const faceToFaceData = [
  { name: "Face To Face", value: 80 },
  { name: "Remaining", value: 169 },
];
const eConsultData = [
  { name: "E-Consult", value: 70 },
  { name: "Remaining", value: 179 },
];
const availableData = [
  { name: "Available", value: 99 },
  { name: "Remaining", value: 150 },
];

const COLORS = {
  faceToFace: ["#FFA726", "#f0f0f0"],
  eConsult: ["#3F51B5", "#f0f0f0"],  
  available: ["#00BCD4", "#f0f0f0"], 
};

const total = 249;

const items = [
  { key: "add", label: "Add" },
  { key: "delete", label: "Delete" },
  { key: "refresh", label: "Refresh" },
];

const menuProps = {
  items,
  onClick: ({ key }) => {
    console.log(`${key} clicked`);
  },
};

const AppointmentReviewChart = () => {
  return (
    <Card
    className="w-[24vw]"
      title="Appointment Review"
      extra={
        <Dropdown menu={menuProps} placement="bottomRight">
          <Button type="text" icon={<MoreOutlined />} />
        </Dropdown>
      }
    >
      <div style={{ position: "relative", width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={faceToFaceData}
              dataKey="value"
              innerRadius={80}
              outerRadius={90}
              startAngle={90}
              endAngle={-270}
            >
              {faceToFaceData.map((entry, index) => (
                <Cell key={`ftf-${index}`} fill={COLORS.faceToFace[index]} />
              ))}
            </Pie>

            <Pie
              data={eConsultData}
              dataKey="value"
              innerRadius={95}
              outerRadius={105}
              startAngle={90}
              endAngle={-270}
            >
              {eConsultData.map((entry, index) => (
                <Cell key={`ec-${index}`} fill={COLORS.eConsult[index]} />
              ))}
            </Pie>

            {/* Available */}
            <Pie
              data={availableData}
              dataKey="value"
              innerRadius={110}
              outerRadius={120}
              startAngle={90}
              endAngle={-270}
            >
              {availableData.map((entry, index) => (
                <Cell key={`av-${index}`} fill={COLORS.available[index]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: 18, fontWeight: "bold" }}>Total</div>
          <div style={{ fontSize: 22 }}>{total}</div>
        </div>

        <div className="flex-row content-center text-center items-center pb-[6px]">
          <span style={{ color: COLORS.faceToFace[0], marginRight: 10 }}>● Face To Face</span>
          <span style={{ color: COLORS.eConsult[0], marginRight: 10 }}>● E-Consult</span>
          <span style={{ color: COLORS.available[0] }}>● Available</span>
        </div>
      </div>
    </Card>
  );
};

export default AppointmentReviewChart;
