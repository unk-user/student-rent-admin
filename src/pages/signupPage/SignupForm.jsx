import { Link, useNavigate } from 'react-router-dom';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import ErrorPopup from '@/components/ui/ErrorPopup';
import { useContext } from 'react';
import AuthContext from '@/context/AuthProvider';
import { useMutation } from '@tanstack/react-query';
import axiosInstance from '@/utils/axiosInstance';

function SignupForm() {
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationKey: ['register'],
    mutationFn: async (formData) => {
      return axiosInstance.post('/register', formData).catch((err) => {
        throw err.response.data;
      });
    },
    onSuccess: ({ data }) => {
      console.log(data);
      setAuth(data);
      navigate('/dashboard', { replace: true });
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    mutation.mutate(data);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative border-2 rounded-lg pt-4 pb-2 px-6 w-[400px] flex flex-col items-center"
    >
      <ErrorPopup message={mutation.isError ? mutation.error.message : null} />
      <div>
        <h3>Account</h3>
        <p className="mb-5">
          Sign up with your username, email, and password to get started.
        </p>
      </div>
      <div className="grid gap-2 w-full">
        <Input
          name={'username'}
          type="text"
          label={'Full name'}
          placeholder={'your name'}
          required
        />
        <Input
          name={'email'}
          type="email"
          label={'Email address'}
          placeholder={'example@mail.com'}
          required
        />
        <Input
          name={'password'}
          type={'password'}
          label={'Password'}
          minLength="8"
          maxLength="16"
          placeholder={'your password'}
          required
        />
      </div>
      <div className="mt-6 mb-5">
        <div className="gap-1 flex flex-col">
          <Button type="submit" className={'w-full'}>
            Sign up
          </Button>
        </div>
        <p className="text-center">
          already have an account? <Link to="/login">login</Link>
        </p>
      </div>
    </form>
  );
}

export default SignupForm;
