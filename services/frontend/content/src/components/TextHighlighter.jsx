import React, { useState } from "react";
function TextHilighter() {
    const [input, setInput] = useState(' ');
    const [position, setPosition] = useState(null);

    const [textHighlighted, setTextHighlighted] = useState(<></>);

    const highlight = () => {
        // input :- "abcdefghijklmn";
        // position :- 11
        // omn 11th position : k

        const before = input.substring(0, position - 1)
        // abcdefghij ; 0, 10
        // console.log('startP:', 0, 'endP:', position-1);
        // console.log('before: ', before);

        let center = input.substring(position - 1, position);
        // k; 10,10
        // console.log('startP:', position-1, 'endP:', position);
        // console.log('center: ', center);

        center = (<span style={{ backgroundColor: 'yellow' }}>{center} </span>);
        // console.log(center);

        const after = input.substring(position, input.length);
        // lmn; 11, 13
        // console.log('startP:', position, 'endP:', input.length);
        // console.log('after: ', after);

        const result = <>{before}{center}{after}</>;
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
                <div className="mt-6">
                    <label className="block mb-2 font-medium text-gray-700">Result:</label>
                    <div className="border border-gray-300 rounded p-2 w-96 bg-white">
                        {textHighlighted}
                    </div>
                </div>
            </div>

        </>
    );
}

export default TextHilighter;