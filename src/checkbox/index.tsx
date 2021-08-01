import { useState } from 'react';
import styled from 'styled-components';
import { FaCheck } from 'react-icons/fa';


interface Props {
  /**
   * Checkbox contents
   */
  label: string;
  /**
   * Required boolean checked status
  */
  checked: boolean;
  /**
   * Required click handler
   */
  onClick?: () => void;
}

const Component = styled.button`
  display: flex;
  align-items: center;
  height: 3rem;
  background-color: transparent;
  border: 0;
  cursor: pointer;
`

export const Checkbox = ({
  label,
  onClick,
  checked,
  ...props
}: Props) => {
  const [isChecked, setIsChecked] = useState(checked);

  const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1rem;
    height: 1rem;
    background-color: ${isChecked ? 'blue' : 'transparent'};
    margin-right: 0.5rem;
    border-radius: 4px;
    border: 2px solid blue;

    svg {
      display: ${isChecked ? 'block' : 'none'};
    }
  `

  return (
    <Component
    {...props}
    type="button"
    role="checkbox"
    aria-checked={isChecked}
    onClick={() => {
      setIsChecked(!isChecked);
      onClick && onClick();
    }}
    >
      <Box>
        <FaCheck color="white"/>
      </Box>
      {label}
    </Component>
  );
};
