export const FORM_SCHEMA = {
  steps: [
    {
      name: "name",
      type: "text",
      label: "Full name",
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
      type: "number",
      label: "Phone Number",
      required: true,
    },
    {
      name: "salary",
      type: "radio",
      label: "Salary Indication",
      required: true,
      options: [
        { label: "0 - 1.000", value: "0 - 1.000" },
        { label: "1.000 - 2.000", value: "1.000 - 2.000" },
        { label: "2.000 - 3.000", value: "2.000 - 3.000" },
        { label: "2.000 - 4.000", value: "3.000 - 4.000" },
        { label: "Mehr als 4.000", value: "Mehr als 4.000" },
      ],
    },
  ],
};
