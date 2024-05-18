import { Link, useNavigate } from 'react-router-dom';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import ErrorPopup from '@/components/ui/ErrorPopup';
import { useContext } from 'react';
import AuthContext from '@/context/AuthProvider';
import { useMutation } from '@tanstack/react-query';
import axiosInstance from '@/utils/axiosInstance';

function LoginForm() {
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationKey: ['login'],
    mutationFn: async (formData) => {
      return axiosInstance.post('landlord/login', formData).catch((err) => {
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
      className="relative border-2 z-10 rounded-lg pt-4 pb-2 px-6 w-[400px] flex flex-col items-center"
    >
      <ErrorPopup message={mutation.isError ? mutation.error.message : null} />
      <div className={`w-full`}>
        <h3>Account</h3>
        <p className="mb-5">Login with your email and password.</p>
        <div className="grid gap-2 w-full">
          <Input
            name={'email'}
            type="email"
            label={'Email address'}
            placeholder={'example@mail.com'}
            validationMessage={'invalid email'}
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
          <Button type="submit" className={'w-full block'}>
            Login
          </Button>
          <p className="text-center">
            dont have an account? <Link to="/signup">signup</Link>
          </p>
        </div>
      </div>
    </form>
  );
}

export default LoginForm;
