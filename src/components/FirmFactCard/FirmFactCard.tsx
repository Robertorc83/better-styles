import React, { useState } from 'react';
import styles from './FirmFactCard.module.scss';
import Button from '../Button/Button';

interface FirmFactCardProps {
  variant: 'default' | 'icon';
  state?: 'initial' | 'hover' | 'disabled';
  content: string;
  className?: string;
  topAligned?: boolean; 
}

const FirmFactCard: React.FC<FirmFactCardProps> = ({
  variant,
  state = 'initial',
  content,
  className,
  topAligned,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseEnter() {
    setIsHovered(true);
  }
  function handleMouseLeave() {
    setIsHovered(false);
  }

  const cardClasses = `${styles.card} ${className || ''} ${
    topAligned ? styles.topAligned : ''
  } ${state === 'disabled' ? styles.disabled : ''}`;

  const isButtonOverrideActive =
    state !== 'disabled' && isHovered 

  return (
    <div
      className={cardClasses}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Button
        variant={variant}
        state={state === 'disabled' ? 'disabled' : 'initial'}
        label={content}
        isCardHovered={isButtonOverrideActive}
      />
    </div>
  );
};

export default FirmFactCard;
