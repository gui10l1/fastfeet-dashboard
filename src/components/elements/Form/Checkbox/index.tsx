import { useCallback, useState, forwardRef, InputHTMLAttributes } from 'react';
import { FiCheck } from 'react-icons/fi';

import { Container } from './styles';

type ICheckbox = InputHTMLAttributes<HTMLLabelElement>;

const Checkbox = forwardRef<HTMLLabelElement, ICheckbox>(({ ...rest }, ref) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckbox = useCallback(() => {
    setIsChecked(!isChecked);
  }, [isChecked]);

  return (
    <Container isChecked={Number(isChecked)} {...rest} ref={ref}>
      <input type="checkbox" onChange={handleCheckbox} />
      <FiCheck size={20} />
    </Container>
  );
});

export { Checkbox };
