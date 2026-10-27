// Single place to rebrand the site and configure contact details.
// Leave a value empty ('') to hide the related link everywhere.

export const siteConfig = {
  name: 'DOCTYRA', // temporary brand name – change here only
  monogram: 'D',
  tagline: 'Building intelligent business solutions with ERPNext and modern web technologies.',
  description:
    'We are a collaborative development team focused on building, customizing, and integrating business applications using ERPNext. We work on ERP workflows, business process automation, custom forms, reports, dashboards, API integrations, and responsive web applications to help businesses streamline their operations.',
  footerText: 'Building practical digital solutions with ERPNext and modern web technologies.',
  seo: {
    title: 'DOCTYRA – ERPNext Development Team',
    description:
      'A collaborative team building ERPNext customizations, custom applications, business automation, API integrations and React front ends.',
  },

  // Optional contact details – fill in when confirmed.
  contact: {
    email: 'frappedevs@gmail.com',
    github: '', // e.g. https://github.com/your-org
    linkedin: '', // e.g. https://www.linkedin.com/company/your-company
  },

  // Optional ERPNext backend. Only non-secret values belong here.
  backend: {
    baseUrl: import.meta.env.VITE_ERPNEXT_BASE_URL || '',
    contactMethod: import.meta.env.VITE_ERPNEXT_CONTACT_METHOD || '',
  },

  nav: [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'technologies', label: 'Technologies' },
    { id: 'projects', label: 'Projects' },
    { id: 'team', label: 'Team' },
    { id: 'contact', label: 'Contact' },
  ],
}
