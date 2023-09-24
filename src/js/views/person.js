import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import Heart from "../../img/heart.png";
import Back from "../../img/back-arrow.png";

export const Person = () => {
  const { uid } = useParams();
  const [personData, setPersonData] = useState(null);

  const { store, actions } = useContext(Context);

  const navigate = useNavigate();

  const handleback = () => {
    actions.handleBackToCollection("characters");
    navigate("/");
  };

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`https://www.swapi.tech/api/people/${uid}`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setPersonData(data);
        console.log(data);
      })

      .catch((error) => console.log("error", error));
  }, [uid]);

  return (
    <>
      <div className="container py-lg-5 py-0 text-light text-space">
        {personData ? (
          <div>
            <div className="d-flex flex-column flex-lg-row">
              <h2 className="text-warning pb-1 d-block d-lg-none text-center">
                {personData.result.properties.name}
              </h2>
              <div className=" d-flex justify-content-center mb-4 mb-md-0 align-items-center">
                <img
                  src={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`}
                  className="img-character "
                />
              </div>
              <div className="ms-0 ms-xl-0 ms-lg-5 data-box d-flex align-items-center flex-column mb-4 mb-md-0">
                <div className="text-lg-start text-center ps-md-5 ps-0">
                  <h2 className="text-warning pb-1 d-none d-lg-block">
                    {personData.result.properties.name}
                  </h2>
                  <p>Gender: {personData.result.properties.gender}</p>
                  <p>Birth Year: {personData.result.properties.birth_year}</p>
                  <p>Eye Color: {personData.result.properties.eye_color}</p>
                  <p>Skin Color: {personData.result.properties.skin_color}</p>
                  <p>Hair Color: {personData.result.properties.hair_color}</p>
                  <p>Height: {personData.result.properties.height}</p>
                  <p>Mass: {personData.result.properties.mass}</p>
                  <div className="d-flex justify-content-lg-start justify-content-center">
                    <button
                      // onClick={() => actions.addToFavs(person.uid)}
                      className=" mb-3 flashy-border text-light text-space border-4 outline-none heart-box mt-3 d-flex justify-content-center align-items-center"
                    >
                      <img src={Heart} className="heart" />
                    </button>
                  </div>
                  <div
                    className="d-flex align-items-center justify-content-center mt-4 mouse justify-content-lg-start justify-content-center"
                    onClick={handleback}
                  >
                    <img src={Back} className="back-arrow mb-3" />
                    <p className="ms-4 back-text">Back to characters</p>
                  </div>
                </div>
              </div>
              <div className="ms-md-5 d-none d-xl-block">
                The Star Wars universe is filled with captivating characters,
                each with their own allure and story to tell. From the valiant
                Jedi Knights to the formidable Sith Lords, characters like Luke
                Skywalker and Darth Vader embody the dichotomy of light and
                dark. Han Solo and Chewbacca bring charm and loyalty to their
                scoundrel ways, while Princess Leia inspires with her strength
                and leadership. Obi-Wan Kenobi's guidance and the droids' humor
                and mischief add depth to the saga. From Yoda's wisdom to Boba
                Fett's enigmatic presence, these characters have captured the
                imaginations of generations. They remind us that the struggle
                between good and evil is a timeless tale, resonating with us
                all.
                <br />
                May the Force be with them all, always.
              </div>
            </div>

            <div className="mt-4 d-block d-xl-none px-2">
              The Star Wars universe is filled with captivating characters, each
              with their own allure and story to tell. From the valiant Jedi
              Knights to the formidable Sith Lords, characters like Luke
              Skywalker and Darth Vader embody the dichotomy of light and dark.
              Han Solo and Chewbacca bring charm and loyalty to their scoundrel
              ways, while Princess Leia inspires with her strength and
              leadership. Obi-Wan Kenobi's guidance and the droids' humor and
              mischief add depth to the saga. From Yoda's wisdom to Boba Fett's
              enigmatic presence, these characters have captured the
              imaginations of generations. They remind us that the struggle
              between good and evil is a timeless tale, resonating with us all.
              May the Force be with them, always.
            </div>
          </div>
        ) : (
          <p className="ms-3">Loading person data...</p>
        )}
      </div>
    </>
  );
};
