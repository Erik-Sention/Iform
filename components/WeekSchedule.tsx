import { WeekSchedule as WeekScheduleType } from "@/types";

interface WeekScheduleProps {
  schedule: WeekScheduleType;
  weeks?: string;
}

export default function WeekSchedule({
  schedule,
  weeks,
}: WeekScheduleProps) {
  const weekText = weeks ? `Veckoschema (${weeks})` : "Veckoschema";

  // Använd måndag som typ A och tisdag som typ B (representativa dagar)
  const typeASchedule = schedule["måndag"];
  const typeBSchedule = schedule["tisdag"];
  
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        {weekText}
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b-2 border-gray-300">
              <th className="text-left py-3 px-4 text-gray-700 font-semibold text-base bg-gray-50">
                Tid
              </th>
              <th className="text-left py-3 px-4 text-gray-700 font-semibold text-base bg-blue-50">
                Mån · Ons · Fre · Sön
              </th>
              <th className="text-left py-3 px-4 text-gray-700 font-semibold text-base bg-green-50">
                Tis · Tor · Lör
              </th>
            </tr>
          </thead>
          <tbody>
            {typeASchedule.times.map((time, idx) => (
              <tr 
                key={idx}
                className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <td className="py-3 px-4 font-semibold text-accent-700 bg-gray-50">
                  {time}
                </td>
                <td className="py-3 px-4 text-gray-800 bg-blue-50/30">
                  {typeASchedule.meals[idx]}
                </td>
                <td className="py-3 px-4 text-gray-800 bg-green-50/30">
                  {typeBSchedule.meals[idx]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}




