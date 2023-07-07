import Image from "next/image";

interface NothingFoundProps {
  caption?: string;
}

export default function NothingFound(props: NothingFoundProps) {
  const { caption } = props;
  return (
    <div className="w=full flex items-center justify-center">
      <div className="flex flex-col gap-1 items-center justify-center">
        <Image width={200} height={200} src="/no_data.svg" alt="no data sign" />
        <p className="font-bold font-nunito text-lg">{caption}</p>
      </div>
    </div>
  );
}
