export default function Input({
  agregat,
  tresorerie,
  immobilisations,
  obligations
}: {
  agregat: boolean,
  tresorerie: boolean,
  immobilisations: boolean,
  obligations: boolean
}) {
  return (
    <div className="flex flex-col h-28 gap-1">
      <div className="m-1">
        <label htmlFor="possesseur">Patrimoine</label>
        <select className="ml-1 rounded-sm shadow-md" name="possesseur" id="possesseur">
          <option value="Crésus">Crésus</option>
          <option value="Myriade fr">Myriade fr</option>
        </select>
      </div>
      <div className="flex justify-around">
        <div>
          <input checked={agregat} type="checkbox" name="Agrégat" id="Agrégat" />
          <label className="ml-1" htmlFor="Agrégat">Agrégat</label>
        </div>
        <div>
          <input checked={tresorerie} type="checkbox" name="Trésorerie" id="Trésorerie" />
          <label className="ml-1" htmlFor="Trésorerie">Trésorerie</label>
        </div>
        <div>
          <input checked={immobilisations} type="checkbox" name="Immobilisation" id="Immobilisation" />
          <label className="ml-1" htmlFor="Immobilisation">Immobilisation</label>
        </div>
        <div>
          <input checked={obligations} type="checkbox" name="Obligations" id="Obligations" />
          <label className="ml-1" htmlFor="Obligations">Obligations</label>
        </div>
      </div>
      <div className="m-1 flex">
        <div>
          <label htmlFor="De">De: </label>
          <input className="mr-1 rounded-sm shadow-md" type="date" name="De" id="De" defaultValue={new Date().toISOString().slice(0,10)}/>
        </div>
        <div>
          <label htmlFor="À">À: </label>
          <input className="mr-1 rounded-sm shadow-md" type="date" name="À" id="À" defaultValue="2024-12-01"/>
        </div>
      </div>
    </div>
  );
}