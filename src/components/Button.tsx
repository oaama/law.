import { siteConfig } from '@/config/site.config';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  icon?: string;
}

export function Button({
  label,
  onClick,
  href,
  variant = 'primary',
  fullWidth = false,
  icon,
}: ButtonProps) {
  const baseStyles = `px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
    fullWidth ? 'w-full' : ''
  }`;

  const variantStyles = {
    primary: `bg-[${siteConfig.colors.primary}] text-white hover:bg-[${siteConfig.colors.primaryDark}]`,
    secondary: `bg-[${siteConfig.colors.secondary}] text-[${siteConfig.colors.primaryDark}] hover:bg-[${siteConfig.colors.secondaryLight}]`,
    outline: `border-2 border-[${siteConfig.colors.primary}] text-[${siteConfig.colors.primary}] hover:bg-[${siteConfig.colors.primary}] hover:text-white`,
  };

  const className = `${baseStyles} ${variantStyles[variant]}`;

  if (href) {
    return (
      <a href={href} className={className}>
        {icon && <span>{icon}</span>}
        {label}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={className}>
      {icon && <span>{icon}</span>}
      {label}
    </button>
  );
}
