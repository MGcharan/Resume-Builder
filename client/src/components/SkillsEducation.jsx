// eslint-disable-next-line no-unused-vars
import React from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";

function Skillseducation() {
  return (
    <div>
      <h5><b>Education</b></h5>
      <hr />
      <Form.List name="education">
        {(fields, { add, remove }) => (
          <>
            <div className="row">
              {fields.map(({ name, ...restField }) => (
                <>
                  <div className="col-md-3">
                    <Form.Item
                      {...restField}
                      name={[name, "Qualification"]}
                      rules={[
                        {
                          required: true,
                          message: "Missing Qualification",
                        },
                      ]}
                    >
                      <Input placeholder="Qualification" />
                    </Form.Item>
                  </div>

                  <div className="col-md-2">
                    <Form.Item htmlFor="percentage"
                      {...restField}
                      name={[name, "Percentage"]}
                      rules={[
                        {
                          required: true,
                          message: "Missing Percentage",
                        },
                      ]}
                    >
                      <Input placeholder="Percentage" />
                    </Form.Item>
                  </div>

                  <div className="col-md-3">
                    <Form.Item
                      {...restField}
                      name={[name, "Institution"]}
                      rules={[
                        {
                          required: true,
                          message: "Institution name",
                          
                        },
                      ]}
                    >
                      <Input placeholder="Institution" />
                    </Form.Item>
                  </div>

                  <div className="col-md-2">
                    <Form.Item
                      {...restField}
                      name={[name, "range"]}
                      rules={[
                        {
                          required: true,
                          message: "Year range",
                        },
                      ]}
                    >
                      <Input placeholder="Year Range" />
                    </Form.Item>
                  </div>


                    <div className="col-md-2">
                    <MinusCircleOutlined className="py-1" style={{fontSize:23, color:"tomato"}}  onClick={() => remove(name)} />

                    </div>

                 
                </>
              ))}
              <Form.Item>
                <Button
                  className="ms-1 "
                  type="dashed"
                  onClick={() => add()}
                  block
                  icon={<PlusOutlined />}
                >
                  Add Education
                </Button>
              </Form.Item>
            </div>
          </>
        )}
      </Form.List>

      <h5><b>Skills</b></h5>
      <hr />
      <Form.List name="skills">
        {(fields, { add, remove }) => (
          <>
            <div className="row">
              {fields.map(({ name, ...restField }) => (
                <>
                  <div className="col-md-3">
                    <Form.Item
                      {...restField}
                      name={[name, "skills"]}
                      rules={[
                        {
                          required: true,
                          message: "Missing skills",
                        },
                      ]}
                    >
                      <Input placeholder="Skills" />
                    </Form.Item>
                  </div>
{/* 
                  <div className="col-md-4">
                    <Form.Item
                      {...restField}
                      name={[name, "rating"]}
                      rules={[
                        {
                          required: true,
                          message: "",
                        },
                      ]}
                    >
                      <Input placeholder="Rating your skills" />
                    </Form.Item>
                  </div> */}


                    <div className="col-md-2">
                    <MinusCircleOutlined className="py-1" style={{fontSize:23, color:"tomato"}}  onClick={() => remove(name)} />

                    </div>

                 
                </>
              ))}
              <Form.Item>
                <Button
                  className="ms-1 "
                  type="dashed"
                  onClick={() => add()}
                  block
                  icon={<PlusOutlined />}
                >
                  Add Skills
                </Button>
              </Form.Item>
            </div>
          </>
        )}
      </Form.List>

    </div>
  );
}

export default Skillseducation;
