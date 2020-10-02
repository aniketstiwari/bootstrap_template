import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import './App.css';

function App() {
  return (
    <>
    <h1>Welcome</h1>
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <div className="card" >
            <img src="https://picsum.photos/200/301" className="card-img-top" alt="..." width="100px"  height="200px" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div classNameName="col-sm">
          <div className="card" >
          <img src="https://picsum.photos/200/301" className="card-img-top" alt="..." width="100px" height="200px"/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        </div>
        <div classNameName="col-sm">
          <div className="card" >
          <img src="https://picsum.photos/200/301" className="card-img-top" alt="..." width="100px" height="200px"/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        </div>
      </div>
    </div>
  </>
  );
}

export default App;
