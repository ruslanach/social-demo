import React, {ComponentType} from "react";
import {useParams} from "react-router-dom";
interface Props {
    [key: string]: any;
}
export function withRouter<T extends Props>(Children: ComponentType<T>) {
    return (props: T) => {
        const match = { params: useParams() };
        return <Children {...props} match={match} />;
    };
}