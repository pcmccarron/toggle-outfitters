import Image from "next/image";
import styles from "@/styles/Home.module.css";


const InitialContent = () => (
  <main className={`${styles.main} flex flex-col items-center justify-center min-h-screen`}>
    <div>
      <div>
    <div className=" flex place-content-center">
      <h1 className="text-2xl lg:text-6xl pt-4 text-black font-bold">Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-br from-orange-500 to-yellow-800">Toggle Outfitters!</span></h1>
    </div>
    <div className="flex place-content-center">
      <Image
        src="/high-five.png"
        alt="Toggle"
        width={200}
        height={200}
        quality={100}
        priority={true}
      />
    </div>
    <div className="flex place-content-center">
      <h2 className="font-bold text-2xl lg:text-6xl">Launching Soon</h2>
    </div>
    </div>
      <div className="flex flex-row place-content-center">
        <div className="bg-white shadow-2xl p-4 m-4 rounded-2xl">
        <Image
          src="/images/toggle-1.jpg"
          alt="Toggle"
          width={200}
          height={200}
          quality={100}
          style={{ padding: "20px" }}
        />
        </div>
        <div className="bg-white shadow-2xl p-4 m-4 rounded-2xl">
        <Image
          src="/images/toggle-2.webp"
          alt="Toggle"
          width={200}
          height={200}
          quality={100}
          style={{ padding: "20px" }}
        />
        </div>
        <div className="bg-white shadow-2xl p-4 m-4 rounded-2xl">
        <Image
          src="/images/toggle-3.webp"
          alt="Toggle"
          width={200}
          height={200}
          quality={100}
          style={{ padding: "20px" }}
        />
        </div>
        <div className="bg-white shadow-2xl p-4 m-4 rounded-2xl">
        <Image
          src="/images/toggle-4.webp"
          alt="Toggle"
          width={200}
          height={200}
          quality={100}
          style={{ padding: "20px" }}
        />
        </div>
      </div>
      <div className="flex text-2xl mt-4 place-content-center">
      </div>
    </div>
  </main>
);

export default InitialContent;
