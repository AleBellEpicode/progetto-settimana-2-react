import { Col, ListGroup, ListGroupItem } from "react-bootstrap";
import { format } from "date-fns";

const Meteo = ({ data }) => {
  console.log(data);
  return (
    <ListGroup>
      <>
        <ListGroupItem>
          The temperature in {data.city?.name && data.city.name} at{" "}
          {data.list && data.list[0].dt_txt} is gonna be :{" "}
          {data.list && data.list[0].main?.temp} degrees
        </ListGroupItem>
        <ListGroup.Item className="list-style-none">
          <Col key={data.list && data.list[0].dt} className="my-4"></Col>
        </ListGroup.Item>
      </>
    </ListGroup>
  );
};

export default Meteo;
