import cities from "./turkey_cities.json";
import "./Header.css";
import { useTheme } from "../../Context/ThemeContext";
import { useData } from "../../Context/DataContext";

function Header() {
    const { theme, setTheme, lightTheme, darkTheme } = useTheme();
    const { province, setProvince } = useData();

    const handleInput = (e) => {
        const value = e.target.value;
        if (value === "light") {
            setTheme({ name: "dark", color: darkTheme });
            localStorage.theme = "dark";
        } else {
            setTheme({ name: "light", color: lightTheme });
            localStorage.theme = "light";
        }
    };

    const handleSelect = (e) => {
        const value = e.target.value;
        const city = cities.filter((city) => city.name === value);
        setProvince({
            latitude: city[0].latitude,
            longitude: city[0].longitude,
            name: city[0].name,
        });
    };

    return (
        <>
            <div className="col-8">
                <select
                    name="province"
                    value={province.name}
                    className="form-select text-center fw-bold select"
                    onChange={handleSelect}
                >
                    {cities.map((city) => {
                        return (
                            <option value={city.name} key={city.id}>
                                {city.name}
                            </option>
                        );
                    })}
                </select>
            </div>

            <div className="col-4 d-flex justify-content-end">
                <div className="form-check form-switch">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"
                        value={theme.name}
                        checked={theme.name === "dark" ? true : false}
                        onChange={handleInput}
                    />
                    <label
                        className="form-check-label"
                        htmlFor="flexSwitchCheckDefault"
                    ></label>
                </div>
            </div>
        </>
    );
}

export default Header;
