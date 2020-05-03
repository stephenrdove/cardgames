import { useFormikContext } from 'formik';
import Button from '../Button';

export const SubmitButton = ({ children = 'Submit', ...props }) => {
  const { isValid, isSubmitting } = useFormikContext();
  return (
    <Button
      type="submit"
      disabled={!isValid || isSubmitting}
      {...props}
    >
      {children}
    </Button>
  );
};

export default SubmitButton;
