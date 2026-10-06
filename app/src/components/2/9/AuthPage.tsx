type AuthPageProps = {
  isLoggedIn: boolean;
};

export function AuthPage({ isLoggedIn }: AuthPageProps) {
  return <>{isLoggedIn ? <Dashboard /> : <Login />}</>;
}

function Login() {
  return <p>Main</p>;
}

function Dashboard() {
  return <p>Footer</p>;
}
