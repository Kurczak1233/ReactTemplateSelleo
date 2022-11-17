import { useForm } from "react-hook-form";
import styles from "./SearchComponent.module.scss";

export interface ISearchForm {
  searchForm: string;
  showAvailalble: boolean;
}

interface ISearchComponent {
  searchSearchBarTitle: React.Dispatch<React.SetStateAction<ISearchForm>>;
}

const SearchComponent = ({ searchSearchBarTitle }: ISearchComponent) => {
  const { register, handleSubmit } = useForm<ISearchForm>();

  const onSubmit = (data: ISearchForm) => {
    searchSearchBarTitle(data);
  };

  return (
    <section className={styles.wrapper}>
      Serach component
      <form onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue="" {...register("searchForm")} />
        <button type="submit">Submit</button>
        <div>
          <input type={"checkbox"} {...register("showAvailalble")} />
          <label>Only show products in stock</label>
        </div>
      </form>
    </section>
  );
};

export default SearchComponent;
