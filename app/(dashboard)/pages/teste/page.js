'use client'
import React from 'react';
import { toast } from 'react-toastify';

// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

function App() {
    const notify = () => toast.success("Dados salvos com sucesso", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",

    });

    return (
        <div>
            <button onClick={() => notify()}>Notify !</button>
      
        </div>
    );
}

export default App;