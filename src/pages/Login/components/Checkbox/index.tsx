import { FC, useCallback, useState } from 'react';
import { FiCheck } from 'react-icons/fi';

import { Container } from './styles';

const Checkbox: FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckbox = useCallback(() => {
    setIsChecked(!isChecked);
  }, [isChecked]);

  return (
    <Container isChecked={Number(isChecked)}>
      <input type="checkbox" id="rememberMe" onChange={handleCheckbox} />
      <FiCheck size={20} />
    </Container>
  );
};

export { Checkbox };
