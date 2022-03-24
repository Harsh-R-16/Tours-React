import { useState, useEffect } from "react";
import Tour from "./Tour";
import { H1, Hr, Section } from "./styledComponents";
import "./main.css";
import { data } from "./data";
let Tours = () => {
  let [tour, setTour] = useState([]);
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setTour(data);
      setLoading(false);
      console.log(data);
    }, 700);
  }, []);
  const delHandler = (e) => {
    console.log(e.target.id);
    let newTour = tour.filter((i) => i.id !== +e.target.id);
    setTour(newTour);
  };
  return (
    <Section className="tour">
      <H1 className="toursH1">Our Tours</H1>
      <Hr />

      <img
        id="loading"
        src="https://www.bing.com/th/id/OGC.ad069c63807cc0c99b0ff9b127b72c37?pid=1.7&rurl=https%3a%2f%2fi.pinimg.com%2foriginals%2fcb%2f17%2fb8%2fcb17b80a942d7c317a35ff1324fae12f.gif&ehk=VoIjHurBTObvgNg8%2bR6vVIF9B3cJtt8Vz84e8ky5HGQ%3d"
        alt=""
        className={!loading && "display"}
      />
      <section className={loading && "display"}>
        {tour.length ? (
          tour.map((i) => {
            return <Tour {...i} delHandler={delHandler} />;
          })
        ) : (
          <button
            id="refresh"
            onClick={() => {
              console.log("refresh");
              setTour(data);
            }}
          >
            Refresh
          </button>
        )}
      </section>
    </Section>
  );
};
export default Tours;
