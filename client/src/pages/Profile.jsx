// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import DefaultLayout from "../components/DefaultLayout";
import { Button, Tabs, Form, message } from "antd";
import PersonalInfo from "../components/PersonalInfo";
import SkillsEducation from "../components/SkillsEducation";
import Experience from "../components/Experience";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// JWT decode function
function decodeJWT(token) {
  try {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join("")
    );
    return JSON.parse(jsonPayload);
  } catch (error) {
    console.error("Failed to decode JWT token:", error);
    return null;
  }
}

function Profile() {
  const [form] = Form.useForm();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const decodedUser = token ? decodeJWT(token) : null;
    if (decodedUser) {
      setUser(decodedUser);
      form.setFieldsValue(decodedUser);
    }
  }, [form]);

  const onFinish = async (values) => {
    try {
      const result = await axios.post("http://localhost:4000/api/user/update", {
        ...values,
        _id: user._id,
      });
      localStorage.setItem("token", JSON.stringify(result.data));
      message.success("Profile updated successfully");
      navigate("/home"); // Navigate to home after successful update
    } catch (error) {
      message.error(
        `Update failed: ${error.response?.data?.error || error.message}`
      );
    }
  };

  const items = [
    {
      key: "1",
      label: "Personal Info",
      children: <PersonalInfo form={form} />,
    },
    {
      key: "2",
      label: "Skills and Education",
      children: <SkillsEducation />,
    },
    {
      key: "3",
      label: "Experience / Projects",
      children: <Experience />,
    },
  ];

  return (
    <DefaultLayout>
      <div className="update-profile">
        <h4 className="mt-3">
          <b>Update Profile</b>
        </h4>
        <hr />
        <Form layout="vertical" form={form} onFinish={onFinish}>
          <Tabs
            defaultActiveKey="1"
            items={items}
            onChange={(key) => console.log(key)}
          />
          <Form.Item>
            <Button htmlType="submit" className="upt mt-2 mx-3">
              Update
            </Button>
          </Form.Item>
        </Form>
      </div>
    </DefaultLayout>
  );
}

export default Profile;
