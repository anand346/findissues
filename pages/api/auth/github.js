export default function handler(req, res) {
	const client_id = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID;  // Your GitHub OAuth Client ID
	const redirect_uri = `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/callback`;  // Your redirect URL after OAuth
  
	const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}`;
  
	res.redirect(githubAuthUrl);
  }