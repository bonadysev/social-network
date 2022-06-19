import React from "react";
import {useParams} from "react-router-dom";

export const withCustomWithRouter = (ComponentWithRouterProp) => {
    return (props) => {

        const { userId: userId } = useParams()

        return (
              <ComponentWithRouterProp {...props} userId={userId} />
        )
    }
}


