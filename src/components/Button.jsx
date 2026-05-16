import { Icon } from './Icons.jsx'

// Botão reutilizável. variant: primary | white | outline | outline-light | ghost
export default function Button({
  children,
  href = '#',
  variant = 'primary',
  size = 'md',
  icon,
  onClick,
  type,
  className = '',
  ...rest
}) {
  const cls = `btn btn--${variant} btn--${size} ${className}`.trim()

  if (type === 'submit' || type === 'button') {
    return (
      <button type={type} className={cls} onClick={onClick} {...rest}>
        {icon && <Icon name={icon} size={18} />}
        <span>{children}</span>
      </button>
    )
  }

  return (
    <a href={href} className={cls} onClick={onClick} {...rest}>
      {icon && <Icon name={icon} size={18} />}
      <span>{children}</span>
    </a>
  )
}
