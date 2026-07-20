const POSTS = [
  {
    title: "How a Loan Against Securities Can Help — All You Need to Know",
    tag: "Loan against securities",
    excerpt:
      "Investors often face situations where they need immediate access to funds but don't want to sell off their long-term investments.",
  },
  {
    title: "Why a Loan Against Mutual Funds Is a Smart Alternative to Redemption",
    tag: "Loan against mutual funds",
    excerpt:
      "Have you ever found yourself in a financial pinch, wondering whether to redeem your mutual funds for cash?",
  },
  {
    title: "Mastering Your Credit Score: A Guide to Smarter Financial Decisions",
    tag: "Credit score",
    excerpt: "A credit score plays a pivotal role in determining your creditworthiness.",
  },
  {
    title: "Debt Management Strategies: How to Stay on Top of Your Loans",
    tag: "Debt management",
    excerpt:
      "Effectively managing debt is the cornerstone of financial stability and a key to achieving your dreams.",
  },
  {
    title: "Common Mistakes to Avoid When Borrowing Against Mutual Funds",
    tag: "Mutual funds",
    excerpt: "Unexpected expenses call for quick capital — here's how to approach it without costly missteps.",
  },
  {
    title: "Documents You Need to Unlock Funds with a Loan Against Securities",
    tag: "Loan against securities",
    excerpt: "What an entrepreneur seeking capital for business expansion needs to have ready.",
  },
  {
    title: "How Loan Against Securities Helps You Avoid Market Timing Risks",
    tag: "Investment strategy",
    excerpt: "Personal loan approvals can bring their own rising repayment obligations — there's a better way.",
  },
  {
    title: "Why the Key Fact Statement Is Your Best Friend When Taking a Loan",
    tag: "Loan documentation",
    excerpt: "Understanding your Key Fact Statement before you borrow can save you from costly surprises later.",
  },
];

export default function BlogsPage() {
  return (
    <section>
      <div className="wrap">
        <div className="sec-head">
          <div>
            <p className="eyebrow">Learning Lounge</p>
            <h2>Avert credit-related risks by reading our insights</h2>
            <p>
              Guides and explainers on loans against mutual funds and shares, credit scores and
              staying on top of your borrowing — written to help you make smarter financial
              decisions.
            </p>
          </div>
        </div>

        <div className="blog-grid">
          {POSTS.map((post) => (
            <a className="blog-card" href="#" key={post.title}>
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
