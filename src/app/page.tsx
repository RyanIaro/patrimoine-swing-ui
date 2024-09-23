import Input from "@/app/components/input"

export default function Home() {
  return (
    <>
      <div className="w-2/5 h-full flex flex-col border-black border rounded-md text-sm">
        <Input/>
        <div className="flex flex-col size-full border-black border rounded-sm">
          <div className="w-full h-2/5">
          output-1-1
          </div>
          <div className="w-full h-3/5">
          output-1-2
          </div>
        </div>
      </div>
      <div className="w-3/5 h-full border-black border rounded-sm">output-2</div>
    </>
  );
}
