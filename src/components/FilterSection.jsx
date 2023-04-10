import React, { useState } from 'react';
import React, { useState } from 'react';
import {
  Box,
  FormControlLabel,
  Radio,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  RadioGroup,
} from '@material-ui/core';

const FilterSection = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [dropdownValue, setDropdownValue] = useState('');

  const handleRadioChange = (event) => {
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

  const optionData = {
    'T/Q': ['T1', 'T2', 'T3'],
    'E/S': ['E1', 'E2', 'E3'],
    'CMS': ['C1', 'C2', 'C3'],
    'GS': ['G1', 'G2', 'G3'],
  };

  return (
    <Box p={3} bgcolor="#f0f0f0">
      <RadioGroup value={selectedOption} onChange={handleRadioChange}>
        {Object.entries(optionData).map(([option, options], index) => (
          <Box key={option} bgcolor={index % 2 === 0 ? '#e0e0e0' : '#d0d0d0'} p={2} mb={1}>
            <FormControlLabel
              value={option}
              control={<Radio />}
              label={option}
              labelPlacement="start"
            />
            {renderDropdown(option, options)}
          </Box>
        ))}
      </RadioGroup>
    </Box>
  );
};

export default FilterSection;
