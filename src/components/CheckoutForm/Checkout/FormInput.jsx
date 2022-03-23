import React from "react";
import { TextField, Grid } from "@material-ui/core";
import { useFormContext, Controller } from "react-hook-form";

export default function FormInput({ name, label, required, placeholder }) {
  const { control } = useFormContext();
  return (
    <Grid item xs={12} sm={6}>
      <Controller
        // as={TextField}
        control={control}
        // name={name}
        // label={label}
        // required={required}
        // placeholder={placeholder}
        render={({ field }) => (
          <TextField
            name={name}
            label={label}
            required={required}
            fullWidth
            placeholder={placeholder}
          />
        )}
        // render={({ field }) => <TextField {...field}/>}
      />
    </Grid>
  );
}
