import React from "react";
import {
  BellOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  DollarCircleOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import "./DashBoard.css";
import ChartDashBoard from "./ChartDashBoard";

export default function DashBoard() {
  return (
    <section id="dashboard">
      <div className="dashboard">
        <div className="dashboard-top">
          <div className="dashboard-top-content">
            <li className="dashboard-top-content-avatar">
           
              <img src="http://localhost:3000/images/avt.png"></img>
              <span>24hWatch</span>
            </li>
            <li className="dashboard-top-content-bell">
              <BellOutlined></BellOutlined>
            </li>
          </div>
        </div>

        <div className="dashboard-middle">
          <div className="dashboard-middle-statistic">
            <div className="dashboard-middle-statistic-content">
              <li>
                <div className="dashboard-middle-statistic-icon">
                  <ShoppingOutlined></ShoppingOutlined>
                </div>
                <div className="dashboard-middle-statistic-title">
                  <span className="total">1666</span>
                  <span className="title">
                  Tổng doanh thu</span>
                </div>
              </li>
            </div>
            <div className="dashboard-middle-statistic-content">
              <li>
                <div className="dashboard-middle-statistic-icon">
                  <ShoppingCartOutlined></ShoppingCartOutlined>
                </div>
                <div className="dashboard-middle-statistic-title">
                  <span className="total">25</span>
                  <span className="title">
                  Lượt truy cập hàng ngày</span>
                </div>
              </li>
            </div>
            <div className="dashboard-middle-statistic-content">
              <li>
                <div className="dashboard-middle-statistic-icon">
                  <DollarCircleOutlined></DollarCircleOutlined>
                </div>
                <div className="dashboard-middle-statistic-title">
                  <span className="total">2000</span>
                  <span className="title">Tổng thu nhập</span>
                </div>
              </li>
            </div>
            <div className="dashboard-middle-statistic-content">
              <li>
                <div className="dashboard-middle-statistic-icon">
                  <FileTextOutlined></FileTextOutlined>
                </div>
                <div className="dashboard-middle-statistic-title">
                  <span className="total">1208</span>
                  <span className="title">Tổng số đơn đặt hàng</span>
                </div>
              </li>
            </div>
          </div>
          <ChartDashBoard></ChartDashBoard>
        </div>

        <div className="dashboard-new">
          <div className="dashboard"></div>
          <div className="dashboard"></div>
        </div>
      </div>
    </section>
  );
}
