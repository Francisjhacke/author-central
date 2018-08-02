import * as React from "react"

export interface Props {
    children?: React.ReactNode
    callback?: any
    type?: String
}

const Button = (props: Props) => {
    return (
        <button 
            type="button"
            className={`btn btn-$(props.type}`}
            onClick={props.callback()}
        >
            {props.children}
        </button>
    )
}

export default Button;
