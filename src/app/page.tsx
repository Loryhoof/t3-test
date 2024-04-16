import Link from "next/link";
import { db } from "~/server/db";

const urls = [
  'https://utfs.io/f/273e605e-c50c-49a6-8c0a-76cbcbf293b2-kh01xg.jpg',
  'https://utfs.io/f/c6952dd6-014c-4afa-8425-e1c2af395db4-1mpody.jpg',
  'https://utfs.io/f/4d622dd6-89b1-4d4f-9ca4-addd0108d49d-1u3d3.jpg'
]

const mockImages = urls.map((url, index) => ({
  id: index + 1,
  url
}));

export default async function HomePage() {

  const posts = await db.query.posts.findMany();

  console.log(posts);

  return (
    <main className="flex flex-wrap gap-4 p-4">

    {posts.map((post) => (
        <div key={post.id}>{post.name}</div>
      ))}

      
      {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
        <div key={image.id + '-' + index}>
          <img src={image.url} className="w-48" ></img>
        </div>
      ))}
    </main>
  );
}
