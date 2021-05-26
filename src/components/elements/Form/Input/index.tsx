import { useField } from '@unform/core';
import {
  FC,
  FocusEvent,
  InputHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { IconType } from 'react-icons';

import { Tooltip } from '../../Tooltip';
import { Container, Label, Content } from './styles';

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  icon?: IconType;
  name: string;
  label: string;
}

const Input: FC<IInput> = ({
  icon: Icon,
  name,
  label,
  autoFocus,
  onFocus,
  onBlur,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { defaultValue, error, fieldName, registerField } = useField(name);

  const [isFilled, setIsFilled] = useState(!!defaultValue);
  const [isFocused, setIsFocused] = useState(!!autoFocus);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  const handleBlur = useCallback(
    (e: FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      setIsFilled(!!inputRef.current?.value);

      if (onBlur) {
        onBlur(e);
      }
    },
    [onBlur],
  );

  const handleFocus = useCallback(
    (e: FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);

      setIsFilled(!!inputRef.current?.value);

      if (onFocus) {
        onFocus(e);
      }
    },
    [onFocus],
  );

  return (
    <Container>
      <Label>{label}</Label>
      <Content isFocused={isFocused} isFilled={isFilled}>
        {Icon && <Icon size={24} />}

        <input
          name={name}
          ref={inputRef}
          defaultValue={defaultValue}
          onBlur={handleBlur}
          onFocus={handleFocus}
          {...rest}
        />

        {error && <Tooltip type="error">{error}</Tooltip>}
      </Content>
    </Container>
  );
};

export { Input };
