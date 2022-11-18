import React from 'react';
import { useState } from 'react';
import { useLoginAuthMutation } from 'redux/Query/UserApi';
import { Form, Input, Button } from 'components/ContactForm/ContactForm.styled';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // РТК Query логінізація
  const [loginAuth, result] = useLoginAuthMutation();

  // зміна значення інпута
  const handleInputChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'email':
        setEmail(value);
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
      email,
      password,
    };

    loginAuth(user);
    reset();
  };

  // очищення інпута
  const reset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
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
          {result.isLoading ? 'Loading...' : 'Login'}
        </Button>
      </Form>
    </>
  );
};

export default LoginForm;
