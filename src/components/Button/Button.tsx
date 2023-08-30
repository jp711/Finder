interface ButtonProps {
  content: string;
}

function Button({ content }: ButtonProps) {
  return <button>{content}</button>;
}

export default Button;
