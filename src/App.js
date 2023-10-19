import "./App.css";
import { useState, useEffect } from "react";
import Pretraga from "./Pretraga";
import Dodavanje from "./Dodavanje";
import PrikazPredmeta from "./PrikazPredmeta";

function App() {
  const [stanjeFilteri, setFiltere] = useState({});
  const [stanjePodaci, setPodatke] = useState({ kljucevi: [] });

  useEffect(() => {
    fetch("http://localhost:3000/serverPredmeti")
      .then((response) => response.json())
      .then((data) => {
        setPodatke({ kljucevi: data });
      });
  }, []);

  const obrisiPredmet = (zaBrisanje) => {
    const predmeti = stanjePodaci["klucevi"];
    const requestOptions = {
      method: "DELETE",
    };
    fetch(
      `http://localhost:3000/serverPredmeti/${zaBrisanje.id}`,
      requestOptions
    ).then((response) => {
      if (response.ok) {
        const idx = predmeti.indexOf(zaBrisanje);
        predmeti.splice(idx, 1);
        setPodatke({ klucevi: predmeti });
      }
    });
  };

  const azurirajFiltere = (parametriZaPretragu) => {
    setFiltere(parametriZaPretragu);
  };

  const dodajPredmet = (zaDodavanje) => {
    let predmeti = stanjePodaci["kljucevi"];

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(zaDodavanje),
    };
    fetch("http://localhost:3000/serverPredmeti", requestOptions)
      .then((response) => response.json())
      .then((povratniPodaci) => {
        predmeti.push(povratniPodaci);
        setPodatke({ kljucevi: predmeti });
      });
  };

  const filtrirajPredmete = (predmeti) => {
    const filtriraniPredmeti = [];
    if (!stanjeFilteri.trazenoIme) {
      return predmeti;
    }

    for (const predmet of predmeti) {
      if (
        stanjeFilteri.trazenoIme !== " " &&
        predmet.ime !== stanjeFilteri.trazenoIme
      ) {
        continue;
      }
      if (
        stanjeFilteri.trazenaCena !== 0 &&
        predmet.cena !== stanjeFilteri.trazenaCena
      ) {
        continue;
      }
      if (
        stanjeFilteri.trazenaKategorija !== " " &&
        predmet.kategorija !== stanjeFilteri.trazenaKategorija
      ) {
        continue;
      }
      filtriraniPredmeti.push(predmet);
    }
    return filtriraniPredmeti;
  };

  return (
    <div className="container">
      <div className="row mt-3">
        <PrikazPredmeta
          callbackBrisanje={obrisiPredmet}
          prosledeniFiltriraniPredmeti={filtrirajPredmete(
            stanjePodaci["kljucevi"]
          )}
        />
      </div>
      <div className="row mt-3">
        <Pretraga callbackPretraga={azurirajFiltere} />
      </div>
      <div className="row mt-3">
        <Dodavanje callbackDodavanje={dodajPredmet} />
      </div>
    </div>
  );
}

export default App;
