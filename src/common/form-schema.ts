export const FORM_SCHEMA = {
  steps: [
    {
      name: "name",
      type: "text",
      label: "Name",
      required: true,
    },
    {
      name: "email",
      type: "email",
      label: "Email",
      required: true,
    },
    {
      name: "phone",
      type: "text",
      label: "Phone",
      required: true,
    },
    {
      name: "salary",
      type: "radio",
      label: "Salary",
      required: true,
      options: [
        { label: "1000", value: "10000" },
        { label: "2000", value: "20000" },
        { label: "2000", value: "20000" },
      ],
    },
  ],
};
