import { SHOPPING_LIST } from "../constants/shopping-list";

const Footer = () => {
  const totalItems = SHOPPING_LIST.length;
  const checkedItems = SHOPPING_LIST.filter(
    (item) => item.complete === true
  ).length;

  const progress = () => {
    return (checkedItems / totalItems) * 100;
  };

  return (
    <div className="bg-[#435334] h-20 flex justify-center items-center">
      {checkedItems}/{totalItems} Barang ({progress() + "%"})
    </div>
  );
};

export default Footer;
