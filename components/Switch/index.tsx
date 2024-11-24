import * as SwitchPrimitives from '@radix-ui/react-switch';
import classNames from 'classnames';
import * as React from 'react';

import styles from '@/components/Switch/Switch.module.scss';

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
