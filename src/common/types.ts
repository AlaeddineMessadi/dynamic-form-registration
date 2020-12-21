export interface RadioOption {
  value: string;
  label: string;
}

export interface ItemOption {
  name: string;
  type: string;
  label: string;
  required?: boolean;
  options?: RadioOption[];
}
