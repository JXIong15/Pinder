import React from "react";


// DISPLAY IN MESSAGES AFTER BRIAN FINISHES MESSAGING COMPONENT
function Rate() {
    return (
        <div>
            <h1>REVIEWS</h1>
        <form>
            <input
                id="rate"
                type="int"
                name="rate"
                placeholder="Rating"
            />
            <textarea
                id="message"
                name="message"
                placeholder="Message Body"
                rows="10"
            />
            <button type="submit">
                Submit
            </button>
        </form>
        </div>
    );
}

export default Rate;