import { BLOG_POSTS } from "@/lib/blog-posts";

export default function BlogsPage() {
  return (
    <section>
      <div className="wrap">
        <div className="sec-head">
          <div>
            <h2>Simple guides to smarter borrowing and credit decisions</h2>
            <p>
              Plain-English explainers on loans against mutual funds and shares, credit scores,
              and staying on top of your borrowing — written to help you make smarter financial
              decisions.
            </p>
          </div>
        </div>

        <div className="blog-grid">
          {BLOG_POSTS.map((post) => (
            <a className="blog-card" href={`/blogs/${post.slug}`} key={post.slug}>
              <span className="blog-tag">{post.tag}</span>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <span className="go">Read more <span>→</span></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
