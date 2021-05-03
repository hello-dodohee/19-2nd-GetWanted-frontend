const JYIP = '10.58.0.212:8000';
const JWIP = '10.58.0.123:8000';
const BJIP = '10.58.7.44:8000';

export const GET_LOGIN_API = `http://${JWIP}/signin`;
export const GET_APPLYLIST_API = `http://${JYIP}/applylist`;
export const GET_JOBLIST_API = `http://${JYIP}/notifications`;
export const RESUME_API = `http://${BJIP}/resumes`;

export const EMAIL_API = `http://${JWIP}/users/email`;
export const LOGIN_API = `http://${JWIP}/users/signin`;
export const SIGNUP_API = `http://${JWIP}/users/signup`;
export const PASS_RESET_API = `http://${JWIP}/users/reset`;
export const KAKAO_LOGIN_API_URL = `http://${JWIP}/users/kakao`;

const IP = 'http://10.58.7.44:8000';

export const STORAGE_FORMS_API = `${IP}/resumes`;
export const STORAGE_FILES_API = `${IP}/resumes/files`;
export const STORAGE_LIST_API = `${IP}/resumes/lists`;
