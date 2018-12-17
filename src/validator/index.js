import { i18n } from 'i18n';

const { message, controlsName } = i18n.en;

const {
  required,
  email,
} = message;

const emailRegEx = new RegExp('^[a-zA-Z][a-zA-Z0-9_\\-\\.]{0,}@[a-zA-Z0-9]{1,}[\\-]{0,}[a-zA-Z0-9]{1,}(\\.[a-z0-9]{2,4}){1,3}$');


const validateRules = {
  required: {
    test: (val) => val.length > 0,
    message: (name) => `${controlsName[name]}${required}`,
  },
  email: {
    test: (val) => !val || emailRegEx.test(val),
    message: (name) => `${controlsName[name]}${email}`,
  },
};

export default (type) => (
  (val, name, arg = null) => ({
    isValid: validateRules[type].test(val, arg),
    message: validateRules[type].message(name, arg),
  })
);
