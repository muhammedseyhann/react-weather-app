import "bootstrap/dist/css/bootstrap.min.css";
import { DataProvider } from "./Context/DataContext";
import { ThemeProvider } from "./Context/ThemeContext";
import Header from "./Components/Header/Header";
import TodayWeather from "./Components/TodayWeather/TodayWeather";
import NextDays from "./Components/NextDays/NextDays";
import Footer from "./Components/Footer/Footer";
import { Container, Row } from "react-bootstrap";

function App() {
    return (
        <ThemeProvider>
            <DataProvider>
                <Container fluid="md">
                    <Row className="my-4">
                        <Header />
                    </Row>
                    <Row className="justify-center">
                        <TodayWeather />
                    </Row>
                    <Row className="next-days">
                        <NextDays />
                    </Row>
                    <Footer />
                </Container>
            </DataProvider>
        </ThemeProvider>
    );
}

export default App;
