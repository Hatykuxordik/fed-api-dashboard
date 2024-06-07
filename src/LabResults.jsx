function LabResults({ labResults }) {
  return (
    <section className="bg-white p-4 rounded-2xl shadow-md col-start-4">
      <h2 className="text-xl font-bold mb-4">Lab Results</h2>
      <ul className="h-[70%] flex flex-col gap-4 pr-8 overflow-y-scroll scrollbar-thin scrollbar-thumb-zinc-400 scrollbar-track-zinc-200">
        {labResults?.map((result) => (
          <li className="flex justify-between items-center" key={result}>
            <p className="text-xs">{result}</p>
            <button>
              <img src="download.png" alt="Download" className="h-3 w-3" />
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default LabResults;
