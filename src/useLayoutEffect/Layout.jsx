import { useLayoutEffect, useRef, useState } from "react";
import { useFetch } from "../hooks/useFetch";

export const Layout = () => {
  const [size, setSize] = useState(0);
  const { data, isLoading, hasError, onRandomCharacter } = useFetch(
    "https://thesimpsonsquoteapi.glitch.me/quotes"
  );
  const { quote, character, image } = !!data && data[0];

  const pRef = useRef();
  useLayoutEffect(() => {
    const len = pRef.current?.textContent.length
    setSize(len ? len : 0);
  }, [quote])

  return (
    <>
      <div>Quotes</div>
      <hr />

      {isLoading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <div>
          <div className="wrapper align-items-center">
            <img src={image} alt={character} />
            <blockquote className="blockquote ">
              <sub>length: ({size})</sub>
              <p className="mb-5" ref={pRef}>{quote} </p>              
              <footer className="blockquote-footer">{character}</footer>
            </blockquote>
          </div>
          <div className="d-flex justify-content-center">
            <button onClick={onRandomCharacter} className="btn btn-primary">
              Random
            </button>
          </div>
        </div>
      )}
    </>
  );
};
