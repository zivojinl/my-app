function PrikazPredmeta({ callbackBrisanje, prosledeniFiltriraniPredmeti }) {
  const prilkaziPredmete = (predmetZaPrikaz) => {
    return (
      <tr>
        <td>{predmetZaPrikaz.ime}</td>
        <td>{predmetZaPrikaz.cena}</td>
        <td>{predmetZaPrikaz.kategorija}</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => callbackBrisanje(predmetZaPrikaz)}
          >
            Obrisi
          </button>
        </td>
      </tr>
    );
  };
  return (
    <div className="container">
      <div className="row">
        <h2>Predmeti</h2>
      </div>
      <div className="row">
        <table className="table table-striped">
          <thead>
            {" "}
            <tr>
              <th scope="col">Ime</th>
              <th scope="col">Cena</th>
              <th scope="col">Kategorija</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody> {prosledeniFiltriraniPredmeti.map(prilkaziPredmete)}</tbody>
        </table>
      </div>
    </div>
  );
}

export default PrikazPredmeta;
