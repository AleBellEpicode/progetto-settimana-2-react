import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Meteo from "./Meteo";
const CompanySearchResults = () => {
  const [meteo, setMeteo] = useState([]);
  const params = useParams();

  const baseEndpoint =
    "https://api.openweathermap.org/data/2.5/forecast?&units=metric&";

  const appid = "&appid=98cbe272d79931257d4b95dde6f66147";
  useEffect(() => {
    getMeteo();
    console.log(meteo);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.cityCoord]);

  const getMeteo = async () => {
    try {
      const response = await fetch(baseEndpoint + params.cityCoord + appid);
      if (response.ok) {
        const data = await response.json();
        setMeteo(data);
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
        <Col>
          <Meteo key={meteo.dt} data={meteo} />
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;
