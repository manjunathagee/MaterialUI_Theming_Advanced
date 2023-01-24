import "./button.styles.css";

export const Button = (props) => {
  let name: string;
  name = props.name;
  return <button className="btn btn-primary">{name}</button>;
};
