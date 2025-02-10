const cookie = require("cookie");

export default function handler(req, res) {
  // Clear the access_token cookie by setting it with an expired date
  res.setHeader('Set-Cookie', cookie.serialize('access_token', '', {
    httpOnly: true,
    secure: true,
    maxAge: -1,  // Set maxAge to -1 to expire the cookie immediately
    path: '/',
  }));

  // Redirect user to the homepage or login page after logout
  res.redirect('/');
}
