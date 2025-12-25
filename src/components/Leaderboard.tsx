import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { LeaderboardUser } from "@/types";
import { Button } from "@/components/ui/button"



export default function Leaderboard({
  users,
}: {
  users: LeaderboardUser[];
}) {
  return (
    <div className="glass-card rounded-2xl p-5 card-shadow">
      {/* <h2 className="text-lg font-extrabold text-gradient-purple mb-4">
        🏆 Top Bidders
      </h2> */}
      {/* HEADER */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-extrabold text-gradient-gold leading-tight">
          🏆 Top Bidders
        </h2>

        {/* <Button
          variant="ghost"
          size="sm"
          className="text-primary hover:text-primary/80 transition-smooth"
          onClick={() => {
            // TODO: replace with router push
            window.location.href = "/leaderboard"
          }}
        >
          View All →
        </Button> */}
        <button className="pushable w-1/3">
        {/* <span className="cs-shadow" /> */}
        {/* <span className="edge gradient-casino" /> */}
        <span className="front gradient-casino text-white py-2 rounded-xl text-sm">
          View All
        </span>
      </button>
      </div>

      <div className="space-y-3">
        {users.map((user, i) => (
          <div
            key={user.id}
            className="flex justify-between items-center bg-muted/40 rounded-xl px-4 py-3"
          >
            <div className="flex items-center gap-3">
              <span className="font-extrabold text-gradient-gold">
                #{i + 1}
              </span>
              <span className="text-sm font-semibold">
                {user.name}
              </span>
            </div>

            <span className="font-bold text-gradient-green">
              {user.score}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

