import { useState } from "react";
import axios from "axios";

const App = () => {
  const [artist, setArtist] = useState("");
  const [title, setTitle] = useState("");
  const [lyrics, setLyrics] = useState("");

  const find = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://api.lyrics.ovh/v1/${artist}/${title}`
      );
      setLyrics(response.data.lyrics);
    } catch (error) {
      alert("Lyrics not found. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-5">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h1 className="text-2xl text-white font-bold mb-6 text-center">
          Lyrics Finder
        </h1>
        <form onSubmit={find}>
          <div className="mb-4">
            <input
              required
              className="w-full p-3 border border-gray-700 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
              type="text"
              placeholder="Artist"
              value={artist}
              onChange={(e) => setArtist(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              required
              className="w-full p-3 border border-gray-700 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
              type="text"
              placeholder="Song Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <input
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded hover:bg-purple-700 transition-colors cursor-pointer"
            value="Find Lyrics"
          />
        </form>
        {lyrics && (
          <div className="mt-6 bg-gray-700 p-4 rounded text-white">
            <h2 className="text-xl font-bold mb-2">Lyrics:</h2>
            <pre className="whitespace-pre-wrap">{lyrics}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
