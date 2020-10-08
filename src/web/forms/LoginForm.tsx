import Router from 'next/router';
import fetch from 'isomorphic-fetch';
import {
  Form,
  Field,
  SubmitButton,
} from '../components/Form';

type LoginFields = {
  login: string;
  password: string;
};

export const LoginForm = () => (
  <Form<LoginFields>
    initialValues={{
      login: '',
      password: '',
    }}
    onSubmit={async (values) => {
      const response = await fetch('http://localhost:8000/api/v1/accounts/login/', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors',
        credentials: 'include',
      });

      if (response.ok) {
        console.log(await response.text());
        Router.push('/dashboard');
      } else {
        alert(await response.text()); // TODO: use proper error handling
      }
    }}
  >
    <Field name="login" label="Email" autoComplete="username" type="email" autoFocus />
    <Field name="password" label="Password" type="password" autoComplete="current-password" />
    <SubmitButton />
  </Form>
);

export default LoginForm;
