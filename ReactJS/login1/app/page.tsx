import Image from "next/image";
import login from "./components/login";
import Counter from "./state-management/userState";
import Message from "./state-management/text"
import Mapping from "./state-management/mapping"

export default function Home() {
  return(
    <div className="bg-white text-black h-screen">
      <Counter />
      <Message />
      <Mapping />
    </div>
  )
}