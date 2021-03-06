import React, {MutableRefObject, useCallback, useRef, useState} from 'react';
import {
  KeyboardTypeOptions,
  ReturnKeyTypeOptions,
  StyleProp,
  StyleSheet,
  TextInput as Original,
  View,
  ViewStyle,
} from 'react-native';
import {useColor} from '../../hooks';
import {Color} from '../../models';
import {config, FontEmphasis, FontType, getFontStyles} from '../../utils';
import {PointerEvents, TextContentType} from './types';

/*
styling https://uxdesign.cc/design-better-forms-96fadca0f49c
*/

interface Props {
  type?: FontType;
  emphasis?: FontEmphasis;
  autoCorrect?: boolean;
  blurOnSubmit?: boolean;
  disableFullscreenUI?: boolean;
  backgroundColor?: string;
  editable?: boolean;
  error?: string;
  keyboardType?: KeyboardTypeOptions;
  placeholder?: string;
  returnKeyType?: ReturnKeyTypeOptions;
  textContentType?: TextContentType;
  secureTextEntry?: boolean;
  style?: StyleProp<ViewStyle>;
  color?: keyof Color;
  pointerEvents?: PointerEvents;
  value: string;
  flex?: boolean;
  onChangeText(text: string): void;
  onSubmitEditing?(): void;
  onFocus?(): void;
  onBlur?(): void;
  onRef?: MutableRefObject<Original | null>;
  multiline?: boolean;
  numberOfLines?: number;
}

export const TextInput = ({
  autoCorrect,
  pointerEvents,
  blurOnSubmit = true,
  disableFullscreenUI = true,

  editable = true,
  error = '',
  backgroundColor,
  keyboardType,
  numberOfLines,
  onChangeText,
  onSubmitEditing,
  onFocus,
  onBlur,
  placeholder,
  returnKeyType,
  secureTextEntry,
  textContentType = 'none',
  style,
  value,
  onRef,
  color,
  emphasis,
  multiline,
  type,
  flex,
}: Props): JSX.Element => {
  const [focus, setFocus] = useState(false);
  const colorScheme = useColor();
  const focusColor = colorScheme.primary;
  const backColor = backgroundColor || colorScheme.background;
  const {fontSize, textColor} = getFontStyles({
    emphasis,
    type,
    color,
    colorScheme,
  });
  const styles = StyleSheet.create({
    borderError: {
      borderBottomColor: colorScheme.danger,
    },
    borderFocus: {
      borderBottomColor: focusColor,
    },
    flex: {
      flex: 1,
    },
    textInput: {
      backgroundColor: backColor,
      borderBottomColor: backColor,
      borderLeftColor: backColor,
      borderRadius: config.padding(1),
      borderRightColor: backColor,
      borderTopColor: backColor,
      borderWidth: 2,
      color: textColor,
      padding: config.padding(2),
    },
  });
  const textInput = useRef<Original | null>(null);
  const textInputStyles = [
    styles.textInput,
    fontSize,
    error ? styles.borderError : undefined,
    focus ? styles.borderFocus : undefined,
    style,
  ];
  const containerStyles = [flex ? styles.flex : undefined];

  const didFocus = useCallback(() => {
    setFocus(true);
    if (onFocus) onFocus();
  }, [onFocus]);
  const didBlur = useCallback(() => {
    setFocus(false);
    if (onBlur) onBlur();
  }, [onBlur]);
  const onInternalRef = useCallback(
    (ref: Original | null) => {
      if (!ref) return;
      textInput.current = ref;
      if (onRef) onRef.current = ref;
    },
    [onRef],
  );

  return (
    <View style={containerStyles}>
      <Original
        autoCorrect={autoCorrect}
        blurOnSubmit={blurOnSubmit}
        disableFullscreenUI={disableFullscreenUI}
        editable={editable}
        keyboardType={keyboardType}
        multiline={multiline}
        numberOfLines={numberOfLines}
        onBlur={didBlur}
        onChangeText={onChangeText}
        onFocus={didFocus}
        onSubmitEditing={onSubmitEditing}
        placeholder={placeholder}
        placeholderTextColor={colorScheme.secondary}
        pointerEvents={pointerEvents}
        ref={onInternalRef}
        returnKeyType={returnKeyType}
        secureTextEntry={secureTextEntry}
        selectionColor={focusColor}
        style={textInputStyles}
        textContentType={textContentType}
        underlineColorAndroid="transparent"
        value={value}
      />
    </View>
  );
};
