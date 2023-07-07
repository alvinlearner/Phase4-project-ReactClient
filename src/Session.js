import Cookies from 'js-cookie';

const SESSION_COOKIE_NAME = 'session_token';

export const setSessionToken = (token) => {
  Cookies.set(SESSION_COOKIE_NAME, token);
};

export const getSessionToken = () => {
  return Cookies.get(SESSION_COOKIE_NAME);
};

export const removeSessionToken = () => {
  Cookies.remove(SESSION_COOKIE_NAME);
};


