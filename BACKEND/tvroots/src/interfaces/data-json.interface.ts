export interface SiteDetails {
  history: string;
  culturalValue: string[];
  historicalValue: string[];
  services: string[];
  info: string[];
  mapUrl: string;
  directionsUrl: string;
}

export interface Site {
  id: string;
  name: string;
  image: string;
  description: string;
  location: string;
  established: string;
  recognition: string;
  details: SiteDetails;
}

export interface OverviewCategory {
  name: string;
  count: number;
}

export interface Distribution {
  location: string;
  count: number;
}

export interface Overview {
  introduction: {
    title: string;
    content: string[];
  };
  categories: OverviewCategory[];
  distribution: Distribution[];
  generalInfo: string[];
}

export interface DataJson {
  sites: Site[];
  overview: Overview;
}
