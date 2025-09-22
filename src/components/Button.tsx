import React from 'react';
import { Link } from 'react-router-dom';
interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary';
  className?: string;
  onClick?: () => void;
}
export const Button = ({
  children,
  href,
  variant = 'primary',
  className = '',
  onClick
}: ButtonProps) => {
  const baseStyles = 'inline-block px-6 py-3 rounded font-medium transition-colors';
  const variantStyles = {
    primary: 'bg-[#FF6600] text-white hover:bg-[#e55c00]',
    secondary: 'bg-white text-[#FF6600] border border-[#FF6600] hover:bg-[#fff8f5]'
  };
  const styles = `${baseStyles} ${variantStyles[variant]} ${className}`;
  if (href) {
    return <Link to={href} className={styles}>
        {children}
      </Link>;
  }
  return <button className={styles} onClick={onClick}>
      {children}
    </button>;
};