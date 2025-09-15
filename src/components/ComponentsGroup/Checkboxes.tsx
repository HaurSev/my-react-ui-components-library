import {useState} from "react";
import Checkbox from "../Checkbox/Checkbox";

const Checkboxes = () => {
  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);

  const handleIndeterminateChange = () => {
    setIndeterminate(prev => !prev);
    setChecked(false); // Сбрасываем checked при переключении indeterminate
  };

  const handleCheckedChange = (isChecked: boolean) => {
    setChecked(isChecked);
    if (isChecked) {
      setIndeterminate(false); // Сбрасываем indeterminate при установке checked
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h3>Checkbox Examples</h3>
      
      <Checkbox
        label="Basic checkbox"
        checked={checked}
        onChange={handleCheckedChange}
      />
      
      <Checkbox
        label="Indeterminate checkbox"
        indeterminate={indeterminate}
        onChange={handleIndeterminateChange}
      />
      
      <Checkbox
        label="Disabled checkbox"
        disabled
      />
      
      <Checkbox
        label="Checked and disabled"
        checked
        disabled
      />
      
      <Checkbox
        label="With error"
        error="This field is required"
      />
      
      <Checkbox
        label="With helper text"
        helperText="Additional information"
      />
      
      <div style={{ marginTop: '20px', padding: '15px', background: '#f5f5f5', borderRadius: '4px' }}>
        <strong>Current states:</strong>
        <div>Checked: {checked.toString()}</div>
        <div>Indeterminate: {indeterminate.toString()}</div>
      </div>
    </div>
  );
}
export default Checkboxes;