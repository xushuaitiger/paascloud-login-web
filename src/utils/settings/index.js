const gbs = {
  host: 'http://localhost',
  lockr_prefix: 'PASSCLOUD_PAAS_',
  secret_key: '^#rwd6Ffz$X5alRN',
  domain: '',
  secret: {
    key_str: '^#rwd6Ffz$X5alRN',
    iv_str: '^#rwd6Ffz$X5alRN'
  }
};
const cbs = {};

if (process.env.NODE_ENV === 'production') {
  gbs.domain = '';
} else {
  gbs.domain = '';
  gbs.lockr_prefix += 'DEV_';
}

const enums = {
  USER: {
    LOGIN_NAME: 'LOGIN_NAME',
    MENU_LIST: 'MENU_LIST',
    REMEMBER_ME: 'REMEMBER_ME',
    AUTH_TOKEN: 'AUTH_TOKEN',
    REFRESH_TOKEN: 'REFRESH_TOKEN',
    REDIRECT_URI: 'REDIRECT_URI'
  }
};

export {
  gbs,
  cbs,
  enums
};
