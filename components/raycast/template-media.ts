/** Local template assets — no external CDN dependencies. */
export const TEMPLATE_MEDIA = "/template/media";
export const TEMPLATE_EXTENSIONS = "/template/extensions";

export function templateMedia(filename: string) {
  return `${TEMPLATE_MEDIA}/${filename}`;
}

export function templateExtension(filename: string) {
  return `${TEMPLATE_EXTENSIONS}/${filename}`;
}

/** @deprecated Use templateMedia — kept for incremental migration */
export const RAYCAST_BLOG_MEDIA = TEMPLATE_MEDIA;
export const RAYCAST_AI_MEDIA = TEMPLATE_MEDIA;
export const RAYCAST_PRO_MEDIA = TEMPLATE_MEDIA;
export const RAYCAST_IOS_MEDIA = TEMPLATE_MEDIA;
