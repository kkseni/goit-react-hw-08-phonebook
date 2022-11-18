import React from 'react';
import { useCreateAuthMutation } from 'redux/Query/UserApi';
import { useState } from 'react';
import { Form, Input, Button } from 'components/ContactForm/ContactForm.styled';
import { showSuccess } from 'utils/Toast/toastMessage';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // RTK Query , коли створюємо нового користувача
  const [createAuth, result] = useCreateAuthMutation();
  console.log('🚀 ~ result', result);

  if (result.isSuccess) {
    showSuccess('Successful registration');
  }

  // зміна значення інпута
  const handleInputChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'name':
        setName(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Значення полів "Інпуту"
    const user = {
      name,
      email,
      password,
    };

    createAuth(user);
    reset();
  };

  // очищення інпута
  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
          required
        />
        <Input
          type="text"
          name="email"
          value={email}
          onChange={handleInputChange}
          required
        />
        <Input
          type="password"
          name="password"
          value={password}
          onChange={handleInputChange}
          required
        />
        <Button type="submit" disabled={result.isLoading}>
          {result.isLoading ? 'Loading...' : 'Register'}
        </Button>
      </Form>
    </>
  );
};

export default RegisterForm;
