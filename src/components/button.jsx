function Button({ customCss, children }) {
  customCss = {
    paddingRight: "30" + "px",
    paddingLeft: "30" + "px",
    paddingBottom: "10" + "px",
    paddingTop: "10" + "px",
    //backgroundColor: {$colorPrismPink} не получается так добавить цвет, только так
    backgroundColor: "#F6A6BF",
    borderRadius: "100" + "px",
    fontSize: "20" + "px",
    fontWeight: "600",
    color: "#FFFFFF",
    border: "none",
  };
// я тут попыталась сделать значения по умолчанию, но думаю это странный и неправильный вариант
  return <button style={customCss}>{children}</button>;
}

export default Button;
