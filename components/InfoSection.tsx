interface InfoSectionProps {
  info: string;
}

export default function InfoSection({ info }: InfoSectionProps) {
  const paragraphs = info.split("\n\n");

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Information period 1 (v.1–2)
      </h2>
      <div className="space-y-4 text-gray-800 leading-relaxed">
        {paragraphs.map((paragraph, idx) => (
          <p key={idx} className="text-base">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}




