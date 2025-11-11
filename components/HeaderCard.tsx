import { Client, Metrics } from "@/types";

interface HeaderCardProps {
  title: string;
  weeks: string;
  clients: [Client, Client];
  metrics: Metrics;
}

export default function HeaderCard({
  title,
  weeks,
  clients,
  metrics,
}: HeaderCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
        {title}
      </h1>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {clients.map((client, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-br from-accent-50 to-blue-50 rounded-xl p-6 border border-accent-200"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              {client.name}
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-gray-700 font-medium">Vikt:</span>
                <span className="text-gray-900 font-semibold text-lg">
                  {Math.round(client.viktKg)} kg
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700 font-medium">Fett%:</span>
                <span className="text-gray-900 font-semibold text-lg">
                  {Math.round(client.fettProcent)}%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Nyckeltal</h3>
        <div className="space-y-6">
          <div>
            <p className="text-gray-700 font-medium mb-3">
              Frukt kcal per dag:
            </p>
            <div className="space-y-1 mb-1">
              <p className="text-gray-900 font-semibold">
                Person 1: {Math.round(metrics.fruktKcalPerDag[0])} kcal
              </p>
              <p className="text-gray-900 font-semibold">
                Person 2: {Math.round(metrics.fruktKcalPerDag[1])} kcal
              </p>
            </div>
          </div>

          <div>
            <p className="text-gray-700 font-medium mb-3">
              Fria kcal per vecka:
            </p>
            <div className="space-y-1 mb-1">
              <p className="text-gray-900 font-semibold">
                Person 1: {Math.round(metrics.friaKcalPerVecka[0])} kcal
              </p>
              <p className="text-gray-900 font-semibold">
                Person 2: {Math.round(metrics.friaKcalPerVecka[1])} kcal
              </p>
            </div>
          </div>

          <div>
            <p className="text-gray-700 font-medium mb-3">
              Extra kolhydrater inför högintensivt pass (totalt):
            </p>
            <div className="space-y-1 mb-1">
              <p className="text-gray-900 font-semibold">
                Person 1: {Math.round(metrics.extraKHInforHI[0])} g
              </p>
              <p className="text-gray-900 font-semibold">
                Person 2: {Math.round(metrics.extraKHInforHI[1])} g
              </p>
            </div>
          </div>

          <div>
            <p className="text-gray-700 font-medium mb-3">
              Kolhydrater under längre pass (enl. instruktion):
            </p>
            <div className="space-y-1 mb-1">
              <p className="text-gray-900 font-semibold">
                Person 1: {Math.round(metrics.KHUnderLangtPass[0])} g/h
              </p>
              <p className="text-gray-900 font-semibold">
                Person 2: {Math.round(metrics.KHUnderLangtPass[1])} g/h
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}




