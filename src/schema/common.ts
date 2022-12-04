import { asConst, FromSchema } from 'json-schema-to-ts';

const i18nSchema = {
  common: {
    hello: 'string',
    info: {
      name: 'string',
      sex: 'string',
      age: 'string',
      address: 'string',
    },
  },
};

const i18nSchema2 = {
  common: {
    hello: 'string',
    info: {
      name: 'string',
      sex: 'string',
      age: 'string',
      address: 'string',
    },
  },
};

export default i18nSchema;
