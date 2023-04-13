import React from 'react';
import Form from "@rjsf/antd";
import validator from '@rjsf/validator-ajv8';

export const Users: React.FC = () => {
  const schema = require("./jsonFiles/schema.json")
  const formData = require("./jsonFiles/formData.json")
  const uiSchema = require("./jsonFiles/uiSchema.json")

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

