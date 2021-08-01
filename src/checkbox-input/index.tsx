import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import styled from 'styled-components';

interface Props {
  /**
   * Checkbox id
   */
  id: string;
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

const Component = styled.label`
  display: flex;
  align-items: center;
  height: 3rem;
  background-color: transparent;
  border: 0;
  cursor: pointer;
`

export const CheckboxInput = ({
  id,
  label,
  onClick,
  checked,
  ...props
}: Props) => {
  const [isChecked, setIsChecked] = useState(checked);

  const InputContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    svg {
      position: absolute;
      width: .8rem;
    }
  `

  const Box = styled.input`
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    cursor: pointer;
    border: 2px solid blue;
    width: 1.2rem;
    height: 1.2rem;
    margin: 0;
    border-radius: 4px;
    background-color: ${isChecked ? 'blue' : 'transparent'};
  `

  return (
    <Component htmlFor={id}>
      <InputContainer>
        <Box
          {...props}
          id={id}
          type="checkbox"
          aria-checked={isChecked}
          onClick={() => {
            setIsChecked(!isChecked);
            onClick && onClick();
          }}
        />
      <FaCheck color="white" />
      </InputContainer>
      {label}
    </Component>
  );
};
