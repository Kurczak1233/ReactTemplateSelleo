import { useMemo } from "react";
import { database, IDatabaseObject } from "../../../data/utils";
import { ISearchForm } from "../SearchComponent/SearchComponent";
import FruitsAndVegetablesItem from "./FruitsAndVegetablesItem/FruitsAndVegetablesItem";
import styles from "./FrutitsAndVegetablesTable.module.scss";
interface IFrutitsAndVegetablesTable {
  searchTtems: ISearchForm | undefined;
}

export interface IMappedGroup {
  groupName: IDatabaseObject[];
}

const FrutitsAndVegetablesTable = ({
  searchTtems,
}: IFrutitsAndVegetablesTable) => {
  const groupedArrys: any[] = useMemo(() => {
    const result: any[] = database.reduce((rv, x) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      (rv[x["category"]] = rv[x["category"]] || []).push(x);
      return rv;
    }, []);
    return result;
  }, [database]);

  console.log(groupedArrys);

  const getObjKey = (obj: any, value: string) => {
    type ObjectKey = keyof typeof obj;
    return obj[value as ObjectKey];
  };

  const fruits = useMemo(() => {
    let mappedItems = [...database];
    mappedItems = mappedItems.filter((item) => item.category === "Fruits");
    mappedItems = searchTtems?.showAvailalble
      ? mappedItems.filter((item) => item.stocked)
      : mappedItems;
    mappedItems = searchTtems?.searchForm
      ? mappedItems.filter((item) => item.name.includes(searchTtems.searchForm))
      : mappedItems;
    return mappedItems;
  }, [searchTtems]);

  const vegetables = useMemo(() => {
    let mappedItems = [...database];
    mappedItems = mappedItems.filter((item) => item.category === "Vegetables");
    mappedItems = searchTtems?.showAvailalble
      ? mappedItems.filter((item) => item.stocked)
      : mappedItems;
    mappedItems = searchTtems?.searchForm
      ? mappedItems.filter((item) => item.name.includes(searchTtems.searchForm))
      : mappedItems;
    return mappedItems;
  }, [searchTtems]);

  return (
    // Static solution
    <section className={styles.wrapper}>
      <div>
        <span>Name</span>
        <span>Price</span>
      </div>
      {fruits.length > 0 && (
        <div>
          <b>Fruits</b>
        </div>
      )}
      {fruits.map((item) => {
        return <FruitsAndVegetablesItem key={item.id} item={item} />;
      })}
      <div>{vegetables.length > 0 && <b>Vegetables</b>}</div>
      {vegetables.map((item) => {
        return <FruitsAndVegetablesItem key={item.id} item={item} />;
      })}

      <br />
      <br />
      <br />
      <br />
      <br />
      {/* Dynamic solution */}
      {Object.keys(groupedArrys).map((item) => (
        <div key={item}>
          <b>{item}</b>
          {getObjKey(groupedArrys, item).map((subItem: IDatabaseObject) => {
            return (
              <div key={subItem.id}>
                <FruitsAndVegetablesItem item={subItem} />
              </div>
            );
          })}
        </div>
      ))}
    </section>
  );
};

export default FrutitsAndVegetablesTable;
