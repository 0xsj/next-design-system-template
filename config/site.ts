interface SiteConfig {
  name: string;
  title: string;
  emoji: string;
  description: string;
  localeDefault: string;
  links: {
    docs: string;
    discord: string;
    twitter: string;
    github: string;
  };
}

export const SITE_CANONICAL = "";

export const siteConfig: SiteConfig = {
  name: "",
  title: "",
  emoji: "",
  description: "",
  localeDefault: "",
  links: {
    docs: "",
    discord: "",
    twitter: "",
    github: "",
  },
};

export const DEPLOY_URL = "";
