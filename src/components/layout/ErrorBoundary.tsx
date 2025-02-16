import { Component, ReactNode } from "react";

interface Props {
    children: ReactNode;
    fallback: ReactNode;
    resetCondition?: any;
    error?: boolean;
}

interface State {
    hasError: boolean;
    resetCondition?: any;
}

export class ErrorBoundary extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = { hasError: false, resetCondition: this.props.resetCondition };
    }

    static getDerivedStateFromError(error: Error) {
        return { hasError: true };
    }

    static getDerivedStateFromProps(props: Props, state: State){
        if(props.resetCondition !== state.resetCondition) {
            return { hasError: false, resetCondition: props.resetCondition};
        }
        return null;
    }

    render() {
        if(this.state.hasError || this.props.error){
            return this.props.fallback;
        }
        return this.props.children;
    }
}