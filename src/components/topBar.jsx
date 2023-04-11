import "../styles/Header.css";
import pokeball from "../assets/pokeball.png";
import pokeballColor from "../assets/pokeballcolor.png";
import React from "react";

const Header = () => {
    return (
        <div className="title">
            <div className="title__left">
                <p>POKÉDEX</p>
                <div className="caught-seen">
                    <div className="caught">
                        <img
                            src={pokeballColor}
                            alt="pokeball"
                            style={{ width: "30px", marginRight: "10px" }}
                        />
                        <p>438</p>
                    </div>
                    <div className="seen">
                        <img
                            src={pokeball}
                            alt="pokeball"
                            style={{ width: "30px", marginRight: "10px" }}
                        />
                        <p>649</p>
                    </div>
                </div>
            </div>
            <p style={{ color: "white" }}>A -&gt; Z</p>
        </div>
    );
};

export default Header;