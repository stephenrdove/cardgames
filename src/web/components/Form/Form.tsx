import {
  Formik,
  Form as FormikForm,
  isFunction,
  isPromise,
  FormikHelpers,
} from 'formik';

type Props<TFields> = {
  initialValues: TFields,
  onSubmit: (values: TFields, formikHelpers: FormikHelpers<TFields>) => void | Promise<any>;
  children: JSX.Element | JSX.Element[];
  className?: string;
};

export function Form<TFields>(props: Props<TFields>): JSX.Element {
  const {
    initialValues,
    onSubmit,
    children,
    className,
  } = props;
  return (
    <Formik<TFields>
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        const result = onSubmit(values, actions);
        if (isPromise(result)) {
          result
            .then(() => {
              actions.setSubmitting(false);
            });
        } else {
          actions.setSubmitting(false);
        }
      }}
      // validate={validate}
      // validationSchema={validationSchema}
      // validateOnChange={validateOnChange}
      // validateOnBlur={validateOnBlur}
      // validateOnMount={validateOnMount}
      // enableReinitialize={enableReinitialize}
    >
      {(formikProps) => (
        <FormikForm className={className} noValidate>
          {isFunction(children) ? children(formikProps) : children}
        </FormikForm>
      )}
    </Formik>
  );
}

// function FormTest<TFields>({
//   initialValues,
//   onSubmit
// }): React.ReactElement<Props<TFields>> {
//   return (
//     <Formik<TFields>
//       initialValues={initialValues}
//       onSubmit={(values, actions) => {
//         const result = onSubmit(values, actions);
//         if (isPromise(result)) {
//           result
//             .then(() => {
//               actions.setSubmitting(false);
//             });
//         } else {
//           actions.setSubmitting(false);
//         }
//       }}
//       validate={validate}
//       validationSchema={validationSchema}
//       validateOnChange={validateOnChange}
//       validateOnBlur={validateOnBlur}
//       validateOnMount={validateOnMount}
//       enableReinitialize={enableReinitialize}
//     >
//       {(formikProps) => (
//         <FormikForm className={className} noValidate>
//           {isFunction(children) ? children(formikProps) : children}
//         </FormikForm>
//       )}
//     </Formik>
//   );
// }

// export const Form<TFields>: React.FC<TF = ({
//   initialValues = {},
//   onSubmit,
//   children,
//   className,
//   validate,
//   validationSchema,
//   validateOnBlur = true,
//   validateOnChange = true,
//   validateOnMount = true,
//   enableReinitialize = false,
// }) => (
//   <Formik<{foo: string}>
//     initialValues={initialValues}
//     onSubmit={(values, actions) => {
//       const result = onSubmit(values, actions);
//       if (isPromise(result)) {
//         result
//           .then(() => {
//             actions.setSubmitting(false);
//           });
//       } else {
//         actions.setSubmitting(false);
//       }
//     }}
//     validate={validate}
//     validationSchema={validationSchema}
//     validateOnChange={validateOnChange}
//     validateOnBlur={validateOnBlur}
//     validateOnMount={validateOnMount}
//     enableReinitialize={enableReinitialize}
//   >
//     {(formikProps) => (
//       <FormikForm className={className} noValidate>
//         {isFunction(children) ? children(formikProps) : children}
//       </FormikForm>
//     )}
//   </Formik>
// );

export default Form;
