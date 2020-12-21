export const FORM_SCHEMA = {
  steps: [
    {
      name: {
        type: "text",
        label: "Name",
        required: true,
      },
    },
    {
      email: {
        type: "email",
        label: "Email",
        required: true,
      },
    },
    {
      phone: {
        type: "text",
        label: "Phone",
        required: true,
      },
    },
    {
      salary: {
        type: "radio",
        label: "Salary",
        required: true,
        options: [
          { label: "1000", value: "10000" },
          { label: "2000", value: "20000" },
          { label: "2000", value: "20000" },
        ],
      },
    },
  ],
};
