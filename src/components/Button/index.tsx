import { ButtonHTMLAttributes } from "react";
import './styles.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {

}

export function Button(props: ButtonProps) {
  return(
    <button className="button" {...props}>

    </button>
  )
}