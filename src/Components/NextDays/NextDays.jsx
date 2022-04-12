import { useData } from "../../Context/DataContext";
import "./NextDays.css";

function NextDays() {
    const { data } = useData();
    return (
        <>
            <div className="col-11 col-md-12 m-auto">
                <h2 className="mt-3 mb-3 fw-bolder">7 Günlük Tahmin</h2>
                <hr />
            </div>
            <div className="col-12">
                <div className="row">
                    {data &&
                        data.map((day, index) => {
                            return (
                                <div
                                    className="col-4 col-sm-3 m-auto col-lg-1 text-center mb-3 p-2 border-box"
                                    key={index}
                                >
                                    <p className="fw-bold m-0">
                                        {day.time.weekday}
                                    </p>
                                    <img
                                        src={require(`../icons/${day.weather.icon}.svg`)}
                                        alt="icon"
                                    />

                                    <p className="m-0">{day.temp.day + "°"}</p>
                                </div>
                            );
                        })}
                </div>
            </div>
        </>
    );
}

export default NextDays;
