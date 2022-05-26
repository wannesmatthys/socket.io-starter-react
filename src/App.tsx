import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { io } from "socket.io-client";

function App() {
    const connectToSocket = () => {
        const socket = io("http://localhost:3000", {
            transports: ["websocket"],
        });

        socket.on("connect", () => {
            console.log("connected");
        });
    };

    return (
        <div>
            <h1>Connecting to websockets</h1>{" "}
            <button onClick={connectToSocket}>Connect to socket</button>
        </div>
    );
}

export default App;
