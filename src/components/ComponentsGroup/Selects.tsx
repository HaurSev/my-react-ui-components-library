import { useState } from "react";
import { Select, Option } from "../Select/Select";
const Selects = () => {
  const [selectedValue, setSelectedValue] = useState('');
  return (
    <>
      <Select
        label="Choose an option"
        value={selectedValue}
        onChange={setSelectedValue}
      >
        <Option value="">Select an option</Option>
        <Option value="option1">Option 1</Option>
        <Option value="option2">Option 2</Option>
        <Option value="option3">Option 3</Option>
      </Select></>)
}
export default Selects