import { createContext, useEffect, useState, useContext } from "react";
import axios from "axios";

const getTime = (unix) => {
    const current = new Date(unix * 1000);

    const optionsFullTime = {
        year: "numeric",
        month: "long",
        day: "numeric",
    };

    const optionsClock = {
        hour: "numeric",
        minute: "numeric",
    };

    const optionsWeekDay = { weekday: "short" };

    const fullTime = current.toLocaleString("tr-TR", optionsFullTime);
    const clock = current.toLocaleString("tr-TR", optionsClock);
    const weekday = current.toLocaleString("tr-TR", optionsWeekDay);
    return { fullTime, clock, weekday };
};

const DataContext = createContext();

const DataProvider = ({ children }) => {
    const [province, setProvince] = useState({
        name: "İstanbul",
        latitude: "41.0053",
        longitude: "28.9770",
    });

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchingData = async () => {
            await axios(
                `https://api.openweathermap.org/data/2.5/onecall?lat=${province.latitude}&lon=${province.longitude}&exclude=current,minutely,hourly,alerts&units=metric&lang=tr&appid=${process.env.REACT_APP_API_KEY}`
            )
                .then((res) => {
                    const days = res.data.daily;
                    const result = days.map((day) => {
                        return {
                            time: {
                                weekday: getTime(day.dt).weekday,
                                fullTime: getTime(day.dt).fullTime,
                            },
                            humidity: day.humidity,
                            sunrise: getTime(day.sunrise).clock,
                            sunset: getTime(day.sunset).clock,
                            temp: {
                                min: Math.round(day.temp.min),
                                max: Math.round(day.temp.max),
                                day: Math.round(day.temp.day),
                            },
                            speed: Math.round(day.wind_speed),
                            deg: day.wind_deg,
                            weather: {
                                description: day.weather[0].description,
                                icon: day.weather[0].icon,
                            },
                        };
                    });
                    setData(result);
                    setLoading(true);
                })
                .catch((err) => console.log(err));
        };
        fetchingData();
    }, [province]);

    if (!loading) {
        return (
            <div
                className="d-flex justify-content-center align-items-center"
                style={{ height: "100vh", width: "100vw" }}
            >
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    const values = { data, loading, province, setProvince };

    return (
        <DataContext.Provider value={values}>{children}</DataContext.Provider>
    );
};

const useData = () => useContext(DataContext);
export { useData, DataProvider };
