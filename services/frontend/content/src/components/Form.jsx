import react, { useState } from 'react';
import './../assets/css/form.css';
function Form() {

    return (
        <div className='App'>
            <h1>Form in React</h1>
            <fieldset>
                <form action="#" method='get'>
                    <label htmlFor="firstName">First Name*</label>
                    <input
                        type="text"
                        name='firstName'
                        id='firstName'
                        placeholder='Enter First Name'
                        required
                    />
                    <label htmlFor="lastName">Last Name*</label>
                    <input
                        type="text"
                        name='lastName'
                        id='lastName'
                        placeholder='Enater Last Name'
                        required
                    />
                    <label htmlFor="email">Email*</label>
                    <input
                        type="text"
                        name='email'
                        id='email'
                        placeholder='Enter Email Id'
                        required
                    />
                    <label htmlFor="contact">Contact*</label>
                    <input
                        type="text"
                        name='contact'
                        id='contact'
                        placeholder='Enter Mobile Number'
                        required
                    />
                    <label htmlFor="gender">Gender</label>
                    <input
                        type="radio"
                        name='gender'
                        value='male'
                    />
                    Male
                    <input
                        type="radio"
                        name='gender'
                        value='female'
                    />
                    Female
                    <input
                        type="radio"
                        name='gender'
                        value='other'
                    />
                    Other
                    <label for="lang">
                        Your best Subject
                    </label>
                    <input
                        type="checkbox"
                        name="lang"
                        id="english"
                    />
                    English
                    <input
                        type="checkbox"
                        name="lang"
                        id="maths"
                    />
                    Maths
                    <input
                        type="checkbox"
                        name="lang"
                        id="physics"
                    />
                    Physics
                    <label for="file">Upload Resume*</label>
                    <input
                        type="file"
                        name="file"
                        id="file"
                        placeholder="Enter Upload File"
                        required
                    />
                    <label for="url">Enter URL*</label>
                    <input
                        type="url"
                        name="url"
                        id="url"
                        placeholder="Enter url"
                        required
                    />
                    <label>Select your choice</label>
                    <select
                        name="select"
                        id="select"
                    >
                        <option
                            value=""
                            disabled
                        >
                            Select your Ans
                        </option>
                        <optgroup label="Beginers">
                            <option value="1">HTML</option>
                            <option value="2">CSS</option>
                            <option value="3">
                                JavaScript
                            </option>
                        </optgroup>
                        <optgroup label="Advance">
                            <option value="4">React</option>
                            <option value="5">Node</option>
                            <option value="6">
                                Express
                            </option>
                            <option value="t">
                                MongoDB
                            </option>
                        </optgroup>
                    </select>
                    <label for="about">About</label>
                    <textarea
                        name="about"
                        id="about"
                        cols="30"
                        rows="10"
                        placeholder="About your self"
                        required
                    ></textarea>
                    <button
                        type="reset"
                        value="reset"
                    >
                        Reset
                    </button>
                    <button
                        type="submit"
                        value="Submit"
                    >
                        Submit
                    </button>
                </form>
            </fieldset>
        </div>
    );
}

export default Form;