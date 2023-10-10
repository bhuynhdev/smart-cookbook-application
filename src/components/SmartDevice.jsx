import { useBearStore } from '../pages/root';

export default function SmartDevice() {
  // Zustand Bear store
  const { nextStep, prevStep } = useBearStore(state => ({ nextStep: state.nextStep, prevStep: state.prevStep }));
  const step = useBearStore(state => state.step)

  return (
    <div className="device h-[450px] w-[700px] rounded-lg border-2 border-violet-800">
      <p className="text-center">Device camera</p>
      <div className='grid grid-cols-3'>
        <button type="button" onClick={prevStep} className='w-24'>Prev</button>
        <div>Recipe step content: {step}</div>
        <button  type="button" onClick={nextStep}>Next</button>
      </div>
    </div>
  );
}
