import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';

export default function Button({
  className,
  type = 'button',
  handleClick,
  children,
  name = '',
  ...props
}) {
  const defaultClassName =
    'border rounded-lg px-3 py-2 font-medium relative overflow-hidden';

  const combinedClassName = className
    ? `${defaultClassName} ${className}`
    : defaultClassName;

  const buttonRef = useRef(null);

  const ripplesLimit = 5; // Max number of active ripples
  const ripples = [];

  useEffect(() => {
    const button = buttonRef.current;

    const createRipple = (event) => {
      const circle = document.createElement('span');
      const diameter = Math.max(button.clientWidth, button.clientHeight);
      const radius = diameter / 2;
      circle.style.width = circle.style.height = `${diameter}px`;
      circle.style.left = `${
        event.clientX - button.getBoundingClientRect().left - radius
      }px`;
      circle.style.top = `${
        event.clientY - button.getBoundingClientRect().top - radius
      }px`;
      circle.classList.add('ripple');
      const ripple = button.getElementsByClassName('ripple')[0];
      if (ripple) ripple.remove();
      button.appendChild(circle);
      ripples.push(circle);

      if (ripples.length > ripplesLimit) {
        const firstRipple = ripples.shift();
        firstRipple.remove();
      }
    };

    button.addEventListener('mousedown', createRipple);
    button.addEventListener('animationend', (e) => {
      e.target.remove();
    });

    return () => {
      button.removeEventListener('click', createRipple);
      button.removeEventListener('animationend', (e) => {
        e.target.remove();
      });
    };
  });

  return (
    <button
      className={combinedClassName}
      name={name}
      type={type}
      onClick={handleClick}
      ref={buttonRef}
      {...props}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  handleClick: PropTypes.func,
  children: PropTypes.any,
  name: PropTypes.string,
};
