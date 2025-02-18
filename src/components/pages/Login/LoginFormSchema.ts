export const LoginFormSchema = {
  properties: {
    email: {
      type: "string",
    },
    password: {
      type: "string",
    },
  },
};

export const LoginFormUiSchema =
{
  "type": "VerticalLayout",
  "elements": [
    {
      type: "Control",
      scope: "#/properties/email",
    },
    {
      type: "Control",
      scope: "#/properties/password",
    }
  ]
};