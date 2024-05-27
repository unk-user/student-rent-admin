import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import FormProvider from './context/FormProvider';
import StepProgressbar from './StepProgressbar';
import MutationProvider from './context/MutationProvider';

function InsertPropertyForm() {
  const [step, setStep] = useState(1);
  const location = useLocation();
  const locationArr = location.pathname.split('/');

  useEffect(() => {
    setStep(Number(locationArr[locationArr.length - 1][4]) || 7);
  }, [locationArr]);

  return (
    <FormProvider>
      <MutationProvider>
        <main className="py-4 gap-4 max-8 mx-12 sm:mx-24 lg:mx-28 xl:mx-[180px] 2xl:mx-[380px] flex flex-col justify-center md:flex-1">
          <section className="py-4 pb-10">
            <Outlet />
          </section>
        </main>
        <StepProgressbar
          next={step < 6 ? './step' + (step + 1) : './publish'}
          progress={((step - 1) / 6) * 100}
          step={'step' + step}
        />
      </MutationProvider>
    </FormProvider>
  );
}

export default InsertPropertyForm;
