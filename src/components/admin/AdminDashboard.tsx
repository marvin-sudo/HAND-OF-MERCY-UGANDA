import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  AdminRole, 
  ApplicationStatus, 
  VolunteerApplication, 
  Project, 
  Story, 
  ImpactMetric, 
  Partner 
} from '../../types';
import { 
  LayoutDashboard, 
  Users, 
  FolderKanban, 
  BookOpen, 
  BarChart3, 
  Handshake, 
  Inbox, 
  LogOut, 
  ShieldCheck, 
  Search, 
  Filter, 
  Download, 
  Edit3, 
  Trash2, 
  Plus, 
  Check, 
  X, 
  Eye, 
  Mail, 
  Send,
  Lock,
  ArrowRight
} from 'lucide-react';

export const AdminDashboard: React.FC = () => {
  const {
    applications,
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
    impactMetrics,
    updateImpactMetric,
    partners,
    addPartner,
    updatePartner,
    togglePartnerActive,
    enquiries,
    updateEnquiryStatus,
    adminRole,
    setAdminRole,
    isAdminLoggedIn,
    loginAdmin,
    logoutAdmin,
    showToast
  } = useApp();

  const [activeTab, setActiveTab] = useState<
    'overview' | 'volunteers' | 'projects' | 'stories' | 'impact' | 'partners' | 'enquiries'
  >('overview');

  // Volunteer management state
  const [volunteerSearch, setVolunteerSearch] = useState('');
  const [volunteerStatusFilter, setVolunteerStatusFilter] = useState<string>('All');
  const [selectedApplication, setSelectedApplication] = useState<VolunteerApplication | null>(null);
  const [editingNotes, setEditingNotes] = useState('');
  const [statusEmailPreview, setStatusEmailPreview] = useState<string | null>(null);

  // New Project Form state
  const [isAddingProject, setIsAddingProject] = useState(false);
  const [projectForm, setProjectForm] = useState<Omit<Project, 'id'>>({
    title: '',
    location: '',
    category: 'Education',
    description: '',
    objectives: ['', ''],
    progress: 50,
    impactSummary: '',
    image: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=800&q=80',
    volunteerOpportunities: '',
    status: 'Active',
    featured: true
  });

  // New Story Form state
  const [isAddingStory, setIsAddingStory] = useState(false);
  const [storyForm, setStoryForm] = useState<Omit<Story, 'id'>>({
    title: '',
    slug: '',
    category: 'Volunteer Stories',
    excerpt: '',
    content: '',
    author: '',
    authorRole: '',
    date: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80',
    readTime: '3 min read'
  });

  // Partner Form State
  const [isAddingPartner, setIsAddingPartner] = useState(false);
  const [partnerForm, setPartnerForm] = useState<Omit<Partner, 'id'>>({
    name: '',
    logo: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=200&q=80',
    category: 'International Partners',
    description: '',
    website: 'https://',
    country: 'Germany',
    isActive: true
  });

  // Metric editing state
  const [editingMetric, setEditingMetric] = useState<ImpactMetric | null>(null);

  // If not logged in, show secure login PIN form
  const [loginPin, setLoginPin] = useState('');
  if (!isAdminLoggedIn) {
    return (
      <div className="min-h-[70vh] bg-slate-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl p-8 sm:p-10 max-w-md w-full shadow-2xl border border-slate-200 text-center space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-[#1E40AF] text-white flex items-center justify-center mx-auto shadow-lg shadow-blue-900/20">
            <ShieldCheck className="w-8 h-8 text-amber-300" />
          </div>

          <div>
            <h2 className="text-2xl font-bold font-serif-brand text-[#172554]">
              Staff Admin Portal
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Hands of Mercy Uganda Internal Management
            </p>
          </div>

          <div className="space-y-4 text-left">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Select Admin Role
              </label>
              <select
                value={adminRole}
                onChange={e => setAdminRole(e.target.value as AdminRole)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#1E40AF]"
              >
                <option value="Super Admin">Super Admin (Full Access)</option>
                <option value="Programme Manager">Programme Manager (Projects & Field)</option>
                <option value="Volunteer Coordinator">Volunteer Coordinator (Applications)</option>
                <option value="Content Manager">Content Manager (Stories & Media)</option>
                <option value="Viewer">Viewer (Read-Only)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Staff Passcode / Access Key
              </label>
              <input
                type="password"
                value={loginPin}
                onChange={e => setLoginPin(e.target.value)}
                placeholder="Enter staff key (or click Login below)"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#1E40AF]"
              />
              <p className="text-[11px] text-slate-400 mt-1">
                Demo access pre-authenticated. Click "Access Portal" to enter.
              </p>
            </div>

            <button
              onClick={loginAdmin}
              className="w-full py-3 bg-[#1E40AF] hover:bg-blue-800 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
            >
              <Lock className="w-4 h-4 text-amber-300" />
              <span>Access Staff Portal</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Filtered applications
  const filteredApps = applications.filter(app => {
    const matchesSearch = 
      app.fullName.toLowerCase().includes(volunteerSearch.toLowerCase()) ||
      app.email.toLowerCase().includes(volunteerSearch.toLowerCase()) ||
      app.country.toLowerCase().includes(volunteerSearch.toLowerCase()) ||
      app.preferredProgramme.toLowerCase().includes(volunteerSearch.toLowerCase());
    const matchesStatus = volunteerStatusFilter === 'All' || app.status === volunteerStatusFilter;
    return matchesSearch && matchesStatus;
  });

  // Export applications to JSON / CSV
  const handleExportApplications = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(applications, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `hom-uganda-volunteer-applications-${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showToast('Export Completed', 'Volunteer database exported successfully.');
  };

  const handleStatusChange = (appId: string, newStatus: ApplicationStatus) => {
    updateApplicationStatus(appId, newStatus, editingNotes);
    const targetApp = applications.find(a => a.id === appId);
    if (targetApp) {
      setStatusEmailPreview(`To: ${targetApp.email}\nSubject: Application Status Update — Hands of Mercy Uganda\n\nDear ${targetApp.fullName},\n\nWe would like to update you on your application with Hands of Mercy Uganda (${targetApp.preferredProgramme}).\n\nYour application status is now: [${newStatus}].\n\nNotes from coordination team:\n${editingNotes || 'Thank you for your patience as we prepare next steps.'}\n\nWarm regards,\nHands of Mercy Uganda Volunteer Coordination Desk\nKampala, Uganda`);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col md:flex-row">
      
      {/* Royal Blue Admin Sidebar (Section 57) */}
      <aside className="w-full md:w-64 bg-[#172554] text-white flex flex-col justify-between shrink-0 shadow-xl">
        <div>
          {/* Sidebar Header */}
          <div className="p-6 border-b border-blue-900/60">
            <div className="flex items-center gap-3">
              <img
                src="https://www.image2url.com/r2/default/images/1789634505103-5f94b13a-b67f-40e5-af4a-c6897750c95f.png"
                alt="Hands of Mercy Uganda"
                className="h-9 w-auto object-contain brightness-0 invert"
                referrerPolicy="no-referrer"
              />
              <div>
                <h3 className="text-sm font-bold tracking-tight">HANDS OF MERCY</h3>
                <span className="text-[10px] text-amber-300 font-semibold block">
                  Staff Admin Portal
                </span>
              </div>
            </div>

            {/* Current Role Badge */}
            <div className="mt-4 p-2 rounded-lg bg-blue-900/50 border border-blue-700/40 text-xs flex items-center justify-between">
              <span className="text-blue-200">Role:</span>
              <span className="font-bold text-amber-300">{adminRole}</span>
            </div>
          </div>

          {/* Navigation Items */}
          <nav className="p-4 space-y-1 text-xs font-semibold">
            {[
              { id: 'overview', label: 'Overview', icon: <LayoutDashboard className="w-4 h-4" /> },
              { id: 'volunteers', label: `Volunteer Desk (${applications.length})`, icon: <Users className="w-4 h-4" /> },
              { id: 'partners', label: `Partners (${partners.length})`, icon: <Handshake className="w-4 h-4" /> },
              { id: 'impact', label: 'Impact Metrics', icon: <BarChart3 className="w-4 h-4" /> },
              { id: 'enquiries', label: `Enquiries (${enquiries.length})`, icon: <Inbox className="w-4 h-4" /> },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl transition-colors ${
                  activeTab === tab.id
                    ? 'bg-[#1E40AF] text-white shadow-xs font-bold'
                    : 'text-slate-300 hover:bg-blue-900/40 hover:text-white'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-blue-900/60">
          <button
            onClick={logoutAdmin}
            className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-xs text-slate-300 hover:text-white hover:bg-blue-900/50 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out to Website</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6 sm:p-10 overflow-y-auto max-h-screen">
        
        {/* Top greeting bar (Section 57) */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 border-b border-slate-200 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#1E40AF]">
              Administrative Operations
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold font-serif-brand text-[#172554]">
              Good morning, {adminRole}
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-500 bg-white px-3 py-1.5 rounded-lg border border-slate-200 font-mono">
              Uganda EAT: {new Date().toLocaleDateString()}
            </span>
          </div>
        </div>

        {/* 1. OVERVIEW TAB */}
        {activeTab === 'overview' && (
          <div className="space-y-8 pt-6">
            
            {/* 5 Quick KPI Cards (Section 57) */}
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-1">
                <span className="text-xs font-bold text-slate-500 uppercase">Applications</span>
                <div className="text-3xl font-extrabold text-[#172554] font-serif-brand">
                  {applications.length}
                </div>
                <span className="text-[11px] text-amber-600 font-semibold">
                  {applications.filter(a => a.status === 'New' || a.status === 'Under Review').length} pending review
                </span>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-1">
                <span className="text-xs font-bold text-slate-500 uppercase">Active Volunteers</span>
                <div className="text-3xl font-extrabold text-emerald-700 font-serif-brand">
                  {applications.filter(a => a.status === 'Active' || a.status === 'Accepted').length}
                </div>
                <span className="text-[11px] text-slate-500">In-country & confirmed</span>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-1">
                <span className="text-xs font-bold text-slate-500 uppercase">Projects</span>
                <div className="text-3xl font-extrabold text-[#1E40AF] font-serif-brand">
                  {projects.length}
                </div>
                <span className="text-[11px] text-slate-500">Active & ongoing</span>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-1">
                <span className="text-xs font-bold text-slate-500 uppercase">Published Stories</span>
                <div className="text-3xl font-extrabold text-[#F97316] font-serif-brand">
                  {stories.length}
                </div>
                <span className="text-[11px] text-slate-500">Community voices</span>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-1">
                <span className="text-xs font-bold text-slate-500 uppercase">Inquiries</span>
                <div className="text-3xl font-extrabold text-indigo-700 font-serif-brand">
                  {enquiries.length}
                </div>
                <span className="text-[11px] text-slate-500">
                  {enquiries.filter(e => e.status === 'New').length} unread messages
                </span>
              </div>
            </div>

            {/* Recent Volunteer Applications Preview */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-base text-[#172554]">
                  Recent Volunteer Applications
                </h3>
                <button
                  onClick={() => setActiveTab('volunteers')}
                  className="text-xs font-bold text-[#1E40AF] hover:underline"
                >
                  Manage All Applications →
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase font-semibold">
                    <tr>
                      <th className="p-3">Applicant</th>
                      <th className="p-3">Country</th>
                      <th className="p-3">Programme</th>
                      <th className="p-3">Dates</th>
                      <th className="p-3">Status</th>
                      <th className="p-3 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {applications.slice(0, 4).map(app => (
                      <tr key={app.id} className="hover:bg-slate-50">
                        <td className="p-3 font-bold text-slate-800">
                          {app.fullName}
                          <span className="block text-[11px] text-slate-400 font-normal">{app.email}</span>
                        </td>
                        <td className="p-3 text-slate-600">{app.country}</td>
                        <td className="p-3 text-slate-600 max-w-[180px] truncate">{app.preferredProgramme}</td>
                        <td className="p-3 text-slate-600">{app.preferredStartDate}</td>
                        <td className="p-3">
                          <span className="px-2 py-0.5 rounded-full font-semibold text-[10px] bg-blue-50 text-[#1E40AF]">
                            {app.status}
                          </span>
                        </td>
                        <td className="p-3 text-right">
                          <button
                            onClick={() => {
                              setSelectedApplication(app);
                              setActiveTab('volunteers');
                            }}
                            className="text-[#1E40AF] font-bold hover:underline"
                          >
                            Review
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        )}

        {/* 2. VOLUNTEER MANAGEMENT TAB (Section 35) */}
        {activeTab === 'volunteers' && (
          <div className="space-y-6 pt-6">
            
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h2 className="text-xl font-bold font-serif-brand text-[#172554]">
                  Volunteer Application Registry
                </h2>
                <p className="text-xs text-slate-500">
                  Manage applicant vetting, interview notes, and placement communication.
                </p>
              </div>

              <button
                onClick={handleExportApplications}
                className="px-4 py-2 bg-white border border-slate-300 hover:border-slate-400 text-xs font-bold text-slate-700 rounded-xl shadow-xs flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export Applications (JSON)</span>
              </button>
            </div>

            {/* Filter & Search Bar */}
            <div className="bg-white p-4 rounded-2xl border border-slate-200 flex flex-col sm:flex-row gap-3 items-center justify-between">
              <div className="relative w-full sm:w-80">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="text"
                  placeholder="Search by name, country, or email..."
                  value={volunteerSearch}
                  onChange={e => setVolunteerSearch(e.target.value)}
                  className="w-full pl-9 pr-3.5 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:border-[#1E40AF]"
                />
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <Filter className="w-4 h-4 text-slate-400" />
                <select
                  value={volunteerStatusFilter}
                  onChange={e => setVolunteerStatusFilter(e.target.value)}
                  className="px-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:border-[#1E40AF]"
                >
                  <option value="All">All Statuses</option>
                  <option value="New">New</option>
                  <option value="Under Review">Under Review</option>
                  <option value="Contacted">Contacted</option>
                  <option value="Accepted">Accepted</option>
                  <option value="Preparing">Preparing</option>
                  <option value="Active">Active</option>
                  <option value="Completed">Completed</option>
                  <option value="Declined">Declined</option>
                </select>
              </div>
            </div>

            {/* Applications Table */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase font-semibold">
                  <tr>
                    <th className="p-3.5">Applicant</th>
                    <th className="p-3.5">Country</th>
                    <th className="p-3.5">Programme Pathway</th>
                    <th className="p-3.5">Dates</th>
                    <th className="p-3.5">Status</th>
                    <th className="p-3.5 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredApps.map(app => (
                    <tr key={app.id} className="hover:bg-slate-50 transition-colors">
                      <td className="p-3.5 font-bold text-slate-900">
                        {app.fullName}
                        <span className="block text-[11px] text-slate-500 font-normal">{app.email}</span>
                      </td>
                      <td className="p-3.5 text-slate-700">{app.country} ({app.nationality})</td>
                      <td className="p-3.5 text-slate-700">{app.preferredProgramme}</td>
                      <td className="p-3.5 text-slate-600 font-mono text-[11px]">
                        {app.preferredStartDate} to {app.preferredEndDate}
                      </td>
                      <td className="p-3.5">
                        <span className={`px-2.5 py-1 rounded-full font-bold text-[10px] ${
                          app.status === 'Accepted' || app.status === 'Active'
                            ? 'bg-emerald-100 text-emerald-800'
                            : app.status === 'Under Review' || app.status === 'Contacted'
                            ? 'bg-amber-100 text-amber-800'
                            : app.status === 'Declined'
                            ? 'bg-rose-100 text-rose-800'
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {app.status}
                        </span>
                      </td>
                      <td className="p-3.5 text-right space-x-2">
                        <button
                          onClick={() => {
                            setSelectedApplication(app);
                            setEditingNotes(app.adminNotes || '');
                          }}
                          className="px-3 py-1 bg-blue-50 text-[#1E40AF] font-bold rounded-lg hover:bg-blue-100"
                        >
                          Review & Update
                        </button>
                        <button
                          onClick={() => {
                            if (confirm(`Delete application for ${app.fullName}?`)) {
                              deleteApplication(app.id);
                            }
                          }}
                          className="p-1 text-slate-400 hover:text-rose-600"
                          title="Delete"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Application Detail / Status Update Drawer Modal */}
            {selectedApplication && (
              <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
                <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl max-h-[90vh] overflow-y-auto">
                  <div className="flex justify-between items-start border-b border-slate-100 pb-4">
                    <div>
                      <span className="text-xs font-bold text-[#1E40AF] uppercase">
                        Application #{selectedApplication.id}
                      </span>
                      <h3 className="text-2xl font-bold font-serif-brand text-[#172554]">
                        {selectedApplication.fullName}
                      </h3>
                      <p className="text-xs text-slate-500">
                        {selectedApplication.email} • {selectedApplication.phone} • {selectedApplication.country}
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        setSelectedApplication(null);
                        setStatusEmailPreview(null);
                      }}
                      className="text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-100"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="space-y-4 text-xs">
                    <div className="grid grid-cols-2 gap-3 bg-slate-50 p-4 rounded-xl">
                      <div><strong>Preferred Pathway:</strong> {selectedApplication.preferredProgramme}</div>
                      <div><strong>Dates:</strong> {selectedApplication.preferredStartDate} to {selectedApplication.preferredEndDate}</div>
                      <div><strong>Profession / Studies:</strong> {selectedApplication.educationProfession}</div>
                      <div><strong>Emergency Contact:</strong> {selectedApplication.emergencyContact}</div>
                    </div>

                    <div>
                      <h4 className="font-bold text-slate-800 mb-1">Motivation & Exchange:</h4>
                      <p className="p-3 bg-slate-50 rounded-xl text-slate-700 italic">
                        "{selectedApplication.motivationWhy}"
                      </p>
                    </div>

                    <div>
                      <h4 className="font-bold text-slate-800 mb-1">Skills:</h4>
                      <p className="text-slate-600">{selectedApplication.skills || 'Not specified'}</p>
                    </div>

                    {/* Status Update Pipeline Buttons */}
                    <div className="space-y-2 pt-2 border-t border-slate-100">
                      <label className="block font-bold text-slate-800">
                        Change Placement Status:
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {[
                          'New',
                          'Under Review',
                          'Contacted',
                          'Accepted',
                          'Preparing',
                          'Active',
                          'Completed',
                          'Declined'
                        ].map((st) => (
                          <button
                            key={st}
                            type="button"
                            onClick={() => handleStatusChange(selectedApplication.id, st as ApplicationStatus)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                              selectedApplication.status === st
                                ? 'bg-[#1E40AF] text-white shadow-xs'
                                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                            }`}
                          >
                            {st}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Internal Admin Notes */}
                    <div>
                      <label className="block font-bold text-slate-800 mb-1">
                        Internal Coordination Notes:
                      </label>
                      <textarea
                        rows={3}
                        value={editingNotes}
                        onChange={e => setEditingNotes(e.target.value)}
                        placeholder="Interview impressions, host home assignment, flight details..."
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs focus:outline-none focus:border-[#1E40AF]"
                      />
                      <button
                        onClick={() => {
                          updateApplicationStatus(selectedApplication.id, selectedApplication.status, editingNotes);
                          showToast('Notes Saved', 'Internal volunteer notes updated.');
                        }}
                        className="mt-2 px-4 py-1.5 bg-[#172554] text-white font-bold rounded-lg"
                      >
                        Save Notes
                      </button>
                    </div>

                    {/* Status Email Preview (Section 42) */}
                    {statusEmailPreview && (
                      <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl space-y-2">
                        <div className="flex items-center gap-1.5 font-bold text-[#1E40AF]">
                          <Mail className="w-4 h-4" />
                          <span>Generated Status Notification:</span>
                        </div>
                        <pre className="text-[11px] text-slate-700 whitespace-pre-wrap font-mono bg-white p-3 rounded-lg border border-slate-200">
                          {statusEmailPreview}
                        </pre>
                        <p className="text-[10px] text-slate-500">
                          Status change recorded and confirmation staged.
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="flex justify-end pt-4 border-t border-slate-100">
                    <button
                      onClick={() => setSelectedApplication(null)}
                      className="px-5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl"
                    >
                      Close Window
                    </button>
                  </div>
                </div>
              </div>
            )}

          </div>
        )}

        {/* 3. PROJECT MANAGEMENT TAB (Section 37) */}
        {activeTab === 'projects' && (
          <div className="space-y-6 pt-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold font-serif-brand text-[#172554]">
                  Project Directory Management
                </h2>
                <p className="text-xs text-slate-500">
                  Publish and update grassroots projects across Uganda.
                </p>
              </div>

              <button
                onClick={() => setIsAddingProject(true)}
                className="px-4 py-2 bg-[#F97316] hover:bg-[#EA580C] text-white text-xs font-bold rounded-xl shadow-xs flex items-center gap-1.5"
              >
                <Plus className="w-4 h-4" />
                <span>Add New Project</span>
              </button>
            </div>

            {/* Add Project Modal */}
            {isAddingProject && (
              <div className="bg-white p-6 rounded-2xl border-2 border-blue-100 shadow-lg space-y-4 text-xs">
                <h3 className="text-base font-bold text-[#172554]">Create New Community Project</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="font-bold">Project Title *</label>
                    <input
                      type="text"
                      required
                      value={projectForm.title}
                      onChange={e => setProjectForm(p => ({ ...p, title: e.target.value }))}
                      placeholder="e.g. Clean Water Rain Tank Initiative"
                      className="w-full px-3 py-2 border rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="font-bold">Location *</label>
                    <input
                      type="text"
                      required
                      value={projectForm.location}
                      onChange={e => setProjectForm(p => ({ ...p, location: e.target.value }))}
                      placeholder="e.g. Mukono District, Uganda"
                      className="w-full px-3 py-2 border rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="font-bold">Category</label>
                    <select
                      value={projectForm.category}
                      onChange={e => setProjectForm(p => ({ ...p, category: e.target.value as any }))}
                      className="w-full px-3 py-2 border rounded-xl"
                    >
                      <option value="Education">Education</option>
                      <option value="Agriculture">Agriculture</option>
                      <option value="Youth">Youth</option>
                      <option value="Community Development">Community Development</option>
                      <option value="Environment">Environment</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-bold">Progress %</label>
                    <input
                      type="number"
                      min={0}
                      max={100}
                      value={projectForm.progress}
                      onChange={e => setProjectForm(p => ({ ...p, progress: Number(e.target.value) }))}
                      className="w-full px-3 py-2 border rounded-xl"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-bold">Project Description</label>
                  <textarea
                    rows={2}
                    value={projectForm.description}
                    onChange={e => setProjectForm(p => ({ ...p, description: e.target.value }))}
                    className="w-full px-3 py-2 border rounded-xl"
                  />
                </div>

                <div>
                  <label className="font-bold">Verified Impact Summary</label>
                  <input
                    type="text"
                    value={projectForm.impactSummary}
                    onChange={e => setProjectForm(p => ({ ...p, impactSummary: e.target.value }))}
                    placeholder="e.g. 400 learners now have fresh daily greens."
                    className="w-full px-3 py-2 border rounded-xl"
                  />
                </div>

                <div className="flex justify-end gap-2 pt-2">
                  <button
                    onClick={() => setIsAddingProject(false)}
                    className="px-4 py-2 bg-slate-100 rounded-xl"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      if (!projectForm.title) return alert('Title required');
                      addProject(projectForm);
                      setIsAddingProject(false);
                    }}
                    className="px-5 py-2 bg-[#1E40AF] text-white font-bold rounded-xl"
                  >
                    Publish Project
                  </button>
                </div>
              </div>
            )}

            {/* Existing Projects List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projects.map(proj => (
                <div key={proj.id} className="bg-white p-5 rounded-2xl border border-slate-200 space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[10px] font-bold uppercase bg-blue-50 text-[#1E40AF] px-2 py-0.5 rounded">
                        {proj.category}
                      </span>
                      <h4 className="font-bold text-base text-[#172554] mt-1">{proj.title}</h4>
                      <span className="text-xs text-slate-500">{proj.location}</span>
                    </div>
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                      {proj.status} ({proj.progress}%)
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 line-clamp-2">{proj.description}</p>
                  <div className="flex justify-between items-center pt-2 border-t text-xs">
                    <span className="text-slate-500 italic truncate max-w-xs">{proj.impactSummary}</span>
                    <button
                      onClick={() => deleteProject(proj.id)}
                      className="text-rose-600 font-bold hover:underline"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 4. STORIES CMS (Section 38) */}
        {activeTab === 'stories' && (
          <div className="space-y-6 pt-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold font-serif-brand text-[#172554]">
                  Stories & Testimonies CMS
                </h2>
                <p className="text-xs text-slate-500">
                  Publish authentic community accounts and volunteer reflections.
                </p>
              </div>

              <button
                onClick={() => setIsAddingStory(true)}
                className="px-4 py-2 bg-[#1E40AF] hover:bg-blue-800 text-white text-xs font-bold rounded-xl shadow-xs flex items-center gap-1.5"
              >
                <Plus className="w-4 h-4" />
                <span>Write New Story</span>
              </button>
            </div>

            {/* Add Story Form */}
            {isAddingStory && (
              <div className="bg-white p-6 rounded-2xl border-2 border-blue-100 shadow-lg space-y-4 text-xs">
                <h3 className="text-base font-bold text-[#172554]">Draft Community Story</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="font-bold">Story Title *</label>
                    <input
                      type="text"
                      value={storyForm.title}
                      onChange={e => setStoryForm(s => ({ ...s, title: e.target.value }))}
                      placeholder="e.g. Harvesting Hope in Mukono"
                      className="w-full px-3 py-2 border rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="font-bold">Author & Role *</label>
                    <input
                      type="text"
                      value={storyForm.author}
                      onChange={e => setStoryForm(s => ({ ...s, author: e.target.value }))}
                      placeholder="e.g. Teacher Sarah (Senior Educator)"
                      className="w-full px-3 py-2 border rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="font-bold">Category</label>
                    <select
                      value={storyForm.category}
                      onChange={e => setStoryForm(s => ({ ...s, category: e.target.value as any }))}
                      className="w-full px-3 py-2 border rounded-xl"
                    >
                      <option value="Volunteer Stories">Volunteer Stories</option>
                      <option value="Student Stories">Student Stories</option>
                      <option value="Community Stories">Community Stories</option>
                      <option value="Agriculture Stories">Agriculture Stories</option>
                      <option value="Partner Stories">Partner Stories</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-bold">Featured Image URL</label>
                    <input
                      type="url"
                      value={storyForm.image}
                      onChange={e => setStoryForm(s => ({ ...s, image: e.target.value }))}
                      className="w-full px-3 py-2 border rounded-xl"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-bold">Excerpt / Summary *</label>
                  <input
                    type="text"
                    value={storyForm.excerpt}
                    onChange={e => setStoryForm(s => ({ ...s, excerpt: e.target.value }))}
                    placeholder="Short summary..."
                    className="w-full px-3 py-2 border rounded-xl"
                  />
                </div>

                <div>
                  <label className="font-bold">Full Story Content *</label>
                  <textarea
                    rows={6}
                    value={storyForm.content}
                    onChange={e => setStoryForm(s => ({ ...s, content: e.target.value }))}
                    placeholder="Write the authentic story here..."
                    className="w-full px-3 py-2 border rounded-xl"
                  />
                </div>

                <div className="flex justify-end gap-2 pt-2">
                  <button
                    onClick={() => setIsAddingStory(false)}
                    className="px-4 py-2 bg-slate-100 rounded-xl"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      if (!storyForm.title || !storyForm.content) return alert('Title and content required');
                      addStory({ ...storyForm, slug: storyForm.title.toLowerCase().replace(/\s+/g, '-') });
                      setIsAddingStory(false);
                    }}
                    className="px-5 py-2 bg-[#1E40AF] text-white font-bold rounded-xl"
                  >
                    Publish Story
                  </button>
                </div>
              </div>
            )}

            {/* Existing Stories List */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {stories.map(story => (
                <div key={story.id} className="bg-white p-5 rounded-2xl border border-slate-200 space-y-3 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase bg-orange-50 text-[#F97316] px-2 py-0.5 rounded">
                      {story.category}
                    </span>
                    <h4 className="font-bold text-sm text-[#172554] mt-1 line-clamp-2">{story.title}</h4>
                    <p className="text-xs text-slate-500 mt-1">By {story.author}</p>
                    <p className="text-xs text-slate-600 line-clamp-2 mt-2">"{story.excerpt}"</p>
                  </div>
                  <div className="flex justify-end pt-2 border-t">
                    <button
                      onClick={() => deleteStory(story.id)}
                      className="text-xs font-bold text-rose-600 hover:underline"
                    >
                      Delete Story
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 5. IMPACT METRICS MANAGEMENT (Section 40) */}
        {activeTab === 'impact' && (
          <div className="space-y-6 pt-6">
            <div>
              <h2 className="text-xl font-bold font-serif-brand text-[#172554]">
                Verified Impact Metrics Management
              </h2>
              <p className="text-xs text-slate-500">
                Update quarterly verified field statistics. Note: Only authentic, non-fabricated data must be published.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {impactMetrics.map(metric => (
                <div key={metric.id} className="bg-white p-5 rounded-2xl border border-slate-200 space-y-3">
                  <span className="text-[10px] font-bold uppercase text-[#1E40AF]">{metric.category}</span>
                  <h4 className="font-bold text-sm text-[#172554]">{metric.metric}</h4>
                  
                  {editingMetric?.id === metric.id ? (
                    <div className="space-y-2">
                      <input
                        type="text"
                        value={editingMetric.value}
                        onChange={e => setEditingMetric({ ...editingMetric, value: e.target.value })}
                        className="w-full px-3 py-1.5 text-xs border rounded-lg"
                      />
                      <input
                        type="text"
                        value={editingMetric.description}
                        onChange={e => setEditingMetric({ ...editingMetric, description: e.target.value })}
                        className="w-full px-3 py-1.5 text-xs border rounded-lg"
                      />
                      <div className="flex justify-end gap-2">
                        <button
                          onClick={() => setEditingMetric(null)}
                          className="px-2 py-1 text-xs text-slate-500"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={() => {
                            updateImpactMetric(editingMetric);
                            setEditingMetric(null);
                          }}
                          className="px-3 py-1 bg-[#1E40AF] text-white text-xs font-bold rounded-lg"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="text-2xl font-extrabold text-[#172554] font-serif-brand">
                        {metric.value}
                      </div>
                      <p className="text-xs text-slate-500 mt-1">{metric.description}</p>
                      <button
                        onClick={() => setEditingMetric(metric)}
                        className="mt-3 text-xs font-bold text-[#1E40AF] hover:underline"
                      >
                        Edit Value
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 6. PARTNERS MANAGEMENT (Section 39) */}
        {activeTab === 'partners' && (
          <div className="space-y-6 pt-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold font-serif-brand text-[#172554]">
                  Partner Organizations Directory
                </h2>
                <p className="text-xs text-slate-500">
                  Manage alliances with German and Ugandan institutions.
                </p>
              </div>

              <button
                onClick={() => setIsAddingPartner(true)}
                className="px-4 py-2 bg-[#1E40AF] text-white text-xs font-bold rounded-xl shadow-xs flex items-center gap-1.5"
              >
                <Plus className="w-4 h-4" />
                <span>Add Partner</span>
              </button>
            </div>

            {/* Add Partner Form */}
            {isAddingPartner && (
              <div className="bg-white p-6 rounded-2xl border-2 border-blue-100 shadow-lg space-y-4 text-xs">
                <h3 className="text-base font-bold text-[#172554]">Register Partner</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="font-bold">Partner Name *</label>
                    <input
                      type="text"
                      value={partnerForm.name}
                      onChange={e => setPartnerForm(p => ({ ...p, name: e.target.value }))}
                      placeholder="e.g. Freiburg Exchange Forum"
                      className="w-full px-3 py-2 border rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="font-bold">Country</label>
                    <input
                      type="text"
                      value={partnerForm.country}
                      onChange={e => setPartnerForm(p => ({ ...p, country: e.target.value }))}
                      placeholder="Germany / Uganda"
                      className="w-full px-3 py-2 border rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="font-bold">Category</label>
                    <select
                      value={partnerForm.category}
                      onChange={e => setPartnerForm(p => ({ ...p, category: e.target.value as any }))}
                      className="w-full px-3 py-2 border rounded-xl"
                    >
                      <option value="Community Partners">Community Partners</option>
                      <option value="Education Partners">Education Partners</option>
                      <option value="International Partners">International Partners</option>
                      <option value="Volunteer Partners">Volunteer Partners</option>
                      <option value="Institutional Partners">Institutional Partners</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-bold">Website</label>
                    <input
                      type="url"
                      value={partnerForm.website}
                      onChange={e => setPartnerForm(p => ({ ...p, website: e.target.value }))}
                      className="w-full px-3 py-2 border rounded-xl"
                    />
                  </div>
                </div>
                <div>
                  <label className="font-bold">Description</label>
                  <textarea
                    rows={2}
                    value={partnerForm.description}
                    onChange={e => setPartnerForm(p => ({ ...p, description: e.target.value }))}
                    className="w-full px-3 py-2 border rounded-xl"
                  />
                </div>
                <div className="flex justify-end gap-2 pt-2">
                  <button onClick={() => setIsAddingPartner(false)} className="px-4 py-2 bg-slate-100 rounded-xl">
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      if (!partnerForm.name) return alert('Name required');
                      addPartner(partnerForm);
                      setIsAddingPartner(false);
                    }}
                    className="px-5 py-2 bg-[#1E40AF] text-white font-bold rounded-xl"
                  >
                    Save Partner
                  </button>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {partners.map(partner => (
                <div key={partner.id} className="bg-white p-5 rounded-2xl border border-slate-200 flex justify-between items-start">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-[#1E40AF] uppercase">{partner.category}</span>
                    <h4 className="font-bold text-sm text-[#172554]">{partner.name}</h4>
                    <p className="text-xs text-slate-500">{partner.description}</p>
                    <span className="text-[11px] text-slate-400 block">{partner.country}</span>
                  </div>
                  <button
                    onClick={() => togglePartnerActive(partner.id)}
                    className={`px-2 py-1 text-xs font-bold rounded ${
                      partner.isActive ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    {partner.isActive ? 'Active' : 'Hidden'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 7. ENQUIRIES / INBOX */}
        {activeTab === 'enquiries' && (
          <div className="space-y-6 pt-6">
            <div>
              <h2 className="text-xl font-bold font-serif-brand text-[#172554]">
                Public Inquiries & Messages
              </h2>
              <p className="text-xs text-slate-500">
                Contact submissions received from the website.
              </p>
            </div>

            <div className="space-y-4">
              {enquiries.map(enq => (
                <div key={enq.id} className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-xs font-bold text-slate-800">{enq.name}</span>
                      <span className="text-xs text-slate-500 ml-2">({enq.email} • {enq.phone})</span>
                      <h4 className="font-bold text-sm text-[#172554] mt-1">{enq.subject}</h4>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-slate-400">{enq.createdAt}</span>
                      <select
                        value={enq.status}
                        onChange={e => updateEnquiryStatus(enq.id, e.target.value as any)}
                        className="text-xs border rounded-lg px-2 py-1"
                      >
                        <option value="New">New</option>
                        <option value="Read">Read</option>
                        <option value="Responded">Responded</option>
                      </select>
                    </div>
                  </div>
                  <p className="text-xs text-slate-700 bg-slate-50 p-3 rounded-xl leading-relaxed whitespace-pre-wrap">
                    {enq.message}
                  </p>
                  <div className="text-[11px] text-slate-400">
                    Preferred contact method: <strong className="text-slate-600">{enq.preferredContactMethod}</strong>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </main>

    </div>
  );
};
