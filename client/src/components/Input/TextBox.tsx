import React from 'react';
import styled from '@emotion/styled';

export interface ITextProps extends React.InputHTMLAttributes<HTMLInputElement> {
    width?: string;
}

const TextBox = ({ width, type = 'text', ...rest }: ITextProps) => {
    return <CustomInput type={type} width={width} {...rest} autoComplete="false" />;
};

const CustomInput = styled.input<ITextProps>`
    width: calc(${props => (props.width ? props.width : '100')}% - 1em);
    padding: 0.5em;
    margin: 0.5em;
    box-sizing: border-box;
    border: 1px solid ${props => props.theme.colors.black};
    background: none;
`;

export default TextBox;
