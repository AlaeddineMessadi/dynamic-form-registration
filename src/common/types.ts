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

export interface DataField {
  name: string;
  value: string;
}

export type KeyType = { [key: string]: any };

export interface IAppState {
  data: any;
  step: number;
  width: number;
}
