import { Recipe } from "@/types";
import Image from "next/image";

interface RecipeCardProps {
  recipe: Recipe;
  client1Name?: string;
  client2Name?: string;
}

export default function RecipeCard({ recipe, client1Name = "P1", client2Name = "P2" }: RecipeCardProps) {
  const hasClient2 = client2Name && client2Name.length > 0;

  return (
    <div className="bg-white rounded-b-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      {/* Recipe image */}
      <div className="relative w-full h-56 bg-gradient-to-br from-accent-100 to-blue-100">
        {recipe.image ? (
          <Image
            src={recipe.image}
            alt={recipe.title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-accent-300 opacity-40">
            {recipe.id}
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          {recipe.title}
        </h3>

        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
            Ingredienser
          </h4>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100 border-b border-gray-300">
                  <th className="text-left py-2 px-3 text-gray-800 font-semibold">
                    Ingrediens
                  </th>
                  <th className="text-right py-2 px-3 text-gray-800 font-semibold">
                    {client1Name}
                  </th>
                  {hasClient2 && (
                    <>
                  <th className="text-right py-2 px-3 text-gray-800 font-semibold">
                    {client2Name}
                  </th>
                  <th className="text-right py-2 px-3 text-gray-800 font-semibold">
                    Totalt
                  </th>
                    </>
                  )}
                </tr>
              </thead>
              <tbody>
                {recipe.ingredients.map((ingredient, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-gray-200 hover:bg-gray-50"
                  >
                    <td className="py-2 px-3 text-gray-900">
                      {ingredient.name}
                    </td>
                    <td className="py-2 px-3 text-right text-gray-800 font-medium">
                      {Math.round(ingredient.p1)} g
                    </td>
                    {hasClient2 && (
                      <>
                    <td className="py-2 px-3 text-right text-gray-800 font-medium">
                      {Math.round(ingredient.p2)} g
                    </td>
                    <td className="py-2 px-3 text-right text-gray-900 font-semibold">
                      {Math.round(ingredient.tot)} g
                    </td>
                      </>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
            Instruktioner
          </h4>
          <ol className="space-y-2 list-decimal list-inside">
            {recipe.steps.map((step, idx) => (
              <li key={idx} className="text-gray-800 leading-relaxed">
                {step}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}




