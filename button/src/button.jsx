import * as React from 'react';
const { useRef } = React;
// import type { ElementType, HTMLAttributes } from 'react';
// import type { AriaButtonProps } from '@react-types/button';
import { useButton } from '@react-aria/button';
import styles from './button.module.scss';

// export ButtonProps {
//   /**
//   Use the size prop to change the size of the button. You can set the value to 'small', 'medium' or 'large'.
//    */
//   size?: 'small' | 'medium' | 'large';
//   /**
//   Use the size prop to change the size of the button. You can set the value to 'small', 'medium' or 'large'.
//    */
//   type?: string 'primary' | 'secondary' | 'outline' | 'destructive';
//   /**
//   Boolean flag indicating if should render as 'primary' variation.
//    */
//   // primary?: boolean;
//   /**
//   Boolean flag indicating if should render as 'secondary' variation.
//    */
//   // secondary?: boolean;
// };

/**
  The Button component is used to trigger an action or event, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation.
*/
export const Button = ({
  size = 'medium',
  type = 'primary',
  // primary = true,
  // secondary = false,
  ...rest
}) => {
  const ref = useRef();
  const { buttonProps } = useButton(rest, ref);
  const { children } = rest;

  // Below line is removed from Button props
  // ${secondary ? styles.secondary : ''}

  return (
    <button
      {...buttonProps}
      ref={ref}
      className={`
      ${styles.button} ${styles[size]} ${styles[type]}
      ${rest.isDisabled ? styles.disabled : ''}
      `}
    >
      {children}
    </button>
  );
};
