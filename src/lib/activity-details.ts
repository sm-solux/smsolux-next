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

export function formatActivityDetailsInput(details?: ActivityContent[]) {
  if (!details?.length) {
    return "";
  }

  return details
    .map((detail) =>
      [detail.title?.trim() ?? "", detail.description?.trim() ?? ""]
        .filter(Boolean)
        .join(" :: ")
    )
    .filter(Boolean)
    .join("\n");
}
