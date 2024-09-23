"use client"

import Output1 from "@/app/components/output1";
import Output2 from "@/app/components/output2";
import { useEffect, useState } from "react";

export default function Home() {
  const [agregat, setAgregat] = useState<boolean>(true);
  const [tresorerie, setTresorerie] = useState<boolean>(true);
  const [immobilisations, setImmobilisation] = useState<boolean>(true);
  const [obligations, setObligations] = useState<boolean>(true);
  const [number, setNumber] = useState<number>(4);

  useEffect(() => {
    setNumber(Math.floor(Math.random() * 4) + 1)
  }, [agregat, tresorerie, immobilisations, obligations])


  return (
    <>
      <div className="w-2/5 h-full flex flex-col border-black border rounded-md text-sm">
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
              <input checked={agregat} onClick={()=> setAgregat(!agregat)} type="checkbox" name="Agrégat" id="Agrégat" />
              <label className="ml-1" htmlFor="Agrégat">Agrégat</label>
            </div>
            <div>
              <input checked={tresorerie} onClick={()=> setTresorerie(!tresorerie)} type="checkbox" name="Trésorerie" id="Trésorerie" />
              <label className="ml-1" htmlFor="Trésorerie">Trésorerie</label>
            </div>
            <div>
              <input checked={immobilisations} onClick={()=> setImmobilisation(!immobilisations)} type="checkbox" name="Immobilisation" id="Immobilisation" />
              <label className="ml-1" htmlFor="Immobilisation">Immobilisation</label>
            </div>
            <div>
              <input checked={obligations} onClick={()=> setObligations(!obligations)} type="checkbox" name="Obligations" id="Obligations" />
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
        <Output1/>
      </div>
      <div className="flex flex-col justify-center w-3/5 h-full rounded-md">
        <div className="w-full h-[384px] relative">
          <Output2
          number={number}
          />
        </div>
      </div>
    </>
  );
}
