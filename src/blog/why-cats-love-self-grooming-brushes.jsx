import { useEffect } from "react";

export default function WhyCatsLoveSelfGroomingBrushes() {
  useEffect(() => {
    document.title = "Why Do Cats Love Self-Grooming Brushes? 10 Things to Know | FluffHaven";
  }, []);

  const tips = [
    { title: "Cats naturally rub against familiar surfaces", paragraphs: ["Cats often rub their cheeks and bodies against furniture, door frames and people. Rubbing is part of their normal behavior and can help them explore and mark familiar places with scent.", "A self-grooming brush gives your cat another surface to investigate at their own pace."] },
    { title: "A corner brush creates a dedicated rubbing spot", paragraphs: ["A wall-mounted corner brush can turn a familiar route through your home into a convenient place for your cat to rub.", "Choose a stable, accessible location that your cat already visits rather than forcing them to use a new area."] },
    { title: "Soft bristles can make rubbing pleasant", paragraphs: ["Many cats enjoy rubbing against gentle textures, although individual preferences vary. A brush should never feel sharp or cause irritation.", "FluffHaven's Cat Self Grooming Brush features soft silicone bristles designed for everyday rubbing."] },
    { title: "The brush may collect some loose fur", paragraphs: ["As your cat rubs against the bristles, some loose hairs may remain on the brush instead of falling onto nearby surfaces.", "It does not replace regular coat checks or brushing, particularly for long-haired cats or cats prone to mats."] },
    { title: "Placement matters more than persuasion", paragraphs: ["Try a corner near your cat's favorite resting area or a frequently used passage, at a comfortable height for their body.", "Keep it away from cramped spaces where your cat might feel trapped. Let your cat approach voluntarily."] },
    { title: "Introduce the brush slowly", paragraphs: ["Allow your cat to sniff the brush before expecting any contact. Some cats investigate new objects immediately, while others need several days.", "Avoid holding your cat against the bristles. Positive, unforced experiences are more likely to build comfort."] },
    { title: "A self-grooming brush is not a full grooming routine", paragraphs: ["Even if your cat uses a wall-mounted brush, check their coat regularly for tangles, skin changes and excess shedding.", "Long-haired cats, senior cats and cats with limited mobility may need additional help with grooming."] },
    { title: "Keep the brush clean", paragraphs: ["Remove collected fur frequently and clean the brush according to its care instructions. Let it dry fully before your cat uses it again.", "Regular cleaning helps keep the rubbing surface comfortable and hygienic."] },
    { title: "Watch your cat's reaction", paragraphs: ["Relaxed rubbing and voluntary return visits are good signs that your cat enjoys the spot. If your cat avoids it or seems uncomfortable, move or remove it.", "Excessive scratching, bald patches or irritated skin should be discussed with a veterinarian rather than treated with a grooming accessory."] },
    { title: "Keep it simple and let your cat decide", paragraphs: ["Not every cat will love a self-grooming brush, and that is perfectly normal. The goal is to offer an optional enrichment and grooming surface.", "When your cat chooses to use it, a small wall-mounted brush can become a convenient part of their daily routine."] },
  ];

  return (
    <main style={page}>
      <article style={article}>
        <div style={hero}>
          <a href="/blog" style={backLink}>← Back to Blog</a>
          <p style={category}>Cat grooming & behavior guide</p>
          <h1 style={title}>Why Do Cats Love Self-Grooming Brushes? 10 Things to Know</h1>
          <p style={meta}>Published: October 2026 · 7 min read</p>
          <p style={tagline}>🐱 A cozy little rubbing spot for curious cats</p>
        </div>
        <div style={content}>
          <p style={lead}>Have you ever noticed your cat rubbing their cheeks against a doorway, sofa corner or your legs? This familiar behavior is one reason wall-mounted self-grooming brushes can appeal to some cats.</p>
          <p style={text}>Unlike a traditional handheld brush, a self-grooming brush stays in one place so your cat can choose when to rub against it. Here are ten useful things to know before adding one to your home.</p>
          <div style={quickBox}>
            <strong>Quick Answer</strong>
            <p style={{ marginTop: 12, lineHeight: 1.8 }}>Some cats enjoy self-grooming brushes because they offer a textured surface for natural rubbing. A well-placed brush with soft bristles may collect loose fur, but it should be introduced gradually and does not replace regular grooming or veterinary care.</p>
          </div>
          <div style={cta}>
            <h2 style={ctaTitle}>A little grooming spot, chosen by your cat ✨</h2>
            <p style={ctaText}>The FluffHaven Cat Self Grooming Brush has a wall-mounted corner design and soft silicone bristles that help collect loose hair as your cat rubs. Available for $8.90.</p>
            <a href="/product/cat-self-grooming-brush" style={ctaButton}>View Cat Self Grooming Brush →</a>
          </div>
          <h2 style={h2}>10 things to know about self-grooming brushes</h2>
          <p style={text}>Tap any topic to read more. You can open several sections at once.</p>
          {tips.map((tip, index) => (
            <details key={index} style={accordion}>
              <summary style={summary}>{index + 1}. {tip.title}</summary>
              <div style={accordionContent}>
                {tip.paragraphs.map((paragraph, i) => <p key={i} style={text}>{paragraph}</p>)}
              </div>
            </details>
          ))}
          <h2 style={h2}>Common mistakes to avoid</h2>
          <ul style={list}>
            <li>Forcing your cat to rub against the brush.</li>
            <li>Installing it where your cat cannot approach comfortably.</li>
            <li>Leaving collected fur on the bristles for too long.</li>
            <li>Assuming a self-grooming brush replaces regular coat care.</li>
            <li>Ignoring skin irritation, bald patches or sudden grooming changes.</li>
          </ul>
          <h2 style={h2}>Frequently Asked Questions</h2>
          <h3 style={faqHeading}>Will every cat use a self-grooming brush?</h3>
          <p style={text}>No. Cats have different preferences, and some may ignore the brush entirely. Offer it as an option rather than an obligation.</p>
          <h3 style={faqHeading}>Does a wall-mounted brush remove loose hair?</h3>
          <p style={text}>It can collect some loose hair when your cat rubs against the bristles, but the amount varies and it is not a substitute for regular brushing.</p>
          <h3 style={faqHeading}>Where should I install a cat self-grooming brush?</h3>
          <p style={text}>Choose a secure corner at a comfortable height along a route your cat already uses. Follow the product's installation instructions.</p>
          <h3 style={faqHeading}>What if my cat starts rubbing excessively?</h3>
          <p style={text}>If rubbing is sudden, persistent or accompanied by itching, redness or hair loss, contact your veterinarian to rule out a skin or health problem.</p>
          <h2 style={h2}>Key Takeaways</h2>
          <p style={text}>Self-grooming brushes can offer cats a voluntary place to rub while collecting a little loose fur. Good placement, gentle bristles and regular cleaning matter more than trying to train every cat to use one. Continue normal coat care and let your cat set the pace.</p>
          <div style={cta}>
            <h2 style={ctaTitle}>Make room for a little everyday comfort</h2>
            <p style={ctaText}>Discover FluffHaven's wall-mounted Cat Self Grooming Brush with soft silicone bristles, available for $8.90.</p>
            <a href="/product/cat-self-grooming-brush" style={ctaButton}>View Cat Self Grooming Brush →</a>
          </div>
        </div>
      </article>
    </main>
  );
}

const page = { background: "#f6f2ed", minHeight: "100vh", padding: "50px 18px", fontFamily: "inherit" };
const article = { maxWidth: "880px", margin: "0 auto", background: "#fff", borderRadius: "24px", overflow: "hidden", boxShadow: "0 18px 50px rgba(0,0,0,0.08)" };
const hero = { padding: "48px 36px 34px", background: "linear-gradient(135deg, #fff7f8, #ffffff)", textAlign: "center", borderBottom: "1px solid #f0e6e6" };
const backLink = { display: "inline-block", marginBottom: "22px", color: "#d14d68", textDecoration: "none", fontWeight: "700" };
const category = { color: "#d14d68", fontWeight: "800", letterSpacing: "0.16em", textTransform: "uppercase", fontSize: "13px", marginBottom: "14px" };
const title = { color: "#15110f", fontSize: "clamp(34px, 5vw, 56px)", lineHeight: "1.05", margin: "0 0 16px" };
const meta = { color: "#7b6f6a", fontSize: "18px", margin: 0 };
const tagline = { fontSize: "14px", color: "#b46b7f", marginTop: "8px", fontWeight: "500" };
const content = { padding: "42px 36px", color: "#1f1a17" };
const lead = { fontSize: "21px", lineHeight: "1.75", marginBottom: "18px" };
const text = { fontSize: "18px", lineHeight: "1.75", marginBottom: "18px" };
const h2 = { color: "#15110f", fontSize: "30px", marginTop: "38px", marginBottom: "12px" };
const list = { fontSize: "18px", lineHeight: "1.9", paddingLeft: "24px", marginBottom: "22px" };
const faqHeading = { fontSize: "22px", marginTop: "28px" };
const quickBox = { background: "#fff8ef", border: "1px solid #f3dfb5", borderRadius: "16px", padding: "22px", margin: "30px 0" };
const accordion = { border: "1px solid #ecdcd5", borderRadius: "14px", padding: "16px 20px", margin: "12px 0", background: "#fffaf7" };
const summary = { cursor: "pointer", fontWeight: "700", fontSize: "19px", lineHeight: "1.5", color: "#2c201b" };
const accordionContent = { paddingTop: "14px" };
const cta = { marginTop: "32px", padding: "30px", background: "#17120f", color: "#fff", borderRadius: "20px", textAlign: "center" };
const ctaTitle = { fontSize: "26px", margin: "0 0 12px" };
const ctaText = { color: "#ddd", fontSize: "17px", lineHeight: 1.7, marginBottom: "22px" };
const ctaButton = { display: "inline-block", background: "#fff", color: "#111", padding: "14px 24px", borderRadius: "999px", textDecoration: "none", fontWeight: "800" };
