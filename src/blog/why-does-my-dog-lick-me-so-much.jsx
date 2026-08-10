import { useEffect } from "react";

export default function WhyDoesMyDogLickMeSoMuch() {
  useEffect(() => {
    document.title = "Why Does My Dog Lick Me So Much? | FluffHaven";
  }, []);

  return (
    <main style={page}>
      <article style={article}>
        <div style={hero}>
          <a href="/blog" style={backLink}>← Back to Blog</a>
          <p style={category}>Dog behavior guide</p>
          <h1 style={title}>Why Does My Dog Lick Me So Much?</h1>
          <p style={meta}>Published: August 2026 · 7 min read</p>
          <p style={{ fontSize: "14px", color: "#b46b7f", marginTop: "8px", fontWeight: "500" }}>
            ❤️ A practical guide for curious dog owners
          </p>
        </div>

        <div style={content}>
          <p style={lead}>
            Does your dog lick your hands, face, arms or legs whenever they get the chance? Licking is one of the most familiar dog behaviors, but when it happens frequently it can leave owners wondering what their dog is really trying to communicate.
          </p>

          <p style={text}>
            In many cases, licking is a normal social behavior. Dogs may lick people to show affection, seek attention, explore interesting smells or simply because the behavior has become part of their everyday routine with you.
          </p>

          <div style={{ background: "#fff8ef", border: "1px solid #f3dfb5", borderRadius: "16px", padding: "22px", margin: "30px 0" }}>
            <strong>Quick Answer</strong>
            <p style={{ marginTop: "12px", lineHeight: "1.8" }}>
              Most dogs lick their owners because licking is a natural form of communication and social contact. It can express affection, attract attention, explore taste and scent, or simply reflect a habit that your dog finds rewarding.
            </p>
          </div>

          <h2 style={h2}>Licking can be a simple sign of affection</h2>
          <p style={text}>
            Dogs communicate largely through body language and physical behavior. Gentle licking can be one way of seeking closeness with a person they trust and enjoy spending time with.
          </p>
          <p style={text}>
            If your dog approaches with a relaxed body, soft expression and friendly behavior, occasional licking is usually just another part of the bond you share.
          </p>

          <h2 style={h2}>Your dog may have learned that licking gets attention</h2>
          <p style={text}>
            Dogs are excellent at noticing what makes people respond. If you talk to your dog, laugh, pet them or look at them every time they lick you, they may quickly learn that licking is an effective way to start an interaction.
          </p>
          <p style={text}>
            This does not mean the behavior is manipulative. It simply means your dog has discovered that a particular action often leads to something enjoyable: your attention.
          </p>

          <h2 style={h2}>Taste and scent can make your skin interesting</h2>
          <p style={text}>
            Dogs experience the world through scent and taste. Skin can carry traces of food, lotions, sweat and many other smells that are interesting to a curious nose.
          </p>
          <p style={text}>
            Sometimes the explanation is surprisingly simple: your dog may lick because your hands or skin smell interesting after cooking, exercising or spending time outdoors.
          </p>

          <h2 style={h2}>Common reasons dogs lick their owners</h2>
          <ul style={list}>
            <li>They are showing friendly social behavior.</li>
            <li>They want affection or attention.</li>
            <li>Your skin has an interesting taste or smell.</li>
            <li>Licking has become part of their daily routine.</li>
            <li>They are excited when you come home.</li>
            <li>They use licking as a calming or repetitive habit.</li>
          </ul>
          <p style={text}>
            Context matters. A few happy licks when you sit down together are very different from constant licking that is difficult to interrupt.
          </p>

          <h2 style={h2}>Why does my dog lick me when I come home?</h2>
          <p style={text}>
            Greetings are emotionally exciting moments for many dogs. Licking may appear alongside tail wagging, following you around, bringing a toy or leaning against you.
          </p>
          <p style={text}>
            In this situation, licking is often part of a larger greeting routine rather than a behavior with one single meaning.
          </p>

          <h2 style={h2}>What if you do not want your dog to lick you?</h2>
          <p style={text}>
            You do not need to punish your dog. Instead, calmly remove attention when licking begins and reward an alternative behavior such as sitting quietly, lying on a bed or engaging with a toy.
          </p>
          <p style={text}>
            Consistency matters. If licking sometimes receives lots of attention and sometimes does not, your dog may keep trying because the behavior still occasionally works.
          </p>

          <h2 style={h2}>When can excessive licking deserve attention?</h2>
          <p style={text}>
            A sudden major increase in licking can be worth watching, especially if your dog also appears restless, uncomfortable, unusually anxious or begins licking their own body excessively.
          </p>
          <p style={text}>
            When a behavior changes suddenly or appears together with other unusual signs, a veterinarian can help rule out discomfort or health-related causes.
          </p>

          <h2 style={h2}>Frequently Asked Questions</h2>
          <h3 style={{ fontSize: "22px", marginTop: "28px" }}>Does my dog lick me because they love me?</h3>
          <p style={text}>
            Affection can certainly be part of it. Licking often appears during relaxed social contact, although attention, scent, taste and habit can also influence the behavior.
          </p>

          <h3 style={{ fontSize: "22px", marginTop: "28px" }}>Why does my dog lick my hands more than my face?</h3>
          <p style={text}>
            Hands carry many interesting smells because they touch food, objects and outdoor surfaces throughout the day. They are also easy for your dog to reach during normal interaction.
          </p>

          <h3 style={{ fontSize: "22px", marginTop: "28px" }}>Should I let my dog lick me all the time?</h3>
          <p style={text}>
            That is largely a personal boundary. If the behavior is gentle and manageable, you can decide what you are comfortable with. If it becomes excessive, calmly teaching an alternative behavior can help.
          </p>

          <h2 style={h2}>Key Takeaways</h2>
          <p style={text}>
            Dogs lick people for several reasons, including social connection, attention, interesting tastes and learned habits. Most everyday licking is normal when your dog otherwise appears relaxed and comfortable.
          </p>
          <p style={text}>
            Paying attention to when the licking happens is the best way to understand it. The surrounding situation, your dog's body language and any recent changes can tell you far more than the licking alone.
          </p>

          <div style={cta}>
            <h3 style={ctaTitle}>Give busy dogs another positive outlet</h3>
            <p style={ctaText}>
              Explore a simple enrichment option designed to keep dogs engaged and make everyday routines more interesting.
            </p>
            <a href="/product/premium-lick-mat-trio-pack" style={ctaButton}>View Premium Lick Mat Trio Pack →</a>
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
const content = { padding: "42px 36px", color: "#1f1a17" };
const lead = { fontSize: "21px", lineHeight: "1.75", marginBottom: "18px" };
const text = { fontSize: "18px", lineHeight: "1.75", marginBottom: "18px" };
const h2 = { color: "#15110f", fontSize: "30px", marginTop: "38px", marginBottom: "12px" };
const list = { fontSize: "18px", lineHeight: "1.9", paddingLeft: "24px", marginBottom: "22px" };
const cta = { marginTop: "42px", padding: "30px", background: "#17120f", color: "#fff", borderRadius: "20px", textAlign: "center" };
const ctaTitle = { fontSize: "26px", margin: "0 0 12px" };
const ctaText = { color: "#ddd", fontSize: "17px", lineHeight: "1.7", marginBottom: "22px" };
const ctaButton = { display: "inline-block", background: "#fff", color: "#111", padding: "14px 24px", borderRadius: "999px", textDecoration: "none", fontWeight: "800" };
