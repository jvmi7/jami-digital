import classNames from 'classnames';
import { motion } from 'framer-motion';

import styles from '@/components/Button/Button.module.scss';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { buttonHoverScale, buttonTransition, buttonVariants } from '@/constants/animations';
interface ButtonProps {
  variant: 'primary' | 'secondary';
  children: React.ReactNode;
  isIcon?: boolean;
  onClick?: () => void;
  hoverScale?: number;
  href?: string;
  tooltip?: string;
  tooltipSide?: 'top' | 'bottom';
}

const Button = ({
  variant,
  children,
  isIcon,
  onClick,
  hoverScale,
  href,
  tooltip,
  tooltipSide = 'bottom',
}: ButtonProps) => {
  const hoveredScale = hoverScale ? hoverScale : isIcon ? 1.1 : buttonHoverScale;
  const sharedProps = {
    className: classNames(
      styles.button,
      variant === 'primary' && styles.primary,
      variant === 'secondary' && styles.secondary
    ),
    style: {
      padding: isIcon ? '0px' : '8px 22px',
      width: isIcon ? '46px' : 'auto',
      height: isIcon ? '46px' : 'auto',
    },
    variants: buttonVariants(hoveredScale),
    transition: buttonTransition,
    whileHover: 'hover',
  };

  const buttonElement = href ? (
    <motion.a href={href} {...sharedProps} target="_blank">
      {children}
    </motion.a>
  ) : (
    <motion.button onClick={onClick} {...sharedProps}>
      {children}
    </motion.button>
  );

  return tooltip ? (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{buttonElement}</TooltipTrigger>
        <TooltipContent side={tooltipSide}>
          <p>{tooltip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ) : (
    buttonElement
  );
};

export default Button;
