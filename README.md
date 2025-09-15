# My UI Library

A collection of reusable React UI components built with TypeScript and CSS Modules.

## Installation

```bash
npm install my-react-ui-components_test
```

## Usage

```tsx
import React from 'react';
import { Button, Textfield } from 'my-react-ui-components_test';

const App = () => {
  return (
    <div>
      <Button variant="primary">Click me</Button>
      <Textfield label="Email" placeholder="Enter your email" />
    </div>
  );
};

export default App;
```

## Components

- Button
- Textfield
- Select
- Checkbox
- Switch
- Modal

## Testing

- Jest сконфигурирован для CSS Modules без ручных моков:
  - `'^.+\\.module\\.(css|less|scss|sass)$' -> identity-obj-proxy`
  - `'\\.(css|less|scss|sass)$' -> __mocks__/styleMock.js`
  - `'\\.(jpg|jpeg|png|gif|webp|svg)$' -> __mocks__/fileMock.js`
- Глобальные матчеры `@testing-library/jest-dom` подключены в `src/setupTests.ts`.

Запуск тестов:

```bash
npm test
```

## Peer Dependencies

This library requires:

- React 16.8+
- React DOM 16.8+

## License

MIT
