import { useState } from "react";
import "./styles.css";

const musicDB = {
  Rock: [
    { name: "The Beatles", rating: "5/5" },
    { name: "Queen", rating: "4.5/5" },
    { name: "The Rolling Stones", rating: "4/5" }
  ],

  Country: [
    {
      name: "Little Big Town",
      rating: "5/5"
    },
    {
      name: "Florida Georgia Line",
      rating: "4.5/5"
    },
    {
      name: "Luke Bryan",
      rating: "4.5/5"
    }
  ],
  Pop: [
    {
      name: "Ed Sheeran",
      rating: "5/5"
    },
    {
      name: "Drake",
      rating: "4/5"
    },
    {
      name: "Justin Bieber",
      rating: "4/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Pop");

  // this function will set the "selectedGenre" variable to whatever user has clicked, which is stored is genre argument

  function genreClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <div className="row-1">
        <i className="fa fa-music music"></i>
        <h1 className="heading">goodMusic</h1>
      </div>
      <p>Check out my favorite music, Select a genre to get started </p>
      <div>
        {Object.keys(musicDB).map((genre) => {
          return (
            <button
              onClick={() => genreClickHandler(genre)}
              style={{
                cursor: "pointer",
                background: "#E5E7EB",
                borderRadius: "0.5rem",
                padding: "0.5rem  1rem",
                border: "1px solid black",
                margin: "1rem 0.3rem"
              }}
              key={genre}
            >
              {genre}
            </button>
          );
        })}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {musicDB[selectedGenre].map((book) => {
            return (
              <li
                key={book.name}
                style={{
                  listStyle: "none",
                  padding: "1rem",
                  border: "1px solid #D1D5DB",
                  width: "70%",
                  margin: "1rem 0rem",
                  borderRadius: "0.5rem"
                }}
              >
                <div style={{ fontSize: "larger" }}>{book.name}</div>
                <div style={{ fontSize: "smaller" }}>{book.rating}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
