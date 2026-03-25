"use client";

const AboutPeakGuarantee = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div>
      <div className="text-2xl font-bold text-primary mb-1">{title}</div>
      <div className="text-xs text-white/60">{description}n</div>
    </div>
  );
};

export default AboutPeakGuarantee;
