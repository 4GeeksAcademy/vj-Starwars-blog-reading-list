import React from "react";
import { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import Heart from "../../img/heart.png";

export const Home = () => {
  const { store, actions } = useContext(Context);

  const [favsOn, setfavsOn] = useState(false);

  const triggerTabList = document.querySelectorAll("#myTab button");
  triggerTabList.forEach((triggerEl) => {
    const tabTrigger = new bootstrap.Tab(triggerEl);

    triggerEl.addEventListener("click", (event) => {
      event.preventDefault();
      tabTrigger.show();
    });
  });

  return (
    <>
      <div className="bg-black container">
        {/*TABS */}

        <nav className="sticky-top bg-black">
          <div
            className="nav nav-tabs mb-md-3 d-flex justify-content-center"
            id="nav-tab"
            role="tablist"
          >
            <button
              className="tab-button text-space up active"
              id="nav-home-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-home"
              type="button"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
            >
              Characters
            </button>
            <button
              className="tab-button text-space up "
              id="nav-profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-profile"
              type="button"
              role="tab"
              aria-controls="nav-profile"
              aria-selected="false"
            >
              Vehicles
            </button>
            <button
              className="tab-button text-space up"
              id="nav-contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-contact"
              type="button"
              role="tab"
              aria-controls="nav-contact"
              aria-selected="false"
            >
              Planets
            </button>
            <button
              className="tab-button text-space up"
              id="nav-disabled-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-disabled"
              type="button"
              role="tab"
              aria-controls="nav-disabled"
              aria-selected="false"
            >
              Favourites
            </button>
          </div>
        </nav>

        {/*CONTENT 1 */}

        <div className="tab-content" id="nav-tabContent">
          <div
            className={`tab-pane fade ${
              store.backToCollection === "characters" ? "show active" : ""
            }`}
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
            tabIndex={0}
          >
            <div className="container py-2">
              {/*CONTENT CHARACTERS*/}
              <div className="bg-black text-space row d-flex justify-content-center">
                {store.people.map((person) => (
                  <div key={person.uid} className="col-6 col-lg-2  mx-5">
                    <div className="d-flex flex-column justify-content-center align-items-center ">
                      <Link to={`/person/${person.uid}`}>
                        <img
                          src={`https://starwars-visualguide.com/assets/img/characters/${person.uid}.jpg`}
                          className=" m-1 img-size rounded-circle "
                          onError={({ currentTarget }) => {
                            currentTarget.onerror = null;
                            currentTarget.src =
                              "https://starwars-visualguide.com/assets/img/placeholder.jpg";
                          }}
                        />
                      </Link>

                      <button
                        onClick={() => actions.addToFavs(person.uid)}
                        className=" mb-3 flashy-border text-light text-space border-4 outline-none heart-box mt-3 d-flex justify-content-center align-items-center"
                      >
                        <img src={Heart} className="heart" />
                      </button>

                      <p className="text-decoration-none  text-light  text-center">
                        {" "}
                        {person.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/*CONTENT 2 */}

          <div
            className={`tab-pane fade ${
              store.backToCollection === "vehicles" ? "show active" : ""
            }`}
            id="nav-profile"
            role="tabpanel"
            aria-labelledby="nav-profile-tab"
            tabindex="0"
          >
            <div className="container py-2">
              {/*CONTENT VEHICLES*/}
              <div className="bg-black text-space row d-flex justify-content-center">
                {store.vehicles.map((vehicle) => (
                  <div key={vehicle.uid} className="col-6 col-lg-2  mx-5">
                    <div className="d-flex flex-column justify-content-center align-items-center">
                      <Link to={`/vehicle/${vehicle.uid}`}>
                        <img
                          src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`}
                          className=" m-1 img-size rounded-circle"
                          onError={({ currentTarget }) => {
                            currentTarget.onerror = null;
                            currentTarget.src =
                              "https://starwars-visualguide.com/assets/img/placeholder.jpg";
                          }}
                        />
                      </Link>
                      <button className=" mb-3 flashy-border text-light text-space border-4 outline-none heart-box mt-3 d-flex justify-content-center align-items-center">
                        <img src={Heart} className="heart" />
                      </button>
                      <p className="text-decoration-none  text-light mb-5 text-center">
                        {vehicle.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div
            className={`tab-pane fade ${
              store.backToCollection === "planets" ? "show active" : ""
            }`}
            id="nav-contact"
            role="tabpanel"
            aria-labelledby="nav-contact-tab"
            tabindex="0"
          >
            <div className="container py-2">
              {/*CONTENT PLANETS*/}
              <div className="bg-black text-space row d-flex justify-content-center">
                {store.planets
                  .filter((planet, i) => i !== 0)
                  .map((planet) => (
                    <div key={planet.uid} className="col-6 col-lg-2  mx-5">
                      <div className="d-flex flex-column justify-content-center align-items-center">
                        <Link to={`/planet/${planet.uid}`}>
                          <img
                            src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`}
                            className=" m-1 img-size rounded-circle"
                            onError={({ currentTarget }) => {
                              currentTarget.onerror = null;
                              currentTarget.src =
                                "https://starwars-visualguide.com/assets/img/placeholder.jpg";
                            }}
                          />
                        </Link>
                        <button className=" mb-3 flashy-border text-light text-space border-4 outline-none heart-box mt-3 d-flex justify-content-center align-items-center">
                          <img src={Heart} className="heart" />
                        </button>
                        <p className="text-decoration-none  text-light mb-5 text-center">
                          {planet.name}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          {/*CONTENT 4 */}

          <div
            className="tab-pane fade"
            id="nav-disabled"
            role="tabpanel"
            aria-labelledby="nav-disabled-tab"
            tabindex="0"
          >
            {" "}
            {/*CONTENT FAVS*/}{" "}
            {favsOn ? (
              store.favs.length > 0 ? (
                store.favs.map((fav) => (
                  <div key={fav.uid}>
                    <p>{fav.name}</p>
                  </div>
                ))
              ) : (
                <p className="text-light">No favs added yet</p>
              )
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
};
