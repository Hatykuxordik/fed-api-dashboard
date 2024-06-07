function DiagnosisTitle({ color, title }) {
  return (
    <div className="flex items-center mb-1">
      <span className={`w-3 h-3 ${color} rounded-full mr-2`}></span>
      <span className="text-black font-semibold">{title}</span>
    </div>
  );
}

export default DiagnosisTitle;
