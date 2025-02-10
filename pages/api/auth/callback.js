import fetch from 'node-fetch';
const cookie = require("cookie");

export default async function handler(req, res) {
	const { code } = req.query;
	if (!code) {
		return res.status(400).json({ error: 'Code is missing' });
	}
	const client_id = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID;
	const client_secret = process.env.GITHUB_CLIENT_SECRET;

	const response = await fetch('https://github.com/login/oauth/access_token', {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
		},
		body: new URLSearchParams({
			client_id: client_id,
			client_secret: client_secret,
			code
		}),
	});

	const tokenData = await response.json();
	const access_token = tokenData.access_token;
	if (!access_token) {
		return res.status(400).json({ error: 'Failed to obtain access token' });
	}
	
	res.setHeader('Set-Cookie', cookie.serialize('access_token', access_token, { 
		httpOnly: true, 
		secure: true,
		maxAge: 60 * 60 * 24 * 7,  // 7 days
		path: '/'
	}));	
	res.redirect('/dashboard');
}