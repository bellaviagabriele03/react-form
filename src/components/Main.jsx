function Main() {

    const listTitle = [
        "Elden Ring",
        "God of war",
        "Rainbow Six Siege",
        "Call of Duty",
        "GTA VI",
        "Dark Souls",
        "Fc 26"
    ]



    return (
        <main className="mt-4">
            <div className="container">
                <h2>The Most Popular Game:</h2>
                <ul className="list-group">
                    {listTitle.map(function (curElem, index) {
                        return (
                            <li className="list-group-item bg-secondary text-white" key={index}>{curElem}</li>
                        )
                    })}
                </ul>
                <div className="row">
                    <div className="col-4">
                        <form className="mt-4" action="">
                            <label className="form-label" For=""><strong>ADD GAME:</strong></label>
                            <input className="form-control bg-primary text-white" type="text" placeholder="Name Game" />
                            <button className="btn btn-warning mt-2">SEND</button>
                        </form>
                    </div>
                    <div className="col-8">
                        <img src="" alt="" />
                    </div>
                </div>



            </div>
        </main>
    )
}
export default Main;