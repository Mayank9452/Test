// import { Card } from "@/components/ui/card";

// import type { Activity } from "@/types";

// export default function ActivitySlider({
//   activities,
// }: {
//   activities: Activity[];
// }) {
//   return (
//     <div className="flex gap-4 overflow-x-auto pb-2">
//       {activities.map((activity) => (
//         <div
//           key={activity.id}
//           className="glass-card rounded-xl p-4 min-w-[240px] card-shadow"
//         >
//           <p className="text-xs font-medium leading-snug">
//             {activity.message}
//           </p>

//           <span className="text-[10px] text-muted-foreground mt-2 block">
//             {activity.time}
//           </span>
//         </div>
//       ))}
//     </div>
//   );
// }

import type { Activity } from "@/types"

export default function ActivitySlider({
  activities,
}: {
  activities: Activity[]
}) {
  const gradientBackground = ["gradient-pink-yellow","gradient-pink-violet"];
  return (
    <div className="relative overflow-hidden">
      <div className="flex gap-4 animate-slide-right">
        {[...activities, ...activities].map((activity, index) => (
          <div
            key={`${activity.id}-${index}`}
            className={` rounded-xl p-4 min-w-[240px] card-shadow ${gradientBackground[index % gradientBackground.length]}`}
          >
            {/* <p className="text-xs font-medium leading-snug">
              {activity.message}
            </p> */}

            <h3 className="text-sm font-bold ">
              {activity.message}
            </h3>

            <span className="text-[10px] text-white-foreground mt-2 block">
              {activity.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
