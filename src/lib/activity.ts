import { parseActivityDetailsInput } from "@/lib/activity-details";
import type { Activity } from "@/types/activity";

type RawActivity = {
  id?: number;
  title: string;
  description: string;
  details?: Activity["details"] | string | null;
  order: number;
};

export function normalizeActivityRecord(activity: RawActivity): Activity {
  const details =
    typeof activity.details === "string"
      ? (() => {
          try {
            const parsed = JSON.parse(activity.details);
            return Array.isArray(parsed) ? parsed : parseActivityDetailsInput(activity.details);
          } catch {
            return parseActivityDetailsInput(activity.details);
          }
        })()
      : activity.details ?? [];

  return {
    ...(activity as Activity),
    details,
  };
}
