import type { ActivityContent } from "@/types/activity";

export function parseActivityDetailsInput(value: string): ActivityContent[] {
  return value
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const [title, ...descriptionParts] = line.split("::");

      return {
        title: title?.trim() ?? "",
        description: descriptionParts.join("::").trim(),
      };
    })
    .filter((detail) => detail.title);
}
