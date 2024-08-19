import * as React from 'react';
import * as SwitchPrimitives from '@radix-ui/react-switch';
import classNames from 'classnames';

import styles from './Switch.module.scss';

// Assuming these are the correct paths and the icons are properly exported

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> & {
    checked: boolean;
    onCheckedChange: (checked: boolean) => void;
  }
>(({ className, checked, onCheckedChange, ...props }, ref) => {
  return (
    <SwitchPrimitives.Root
      className={classNames(className, styles.root)}
      checked={checked}
      onCheckedChange={onCheckedChange}
      {...props}
      ref={ref}
    >
      <SwitchPrimitives.Thumb className={styles.thumb}></SwitchPrimitives.Thumb>
    </SwitchPrimitives.Root>
  );
});

Switch.displayName = 'Switch';

export { Switch };
