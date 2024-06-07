function DiagnosisCard({ icon, title, value, level, levelColor, dotColor }) {
  return (
    <div className={`bg-${levelColor}-50 p-3 rounded-lg text-left`}>
      <img src={icon} alt={title} className="w-14 h-14 mb-2" />
      <p className="text-[#072635]">{title}</p>
      <div className="text-[1.3rem] font-bold text-black">{value}</div>
      <div className="text-xs text-[#072635]">
        <span>
          {level?.includes("Higher")
            ? "▲ "
            : level?.includes("Lower")
            ? "▼ "
            : ""}
        </span>
        {level}
      </div>
    </div>
  );
}

export default DiagnosisCard;
