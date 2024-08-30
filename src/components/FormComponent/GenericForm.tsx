import React, { useState, useEffect } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

interface GenericFormProps {
  componentProps: any;
  onPropsChange: (newProps: any) => void;
  onSave: () => void;
}

const GenericForm: React.FC<GenericFormProps> = ({
  componentProps,
  onPropsChange,
  onSave,
}) => {
  const [formValues, setFormValues] = useState(componentProps);

  useEffect(() => {
    setFormValues(componentProps);
  }, [componentProps]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormValues((prevValues: any) => ({
      ...prevValues,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onPropsChange(formValues);
    onSave();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 400,
        margin: "0 auto",
        backgroundColor: "#fff",
      }}
    >
      {Object.keys(formValues).map((key) => (
        <Box key={key} sx={{ marginBottom: 2 }}>
          {typeof formValues[key] === "boolean" ? (
            <FormControlLabel
              control={
                <Checkbox
                  checked={formValues[key]}
                  onChange={handleInputChange}
                  name={key}
                />
              }
              label={key.charAt(0).toUpperCase() + key.slice(1)}
            />
          ) : (
            <TextField
              fullWidth
              variant="outlined"
              label={key.charAt(0).toUpperCase() + key.slice(1)}
              name={key}
              value={formValues[key]}
              onChange={handleInputChange}
            />
          )}
        </Box>
      ))}
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        sx={{ marginTop: 2 }}
      >
        Save
      </Button>
    </Box>
  );
};

export default GenericForm;
