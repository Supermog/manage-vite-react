import { Helmet } from 'react-helmet-async';
import './styles.css';
import { SigninForm } from '@/components/forms/sign-in-form';

function SignIn() {
  return (
    <>
      <Helmet>
        <title>Sign in</title>
      </Helmet>

      <div className="flex justify-center w-3/4 sm:w-1/2">
        <SigninForm />
      </div>
    </>
  );
}

export { SignIn };
