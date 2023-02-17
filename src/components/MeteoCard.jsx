import { Row, Col, Button } from "react-bootstrap";
/* import { Link } from "react-router-dom"; */
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const MeteoCard = ({ data }) => {
  const dispatch = useDispatch();
  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: "1px solid #00000033", borderRadius: 4 }}
    >
      <Col xs={3}>
        <Link
          className="text-decoration-none"
          to={`/detail/lat=${data.lat}&lon=${data.lon}`}
        >
          {data.name}
        </Link>
      </Col>
      <Button
        color="primary"
        onClick={() => {
          dispatch({
            type: "ADD_TO_FAVOURITES",
            payload: data,
          });
        }}
      >
        Aggiungi Location ai preferiti
      </Button>
    </Row>
  );
};

export default MeteoCard;
