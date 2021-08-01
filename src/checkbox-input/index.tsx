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
   *  onChange handler
   */
  onChange?: () => void;
}

const Label = styled.label`
  display: inline-flex;
  align-items: center;
  height: 3rem;
  width: inherit;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  padding-left: 4px;
  padding-right: 4px;
`

export const CheckboxInput = ({
  id,
  label,
  onChange,
  checked,
  ...props
}: Props) => {
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

  const Input = styled.input`
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    cursor: pointer;
    border: 2px solid blue;
    width: 1.2rem;
    height: 1.2rem;
    margin: 0;
    border-radius: 4px;
    background-color: transparent;
    outline: 0;

    &:checked {
      background-color: blue;
    }
  `

  const Wrapper = styled.div`
    &:focus-within {
      label {
        outline: -webkit-focus-ring-color auto 1px;
      }
    }
  `

  return (
    <Wrapper>
      <Label htmlFor={id} className="label">
        <InputContainer>
          <Input
            {...props}
            id={id}
            name={id}
            type="checkbox"
            onChange={onChange}
          />
        <FaCheck color="white" />
        </InputContainer>
        {label}
      </Label>
    </Wrapper>
  );
};
