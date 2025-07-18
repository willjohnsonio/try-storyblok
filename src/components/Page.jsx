// src/app/page.tsx
import { getStoryblokApi } from '@/lib/storyblok'
import { StoryblokServerComponent } from '@storyblok/react/rsc'

export default async function Page() {
  // 1. Fetch your Storyblok “home” story at build time (or request time)
  const storyblokApi = getStoryblokApi()
  const { data } = await storyblokApi.get('cdn/stories/home', {
    version: process.env.NODE_ENV === 'production' ? 'published' : 'draft',
  })
  const blok = data.story.content

  // 2. Render your components directly
  return (
    <main>
      {blok.body?.map((nestedBlok) => (
        <StoryblokServerComponent
          blok={nestedBlok}
          key={nestedBlok._uid}
        />
      ))}
    </main>
  )}
