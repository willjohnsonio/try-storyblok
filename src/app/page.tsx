import { getStoryblokApi } from "../lib/Storyblok";
import { StoryblokStory } from "@storyblok/react/rsc";

export default async function Page() {
  // Inline the fetch
  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get("cdn/stories/home", {
    version: process.env.NODE_ENV === "production" ? "published" : "draft",
  });

  return (
    <div className="page">
      <StoryblokStory story={data.story} />
    </div>
  );
}

// NO other named exports here!
