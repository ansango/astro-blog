import { siteConfig } from "@/site-config";
import type { CollectionEntry } from "astro:content";

const dateFormat = new Intl.DateTimeFormat(
  siteConfig.date.locale,
  siteConfig.date.options
);

export function getFormattedDate(
  date: string | number | Date,
  options?: Intl.DateTimeFormatOptions
) {
  if (typeof options !== "undefined") {
    return new Date(date).toLocaleDateString(siteConfig.date.locale, {
      ...(siteConfig.date.options as Intl.DateTimeFormatOptions),
      ...options,
    });
  }

  return dateFormat.format(new Date(date));
}

export function toggleClass(element: HTMLElement, className: string) {
  element.classList.toggle(className);
}

export function elementHasClass(element: HTMLElement, className: string) {
  return element.classList.contains(className);
}

export function sortMDByDate(posts: CollectionEntry<"post">[] = []) {
  return posts.sort(
    (a, b) =>
      new Date(b.data.publishDate).valueOf() -
      new Date(a.data.publishDate).valueOf()
  );
}

export function getUniqueTags(posts: CollectionEntry<"post">[] = []) {
  const uniqueTags = new Set<string>();
  posts.forEach((post) => {
    post.data.tags.map((tag) => uniqueTags.add(tag));
  });
  return Array.from(uniqueTags);
}

export function getUniqueTagsWithCount(posts: CollectionEntry<"post">[] = []): {
  [key: string]: number;
} {
  return posts.reduce((prev, post) => {
    const runningTags: { [key: string]: number } = { ...prev };
    post.data.tags.forEach((tag) => {
      runningTags[tag] = (runningTags[tag] || 0) + 1;
    });
    return runningTags;
  }, {});
}
