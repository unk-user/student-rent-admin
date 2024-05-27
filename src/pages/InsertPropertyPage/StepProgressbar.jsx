import PropTypes from 'prop-types';
import Button from '@/components/ui/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { FormContext } from './context/FormProvider';
import { MutationContext } from './context/MutationProvider';

function StepProgressbar({ progress, next, className, step }) {
  const navigate = useNavigate();
  const [transitionValue, setTransitionValue] = useState(0);
  const { stepsValidity } = useContext(FormContext);
  const { uploadImagesMutation } = useContext(MutationContext);

  useEffect(() => {
    let startTime = null;

    const animtaionStep = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const value = Math.min((timestamp - startTime) / 750, 1);
      setTransitionValue(
        (prevTransitionValue) =>
          prevTransitionValue + (progress - prevTransitionValue) * value
      );
      if (value < 1) {
        requestAnimationFrame(animtaionStep);
      }
    };

    requestAnimationFrame(animtaionStep);
  }, [progress]);

  const handleClick = () => {
    if (next && stepsValidity[step]) navigate(next);
  };

  const handlePublish = () => {
    navigate(next);
    uploadImagesMutation.mutate();
  };

  return (
    <div
      className={`w-full relative py-4 pt-5 xl:px-12 px-8 h-[76px] overflow-hidden flex items-center mt-auto text-lg ${className}`}
    >
      <progress
        className="absolute top-0 -left-2 w-[103%] progress rounded-none h-[6px]"
        max="100"
        value={transitionValue}
      ></progress>
      {progress < 100 && (
        <Link
          to=".."
          onClick={(e) => {
            e.preventDefault();
            navigate(-1);
          }}
          className="link"
        >
          Back
        </Link>
      )}
      {step !== 'step6' ? (
        <Button
          handleClick={handleClick}
          className={`ml-auto w-28 ${progress >= 100 && 'disabled'}`}
        >
          Next
        </Button>
      ) : (
        <Button
          handleClick={handlePublish}
          className="ml-auto w-28 bg-slate-600"
        >
          Publish
        </Button>
      )}
    </div>
  );
}

StepProgressbar.propTypes = {
  progress: PropTypes.number,
  next: PropTypes.string,
  className: PropTypes.string,
  step: PropTypes.string,
};

export default StepProgressbar;
