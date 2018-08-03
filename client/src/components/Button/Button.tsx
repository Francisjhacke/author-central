import * as React from "react"
import "./Button.css";

export interface Props {
    children?: React.ReactNode
    callback?: any
    type?: String
}

const Button = (props: Props) => {
    return (
        <button 
            type="button"
            className={`btn ac-btn btn-$(props.type}`}
            onClick={props.callback()}
        >
            {props.children}
        </button>
    )
}

export default Button;
