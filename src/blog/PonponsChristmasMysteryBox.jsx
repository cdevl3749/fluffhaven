
import { useEffect } from "react";

export default function PonponsChristmasMysteryBox() {
  useEffect(() => {
    document.title =
      "Christmas Gift Box for Dogs: Ponpon's Mystery Box | FluffHaven";
  }, []);

  const highlights = [
    {
      title: "Two surprise toys for Christmas playtime",
      paragraphs: [
        "Christmas is even more exciting when your dog has something fun to discover. Ponpon's Christmas Mystery Box includes two surprise dog toys chosen to add a little extra joy to playtime.",
        "The exact toys remain a surprise, making the unboxing part of the festive experience. Always supervise play and choose activities that suit your dog's size and chewing habits."
      ]
    },
    {
      title: "A practical dog bowl for everyday use",
      paragraphs: [
        "A thoughtful Christmas present can be useful as well as fun. Alongside the toys, the box includes one dog bowl.",
        "It is a practical addition to your dog's everyday routine, whether you use it for meals or fresh water."
      ]
    },
    {
      title: "A warm winter coat in size M",
      paragraphs: [
        "Winter brings chilly mornings and colder walks. That's why the Christmas Mystery Box includes a warm dog coat in size M.",
        "Please note that the coat is available in size M only. Check your dog's measurements before ordering, as sizing can vary between dogs and breeds."
      ]
    },
    {
      title: "Four surprises in one Christmas gift",
      paragraphs: [
        "Instead of choosing several individual presents, you can surprise your dog with one festive box containing four items: two toys, one bowl and one winter coat.",
        "The products have a combined individual value of $60.90, while the Christmas Mystery Box is offered for $39.90. That is a $21.00 difference compared with the combined individual prices."
      ]
    },
    {
      title: "A little Christmas magic inspired by Ponpon",
      paragraphs: [
        "FluffHaven was inspired by Ponpon, our rescue dog from Spain, and the special place pets have in our lives.",
        "This Christmas collection celebrates those little moments that make the holidays memorable: a new toy, a cozy walk and time spent together."
      ]
    }
  ];

  return (
    <main style={page}>
      <article style={article}>
        <div style={hero}>
          <a href="/blog" style={backLink}>
            ← Back to Blog
          </a>

          <p style={category}>
            Christmas gift ideas for dogs
          </p>

          <h1 style={title}>
            Ponpon's Christmas Mystery Box:
            4 Surprise Gifts for Your Dog
          </h1>

          <p style={meta}>
            Published: November 2026 · 5 min read
          </p>

          <p style={tagline}>
            🎄 Four surprises. One happy dog.
          </p>
        </div>

        <div style={content}>
          <p style={lead}>
            Looking for a Christmas gift that will make
            your dog's holiday feel extra special?
            Ponpon's Christmas Mystery Box brings
            together four surprise presents in one
            festive package.
          </p>

          <p style={text}>
            With two fun dog toys, one practical bowl
            and a warm winter coat in size M, this
            limited Christmas edition combines
            playtime, comfort and everyday essentials.
          </p>

          <div style={quickBox}>
            <strong>Quick Answer</strong>
            <p style={{ marginTop: 12, lineHeight: 1.8 }}>
              Ponpon's Christmas Mystery Box contains
              four surprise gifts for dogs: two toys,
              one dog bowl and one warm winter coat
              in size M. The combined individual product
              value is $60.90, and the special Christmas
              price is $39.90. The offer is planned
              through December 31, 2026.
            </p>
          </div>

          <div style={cta}>
            <h2 style={ctaTitle}>
              🎁 A Christmas surprise for your dog
            </h2>

            <p style={ctaText}>
              Four gifts with a combined individual
              value of $60.90, available together
              for just $39.90.
              Save $21.00 this Christmas!
            </p>

            <a
              href="/product/ponpons-christmas-mystery-box"
              style={ctaButton}
            >
              Discover the Christmas Mystery Box — $39.90 →
            </a>
          </div>

          <h2 style={h2}>
            What's inside Ponpon's Christmas Mystery Box?
          </h2>

          <p style={text}>
            Discover the five highlights below.
            Click on any section to read more.
            You can open several sections at once.
          </p>

          {highlights.map((item, index) => (
            <details key={index} style={accordion}>
              <summary style={summary}>
                {index + 1}. {item.title}
              </summary>

              <div style={accordionContent}>
                {item.paragraphs.map((paragraph, i) => (
                  <p key={i} style={text}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </details>
          ))}

          <h2 style={h2}>
            How to make Christmas special for your dog
          </h2>

          <p style={text}>
            The best holiday memories often come from
            spending time together. A new toy can
            make playtime exciting, while a cozy
            winter walk can become a lovely
            Christmas tradition.
          </p>

          <ul style={list}>
            <li>
              Set aside time for supervised play
              with your dog's new toys.
            </li>
            <li>
              Make sure the winter coat fits
              comfortably before heading outside.
            </li>
            <li>
              Keep chocolate, cooked bones and
              dangerous decorations out of reach.
            </li>
            <li>
              Let your dog enjoy a quiet place
              away from noisy celebrations.
            </li>
            <li>
              Take a festive photo together
              to remember the occasion.
            </li>
          </ul>

          <h2 style={h2}>
            Frequently Asked Questions
          </h2>

          <h3 style={faqTitle}>
            What comes inside the Christmas Mystery Box?
          </h3>

          <p style={text}>
            Each box includes four products:
            two surprise dog toys, one dog bowl
            and one warm winter dog coat in size M.
            The exact designs are a surprise.
          </p>

          <h3 style={faqTitle}>
            What size is the winter dog coat?
          </h3>

          <p style={text}>
            The included winter coat is size M only.
            Please check your dog's measurements
            before purchasing to make sure this
            size is suitable.
          </p>

          <h3 style={faqTitle}>
            How much does the Christmas Mystery Box cost?
          </h3>

          <p style={text}>
            The Christmas special price is $39.90.
            The four included products have a
            combined individual value of $60.90,
            representing a $21.00 saving.
          </p>

          <h3 style={faqTitle}>
            Is the Christmas Mystery Box available all year?
          </h3>

          <p style={text}>
            No. This is a limited Christmas edition,
            planned to be available until
            December 31, 2026.
            Availability may also depend on stock.
          </p>

          <h3 style={faqTitle}>
            Can I choose the exact toys and bowl?
          </h3>

          <p style={text}>
            No. Part of the fun is discovering
            the surprise products selected for
            the Christmas box.
          </p>

          <h2 style={h2}>Key Takeaways</h2>

          <p style={text}>
            Ponpon's Christmas Mystery Box is a
            festive way to surprise your dog with
            four gifts in one package. From fun
            toys to a practical bowl and a warm
            winter coat, it combines useful
            essentials with a little holiday magic.
          </p>

          <div style={cta}>
            <h2 style={ctaTitle}>
              Make your dog's Christmas extra special 🎄
            </h2>

            <p style={ctaText}>
              Inspired by Ponpon, our rescue dog
              from Spain. Discover four surprise
              Christmas gifts for just $39.90.
              Available for a limited time.
            </p>

            <a
              href="/product/ponpons-christmas-mystery-box"
              style={ctaButton}
            >
              Shop Ponpon's Christmas Mystery Box →
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}

const page = {
  background: "#f6f2ed",
  minHeight: "100vh",
  padding: "50px 18px",
  fontFamily: "inherit"
};

const article = {
  maxWidth: "880px",
  margin: "0 auto",
  background: "#fff",
  borderRadius: "24px",
  overflow: "hidden",
  boxShadow: "0 18px 50px rgba(0,0,0,0.08)"
};

const hero = {
  padding: "48px 36px 34px",
  background: "linear-gradient(135deg, #fff7f8, #ffffff)",
  textAlign: "center",
  borderBottom: "1px solid #f0e6e6"
};

const backLink = {
  display: "inline-block",
  marginBottom: "22px",
  color: "#d14d68",
  textDecoration: "none",
  fontWeight: "700"
};

const category = {
  color: "#d14d68",
  fontWeight: "800",
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  fontSize: "13px",
  marginBottom: "14px"
};

const title = {
  color: "#15110f",
  fontSize: "clamp(34px, 5vw, 56px)",
  lineHeight: "1.05",
  margin: "0 0 16px"
};

const meta = {
  color: "#7b6f6a",
  fontSize: "18px",
  margin: 0
};

const tagline = {
  fontSize: "14px",
  color: "#b46b7f",
  marginTop: "8px",
  fontWeight: "500"
};

const content = {
  padding: "42px 36px",
  color: "#1f1a17"
};

const lead = {
  fontSize: "21px",
  lineHeight: "1.75",
  marginBottom: "18px"
};

const text = {
  fontSize: "18px",
  lineHeight: "1.75",
  marginBottom: "18px"
};

const h2 = {
  color: "#15110f",
  fontSize: "30px",
  marginTop: "38px",
  marginBottom: "12px"
};

const list = {
  fontSize: "18px",
  lineHeight: "1.9",
  paddingLeft: "24px",
  marginBottom: "22px"
};

const quickBox = {
  background: "#fff8ef",
  border: "1px solid #f3dfb5",
  borderRadius: "16px",
  padding: "22px",
  margin: "30px 0"
};

const accordion = {
  border: "1px solid #ecdcd5",
  borderRadius: "14px",
  padding: "16px 20px",
  margin: "12px 0",
  background: "#fffaf7"
};

const summary = {
  cursor: "pointer",
  fontWeight: "700",
  fontSize: "19px",
  lineHeight: "1.5",
  color: "#2c201b"
};

const accordionContent = {
  paddingTop: "14px"
};

const faqTitle = {
  fontSize: "22px",
  marginTop: "28px"
};

const cta = {
  marginTop: "32px",
  padding: "30px",
  background: "#17120f",
  color: "#fff",
  borderRadius: "20px",
  textAlign: "center"
};

const ctaTitle = {
  fontSize: "26px",
  margin: "0 0 12px"
};

const ctaText = {
  color: "#ddd",
  fontSize: "17px",
  lineHeight: "1.7",
  marginBottom: "22px"
};

const ctaButton = {
  display: "inline-block",
  background: "#fff",
  color: "#111",
  padding: "14px 24px",
  borderRadius: "999px",
  textDecoration: "none",
  fontWeight: "800"
};
