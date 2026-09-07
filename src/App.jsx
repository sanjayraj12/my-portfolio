import { motion } from "framer-motion";
import { Download } from "lucide-react";
import profile from "./assets/profile.png";
import resume from "./assets/Sanjay_Raj_Resume.pdf";
import "./index.css";



const primeraCampaigns = [
  {
    title: "Dental Implant & Aligner Campaign",
    objective: "B2C Dental Service Lead Generation",
    work: [
      "Meta Lead Generation Campaigns",
      "Creative & Copy Optimization",
      "Landing Page Form Improvement",
      "Audience Targeting & Retargeting"
    ],
    result: "30+ enquiry calls generated"
  },

  {
    title: "Wireless Intraoral Camera",
    objective: "B2B Dental Equipment Promotion",
    work: [
      "Creative Angle Testing",
      "Form Optimization",
      "Campaign Analysis"
    ],
    result: "95+ Leads | ₹56.45 CPL"
  },

  {
    title: "Implant & Piezo Surgical Unit",
    objective: "High Ticket Dental Equipment",
    work: [
      "Audience Strategy",
      "Creative Testing",
      "Lead Quality Optimization"
    ],
    result: "135+ Leads | ₹40.70 CPL"
  },

  {
    title: "Kovident Dental Expo",
    objective: "Offline Event Promotion",
    work: [
      "Meta Campaign Execution",
      "Audience Research",
      "Creative Coordination"
    ],
    result: "75+ Qualified Leads"
  }
];



const wtiltCampaigns = [
  {
    title: "ERP - Meta Ads",
    objective: "B2B Service Awareness Campaign",
    work: [
      "Campaign Setup Support",
      "Audience Targeting",
      "Ad Structure Optimization",
      "Performance Monitoring"
    ],
    result: "216K+ Impressions | 184K+ Reach"
  },

  {
    title: "Food Ecommerce - Meta Ads",
    objective: "Ecommerce Growth Campaign",
    work: [
      "Retargeting Setup",
      "Audience Segmentation",
      "Campaign Monitoring",
      "Engagement Optimization"
    ],
    result: "500+ Website Clicks"
  },

  {
    title: "Google Ads - Search, Shopping & Display",
    objective: "Search & Performance Campaigns",
    work: [
      "Search Campaign Support",
      "Shopping Campaign Support",
      "Keyword Research",
      "Campaign Reporting"
    ],
    result: "Performance Tracking Improved"
  }
];



const dciCampaigns = [
  {
    title: "App Store Optimization (ASO)",
    objective: "Organic App Growth & App Store Visibility",
    work: [
      "Keyword Research & Competitor Analysis",
      "App Store Listing Optimization",
      "App Description Optimization",
      "App Screenshot Planning & Design"
    ],
    result: "ASO Strategy & App Listing Optimization"
  },

  {
    title: "Google Ads - App Promotion",
    objective: "App User Acquisition Campaign",
    work: [
      "Google App Campaign Setup",
      "Campaign Monitoring & Optimization",
      "Budget Scaling",
      "Campaign Performance Analysis"
    ],
    result: "App Promotion Campaigns Managed"
  },

  {
    title: "Meta Ads - App Promotion",
    objective: "App User Acquisition Campaign",
    work: [
      "Meta App Promotion Campaigns",
      "Audience Targeting",
      "Creative Performance Analysis",
      "Campaign Reporting"
    ],
    result: "App Promotion & Performance Tracking"
  },

  {
    title: "App Analytics & Tracking",
    objective: "App Performance Monitoring",
    work: [
      "Firebase Performance Tracking",
      "User Acquisition Analysis",
      "Campaign Data Monitoring",
      "Performance Reporting"
    ],
    result: "App Performance & Campaign Insights"
  },

  {
    title: "GoHighLevel Automation",
    objective: "Lead Follow-up & Marketing Automation",
    work: [
      "Workflow Creation",
      "SMS & Email Automation",
      "Follow-up Sequences",
      "Lead Nurturing & Workflow Management"
    ],
    result: "Automated Lead Follow-up Workflows"
  }
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
    <motion.div
      className="campaign-card"
      whileHover={{ y: -8 }}
    >

      <h3>{item.title}</h3>

      <p className="small">
        {item.objective}
      </p>

      <div className="inside">

        <h4>Work Done</h4>

        <ul>
          {
            item.work.map((x, i) => (
              <li key={i}>
                {x}
              </li>
            ))
          }
        </ul>

      </div>

      <div className="metric">
        {item.result}
      </div>

    </motion.div>
  );
}



export default function App() {

  return (

    <>


      <section className="hero">

        <div className="hero-text">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
          >
            SANJAY RAJ J
          </motion.h1>


          <h3>
            Performance Marketing Associate
          </h3>


          <p className="tagline">
            Meta Ads | Google Ads | ASO | Automation
          </p>


          <p className="intro">
            Hands-on experience in paid campaigns, app marketing,
            ASO, automation and lead generation, driving digital
            growth for B2B & B2C businesses.
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
          <img src={profile} />
        </div>

      </section>



      <Fade>

        <section className="box">

          <h2>About Me</h2>

          <p>

            Performance marketing enthusiast with hands-on experience in Meta Ads,
            Google Ads, ASO, Firebase analytics, GHL automation and campaign execution.
            Worked on app promotion, dental equipment and service campaigns focusing on
            lead generation, app installs, optimization and digital growth.

          </p>

        </section>

      </Fade>



      <Fade>

        <section>

          <h2>Experience</h2>


          <div className="experience-grid">


            <div className="box">

              <h3>Primera Dental Hub-3 Months</h3>

              <h4>Digital Marketing Executive</h4>


              <ul>

                <li>
                  Managed B2B & B2C dental equipment campaigns
                </li>

                <li>
                  Generated 305+ qualified leads with ₹40.70–₹73.40 CPL
                </li>

                <li>
                  Handled Meta Ads, WhatsApp marketing, SEO and retargeting
                </li>

                <li>
                  Managed WordPress, IndiaMART and Google Business Profile
                </li>

              </ul>

            </div>



            <div className="box">

              <h3>
                WTILTH Technologies Private Limited-3 Months
              </h3>

              <h4>
                Performance Marketing Intern
              </h4>


              <ul>

                <li>
                  Executed Meta Ads awareness campaigns
                </li>

                <li>
                  Worked on audience targeting and reporting
                </li>

                <li>
                  Handled campaign monitoring and optimization
                </li>

                <li>
                  Created automation workflows
                </li>

              </ul>

            </div>



            <div className="box">

              <h3>
                Dot Com Infoway-1 Month (Ongoing)
              </h3>

              <h4>
                App Marketing Executive
              </h4>


              <ul>

                <li>
                  Worked on ASO (App Store Optimization) for organic and inorganic app growth
                </li>

                <li>
                  Conducted keyword research using ASO tools for app store listing optimization
                </li>

                <li>
                  Wrote app store descriptions and coordinated screenshot creatives/designs
                </li>

                <li>
                  Tracked app performance and user behavior using Firebase and analytics tools
                </li>

                <li>
                  Ran Google Ads app promotion campaigns and handled campaign analysis & reporting
                </li>

                <li>
                  Built GoHighLevel (GHL) automation workflows with SMS, email and wait-day sequences for lead follow-ups
                </li>

              </ul>

            </div>


          </div>

        </section>

      </Fade>



      <Fade>

        <section>

          <h2>Skills</h2>


          <div className="skill-grid">


            <div className="box">

              <h3>Performance Marketing</h3>

              <p>

                Meta Ads, Google Ads, Lead Generation, Audience Targeting,
                Retargeting, Conversion Tracking, A/B Testing,
                Campaign Optimization, Funnel Strategy, Metric Analysis

              </p>

            </div>



            <div className="box">

              <h3>Analytics & Tracking</h3>

              <p>

                GA4, Meta Pixel, Firebase Analytics, Campaign Reporting,
                Performance Analysis, Data Interpretation,
                Google Sheets, Excel

              </p>

            </div>



            <div className="box">

              <h3>ASO & Growth</h3>

              <p>

                App Store Optimization (ASO), Keyword Research,
                App Listing Optimization, Screenshot & Creative Testing,
                Google Play & App Store Algorithm Understanding

              </p>

            </div>



            <div className="box">

              <h3>Automation & Tools</h3>

              <p>

                WhatsApp Marketing, ManyChat, Interakt,
                Grexa.ai, GoHighLevel (GHL), WordPress, Canva,
                Looker Studio, IndiaMART

              </p>

            </div>


          </div>

        </section>

      </Fade>



      <Fade>

        <section>

          <h2>Campaign Work</h2>


          <h3 className="orange">
            Primera Dental Hub
          </h3>


          <p className="swipe">
            Swipe through campaigns →
          </p>


          <div className="campaign-row">

            {
              primeraCampaigns.map((x, i) =>

                <CampaignCard
                  item={x}
                  key={i}
                />

              )
            }

          </div>



          <h3 className="orange">
            WTILTH Technologies Private Limited
          </h3>


          <p className="swipe">
            Swipe through campaigns →
          </p>


          <div className="campaign-row">

            {
              wtiltCampaigns.map((x, i) =>

                <CampaignCard
                  item={x}
                  key={i}
                />

              )
            }

          </div>



          <h3 className="orange">
            Dot Com Infoway
          </h3>


          <p className="swipe">
            App Marketing & Automation →
          </p>


          <div className="campaign-row">

            {
              dciCampaigns.map((x, i) =>

                <CampaignCard
                  item={x}
                  key={i}
                />

              )
            }

          </div>


        </section>

      </Fade>



      <Fade>

        <section>

          <div className="box">

            <h2>Education</h2>

            <h3>
              B.E Computer Science and Engineering
            </h3>

            <p>
              NPR College of Engineering and Technology
            </p>

            <p>
              2022 - 2026
            </p>

          </div>

        </section>

      </Fade>



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

              <h3>
                Google Ads Search Certification
              </h3>

              <p>
                Skillshop Certification
              </p>

            </motion.div>



            <motion.div
              className="cert-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >

              <h3>
                Meta Blueprint Certification
              </h3>

              <p>
                Meta Pixel & Campaign Analytics
              </p>

            </motion.div>


          </div>

        </section>

      </Fade>



      <footer>
        © 2026 Sanjay Raj J
      </footer>



      <motion.button
        className="top-btn"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth"
          })
        }
        whileHover={{ scale: 1.1 }}
      >
        ↑
      </motion.button>


    </>

  );
}