import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { selectNameFilter, changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filterName = useSelector(selectNameFilter);

  const onChange = (e) => {
    const { value } = e.target;
    dispatch(changeFilter(value));
  };

  return (
    <label className={css.label}>
      Find contacts by name
      <input
        className={css.input}
        type="text"
        value={filterName}
        onChange={onChange}
      />
    </label>
  );
};

export default SearchBox;