import React from "react";
import "./newUser.css";

export default function NewUser() {
    return (
        <div className="newuser">
            <h2 className="newuser__title">New User</h2>
            <form className="newuser__form">
                <div className="newuser__item">
                    <label htmlFor="" className="newuser__label">
                        Username
                    </label>
                    <input
                        type="text"
                        className="newuser__input"
                        placeholder="johnsmith"
                    />
                </div>
                <div className="newuser__item">
                    <label htmlFor="" className="newuser__label">
                        Full Name
                    </label>
                    <input
                        type="text"
                        className="newuser__input"
                        placeholder="John Smith"
                    />
                </div>
                <div className="newuser__item">
                    <label htmlFor="" className="newuser__label">
                        Email
                    </label>
                    <input
                        type="email"
                        className="newuser__input"
                        placeholder="johnsmith@gmail.com"
                    />
                </div>
                <div className="newuser__item">
                    <label htmlFor="" className="newuser__label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="newuser__input"
                        placeholder="johnsmith@gmail.com"
                    />
                </div>
                <div className="newuser__item">
                    <label htmlFor="" className="newuser__label">
                        Phone
                    </label>
                    <input
                        type="tel"
                        className="newuser__input"
                        placeholder="+1 123 456 78"
                    />
                </div>

                <div className="newuser__item">
                    <label htmlFor="" className="newuser__label">
                        Address
                    </label>
                    <input
                        type="text"
                        className="newuser__input"
                        placeholder="New York | USA"
                    />
                </div>
                <div className="newuser__item newuser__item-gender">
                    <label htmlFor="" className="newuser__label">
                        Gender
                    </label>
                    <div className="newuser__gender-options">
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            id="male"
                            className="newuser__input"
                        />
                        <label htmlFor="male">Male</label>
                        <input
                            type="radio"
                            name="gender"
                            className="newuser__input"
                            value="female"
                            id="female"
                        />
                        <label htmlFor="female">Female</label>
                        <input
                            type="radio"
                            name="gender"
                            className="newuser__input"
                            value="other"
                            id="other"
                        />
                        <label htmlFor="other">Other</label>
                    </div>
                </div>
                <div className="newuser__item">
                    <label htmlFor="active" className="newuser__label">
                        Active
                    </label>
                    <select
                        name="active"
                        id="active"
                        className="newuser__select"
                    >
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
            </form>
            <button className="newuser__submit">Create</button>
        </div>
    );
}
