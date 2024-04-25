import css from "./PhoneBookContainer.module.css";
const PhoneBookContainer = ({ children }) => {
  return <div className={css.container}>{children}</div>;
};

export default PhoneBookContainer;
