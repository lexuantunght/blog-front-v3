import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'error' | 'success' | 'warning';
}

const Button = ({ variant = 'primary', children, ...rest }: ButtonProps) => {
    return (
        <button {...rest} className={`sb-button sb-button-${variant}`}>
            {children}
        </button>
    );
};

export default Button;
