
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../redux/actions";
import { Link , useParams} from "react-router-dom";
import './Detail.css'


const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    dispatch(getDetail(id)).then(() => {
      setLoading(false);
    });
  }, [id, dispatch]);

  const details = useSelector((state) => state.detail);

  return (
    <div className="container">
      <div className="volver">
        <Link to="/home" className="letter">
          Volver
        </Link>{" "}
      </div>
      {loading ? (
        <div className="loading">
          <img src={"https://img1.picmix.com/output/stamp/normal/0/9/0/4/1604090_a14a5.gif"} alt="Cargando" />
          <p>Cargando...</p>
        </div>
      ) : (
        <div>
          {details.length ? (
            details.map((p) => (
              <Link to={`/home/${p.id}`} key={p.id}>
                <div>
                  <h1 className="names">{p.name.toUpperCase()}</h1>
                  <h2 className="id">#{p.id}</h2>
                </div>
                <div>
                  <img
                    className="imagen"
                    src={p.image}
                    alt={p.name}
                    width="350px"
                    height="300px"
                  />
                  <div>
                    <h3 className="type">
                      <ul className="type-list">
                        <li>
                          {p.types.map((type, index) =>
                            typeof type === "string"
                              ? type
                              : type?.name
                          ).join(" - ")}
                        </li>
                      </ul>
                    </h3>
                  </div>

                  <div>
                    <h4>
                      <ul>
                        <li className="lista">
                          Vida: {p.life} Ps - Fuerza: {p.attack} % - Defensa:{" "}
                          {p.defense} % - Velocidad: {p.speed} % - Altura:{" "}
                          {p.height} Mt - Peso: {p.weight} Kg
                        </li>
                      </ul>
                    </h4>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="not-found">
              <p>No se encontraron detalles de Pokémon.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Detail;
