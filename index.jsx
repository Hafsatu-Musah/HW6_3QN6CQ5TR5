function App(){
    const [data, setData] = React.useState({});

    React.useEffect(()=>{
        async function fetchData() {
            const response = await axios.get('https://corona.lmao.ninja/v2/countries/gh',);
            setData(response.data)
        }
        fetchData();
    }, []);

    return(
        <React.Fragment>
            <div className="status_break">
          <img src="../static/img/globe.png" alt="" />
          <div className="status_side">
            <h6>Stats Overview</h6>
              <p>{data.country}</p>
          </div>
        </div>
        <div className="status_break">
          <img src="../static/img/active.png" alt="" />
          <div className="status_side">
            <h6>Total Cases</h6>
            <p>{data.cases}</p>

          </div>
        </div>
        <div className="status_break">
          <img src="../static/img/recovered.png" alt="" />
          <div className="status_side">
            <h6>Total Recovered</h6>
          <p>{data.recovered}</p>
          </div>
        </div>
        <div className="status_break">
          <img src="../static/img/deaths.png" alt="" />
          <div className="status_side">
            <h6>Total Deaths</h6>
            <p>{data.deaths}</p>
          </div>
        </div>
        </React.Fragment>
    );
}


ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>, document.getElementById('root'));
