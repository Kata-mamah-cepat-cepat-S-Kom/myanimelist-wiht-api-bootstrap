import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import ListAnime from "@/components/ListAnime";

const Home = async () => {
  const API = process.env.NEXT_PUBLC_API_BASE_URL;

  const response = await fetch(`${API}/top/anime`);

  const topAnime = await response.json();

  return (
    <>
      <Container>
        <Row>
          <Col>
            <p>test</p>
            <ListAnime api={topAnime} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
