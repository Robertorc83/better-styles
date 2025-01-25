import React from 'react';
import { FiSearch } from 'react-icons/fi';
import styles from './Button.module.scss';

interface ButtonProps {
  variant: 'default' | 'icon';
  state?: 'initial' | 'hover' | 'disabled';
  label: string;
  isCardHovered?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant,
  state = 'initial',
  label,
  isCardHovered
}) => {
  const classList = [styles.button, styles[variant]];
  if (state === 'disabled') classList.push(styles.disabled);

  if (isCardHovered) {
    classList.push(styles.cardHoverOverride);
  }

  const classNames = classList.join(' ');

  return (
    <button className={classNames} disabled={state === 'disabled'}>
      {variant === 'icon' && <FiSearch className={styles.icon} />}
      <span>{label}</span>
    </button>
  );
};

export default Button;
