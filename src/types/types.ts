export type OptionsOptionType = {
  id: string,
  name: string,
  description: string,
  initRate: number,
  minFee: number,
  regional: boolean
};

export type OptionListType = {
  [key: string]: {
    title: string,
    programs: OptionsOptionType[]
}};

export type StringKeysType = {
  purpose: keyof OptionListType & string,
  mod: string,
  regional: boolean,
  initRate: number,
  price: number,
  matValue: number,
  minFee: number,
  feePercent: number,
  fee: number,
  term: number,
  salaryProj: boolean,
  canConfirmSalary: boolean,
  insurance: boolean,
  extraOne: boolean,
  extraTwo: boolean,
  maternity: boolean
};

export interface InitFormType extends StringKeysType {
  [key: string]: number | string | boolean,
};

export type ResultsType = {
  rate: number;
  loanBody: number;
  totalRate: number;
  monthly: number;
  minIncome: number;
}

export type InputType = {
  id: string,
  min: number,
  max: number,
  label: string,
  title: string
};

export type ScheduleEntryType = {
  year: number;
  month: number;
  payment: string;
  interestPayment: number;
  loanAmmortization: number;
  nextLoanRemainder: string;
};

export type InputDataType = InputType[];

export type NextFormDataElementType = {
  target: string, value: string | number | boolean
};

export type NextFormDataType = NextFormDataElementType[];

export type OnDataChangeType = (nextFormData: NextFormDataType) => void;

export type InputStateType = {
  [key: string]: number
};

export type LoanFormPropsType = {
  data: InitFormType,
  onDataChange: OnDataChangeType
};

export type OptionsPropsType = {
  data: OptionListType,
  selected: string,
  onDataChange: OnDataChangeType
};

export type ModsPropsType = {
  data: OptionListType,
  selectedPurpose: string,
  selectedMod: string,
  onDataChange: OnDataChangeType
};

export type InputsPropsType = {
  data: InitFormType,
  onDataChange: OnDataChangeType
};

export type InputWithRangePropsType = {
  formData: InitFormType,
  input: InputType,
  value: number,
  onValueChange: (newValue: InputStateType) => void,
  onDataChange: OnDataChangeType
};

export type ToggleType = {
  description: string,
  discount: number,
  info: string,
  url: string
};

export type TogglesDataType = {
  [key: string]: keyof InitFormType,
};

export type ExtraTogglePropsType = {
  data: InitFormType,
  onDataChange: OnDataChangeType
};

export type MaternityTogglePropsType = {
  feeValue: number
  data: InitFormType,
  onValueChange: (newValue: InputStateType) => void,
  onDataChange: OnDataChangeType
};

export type LoanResultPropsType = {
  data: InitFormType
};

export type SchedulePropsType = {
  formData: InitFormType,
  results: ResultsType,
  toggleSchedule: () => void
}