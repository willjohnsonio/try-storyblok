"use client";

import { getStoryblokApi } from "../lib/Storyblok";

export default function StoryblokProvider({ children }) {
getStoryblokApi();
return children;
}