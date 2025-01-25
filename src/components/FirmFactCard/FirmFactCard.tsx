import React, { useState } from 'react';
import styles from './FirmFactCard.module.scss';
import Button from '../Button/Button';

interface FirmFactCardProps {
  variant: 'default' | 'border';
  state?: 'initial' | 'hover' | 'disabled';
  content: string;
  className?: string;
  isSpecialCard7?: boolean;
}

const FirmFactCard: React.FC<FirmFactCardProps> = ({
  variant,
  state = 'initial',
  content,
  className,
  isSpecialCard7
}) => {
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseEnter() {
    setIsHovered(true);
  }
  function handleMouseLeave() {
    setIsHovered(false);
  }

  const cardClasses = [
    styles.card,
    styles[variant],
    styles[state],
    className
  ].join(' ');

  const isButtonOverrideActive =
    state !== 'disabled' &&
    isHovered &&
    (variant === 'default' || isSpecialCard7 === true);

  return (
    <div
      className={cardClasses}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Button
        variant="icon"
        state={state === 'disabled' ? 'disabled' : 'initial'}
        label={content}
        isCardHovered={isButtonOverrideActive}
      />
    </div>
  );
};

export default FirmFactCard;
