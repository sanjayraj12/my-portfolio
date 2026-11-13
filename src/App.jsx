import { motion } from "framer-motion";
import { Download } from "lucide-react";
import profile from "./assets/profile.png";
import resume from "./assets/SanjayRaj_Marketer_CV.pdf";
import "./index.css";

const dciCampaigns = [
  {
    title: "Meta Ads Campaign",
    objective: "Event-Based App Campaigns",
    work: [
      "Meta App Install & Event-Based Campaigns",
      "Tier-wise Audience Targeting",
      "Creative & Copy Testing",
      "Event Optimization",
    ],
    result: "4,596+ Installs | ₹48.23 Average CPI | ₹2.22L Ad Spend",
  },
  {
    title: "Google Ads Campaign",
    objective: "Event-Based App Campaigns",
    work: [
      "Google App Campaigns with Event Optimization",
      "Tier-wise Location Targeting",
      "Bidding & Budget Optimization",
      "Creative Asset Testing",
    ],
    result: "8,814+ Installs | ₹24.20 Average CPI | ₹2.13L Ad Spend",
  },
  {
    title: "LinkedIn Ads Campaign",
    objective: "Professional Audience Promotion",
    work: [
      "Sponsored Content Campaign",
      "Professional Audience Targeting",
      "Creative & Copy Optimization",
      "Click Cost Optimization",
    ],
    result: "1,649+ Website Visits | ₹6.86 Per Result | 1.93% CTR",
  },
  {
    title: "Campaign Management & Lead Nurturing",
    objective: "Campaign Execution, Analysis & Marketing Automation",
    work: [
      "Campaign Monitoring Across Multiple Platforms",
      "Lead Generation & App Acquisition Support",
      "Performance Analysis & Optimisation Opportunities",
      "Structured Email, SMS & Automated Follow-ups",
    ],
    result: "Campaign Optimisation & Automated Lead Follow-up Workflows",
  },
];

const primeraCampaigns = [
  {
    title: "Dental Implant & Aligner Campaign",
    objective: "B2C Dental Service Lead Generation",
    work: [
      "Meta Lead Generation Campaigns",
      "Creative & Copy Optimization",
      "Landing Page Form Improvement",
      "Audience Targeting & Retargeting",
    ],
    result: "30+ enquiry calls generated",
  },
  {
    title: "Wireless Intraoral Camera",
    objective: "B2B Dental Equipment Promotion",
    work: [
      "Creative Angle Testing",
      "Form Optimization",
      "Campaign Analysis",
    ],
    result: "95+ Leads | ₹56.45 CPL",
  },
  {
    title: "Implant & Piezo Surgical Unit",
    objective: "High Ticket Dental Equipment",
    work: [
      "Audience Strategy",
      "Creative Testing",
      "Lead Quality Optimization",
    ],
    result: "135+ Leads | ₹40.70 CPL",
  },
  {
    title: "Kovident Dental Expo",
    objective: "Offline Event Promotion",
    work: [
      "Meta Campaign Execution",
      "Audience Research",
      "Creative Coordination",
    ],
    result: "75+ Qualified Leads",
  },
];

const wtilthCampaigns = [
  {
    title: "ERP - Meta Ads",
    objective: "B2B Service Awareness Campaign",
    work: [
      "Campaign Setup Support",
      "Audience Targeting",
      "Ad Structure Optimization",
      "Performance Monitoring",
    ],
    result: "216K+ Impressions | 184K+ Reach",
  },
  {
    title: "Food Ecommerce - Meta Ads",
    objective: "Ecommerce Growth Campaign",
    work: [
      "Retargeting Setup",
      "Audience Segmentation",
      "Campaign Monitoring",
      "Engagement Optimization",
    ],
    result: "500+ Website Clicks",
  },
  {
    title: "Google Ads - Search, Shopping & Display",
    objective: "Search & Performance Campaigns",
    work: [
      "Search Campaign Support",
      "Shopping Campaign Support",
      "Keyword Research",
      "Campaign Reporting",
    ],
    result: "Performance Tracking Improved",
  },
];

const skills = [
  {
    title: "Performance Marketing",
    items:
      "Meta Ads (Facebook & Instagram Ads), Google Ads, LinkedIn Ads, Mobile App Promotion, Lead Generation Campaigns, Audience Targeting, Retargeting, Campaign Optimisation, A/B Testing, Funnel Strategy, Conversion Tracking, Performance Analysis",
  },
  {
    title: "Analytics & Tracking",
    items:
      "Google Analytics 4 (GA4), Firebase, Meta Pixel, In-App Event Tracking, Campaign Reporting, Data Interpretation, CTR, CPC, CPL, CPI Analysis, Google Sheets, Microsoft Excel",
  },
  {
    title: "App Marketing & ASO",
    items:
      "App Store Optimisation (ASO), App Keyword Research, Competitor Analysis, App Listing Optimisation, Google Play Console, App Store Connect, AppTweak",
  },
  {
    title: "SEO & Growth Marketing",
    items:
      "Keyword Research, On-Page SEO, Backlink Building, Google Business Profile Optimisation, Organic Growth Strategies",
  },
  {
    title: "Marketing Automation",
    items:
      "GoHighLevel (GHL), ManyChat Automation, Interakt, Grexa.ai, WhatsApp Marketing, Email & SMS Automation, Conditional Workflow Triggers, Lead Nurturing Sequences, Automated Follow-ups",
  },
  {
    title: "Marketing Platforms & Tools",
    items:
      "Meta Business Suite, Google Ads Manager, Google Merchant Center, WordPress, IndiaMART, Facebook Marketplace, Canva, Looker Studio, Exploring AI-Assisted Video Creation",
  },
];

function Fade({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}

function CampaignCard({ item }) {
  return (
    <motion.div className="campaign-card" whileHover={{ y: -8 }}>
      <h3>{item.title}</h3>

      <p className="small">{item.objective}</p>

      <div className="inside">
        <h4>Work Done</h4>

        <ul>
          {item.work.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>

      <div className="metric">{item.result}</div>
    </motion.div>
  );
}

function ExperienceCard({ company, role, period, children }) {
  return (
    <div className="box">
      <h3>{company}</h3>
      <h4>{role}</h4>
      <p className="small">{period}</p>
      <ul>{children}</ul>
    </div>
  );
}

export default function App() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-text">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
          >
            SANJAY RAJ J
          </motion.h1>

          <h3>Performance Marketing &amp; App Marketing</h3>

          <p className="tagline">
            Meta Ads | Google Ads | ASO | Marketing Automation
          </p>

          <p className="intro">
            I manage paid advertising campaigns, drive app installs and
            generate qualified leads. Beyond campaign execution, I work
            on lead nurturing, marketing automation and performance
            analysis to help businesses improve their marketing outcomes
            across B2B and B2C.
          </p>

          <div className="hero-buttons">
            <a
              href="https://www.linkedin.com/in/sanjay-raj-02155b3ab"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

            <a href={resume} download>
              <Download size={18} />
              Resume
            </a>
          </div>
        </div>

        <div className="profile-wrap">
          <img src={profile} alt="Sanjay Raj J" />
        </div>
      </section>

      {/* ABOUT ME */}
      <Fade>
        <section className="box">
          <h2>About Me</h2>

          <p>
            Performance Marketing professional with hands-on experience
            in Meta Ads, Google Ads, LinkedIn Ads and mobile app marketing.
            Experienced in managing paid campaigns, generating leads and
            app installs, analysing campaign performance and identifying
            opportunities for improvement.
          </p>

          <p style={{ marginTop: "16px" }}>
            My work also extends to marketing automation, where I build
            lead-nurturing workflows using email and SMS communication,
            conditional logic and automated follow-ups. I also explore
            AI-assisted video creation to support advertising campaigns
            and creative development.
          </p>

          <p style={{ marginTop: "16px" }}>
            I focus on connecting campaign strategy, execution and
            performance insights to deliver measurable marketing outcomes.
          </p>
        </section>
      </Fade>

      {/* EXPERIENCE */}
      <Fade>
        <section>
          <h2>Experience</h2>

          <div className="experience-grid">
            {/* 1. DOT COM INFOWAY */}
            <ExperienceCard
              company="Dot Com Infoway"
              role="Jr App Marketing Executive"
              period="July 2026 – Present"
            >
              <li>
                <strong>Meta Ads:</strong> Managed and analysed
                app-promotion campaigns reporting 4,596 installs
                at an average CPI of ₹48.23, while evaluating CTR,
                CPC, CPM, spend and campaign performance.
              </li>

              <li>
                <strong>Google Ads:</strong> Executed and analysed
                app-promotion campaigns, generating 8,814 reported
                installs at an average CPI of ₹24.20, while
                monitoring in-app events and campaign performance.
              </li>

              <li>
                <strong>LinkedIn Ads:</strong> Set up and monitored
                a website-visit campaign, generating 1,649 website
                visits at ₹6.86 per result, with a 1.93% CTR.
              </li>

              <li>
                <strong>App Store Optimization (ASO):</strong>{" "}
                Conducted keyword research, competitor analysis,
                and app listing optimisation using AppTweak,
                Google Play Console, and App Store Connect.
              </li>

              <li>
                <strong>Lead Nurturing &amp; Automation:</strong>{" "}
                Connected Meta lead forms with GoHighLevel and built
                email/Gmail and SMS follow-up sequences. Added conditional
                checks to track lead actions and automatically stop
                further nurturing when a lead completed the required action.
              </li>

              <li>
                <strong>AI-Assisted Creative Development:</strong>{" "}
                Exploring AI video tools to develop video ad creatives
                and support campaign content production.
              </li>

              <li>
                <strong>Social Media Management — 916 Studio:</strong>{" "}
                Planned content calendars and coordinated social
                media posts across LinkedIn, Instagram, and other
                relevant platforms to promote production projects,
                trailers, posters, and series launches.
              </li>
            </ExperienceCard>

            {/* 2. PRIMERA DENTAL HUB */}
            <ExperienceCard
              company="Primera Dental Hub"
              role="Digital Marketing Executive"
              period="April 2026 – June 2026"
            >
              <li>
                Managed digital marketing campaigns for a B2B and
                B2C dental business, promoting high-ticket dental
                equipment and dental services.
              </li>

              <li>
                Executed and managed Meta Lead Generation campaigns
                for B2B dental equipment and B2C dental services,
                generating 305+ qualified leads (₹40.70–₹73.40 CPL)
                and 30+ customer enquiry calls through optimised
                audience targeting, retargeting, and campaign
                performance analysis.
              </li>

              <li>
                Optimised campaigns through audience targeting,
                creative testing, and performance analysis to
                improve lead quality and reduce acquisition costs.
              </li>

              <li>
                Executed WhatsApp marketing and retargeting
                workflows using Interakt and Grexa.ai to improve
                follow-ups and customer communication.
              </li>

              <li>
                Handled product marketing operations including
                WordPress updates, Google Shopping feeds, IndiaMART,
                Facebook Marketplace listings, and social media.
              </li>

              <li>
                Improved organic visibility through on-page SEO,
                backlink activities, and Google Business Profile
                optimisation.
              </li>
            </ExperienceCard>

            {/* 3. WTILTH TECHNOLOGIES */}
            <ExperienceCard
              company="Wtilth Technologies Private Limited"
              role="Performance Marketing Intern"
              period="January 2026 – April 2026"
            >
              <li>
                Executed Meta Ads campaigns for awareness and
                traffic objectives with audience targeting.
              </li>

              <li>
                Achieved 216K+ impressions, 184K+ reach, and
                500+ website clicks through optimised campaigns.
              </li>

              <li>
                Analysed CTR, CPC, engagement metrics and
                implemented ManyChat automation workflows.
              </li>
            </ExperienceCard>
          </div>
        </section>
      </Fade>

      {/* SKILLS */}
      <Fade>
        <section>
          <h2>Skills</h2>

          <div className="skill-grid">
            {skills.map((skill) => (
              <div className="box" key={skill.title}>
                <h3>{skill.title}</h3>
                <p>{skill.items}</p>
              </div>
            ))}
          </div>
        </section>
      </Fade>

      {/* CAMPAIGN WORK */}
      <Fade>
        <section>
          <h2>Campaign Work</h2>

          {/* 1. DOT COM INFOWAY */}
          <h3 className="orange">Dot Com Infoway</h3>

          <p className="swipe">
            App Marketing &amp; Automation →
          </p>

          <div className="campaign-row">
            {dciCampaigns.map((item, index) => (
              <CampaignCard item={item} key={index} />
            ))}
          </div>

          {/* 2. PRIMERA DENTAL HUB */}
          <h3 className="orange">Primera Dental Hub</h3>

          <p className="swipe">Swipe through campaigns →</p>

          <div className="campaign-row">
            {primeraCampaigns.map((item, index) => (
              <CampaignCard item={item} key={index} />
            ))}
          </div>

          {/* 3. WTILTH TECHNOLOGIES */}
          <h3 className="orange">
            Wtilth Technologies Private Limited
          </h3>

          <p className="swipe">Swipe through campaigns →</p>

          <div className="campaign-row">
            {wtilthCampaigns.map((item, index) => (
              <CampaignCard item={item} key={index} />
            ))}
          </div>
        </section>
      </Fade>

      {/* EDUCATION */}
      <Fade>
        <section>
          <div className="box">
            <h2>Education</h2>

            <h3>B.E Computer Science and Engineering</h3>

            <p>NPR College of Engineering and Technology</p>

            <p>2022 - 2026</p>
          </div>
        </section>
      </Fade>

      {/* CERTIFICATIONS */}
      <Fade>
        <section>
          <h2>Certifications</h2>

          <div className="cert-grid">
            <motion.div
              className="cert-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3>Google Ads Search Certification</h3>
              <p>Skillshop Certification</p>
            </motion.div>

            <motion.div
              className="cert-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3>Meta Blueprint Certification</h3>
              <p>Meta Pixel &amp; Campaign Analytics</p>
            </motion.div>
          </div>
        </section>
      </Fade>

      {/* FOOTER */}
      <footer>© 2026 Sanjay Raj J</footer>

      {/* BACK TO TOP */}
      <motion.button
        className="top-btn"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        whileHover={{ scale: 1.1 }}
        aria-label="Back to top"
      >
        ↑
      </motion.button>
    </>
  );
}