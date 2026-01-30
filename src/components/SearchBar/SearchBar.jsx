import { Formik, Form, Field } from 'formik';
import css from "./SearchBar.module.css";
import { IoSearchOutline } from 'react-icons/io5';
import toast, { Toaster } from 'react-hot-toast';

export const SearchBar = ({ onSearch }) => {
  const handleSubmit = (values, { resetForm }) => {
    if (values.query.trim() === '') {
      toast.error('Please enter a search term');
      return;
    }

    onSearch(values.query);
    resetForm();
  };

  return (
    <div className={css.wrapper}>
      <Formik initialValues={{ query: '' }} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <Field
            className={css.input}
            name="query"
            placeholder="Search images and photos"
          />
          <button className={css.button} type="submit">
            <IoSearchOutline size={20} />
          </button>
        </Form>
      </Formik>
      <Toaster position="top-right" />
    </div>
  );
};
