export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="f-top">
          <div>
            <a className="f-brand" href="/" aria-label="Shriram Credit home">
              <img src="/logo.jpg" alt="Shriram Credit" />
            </a>
            <div className="addr">
              <b>Registered office</b>
              <span>
                Shriram House, No. 4, Burkit Road,
                <br />
                T. Nagar, Chennai – 600 017, Tamil Nadu
              </span>
            </div>
            <div className="addr">
              <b>Corporate office</b>
              <span>
                3/1, 4th Floor, Rukmini Towers, Platform Road,
                <br />
                Seshadripuram, Bengaluru – 560 020
                <br />
                080 4367 6869
              </span>
            </div>
          </div>
          <div>
            <h4>Subsidiaries &amp; associates</h4>
            <ul>
              <li><a href="#">Shriram Asset Management Co. Ltd.</a></li>
              <li><a href="#">Shriram Insight Share Brokers Ltd.</a></li>
              <li><a href="#">Shriram Fortune Solutions Ltd.</a></li>
              <li><a href="#">Shriram Research Pvt. Ltd.</a></li>
              <li><a href="#">Indypurse Digital Technologies Pvt. Ltd.</a></li>
              <li><a href="#">Shriram Trustees Ltd.</a></li>
              <li><a href="#">Way2Wealth Brokers Pvt. Ltd.</a></li>
              <li><a href="#">Way2Wealth Commodities Pvt. Ltd.</a></li>
            </ul>
          </div>
          <div>
            <h4>Products</h4>
            <ul>
              <li><a href="#products">Loans</a></li>
              <li><a href="#products">Stock broking</a></li>
              <li><a href="#products">Mutual funds</a></li>
              <li><a href="#products">Fixed deposits</a></li>
            </ul>
          </div>
          <div>
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Privacy policy</a></li>
              <li><a href="#">Terms and conditions</a></li>
              <li><a href="https://sachet.rbi.org.in" rel="nofollow">RBI Sachet</a></li>
              <li><a href="#">Our partners</a></li>
              <li><a href="#">Grievance redressal officer</a></li>
              <li><a href="#">Fair practices code</a></li>
              <li><a href="#">Interest rate policy</a></li>
            </ul>
          </div>
          <div>
            <h4>Others</h4>
            <ul>
              <li><a href="/about-us">About us</a></li>
              <li><a href="#">Learning Lounge — blogs</a></li>
              <li><a href="/investors">Investors</a></li>
              <li><a href="#contact">Contact us</a></li>
              <li><a href="#">Site map</a></li>
              <li><a href="#">Redressal of customer complaints</a></li>
              <li><a href="/calculators">Calculators</a></li>
            </ul>
          </div>
        </div>

        <div className="f-legal">
          <b>Shriram Credit Company Limited</b> is a non-deposit taking, systemically important
          Non-Banking Financial Company registered with the Reserve Bank of India under Section
          45-IA of the RBI Act, 1934 (Certificate of Registration No. B-07.00709). CIN:
          U65191TN1980PLC008215. The RBI does not accept responsibility for the correctness of
          any statement or opinion expressed by the company, and does not guarantee the payment
          of any dues.
          <br />
          <br />
          Investments in securities and mutual funds are subject to market risk, including loss
          of principal. Read all scheme-related and loan documents carefully before investing or
          borrowing. *Interest rate is indicative and subject to credit assessment.
        </div>

        <div className="f-bottom">
          <span>© 2026 Shriram Credit Company Limited. All rights reserved.</span>
          <span>Grievance Redressal Officer · grievance@shriramcredit.in · 080 4367 6869</span>
        </div>
      </div>
    </footer>
  );
}
