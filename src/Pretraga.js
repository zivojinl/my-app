import { useState } from "react";

function Pretraga(props) {
  const [stanjeIme, setIme] = useState("");
  const [stanjeCena, setCena] = useState(0);
  const [stanjeKategorija, setKategorija] = useState("");

  const pritisnutaPretraga = () => {
    props.callbackPretraga({
      trazenoIme: stanjeIme,
      trazenaCena: stanjeCena,
      trazenaKategorija: stanjeKategorija,
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h2>Pretraga</h2>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <label for="ime-polje">Ime:</label>
          <input
            className="form-control"
            id="ime-polje"
            type="text"
            value={stanjeIme}
            onChange={(e) => setIme(e.target.value)}
          ></input>
        </div>
        <div className="col">
          <label for="cena-polje">Cena:</label>
          <input
            className="form-control"
            id="cena-polje"
            type="number"
            value={stanjeCena}
            onChange={(e) => setCena(e.target.value)}
          ></input>
        </div>
        <div className="col">
          <label for="specijalnost-polje">Kategorija:</label>
          <input
            className="form-control"
            id="specijalnost-polje"
            type="text"
            value={stanjeKategorija}
            onChange={(e) => setKategorija(e.target.value)}
          ></input>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-4" />
        <button
          type="button"
          className="col-4 btn btn-primary"
          onClick={pritisnutaPretraga}
        >
          Pretrazi
        </button>
      </div>
    </div>
  );
}

export default Pretraga;
