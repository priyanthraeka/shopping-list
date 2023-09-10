const Form = () => {
  return (
    <div className="bg-[#9EB384] h-16 flex justify-center items-center">
      <span className="me-4 text-2xl hidden md:block">
        Hari ini belanja apa kita?
      </span>
      <form className="flex gap-4">
        <input
          className="p-2 rounded-md w-52 text-black"
          type="text"
          placeholder="Nama Barang"
        />
        <input
          className="p-2 rounded-md w-28 text-black"
          type="number"
          min="1"
          defaultValue="1"
        />
        <button
          className="px-5 py-2 rounded-md border-[#435334] border bg-[#435334] text-white"
          type="submit"
        >
          Tambah
        </button>
      </form>
    </div>
  );
};

export default Form;
