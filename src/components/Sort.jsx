const Sort = () => {
  return (
    <div className="bg-[#9EB384] h-20 flex justify-center items-center gap-4 text-black">
      <select id="cars" className="p-2 rounded-md">
        <option defaultValue="1">Urutkan berdasarkan urutan input</option>
        <option value="2">Urutkan berdasarkan alfabet</option>
        <option value="3">Urutkan berdasarkan centang</option>
      </select>
      <button
        className="px-5 py-2 rounded-md border-[#435334] border bg-[#435334] text-white"
        type="submit"
      >
        Bersihkan List
      </button>
    </div>
  );
};

export default Sort;
