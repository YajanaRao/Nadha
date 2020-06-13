import React from "react";
import {Text} from "@nadha/views";
import {log} from "@nadha/utils";

type ErrorState = {
    hasError: boolean;
}

type ErrorProps = {
    children: any
}

class ErrorBoundary extends React.Component<ErrorProps, ErrorState> {
    constructor(props: ErrorProps) {
        super(props);
        this.state = {
            hasError: false
        };
    }

    componentDidCatch(error: any, info: any) {
        // Display fallback UI
        this.setState({hasError: true});
        // You can also log the error to an error reporting service
        log.error(error, info);
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <Text>Something went wrong.</Text>;
        }
        return this.props.children;
    }
};

export default ErrorBoundary;