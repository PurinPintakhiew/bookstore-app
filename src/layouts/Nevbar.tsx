import Link from "next/link";

export default function Nevbar() {
  return (
    <div className="bg-white">
      <div className="container flex justify-between items-center p-4">
        <div className="font-bold text-2xl">Meow Library</div>
        <div className="flex gap-2">
          <div className="font-bold text-lg border-r p-2">
            <Link href={"/"}>Book</Link>
          </div>
          <div className="font-bold text-lg border-r p-2">
            <Link href={"/"}>Category</Link>
          </div>
          <div className="font-bold text-lg p-2">
            <Link href={"/"}>Author</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
