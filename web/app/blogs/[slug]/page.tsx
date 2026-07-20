import { notFound } from "next/navigation";
import { BLOG_POSTS, getBlogPost } from "@/lib/blog-posts";

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <section>
      <div className="wrap article-wrap">
        <a className="article-back" href="/blogs">← Learning Lounge</a>
        <span className="blog-tag">{post.tag}</span>
        <h1 className="article-title">{post.title}</h1>

        <div className="article-body">
          {post.sections.map((section, i) => (
            <div key={i}>
              {section.heading && <h2>{section.heading}</h2>}
              {section.paragraphs.map((p, j) => (
                <p key={j}>{p}</p>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="band">
        <div className="wrap">
          <div>
            <h2>Curious what you could borrow?</h2>
            <p>Check your eligibility against your mutual funds or shares in under a minute.</p>
          </div>
          <a className="btn btn-dark" href="/calculators">Open the loan calculator</a>
        </div>
      </div>
    </section>
  );
}
