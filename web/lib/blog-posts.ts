export type BlogSection = {
  heading?: string;
  paragraphs: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  tag: string;
  excerpt: string;
  sections: BlogSection[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "how-a-loan-against-securities-can-help",
    title: "How a Loan Against Securities Can Help — All You Need to Know",
    tag: "Loan against securities",
    excerpt:
      "Investors often face situations where they need immediate access to funds but don't want to sell off their long-term investments.",
    sections: [
      {
        paragraphs: [
          "Investors often need cash quickly, but selling long-term investments can disrupt years of planning and trigger capital gains tax. A loan against securities (LAS) offers another way — you unlock the value of your portfolio without giving up ownership of it.",
        ],
      },
      {
        heading: "What is a loan against securities?",
        paragraphs: [
          "A loan against securities lets you borrow money by pledging shares, mutual funds or bonds you already own as collateral. You get the funds you need today, while your investments stay invested and keep working towards your long-term goals.",
        ],
      },
      {
        heading: "How does it work?",
        paragraphs: [
          "You approach a lender with details of your portfolio. Most lenders sanction a loan of 50–80% of the current market value of the securities you pledge. The lender holds your securities as collateral for the loan. If the value of your portfolio falls significantly, the lender may ask you to pledge more securities or repay part of the loan to keep the loan-to-value ratio within limits — this is called a margin call.",
        ],
      },
      {
        heading: "Key benefits",
        paragraphs: [
          "Fast and convenient: approvals are usually quicker than unsecured loans, which matters most during an emergency.",
          "Lower interest rates: because the loan is backed by your investments, lenders see it as lower risk and price it more affordably than personal loans or credit cards.",
          "You keep your investments: your securities stay in your name and continue to earn capital appreciation, dividends or interest.",
          "Flexible repayment: choose a lump-sum or instalment repayment, with the option to prepay.",
          "Minimal impact on your credit score: because the loan is secured, it carries less weight on your score, and timely repayment keeps it healthy.",
        ],
      },
      {
        heading: "Risks to keep in mind",
        paragraphs: [
          "If markets fall sharply, the value of your pledged securities can drop and trigger a margin call. If you're unable to add more collateral or repay part of the loan, the lender may sell some of your pledged securities to recover the outstanding amount.",
        ],
      },
      {
        heading: "The bottom line",
        paragraphs: [
          "A loan against securities gives you liquidity today while letting your investments keep growing. Understand the risks, borrow only what you need, and plan your repayments before you apply.",
        ],
      },
    ],
  },
  {
    slug: "why-a-loan-against-mutual-funds-is-a-smart-alternative",
    title: "Why a Loan Against Mutual Funds Is a Smart Alternative to Redemption",
    tag: "Loan against mutual funds",
    excerpt: "Have you ever found yourself in a financial pinch, wondering whether to redeem your mutual funds for cash?",
    sections: [
      {
        paragraphs: [
          "Have you ever found yourself in a financial pinch, wondering whether to redeem your mutual funds for cash? A medical bill, a sudden opportunity, or an emergency expense can put you in this exact spot.",
        ],
      },
      {
        heading: "The dilemma: to redeem or not to redeem?",
        paragraphs: [
          "Consider Riya, who built a mutual fund portfolio over several years. When she needed cash urgently, her first instinct was to redeem her units. But that would mean losing out on years of compounding and potentially paying exit loads and capital gains tax — just when her investments were starting to grow.",
        ],
      },
      {
        heading: "The smart solution: loans against mutual funds",
        paragraphs: [
          "A loan against mutual funds lets Riya borrow against her units instead of selling them. It isn't risk-free — market fluctuations can still affect the value of her pledged units, and if she's unable to add more collateral or repay part of the loan, the lender may liquidate her securities. But used sensibly, it solves her immediate cash need without derailing her long-term plan.",
        ],
      },
      {
        heading: "Keeping your investment intact",
        paragraphs: [
          "Borrowing instead of selling means you avoid exit loads and tax liabilities, and your money keeps compounding in the market. Your units stay in your name throughout the loan.",
        ],
      },
      {
        heading: "Balancing cost, flexibility and risk",
        paragraphs: [
          "Loans from RBI-registered lenders typically come with lower interest rates than personal loans, faster approvals, and flexible repayment options. The trade-off is that you need to watch the market — a sharp fall in value can trigger a margin call, so borrow conservatively and keep an eye on your portfolio.",
        ],
      },
      {
        heading: "A smarter path forward",
        paragraphs: [
          "A loan against mutual funds lets you meet an immediate need today while your investments keep working towards your long-term goals — a smarter alternative to redemption for most short-term cash needs.",
        ],
      },
    ],
  },
  {
    slug: "mastering-your-credit-score-a-guide-to-smarter-financial-decisions",
    title: "Mastering Your Credit Score: A Guide to Smarter Financial Decisions",
    tag: "Credit score",
    excerpt: "A credit score plays a pivotal role in determining your creditworthiness.",
    sections: [
      {
        paragraphs: [
          "Your credit score plays a big role in whether you get approved for a personal loan, a credit card, or a loan against your investments — and at what interest rate. Understanding how it works puts you in control.",
        ],
      },
      {
        heading: "What is a credit score?",
        paragraphs: [
          "A credit score is a number between 300 and 900 that reflects your creditworthiness, based on your credit history and repayment behaviour. A higher score signals responsible financial behaviour and improves your chances of approval. In India, scores are tracked by bureaus like CIBIL, CRIF, Experian and Equifax. A lower score can mean rejection, or approval only at a higher interest rate.",
        ],
      },
      {
        heading: "What makes up your score?",
        paragraphs: [
          "Payment history (35%) — your track record of paying bills and loans on time.",
          "Credit utilisation (30%) — how much of your available credit you're actually using.",
          "Length of credit history (15%) — how long your credit accounts have been open.",
          "Types of credit (10%) — the mix of loans and cards you hold.",
          "New credit inquiries (10%) — how often you've applied for credit recently.",
        ],
      },
      {
        heading: "Why your score matters",
        paragraphs: [
          "Approval: lenders use your score to judge how likely you are to repay.",
          "Interest rates: a higher score gives you room to negotiate a better rate, lowering the overall cost of borrowing.",
          "Credit limits: better scores usually come with higher limits and more flexibility.",
          "Faster approvals: a strong score speeds up the process.",
        ],
      },
      {
        heading: "What affects your score",
        paragraphs: [
          "Paying your EMIs and credit card bills on time is the single biggest factor — delays leave a lasting mark. Keeping your credit utilisation below 30% of your limit shows lenders you're not overly dependent on credit. A healthy mix of secured and unsecured credit, a longer credit history, and fewer new credit applications all work in your favour.",
        ],
      },
      {
        heading: "How to improve it",
        paragraphs: [
          "Set reminders so you never miss a payment.",
          "Check your credit report regularly for errors.",
          "Keep your credit utilisation under 30%.",
          "Space out new credit applications instead of applying for several at once.",
          "Build a balanced mix of secured and unsecured credit over time.",
        ],
      },
      {
        heading: "The takeaway",
        paragraphs: [
          "A healthy credit score opens the door to better loan terms, faster approvals, and more financial flexibility — including when you apply for a loan against mutual funds or shares with Shriram Credit.",
        ],
      },
    ],
  },
  {
    slug: "debt-management-strategies-how-to-stay-on-top-of-your-loans",
    title: "Debt Management Strategies: How to Stay on Top of Your Loans",
    tag: "Debt management",
    excerpt:
      "Effectively managing debt is the cornerstone of financial stability and a key to achieving your dreams.",
    sections: [
      {
        paragraphs: [
          "Effectively managing debt is the cornerstone of financial stability. Debt doesn't have to be overwhelming — approached strategically, it's entirely manageable.",
        ],
      },
      {
        heading: "Create a realistic budget",
        paragraphs: [
          "List out your income, expenses and loan obligations to understand exactly where your money goes each month. A clear budget helps you spot how much you can realistically put towards repayment.",
        ],
      },
      {
        heading: "Prioritise high-interest debt",
        paragraphs: [
          "Tackle high-interest debt like credit card dues first — the charges add up fast. Clearing these earlier saves you money over time.",
        ],
      },
      {
        heading: "Consider debt consolidation",
        paragraphs: [
          "Combining multiple loans into one, ideally at a lower rate, can simplify your repayments into a single monthly payment. Read the terms carefully before you consolidate.",
        ],
      },
      {
        heading: "Talk to your lender",
        paragraphs: [
          "If you're finding repayment difficult, reach out to your RBI-registered lender. Many offer flexible alternatives like deferment or restructuring rather than letting an account slip into default.",
        ],
      },
      {
        heading: "Stick to a payment schedule",
        paragraphs: [
          "Set up automatic transfers so payments never slip your mind, and pay more than the minimum whenever you can to bring down your outstanding balance faster.",
        ],
      },
      {
        heading: "Build an emergency fund",
        paragraphs: [
          "An emergency fund gives you a cushion during unexpected setbacks, so you can keep up with loan payments without needing to borrow further.",
        ],
      },
      {
        heading: "The takeaway",
        paragraphs: [
          "A little discipline — budgeting, prioritising, and staying in touch with your lender — goes a long way towards reducing your debt burden and building long-term financial security.",
        ],
      },
    ],
  },
  {
    slug: "common-mistakes-to-avoid-when-borrowing-against-mutual-funds",
    title: "Common Mistakes to Avoid When Borrowing Against Mutual Funds",
    tag: "Mutual funds",
    excerpt: "Unexpected expenses call for quick capital — here's how to approach it without costly missteps.",
    sections: [
      {
        paragraphs: [
          "Unexpected expenses can derail even the best financial plans. A loan against mutual funds gives you quick access to cash using your existing investments as collateral, without disrupting your long-term goals — usually at a lower interest rate than a personal loan, and while your investments keep growing. But there are a few mistakes worth avoiding.",
        ],
      },
      {
        heading: "1. Not understanding the loan terms and LTV ratio",
        paragraphs: [
          "Before you commit, read the terms carefully. Interest rates are set mainly by your lender's own policies rather than the specific mutual fund you hold. The loan-to-value ratio also varies by fund type — typically up to 50% of NAV for equity funds and up to 70% for debt funds. Ask your lender to explain exactly how they calculate your rate and LTV.",
        ],
      },
      {
        heading: "2. Overlooking the value of your mutual fund",
        paragraphs: [
          "Your loan amount is based on the current Net Asset Value (NAV) of your fund, which moves with the market. A sharp fall in NAV can trigger a margin call, requiring you to add collateral or repay part of the loan — and if you can't, the lender may sell some of your pledged units. Keep an eye on your fund's NAV, and choose funds that match your risk appetite.",
        ],
      },
      {
        heading: "3. Borrowing for non-essential expenses",
        paragraphs: [
          "Quick access to cash shouldn't tempt you into spending on things you don't need. Save this option for genuine needs — a medical emergency, a business investment, or consolidating costlier debt — since defaulting means the lender can sell your mutual fund units to recover the loan.",
        ],
      },
      {
        heading: "4. Not comparing lenders",
        paragraphs: [
          "Don't accept the first offer you get. Compare interest rates, fees and repayment flexibility across a few lenders, and factor in their reputation and customer service. A little comparison shopping can save you real money.",
        ],
      },
      {
        heading: "5. Ignoring the risk of default",
        paragraphs: [
          "Defaulting brings penalties, hurts your credit score, and can force the lender to sell your units — often at the worst possible time in a falling market. Build a repayment plan you can actually stick to, automate your payments, and talk to your lender early if you foresee any difficulty.",
        ],
      },
      {
        heading: "The takeaway",
        paragraphs: [
          "Used carefully, a loan against mutual funds is an effective way to access cash without giving up your investments. Avoiding these mistakes, and staying in touch with your lender, keeps both your loan and your portfolio on track.",
        ],
      },
    ],
  },
  {
    slug: "documents-you-need-to-unlock-funds-with-a-loan-against-securities",
    title: "Documents You Need to Unlock Funds with a Loan Against Securities",
    tag: "Loan against securities",
    excerpt: "What an entrepreneur seeking capital for business expansion needs to have ready.",
    sections: [
      {
        paragraphs: [
          "Rohan, an entrepreneur, needed funds to expand his startup — without selling the investment portfolio he'd built over the years. A loan against securities let him do exactly that: pledge his shares, mutual funds or bonds and get liquidity quickly, without selling a single unit. Here's what he needed to apply.",
        ],
      },
      {
        heading: "1. Proof of identity",
        paragraphs: [
          "Any one of: PAN card, Aadhaar card, passport, voter ID or driving licence, along with a cancelled cheque.",
        ],
      },
      {
        heading: "2. Proof of address",
        paragraphs: [
          "Aadhaar card, passport, a utility bill no older than three months, or a registered rental agreement.",
        ],
      },
      {
        heading: "3. Proof of income (where required)",
        paragraphs: [
          "While not always mandatory, income documents strengthen your application — three months of salary slips, Form 16, income tax returns, or bank statements. Self-employed applicants can submit audited financial statements instead.",
        ],
      },
      {
        heading: "4. Proof of your securities holding",
        paragraphs: [
          "A Demat account statement or holding statement from NSDL/CDSL. If your Depository Participant is registered with NSDL, the entire process — from application to approval and disbursement — can often be completed online within 24 hours.",
        ],
      },
      {
        heading: "5. Application and pledge creation",
        paragraphs: [
          "A completed loan application form, an e-mandate form, and a signed pledge creation form submitted to your Depository Participant, which creates a lien on your securities in favour of Shriram Credit Company Limited.",
        ],
      },
      {
        heading: "The takeaway",
        paragraphs: [
          "With these documents in hand, Rohan's loan against securities was approved and disbursed quickly — giving him the funds he needed while his portfolio stayed invested and kept growing.",
        ],
      },
    ],
  },
  {
    slug: "how-loan-against-securities-helps-you-avoid-market-timing-risks",
    title: "How Loan Against Securities Helps You Avoid Market Timing Risks",
    tag: "Investment strategy",
    excerpt: "Personal loan approvals can bring their own rising repayment obligations — there's a better way.",
    sections: [
      {
        paragraphs: [
          "Knowing exactly when to buy or sell is one of the hardest parts of investing. Many investors sell stocks or mutual funds to meet an urgent cash need, only to watch the market recover soon after — locking in a loss they didn't need to take. A loan against securities lets you stay invested even when you need cash immediately.",
        ],
      },
      {
        heading: "Avoiding forced sales",
        paragraphs: [
          "Selling during a downturn locks in your losses. Borrowing against your securities instead lets you hold on to them, so you keep the chance to benefit from any future recovery.",
        ],
      },
      {
        heading: "Taking the emotion out of the decision",
        paragraphs: [
          "Market volatility often pushes investors into impulsive decisions. Having the option to borrow against your portfolio gives you a financial cushion, so you're less likely to react to short-term swings and can stick to your long-term plan.",
        ],
      },
      {
        heading: "Your investments keep earning",
        paragraphs: [
          "While pledged as collateral, your securities remain invested — still eligible for dividends, interest, or capital appreciation, just like before you took the loan.",
        ],
      },
      {
        heading: "A cost-effective option",
        paragraphs: [
          "Because the loan is backed by your securities, lenders treat it as lower risk — which usually means better interest rates than an unsecured loan, along with flexible repayment options like interest-only payments or regular EMIs.",
        ],
      },
      {
        heading: "The takeaway",
        paragraphs: [
          "Whether you need funds for a business opportunity, a personal emergency, or anything in between, a loan against securities lets you meet that need without having to time the market or give up on your investment goals.",
        ],
      },
    ],
  },
  {
    slug: "why-the-key-fact-statement-is-your-best-friend-when-taking-a-loan",
    title: "Why the Key Fact Statement Is Your Best Friend When Taking a Loan",
    tag: "Loan documentation",
    excerpt: "Understanding your Key Fact Statement before you borrow can save you from costly surprises later.",
    sections: [
      {
        paragraphs: [
          "Abhishek's story is a familiar one: he skipped reading the Key Fact Statement before taking a loan, and was caught off guard by fees he didn't know existed. A Key Fact Statement (KFS) is your financial reality check, in black and white — a clear summary of your loan's interest rate, total repayment amount, tenure, and every applicable charge.",
        ],
      },
      {
        heading: "Why it exists",
        paragraphs: [
          "The KFS exists to bring transparency to your loan. It lays out every essential detail in one place, so you can make an informed decision upfront instead of discovering the fine print later.",
        ],
      },
      {
        heading: "What a KFS includes",
        paragraphs: [
          "Loan amount sanctioned",
          "Rate of interest",
          "Tenure",
          "Processing fees and other charges",
          "EMI details",
          "Prepayment and foreclosure clauses",
          "Late payment penalties",
          "Total amount payable",
          "Contact details of the grievance redressal officer",
        ],
      },
      {
        heading: "Why it matters to you",
        paragraphs: [
          "Brings transparency: no fine-print surprises — every charge, condition and repayment term is laid out upfront.",
          "Makes comparison easier: the standardised format lets you compare offers from different lenders side by side.",
          "Helps you plan: knowing your total repayment cost upfront makes it easier to budget accurately.",
          "Keeps repayments on track: a clear schedule helps you avoid missed payments and protect your credit score.",
        ],
      },
      {
        heading: "What to look for",
        paragraphs: [
          "Interest rate type — is it fixed (a consistent EMI) or floating (adjusts with the market)?",
          "Early payment fees — some lenders charge a penalty for closing your loan early, which can offset the interest you save.",
          "Extra charges — processing and administrative fees may look small individually but add up.",
          "Your EMI and total payback — double-check the numbers with a loan calculator to make sure they're affordable.",
        ],
      },
      {
        heading: "The takeaway",
        paragraphs: [
          "Your Key Fact Statement is a comprehensive guide to your loan — read it carefully, and you'll borrow with far fewer surprises.",
        ],
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}
