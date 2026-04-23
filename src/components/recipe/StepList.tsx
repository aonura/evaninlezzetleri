import { Lightbulb } from "lucide-react";
import type { RecipeStep } from "@/types";

interface StepListProps {
  steps: RecipeStep[];
}

export default function StepList({ steps }: StepListProps) {
  return (
    <ol className="space-y-4">
      {steps.map((step) => (
        <li key={step.id} className="flex gap-4">
          <span className="flex-none w-8 h-8 rounded-full bg-[#C4603A] text-white text-sm font-bold flex items-center justify-center mt-0.5">
            {step.order}
          </span>
          <div className="flex-1 space-y-2">
            <div className="bg-[#FFFEF9] border border-[#E8DDD0] rounded-xl p-4">
              <p className="text-sm text-[#2C2218] leading-relaxed">
                {step.instruction}
              </p>
            </div>

            {step.tip && (
              <div className="flex gap-2 bg-amber-50 border border-amber-200 rounded-xl p-3">
                <Lightbulb
                  size={15}
                  className="flex-none text-amber-500 mt-0.5"
                />
                <p className="text-xs text-amber-800 leading-relaxed">
                  {step.tip}
                </p>
              </div>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}
