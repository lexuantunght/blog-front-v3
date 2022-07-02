import React from 'react';
import styles from './button.module.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'error' | 'success' | 'warning';
}

const Button = ({ variant = 'primary', children, ...rest }: ButtonProps) => {
    return (
        <button {...rest} className={`${styles.button} ${styles[variant]}`}>
            {children}
        </button>
    );
};

export default Button;
