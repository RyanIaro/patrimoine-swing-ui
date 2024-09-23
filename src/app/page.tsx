"use client"

import Input from "@/app/components/input"
import Output1 from "@/app/components/output1";
import Output2 from "@/app/components/output2";
import { useEffect, useState } from "react";

export default function Home() {
  const [agregat, setAgregat] = useState<boolean>(true);
  const [tresorerie, setTresorerie] = useState<boolean>(true);
  const [immobilisation, setImmobilisation] = useState<boolean>(true);
  const [obligations, setObligations] = useState<boolean>(true);
  const [number, setNumber] = useState<number>(4);

  useEffect(() => {
    setNumber(Math.floor(Math.random() * 4) + 1)
  }, [agregat, tresorerie, immobilisation, obligations])

  
  return (
    <>
      <div className="w-2/5 h-full flex flex-col border-black border rounded-md text-sm">
        <Input
          agregat={agregat}
          tresorerie={tresorerie}
          immobilisations={immobilisation}
          obligations={obligations}
        />
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
