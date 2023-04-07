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
  region: boolean,
  price: number,
  matValue: number,
  minFee: number,
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
  monthly: number,
  interest: number,
  loanBody: number,
  income: number
}
export type InputType = {
  id: string,
  min: number,
  max: number,
  label: string,
  title: string
}

export type InputDataType = InputType[];

export type LoanFormPropsType = {
  data: InitFormType,
  onDataChange: React.Dispatch<React.SetStateAction<InitFormType>>,
}

export type OptionsPropsType = {
  data: OptionListType,
  selected: string,
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
};

export type ModsPropsType = {
  data: OptionListType,
  selectedPurpose: string,
  selectedMod: string,
  handleSelect: (event: React.MouseEvent<HTMLDivElement>) => void
};

export type InputsPropsType = {
  data: InitFormType,
  // type: 'price' | 'fee' | 'term',
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  handleClick: (event: React.MouseEvent<HTMLDivElement>) => void
}

export type InputWithRangePropsType = {
  formData: InitFormType,
  input: InputType,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void
}

export type ToggleType = {
  description: string,
  discount: number,
  info: string,
  url: string
}
export type TogglesDataType = {
  [key: string]: keyof InitFormType,
}

export type ExtraTogglePropsType = {
  data: InitFormType,
  handleClick: (event: React.MouseEvent<HTMLDivElement>) => void
}

export type MaternityTogglePropsType = {
  data: InitFormType,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void
}