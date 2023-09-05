import { useState } from 'react';
import { LOGIN_USER } from '../../utils/mutations';
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';
import { HashLink } from 'react-router-hash-link'

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [loginError, setLoginError] = useState(false);

  const [loginUser] = useMutation(LOGIN_USER);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoginError(false);
    if (username && password) {
      try {
        const { data } = await loginUser({ variables: { username, password } });

        if (!data) {
          throw `Can't Find User!`;
        }

        Auth.login(data.login.token);
      } catch (err) {
        setLoginError(true);
        console.error(err);
      }
    }
    return
  };

  return (
    <form
      className="text-center bg-slate-100 bg-opacity-50 md:w-[50vw] md:h-[70vh] xs:w-screen xs:h-[90vh] grid grid-rows-6 justify-items-center items-center gap-10 rounded p-10"
      onSubmit={(e) => handleSubmit(e)}
    >
      <header className="row-span-2">
        <h1>Got an account? Log In!</h1>
        <HashLink to='/#register'><small className='text-black'>Need to Register Still? Click Here!</small></HashLink>
      </header>
      <div className="flex flex-col items-center row-span-2">
        <label htmlFor="username">Username</label>
        <input
          className="text-2xl px-2"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value.toLowerCase())}
        />
        <label htmlFor="password">Password</label>
        <input
          className="text-2xl px-2"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="text-lg bg-blue-600 hover:bg-blue-500
            focus:bg-blue-600 py-1 px-4 text-white rounded-lg w-fit"
      >
        Login
      </button>
      {loginError && <h5>Wrong Password or Username!</h5>}
    </form>
  );
}
