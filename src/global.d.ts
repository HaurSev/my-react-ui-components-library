declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}
declare namespace jest {
  interface Matchers<R> {
    toBeInTheDocument(): R;
    toHaveClass(className: string): R;
    toHaveAttribute(attr: string, value?: string): R;
    toBeDisabled(): R;
  }
}
