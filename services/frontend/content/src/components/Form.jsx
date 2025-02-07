import React, { useState } from "react";
import "./../assets/css/form.css";

function Form() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [gender, setGender] = useState("male");
    const [subjects, setSubjects] = useState({
        english: false,
        physics: true,
        chemistry: false
    });

    const [resume, setResume] = useState(null);
    const [url, setUrl] = useState("");
    const [selectedOptions, setSelectedOptions] = useState("");
    const [about, setAbout] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents page reload
        console.log({
            firstName,
            lastName,
            email,
            contact,
            gender,
            subjects,
            selectedOptions,
            resume,
            url,
            about
        });
    };

    const handleSubjectChange = (sub) => {
        setSubjects((prev) => ({
            ...prev,
            [sub]: !prev[sub]
        }));
    };

    const handleReset = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setContact("");
        setGender("male");
        setSubjects({
            english: false,
            physics: true,
            chemistry: false
        });
        setResume(null);
        setUrl("");
        setSelectedOptions("");
        setAbout("");
    };

    return (
        <div className="App">
            <h1>Form in React</h1>
            <fieldset>
                <form onSubmit={handleSubmit}>
                    {/* First Name */}
                    <label htmlFor="firstName">First Name*</label>
                    <input
                        type="text"
                        id="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="Enter First Name"
                        required
                    />

                    {/* Last Name */}
                    <label htmlFor="lastName">Last Name*</label>
                    <input
                        type="text"
                        id="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Enter Last Name"
                        required
                    />

                    {/* Email */}
                    <label htmlFor="email">Email*</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter Email"
                        required
                    />

                    {/* Contact */}
                    <label htmlFor="contact">Contact*</label>
                    <input
                        type="tel"
                        id="contact"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        placeholder="Enter Mobile Number"
                        required
                    />

                    {/* Gender */}
                    <label htmlFor="gender">Gender</label>
                    <div>
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            checked={gender === "male"}
                            onChange={(e) => setGender(e.target.value)}
                        />
                        Male

                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            checked={gender === "female"}
                            onChange={(e) => setGender(e.target.value)}
                        />
                        Female

                        <input
                            type="radio"
                            name="gender"
                            value="other"
                            checked={gender === "other"}
                            onChange={(e) => setGender(e.target.value)}
                        />
                        Other
                    </div>

                    {/* Subjects */}
                    <label htmlFor="subjects">Your Best Subject</label>
                    <div>
                        <input
                            type="checkbox"
                            id="english"
                            checked={subjects.english}
                            onChange={() => handleSubjectChange("english")}
                        />
                        English

                        <input
                            type="checkbox"
                            id="chemistry"
                            checked={subjects.chemistry}
                            onChange={() => handleSubjectChange("chemistry")}
                        />
                        Chemistry

                        <input
                            type="checkbox"
                            id="physics"
                            checked={subjects.physics}
                            onChange={() => handleSubjectChange("physics")}
                        />
                        Physics
                    </div>

                    {/* Upload Resume */}
                    <label htmlFor="resume">Upload Resume*</label>
                    <input
                        type="file"
                        id="resume"
                        onChange={(e) => setResume(e.target.files[0])}
                        required
                    />

                    {/* URL */}
                    <label htmlFor="url">Enter URL*</label>
                    <input
                        type="url"
                        id="url"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        placeholder="Enter URL"
                        required
                    />

                    {/* Dropdown Selection */}
                    <label htmlFor="select">Select your choice</label>
                    <select
                        id="select"
                        value={selectedOptions}
                        onChange={(e) => setSelectedOptions(e.target.value)}
                    >
                        <option value="" disabled>
                            Select your Answer
                        </option>
                        <optgroup label="Beginners">
                            <option value="1">HTML</option>
                            <option value="2">CSS</option>
                            <option value="3">JavaScript</option>
                        </optgroup>
                        <optgroup label="Advanced">
                            <option value="4">React</option>
                            <option value="5">Node</option>
                            <option value="6">Express</option>
                            <option value="7">MongoDB</option>
                        </optgroup>
                    </select>

                    {/* About */}
                    <label htmlFor="about">About</label>
                    <textarea
                        id="about"
                        cols="30"
                        rows="5"
                        value={about}
                        onChange={(e) => setAbout(e.target.value)}
                        placeholder="Tell us about yourself"
                        required
                    ></textarea>

                    {/* Buttons */}
                    <button type="reset" onClick={handleReset}>
                        Reset
                    </button>
                    <button type="submit">
                        Submit
                    </button>
                </form>
            </fieldset>
        </div>
    );
}

export default Form;
