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
      label: "Email"
    },
    {
      type: "Control",
      scope: "#/properties/password",

    },
  ]
};