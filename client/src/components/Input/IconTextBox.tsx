import React, { ReactElement } from 'react';
import styled from '@emotion/styled';

export interface ITextProps extends React.InputHTMLAttributes<HTMLInputElement> {
    icon: JSX.Element;
    direction?: string;
    width?: string;
    onClick?: () => void;
}

const IconTextBox = ({ width, type = 'text', icon, direction, onClick, children, ...rest }: ITextProps) => {
    return (
        <TextBoxDiv>
            <CustomInput type={type} width={width} {...rest} autoComplete="false" />
            <IconDiv onClick={onClick}>{icon}</IconDiv>
            <ChilrenDiv>{children}</ChilrenDiv>
        </TextBoxDiv>
    );
};

const ChilrenDiv = styled.div`
    width: calc(100% - 1em);
    margin: 0.5em;
    border: 1px solid black;
    box-sizing: border-box;
    display: none;
`;
const CustomInput = styled.input<Omit<ITextProps, 'icon'>>`
    width: calc(${props => (props.width ? props.width : '100')}% - 1em);
    padding: 0.5em;
    margin: 0.5em;
    box-sizing: border-box;
    background: none;
`;

const TextBoxDiv = styled.div`
    position: relative;

    &:focus-within ${ChilrenDiv} {
        display: block;
    }
`;
const IconDiv = styled.div`
    position: absolute;
    top: 13px;
    right: 16px;
    cursor: pointer;
`;

export default IconTextBox;
