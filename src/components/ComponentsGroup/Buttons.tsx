import { Button } from '../Button/Button';
const Buttons = () => {
  const handleClick = () => {
    console.log('Button clicked!');
  };
  return (
    <>
      {/* Базовые варианты */}
      <section className="section">
        <h2>Базовые варианты</h2>
        <div className="button-group">
          <Button variant="contained" onClick={handleClick}>
            Contained
          </Button>
          <Button variant="outlined" onClick={handleClick}>
            Outlined
          </Button>
          <Button variant="text" onClick={handleClick}>
            Text
          </Button>
        </div>
      </section>

      {/* Разные размеры */}
      <section className="section">
        <h2>Размеры</h2>
        <div className="button-group">
          <Button variant="contained" size="small">
            Small
          </Button>

          <Button variant="contained" size="medium">
            Medium
          </Button>
          <Button variant="contained" size="large">
            Large
          </Button>
        </div>
        <div className="button-group">
          <Button variant="text" size="small" disabled>
            Small
          </Button>

          <Button variant="text" size="medium" disabled>
            Medium
          </Button>
          <Button variant="text" size="large" disabled>
            Large
          </Button>
        </div>
        <div className="button-group">
          <Button variant="outlined" size="small" color="primary">
            Small
          </Button>

          <Button variant="outlined" size="medium" color="error">
            Medium
          </Button>
          <Button variant="outlined" size="large" color="secondary">
            Large
          </Button>
        </div>
      </section>
    </>
  );
};
export { Buttons };
