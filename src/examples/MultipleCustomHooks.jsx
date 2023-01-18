import { useFetch } from "../hooks/useFetch";

export const MultipleCustomHooks = () => {
  const { data, isLoading, hasError, onRandomCharacter } = useFetch(
    "https://thesimpsonsquoteapi.glitch.me/quotes"
  );
  const { quote, character, image } = !!data && data[0];
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
              <p className="mb-5">{quote}</p>
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
