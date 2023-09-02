import React, { useState } from 'react';
import axios from 'axios';
import fileDownload from 'js-file-download';

function HomePage() {
    const [url, setUrl] = useState('');
    const [filename, setFilename] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://api-lnp5.onrender.com/api/download', { url, filename }, { responseType: 'blob' });
            fileDownload(response.data, filename);
            console.log(response.data);  // handle the response as needed
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen overflow-hidden">
            <h1 className="text-3xl font-bold mb-6">Download Reddit video!!!</h1>
            <form onSubmit={handleSubmit} className="flex flex-col items-center">
                <label className="mb-4">
                    <div className="text-lg mb-4 inline-block">Video URL:</div>
                    <div>
                        <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} required 
                            className="border px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-300 w-96" placeholder="https://reddit.com" />
                    </div>
                </label>
                <label className="mb-4">
                    <div className="text-lg mb-4 inline-block">Filename:</div>
                    <div>
                        <input type="text" value={filename} onChange={(e) => setFilename(e.target.value)} required 
                            className="border px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-300 w-96" placeholder="example.mp4" />
                    </div>
                </label>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Download</button>
            </form>
        </div>
    );
}

export default HomePage;