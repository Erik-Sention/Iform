import { Snacks } from "@/types";

interface SnacksSectionProps {
  snacks: Snacks;
  client1Name: string;
  client2Name: string;
}

export default function SnacksSection({ snacks, client1Name, client2Name }: SnacksSectionProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Mellanmål</h2>

      <div className="flex flex-col md:flex-row print:flex-col gap-8">
        <div className="flex-1 bg-green-50 rounded-xl p-6 border border-green-200">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Kategori A (välj ett)
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-green-100 border-b border-green-300">
                  <th className="text-left py-2 px-3 text-gray-800 font-semibold">
                    Alternativ
                  </th>
                  <th className="text-right py-2 px-3 text-gray-800 font-semibold">
                    {client1Name}
                  </th>
                  <th className="text-right py-2 px-3 text-gray-800 font-semibold">
                    {client2Name}
                  </th>
                  <th className="text-right py-2 px-3 text-gray-800 font-semibold">
                    Totalt
                  </th>
                </tr>
              </thead>
              <tbody>
                {snacks.A.map((snack, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-green-200 hover:bg-green-50"
                  >
                    <td className="py-2 px-3 text-gray-900">{snack.name}</td>
                    <td className="py-2 px-3 text-right text-gray-800 font-medium">
                      {Math.round(snack.p1)} g
                    </td>
                    <td className="py-2 px-3 text-right text-gray-800 font-medium">
                      {Math.round(snack.p2)} g
                    </td>
                    <td className="py-2 px-3 text-right text-gray-900 font-semibold">
                      {Math.round(snack.tot)} g
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex-1 bg-orange-50 rounded-xl p-6 border border-orange-200">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Kategori B (välj ett)
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-orange-100 border-b border-orange-300">
                  <th className="text-left py-2 px-3 text-gray-800 font-semibold">
                    Alternativ
                  </th>
                  <th className="text-right py-2 px-3 text-gray-800 font-semibold">
                    {client1Name}
                  </th>
                  <th className="text-right py-2 px-3 text-gray-800 font-semibold">
                    {client2Name}
                  </th>
                  <th className="text-right py-2 px-3 text-gray-800 font-semibold">
                    Totalt
                  </th>
                </tr>
              </thead>
              <tbody>
                {snacks.B.map((snack, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-orange-200 hover:bg-orange-50"
                  >
                    <td className="py-2 px-3 text-gray-900">{snack.name}</td>
                    <td className="py-2 px-3 text-right text-gray-800 font-medium">
                      {Math.round(snack.p1)} g
                    </td>
                    <td className="py-2 px-3 text-right text-gray-800 font-medium">
                      {Math.round(snack.p2)} g
                    </td>
                    <td className="py-2 px-3 text-right text-gray-900 font-semibold">
                      {Math.round(snack.tot)} g
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}




