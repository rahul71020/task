
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route, useParams } from 'react-router-dom';

const Register = () => {
    const update = {
        "First_Name": " ",
        "Last_Name": " ",
        "email": " ",
        "selectedCountry": " ",
        "selectedState": " ",
        "selectedCity": " ",
        "Gender": " ",
        "Date_of_Birth": " ",
        "Age": " "

    }
    const [data, setData] = useState(update);

    const [dob, setDob] = useState("");
    const [Age, setAge] = useState(null);
    const [error, setError] = useState(null);

    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedState, setSelectedState] = useState("");
    const [selectedCity, setSelectedCity] = useState("");
    const [gender, setGender] = useState("");

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
        if (name === "First_Name") {
            const inputValueWithoutNumbers = e.target.value.replace(/[^a-zA-Z]/g, "");
            // setData(inputValueWithoutNumbers);
            setData({ ...data, First_Name: inputValueWithoutNumbers });

        }
        if (name === "Last_Name") {
            const inputValueWithoutNumbers2 = e.target.value.replace(/[^a-zA-Z]/g, "");
            setData({ ...data, Last_Name: inputValueWithoutNumbers2 });
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data)
        axios.post('http://localhost:1111/Register', {
            First_Name: data.First_Name,
            Last_Name: data.Last_Name,
            email: data.email,
            selectedCountry: selectedCountry,
            selectedState: selectedState,
            selectedCity: selectedCity,
            Gender: data.City,
            Date_of_Birth: dob,
            Age: Age
        })
            .then(function (response) {
                console.log(response);
                alert(response.data.message)
            })
            .catch(function (error) {
                console.log(error);
            });
    };


    const handleDateChange = (e) => {
        const selectedDob = e.target.value;
        setDob(selectedDob);

        const dobDate = new Date(selectedDob);
        const today = new Date();
        const ageDiff = today - dobDate;
        const calculatedAge = Math.floor(ageDiff / (365.25 * 24 * 60 * 60 * 1000));
        setAge(calculatedAge);
        if (calculatedAge < 14) {
            setError("You must be at least 14 years old.");
        } else {
            setError(null);
        }
    };
    //   ----------------------------------------------select country------------------------------
    const countries = ["india", "USA", "Canada", "UK"];
    const states = {
        india: ["up", "Punjab", "Bihar"],
        USA: ["New York", "California", "Texas"],
        Canada: ["Ontario", "Quebec", "British Columbia"],
        UK: ["London", "Manchester", "Birmingham"],
    };
    const cities = {
        "up": ["noida", "lucknow", "gorakhpur"],
        Punjab: ["Ludhiana", "Amritsar", "Jalandhar"],
        Bihar: ["Patna", "Gaya", "Bhagalpur"],

        "New York": ["New York City", "Buffalo"],
        California: ["Los Angeles", "San Francisco"],
        Texas: ["Houston", "Austin"],
        Ontario: ["Toronto", "Ottawa"],
        Quebec: ["Montreal", "Quebec City"],
        "British Columbia": ["Vancouver", "Victoria"],
        London: ["London City", "Westminster"],
        Manchester: ["Manchester City", "Salford"],
        Birmingham: ["Birmingham City", "Coventry"],
    };

    const handleCountryChange = (e) => {
        setSelectedCountry(e.target.value);
        setSelectedState("");
        setSelectedCity("");
    };

    const handleStateChange = (e) => {
        setSelectedState(e.target.value);
        setSelectedCity("");
    };

    const handleCityChange = (e) => {
        setSelectedCity(e.target.value);
    };
    // ----------------------------------- 


    const handleGenderChange = (e) => {
        setGender(e.target.value);
    };


    return (
        <div className="container">
            <form className="registration-form manage_form">
                <h2>Register</h2>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="First_Name"
                        pattern="_[a-zA-Z0-9]+"
                        value={data?.First_Name}
                        onChange={inputHandler}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Last Name:</label>
                    <input
                        type="text"
                        id="Last_Name"
                        name="Last_Name"
                        value={data?.Last_Name}
                        onChange={inputHandler}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={data?.email}
                        onChange={inputHandler}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="country">Country:</label>
                    <select id="country" className="form-control" value={selectedCountry} onChange={handleCountryChange}>
                        <option value="">Select Country</option>
                        {countries.map((country, index) => (
                            <option key={index} value={country}>
                                {country}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    {selectedCountry && (
                        <div>
                            <label htmlFor="state">State:</label>
                            <select id="state" value={selectedState} onChange={handleStateChange}>
                                <option value="">Select State</option>
                                {states[selectedCountry].map((state, index) => (
                                    <option key={index} value={state}>
                                        {state}
                                    </option>
                                ))}
                            </select>
                        </div>
                    )}

                </div>
                <div className="form-group">
                    {selectedState && (
                        <div>
                            <label htmlFor="city">City:</label>
                            <select id="city" value={selectedCity} onChange={handleCityChange}>
                                <option value="">Select City</option>
                                {cities[selectedState].map((city, index) => (
                                    <option key={index} value={city}>
                                        {city}
                                    </option>
                                ))}
                            </select>
                        </div>
                    )}
                </div>

                <div className="form-group">
                    <div>
                        <label>
                            <input
                                type="radio"
                                value="Male"
                                checked={gender === "Male"}
                                onChange={handleGenderChange}
                            />{" "}
                            Male
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="Female"
                                checked={gender === "Female"}
                                onChange={handleGenderChange}
                            />{" "}
                            Female
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="Other"
                                checked={gender === "Other"}
                                onChange={handleGenderChange}
                            />{" "}
                            Other
                        </label>
                    </div>

                </div>
                <div className="form-group">

                </div>

                <div className="form-group">
                    <label htmlFor="dob">Date of Birth:</label>
                    <input
                        type="date"
                        id="dob"
                        value={dob}
                        onChange={handleDateChange}
                    />
                    {error && <p className="error" style={{ color: "red" }}>{error}</p>}
                    <label htmlFor="password">Age:</label>
                    <input
                        type="text"
                        id="Age"
                        name="Age"
                        value={Age}
                        // onChange={(e) => setPassword(e.target.value)}
                        onChange={inputHandler}
                        required
                    />
                </div>

                <button onClick={handleSubmit}>submit</button>
            </form>
        </div>
    );
};

export default Register;
