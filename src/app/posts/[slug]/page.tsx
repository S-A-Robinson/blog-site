import { metadata } from "@/app/layout";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import markdownToHtml from '@/lib/markdownToHtml';

type Params = {
  params: {
    slug: string,
  }
}

export default async function Post({ params }: Params) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return <h1>No Post Found</h1>
  }

  const content = await markdownToHtml(post.content || '');

  return (
    <main>
      <article>
        <h1 className='text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter'>{post.title}</h1>
        <div>{post.author}</div>
        <div className='max-w-2xl mx-auto'>{content}</div>
      </article>
    </main>
  )
}