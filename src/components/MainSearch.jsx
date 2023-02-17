import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import MeteoCard from "./MeteoCard";

const MainSearch = () => {
  const [cityQuery, setCityQuery] = useState("");
  const [cities, setCities] = useState([]);

  const appid = "&appid=98cbe272d79931257d4b95dde6f66147";

  const citiesEndpoint = "https://api.openweathermap.org/geo/1.0/direct?q=";

  const handleChange = (e) => {
    setCityQuery(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        citiesEndpoint + cityQuery + "&limit=5" + appid
      );
      if (response.ok) {
        const data = await response.json();
        /* setLat(data.lat);
        setLon(data.lon); */
        setCities(data);
        console.log(data);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1>Meteo App</h1>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={cityQuery}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {cities.map((cities, i) => (
            <MeteoCard key={i} data={cities} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};
export default MainSearch;
