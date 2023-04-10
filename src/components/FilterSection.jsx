import React, { useState } from 'react';
import {
  Box,
  FormControlLabel,
  Checkbox,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core';

const FilterSection = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [dropdownValue, setDropdownValue] = useState('');

  const handleCheckboxChange = (event) => {
    setSelectedOption(event.target.value);
    setDropdownValue('');
  };

  const handleDropdownChange = (event) => {
    setDropdownValue(event.target.value);
  };

  const renderDropdown = (option, options) => {
    if (selectedOption === option) {
      return (
        <FormControl fullWidth variant="outlined" margin="normal">
          <InputLabel>{option}</InputLabel>
          <Select value={dropdownValue} onChange={handleDropdownChange} label={option}>
            {options.map((item) => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      );
    }
    return null;
  };

  return (
    <Box p={3} bgcolor="#f0f0f0">
      {/* T/Q Checkbox and Dropdown */}
      <Box bgcolor="#e0e0e0" p={2} mb={1}>
        <FormControlLabel
          control={
            <Checkbox
              checked={selectedOption === 'T/Q'}
              onChange={handleCheckboxChange}
              value="T/Q"
            />
          }
