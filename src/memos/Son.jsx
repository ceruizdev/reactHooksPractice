import { memo } from "react";

export const Son = memo(({ number, increment }) => {

    console.log('  Generated again :(  ');

    return (
        <button
            className="btn btn-primary mr-3"
            onClick={ () => increment( number ) }
        >
            { number }
        </button>
    )
})
