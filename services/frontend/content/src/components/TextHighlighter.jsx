import React, { useState } from "react";
function TextHilighter() {
    const [input, setInput] = useState('jhiul');
    const [position, setPosition] = useState(0);

    const [textHighlighted, setTextHighlighted] = useState('fdef');

    const highlight = () => {
        // input :- "abcdefghijklmn";
        // position :- 11
        // omn 11th position : k

        const before = input.substring(0, (position-2))
        // abcdefghij ; 0, 9

        const center = input.substring(position-1, position-1)
        // k; 10,10

        const after = input.substring(position, input.length-1)
        // lmn; 11, 13
        const result = before + center + after;
        setTextHighlighted(result);


    }


    return (
        <>
            <h1>Hello this textHilighter</h1>

            <div className="flex justify-center items-center min-h-screen p-4 bg-gray-100">
                <div>
                    <label htmlFor="textInput" className="block mb-2 font-medium text-gray-700">

                    </label>
                    <textarea
                        id="textInput"
                        placeholder="Enter your text here"
                        className="h-32"
                        onChange={(event) => setInput(event.target.value)}
                        defaultValue={input}
                    >
                    </textarea>
                </div>
                <div>
                    <label htmlFor="integerInput" className="block mb-2 font-medium text-gray-700">
                        Position
                    </label>
                    <input
                        id="position"
                        type="text"
                        placeholder="Enter an integer"
                        onChange={(event) => setPosition(event.target.value)}
                        defaultValue={position}
                    />
                </div>
                <div>
                    <button onClick={highlight}>Hilight</button>
                </div>
                <div>
                    <label htmlFor="result">Result</label>
                    <pre>
                        {textHighlighted}
                    </pre>
                </div>
            </div>

        </>
    );
}

export default TextHilighter;