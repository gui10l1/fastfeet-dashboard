import {
  FC,
  FocusEvent,
  InputHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useField } from '@unform/core';

import { Container } from './styles';
import { Tooltip } from '../../../../components/elements/Tooltip';

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  inputName: string;
  labelText: string;
  inputType?: string;
}

interface ITarget extends EventTarget {
  value: string;
}

const Input: FC<IInput> = ({ inputName, labelText, inputType, ...rest }) => {
  const { registerField, defaultValue, fieldName, error } = useField(inputName);
  const inputRef = useRef<HTMLInputElement>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });

    setIsFilled(!!defaultValue);
  }, [registerField, fieldName, defaultValue]);

  const handleOnFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleOnBlur = useCallback((e: FocusEvent<HTMLInputElement>) => {
    const target = e.target as ITarget;

    setIsFilled(!!target.value);
    setIsFocused(false);
  }, []);

  return (
    <Container isFocused={Number(isFocused)} isFilled={Number(isFilled)}>
      <div>
        <label htmlFor={rest.id}>{labelText}</label>
        <input
          ref={inputRef}
          name={inputName}
          type={inputType}
          id={rest.id}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          defaultValue={defaultValue}
          {...rest}
        />
      </div>
      {!!error && (
        <Tooltip type="error" style={{ marginRight: 8 }}>
          {error}
        </Tooltip>
      )}
    </Container>
  );
};

export { Input };
