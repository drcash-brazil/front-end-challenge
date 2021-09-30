import { useField } from 'formik';
import TextField from '@material-ui/core/TextField';
import { memo } from 'react';

const Input = ({ label, className, ...props }) => {
  const [field, meta] = useField(props);

  const { error, touched } = meta;

  const hasError = Boolean(error && touched)

  return (
    <div className={className}>
      <TextField
        {...field}
        {...props}
        fullWidth
        label={label}
        color="primary"
        variant="outlined"
        autoComplete="off"
        helperText={hasError && error}
        error={hasError}
        inputProps={{ style: { height: 56 } }}
      />
    </div>
  )
}

export default memo(Input);