import { useState } from "react";
import "./Application.module.scss";
import FrutitsAndVegetablesTable from "./FrutitsAndVegetablesTable/FrutitsAndVegetablesTable";
import SearchComponent, {
  ISearchForm,
} from "./SearchComponent/SearchComponent";

const SelleoApplication = () => {
  const [searchTtems, searchItems] = useState<ISearchForm>({
    searchForm: "",
    showAvailalble: false,
  });

  return (
    <div>
      <SearchComponent searchSearchBarTitle={searchItems} />
      <FrutitsAndVegetablesTable searchTtems={searchTtems} />
    </div>
  );
};

export default SelleoApplication;
