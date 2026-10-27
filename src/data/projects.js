// Project showcase data. The four entries below are ILLUSTRATIVE CONCEPTS,
// not completed client work. Replace them with real projects and set
// `isIllustrative: false` (and a real `projectStatus`) for each.
//
// Fields:
//   projectStatus : 'Concept' | 'In Progress' | 'Completed' | any label
//   image         : screenshot URL / imported asset ('' = generated preview)
//   liveUrl, githubUrl : '' hides the button
//   preview       : which generated preview to show when no image is set
export const projects = [
  {
    id: 'erp-business-management', name: 'ERP Business Management', category: 'ERPNext Customization',
    description: 'A business management solution focused on streamlining operational workflows, managing business records, and improving visibility through customized ERP functionality.',
    technologies: ['ERPNext', 'Python', 'MariaDB'],
    features: ['Custom forms & child tables', 'Role-based permissions', 'Approval workflows'],
    isIllustrative: true, projectStatus: 'Concept', liveUrl: '', githubUrl: '', image: '', preview: 'erp',
  },
  {
    id: 'bi-dashboard', name: 'Business Intelligence Dashboard', category: 'Reporting and Analytics',
    description: 'A dashboard concept for monitoring business KPIs, tracking operational metrics, and presenting information in a clear, actionable format.',
    technologies: ['React', 'JavaScript', 'ERPNext APIs'],
    features: ['KPI cards & charts', 'Filterable reports', 'API-driven data layer'],
    isIllustrative: true, projectStatus: 'Concept', liveUrl: '', githubUrl: '', image: '', preview: 'dashboard',
  },
  {
    id: 'api-integration', name: 'API Integration Platform', category: 'Backend Integration',
    description: 'An integration concept for connecting business applications and automating data exchange through APIs and event-driven workflows.',
    technologies: ['Python', 'ERPNext', 'REST APIs'],
    features: ['Webhook handlers', 'Scheduled sync jobs', 'Error logging & retries'],
    isIllustrative: true, projectStatus: 'Concept', liveUrl: '', githubUrl: '', image: '', preview: 'integration',
  },
  {
    id: 'workflow-automation', name: 'Workflow Automation', category: 'Process Automation',
    description: 'A workflow automation concept designed to simplify repetitive business tasks, coordinate approvals, and improve operational consistency.',
    technologies: ['ERPNext', 'Python'],
    features: ['Multi-step approvals', 'Automated notifications', 'Scheduled background tasks'],
    isIllustrative: true, projectStatus: 'Concept', liveUrl: '', githubUrl: '', image: '', preview: 'workflow',
  },
  {
    id: 'hr-leave-portal', name: 'HR & Leave Management', category: 'ERPNext Customization',
    description: 'A sample HR workflow concept covering employee records, leave requests, approval chains, and simple team calendars built on ERPNext HR modules.',
    technologies: ['ERPNext', 'Python', 'MariaDB'],
    features: ['Leave request & approval flow', 'Role-based employee views', 'Email notifications'],
    isIllustrative: true, projectStatus: 'Concept', liveUrl: '', githubUrl: '', image: '', preview: 'erp',
  },
  {
    id: 'inventory-tracker', name: 'Inventory & Stock Tracker', category: 'Reporting and Analytics',
    description: 'A concept for tracking stock movement across warehouses, highlighting low-stock items, and summarizing purchase and delivery activity in custom reports.',
    technologies: ['ERPNext', 'Python', 'MariaDB', 'React'],
    features: ['Warehouse-wise stock reports', 'Reorder-level alerts', 'Exportable summaries'],
    isIllustrative: true, projectStatus: 'Concept', liveUrl: '', githubUrl: '', image: '', preview: 'dashboard',
  },
  {
    id: 'crm-payment-sync', name: 'CRM & Payment Gateway Sync', category: 'Backend Integration',
    description: 'An integration concept that syncs leads and payment events between a CRM, a payment provider, and ERPNext using webhooks and scheduled reconciliation.',
    technologies: ['Python', 'ERPNext', 'REST APIs', 'Webhooks'],
    features: ['Webhook receivers', 'Idempotent event handling', 'Scheduled reconciliation'],
    isIllustrative: true, projectStatus: 'Concept', liveUrl: '', githubUrl: '', image: '', preview: 'integration',
  },
  {
    id: 'purchase-approvals', name: 'Purchase Approval Workflow', category: 'Process Automation',
    description: 'A workflow concept that routes purchase requests through multi-level approvals with automatic reminders and an audit trail of every decision.',
    technologies: ['ERPNext', 'Python'],
    features: ['Amount-based approval levels', 'Reminder scheduler', 'Decision history log'],
    isIllustrative: true, projectStatus: 'Concept', liveUrl: '', githubUrl: '', image: '', preview: 'workflow',
  },
]
