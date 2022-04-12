import { useData } from "../../Context/DataContext";
import Compass from "../icons/compass.svg";
import Sunrise from "../icons/sunrise.svg";
import Sunset from "../icons/sunset.svg";
import ThermCold from "../icons/thermometer-colder.svg";
import ThermWarm from "../icons/thermometer-warmer.svg";
import Humidity from "../icons/humidity.svg";
import { ListGroup } from "react-bootstrap";
import "./TodayWeather.css";

function TodayWeather() {
    const { data, province } = useData();
    const today = data[0];
    const style = {
        transform: `rotate(${today.deg}deg)`,
    };

    return (
        data && (
            <>
                <div className="col-12 text-center">
                    <h1 className="m-0 province">{province.name + ",TR"}</h1>
                    <p className="m-0 date">
                        {today.time.weekday + ", " + today.time.fullTime}
                    </p>
                </div>

                <div className="col-12 col-sm-8 col-lg-4 col-xl-4 m-auto">
                    <img
                        src={require(`../icons/${today.weather.icon}.svg`)}
                        alt="icon"
                        id="icon"
                    />
                </div>

                <div className="col-12 col-sm-4 col-lg-3 col-xl-2 text-center m-auto">
                    <h1 className="temp">{today.temp.day + "°C"}</h1>
                    <p className="text-capitalize description">
                        {today.weather.description}
                    </p>
                </div>

                <div className="col-11 col-md-12 col-lg-5 col-xl-4 m-auto list">
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <div className="row">
                                <div className="col">
                                    <img src={ThermWarm} alt="max" />

                                    <span className="fw-bold">
                                        {today.temp.max + "°"}
                                    </span>
                                </div>

                                <div className="col">
                                    <img src={ThermCold} alt="min" />

                                    <span className="fw-bold">
                                        {today.temp.min + "°"}
                                    </span>
                                </div>
                            </div>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <div className="row">
                                <div className="col">
                                    <img src={Humidity} alt="humidity" />
                                    <span>{"Nem Oranı : "}</span>
                                    <span className="fw-bold">
                                        {today.humidity + "%"}
                                    </span>
                                </div>
                            </div>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <div className="row">
                                <div className="col">
                                    <img
                                        src={Compass}
                                        alt="compass"
                                        style={style}
                                    />
                                    <span>{"Rüzgar Hızı : "}</span>
                                    <span className="fw-bold">
                                        {today.speed + " km/h"}
                                    </span>
                                </div>
                            </div>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <div className="row">
                                <div className="col">
                                    <img src={Sunrise} alt="sunrise" />

                                    <span className="fw-bold">
                                        {today.sunrise}
                                    </span>
                                </div>

                                <div className="col">
                                    <img src={Sunset} alt="min" />

                                    <span className="fw-bold">
                                        {today.sunset}
                                    </span>
                                </div>
                            </div>
                        </ListGroup.Item>
                    </ListGroup>
                </div>
            </>
        )
    );
}

export default TodayWeather;
