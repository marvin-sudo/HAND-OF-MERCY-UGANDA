/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { NotificationToast } from './components/common/NotificationToast';
import { SafeguardingModal } from './components/common/SafeguardingModal';
import { SupportModal } from './components/common/SupportModal';

// Pages
import { HomePage } from './components/home/HomePage';
import { AboutPage } from './components/pages/AboutPage';
import { ProgramsPage } from './components/pages/ProgramsPage';
import { VolunteerPage } from './components/pages/VolunteerPage';
import { PartnerPage } from './components/pages/PartnerPage';
import { ImpactPage } from './components/pages/ImpactPage';
import { GetInvolvedPage } from './components/pages/GetInvolvedPage';
import { StoriesPage } from './components/pages/StoriesPage';
import { ContactPage } from './components/pages/ContactPage';
import { AdminDashboard } from './components/admin/AdminDashboard';

const MainContent: React.FC = () => {
  const { currentPage } = useApp();

  // Scroll to top or to hash anchor on page navigation
  useEffect(() => {
    if (window.location.hash) {
      const el = document.getElementById(window.location.hash.substring(1));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'programs':
        return <ProgramsPage />;
      case 'volunteer':
        return <VolunteerPage />;
      case 'partner':
        return <PartnerPage />;
      case 'impact':
        return <ImpactPage />;
      case 'get-involved':
        return <GetInvolvedPage />;
      case 'stories':
        return <StoriesPage />;
      case 'contact':
        return <ContactPage />;
      case 'admin':
        return <AdminDashboard />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans antialiased selection:bg-orange-100 selection:text-orange-900">
      <Header />
      <main className="flex-1">
        {renderPage()}
      </main>
      {currentPage !== 'admin' && <Footer />}

      {/* Global Modals & Notifications */}
      <SafeguardingModal />
      <SupportModal />
      <NotificationToast />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
}
