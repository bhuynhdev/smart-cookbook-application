import { useBearStore } from '../pages/root';
import { useShallow } from 'zustand/react/shallow';

export default function SmartDevice() {
  // Zustand Bear store
  const { nextStep, prevStep } = useBearStore(state => ({ nextStep: state.nextStep, prevStep: state.prevStep }));
  const { step, recipe } = useBearStore(useShallow(state => ({ step: state.step, recipe: state.recipe })));

  if (!recipe) {
    return <div className="device h-[450px] w-[700px] rounded-lg border-2 border-violet-800">No recipe in session</div>;
  }

  const shouldShowNextButton = step < recipe.directions.length - 1;
  const shouldShowPrevButton = step > 0;

  return (
    <div className="device flex h-[450px] w-[700px] flex-col rounded-lg border-2 border-violet-800">
      <p className="text-center">Device camera</p>
      <div className="flex flex-grow flex-col justify-end p-6">
        <div className="flex-grow">
          <p>Step {step}:</p>
          <p>{recipe.directions[step]}</p>
        </div>
        <div className="flex justify-between">
          <button
            type="button"
            className={`w-24 ${shouldShowPrevButton ? 'rounded-md bg-violet-700 px-1 py-2' : ''}`}
            onClick={prevStep}
            disabled={!shouldShowPrevButton}
          >
            {shouldShowPrevButton ? 'Prev' : ''}
          </button>
          <button type="button" className="w-24 rounded-md bg-red-500 px-1 py-2">
            Food check
          </button>
          <button
            type="button"
            className={`w-24 ${shouldShowNextButton ? 'rounded-md bg-violet-700 px-1 py-2' : ''}`}
            onClick={nextStep}
            disabled={!shouldShowNextButton}
          >
            {shouldShowNextButton ? 'Next' : ''}
          </button>
        </div>
      </div>
    </div>
  );
}
