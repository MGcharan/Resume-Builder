/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Button, Dropdown } from "antd";
import "./../Resources/DefaultLayout.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { MdPrint } from "react-icons/md";
import { HiMiniUser } from "react-icons/hi2";

const DefaultLayout = (props) => {
  const userToken = localStorage.getItem("token");
  let user;
  try {
    user = userToken ? JSON.parse(userToken) : null;
  } catch (error) {
    console.error("Failed to parse user token:", error);
    user = null;
  }

  const navigate = useNavigate();
  const location = useLocation();

  // Define the menu items
  const items = [
    {
      key: "1",
      label: (
        <Link className="link" to="/home">
          Home
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link className="link" to="/profile">
          Profile
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        <div
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/login");
          }}
        >
          <span>Logout</span>
        </div>
      ),
    },
  ];

  return (
    <div className="layout">
      <div className="header">
        <h1 onClick={() => navigate("/home")} style={{ cursor: "pointer" }}>
          Insta Resume
        </h1>
        {location.pathname.startsWith("/template") && (
          <div className="btn-all d-flex justify-content-end my-3 mx-5">
            <Button
              className="back-btn mb-5"
              onClick={() => navigate("/profile")}
              style={{ marginRight: 0, marginTop: 50, marginLeft: 0 }}
            >
              Profile
            </Button>
            <Button
              onClick={props.handlePrint}
              style={{ marginTop: 50, fontSize: 30, backgroundColor: "red" }}
              icon={<MdPrint />}
            ></Button>
            <Button
              className="back-btn mb-5"
              onClick={() => navigate("/home")}
              style={{ marginRight: -90, marginTop: 50, marginLeft: 10 }}
            >
              Back
            </Button>
          </div>
        )}
        {user ? (
          <Dropdown
            menu={{
              items,
            }}
            placement="bottomLeft"
          >
            <Button
              icon={<HiMiniUser size="18px" style={{ marginRight: 7 }} />}
              className="btn"
            >
              {user.username}
            </Button>
          </Dropdown>
        ) : (
          <Button onClick={() => navigate("/login")}>Login</Button>
        )}
      </div>
      <div className="content" style={{ overflow: "scroll" }}>
        {props.children}
      </div>
    </div>
  );
};

export default DefaultLayout;
