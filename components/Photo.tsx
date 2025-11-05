import Image from "next/image";

export default function Photo({src, alt, className=""}:{src?:string; alt:string; className?:string}) {
  if(!src) {
    return (
      <div className={`bg-white/5 border border-white/10 rounded-xl grid place-items-center text-gray-400 ${className}`}
           style={{aspectRatio:"16/9"}}>
        PHOTO
      </div>
    );
  }
  return (
    <div className={className} style={{position:"relative", aspectRatio:"16/9"}}>
      <Image src={src} alt={alt} fill className="object-cover rounded-xl border border-white/10"/>
    </div>
  );
}
