import React from 'react'
import {Link} from 'react-router-dom'


export const CardFile = () => {
    return (
        <div>
              <div className="card my-profile">
      <Link to='/user'> <img
        style={{ width: "100%", borderRadius: "50%" }}
        src="https://www.tutorialrepublic.com/examples/images/avatar/2.jpg"
        className="card-img-top"
        alt=""
      /></Link>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Cras justo odio</li>
        <li className="list-group-item">Dapibus ac facilisis in</li>
        <li className="list-group-item">Vestibulum at eros</li>
      </ul>
     
    </div>
        </div>
    )
}



export default CardFile