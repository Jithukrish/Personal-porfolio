export const erpnextCapabilities = [
  { icon: 'Table2', title: 'Custom forms, data models and child tables' },
  { icon: 'FileCode', title: 'Client Scripts and Server Scripts' },
  { icon: 'Braces', title: 'Python controllers and hooks' },
  { icon: 'ChartColumn', title: 'Custom reports and dashboards' },
  { icon: 'ShieldCheck', title: 'Role-based permissions' },
  { icon: 'Plug', title: 'API endpoints and integrations' },
  { icon: 'CalendarClock', title: 'Scheduled jobs and background tasks' },
  { icon: 'Workflow', title: 'ERP workflows and automation' },
  { icon: 'Database', title: 'Business data management' },
]

export const workflowSteps = [
  'Business Requirement', 'Solution Design', 'ERPNext Development', 'Testing', 'Deployment', 'Ongoing Improvement',
]

export const processSteps = [
  { title: 'Understand', text: 'Understand the business requirement, existing workflows, and desired outcomes.' },
  { title: 'Plan', text: 'Define the scope, architecture, implementation approach, and dependencies.' },
  { title: 'Design', text: 'Prepare the application structure, data model, UI, and user experience.' },
  { title: 'Develop', text: 'Implement the required functionality using appropriate technologies.' },
  { title: 'Test', text: 'Validate workflows, permissions, integrations, edge cases, and usability.' },
  { title: 'Deliver and Improve', text: 'Prepare deployment, documentation, and future improvement opportunities.' },
]

export const principles = [
  { icon: 'Target', title: 'Focus on business requirements' },
  { icon: 'Layers', title: 'Maintainable and modular code' },
  { icon: 'Puzzle', title: 'Reusable application components' },
  { icon: 'Smartphone', title: 'Responsive user interfaces' },
  { icon: 'ShieldCheck', title: 'Attention to data consistency and permissions' },
  { icon: 'MessagesSquare', title: 'Clear communication and documentation' },
  { icon: 'RefreshCw', title: 'Testing and continuous improvement' },
]

export const projectTypes = [
  'ERPNext Customization', 'ERPNext Application Development', 'React Frontend Development',
  'API Integration', 'Business Automation', 'Reports and Dashboards', 'Other',
]

export const marqueeItems = [
  'ERPNext', 'Custom Forms', 'React', 'Python', 'MariaDB',
  'REST APIs', 'Webhooks', 'Workflows', 'Reports & Dashboards', 'Client Scripts', 'Scheduled Jobs',
]

// ERPNext module map (orbit). `motion` picks the idle icon animation in motion.css.
export const erpModules = [
  { id: 'accounting', icon: 'Coins', motion: 'flip', title: 'Accounting', text: 'Ledgers, invoices, payments, and financial reports.' },
  { id: 'stock', icon: 'Package', motion: 'bob', title: 'Stock', text: 'Items, warehouses, stock movement, and valuation.' },
  { id: 'selling', icon: 'ShoppingCart', motion: 'roll', title: 'Selling', text: 'Quotations, sales orders, delivery, and invoicing.' },
  { id: 'buying', icon: 'ShoppingBag', motion: 'sway', title: 'Buying', text: 'Suppliers, purchase orders, receipts, and bills.' },
  { id: 'crm', icon: 'Filter', motion: 'wiggle', title: 'CRM', text: 'Leads, opportunities, and the sales pipeline.' },
  { id: 'hr', icon: 'Users', motion: 'pulse', title: 'HR', text: 'Employees, attendance, leave, and payroll.' },
  { id: 'manufacturing', icon: 'Cog', motion: 'spin', title: 'Manufacturing', text: 'Bills of materials, work orders, and production.' },
  { id: 'projects', icon: 'ListChecks', motion: 'tick', title: 'Projects', text: 'Projects, tasks, timesheets, and progress tracking.' },
]

// Order-to-cash document chain (standard ERPNext documents).
export const docFlow = ['Lead', 'Quotation', 'Sales Order', 'Delivery Note', 'Sales Invoice', 'Payment Entry']
