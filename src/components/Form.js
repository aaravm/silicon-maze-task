import "./form.css";
import { useState } from "react";

export default function Form() {
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [Password, setPassword] = useState("");
    const [EmailId, setEmailId] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [Submit, setSubmit] = useState("Submit");

    // give "Invalid first name" error message if first name is not valid
    // give "Invalid last name" error message if first name is not valid
    // give "Invalid password" error message if password is not valid
    // give "Invalid email address" error message if email address is not valid

    const validateForm = (FirstName, LastName, Password, EmailId) => {
        let a=false
        let b=false
        let c=false
        let d=false
        // if (FirstName[0]) {
            
        // }
        const result = FirstName[0].charCodeAt(0);
        if (result>=65 && result<=90) {
            a=true
        }
        const result1 = LastName[0].charCodeAt(0);
        if (result1>=65 && result1<=90) {
            b=true
        }
        let c1=false
        let c2=false
        let c3=false
        let c4=false
        let d1=false
    // Check for password criteria
    for (let i = 0; i < Password.length; i++) {
        const element1 = Password[i];
        const element = element1.charCodeAt(0);
        // console.log(element)
        if (element>=65 && element<=90) {
            c1=true
        }
        if (element>=97 && element<=122) {
            c2=true
        }
        if (element>=48 && element<=57) {
            c3=true
        }
        if ((element>=58 && element<=64)||(element>=39 && element<=47) ){
            c4=true
        }
        
    }

    // Check if all criteria are met for password
    c = c1 && c2 && c3 && c4;
    for (let i = 0; i < EmailId.length; i++) {
        const element1 = EmailId[i];
        const element = element1.charCodeAt(0);
        // console.log(element)
        if (element===64) {
            d1=true
        }
    }
    if (EmailId[EmailId.length-1]==='m' && EmailId[EmailId.length-3]==='c' && EmailId[EmailId.length-4]==='.' && d1) {
        d=true
    }
        if (a && b && c && d) {
            setSubmit('Verified')
        }
    };


    return (
        <main>
            <div className="form">
                {errorMessage && <div className="error">{errorMessage}</div>}
                <div className="inputContainer">
                    <label htmlFor="fname">First name:</label>
                    <input
                        type="text"
                        id="fname"
                        name="fname"
                        className="input"
                        value={FirstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div className="inputContainer">
                    <label htmlFor="lname">Last name:</label>
                    <input
                        type="text"
                        id="lname"
                        name="lname"
                        className="input"
                        value={LastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <div className="inputContainer">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="input"
                        value={Password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="inputContainer">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        className="input"
                        value={EmailId}
                        onChange={(e) => setEmailId(e.target.value)}
                    />
                </div>
                <button className="button" onClick={()=>{validateForm(FirstName, LastName, Password, EmailId)}}>
                    {Submit}
                </button>
            </div>
        </main>
    );
}
