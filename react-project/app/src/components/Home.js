import React, { Component } from 'react';
import logo from '../static/space.png';

const API_Launches = 'http://localhost:8001/launches';
const API_Launchpads = 'http://localhost:8001/launchpads';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      spaceData : [],
      launchPad : [],
      resultCtr : 0
    };
  }

  componentDidMount(){

    const requestOptions = {  method: 'GET' };

     // fetch launches data
    fetch(API_Launches, requestOptions)
    .then(response => {
        if (!response.ok) { 
            return Promise.reject(response.statusText);
        }
        return response.json();
    })
    .then(data => {
        this.setState({ spaceData: data });
        this.setState({ resultCtr: data.length });     
    });

    // fetch launch pads
    fetch(API_Launchpads, requestOptions)
    .then(response => {
        if (!response.ok) { 
            return Promise.reject(response.statusText);
        }
        return response.json();
    })
    .then(data => {
        this.setState({ launchPad: data });     
    });

  }

  renderLaunchPad() {
    let launchPad = this.state.launchPad;
    let launchPadItems = launchPad.map((details) =>
            <option key={details.id}>{details.full_name}</option>
    );

    return launchPadItems;
  }

  renderYearDate() {
    let spaceData = this.state.spaceData;
    let ctr = 0;
    let yearsItems = spaceData.map((space) => {
      let year = space.launch_date_local;
      ctr += 1;
      return <option key={ctr}>{year.slice(0,4)}</option>
    });

    return yearsItems;
  }
  
  renderMissionDetails() {
    let spaceData = this.state.spaceData;
    let ctr = 0;
    let spaceDataDetails = spaceData.map((space) => {
      ctr += 1;
      return <div key={ctr} className="result-detail"> 
        <img src={space.links.mission_patch} className="mission-logo" alt="" />
        <label>{space.rocket.rocket_name}</label> - <label>{space.payloads[0].payload_id}</label>
        {
          (!space.launch_success || !space.land_success) &&
          <label className="failed-mission">{" - Failed Mission"}</label>
        }
      </div> 
    });

    return spaceDataDetails;
  }

  render() {
    return (
      <div className="App">

        <header className="logo-container">
          <img src={logo} className="dd-logo" alt="" />
          <h1 className="App-title">Discover Space Missions</h1>
        </header>

        <div className="launch-searchresult"> 

          <div className="col-md-12 launch-search-field">
            
                <div className="search-field-group">
                    <label htmlFor="keywords" className="search-fields">Keywords</label>
                    <input type="text" placeholder="eg Falcon" className="search-fields"  name="keywords"/>
                </div>
                <div className="search-field-group">
                    <label htmlFor="launchPad" className="search-fields">Launch Pad</label>
                    <select className="search-fields">
                      <option key={null}>{"Any"}</option>
                      {this.renderLaunchPad()}
                    </select>
                </div>

                <div className="search-field-group">
                    <label htmlFor="keywords" className="search-fields">Min Year</label>
                    <select className="search-fields">
                      <option key={null}>{"Any"}</option>
                      {this.renderYearDate()}
                    </select>
                </div>

                <div className="search-field-group">
                    <label htmlFor="keywords" className="search-fields">Max Year</label>
                    <select className="search-fields">
                      <option key={null}>{"Any"}</option>
                      {this.renderYearDate()}
                    </select>
                </div>

                <div className="search-field-group">
                  <button className="btn-apply">Apply</button>
                </div>
            
          </div>

          <div className="col-md-12 launch-result">
              <h3 className="result-count">Showing {this.state.resultCtr} Mission(s)</h3>
              <div className="col-md-12">
                {this.renderMissionDetails()}
              </div>
          </div>

        </div>

      </div>
    );
  }
}

export default Home;
