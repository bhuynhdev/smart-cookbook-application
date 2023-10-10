import { useBearStore } from '../pages/root';
import { useShallow } from 'zustand/react/shallow';

export default function SmartDevice() {
  // Zustand Bear store
  const { nextStep, prevStep } = useBearStore(state => ({ nextStep: state.nextStep, prevStep: state.prevStep }));
  const { step, recipe } = useBearStore(useShallow(state => ({ step: state.step, recipe: state.recipe })));

  return (
    <div className="device h-[450px] w-[700px] rounded-lg border-2 border-violet-800">
      <p className="text-center">Device camera</p>
      <div className="grid grid-cols-3">
        {step > 0 && (
          <button type="button" onClick={prevStep} className="w-24">
            Prev
          </button>
        )}
        <div>
          <p>Step {step}:</p>
          <p>{recipe.directions[step]}</p>
        </div>
        {step < recipe.directions.length - 1 && (
          <button type="button" onClick={nextStep} className="w-24">
            Next
          </button>
        )}
      </div>
    </div>
  );
}
