import { Field as FormikField, ErrorMessage } from 'formik';
import styled from 'styled-components';
import { Label } from './Label';
import { Input } from './Input';

export { Label, Input };

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  margin-top: 20px;
  margin-bottom: 20px;

  .error-message {
    color: ${(props) => props.theme.colors.danger};
    font-size: 13px;
    font-weight: 600;
    line-height: 18px;
    margin-top: 10px;
  }
`;

type Props = {
  name: string;
  label: string;
  type?: string;
  id?: string;
  component?: React.ComponentType;
  onChange?: (e: any) => void;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Field: React.FC<Props> = ({
  name,
  label,
  type = 'text',
  id,
  component: Component = null,
  onChange: customOnChange,
  ...rest
}) => (
  <Wrapper>
    {label && <Label>{label}</Label>}
    <FormikField
      name={name}
      component={({ field, form }) => {
        const { errors = {}, touched = {} } = form;
        const hasError = !!(errors && errors[name] && touched && touched[name]);

        const customProps: { [prop: string]: any } = {};

        if (customOnChange) {
          customProps.onChange = (e) => {
            field.onChange(e);
            customOnChange(e);
          };
        }

        if (!Component) {
          return (
            <Input
              id={id || name}
              {...field}
              {...customProps}
              type={type}
              {...rest}
              hasError={hasError}
            />
          );
        }

        return (
          <Component
            id={id || name}
            {...field}
            {...customProps}
            type={type}
            {...rest}
            hasError={hasError}
          />
        );
      }}
    />
    <div className="error-message">
      <ErrorMessage name={name} />
    </div>
  </Wrapper>
);

export default Field;
