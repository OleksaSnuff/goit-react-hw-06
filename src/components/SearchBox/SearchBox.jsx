import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { selectNameFilter, changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  return (
    <div className={css.search}>
      <label htmlFor="search">Find contacts by name</label>
      <input
        type="text"
        id="search"
        className={css["search-input"]}
        value={filter}
        onChange={(e) => {
          dispatch(changeFilter(e.target.value));
        }}
      />
    </div>
  );
};
export default SearchBox;
