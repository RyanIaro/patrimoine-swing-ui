import Input from "@/app/components/input"
import Output1 from "@/app/components/output1";
import Output2 from "@/app/components/output2";

export default function Home() {
  return (
    <>
      <div className="w-2/5 h-full flex flex-col border-black border rounded-md text-sm">
        <Input/>
        <Output1/>
      </div>
      <div className="w-3/5 h-full border-black border rounded-sm">
        <div className="w-full h-[384px] relative">
          <Output2/>
        </div>
      </div>
    </>
  );
}
