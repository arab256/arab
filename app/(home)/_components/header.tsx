import Image from "next/image"

export const Header = () => {
    return (
        <div className="w-full flex items-center gap-x-3 my-2">
            <Image src="/logo.jpg" alt="ARAB" width={60} height={60} />
            <h1 className="text-2xl font-bold ">National Amateur Radio Drill 2024</h1>
        </div>
    )
}