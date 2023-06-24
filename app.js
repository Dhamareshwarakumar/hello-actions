import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
    return (
        <div style={{ backgroundColor: '#181818', minHeight: "100vh", color: "#fff" }}>
            <h1 style={{ textAlign: 'center' }}>Hello Github Actions!!!</h1>
            <p>Changes from test branch....</p>
            <p>Testing Branch rules</p>
        </div>
    );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);