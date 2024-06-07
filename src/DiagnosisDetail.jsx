import DiagnosisTitle from "./DiagnosisTitle";

function DiagnosisDetail({ title, value, level, dotColor, border }) {
  return (
    <div className={`pb-3 border-${border} border-[#CBC8D4]`}>
      <DiagnosisTitle color={dotColor} title={title} />
      <div className="text-[1.3rem] font-semibold text-black">{value}</div>
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

export default DiagnosisDetail;
