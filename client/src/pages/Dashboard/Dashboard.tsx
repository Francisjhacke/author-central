import * as React from "react"

export interface Props {
    children?: React.ReactNode
}

export interface State {}

export class Dashboard extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <h1>Dashboard</h1>
        )
    }
}
