// utils/index.js
const cookie = require("cookie");

export function getAccessTokenFromCookie(req) {
  const cookies = cookie.parse(req.headers.cookie || '');
  console.log(cookies);
  return cookies.access_token || null;
}
