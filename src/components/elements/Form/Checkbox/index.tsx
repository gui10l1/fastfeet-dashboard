import {
  FC,
  InputHTMLAttributes,
  MouseEvent,
  useCallback,
  useState,
} from 'react';
import { FiCheck } from 'react-icons/fi';

import { Container } from './styles';

const Checkbox: FC<InputHTMLAttributes<HTMLInputElement>> = ({
  onClick,
  ...rest
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleOnClick = useCallback(
    (e: MouseEvent<HTMLInputElement>) => {
      if (onClick) {
        onClick(e);
      }

      setIsChecked(!isChecked);
    },
    [onClick, isChecked],
  );

  return (
    <Container isChecked={Number(isChecked)}>
      <FiCheck />
      <input type="checkbox" onClick={handleOnClick} {...rest} />
    </Container>
  );
};

export { Checkbox };
