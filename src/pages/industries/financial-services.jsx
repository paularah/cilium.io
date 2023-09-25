/* eslint-disable react/prop-types */
import React from 'react';

import AdoptersLogo from 'components/pages/industries/adopters-logo/adopters-logo';
import BulletSection from 'components/pages/industries/bullet-section';
import FeaturedTalks from 'components/pages/industries/featured-talks';
import Hero from 'components/pages/industries/hero';
import IndustryUseCases from 'components/pages/industries/industry-usecase/industry-usecase';
import ResourcesCard from 'components/pages/industries/resources';
import Stats from 'components/pages/industries/stats';
import Testimonial from 'components/pages/industries/testimonial';
import Community from 'components/shared/community';
import SEO from 'components/shared/seo';
import BloombergLogo from 'icons/logo-bloomberg.inline.svg';
import PostFinanceLogo from 'icons/logo-postfinance.inline.svg';
import ExecelBee from 'images/pages/usecase/excel-bee.png';
import MainLayout from 'layouts/main';

import CapitalOnefficeImage from './images/capitaloneoffice.png';
import EncryptionIcon from './images/encryption.inline.svg';
import GrayedBloombergLogo from './images/logos/bloomberg.svg';
import GrayedCapitaloneLogo from './images/logos/capitalone.svg';
import GrayedForm3Logo from './images/logos/form3.svg';
import GrayedPostfinanceLogo from './images/logos/postfinance.svg';
import GrayedRobinhoodLogo from './images/logos/robinhood.svg';
import NetworkPolicyIcon from './images/network-policy.inline.svg';
import PostFinanceOfficeImage from './images/postfinanceoffice.png';
import RobinhoodOfficeImage from './images/robinhoodoffice.png';

const heroContent = {
  heading: 'Financial Services ',
  texts: [
    'Regulatory oversight is a hallmark of the financial industry. Cilium’s detailed traffic monitoring and logging mechanisms assist institutions in maintaining clear audit trails, ensuring regulatory compliance are met and forensic investigations are facilitated. ',
    "The world of fintech revolves around APIs – from mobile banking apps to complex trading platforms. Cilium's API-aware network security ensures that these critical gateways can be fortified, understanding and guarding against any malicious patterns in API calls.",
    'With Cilium, financial services can achieve improved observability, maintain security controls, and weave in security governance for Kubernetes environments in On-prem/Hybrid/Multi-Cloud environments including AKS/EKS/GCP/OpenShift/Rancher/SUSE, etc.',
  ],
  imageSrc: ExecelBee,
  imageAlt: 'isovalent excel bee',
};

const bloombergTestimonial = {
  description:
    'Bloomberg successfully enhanced the security and access control of its BQuant Enterprise workloads through the implementation of robust network security measures.',
  quotedText:
    'We started by looking at some other tools, and we first used [the cloud provider CNI]. But we found that Cilium, with its host-based policies and its ability to replace what we had out of the box, was really valuable.',
  withPerson: true,
  name: 'Anne Zepecki',
  CTAtext: 'read the case study',
  role: 'Team Lead for the BQuant Enterprise Identity Management team',
  url: 'https://www.cncf.io/case-studies/bloomberg-2/',
  logo: BloombergLogo,
};

const postfinanceStats = {
  logo: PostFinanceLogo,
  description:
    "Post Finance one of Switzerland's leading financial institutions uses Cilium for Cloud Native Networking",
  CTAtext: 'read the case study',
  url: 'https://www.youtube.com/watch?v=fjhKw49YcY4',
  stats: [
    {
      heading: '17',
      subHeading: 'Clusters',
    },
    {
      heading: '7-75',
      subHeading: 'Clusters',
    },
    {
      heading: 'x12k',
      subHeading: 'Faster Pod startup',
    },
    {
      heading: '2.4M',
      subHeading: 'Users',
    },
    {
      heading: '1000s',
      subHeading: 'Containers',
    },
  ],
};

const bulletSection1 = {
  heading: 'Converging  Compliance, Security, and Modern Networking',
  text: 'Cilium, integrated with Hubble Timescape and Tetragon, offers a unified solution that cohesively addresses each critical element of compliance, observability, security, and modern networking. With Hubble Timescape, financial institutions gain a "time machine" for observability data, enabling them to perform deep dives into historical network flows for real-time and retrospective analysis. This capability is invaluable for compliance monitoring and forensic investigations, effectively closing the loop between what is required by regulators and what is technically feasible. Cilium also excels in security, providing multi-layered network visibility from L3/L4 to L7 and cloud-native security analysis, ensuring that data in transit meets stringent compliance standards such as FIPS and PCIDSS.',
};

const bulletSection2 = {
  heading: 'Weave Compliance and Security Throughout the DevOps process.',
  text: 'Free your Security and Operations Teams from manual checks—Cilium ensures your traffic is encrypted to the highest standards, aligning SNIs with destination DNS names and vetting certificates for trusted origins. Go beyond traditional measures by embedding compliance and security directly into your DevOps flow. From Open Banking and GDPR to PCI-DSS and ATM security, Cilium keeps you ahead of industry regulations. Embrace Kubernetes confidently, infusing your application and network lifecycle with cutting-edge policies and eliminating potential technical debts. ',
};

const financialUsecases = [
  {
    icon: EncryptionIcon,
    title: 'Transparent Encryption ',
    url: '/use-cases/transparent-encryption',
    description:
      'Elevate compliance and lower risk with Cilium transparent encryption. With just one switch, no application changes, service meshes  or additional proxies',
  },
  {
    icon: NetworkPolicyIcon,
    title: 'Network Policy ',
    url: '/use-cases/network-policy',
    description:
      'Maintain identity based policies effectively at scale with Cilium’s advanced network polices ',
  },
  {
    icon: NetworkPolicyIcon,
    title: 'Gateway API',
    url: '/use-cases/gateway-api',
    description:
      'Gateway API is the future of Kubernetes Ingress networking. The Cilium Gateway API supports use cases such as HTTP routing, traffic splitting/weighting, header modification, and TLS termination. ',
  },
];

const financialTalks = [
  {
    title: "eBPF - The Capital Market's Perspective - Alex Mackenzie",
    description: 'Alex Mackenzie, Tapestry Ventures',
    videoSrc: 'https://www.youtube.com/embed/2jNCQwgy0fI',
  },
  {
    title: 'Cilium in Practice: Building Data Sandboxes at Bloomberg',
    videoSrc: 'https://www.youtube.com/embed/8fiYVyISyz4',
    description:
      'Bloomberg leverages Cilium to construct data sandboxes that restrict users from distributing data outside the sandbox',
  },
  {
    title: 'Multi-cluster networking with Cilium at Form3',
    description: 'This address the reasons Form3 choosed to build its platform with Cilium',
    videoSrc: 'https://www.youtube.com/embed/vKgRf4OzTIE?si=w_-F3oQysthruVtA',
  },
];

const financialResources = [
  {
    imageSrc: PostFinanceOfficeImage,
    imageAlt: 'post finance office',
    title: ' Post Finance picks Cilium for Cloud Native Networking',
    url: 'https://www.youtube.com/watch?v=fjhKw49YcY4',
    CTAtext: 'Watch The Case Study',
    description:
      'Cilium helped the post finance team build a scalable Kubernetes platform which meets the demanding requirements to run mission-critical banking software in production.',
  },
  {
    imageSrc: CapitalOnefficeImage,
    imageAlt: 'capital office building',
    title: ' How Capital One used eBPF and Cilium to build a secure, maintainable PaaS',
    url: 'https://www.youtube.com/watch?v=hwOpCKBaJ-w',
    CTAtext: 'Watch The Talk',
    description:
      'Capital One built an internal PaaS called "Dragon" for its developers, based on Kubernetes. Dragon’s goal was to enable developers to ship code to production with little friction',
  },

  {
    imageSrc: RobinhoodOfficeImage,
    imageAlt: 'robinhoo office building',
    title: 'More Churn No Problem: Lessons Learned Running Cilium in Production',
    url: 'https://www.youtube.com/watch?v=qdr9XQ6h5zs',
    CTAtext: 'Watch The Talk',
    description:
      "Robinhood's war stories from running Cilium in a high-churn near-production environment, how they overcame challenges by better understanding and tuning Cilium.",
  },
];

const companyLogos = [
  GrayedCapitaloneLogo,
  GrayedPostfinanceLogo,
  GrayedRobinhoodLogo,
  GrayedBloombergLogo,
  GrayedForm3Logo,
];

const FinancialServices = () => (
  <MainLayout theme="gray">
    <Hero {...heroContent}>
      <Testimonial {...bloombergTestimonial} />
    </Hero>
    <BulletSection {...bulletSection1} className="my-8" bulletColor="additional-purple" />
    <BulletSection {...bulletSection2} />
    <Stats className="mb-16" {...postfinanceStats} />
    <FeaturedTalks heading="Featured talks" talks={financialTalks} className="mt-8" />
    <AdoptersLogo logos={companyLogos} className="my-16" />
    <ResourcesCard
      heading="Join Global Finance Leaders in the  Cloud Native Networking Revolution "
      resources={financialResources}
      className="mt-8"
    />
    <IndustryUseCases
      heading="Cilium’s Solutions for Financial Services"
      usecases={financialUsecases}
    />
    <Community className="mt-10 md:mt-20 lg:mt-32" theme="gray" isTitleCentered />
  </MainLayout>
);

export default FinancialServices;

export const Head = ({ location: { pathname } }) => <SEO slug={pathname} />;
