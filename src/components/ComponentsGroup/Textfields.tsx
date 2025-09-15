import Textfield from "../Textfield/Textfield";
const TextFields = () => {
    return(
        <>
        <Textfield
        label="Email"
        name="email"
        type="email"
        placeholder="Введите ваш email"
        variant="outlined"
        required
      />

      <Textfield
        label="Пароль"
        name="password"
        type="password"
        placeholder="Введите пароль"
        helperText="Минимум 8 символов"
        variant="filled"
      />

      <Textfield
        label="Ошибка"
        name="error"
        error="Error"
        type="password"
        placeholder="Ошибка"
        variant="standard"
      />
      <Textfield
        label="Недоступна"
        name="Disabled"
        type="disabled"
        placeholder="Ошибка"
        variant="filled"
        disabled
      />

        </>
    )
}
export default TextFields