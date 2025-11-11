import { WeekSchedule as WeekScheduleType } from "@/types";

interface WeekScheduleProps {
  schedule: WeekScheduleType;
  weeks?: string;
}

export default function WeekSchedule({
  schedule,
  weeks,
}: WeekScheduleProps) {
  const days = [
    "måndag",
    "tisdag",
    "onsdag",
    "torsdag",
    "fredag",
    "lördag",
    "söndag",
  ];

  const dayNames: { [key: string]: string } = {
    måndag: "Måndag",
    tisdag: "Tisdag",
    onsdag: "Onsdag",
    torsdag: "Torsdag",
    fredag: "Fredag",
    lördag: "Lördag",
    söndag: "Söndag",
  };

  const weekText = weeks ? `Veckoschema (${weeks})` : "Veckoschema";

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        {weekText}
      </h2>

      <div className="space-y-6">
        {days.map((day) => {
          const daySchedule = schedule[day];
          return (
            <div
              key={day}
              className="border-l-4 border-accent-500 pl-6 py-2 bg-gray-50 rounded-r-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {dayNames[day]}
              </h3>
              <div className="flex flex-wrap gap-2">
                {daySchedule.times.map((time, idx) => (
                  <div key={idx} className="inline-flex items-center">
                    <span className="text-accent-700 font-semibold">
                      {time}
                    </span>
                    <span className="mx-2 text-gray-800">
                      {daySchedule.meals[idx]}
                    </span>
                    {idx < daySchedule.times.length - 1 && (
                      <span className="text-gray-400 mx-1">·</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}




