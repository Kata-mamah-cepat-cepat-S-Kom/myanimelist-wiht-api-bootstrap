import Image from "next/image";
import Link from "next/link";

import { Container, Card } from "react-bootstrap";

const ListAnime = ({ api }) => {
  return (
    <>
      {api.data.map((anime) => (
        <Link key={anime.mal_id} href={`/${anime.mal_id}`}>
          <Card className="text-center">
            <Image src={anime.images.webp.image_url} width={350} height={350} />
            <h1>{anime.title}</h1>
          </Card>
        </Link>
      ))}
    </>
  );
};

export default ListAnime;
