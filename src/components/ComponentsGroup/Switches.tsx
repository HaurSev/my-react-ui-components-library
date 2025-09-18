import { useState } from 'react';
import { Switch } from '../Switch/Switch';
const Switches = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [autoSave, setAutoSave] = useState(true);

  return (
    <div style={{ padding: '20px' }}>
      <h3>Switch Examples</h3>

      <Switch checked={isEnabled} onChange={setIsEnabled} />

      <Switch label="Auto save" checked={autoSave} onChange={setAutoSave} />

      <Switch label="Disabled switch" disabled />

      <Switch label="Disabled and checked" checked disabled />

      <Switch
        label="With error"
        error={true}
        helperText="This setting is required"
      />

      <Switch
        label="With helper text"
        helperText="Toggle this setting carefully"
      />

      <div
        style={{
          marginTop: '20px',
          padding: '15px',
          background: '#f5f5f5',
          borderRadius: '4px',
        }}
      >
        <strong>Current states:</strong>
        <div>Notifications: {isEnabled ? 'ON' : 'OFF'}</div>
        <div>Auto save: {autoSave ? 'ON' : 'OFF'}</div>
      </div>
    </div>
  );
};
export { Switches };
