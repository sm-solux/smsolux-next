import { supabase } from "@/lib/supabase";

const ABSOLUTE_URL_PATTERN = /^(?:[a-z]+:)?\/\//i;
const SPECIAL_URL_PATTERN = /^(?:data|blob):/i;

type ResolveSupabaseImageUrlOptions = {
  bucket?: string;
};

export const resolveSupabaseImageUrl = (
  value?: string | null,
  options?: ResolveSupabaseImageUrlOptions
) => {
  if (!value) return "";

  const trimmed = value.trim();
  if (!trimmed) return "";

  if (
    ABSOLUTE_URL_PATTERN.test(trimmed) ||
    SPECIAL_URL_PATTERN.test(trimmed)
  ) {
    return trimmed;
  }

  const normalized = trimmed
    .replace(/^\/+/, "")
    .replace(/^storage\/v1\/object\/public\/?/i, "");

  const segments = normalized.split("/").filter(Boolean);
  const [firstSegment, ...restSegments] = segments;

  const bucket = options?.bucket ?? firstSegment;
  const pathParts = options?.bucket ? segments : restSegments;

  if (!bucket || pathParts.length === 0) {
    return trimmed;
  }

  const { data } = supabase.storage
    .from(bucket)
    .getPublicUrl(pathParts.join("/"));

  return data.publicUrl || trimmed;
};
