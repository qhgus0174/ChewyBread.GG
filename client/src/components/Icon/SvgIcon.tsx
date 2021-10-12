import React from 'react';
import { Theme, useTheme } from '@emotion/react';
import { ReactComponent as Search } from '~assets/svg/search.svg';

interface ISvg {
    shape: IIconType;
    color?: keyof Theme['colors'];
    width?: number;
    height?: number;
}

type IIconType = 'search';

const Svg = ({ shape, color = 'black', width = 20, height = 20 }: ISvg) => {
    const theme = useTheme();
    const iconColor = theme.colors[color];

    const icon = () => {
        switch (shape) {
            case 'search':
                return <Search fill={iconColor} width={width} height={height} />;
            default:
                return <></>;
        }
    };

    return icon();
};

export default Svg;
