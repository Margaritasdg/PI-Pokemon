
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../actions/index.js";
import { Link , useParams} from "react-router-dom";
import './Detail.css'

export default function Detail() {
  const dispatch = useDispatch();
  const {id}= useParams();

  useEffect(() => {
    dispatch(getDetail(id));
  }, [id,dispatch]);

  const  details = useSelector((state) => state.detail);
      //console.log(details)


  return (
    <div className="container">
      <div className="volver">
      <Link to="/home" className="letter"> Volver </Link> </div>
      <div>
        {details.length ? (
          details.map((p) => (
            <Link to={`/home/${p.id}`}>
              <div>
                <h1 className="names"> {p.name.toUpperCase()}</h1>
                <h2 className="id">#{p.id}</h2>
              </div>
              <div>
                <img  className="imagen" src={p.background_image? p.background_image: p.image } alt='not found' />
                {p.types.length === 2 ? (
                  <div>
                    <h3 className="type1">
                    <ul className="type">
                      <li>
                        {
                        typeof p.types[0] === 'string' ? p.types[0] : p.types[0]?.name}-  
                        {
                        typeof p.types[1] === 'string' ? p.types[1] : p.types[1]?.name}
                
                      </li>
                    </ul>
                    </h3>
                  </div>
                ) : (
                  <div>
                    <h3 className="type2">{
                    typeof p.types[0] === 'string' ? p.types[0] : p.types[0]?.name}</h3>
                  </div>
                )}

                <div>
                  <h4>
                  <ul>
                    <li className="lista">
                      Vida: {p.life} Ps -
                      Fuerza: {p.attack} % -
                      Defensa: {p.defense} % -
                      Velocidad: {p.speed} % -
                      Altura: {p.height} Mt -
                      Peso: {p.weight} Kg
                    </li>
                  </ul>
                  </h4>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <img
            src={"https://thumbs.gfycat.com/IncredibleAshamedFreshwatereel-size_restricted.gif"}
            width="450px" height="400px"
            alt="Not found"
          />
        )}
      </div>
    </div>
  );
}
//{p.image} alt="" width="300px" height="300px"