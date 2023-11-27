import { setFilter, getFilter } from 'redux/filtersSlice';
import { useDispatch, useSelector } from 'react-redux';

const Input = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  return (
    <input
      onChange={({ target: { value } }) => dispatch(setFilter(value))}
      value={filter}
    />
  );
};
export default Input;
