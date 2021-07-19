import React from "react";

export const Logout = (props) => {
    const LogoutBtn = () => {
        console.log("Logout")
        localStorage.removeItem("token");
        props.history.push("/login");
    }

    return (
        <div>
            <button onClick={LogoutBtn}>Logout</button>
        </div>
    )
}