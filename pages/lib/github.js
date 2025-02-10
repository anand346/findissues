import fetch from 'node-fetch';
import { getAccessTokenFromCookie } from '../utils';  // You'll create this utility to extract the token

export async function fetchUserData(req) {
  const token = getAccessTokenFromCookie(req);  // Extract the access token from the cookies
  console.log(token);
  if (!token) {
    throw new Error('No access token found');
  }

  // Use the token to make a request to GitHub API
  const userRes = await fetch('https://api.github.com/user', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const userData = await userRes.json();
  return userData;
}
