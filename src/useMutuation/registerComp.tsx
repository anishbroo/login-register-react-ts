import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import {
  CountriesDataResponse,
  GenderDataResponse,
  GET_COUNTRIES,
  GET_GENDERS,
} from "../query/query";
import { InputMassRegister, REGISTER_USER } from "../mutation/registerMutation";
import "../css/registerComp.css";

const RegisterComponent: React.FC = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [gender, setGender] = useState("");
  const [birthday, setBirthday] = useState("");
  const [country, setCountry] = useState("");

  const [headOfFamily, setHeadOfFamily] = useState(false);
  //form ma dekhaune wala UI ma dekhaune wala
  const [displayBirthday, setDisplayBirthday] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const [massRegister, { data, loading }] = useMutation<{}, InputMassRegister>(
    REGISTER_USER
  );

  //to get country and gender data
  const { data: countrydata } = useQuery<CountriesDataResponse>(GET_COUNTRIES);
  const { data: genderdata } = useQuery<GenderDataResponse>(GET_GENDERS);

  const handleCancel = () => {
    setFirstname("");
    setLastname("");
    setCountry("");
    setDisplayBirthday("");
    setGender("");
    setErrorMessage("");
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    //validation
    if (
      firstname === "" ||
      lastname === "" ||
      gender === "" ||
      birthday === "" ||
      country === ""
    ) {
      setErrorMessage("All fields are required");
      return;
    }

    if (firstname.length < 3 || lastname.length < 3) {
      setErrorMessage("First and last name should be more than 3 characters");
      return;
    }

    if (firstname.replace(/[A-Za-z]/g, "") !== "") {
      setErrorMessage("First name should contain only alphabets");
      return;
    }

    if (lastname.replace(/[A-Za-z]/g, "") !== "") {
      setErrorMessage("Last name should contain only alphabets");
      return;
    }

    try {
      const response = await massRegister({
        variables: {
          input: {
            data: [
              {
                first_name: firstname,
                last_name: lastname,
                birthday,
                country,
                gender,
                head_of_family: headOfFamily,
              },
            ],
          },
        },
      });
      if (response.data) {
        console.log("Login successful:", response.data);
        // localStorage.setItem('access_token', response.data.register.tokens.access_token);
        alert("Register successful");
      }
    } catch (err) {
      alert("Register failed");
    }
    setFirstname("");
    setLastname("");
    setCountry("");
    setDisplayBirthday("");
    setGender("");
    setErrorMessage("");
  };

  // console.log(birthday)

  const handleDate = (selectedDate: string) => {
    const sanitizeDate = selectedDate.replace(/-/g, "");
    console.log(sanitizeDate);
    setBirthday(sanitizeDate);
    setDisplayBirthday(selectedDate);
  };

  return (
    <div className="register-container">
      <h3 className="register-title">Register</h3>
      <form className="register-form" onSubmit={handleSubmit}>
        <input
          className="register-input"
          type="text"
          placeholder="Enter first name"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
        <input
          className="register-input"
          type="text"
          placeholder="Enter last name"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />

        <input
          className="register-input"
          type="date"
          placeholder="Select birthday date"
          value={displayBirthday}
          onChange={(e) => handleDate(e.target.value)}
        />

        <select
          className="register-select"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="select">Select a gender</option>
          {genderdata?.getGenders.map((gen) => (
            <option key={gen.id} value={gen.gender.toLowerCase()}>
              {gen.gender}
            </option>
          ))}
        </select>

        <select
          className="register-select"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        >
          <option value="select">Select a country</option>
          {countrydata?.getCountries.map((coun) => (
            <option value={coun.code}>{coun.name}</option>
          ))}
        </select>

        <div className="toggle-container">
          <label className="toggle-label">Head of Family:</label>
          <label className="toggle-switch">
            <input
              type="checkbox"
              checked={headOfFamily}
              onChange={(e) => setHeadOfFamily(e.target.checked)}
            />
            <span className="toggle-slider"></span>
          </label>
        </div>
        {loading && <p>Loading: {loading}</p>}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <div className="register-button">
          <button type="submit" onChange={handleSubmit}>
            Register
          </button>
          <button type="reset" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>

      {/* {data && <p>User Registered</p>} */}
    </div>
  );
};
export default RegisterComponent;
