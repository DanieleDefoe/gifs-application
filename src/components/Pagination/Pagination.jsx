import { useDispatch, useSelector } from "react-redux";
import {
  getSearchGifs,
  updateOffset as updateGifsOffset,
  updateLoadedGifs,
} from "../../store/gifsSlice";
import {
  getTrendings,
  updateOffset as updateTrendingsOffset,
  updateLoadedTrendings,
} from "../../store/trendingsSlice";
import Button from "../Button/Button";

export default function Pagination({ type }) {
  const dispatch = useDispatch();
  const { search: searchValue } = useSelector((store) => store.form.values);
  const { offset: gifsOffset } = useSelector((store) => store.gifs);
  const { offset: trendingsOffset } = useSelector((store) => store.trendings);

  function handlePagination() {
    if (type === "search") {
      dispatch(updateGifsOffset());
      dispatch(getSearchGifs({ searchValue, offset: gifsOffset + 9 }));
      dispatch(updateLoadedGifs());
    } else if (type === "trendings") {
      dispatch(updateTrendingsOffset());
      dispatch(getTrendings({ offset: trendingsOffset + 9 }));
      dispatch(updateLoadedTrendings());
    }
  }

  return (
    <Button
      type="button"
      disabled={false}
      onClick={handlePagination}
      props="button_type_show-more"
    />
  );
}
