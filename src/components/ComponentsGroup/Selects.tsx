import { useState } from 'react';
import { Select } from '../Select/Select';
const Selects = () => {
  const [selectedValue, setSelectedValue] = useState('');
  return (
    <>
      <Select
        label="Choose an option"
        value={selectedValue}
        onChange={setSelectedValue}
        options={[
          { value: '', label: 'Select an option' },
          { value: 'option1', label: 'Option 1' },
          { value: 'option2', label: 'Option 2' },
          { value: 'option3', label: 'Option 3' },
        ]}
      />
    </>
  );
};
export { Selects };
