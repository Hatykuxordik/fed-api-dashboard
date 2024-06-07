function DiagnosticList({ diagnosticList }) {
  return (
    <section className="bg-white p-4 rounded-2xl shadow-md h-1/3 overflow-hidden">
      <h2 className="text-xl font-bold text-black mb-6">Diagnostic List</h2>

      <div className="flex p-3 bg-[#F6F7F8] rounded-full mr-8">
        <div className="w-1/4 font-bold text-[#072635] text-xs">
          Problem/Diagnosis
        </div>
        <div className="w-2/4 font-bold text-[#072635] text-xs">
          Description
        </div>
        <div className="w-1/4 font-bold text-[#072635] text-xs">Status</div>
      </div>

      <div className="h-[50%] flex flex-col pr-8 overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-400 scrollbar-track-zinc-200">
        {diagnosticList?.map((listItem) => (
          <ul
            className="flex items-center p-4 last:pt-4 border-b last:border-none border-gray-200"
            key={listItem.name}
          >
            <li className="w-1/4 text-[#072635] text-xs">{listItem.name}</li>
            <li className="w-2/4 text-[#072635] text-xs">
              {listItem.description}
            </li>
            <li className="w-1/4 text-[#072635] text-xs">{listItem.status}</li>
          </ul>
        ))}
      </div>
    </section>
  );
}
export default DiagnosticList;
