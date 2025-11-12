"use client";

import { Recipe } from "@/types";
import { useState } from "react";

interface RecipeSelectorProps {
  recipes: Recipe[];
  selectedRecipes: Set<string>;
  onSelectionChange: (selected: Set<string>) => void;
}

export default function RecipeSelector({
  recipes,
  selectedRecipes,
  onSelectionChange,
}: RecipeSelectorProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const recipesA = recipes.filter((r) => r.category === "A");
  const recipesB = recipes.filter((r) => r.category === "B");

  const handleToggle = (recipeId: string) => {
    const newSelected = new Set(selectedRecipes);
    if (newSelected.has(recipeId)) {
      newSelected.delete(recipeId);
    } else {
      newSelected.add(recipeId);
    }
    onSelectionChange(newSelected);
  };

  const handleSelectAll = (category?: "A" | "B") => {
    const recipesToSelect = category
      ? recipes.filter((r) => r.category === category)
      : recipes;
    const newSelected = new Set(selectedRecipes);
    recipesToSelect.forEach((r) => newSelected.add(r.id));
    onSelectionChange(newSelected);
  };

  const handleDeselectAll = (category?: "A" | "B") => {
    const recipesToDeselect = category
      ? recipes.filter((r) => r.category === category)
      : recipes;
    const newSelected = new Set(selectedRecipes);
    recipesToDeselect.forEach((r) => newSelected.delete(r.id));
    onSelectionChange(newSelected);
  };

  const selectedCountA = recipesA.filter((r) => selectedRecipes.has(r.id)).length;
  const selectedCountB = recipesB.filter((r) => selectedRecipes.has(r.id)).length;
  const totalSelected = selectedRecipes.size;

  return (
    <div className="bg-gradient-to-r from-blue-400 to-blue-500 text-white rounded-2xl shadow-lg p-6 mb-8">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-1">
            ✅ Välj recept för PDF-export
          </h3>
          <p className="text-blue-50 text-sm">
            {totalSelected} av {recipes.length} recept valda (A: {selectedCountA}/{recipesA.length}, B: {selectedCountB}/{recipesB.length})
          </p>
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-colors shadow-md hover:shadow-lg"
        >
          {isExpanded ? "Dölj" : "Visa val"}
        </button>
      </div>

      {isExpanded && (
        <div className="mt-6 space-y-6">
          {/* Snabbval */}
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => handleSelectAll()}
              className="px-4 py-2 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition-colors text-sm"
            >
              Välj alla
            </button>
            <button
              onClick={() => handleDeselectAll()}
              className="px-4 py-2 bg-blue-300 text-white font-semibold rounded-lg hover:bg-blue-400 transition-colors text-sm"
            >
              Avmarkera alla
            </button>
            <button
              onClick={() => handleSelectAll("A")}
              className="px-4 py-2 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition-colors text-sm"
            >
              Välj alla A
            </button>
            <button
              onClick={() => handleDeselectAll("A")}
              className="px-4 py-2 bg-blue-300 text-white font-semibold rounded-lg hover:bg-blue-400 transition-colors text-sm"
            >
              Avmarkera alla A
            </button>
            <button
              onClick={() => handleSelectAll("B")}
              className="px-4 py-2 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition-colors text-sm"
            >
              Välj alla B
            </button>
            <button
              onClick={() => handleDeselectAll("B")}
              className="px-4 py-2 bg-blue-300 text-white font-semibold rounded-lg hover:bg-blue-400 transition-colors text-sm"
            >
              Avmarkera alla B
            </button>
          </div>

          {/* Kategori A */}
          <div className="bg-white/10 rounded-xl p-4">
            <h4 className="text-lg font-bold mb-3">Måltider kategori A</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {recipesA.map((recipe) => (
                <label
                  key={recipe.id}
                  className="flex items-center gap-2 cursor-pointer bg-white/10 hover:bg-white/20 rounded-lg p-3 transition-colors"
                >
                  <input
                    type="checkbox"
                    checked={selectedRecipes.has(recipe.id)}
                    onChange={() => handleToggle(recipe.id)}
                    className="w-5 h-5 rounded border-2 border-white/50 text-blue-600 focus:ring-2 focus:ring-blue-300 cursor-pointer"
                  />
                  <span className="text-sm font-medium">{recipe.title}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Kategori B */}
          <div className="bg-white/10 rounded-xl p-4">
            <h4 className="text-lg font-bold mb-3">Måltider kategori B</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {recipesB.map((recipe) => (
                <label
                  key={recipe.id}
                  className="flex items-center gap-2 cursor-pointer bg-white/10 hover:bg-white/20 rounded-lg p-3 transition-colors"
                >
                  <input
                    type="checkbox"
                    checked={selectedRecipes.has(recipe.id)}
                    onChange={() => handleToggle(recipe.id)}
                    className="w-5 h-5 rounded border-2 border-white/50 text-blue-600 focus:ring-2 focus:ring-blue-300 cursor-pointer"
                  />
                  <span className="text-sm font-medium">{recipe.title}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

