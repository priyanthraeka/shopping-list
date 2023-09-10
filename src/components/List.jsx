import { FaTrashAlt } from "react-icons/fa";
import { SHOPPING_LIST } from "../constants/shopping-list";

const List = () => {
  return (
    <div className="h-[calc(100vh-320px)] bg-paper bg-cover text-black px-3 text-5xl">
      <ul className="flex flex-col gap-12 pt-7">
        {SHOPPING_LIST.map((item, index) => (
          <li key={index} className="flex items-center">
            <input
              type="checkbox"
              className="w-6 h-6"
              checked={item.complete}
            />
            <span className={`ms-10 ${item.complete && "line-through"}`}>
              {item.qty + " " + item.name}
            </span>
            <FaTrashAlt size={30} color="red" className="ms-auto" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
