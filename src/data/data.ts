import { OptionListType, InitFormType, InputDataType } from "../types/types";

export const optionsList: OptionListType = {
  secondary: {
    title: 'Secondary market Apartments',
    programs: [
      {
        id: 'base',
        name: 'Basic program',
        description: 'Basic mortgage program for the secondary market',
        initRate: 7.3,
        minFee: 10,
        regional: false
      },
      {
        id: 'specRegion',
        name: 'Specific region',
        description: 'Program for the secondary market in the FAR region with special terms',
        initRate: 1.9,
        minFee: 15,
        regional: true
      },
      {
        id: 'specialOne',
        name: 'Special program',
        description: 'The secondary market special program for some category of citizens',
        initRate: 5.1,
        minFee: 15,
        regional: false
      },
      {
        id: 'noFee',
        name: 'No initial fee',
        description: 'The secondary market program without initial fee',
        initRate: 9.1,
        minFee: 0,
        regional: false
      }
    ]
  },
  newApartments: {
    title: 'Newly Build Apartments',
    programs: [
      {
        id: 'base',
        name: 'Basic program',
        description: 'Basic mortgage program for the newly build apartaments',
        initRate: 4.4,
        minFee: 10,
        regional: false
      },
      {
        id: 'specRegion',
        name: 'Specific region',
        description: 'Program for the newly build apartaments in the FAR region with special terms',
        initRate: 1.6,
        minFee: 20,
        regional: true
      },
      {
        id: 'specialOne',
        name: 'Special program One',
        description: 'Special program for some category of citizens',
        initRate: 4,
        minFee: 15,
        regional: false
      },
      {
        id: 'specialTwo',
        name: 'Special program One',
        description: 'Special program for other category of citizens',
        initRate: 4.5,
        minFee: 10,
        regional: false
      },
      {
        id: 'noFee',
        name: 'No initial fee',
        description: 'Newly build apartments program without initial fee',
        initRate: 6.1,
        minFee: 0,
        regional: false
      }
    ]
  }
};

export const initForm: InitFormType = {
  purpose: 'secondary',
  mod: 'base',
  regional: false,
  initRate: 7.3,
  price: 1000,
  matValue: 500,
  minFee: 10,
  feePercent: 10,
  fee: 100,
  term: 10,
  salaryProj: true,
  canConfirmSalary: true,
  insurance: true,
  extraOne: true,
  extraTwo: true,
  maternity: false
};

export const inputData: InputDataType = [
  {
    id: 'price',
    min: 500,
    max: 50000,
    label: 'Real estate price, ≉',
    title: 'Type or select Real estate price (500 — 50 000 ≉)'
  },
  {
    id: 'fee',
    min: 50,
    max: 50000,
    label: 'Initial fee amount, ≉',
    title: 'Type or select Initial fee amount'
  },
  {
    id: 'term',
    min: 1,
    max: 30,
    label: 'Loan term, years',
    title: 'Type or select Loan term (1 — 30 years)'
  }
];

export const togglesData = [
  {
    id: 'salaryProj',
    description: 'I participiate in a Salary Project',
    discount: -1,
    info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla quas vero est unde tempora voluptatem ad laudantium labore, ipsum quaerat?',
    url: '#qwe'
  },
  {
    id: 'canConfirmSalary',
    description: 'I can confirm my income',
    discount: -0.5,
    info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla quas vero est unde tempora voluptatem ad laudantium labore, ipsum quaerat?',
    url: '#'
  },
  {
    id: 'insurance',
    description: 'Life and Health Insurance',
    discount: -1,
    info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla quas vero est unde tempora voluptatem ad laudantium labore, ipsum quaerat?',
    url: '#'
  },
  {
    id: 'extraOne',
    description: 'Additional discount on some account',
    discount: -0.3,
    info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla quas vero est unde tempora voluptatem ad laudantium labore, ipsum quaerat?',
    url: '#'
  },
  {
    id: 'extraTwo',
    description: 'Some other additional discount on this basis',
    discount: -0.2,
    info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla quas vero est unde tempora voluptatem ad laudantium labore, ipsum quaerat?',
    url: '#'
  }
];