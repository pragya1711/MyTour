export default function Hero() {
  return (
    <div id="home" className="h-screen relative">

      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover"
      >
        <source src="/images/WhatsApp Video 2026-04-14 at 11.01.06 AM.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center">
        <h1 className="text-5xl font-bold mb-4">Explore Incredible India </h1>
        <p className="text-lg mb-6">Culture. Nature. Heritage. Adventure.Spirituality</p>
      </div>

    </div>
  );
}