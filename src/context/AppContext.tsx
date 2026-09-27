import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  PageRoute,
  VolunteerApplication,
  Project,
  Story,
  Partner,
  ImpactMetric,
  Enquiry,
  AdminRole,
  ApplicationStatus
} from '../types';
import {
  INITIAL_APPLICATIONS,
  INITIAL_PROJECTS,
  INITIAL_STORIES,
  INITIAL_PARTNERS,
  INITIAL_IMPACT_METRICS,
  INITIAL_ENQUIRIES
} from '../data/initialData';

interface ToastInfo {
  id: string;
  type: 'success' | 'info' | 'warning';
  title: string;
  message: string;
}

interface AppContextType {
  currentPage: PageRoute;
  setCurrentPage: (page: PageRoute) => void;
  navigateTo: (page: PageRoute, sectionId?: string) => void;
  
  // Applications
  applications: VolunteerApplication[];
  addApplication: (app: Omit<VolunteerApplication, 'id' | 'createdAt' | 'status'>) => void;
  updateApplicationStatus: (id: string, status: ApplicationStatus, notes?: string) => void;
  deleteApplication: (id: string) => void;
  
  // Projects
  projects: Project[];
  addProject: (proj: Omit<Project, 'id'>) => void;
  updateProject: (proj: Project) => void;
  deleteProject: (id: string) => void;
  
  // Stories
  stories: Story[];
  addStory: (story: Omit<Story, 'id'>) => void;
  updateStory: (story: Story) => void;
  deleteStory: (id: string) => void;
  
  // Partners
  partners: Partner[];
  addPartner: (partner: Omit<Partner, 'id'>) => void;
  updatePartner: (partner: Partner) => void;
  togglePartnerActive: (id: string) => void;
  
  // Impact Metrics
  impactMetrics: ImpactMetric[];
  updateImpactMetric: (metric: ImpactMetric) => void;
  
  // Enquiries
  enquiries: Enquiry[];
  addEnquiry: (enquiry: Omit<Enquiry, 'id' | 'createdAt' | 'status'>) => void;
  updateEnquiryStatus: (id: string, status: Enquiry['status']) => void;
  
  // Newsletter
  newsletterEmails: string[];
  subscribeNewsletter: (email: string) => boolean;
  
  // Admin
  isAdminLoggedIn: boolean;
  adminRole: AdminRole;
  setAdminRole: (role: AdminRole) => void;
  loginAdmin: () => void;
  logoutAdmin: () => void;
  
  // Modals & Details
  selectedProject: Project | null;
  setSelectedProject: (proj: Project | null) => void;
  selectedStory: Story | null;
  setSelectedStory: (story: Story | null) => void;
  isSafeguardingModalOpen: boolean;
  setIsSafeguardingModalOpen: (open: boolean) => void;
  isSupportModalOpen: boolean;
  setIsSupportModalOpen: (open: boolean) => void;

  // Volunteer Selection Journey
  volunteerPreset: { program: string; category: string } | null;
  setVolunteerPreset: (preset: { program: string; category: string } | null) => void;
  startVolunteerApplication: (program: string, category: string) => void;
  
  // Toasts
  toast: ToastInfo | null;
  showToast: (title: string, message: string, type?: 'success' | 'info' | 'warning') => void;
  clearToast: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const LOCAL_STORAGE_KEYS = {
  APPLICATIONS: 'hom_uganda_applications_v1',
  PROJECTS: 'hom_uganda_projects_v1',
  STORIES: 'hom_uganda_stories_v1',
  PARTNERS: 'hom_uganda_partners_v1',
  IMPACT: 'hom_uganda_impact_v1',
  ENQUIRIES: 'hom_uganda_enquiries_v1',
  NEWSLETTER: 'hom_uganda_newsletter_v1',
  ADMIN_ROLE: 'hom_uganda_admin_role_v1'
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState<boolean>(false);
  const [adminRole, setAdminRole] = useState<AdminRole>('Super Admin');
  
  const [applications, setApplications] = useState<VolunteerApplication[]>(() => {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEYS.APPLICATIONS);
      return stored ? JSON.parse(stored) : INITIAL_APPLICATIONS;
    } catch {
      return INITIAL_APPLICATIONS;
    }
  });

  const [projects, setProjects] = useState<Project[]>(() => {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEYS.PROJECTS);
      return stored ? JSON.parse(stored) : INITIAL_PROJECTS;
    } catch {
      return INITIAL_PROJECTS;
    }
  });

  const [stories, setStories] = useState<Story[]>(() => {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEYS.STORIES);
      return stored ? JSON.parse(stored) : INITIAL_STORIES;
    } catch {
      return INITIAL_STORIES;
    }
  });

  const [partners, setPartners] = useState<Partner[]>(() => {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEYS.PARTNERS);
      return stored ? JSON.parse(stored) : INITIAL_PARTNERS;
    } catch {
      return INITIAL_PARTNERS;
    }
  });

  const [impactMetrics, setImpactMetrics] = useState<ImpactMetric[]>(() => {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEYS.IMPACT);
      return stored ? JSON.parse(stored) : INITIAL_IMPACT_METRICS;
    } catch {
      return INITIAL_IMPACT_METRICS;
    }
  });

  const [enquiries, setEnquiries] = useState<Enquiry[]>(() => {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEYS.ENQUIRIES);
      return stored ? JSON.parse(stored) : INITIAL_ENQUIRIES;
    } catch {
      return INITIAL_ENQUIRIES;
    }
  });

  const [newsletterEmails, setNewsletterEmails] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEYS.NEWSLETTER);
      return stored ? JSON.parse(stored) : ['volunteer@example.de', 'community@uganda.org'];
    } catch {
      return [];
    }
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  const [isSafeguardingModalOpen, setIsSafeguardingModalOpen] = useState<boolean>(false);
  const [isSupportModalOpen, setIsSupportModalOpen] = useState<boolean>(false);
  const [volunteerPreset, setVolunteerPreset] = useState<{ program: string; category: string } | null>(null);
  const [toast, setToast] = useState<ToastInfo | null>(null);

  // Sync to local storage on changes
  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEYS.APPLICATIONS, JSON.stringify(applications));
    } catch (e) {
      console.warn('Storage error', e);
    }
  }, [applications]);

  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEYS.PROJECTS, JSON.stringify(projects));
    } catch (e) {
      console.warn('Storage error', e);
    }
  }, [projects]);

  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEYS.STORIES, JSON.stringify(stories));
    } catch (e) {
      console.warn('Storage error', e);
    }
  }, [stories]);

  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEYS.PARTNERS, JSON.stringify(partners));
    } catch (e) {
      console.warn('Storage error', e);
    }
  }, [partners]);

  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEYS.IMPACT, JSON.stringify(impactMetrics));
    } catch (e) {
      console.warn('Storage error', e);
    }
  }, [impactMetrics]);

  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEYS.ENQUIRIES, JSON.stringify(enquiries));
    } catch (e) {
      console.warn('Storage error', e);
    }
  }, [enquiries]);

  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEYS.NEWSLETTER, JSON.stringify(newsletterEmails));
    } catch (e) {
      console.warn('Storage error', e);
    }
  }, [newsletterEmails]);

  // Handle browser URL hash on mount & hashchange
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '').trim();
      const validPages: PageRoute[] = [
        'home', 'about', 'programs', 'volunteer', 'impact', 'contact', 'admin'
      ];
      if (hash === 'support') {
        setIsSupportModalOpen(true);
        return;
      }
      if (hash === 'partners') {
        setCurrentPage('about');
        setTimeout(() => {
          document.getElementById('partners')?.scrollIntoView({ behavior: 'smooth' });
        }, 150);
        return;
      }
      if (validPages.includes(hash as PageRoute)) {
        setCurrentPage(hash as PageRoute);
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const showToast = (title: string, message: string, type: 'success' | 'info' | 'warning' = 'success') => {
    const id = Date.now().toString();
    setToast({ id, title, message, type });
    setTimeout(() => {
      setToast(prev => (prev?.id === id ? null : prev));
    }, 5500);
  };

  const clearToast = () => setToast(null);

  const navigateTo = (page: PageRoute | 'support', sectionId?: string) => {
    if ((page as string) === 'support') {
      setIsSupportModalOpen(true);
      return;
    }
    setCurrentPage(page as PageRoute);
    window.location.hash = page;
    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const startVolunteerApplication = (program: string, category: string) => {
    setVolunteerPreset({ program, category });
    navigateTo('volunteer', 'volunteer-form');
  };

  // Application CRUD
  const addApplication = (appData: Omit<VolunteerApplication, 'id' | 'createdAt' | 'status'>) => {
    const newApp: VolunteerApplication = {
      ...appData,
      id: `app-${Date.now().toString().slice(-4)}`,
      status: 'New',
      createdAt: new Date().toISOString().split('T')[0]
    };
    setApplications(prev => [newApp, ...prev]);
    showToast(
      'Application Submitted Successfully!',
      'Thank you. The Hands of Mercy Uganda team has received your details and will contact you via email shortly.'
    );
  };

  const updateApplicationStatus = (id: string, status: ApplicationStatus, notes?: string) => {
    setApplications(prev =>
      prev.map(item =>
        item.id === id
          ? {
              ...item,
              status,
              ...(notes !== undefined ? { adminNotes: notes } : {})
            }
          : item
      )
    );
    showToast('Application Updated', `Application #${id} status changed to ${status}.`);
  };

  const deleteApplication = (id: string) => {
    setApplications(prev => prev.filter(a => a.id !== id));
    showToast('Application Removed', 'The application was removed from the database.', 'info');
  };

  // Projects CRUD
  const addProject = (proj: Omit<Project, 'id'>) => {
    const newProj: Project = {
      ...proj,
      id: `proj-${Date.now().toString().slice(-4)}`
    };
    setProjects(prev => [newProj, ...prev]);
    showToast('Project Published', `"${proj.title}" has been added to the project directory.`);
  };

  const updateProject = (proj: Project) => {
    setProjects(prev => prev.map(p => (p.id === proj.id ? proj : p)));
    showToast('Project Updated', `Changes to "${proj.title}" were saved.`);
  };

  const deleteProject = (id: string) => {
    setProjects(prev => prev.filter(p => p.id !== id));
    showToast('Project Removed', 'The project was deleted.', 'info');
  };

  // Stories CRUD
  const addStory = (story: Omit<Story, 'id'>) => {
    const newStory: Story = {
      ...story,
      id: `story-${Date.now().toString().slice(-4)}`
    };
    setStories(prev => [newStory, ...prev]);
    showToast('Story Published', `"${story.title}" is now published.`);
  };

  const updateStory = (story: Story) => {
    setStories(prev => prev.map(s => (s.id === story.id ? story : s)));
    showToast('Story Updated', `"${story.title}" has been updated.`);
  };

  const deleteStory = (id: string) => {
    setStories(prev => prev.filter(s => s.id !== id));
    showToast('Story Removed', 'The story was deleted.', 'info');
  };

  // Partners CRUD
  const addPartner = (partner: Omit<Partner, 'id'>) => {
    const newPartner: Partner = {
      ...partner,
      id: `p-${Date.now().toString().slice(-4)}`
    };
    setPartners(prev => [...prev, newPartner]);
    showToast('Partner Added', `"${partner.name}" added to partners directory.`);
  };

  const updatePartner = (partner: Partner) => {
    setPartners(prev => prev.map(p => (p.id === partner.id ? partner : p)));
    showToast('Partner Updated', `"${partner.name}" updated.`);
  };

  const togglePartnerActive = (id: string) => {
    setPartners(prev =>
      prev.map(p => (p.id === id ? { ...p, isActive: !p.isActive } : p))
    );
  };

  // Impact Metrics
  const updateImpactMetric = (metric: ImpactMetric) => {
    setImpactMetrics(prev => prev.map(m => (m.id === metric.id ? metric : m)));
    showToast('Verified Impact Metric Updated', `${metric.metric} set to ${metric.value}.`);
  };

  // Enquiries
  const addEnquiry = (enquiryData: Omit<Enquiry, 'id' | 'createdAt' | 'status'>) => {
    const newEnq: Enquiry = {
      ...enquiryData,
      id: `enq-${Date.now().toString().slice(-4)}`,
      status: 'New',
      createdAt: new Date().toISOString().split('T')[0]
    };
    setEnquiries(prev => [newEnq, ...prev]);
    showToast(
      'Message Received',
      'Thank you for contacting Hands of Mercy Uganda. Our team in Kampala will respond promptly.'
    );
  };

  const updateEnquiryStatus = (id: string, status: Enquiry['status']) => {
    setEnquiries(prev => prev.map(e => (e.id === id ? { ...e, status } : e)));
  };

  // Newsletter
  const subscribeNewsletter = (email: string): boolean => {
    if (!email || !email.includes('@')) {
      showToast('Invalid Email', 'Please enter a valid email address.', 'warning');
      return false;
    }
    if (newsletterEmails.includes(email.toLowerCase())) {
      showToast('Already Subscribed', 'This email is already receiving our updates.', 'info');
      return true;
    }
    setNewsletterEmails(prev => [...prev, email.toLowerCase()]);
    showToast(
      'Welcome to Our Community!',
      'Thank you for subscribing to Hands of Mercy Uganda and Growing Futures news.'
    );
    return true;
  };

  const loginAdmin = () => {
    setIsAdminLoggedIn(true);
    showToast('Welcome to Staff Admin Portal', `Logged in as ${adminRole}`);
  };

  const logoutAdmin = () => {
    setIsAdminLoggedIn(false);
    navigateTo('home');
    showToast('Signed Out', 'You have been signed out of the admin portal.', 'info');
  };

  return (
    <AppContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        navigateTo,
        applications,
        addApplication,
        updateApplicationStatus,
        deleteApplication,
        projects,
        addProject,
        updateProject,
        deleteProject,
        stories,
        addStory,
        updateStory,
        deleteStory,
        partners,
        addPartner,
        updatePartner,
        togglePartnerActive,
        impactMetrics,
        updateImpactMetric,
        enquiries,
        addEnquiry,
        updateEnquiryStatus,
        newsletterEmails,
        subscribeNewsletter,
        isAdminLoggedIn,
        adminRole,
        setAdminRole,
        loginAdmin,
        logoutAdmin,
        selectedProject,
        setSelectedProject,
        selectedStory,
        setSelectedStory,
        isSafeguardingModalOpen,
        setIsSafeguardingModalOpen,
        isSupportModalOpen,
        setIsSupportModalOpen,
        volunteerPreset,
        setVolunteerPreset,
        startVolunteerApplication,
        toast,
        showToast,
        clearToast
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
