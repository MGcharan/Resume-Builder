// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Button, Form, Input, message, Spin } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../Resources/authentication.css";

function Register() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleFinish = async (values) => {
    setLoading(true);
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/user/register`,
        values
      );
      setLoading(false);
      if (res.status === 201) {
        message.success("Registration successful");
        localStorage.setItem("token", JSON.stringify(res.data));
        navigate("/home");
      } else {
        message.error("Registration failed");
      }
    } catch (error) {
      message.error(
        `Registration failed: ${error.response?.data?.error || error.message}`
      );
      setLoading(false);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/home");
    }
  });

  return (
    <div className="auth-parent">
      {loading && <Spin size="large" />}
      <Form layout="vertical" onFinish={handleFinish}>
        <h1>REGISTER</h1>
        <hr />
        <Form.Item
          name="username"
          label="Username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input placeholder="Enter username" />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            { required: true, message: "Please input your password!" },
            {
              pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
              message:
                "Password must be at least 6 characters long and include both letters and numbers",
            },
          ]}
        >
          <Input.Password placeholder="Enter password" />
        </Form.Item>

        <Form.Item
          name="confirmPassword"
          label="Confirm Password"
          dependencies={["password"]}
          hasFeedback
          rules={[
            { required: true, message: "Please confirm your password!" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The two passwords do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password type="password" placeholder="Confirm password" />
        </Form.Item>

        <p className="para">
          Already have an account ?{" "}
          <Link to="/login" className="lin">
            Login
          </Link>
        </p>

        <Button
          className="d-flex align-items-center justify-content-center"
          type="primary"
          htmlType="submit"
        >
          Register
        </Button>
      </Form>
    </div>
  );
}

export default Register;
