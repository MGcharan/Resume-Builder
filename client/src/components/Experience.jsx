// eslint-disable-next-line no-unused-vars
import React from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
const {TextArea}=Input

function Experience() {
 
  return (
    <div>
        <h5><b>Experience</b></h5>
        <hr />
      <Form.List name="experience">
        {(fields, { add, remove }) => (
          <>
            <div className="row">
              {fields.map(({ name, ...restField }) => (
                <>
                  <div className="col-md-3">
                   
                    <Form.Item
                      {...restField}
                      name={[name, "Company"]}
                       label='Company'
                      rules={[
                        {
                          required: true,
                          message: "fill the company name",
                        },
                      ]}
                    >
                      <Input placeholder="Company Name" />
                    </Form.Item>
                  </div>

                  <div className="col-md-2">
                  
                    <Form.Item
                      {...restField}
                      name={[name, "year"]}
                       label='Years'
                      rules={[
                        {
                          required: true,
                          message: "Missing the Years",
                        },
                      ]}
                    >
                      <Input placeholder="No of Years" />
                    </Form.Item>
                  </div>

                  <div className="col-md-3">
                 
                    <Form.Item
                      {...restField}
                      name={[name, "Place"]}
                       label='Country'
                      rules={[
                        {
                          required: true,
                          message: "Missing your Experience place",
                        },
                      ]}
                    >
                      <Input placeholder="Country" />
                    </Form.Item>
                  </div>

                  <div className="col-md-2">
                  
                    <Form.Item
                      {...restField}
                      name={[name, "range"]}
                       label='Year Range'
                      rules={[
                        {
                          required: true,
                          message: "Missing year range",
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
                  Add Experience
                </Button>
              </Form.Item>
            </div>
          </>
        )}
      </Form.List>

      <h5><b>Projects</b></h5>
      <hr />
      <Form.List name="certificates">
        {(fields, { add, remove }) => (
          <>
            <div className="row">
              {fields.map(({ name, ...restField }) => (
                <>
                  <div className="col-md-4">
                    <Form.Item
                      {...restField}
                      name={[name, "title"]}
                      rules={[
                        {
                          required: true,
                          message: "Missing project name",
                        },
                      ]}
                    >
                      <Input placeholder="Project Title" />
                    </Form.Item>
                  </div>

                  <div className="col-md-4">
                    <Form.Item
                      {...restField}
                      name={[name, "description"]}
                      rules={[
                        {
                          required: true,
                          message: "Description",
                        },
                      ]}
                    >
                    <TextArea placeholder="Description" />
                    </Form.Item>
                  </div>

                  <div className="col-md-2">
                  
                  <Form.Item
                    {...restField}
                    name={[name, "range"]}
                     
                    rules={[
                      {
                        required: true,
                        message: "Missing year range",
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
                  Add Project
                </Button>
              </Form.Item>
            </div>
          </>
        )}
      </Form.List>

      <h5><b>Certificates</b></h5>
      <hr />
      <Form.List name="certificate">
        {(fields, { add, remove }) => (
          <>
            <div className="row">
              {fields.map(({ name, ...restField }) => (
                <>
                  <div className="col-md-4">
                    <Form.Item
                      {...restField}
                      name={[name, "title"]}
                      rules={[
                        {
                          required: true,
                          message: "Missing certificate name",
                        },
                      ]}
                    >
                      <Input placeholder="Certificate Title" />
                    </Form.Item>
                  </div>

                  <div className="col-md-4">
                    <Form.Item
                      {...restField}
                      name={[name, "description"]}
                      rules={[
                        {
                          required: true,
                          message: "Description",
                        },
                      ]}
                    >
                    <TextArea placeholder="Description" />
                    </Form.Item>
                  </div>

                  <div className="col-md-2">
                  
                  <Form.Item
                    {...restField}
                    name={[name, "range"]}
                     
                    rules={[
                      {
                        required: true,
                        message: "Missing year range",
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
                  Add Certificate
                </Button>
              </Form.Item>
            </div>
          </>
        )}
      </Form.List>
        
    </div>
  );
}

export default Experience;
