import { IDatabaseObject } from "../../../../data/utils";
import styles from "./FruitsAndVegetablesItem.module.scss";
interface IFruitsAndVegetablesItem {
  item: IDatabaseObject;
}

const FruitsAndVegetablesItem = ({ item }: IFruitsAndVegetablesItem) => {
  return (
    <div className={item.stocked ? styles.valid : styles.nonValid}>
      {item.name}
    </div>
  );
};

export default FruitsAndVegetablesItem;
