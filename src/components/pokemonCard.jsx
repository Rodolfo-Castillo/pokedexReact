import React, { useState } from "react";
import "../styles/PokemonCard.css";
import pokeball from "../assets/pokeball.png";

const PokemonCard = ({
    id,
    name,
    image,
    type,
    weight,
    height,
    stats,
    statsName,
}) => {
    const [isShown, setIsShown] = useState(false);
    const bg = "assets/" + type + ".jpeg";

    return (
        <div className="container">
            {isShown && (
                <div
                    className="show"
                    style={{
                        backgroundImage: `url(${bg})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                    }}
                >
                    <div className="stat-container-title">
                        <img src={image} alt={name} className="image-title" />
                        <p style={{ width: "180px", color: "black" }}>
                            No. {id}
                        </p>
                        <p>{name}</p>
                        <img
                            src={image}
                            alt={name}
                            className="pokeball-title"
                        />
                    </div>
                    <img src={image} alt={name} style={{display:"block",marginLeft:"auto",marginRight:"auto",width:"50%"}}/>
                    <div style={{ display: "flex", width: "100%",marginBottom:"-46px" }}>
                        <div
                            style={{
                                background: "#DBDBD9",
                                textAlign: "center",
                            }}
                            className="stats-left"
                        >
                            <p>Type</p>
                            <p>Height</p>
                            <p>Weight</p>
                        </div>
                        <div
                            style={{ background: "#FFFFFF" }}
                            className="stats-right"
                        >
                            <p>{type}</p>
                            <p>{height}0 cm</p>
                            <p>{weight} lbs</p>
                        </div>
                    </div>
                    <div className="base-stats">
                        <div>
                            {statsName.map((stat) => (
                                <p className="stats">{stat}</p>
                            ))}
                        </div>
                        <div>
                            {stats.map((stats) => (
                                <p className="stats">{stats}</p>
                            ))}
                        </div>
                    </div>
                </div>
            )}
            <div
                className="right"
                // onClick={() => setIsShown(!isShown)}
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
            >
                <img
                    src={image}
                    alt={name}
                    style={{
                        maxHeight: "50px",
                        marginRight: "10px",
                        width: "50px",
                    }}
                />
                <p style={{ width: "270px" }}>No. {id}</p>
                <p>{name}</p>
                <img
                    src={pokeball}
                    alt="pokeball"
                    style={{
                        marginLeft: "auto",
                        width: "40px",
                    }}
                />
            </div>
        </div>
    );
};

export default PokemonCard;
