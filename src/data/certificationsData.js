/**
 * Professional Certifications for IT Professionals
 * Curated collection of free and paid certifications from industry leaders
 * Free certifications marked with free: true
 * Paid certifications marked with free: false and include price
 */

export const certificationsData = {
  categories: {
    networking: {
      id: 'networking',
      name: 'Networking & Security',
      icon: '🌐',
      color: '#1976D2',
      certifications: [
        {
          id: 'cisco-intro-networking',
          provider: 'Cisco',
          name: 'Introduction to Networking',
          description: 'Network fundamentals and Cisco networking basics',
          level: 'Beginner',
          duration: '10-15 hours',
          url: 'https://www.netacad.com/courses/networking/networking-essentials',
          topics: ['TCP/IP', 'Routing', 'Switching', 'Network Security'],
          free: true,
          language: 'EN/DE'
        },
        {
          id: 'cisco-ccna',
          provider: 'Cisco',
          name: 'CCNA - Cisco Certified Network Associate',
          description: 'Industry-recognized networking certification',
          level: 'Intermediate',
          duration: '80-120 hours',
          url: 'https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/associate/ccna.html',
          topics: ['Network Fundamentals', 'IP Services', 'Security', 'Automation'],
          free: false,
          price: '$300',
          language: 'EN'
        },
        {
          id: 'cisco-cybersecurity',
          provider: 'Cisco',
          name: 'Introduction to Cybersecurity',
          description: 'Cybersecurity fundamentals and career paths',
          level: 'Beginner',
          duration: '15 hours',
          url: 'https://www.netacad.com/courses/cybersecurity/introduction-cybersecurity',
          topics: ['Security Basics', 'Threats', 'Protection', 'Career Paths'],
          free: true,
          language: 'EN/DE'
        },
        {
          id: 'comptia-security-plus',
          provider: 'CompTIA',
          name: 'Security+ Certification',
          description: 'Baseline cybersecurity skills certification',
          level: 'Intermediate',
          duration: '40-60 hours',
          url: 'https://www.comptia.org/certifications/security',
          topics: ['Threats', 'Attacks', 'Risk Management', 'Cryptography'],
          free: false,
          price: '$392',
          language: 'EN'
        },
        {
          id: 'fortinet-nse1',
          provider: 'Fortinet',
          name: 'NSE 1 Network Security Associate',
          description: 'Network security fundamentals',
          level: 'Beginner',
          duration: '8-10 hours',
          url: 'https://training.fortinet.com/local/staticpage/view.php?page=library_nse-1',
          topics: ['Network Security', 'Firewall', 'Threat Landscape'],
          free: true,
          language: 'EN'
        },
        {
          id: 'fortinet-nse2',
          provider: 'Fortinet',
          name: 'NSE 2 Network Security Associate',
          description: 'Advanced network security concepts',
          level: 'Intermediate',
          duration: '10-12 hours',
          url: 'https://training.fortinet.com/local/staticpage/view.php?page=library_nse-2',
          topics: ['FortiGate', 'UTM', 'Security Policies'],
          free: true,
          language: 'EN'
        },
        {
          id: 'comptia-network-plus',
          provider: 'CompTIA',
          name: 'Network+ Certification',
          description: 'Networking concepts and infrastructure',
          level: 'Intermediate',
          duration: '40-50 hours',
          url: 'https://www.comptia.org/certifications/network',
          topics: ['Network Architecture', 'Operations', 'Security', 'Troubleshooting'],
          free: false,
          price: '$358',
          language: 'EN'
        },
        {
          id: 'ceh',
          provider: 'EC-Council',
          name: 'Certified Ethical Hacker (CEH)',
          description: 'Advanced ethical hacking and penetration testing',
          level: 'Advanced',
          duration: '100-120 hours',
          url: 'https://www.eccouncil.org/programs/certified-ethical-hacker-ceh/',
          topics: ['Ethical Hacking', 'Penetration Testing', 'Security Tools'],
          free: false,
          price: '$1,199',
          language: 'EN'
        },
        {
          id: 'cissp',
          provider: '(ISC)²',
          name: 'CISSP - Certified Information Systems Security Professional',
          description: 'Elite security certification for experienced professionals',
          level: 'Advanced',
          duration: '120-150 hours',
          url: 'https://www.isc2.org/Certifications/CISSP',
          topics: ['Security Management', 'Risk', 'Architecture', 'Operations'],
          free: false,
          price: '$749',
          language: 'EN'
        }
      ]
    },
    cloud: {
      id: 'cloud',
      name: 'Cloud Computing',
      icon: '☁️',
      color: '#FF9800',
      certifications: [
        {
          id: 'aws-cloud-practitioner',
          provider: 'AWS',
          name: 'AWS Cloud Practitioner Essentials',
          description: 'Amazon Web Services fundamentals and core concepts',
          level: 'Beginner',
          duration: '6 hours',
          url: 'https://aws.amazon.com/training/digital/aws-cloud-practitioner-essentials/',
          topics: ['AWS Services', 'Cloud Concepts', 'Security', 'Pricing'],
          free: true,
          language: 'EN/DE'
        },
        {
          id: 'aws-solutions-architect',
          provider: 'AWS',
          name: 'AWS Certified Solutions Architect - Associate',
          description: 'Design and deploy scalable AWS applications',
          level: 'Intermediate',
          duration: '60-80 hours',
          url: 'https://aws.amazon.com/certification/certified-solutions-architect-associate/',
          topics: ['Architecture', 'High Availability', 'Cost Optimization', 'Security'],
          free: false,
          price: '$150',
          language: 'EN'
        },
        {
          id: 'azure-fundamentals',
          provider: 'Microsoft',
          name: 'Azure Fundamentals (AZ-900)',
          description: 'Microsoft Azure cloud concepts and services',
          level: 'Beginner',
          duration: '8-10 hours',
          url: 'https://learn.microsoft.com/en-us/training/courses/az-900t00',
          topics: ['Azure Services', 'Cloud Concepts', 'Security', 'Governance'],
          free: true,
          language: 'EN/DE'
        },
        {
          id: 'azure-administrator',
          provider: 'Microsoft',
          name: 'Azure Administrator Associate (AZ-104)',
          description: 'Manage Azure subscriptions and resources',
          level: 'Intermediate',
          duration: '50-70 hours',
          url: 'https://learn.microsoft.com/en-us/certifications/azure-administrator/',
          topics: ['Azure Administration', 'Virtual Machines', 'Storage', 'Networking'],
          free: false,
          price: '$165',
          language: 'EN/DE'
        },
        {
          id: 'google-cloud-fundamentals',
          provider: 'Google',
          name: 'Google Cloud Fundamentals',
          description: 'Google Cloud Platform core infrastructure',
          level: 'Beginner',
          duration: '8 hours',
          url: 'https://www.cloudskillsboost.google/course_templates/60',
          topics: ['GCP Services', 'Compute Engine', 'Storage', 'Networking'],
          free: true,
          language: 'EN'
        },
        {
          id: 'gcp-associate-cloud-engineer',
          provider: 'Google',
          name: 'Associate Cloud Engineer',
          description: 'Deploy and manage Google Cloud applications',
          level: 'Intermediate',
          duration: '50-60 hours',
          url: 'https://cloud.google.com/certification/cloud-engineer',
          topics: ['GCP Deployment', 'Monitoring', 'Cloud Solutions', 'Security'],
          free: false,
          price: '$125',
          language: 'EN'
        },
        {
          id: 'ibm-cloud-essentials',
          provider: 'IBM',
          name: 'IBM Cloud Essentials',
          description: 'IBM Cloud platform fundamentals',
          level: 'Beginner',
          duration: '5-6 hours',
          url: 'https://www.ibm.com/training/cloud',
          topics: ['IBM Cloud', 'Cloud Services', 'Deployment'],
          free: true,
          language: 'EN'
        },
        {
          id: 'oracle-cloud-infrastructure',
          provider: 'Oracle',
          name: 'Oracle Cloud Infrastructure Foundations',
          description: 'Oracle Cloud infrastructure and services',
          level: 'Beginner',
          duration: '6-8 hours',
          url: 'https://education.oracle.com/oracle-cloud-infrastructure-2024-foundations-associate/pexam_1Z0-1085-24',
          topics: ['OCI', 'Compute', 'Networking', 'Storage'],
          free: true,
          language: 'EN'
        },
        {
          id: 'terraform-associate',
          provider: 'HashiCorp',
          name: 'Terraform Associate Certification',
          description: 'Infrastructure as Code with Terraform',
          level: 'Intermediate',
          duration: '30-40 hours',
          url: 'https://www.hashicorp.com/certification/terraform-associate',
          topics: ['IaC', 'Terraform', 'Cloud Provisioning', 'State Management'],
          free: false,
          price: '$70.50',
          language: 'EN'
        }
      ]
    },
    microsoft: {
      id: 'microsoft',
      name: 'Microsoft Technologies',
      icon: '🪟',
      color: '#00A4EF',
      certifications: [
        {
          id: 'ms-power-platform',
          provider: 'Microsoft',
          name: 'Power Platform Fundamentals (PL-900)',
          description: 'Low-code platform for business applications',
          level: 'Beginner',
          duration: '6-8 hours',
          url: 'https://learn.microsoft.com/en-us/training/courses/pl-900t00',
          topics: ['Power Apps', 'Power Automate', 'Power BI', 'Power Virtual Agents'],
          free: true,
          language: 'EN/DE'
        },
        {
          id: 'ms-365-fundamentals',
          provider: 'Microsoft',
          name: 'Microsoft 365 Fundamentals (MS-900)',
          description: 'Microsoft 365 services and concepts',
          level: 'Beginner',
          duration: '8-10 hours',
          url: 'https://learn.microsoft.com/en-us/training/courses/ms-900t01',
          topics: ['Microsoft 365', 'Office 365', 'Security', 'Compliance'],
          free: true,
          language: 'EN/DE'
        },
        {
          id: 'ms-security-fundamentals',
          provider: 'Microsoft',
          name: 'Security, Compliance, Identity (SC-900)',
          description: 'Security and compliance fundamentals',
          level: 'Beginner',
          duration: '6-8 hours',
          url: 'https://learn.microsoft.com/en-us/training/courses/sc-900t00',
          topics: ['Security', 'Compliance', 'Identity', 'Zero Trust'],
          free: true,
          language: 'EN/DE'
        },
        {
          id: 'ms-ai-fundamentals',
          provider: 'Microsoft',
          name: 'AI Fundamentals (AI-900)',
          description: 'Artificial Intelligence concepts and workloads',
          level: 'Beginner',
          duration: '6-8 hours',
          url: 'https://learn.microsoft.com/en-us/training/courses/ai-900t00',
          topics: ['AI', 'Machine Learning', 'Computer Vision', 'NLP'],
          free: true,
          language: 'EN/DE'
        },
        {
          id: 'ms-data-fundamentals',
          provider: 'Microsoft',
          name: 'Data Fundamentals (DP-900)',
          description: 'Core data concepts and Azure data services',
          level: 'Beginner',
          duration: '6-8 hours',
          url: 'https://learn.microsoft.com/en-us/training/courses/dp-900t00',
          topics: ['Databases', 'Data Analytics', 'Azure Data Services'],
          free: true,
          language: 'EN/DE'
        },
        {
          id: 'ms-azure-ai-engineer',
          provider: 'Microsoft',
          name: 'Azure AI Engineer Associate (AI-102)',
          description: 'Design and implement AI solutions on Azure',
          level: 'Advanced',
          duration: '40-50 hours',
          url: 'https://learn.microsoft.com/en-us/certifications/azure-ai-engineer/',
          topics: ['Cognitive Services', 'ML', 'Knowledge Mining', 'NLP'],
          free: false,
          price: '$165',
          language: 'EN/DE'
        }
      ]
    },
    programming: {
      id: 'programming',
      name: 'Programming & Development',
      icon: '💻',
      color: '#4CAF50',
      certifications: [
        {
          id: 'google-python',
          provider: 'Google',
          name: 'Google IT Automation with Python',
          description: 'Python programming for IT automation',
          level: 'Beginner',
          duration: '30-40 hours',
          url: 'https://www.coursera.org/professional-certificates/google-it-automation',
          topics: ['Python', 'Git', 'IT Automation', 'Testing'],
          free: true,
          language: 'EN'
        },
        {
          id: 'google-kotlin',
          provider: 'Google',
          name: 'Kotlin for Android Developers',
          description: 'Android development with Kotlin',
          level: 'Intermediate',
          duration: '20-25 hours',
          url: 'https://developer.android.com/courses',
          topics: ['Kotlin', 'Android', 'Mobile Development'],
          free: true,
          language: 'EN'
        },
        {
          id: 'meta-frontend',
          provider: 'Meta',
          name: 'Frontend Developer Professional',
          description: 'Frontend development from Meta/Facebook',
          level: 'Beginner',
          duration: '40-50 hours',
          url: 'https://www.coursera.org/professional-certificates/meta-front-end-developer',
          topics: ['HTML', 'CSS', 'JavaScript', 'React'],
          free: true,
          language: 'EN'
        },
        {
          id: 'meta-react-native',
          provider: 'Meta',
          name: 'React Native Specialization',
          description: 'Mobile app development with React Native',
          level: 'Intermediate',
          duration: '30-35 hours',
          url: 'https://www.coursera.org/specializations/meta-react-native',
          topics: ['React Native', 'Mobile Apps', 'JavaScript', 'Cross-platform'],
          free: true,
          language: 'EN'
        },
        {
          id: 'ibm-python',
          provider: 'IBM',
          name: 'Python for Data Science',
          description: 'Python programming for data science and AI',
          level: 'Beginner',
          duration: '25-30 hours',
          url: 'https://www.coursera.org/learn/python-for-applied-data-science-ai',
          topics: ['Python', 'Data Science', 'Pandas', 'NumPy'],
          free: true,
          language: 'EN'
        },
        {
          id: 'ibm-fullstack',
          provider: 'IBM',
          name: 'Full Stack Software Developer',
          description: 'Complete full-stack development',
          level: 'Intermediate',
          duration: '50-60 hours',
          url: 'https://www.coursera.org/professional-certificates/ibm-full-stack-cloud-developer',
          topics: ['Frontend', 'Backend', 'Cloud', 'DevOps'],
          free: true,
          language: 'EN'
        },
        {
          id: 'oracle-java-programmer',
          provider: 'Oracle',
          name: 'Java SE Programmer (1Z0-819)',
          description: 'Oracle Certified Professional Java developer',
          level: 'Intermediate',
          duration: '60-80 hours',
          url: 'https://education.oracle.com/java-se-11-developer/pexam_1Z0-819',
          topics: ['Java SE', 'OOP', 'Collections', 'Streams'],
          free: false,
          price: '$245',
          language: 'EN'
        }
      ]
    },
    dataScience: {
      id: 'dataScience',
      name: 'Data Science & AI',
      icon: '📊',
      color: '#9C27B0',
      certifications: [
        {
          id: 'google-data-analytics',
          provider: 'Google',
          name: 'Google Data Analytics Professional',
          description: 'Data analysis with Google tools',
          level: 'Beginner',
          duration: '40-50 hours',
          url: 'https://www.coursera.org/professional-certificates/google-data-analytics',
          topics: ['Data Analysis', 'SQL', 'Tableau', 'R'],
          free: true,
          language: 'EN'
        },
        {
          id: 'ibm-data-science',
          provider: 'IBM',
          name: 'IBM Data Science Professional',
          description: 'Comprehensive data science training',
          level: 'Intermediate',
          duration: '60-70 hours',
          url: 'https://www.coursera.org/professional-certificates/ibm-data-science',
          topics: ['Python', 'Machine Learning', 'SQL', 'Data Visualization'],
          free: true,
          language: 'EN'
        },
        {
          id: 'deeplearning-ai',
          provider: 'DeepLearning.AI',
          name: 'Deep Learning Specialization',
          description: 'Deep learning and neural networks',
          level: 'Advanced',
          duration: '80-100 hours',
          url: 'https://www.coursera.org/specializations/deep-learning',
          topics: ['Neural Networks', 'CNN', 'RNN', 'TensorFlow'],
          free: true,
          language: 'EN'
        },
        {
          id: 'microsoft-ai-engineer',
          provider: 'Microsoft',
          name: 'Azure AI Engineer Associate (AI-102)',
          description: 'AI development on Azure',
          level: 'Advanced',
          duration: '30-40 hours',
          url: 'https://learn.microsoft.com/en-us/training/courses/ai-102t00',
          topics: ['Azure AI', 'Cognitive Services', 'ML', 'Computer Vision'],
          free: false,
          price: '$165',
          language: 'EN/DE'
        },
        {
          id: 'google-ml',
          provider: 'Google',
          name: 'Machine Learning Crash Course',
          description: 'Quick introduction to machine learning',
          level: 'Intermediate',
          duration: '15-20 hours',
          url: 'https://developers.google.com/machine-learning/crash-course',
          topics: ['ML Basics', 'TensorFlow', 'Neural Networks'],
          free: true,
          language: 'EN'
        },
        {
          id: 'tensorflow-developer',
          provider: 'TensorFlow',
          name: 'TensorFlow Developer Certificate',
          description: 'Build ML models with TensorFlow',
          level: 'Intermediate',
          duration: '40-50 hours',
          url: 'https://www.tensorflow.org/certificate',
          topics: ['TensorFlow', 'Deep Learning', 'Computer Vision', 'NLP'],
          free: false,
          price: '$100',
          language: 'EN'
        }
      ]
    },
    devops: {
      id: 'devops',
      name: 'DevOps & Infrastructure',
      icon: '⚙️',
      color: '#F44336',
      certifications: [
        {
          id: 'linux-foundation-intro',
          provider: 'Linux Foundation',
          name: 'Introduction to Linux',
          description: 'Linux fundamentals and command line',
          level: 'Beginner',
          duration: '20-25 hours',
          url: 'https://training.linuxfoundation.org/training/introduction-to-linux/',
          topics: ['Linux', 'Command Line', 'System Administration'],
          free: true,
          language: 'EN'
        },
        {
          id: 'redhat-system-admin',
          provider: 'Red Hat',
          name: 'Red Hat System Administration I',
          description: 'Red Hat Enterprise Linux administration',
          level: 'Intermediate',
          duration: '30-40 hours',
          url: 'https://www.redhat.com/en/services/training/rh124-red-hat-system-administration-i',
          topics: ['RHEL', 'System Admin', 'Linux'],
          free: true,
          language: 'EN'
        },
        {
          id: 'rhcsa',
          provider: 'Red Hat',
          name: 'RHCSA - Red Hat Certified System Administrator',
          description: 'Industry-standard Linux certification',
          level: 'Intermediate',
          duration: '60-80 hours',
          url: 'https://www.redhat.com/en/services/certification/rhcsa',
          topics: ['RHEL Administration', 'System Management', 'Security'],
          free: false,
          price: '$400',
          language: 'EN'
        },
        {
          id: 'docker-fundamentals',
          provider: 'Docker',
          name: 'Docker Fundamentals',
          description: 'Container technology with Docker',
          level: 'Intermediate',
          duration: '10-15 hours',
          url: 'https://docker-curriculum.com/',
          topics: ['Docker', 'Containers', 'Orchestration'],
          free: true,
          language: 'EN'
        },
        {
          id: 'kubernetes-basics',
          provider: 'CNCF',
          name: 'Kubernetes Fundamentals (LFS258)',
          description: 'Kubernetes container orchestration',
          level: 'Intermediate',
          duration: '15-20 hours',
          url: 'https://training.linuxfoundation.org/training/kubernetes-fundamentals/',
          topics: ['Kubernetes', 'Container Orchestration', 'Cloud Native'],
          free: true,
          language: 'EN'
        },
        {
          id: 'cka',
          provider: 'CNCF',
          name: 'CKA - Certified Kubernetes Administrator',
          description: 'Professional Kubernetes administrator certification',
          level: 'Advanced',
          duration: '60-80 hours',
          url: 'https://training.linuxfoundation.org/certification/certified-kubernetes-administrator-cka/',
          topics: ['K8s Administration', 'Cluster Management', 'Troubleshooting'],
          free: false,
          price: '$395',
          language: 'EN'
        },
        {
          id: 'git-github',
          provider: 'GitHub',
          name: 'GitHub Foundations',
          description: 'Git and GitHub fundamentals',
          level: 'Beginner',
          duration: '5-8 hours',
          url: 'https://skills.github.com/',
          topics: ['Git', 'Version Control', 'Collaboration'],
          free: true,
          language: 'EN'
        },
        {
          id: 'jenkins-fundamentals',
          provider: 'CloudBees',
          name: 'Jenkins Fundamentals',
          description: 'CI/CD with Jenkins',
          level: 'Intermediate',
          duration: '12-15 hours',
          url: 'https://www.jenkins.io/doc/tutorials/',
          topics: ['CI/CD', 'Jenkins', 'Automation', 'Pipelines'],
          free: true,
          language: 'EN'
        }
      ]
    },
    projectManagement: {
      id: 'projectManagement',
      name: 'Project Management & Business',
      icon: '📈',
      color: '#FF5722',
      certifications: [
        {
          id: 'google-project-management',
          provider: 'Google',
          name: 'Google Project Management Professional',
          description: 'Project management from Google',
          level: 'Beginner',
          duration: '40-50 hours',
          url: 'https://www.coursera.org/professional-certificates/google-project-management',
          topics: ['Project Management', 'Agile', 'Scrum', 'Planning'],
          free: true,
          language: 'EN'
        },
        {
          id: 'ibm-agile',
          provider: 'IBM',
          name: 'IBM Agile & Scrum Fundamentals',
          description: 'Agile methodologies and Scrum framework',
          level: 'Beginner',
          duration: '8-10 hours',
          url: 'https://www.coursera.org/learn/agile-development-and-scrum',
          topics: ['Agile', 'Scrum', 'Sprint Planning', 'Retrospectives'],
          free: true,
          language: 'EN'
        },
        {
          id: 'pmi-capm',
          provider: 'PMI',
          name: 'CAPM - Certified Associate in Project Management',
          description: 'Entry-level project management certification',
          level: 'Beginner',
          duration: '50-60 hours',
          url: 'https://www.pmi.org/certifications/certified-associate-capm',
          topics: ['Project Management', 'PMBOK', 'Processes', 'Knowledge Areas'],
          free: false,
          price: '$300',
          language: 'EN'
        },
        {
          id: 'pmp',
          provider: 'PMI',
          name: 'PMP - Project Management Professional',
          description: 'Gold standard for project management',
          level: 'Advanced',
          duration: '100-120 hours',
          url: 'https://www.pmi.org/certifications/project-management-pmp',
          topics: ['Advanced PM', 'Leadership', 'Strategic Management'],
          free: false,
          price: '$555',
          language: 'EN'
        },
        {
          id: 'atlassian-jira',
          provider: 'Atlassian',
          name: 'Jira Fundamentals',
          description: 'Project management with Jira',
          level: 'Beginner',
          duration: '5-6 hours',
          url: 'https://university.atlassian.com/student/catalog',
          topics: ['Jira', 'Issue Tracking', 'Workflows'],
          free: true,
          language: 'EN'
        },
        {
          id: 'scrum-master',
          provider: 'Scrum.org',
          name: 'Professional Scrum Master I (PSM I)',
          description: 'Scrum Master certification',
          level: 'Intermediate',
          duration: '20-25 hours',
          url: 'https://www.scrum.org/professional-scrum-master-i-certification',
          topics: ['Scrum Framework', 'Agile', 'Team Facilitation'],
          free: false,
          price: '$150',
          language: 'EN'
        },
        {
          id: 'salesforce-admin',
          provider: 'Salesforce',
          name: 'Salesforce Administrator',
          description: 'Salesforce CRM administration',
          level: 'Intermediate',
          duration: '20-25 hours',
          url: 'https://trailhead.salesforce.com/credentials/administrator',
          topics: ['Salesforce', 'CRM', 'Administration'],
          free: false,
          price: '$200',
          language: 'EN'
        }
      ]
    },
    databases: {
      id: 'databases',
      name: 'Databases',
      icon: '🗄️',
      color: '#00BCD4',
      certifications: [
        {
          id: 'oracle-database',
          provider: 'Oracle',
          name: 'Oracle Database Foundations',
          description: 'Oracle database fundamentals',
          level: 'Beginner',
          duration: '15-20 hours',
          url: 'https://education.oracle.com/oracle-database-foundations/pexam_1Z0-006',
          topics: ['SQL', 'PL/SQL', 'Database Design', 'Oracle DB'],
          free: true,
          language: 'EN'
        },
        {
          id: 'oracle-dba',
          provider: 'Oracle',
          name: 'Oracle Database Administrator Certified Professional',
          description: 'Professional Oracle DBA certification',
          level: 'Advanced',
          duration: '80-100 hours',
          url: 'https://education.oracle.com/oracle-database-administration/pexam_1Z0-082',
          topics: ['Database Administration', 'Performance Tuning', 'Backup'],
          free: false,
          price: '$245',
          language: 'EN'
        },
        {
          id: 'mongodb-basics',
          provider: 'MongoDB',
          name: 'MongoDB Basics',
          description: 'NoSQL with MongoDB',
          level: 'Beginner',
          duration: '8-10 hours',
          url: 'https://university.mongodb.com/',
          topics: ['MongoDB', 'NoSQL', 'Document Database'],
          free: true,
          language: 'EN'
        },
        {
          id: 'mongodb-developer',
          provider: 'MongoDB',
          name: 'MongoDB Certified Developer Associate',
          description: 'Professional MongoDB developer certification',
          level: 'Intermediate',
          duration: '30-40 hours',
          url: 'https://university.mongodb.com/certification',
          topics: ['MongoDB Development', 'Schema Design', 'Performance'],
          free: false,
          price: '$150',
          language: 'EN'
        },
        {
          id: 'mysql-fundamentals',
          provider: 'Oracle',
          name: 'MySQL Fundamentals',
          description: 'MySQL database fundamentals',
          level: 'Beginner',
          duration: '10-12 hours',
          url: 'https://education.oracle.com/mysql',
          topics: ['MySQL', 'SQL', 'Relational DB'],
          free: true,
          language: 'EN'
        },
        {
          id: 'postgresql-intro',
          provider: 'PostgreSQL',
          name: 'PostgreSQL Introduction',
          description: 'PostgreSQL database fundamentals',
          level: 'Beginner',
          duration: '8-10 hours',
          url: 'https://www.postgresqltutorial.com/',
          topics: ['PostgreSQL', 'SQL', 'Advanced Features'],
          free: true,
          language: 'EN'
        },
        {
          id: 'microsoft-database-admin',
          provider: 'Microsoft',
          name: 'Azure Database Administrator Associate (DP-300)',
          description: 'Administer SQL databases on Azure',
          level: 'Advanced',
          duration: '40-50 hours',
          url: 'https://learn.microsoft.com/en-us/certifications/azure-database-administrator-associate/',
          topics: ['Azure SQL', 'Database Administration', 'High Availability'],
          free: false,
          price: '$165',
          language: 'EN/DE'
        }
      ]
    }
  }
};

export const getAllCertificationCategories = () => {
  return Object.values(certificationsData.categories);
};

export const getCategoryById = (categoryId) => {
  return certificationsData.categories[categoryId] || null;
};

export const getAllCertifications = () => {
  const allCerts = [];
  Object.values(certificationsData.categories).forEach(category => {
    category.certifications.forEach(cert => {
      allCerts.push({ ...cert, categoryId: category.id, categoryName: category.name });
    });
  });
  return allCerts;
};

export const getCertificationsByProvider = (provider) => {
  return getAllCertifications().filter(cert => cert.provider === provider);
};

export const getCertificationsByLevel = (level) => {
  return getAllCertifications().filter(cert => cert.level === level);
};

export const getFreeCertifications = () => {
  return getAllCertifications().filter(cert => cert.free === true);
};

export const getPaidCertifications = () => {
  return getAllCertifications().filter(cert => cert.free === false);
};

export const searchCertifications = (query) => {
  const lowerQuery = query.toLowerCase();
  return getAllCertifications().filter(cert =>
    cert.name.toLowerCase().includes(lowerQuery) ||
    cert.description.toLowerCase().includes(lowerQuery) ||
    cert.provider.toLowerCase().includes(lowerQuery) ||
    cert.topics.some(topic => topic.toLowerCase().includes(lowerQuery))
  );
};
