import Button from "./Button";
// home-work
// const list = ["all", "games", "songs"];

const ButtonList = () => {
  return (
    <div className="flex">
      <Button name="All" />
      <Button name="Game" />
      <Button name="Songs" />
      <Button name="Live" />
      <Button name="Seccer" />
      <Button name="Cricket" />
      <Button name="News" />
      <Button name="Cooking" />
      <Button name="Cooking" />
    </div>
  );
};

export default ButtonList;
