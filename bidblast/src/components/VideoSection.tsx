import { Card } from "@/components/ui/card";

export default function VideoSection() {
  return (
    <Card className="overflow-hidden flex  justify-center">
      <div className="w-full ">
        <video
          className="w-full h-full object-cover"
          src="https://bidblast.club/assets/frontend/img/introduction.mp4"
          autoPlay
          muted
          loop
        />
      </div>

      <div className="w-full glass-card p-3 flex flex-col justify-center gap-3">

        <h3 className="text-lg font-extrabold text-yellow-400  leading-tight ">
          About BidBlast
        </h3>

        <p className="text-white-foreground leading-relaxed">
          Welcome to Bidlbast, the exciting daily bidding game.
        </p>

        <p className="text-xs text-muted-foreground text-gradient-light font-semibold">
          To Know More, click below button.
        </p>

        <button className="pushable w-fit mt-2">
          <span className="cs-shadow" />
          <span className="edge gradient-light" />
          <span className="front gradient-light text-black px-6 py-2 rounded-xl text-sm font-semibold">
            Get Details
          </span>
        </button>

      </div>

    </Card>
  );
}
