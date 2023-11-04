import Image from "next/image";

interface Props {
    title: string;
    iconSrc: string;
    value: string;
}

const PriceInfoCard = ({ title, iconSrc, value }: Props) => {
  return (
      <div className={`price-info_card border-l-[#64748B]`}>
        <p className="text-base text-slate-300">{title}</p>

        <div className="flex gap-1">
            <Image
                src={iconSrc}
                alt={title}
                width={24}
                height={24}
            />
            <p className="text-2xl font-bold text-slate-100">&nbsp;&nbsp;{value}</p>
        </div>
      </div>
  );
};

export default PriceInfoCard;