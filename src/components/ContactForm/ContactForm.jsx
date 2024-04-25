import { Field, Form, Formik } from 'formik';
import { ErrorMessage } from 'formik';
import css from './ContactForm.module.css';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';

const ContactForm = () => {
  const dispatch = useDispatch();

  const initialValue = {
    name: "",
    number: ""
  };

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  const ContactSchema = yup.object().shape({
    name: yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("User name is required!"),
    number: yup.string()
      .matches(/^[0-9 -/+]+$/, "Invalid number. You can use '0-9', ' ', '-', '+'")
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  return (
    <Formik
      initialValues={initialValue}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      {({ errors, touched }) => (
        <Form className={css.form}>
          <div className={css.inputWrapper}>
            <label className={css.label} htmlFor="name">
              Name
            </label>
            <Field
              className={css.textInput}
              type="text"
              name="name"
              id="name"
            />
            <ErrorMessage
              className={css.errorNotification}
              name="name"
              component="span"
            />
          </div>
          <div className={css.inputWrapper}>
            <label className={css.label} htmlFor="number">
              Number
            </label>
            <Field
              className={css.textInput}
              type="text"
              name="number"
              id="number"
            />
            <ErrorMessage
              className={css.errorNotification}
              name="number"
              component="span"
            />
          </div>
          <button className={css.button} type="submit">
            Add Contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;