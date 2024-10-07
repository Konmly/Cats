import "./App.scss";
import  "./icons/sprite.svg";
import Button from "./components/button";
import Icon from "./components/icons";

function App() {
  return (
    <>
      <Button customCss>Отправить заявку</Button>
      <Icon name="instaIcon"></Icon>
    </>
  );
}

export default App;
