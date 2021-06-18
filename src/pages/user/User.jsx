import React from "react";
import "./user.css";

export default function User() {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <button className="userAddButton">Create</button>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img
                            src="https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&q=70"
                            alt=""
                            className="userShowImg"
                        />
                        <div className="userShowTopTitle">
                            <span className="userShowName">
                                Patrick Steward
                            </span>
                            <span className="userShowTitle">
                                Software Developer
                            </span>
                        </div>
                    </div>
                    <div className="userShowBottom"></div>
                </div>
                <div className="userUpdate"></div>
            </div>
        </div>
    );
}
