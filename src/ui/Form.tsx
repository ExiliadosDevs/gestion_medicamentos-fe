/* eslint-disable @typescript-eslint/no-explicit-any */
import { JsonForms } from "@jsonforms/react";
import {
  materialRenderers,
  materialCells,
} from '@jsonforms/material-renderers';

interface Props {
  schema: object;
  uiSchema: any;
  data: object;
  onChange: ({data,errors}:{data:any, errors:any}) => void;
}

const Form  = ({schema, uiSchema, data, onChange}:Props) =>{
  return(<JsonForms
    schema={schema}
    uischema={uiSchema}
    data={data}
    renderers={materialRenderers}
    cells={materialCells}
    onChange={onChange}
  />)
}

export default Form;