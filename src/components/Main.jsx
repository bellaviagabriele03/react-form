
import { useState } from "react";
import ImgJoystick from "../assets/joystick.avif"



function Main() {

    const [listTitle, setList] = useState(
        [
            "Elden Ring",
            "God of war",
            "Rainbow Six Siege",
            "Call of Duty",
            "GTA VI",
            "Dark Souls",
            "Fc 26"
        ]
    )


    const [AddGame, setAddGame] = useState("Name Game");


    function controlSubmit(evt) {
        evt.preventDefault();
        console.log("submit", listTitle);

        setList([...listTitle, AddGame])
        setAddGame("");
    };

    function removeItem(indexRemove) {
       console.log("click");
       const newArray = [];
       for(let i = 0; i < listTitle.length; i++) {
            if(i !== indexRemove) {
                newArray.push(listTitle[i])
            }
       }
       setList(newArray);
       
       
    }



    return (
        <main className="mt-4">
            <div className="container">
                <h2>The Most Popular Game:</h2>
                <ul className="list-group">
                    {listTitle.map(function (curElem, index) {
                        return (
                            <li className="list-group-item bg-secondary text-white" key={index}>{curElem}
                                <button className="btn btn-warning mx-3"
                                  onClick={() => {
                                    removeItem(index);
                                  }}
                                >
                                    REMOVE
                                </button>
                            </li>

                        )
                    })}
                </ul>
                <div className="row mt-2">
                    <div className="col-4">

                        <form className="mt-4" onSubmit={controlSubmit}>

                            <label className="form-label" htmlFor="titleGame"><strong>ADD GAME:</strong></label>

                            <input className="form-control bg-primary text-white"
                                type="text"
                                placeholder="Name Game"
                                id="titleGame"
                                value={AddGame}
                                onChange={function (event) {
                                    setAddGame(event.target.value)
                                }}
                            />

                            <button type="submit" className="btn btn-success mt-2">SEND</button>
                        </form>
                    </div>
                    <div className="col-8">
                        <img className="img-fluid" width={300} src={ImgJoystick} alt="" />
                    </div>
                </div>



            </div>
        </main>
    )
}
export default Main;