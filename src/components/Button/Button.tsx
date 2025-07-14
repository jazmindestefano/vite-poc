interface ButtonProps {
  color?: string;
}

export const Button = ({ color = 'yellow-ujv' }: ButtonProps) => {
  return (
    <button data-testid="button" className={`bg-${color}`}>
      <p>soy un boton</p>
    </button>
  );
};

export default Button;
