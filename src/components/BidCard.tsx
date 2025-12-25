import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Bid } from "@/types";

export default function BidCard({ bid }: { bid: Bid }) {
  return (
    <div className="glass-card-medium w-full min-w-0 rounded-2xl p-4 card-shadow transition-smooth hover:glow bg-pink-300">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-sm font-bold text-gradient-gold leading-tight">
          {bid.title}
        </h3>

        <span className="text-[10px] px-2 py-1 rounded-full gradient-casino text-black font-extrabold">
          {bid.status}
        </span>
      </div>

      {/* DESCRIPTION */}
      <p className="text-xs text-white-foreground mb-4 line-clamp-2">
        {bid.description}
      </p>

      {/* BID INFO */}
      <div className="flex justify-between items-center mb-4">
        <span className="">Bidder </span>
        <span className="font-extrabold text-base text-gradient-green">
          {bid.currentBid}
        </span>
      </div>

      {/* CTA BUTTON */}
      <button className="pushable w-full">
        <span className="cs-shadow" />
        <span className="edge gradient-casino" />
        <span className="front gradient-casino text-white py-2 rounded-xl text-sm">
          Enter Bid
        </span>
      </button>

    </div>
  );
}
