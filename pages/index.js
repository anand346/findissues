import Link from 'next/link';
import { fetchUserData } from './lib/github';

export default function Login({ user }) {


  if(!user){
    return (
      <div style={{ padding: '20px' }}>
        <h1>Login with GitHub</h1>
        <p>Click the link below to authenticate with GitHub and log in:</p>
        <Link href="/api/auth/github">
          Login with GitHub
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h1>Welcome to your Dashboard</h1>
      <p>Hello, {user.login}</p>
      <img src={user.avatar_url} alt={user.login} width={100} />
      <a href="/api/auth/logout">Logout</a>  {/* Logout link */}
    </div>
  );
  
}

export async function getServerSideProps({ req }) {
  try {
    // Fetch user data based on the access token stored in the cookie
    const user = await fetchUserData(req);

    return { props: { user } };
  } catch (error) {
    return { props: { user: null } };  // If no access token is found or any error occurs, return user as null
  }
}
