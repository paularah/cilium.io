import React from 'react';

import AdoptersLogo from 'components/pages/industries/adopters-logo/adopters-logo';
import Hero from 'components/pages/industries/hero';
import IndustryUseCases from 'components/pages/industries/industry-usecase/industry-usecase';
import ResourcesCard from 'components/pages/industries/resources';
import Stats from 'components/pages/industries/stats';
import AdopterTestimonial from 'components/pages/industries/testimonial';
import Community from 'components/shared/community';
import DbSchenkerLogo from 'icons/logo-dbschenker.inline.svg';
import TrendyolLogo from 'icons/logo-trendyol.inline.svg';
import TripLogo from 'icons/logo-trip.inline.svg';
import TravelBee from 'images/pages/industries/travel-bee.png';
import MainLayout from 'layouts/main';

import BandWidthIcon from './images/bandwidth-latency-optimization.inline.svg';
import IkeaOfficeImage from './images/ikeaoffice.png';
import GrayedBackMarketLogo from './images/logos/backmarket.svg';
import GrayedDbSchenkerLogo from './images/logos/dbschenker.svg';
import GrayedElasticPathLogo from './images/logos/elasticpath.svg';
import GrayedOverstockLogo from './images/logos/overstock.svg';
import GrayedTailorBrandsLogo from './images/logos/tailorbrands.svg';
import GrayedTrendyolLogo from './images/logos/trendyol.svg';
import GrayedTripLogo from './images/logos/trip.svg';
import GrayedUSwitchLogo from './images/logos/uswitch.svg';
import ScalableKubernetesIcon from './images/scalable-kubernetes.inline.svg';
import ServiceMeshIcon from './images/service-mesh.inline.svg';
import TrendyolOfficeImage from './images/trendyoloffice.png';
import TripOfficeImage from './images/tripoffice.png';

const heroContent = {
  heading: 'E-commerce',
  texts: [
    'E-commerce platforms have a unique set of networking needs— in most cases, a highly dynamic microservices architecture, exponential increases in user traffic, diverse geographic distribution, and stringent data security requirements.',
    'Cilium addresses unique needs by offering exceptional networking, observability, and security features. By leveraging eBPF technology and seamless Kubernetes integration, Cilium enables easy deployment and management of microservices in a secure and scalable way. This powerful combination also simplifies the management of large Kubernetes deployments, aids in compliance with regulatory requirements, and provides deep visibility into network traffic.',
    'Join the next wave of high-performance e-commerce platforms leveraging the advanced capabilities of eBPF with Cilium to build scalable and secure e-commerce experiences. Gain the edge in speed, security, and observability.',
  ],
  imageSrc: TravelBee,
  imageAlt: 'isovalent public speaking bee',
};

const tripStats = {
  logo: TripLogo,
  url: 'https://www.cncf.io/case-studies/trip-com-group/',
  description:
    'Trip.com operates in 200 countries and 40 languages, using both on-premise and cloud-based Kubernetes.',
  CTAtext: 'READ THE CASE STUDY',
  stats: [
    {
      heading: 'HYBRID CLOUD',
      subHeading: 'With over 20,000 nodes',
    },
    {
      heading: '200,000',
      subHeading: 'Hubble events per second',
    },
    {
      heading: '3,000+',
      subHeading: 'Cilium network policy entries',
    },
  ],
};

const trendyolTestimonial = {
  description:
    'Anticipating a further increase in the number of Kubernetes clusters and size of the clusters prompted Trendyol to seek Cilium as an alternative CNI solution.',
  CTAtext: 'READ THE CASE STUDY',
  withPerson: true,
  quotedText:
    'We evaluated other CNIs, but Cilium stood out primarily due to its performance. When we started performance testing Cilium, we found that its performance remained steady, even as cluster traffic surged. As our scale increased, Cilium didn’t start degrading while other CNIs did.Cilium has leveled up Trendyol’s Kubernetes clusters. With its advanced capabilities, Cilium enabled us to solve our networking issues and outperformed all other CNIs. We have successfully increased our scalability, performance, security and visibility with Cilium',
  name: 'Emin Aktas',
  role: ' Platform Engineer, Trendyol',
  url: 'https://www.cncf.io/case-studies/trendyol/',
  logo: TrendyolLogo,
};

const dbSchenkerTestimonial = {
  description:
    'DB schenker Migrated to Cilium to prepare it platform for the next steps in their cloud native journey.',
  CTAtext: 'READ THE BLOG POST',
  withPerson: true,
  quotedText:
    'We saw wide adoption in the market and a very feature rich tooling and ecosystem around Cilium, like Tetragon for security observability and Hubble for network visibility. All of these factors together made the decision clear that we needed to migrate to Cilium to prepare our platform for the next steps in our cloud native journey.  ',
  name: 'Amir Kheirkhahan',
  role: 'DevOps Specialist, DB Schenker',
  url: 'https://cilium.io/blog/2023/09/07/db-schenker-migration-to-cilium/',
  logo: DbSchenkerLogo,
};

const commerceResources = [
  {
    imageSrc: TrendyolOfficeImage,
    imageAlt: 'holding a trenydol shipping box',
    title: 'Unleashing the Power of Cilium CNI to Propel Trendyol’s Performance Up to 40%!',
    CTAtext: 'Read the case study',
    url: 'https://www.cncf.io/case-studies/trendyol/',
    description:
      'Recognizing the need to enhance their clusters and unlock new capabilities, Trendyol switched from flannel and implemented Cilium as the default CNI for the Kubernetes cluster resulting in an up to 40% increase in performance     ',
  },

  {
    imageSrc: IkeaOfficeImage,
    imageAlt: 'newyork times  office building',
    title: 'Designing and Securing a Multi-Tenant Runtime Environment at the New York Times',
    CTAtext: 'Watch the Talk',
    url: 'https://www.youtube.com/watch?v=9FDpMNvPrCw',
    description:
      'Yahoo improved load balancing performance and scalability by switching to Cilium L4 LB with XDP, achieving hardware-level efficiency and dynamic backend management.',
  },

  {
    imageSrc: TripOfficeImage,
    imageAlt: 'trip.com office building',
    title: 'How Trip.com Group switched to Cilium For Scalable and Cloud Native Networking',
    CTAtext: 'Read The Blog Post',
    url: 'https://www.cncf.io/case-studies/trip-com-group/',
    description:
      'Trip.com looked at several options to pick its next-generation networking platform. Cilium provided them with an extremely scalable and stable networking solution.',
  },
];

const companyLogos = [
  GrayedTripLogo,
  GrayedTrendyolLogo,
  GrayedBackMarketLogo,
  GrayedUSwitchLogo,
  GrayedElasticPathLogo,
  GrayedDbSchenkerLogo,
  GrayedOverstockLogo,
  GrayedTailorBrandsLogo,
];

const commerceUsecases = [
  {
    icon: BandWidthIcon,
    title: 'Bandwidth and Latency Management',
    description:
      'Optimize your bandwidth and latency with rate limiting and fair queuing. Rely on our TCP congestion control algorithm automization.',
    url: '/use-cases/bandwidth-optimization',
  },

  {
    icon: ServiceMeshIcon,
    title: 'Service Mesh',
    description:
      'Cilium redefines traditional service mesh frameworks by integrating the mesh layer directly into the kernel using eBPF',
    url: '/use-cases/service-mesh',
  },

  {
    icon: ScalableKubernetesIcon,
    title: 'High Performance Networking (CNI)',
    description:
      'Enabling network operators to abstract and manage the cloud native network, including on-prem integration with BGP and overlay networking compatible with Cloud SDNs.',
    url: '/use-cases/cni',
  },
];

const MediaEntertainmentPage = () => (
  <MainLayout>
    <Hero {...heroContent} imageStyle="lg:h-[350px] lg:w-[350px] mb-24">
      <Stats {...tripStats} className="py-8" />
    </Hero>
    <AdopterTestimonial {...trendyolTestimonial} />
    <AdopterTestimonial {...dbSchenkerTestimonial} />
    <AdoptersLogo className="my-16 grid grid-cols-4" logos={companyLogos} />
    <ResourcesCard
      heading="Leverage Cilium To Deliver Reliable, Fast, and Secure E-commerce Experience to  Users"
      resources={commerceResources}
    />
    <IndustryUseCases heading="Cilium’s Solutions for E-commerce " usecases={commerceUsecases} />
    <Community className="mt-10 md:mt-20 lg:mt-32" theme="gray" isTitleCentered />
  </MainLayout>
);

export default MediaEntertainmentPage;
