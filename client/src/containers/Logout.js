import React from "react";
import auth from "../utils/auth";

export const Logout = (props) => {
    return (
        <div>
            <button onClick={() => {
                auth.logout(() => {
                    props.history.push("/login");
                })
            }}>Logout</button>
        </div>
    )
}