import React, { useState, useEffect } from 'react';
import axios from 'axios';


const User = () => {
    const [name, useName] = useState({
        name: "",
        submitted: false
    });

    return(
        <div>
            <div>
                <form action="">
                    <p>Enter your name to start chatting:</p>
                    <input type="text"/>
                    <button type="submit">Start</button>
                </form>
            </div>

        </div>

    )
}

export default User;