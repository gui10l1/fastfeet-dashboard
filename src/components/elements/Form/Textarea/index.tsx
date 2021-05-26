import {
  FC,
  FocusEvent,
  TextareaHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useField } from '@unform/core';

import { Tooltip } from '../../Tooltip';
import { Container, TextareaStyled, Label } from './styles';

interface ITextarea extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
}

const Textarea: FC<ITextarea> = ({
  name,
  label,
  autoFocus,
  onBlur,
  onFocus,
  children,
  ...rest
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  const [isFocused, setIsFocused] = useState(!!autoFocus);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: textareaRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  const handleBlur = useCallback(
    (e: FocusEvent<HTMLTextAreaElement>) => {
      setIsFocused(false);

      if (onBlur) {
        onBlur(e);
      }
    },
    [onBlur],
  );

  const handleFocus = useCallback(
    (e: FocusEvent<HTMLTextAreaElement>) => {
      setIsFocused(true);

      if (onFocus) {
        onFocus(e);
      }
    },
    [onFocus],
  );

  return (
    <Container>
      <Label>{label}</Label>
      <TextareaStyled
        isFocused={isFocused}
        name={name}
        ref={textareaRef}
        defaultValue={defaultValue}
        onBlur={handleBlur}
        onFocus={handleFocus}
        {...rest}
      >
        {children}
      </TextareaStyled>
      {error && (
        <Tooltip
          type="error"
          style={{ position: 'absolute', right: 15, top: 40 }}
        >
          {error}
        </Tooltip>
      )}
    </Container>
  );
};

export { Textarea };
