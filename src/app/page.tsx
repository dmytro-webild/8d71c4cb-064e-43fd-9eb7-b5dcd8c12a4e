"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardTwentySeven from '@/components/sections/feature/FeatureCardTwentySeven';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroOverlayTestimonial from '@/components/sections/hero/HeroOverlayTestimonial';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import { BarChart, Users, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="compact"
        sizing="large"
        background="grid"
        cardStyle="glass-elevated"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "About",
          id: "about",
        },
        {
          name: "Features",
          id: "features",
        },
        {
          name: "Pricing",
          id: "pricing",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="CryptoBlue"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroOverlayTestimonial
      title="Secure Your Future with CryptoBlue"
      description="Experience premium digital asset management with industry-leading security and ultra-low fees."
      testimonials={[
        {
          name: "Alex Rivet",
          handle: "@alexr",
          testimonial: "The most secure platform I have used.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-confident-woman-startup-manager-office-posing-with-confidence-looking_1258-195341.jpg",
        },
        {
          name: "Sarah Chen",
          handle: "@schen",
          testimonial: "Absolutely seamless trading experience.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/african-american-curly-businesswoman-standing-with-folded-hands-portrait-successful-confident-young-pretty-female-office-employer-suit-posing-work-business-company-management-concept_74855-6735.jpg",
        },
        {
          name: "Mark V.",
          handle: "@markv",
          testimonial: "Incredible customer support and transparency.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/self-assured-business-leader-conference-room_1262-3068.jpg",
        },
        {
          name: "Elena P.",
          handle: "@elenap",
          testimonial: "My portfolio has never been safer.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-grey-haired-businessman-standing_74855-10324.jpg",
        },
        {
          name: "James K.",
          handle: "@jamesk",
          testimonial: "Cutting edge features for professionals.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-smiling-beautiful-adult-businesswoman_1262-1760.jpg",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/modern-equipped-computer-lab_23-2149241199.jpg"
      imageAlt="crypto platform interface"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/portrait-succesful-senior-entrrepeneur-conference-room_482257-4100.jpg",
          alt: "Portrait of succesful senior entrrepeneur in conference room",
        },
        {
          src: "http://img.b2bpic.net/free-photo/close-up-portrait-pretty-mulatto-woman-with-trendy-make-up-standing-with-arms-crossed-office-indoor-photo-female-black-employee-posing-with-international-colleagues-gently-smile_197531-3788.jpg",
          alt: "Close-up portrait of pretty mulatto woman with trendy make-up standing with arms crossed in office. Indoor photo of female black employee posing with international colleagues behind and gently smile.",
        },
        {
          src: "http://img.b2bpic.net/free-photo/close-up-successful-entrepreneur_1098-3855.jpg",
          alt: "Close-up of successful entrepreneur",
        },
        {
          src: "http://img.b2bpic.net/free-photo/handsome-business-man-standing-office_1303-22654.jpg",
          alt: "Handsome business man standing in office",
        },
        {
          src: "http://img.b2bpic.net/free-photo/standing-vote-graduation-conference-room-bargain_1134-1130.jpg",
          alt: "standing vote graduation conference room bargain",
        },
      ]}
      avatarText="Trusted by 10,000+ investors"
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={false}
      heading={[
        {
          type: "text",
          content: "Redefining Digital Asset Custody",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/blockchain-technology-cartoon-illustration_23-2151572129.jpg",
          alt: "Secure Tech",
        },
      ]}
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="bento-grid"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          value: "1M+",
          title: "Users",
          description: "Active global traders",
          icon: Users,
        },
        {
          id: "m2",
          value: "$50B",
          title: "Volume",
          description: "Total assets traded",
          icon: BarChart,
        },
        {
          id: "m3",
          value: "99.9%",
          title: "Uptime",
          description: "Unrivaled platform stability",
          icon: Zap,
        },
      ]}
      title="Proven Performance"
      description="Trusted by investors across the globe."
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentySeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: "f1",
          title: "High Frequency Trading",
          descriptions: [
            "Sub-millisecond execution speeds for all orders.",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/business-graphs-figures-laptop-left-open-desk-empty-office_482257-84546.jpg",
          imageAlt: "Business graphs and figures on laptop left open on desk in empty office",
        },
        {
          id: "f2",
          title: "Cold Wallet Storage",
          descriptions: [
            "Institutional-grade security for your assets.",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/modern-equipped-computer-lab_23-2149241199.jpg",
          imageAlt: "Business graphs and figures on laptop left open on desk in empty office",
        },
        {
          id: "f3",
          title: "Real-time Analytics",
          descriptions: [
            "Detailed charts and predictive insights.",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/blockchain-technology-cartoon-illustration_23-2151572129.jpg",
          imageAlt: "Business graphs and figures on laptop left open on desk in empty office",
        },
      ]}
      title="Advanced Trading Tools"
      description="Powerful features designed for both casual and professional traders."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          brand: "Crypto",
          name: "Bitcoin-X",
          price: "$64,000",
          rating: 5,
          reviewCount: "1.2k",
          imageSrc: "http://img.b2bpic.net/free-photo/bitcoin-coin-christmas-tree-with-bokeh-lights-finance-concept_169016-60957.jpg",
        },
        {
          id: "p2",
          brand: "Crypto",
          name: "Ether-Pro",
          price: "$3,500",
          rating: 5,
          reviewCount: "890",
          imageSrc: "http://img.b2bpic.net/free-photo/3d-shapes-glowing-with-bright-holographic-colors_23-2151037180.jpg",
        },
        {
          id: "p3",
          brand: "Crypto",
          name: "Blue-Stable",
          price: "$1.00",
          rating: 4,
          reviewCount: "540",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=m2h85c",
        },
        {
          id: "p4",
          brand: "Crypto",
          name: "Luna-Light",
          price: "$12.00",
          rating: 5,
          reviewCount: "320",
          imageSrc: "http://img.b2bpic.net/free-photo/luxury-jewellery-display_23-2151921957.jpg",
        },
        {
          id: "p5",
          brand: "Crypto",
          name: "Titan-Core",
          price: "$450.00",
          rating: 4,
          reviewCount: "410",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=3qboz3",
        },
        {
          id: "p6",
          brand: "Crypto",
          name: "Nova-Sync",
          price: "$89.00",
          rating: 5,
          reviewCount: "105",
          imageSrc: "http://img.b2bpic.net/free-photo/bitcoin-coin-near-laptop-black-background-finance-crypto-money-concept_169016-59360.jpg",
        },
      ]}
      title="Featured Assets"
      description="Explore the most stable digital assets."
    />
  </div>

  <div id="socialProof" data-section="socialProof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Microsoft",
        "Google",
        "Goldman Sachs",
        "JP Morgan",
        "Nasdaq",
        "Coinbase",
        "Binance",
      ]}
      title="Trusted Globally"
      description="Serving major financial institutions."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          name: "Sarah",
          role: "CEO",
          company: "Tech",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiley-business-man_23-2148514859.jpg",
        },
        {
          id: "t2",
          name: "Michael",
          role: "CTO",
          company: "Lab",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/positive-confident-business-coach-posing-training-room_74855-3026.jpg",
        },
        {
          id: "t3",
          name: "Emily",
          role: "CMO",
          company: "Growth",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/proud-entrepreneur-with-employees-background_1098-3585.jpg",
        },
        {
          id: "t4",
          name: "David",
          role: "PM",
          company: "Start",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/afro-american-woman-smiling-close-up_23-2148336947.jpg",
        },
        {
          id: "t5",
          name: "Alice",
          role: "Dev",
          company: "Node",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-mature-businessman-using-digital-tablet-caf_23-2147955292.jpg",
        },
      ]}
      title="Client Success"
      description="What our users are saying."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",
          title: "Is my money safe?",
          content: "Yes, we use military-grade security.",
        },
        {
          id: "q2",
          title: "How to get started?",
          content: "Create an account and verify identity.",
        },
        {
          id: "q3",
          title: "Withdrawals time?",
          content: "Instant processing for most assets.",
        },
      ]}
      mediaAnimation="slide-up"
      title="Questions?"
      description="Everything you need to know about our platform."
      faqsAnimation="slide-up"
      imageSrc="http://img.b2bpic.net/free-photo/empty-startup-office-displays-statistics_482257-119484.jpg"
      imageAlt="Empty startup office displays statistics"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Get In Touch"
      description="Our team is ready to assist you."
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Your Name",
          required: true,
        },
        {
          name: "email",
          type: "email",
          placeholder: "Email",
          required: true,
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/close-up-laptop-running-data-insights-empty-dark-office-late-night_482257-130090.jpg"
      imageAlt="Close up of laptop running data insights in empty dark office late at night"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Product",
          items: [
            {
              label: "Features",
              href: "#features",
            },
            {
              label: "Assets",
              href: "#products",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "About",
              href: "#about",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
      ]}
      bottomLeftText="© 2024 CryptoBlue"
      bottomRightText="All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
