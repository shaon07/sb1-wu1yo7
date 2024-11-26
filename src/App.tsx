import {
  Globe2,
  Shield,
  Code2,
  Server,
  Eye,
  Users,
  BadgeDollarSign,
  Mouse,
  ChevronDown,
} from 'lucide-react';

import Navbar from './components/Navbar';
import ServiceCard from './components/ServiceCard';
import BlogSection from './components/BlogSection';
import ContactForm from './components/ContactForm';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import FeatureCard from './components/Molecules/FeatureCard';

function App() {
  const services = [
    {
      icon: <Code2 className="h-8 w-8" />,
      title: 'Development',
      features: [
        'UI/UX',
        'DevOps',
        'Web design',
        'Frontend dev',
        'Backend dev',
      ],
    },
    {
      icon: <Globe2 className="h-8 w-8" />,
      title: 'MSP',
      features: [
        'Infrastructure management',
        'Managed Monitoring',
        'Business Continuity',
        'Managed Cyber',
      ],
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: 'Cloud',
      features: [
        'AWS',
        'AZURE',
        'Multi-Cloud',
        'SRE Strategy',
        'Server less',
        'Hybrid Strategy',
        'Containerisation',
      ],
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Cyber',
      features: [
        'Cyber Audit',
        'Cyber governance',
        'Security as a service',
        'Penetration Testing',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-velbetRed">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-4 md:px-4 relative flex items-center">
        <div className="relative flex w-[8rem] justify-end">
          <div className="hidden lg:block rounded-full border border-red-400 p-4 bg-[#F8717129] relative w-[60px] h-[60px] animate-ping">
            <div className="absolute inset-0 bg-transparent z-0 rounded-full scale-[1.5] border border-dashed border-[#ef444573]"></div>
            <div className="absolute inset-0 bg-transparent z-0 rounded-full scale-[2] border border-dashed border-[#ef444573]"></div>
            <div className="absolute inset-0 bg-transparent z-0 rounded-full scale-[2.5] border border-dashed border-[#ef444573] animate-spin"></div>
            <Users className="h-6 w-6 text-white" />
          </div>
        </div>

        <div className="mx-auto text-center fade-in">
          <h1 className="min-w-[25rem] text-5xl md:text-7xl font-bold mb-6">
            From Concept to Code
            <span className="block text-red-500 mt-2">We Make IT Happen</span>
          </h1>
          <p className="text-gray-400 text-lg mb-8">
            We Help Brands And B2B Enterprises Build Amazing <br />
            Websites That Convert Their Visitors To Paying Customers.
          </p>

          <button className="btn-primary rounded-full btn-shadow">
            Let's have a call
          </button>

          <div className="w-full flex flex-col items-center justify-center mt-12 animate-bounce">
            <Mouse />
            <hr className="w-[1px] h-[8rem] bg-white mt-1" />
            <ChevronDown size={22} className="-mt-3" />
          </div>
        </div>

        <div className="relative flex w-[8rem] justify-start">
          <div className="hidden lg:block rounded-full border border-red-400 p-4 bg-[#F8717129] relative w-[60px] h-[60px] ">
            <div className="absolute inset-0 bg-transparent z-0 rounded-full scale-[1.5] border border-dashed border-[#ef444573]"></div>
            <div className="absolute inset-0 bg-transparent z-0 rounded-full scale-[2] border border-dashed border-[#ef444573]"></div>
            <div className="absolute inset-0 bg-transparent z-0 rounded-full scale-[2.5] border border-dashed border-[#ef444573] animate-spin"></div>
            <Eye className="h-6 w-6 text-white" />
          </div>

          <div className="hidden lg:block rounded-full border border-red-400 bg-[#F8717129] relative w-[20px] h-[20px]">
            <Eye className="h-[18px] w-[18px] text-white" />
          </div>
          <div className="hidden lg:block rounded-full border border-red-400 bg-[#F8717129] relative w-[20px] h-[20px] -left-4 top-6">
            <BadgeDollarSign className="h-[18px] w-[18px] text-white" />
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="pb-16 bg-velbetRed backdrop-blur-sm">
        <div className="container max-w-6xl mx-auto px-4">
          <p className="text-center text-gray-500 mb-8">
            TRUSTED BY OUR PARTNERS
          </p>
          <div className="flex justify-between items-center flex-wrap gap-8">
            <img
              src="https://cdn.worldvectorlogo.com/logos/digitalocean-2.svg"
              alt="DigitalOcean"
              className="partner-logo"
            />
            <img
              src="https://cdn.worldvectorlogo.com/logos/azure-1.svg"
              alt="Azure"
              className="partner-logo"
            />
            <img
              src="https://cdn.worldvectorlogo.com/logos/google-cloud-1.svg"
              alt="Google Cloud"
              className="partner-logo"
            />
            <img
              src="https://cdn.worldvectorlogo.com/logos/azure-1.svg"
              alt="Azure"
              className="partner-logo"
            />
            <img
              src="https://cdn.worldvectorlogo.com/logos/google-cloud-1.svg"
              alt="Google Cloud"
              className="partner-logo"
            />
            <img
              src="https://cdn.worldvectorlogo.com/logos/cloudflare.svg"
              alt="Cloudflare"
              className="partner-logo"
            />
            <img
              src="https://cdn.worldvectorlogo.com/logos/google-cloud-1.svg"
              alt="Google Cloud"
              className="partner-logo"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-2">What we offer</h2>
          <div className="mb-12">
            <p className="text-gray-400 bg-darker w-max mx-auto border border-red-500 rounded-[50px] p-[10px_20px]">
              Our Experts Will Help You In Following Fields
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <FeatureCard
                title={service.title}
                features={service.features}
                index={index + 1}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      <BlogSection />
      <ContactForm />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
