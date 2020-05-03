import Router from 'next/router';
import fetch from 'isomorphic-fetch';
import {
  Form,
  Field,
  SubmitButton,
} from '../components/Form';

type RegistrationFields = {
  username: string;
  password: string;
  password_confirm: string;
};

export const RegistrationForm = () => (
  <Form<RegistrationFields>
    initialValues={{
      username: '',
      password: '',
      password_confirm: '',
    }}
    onSubmit={async (values) => {
      const response = await fetch('http://localhost:8000/api/v1/accounts/register/', {
        method: 'POST',
        body: JSON.stringify({ ...values, email: values.username }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        Router.push('/dashboard');
      } else {
        alert(await response.text()); // TODO: use proper error handling
      }
    }}
  >
    <Field name="username" label="Email" autoComplete="username" type="email" autoFocus />
    <Field name="password" label="Password" type="password" autoComplete="new-password" />
    <Field name="password_confirm" label="Password" type="password" autoComplete="new-password" />
    <SubmitButton />
  </Form>
);

export default RegistrationForm;
