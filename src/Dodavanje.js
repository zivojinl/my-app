import { useState } from "react";

function Dodavanje(props) {
  const [stanjeIme, setIme] = useState("");
  const [stanjeCena, setCena] = useState(0);
  const [stanjeKategorija, setKategorija] = useState("");

  const pritisnutoDodajDugme = () => {
    props.callbackDodavanje({
      ime: stanjeIme,
      cena: stanjeCena,
      kategorija: stanjeKategorija,
    });
    setIme("");
    setCena("0");
    setKategorija("");
  };

  return (
    <div className="container">
      <div className="row">
        {" "}
        <h2>Dodaj</h2>
      </div>
      <div className="row">
        <label for="ime-polje">Ime:</label>
        <input
          className="form-control"
          id="ime-polje"
          type="text"
          value={stanjeIme}
          onChange={(e) => setIme(e.target.value)}
        ></input>
        <label for="cena-polje">Cena:</label>
        <input
          className="form-control"
          id="cena-polje"
          type="number"
          value={stanjeCena}
          onChange={(e) => setCena(e.target.value)}
        ></input>
        <label for="specijalnost-polje">Kategorija:</label>
        <input
          className="form-control"
          id="specijalnost-polje"
          type="text"
          value={stanjeKategorija}
          onChange={(e) => setKategorija(e.target.value)}
        ></input>
      </div>
      <div className="row mt-3">
        {" "}
        <button
          type="button"
          className="btn btn-primary"
          onClick={pritisnutoDodajDugme}
        >
          Dodaj
        </button>
      </div>
    </div>
  );
}

export default Dodavanje;
