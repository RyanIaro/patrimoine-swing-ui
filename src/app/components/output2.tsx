import Image from "next/image";

export default function Output2({number}: {number: number}) {
  return (
    <Image
    src={`/${number}.png`}
    alt="chart"
    fill
    />
  );
}