import React from 'react';
import Form from "@rjsf/antd";
import validator from '@rjsf/validator-ajv8';
import  { useState, useEffect } from 'react';

export const Users: React.FC = () => {
  const schema = require("./jsonFiles/schema.json")
  const uiSchema = require("./jsonFiles/uiSchema.json")
  const [formData, setFormData] = useState({});

  
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('https://api.fake-rest.refine.dev/users/1');
        const responseBody = await response.json();
        setFormData(responseBody);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);
  return (
    <div className="editor-page">
      <div className="page container">
        <div className="col-md-10 offset-md-1 col-xs-12">

          <div className="form-control" >
            <Form
              schema={schema}
              uiSchema={uiSchema}
              formData={formData}
              validator={validator}
            />
          </div>
        </div>
      </div>
    </div>

  );
}

