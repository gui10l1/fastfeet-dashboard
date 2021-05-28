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
import { FiAlertCircle, FiPlus } from 'react-icons/fi';
import { Tooltip } from '../../Tooltip';

import {
  Container,
  Label,
  Content,
  ChildrenContainer,
  AlertContainer,
  Alert,
} from './styles';

interface IInputFile extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  boxLabel: string;
  alert?: string;
}

const InputFile: FC<IInputFile> = ({
  name,
  label,
  boxLabel,
  alert,
  autoFocus,
  onFocus,
  onBlur,
  children,
  ...rest
}) => {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const { defaultValue, error, fieldName, registerField } = useField(name);

  const [isFilled, setIsFilled] = useState(!!defaultValue);
  const [isFocused, setIsFocused] = useState(!!autoFocus);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputFileRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  const handleBlur = useCallback(
    (e: FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      setIsFilled(!!inputFileRef.current?.value);

      if (onBlur) {
        onBlur(e);
      }
    },
    [onBlur],
  );

  const handleFocus = useCallback(
    (e: FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);

      setIsFilled(!!inputFileRef.current?.value);

      if (onFocus) {
        onFocus(e);
      }
    },
    [onFocus],
  );

  return (
    <Container>
      <AlertContainer>
        <Label htmlFor={label.toLowerCase().replace(' ', '-')}>{label}</Label>

        {alert && (
          <Alert>
            <FiAlertCircle size={20} />

            {alert}
          </Alert>
        )}
      </AlertContainer>
      <Content isFilled={isFilled} isFocused={isFocused}>
        <ChildrenContainer>{children}</ChildrenContainer>

        {!children && (
          <span>
            <FiPlus size={24} />
            {boxLabel}
          </span>
        )}

        <input
          name={name}
          ref={inputFileRef}
          defaultValue={defaultValue}
          onBlur={handleBlur}
          onFocus={handleFocus}
          {...rest}
          type="file"
          id={label.toLowerCase().replace(' ', '-')}
        />

        {error && <Tooltip type="error">{error}</Tooltip>}
      </Content>
    </Container>
  );
};

export { InputFile };
