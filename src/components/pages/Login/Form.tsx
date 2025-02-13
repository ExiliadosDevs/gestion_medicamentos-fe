/* eslint-disable @typescript-eslint/no-explicit-any */

// export const LoginFormSchema = {
//     "properties": {
//       "email": {
//         "type": "string"
//       },
//       "password": {
//         "type": "string"
//       },
//     }
// }

import { JsonForms } from "@jsonforms/react";

interface Props {
  schema: object;
  uiSchema: any;
  data: object;
  renderers: any;
  cells: any;
  onChange: ({data,errors}:{data:any, errors:any})=>void;
}

const Form  = ({schema, uiSchema, data, renderers, cells, onChange}:Props) =>{
  return(<JsonForms
    schema={schema}
    uischema={uiSchema}
    data={data}
    renderers={renderers}
    cells={cells}
    onChange={onChange}
  />)
}

export default Form;