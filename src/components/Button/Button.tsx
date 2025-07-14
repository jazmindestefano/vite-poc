export interface ButtonProps {
  color?: string;
}

export const Button = ({ color = 'yellow-ujv' }: ButtonProps) => {
  return (
    <button data-testid="button" className={`bg-${color} w-36 h-10 rounded-md`}>
      <p>soy un boton</p>
    </button>
  );
};
