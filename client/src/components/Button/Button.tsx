import React from 'react';
import styled from '@emotion/styled';
import { Theme } from '@emotion/react';

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    width?: string;
    height?: string;
    icon?: JSX.Element;
    color?: keyof Theme['buttonColors'];
    border?: string;
}

const Button = ({ children, icon, color = 'none', ...rest }: IButtonProps) => {
    return (
        <>
            <BasicButton {...rest} icon={icon} color={color}>
                {icon}
                <span>{children}</span>
            </BasicButton>
        </>
    );
};

const BasicButton = styled.button<IButtonProps>`
    box-sizing: border-box;
    border: ${props => (props.border ? props.border : `1px solid ${props.theme.colors.white}`)};
    outline: 0;
    text-align: center;
    padding: 0.6rem 1.1rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    svg,
    img {
        align-items: center;
        pointer-events: none;
    }
    span {
        pointer-events: none;
        margin-left: ${props => (props.icon ? 0.5 : 0)}em;
    }

    color: ${props => props.theme.colors.white};

    ${props => `
        background-color: ${props.theme.buttonColors[props.color ? props.color : 'none']};

    `}

    &:hover {
        opacity: 0.9;
        box-shadow: 0px 3px 12px -1px rgb(0 0 0 / 80%);
    }
`;

export default Button;
