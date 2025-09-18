import './App.module.css';
import { Buttons } from './components/ComponentsGroup/Buttons';
import { TextFields } from './components/ComponentsGroup/Textfields';
import { Selects } from './components/ComponentsGroup/Selects';
import { Checkboxes } from './components/ComponentsGroup/Checkboxes';
import { Switches } from './components/ComponentsGroup/Switches';
import { Modals } from './components/ComponentsGroup/Modals';

const App = () => {
  return (
    <div className="app">
      <h1>Демонстрация компонента Button</h1>
      <Buttons />
      <h2>Демонстрация компонента Textfield</h2>
      <TextFields />
      <h2>Демонстрация компонента Select</h2>
      <Selects />
      <h2>Демонстрация компонента Checkbox</h2>
      <Checkboxes />
      <h2>Демонстрация компонента Switch</h2>
      <Switches />
      <h2>Десонстрация компонента Modal</h2>
      <Modals />
    </div>
  );
};

export default App;
