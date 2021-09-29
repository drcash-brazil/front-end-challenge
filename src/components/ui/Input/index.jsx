import { ErrorMessage, useField } from 'formik';

const Input = ({ label, className, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className={className}>
      <label htmlFor={field.name}>
        {label}
      </label>
      
      <input
        className={`form-control ${meta.touched && meta.error && 'is-invalid'}`}
        {...field} {...props}
        autoComplete="off"
      />
      <ErrorMessage component="div" name={field.name} className="absolute red f11" />
    </div>
  )
}

export default Input;