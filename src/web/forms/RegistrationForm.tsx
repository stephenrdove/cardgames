import fetch from 'isomorphic-fetch';
import {
  Form,
  Field,
  SubmitButton,
} from '../components/Form';

type RegistrationFields = {
  username: string;
  password1: string;
  password2: string;
  csrfmiddlewaretoken: string;
};

export const RegistrationForm = () => (
  <Form<RegistrationFields>
    initialValues={{
      username: '',
      password1: '',
      password2: '',
      csrfmiddlewaretoken: 'Zkl3LO4o6qfI1RLjQwHuCRCiD49a9e7CXSiSh7dnscghJqIhuiZUAtrMj1MgvbZ8',
    }}
    onSubmit={async ({ csrfmiddlewaretoken, ...values }) => {
      const response = await fetch('http://localhost:8000/register/', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'X-CSRFToken': csrfmiddlewaretoken,
        },
      });

      console.log(response);

      const json = await response.text();

      console.log(json);
    }}
  >
    <Field name="username" label="Username" autoComplete="username" autoFocus />
    <Field name="password1" label="Password" type="password" autoComplete="new-password" />
    <Field name="password1" label="Password" type="password" autoComplete="new-password" />
    <SubmitButton />
  </Form>
);

export default RegistrationForm;
