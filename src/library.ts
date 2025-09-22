// Импорт стилей компонентов
import './components/Button/Button.module.css';
import './components/Textfield/Textfield.module.css';
import './components/Select/Select.module.css';
import './components/Checkbox/Checkbox.module.css';
import './components/Switch/Switch.module.css';
import './components/Modal/Modal.module.css';

// Импорт глобальных стилей
import './styles.module.css';

// Экспорт компонентов
export { Button } from './components/Button/Button';
export { Textfield } from './components/Textfield/Textfield';
export { Select } from './components/Select/Select';
export { Checkbox } from './components/Checkbox/Checkbox';
export { Switch } from './components/Switch/Switch';
export { Modal } from './components/Modal/Modal';
export { ModalHeader } from './components/Modal/ModalHeader';
export { ModalContent } from './components/Modal/ModalContent';
export { ModalActions } from './components/Modal/ModalActions';

// Экспорт стилей и констант
export {
  CSS_VARIABLES,
  COLORS,
  FONTS,
  SHADOWS,
  RADIUS,
  SPACING,
  TRANSITIONS,
  Z_INDEX,
  FOCUS_RING,
} from './styles/constants';
export type {
  ColorKey,
  ShadowKey,
  RadiusKey,
  SpacingKey,
  TransitionKey,
  ZIndexKey,
} from './styles/constants';

// Типы компонентов
export type { ButtonProps } from './components/Button/Button';
export type { TextfieldProps } from './components/Textfield/Textfield';
export type { SelectOption, SelectProps } from './components/Select/Select';
export type { CheckboxProps } from './components/Checkbox/Checkbox';
export type { SwitchProps } from './components/Switch/Switch';
export type { ModalProps } from './components/Modal/Modal';
