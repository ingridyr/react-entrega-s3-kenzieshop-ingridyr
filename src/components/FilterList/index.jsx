import { useDispatch } from "react-redux";
import { filterCheckbox } from "../../store/modules/products/actions";
import "./style.css";

const FilterList = () => {
  const dispatch = useDispatch();
  //corrigir desmarcação da checkbox

  return (
    <aside>
      <ul>
        <p>Search by Filter:</p>
        <div>
          <input
            type="checkbox"
            name="cats"
            onClick={() => dispatch(filterCheckbox("cats"))}
          />
          <label for="cats">Cats</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="dogs"
            onClick={() => dispatch(filterCheckbox("dogs"))}
          />
          <label for="dogs">Dogs</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="fishes"
            onClick={() => dispatch(filterCheckbox("fishes"))}
          />
          <label for="fishes">Fishes</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="rodents"
            onClick={() => dispatch(filterCheckbox("rodents"))}
          />
          <label for="rodents">Rodents</label>
        </div>
      </ul>
    </aside>
  );
};

export default FilterList;
