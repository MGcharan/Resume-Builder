// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Button, Form, Input, message, Spin } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../Resources/authentication.css";






function Login() {
  const [loading,setLoading]=useState(false)
  const navigate=useNavigate()
  
  const handleFinish = async (values) => {
    setLoading(true)
    try {
      const user = await axios.post("http://localhost:4000/api/user/login", values);
        setLoading(false)
        message.success("Login successful");
          localStorage.setItem("token",JSON.stringify(user.data))
          navigate("/home");
      
    } catch (error) {
      
      message.error(`Login failed: ${error.response?.data?.error || error.message}`);
      setLoading(false)
    }
  };

  useEffect(()=>{
    if(localStorage.getItem("token")){
      navigate('/home')
    }

  });






  
  return (
    <div className="auth-parent">
       {loading &&(<Spin size='large'/>)}
      <Form layout="vertical" onFinish={handleFinish}>
        <h1>LOGIN</h1>
        <hr />
        <Form.Item
          name="username"
          label="Username" style={{color:"white"}}
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input placeholder="Enter username" />
        </Form.Item>

        <Form.Item className="pass"
          name="password"
          label="Password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password placeholder="Enter password" />
        </Form.Item>

        <p className="para">Dont have an account ? <Link to="/register" className="lin">Register</Link></p>

        <Button
          className="d-flex align-items-center justify-content-center"
          type="primary"
          htmlType="submit"
        >
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Login;
