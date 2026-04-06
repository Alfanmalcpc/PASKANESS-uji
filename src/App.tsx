import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Users, 
  History, 
  Home as HomeIcon, 
  Mail, 
  Link as LinkIcon, 
  Calendar, 
  MapPin, 
  Eye, 
  Rocket, 
  ArrowRight, 
  Users2,
  Share,
  User,
  Globe
} from 'lucide-react';
import { cn } from './lib/utils';
import { MEMBERS, ACTIVITIES, PAST_COLLECTIONS } from './constants';

// --- Components ---

const Navbar = ({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (tab: string) => void }) => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0a0e1a]/60 backdrop-blur-lg border-b border-sky-400/10 shadow-[0_0_30px_rgba(125,211,252,0.05)]">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <div className="text-2xl font-semibold text-sky-300 tracking-wider font-headline">
          Organisasi
        </div>
        <div className="hidden md:flex items-center space-x-8 font-medium tracking-tight">
          {[
            { id: 'home', label: 'Beranda', icon: HomeIcon },
            { id: 'archive', label: 'Arsip Kegiatan', icon: History },
            { id: 'structure', label: 'Struktur Pengurus', icon: Users },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "transition-colors duration-300 px-2 py-1 rounded relative",
                activeTab === tab.id ? "text-sky-300" : "text-slate-300 hover:text-sky-200 hover:bg-sky-400/10"
              )}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute -bottom-4 left-0 right-0 h-0.5 bg-sky-300"
                />
              )}
            </button>
          ))}
        </div>
        <div className="flex items-center">
          {/* Join button removed as requested */}
        </div>
      </div>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-[#0a0e1a] w-full py-12 border-t border-sky-400/10 mt-20">
    <div className="flex flex-col md:flex-row justify-between items-center px-8 max-w-7xl mx-auto">
      <div className="mb-8 md:mb-0 text-center md:text-left">
        <div className="text-xl font-bold text-sky-300 mb-2">Organisasi</div>
        <p className="text-slate-400 text-sm">© 2024 Organisasi. Seluruh hak cipta dilindungi.</p>
      </div>
      <div className="flex flex-wrap justify-center gap-8 text-sm">
        <a className="text-slate-400 hover:text-sky-300 transition-colors" href="#">Kebijakan Privasi</a>
        <a className="text-slate-400 hover:text-sky-300 transition-colors" href="#">Syarat & Ketentuan</a>
        <a className="text-slate-400 hover:text-sky-300 transition-colors" href="#">Kontak</a>
      </div>
      <div className="flex gap-4 mt-8 md:mt-0">
        <div className="w-10 h-10 glass-panel rounded-full flex items-center justify-center cursor-pointer hover:text-primary transition-colors">
          <Share className="w-5 h-5" />
        </div>
        <div className="w-10 h-10 glass-panel rounded-full flex items-center justify-center cursor-pointer hover:text-primary transition-colors">
          <Globe className="w-5 h-5" />
        </div>
      </div>
    </div>
  </footer>
);

// --- Pages ---

const HomePage = ({ onNavigate }: { onNavigate: (tab: string) => void, key?: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="pt-24"
  >
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center px-6 overflow-hidden">
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-tertiary/10 rounded-full blur-[120px]"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="mb-8 flex justify-center">
          <div className="p-6 glass-panel-elevated rounded-3xl shadow-[0_0_50px_rgba(125,211,252,0.1)]">
            <Users2 className="w-16 h-16 text-primary" />
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
          Jejak Karya dalam <span className="text-gradient">Inovasi</span>
        </h1>
        <p className="text-xl md:text-2xl text-on-surface-variant max-w-3xl mx-auto leading-relaxed mb-10">
          Dokumentasi perjalanan organisasi dalam membangun masa depan yang berkelanjutan melalui kolaborasi komunitas dan pemberdayaan pemuda.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => onNavigate('archive')}
            className="px-8 py-4 bg-primary text-on-primary font-bold rounded-xl shadow-lg shadow-primary/20 hover:brightness-110 transition-all active:scale-95"
          >
            Lihat Arsip Kegiatan
          </button>
          <button className="px-8 py-4 glass-panel text-primary font-bold rounded-xl hover:bg-white/5 transition-all active:scale-95">
            Pelajari Visi Kami
          </button>
        </div>
      </div>
    </section>

    <section className="max-w-7xl mx-auto px-8 py-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 glass-panel p-10 rounded-3xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 text-primary/10 group-hover:text-primary/20 transition-colors">
            <Eye className="w-32 h-32" />
          </div>
          <h2 className="text-3xl font-bold text-primary mb-6">Visi Kami</h2>
          <p className="text-xl text-on-surface-variant leading-relaxed max-w-xl relative z-10">
            Menjadi pusat keunggulan organisasi yang mampu menginspirasi perubahan positif dan melahirkan pemimpin masa depan yang berintegritas tinggi.
          </p>
        </div>
        <div className="glass-panel p-8 rounded-3xl flex flex-col justify-between border-tertiary/20">
          <div className="space-y-4">
            <div className="w-12 h-12 bg-tertiary/20 rounded-xl flex items-center justify-center">
              <Rocket className="w-6 h-6 text-tertiary" />
            </div>
            <h3 className="text-2xl font-bold">Misi Utama</h3>
            <p className="text-on-surface-variant">Mengembangkan potensi anggota melalui pelatihan intensif dan jejaring profesional yang berkelanjutan.</p>
          </div>
          <div className="mt-8 pt-8 border-t border-outline-variant">
            <div className="flex items-center gap-3 text-tertiary font-semibold cursor-pointer group">
              <span>Lihat Selengkapnya</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="max-w-7xl mx-auto px-8 py-24">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <h2 className="text-4xl font-bold mb-4">Sorotan Kegiatan</h2>
          <p className="text-on-surface-variant">Mengenang momen inovasi dan aksi nyata yang telah kita lalui bersama.</p>
        </div>
        <button 
          onClick={() => onNavigate('archive')}
          className="text-primary border border-primary/30 px-6 py-2 rounded-full hover:bg-primary/5 transition-all"
        >
          Arsip Lengkap
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ACTIVITIES.map((activity) => (
          <div key={activity.id} className="glass-panel rounded-3xl overflow-hidden group">
            <div className="h-48 overflow-hidden relative">
              <img 
                src={activity.image} 
                alt={activity.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 glass-panel-elevated px-3 py-1 rounded-lg text-xs font-bold text-primary">
                {activity.date.split(' ')[0]} {activity.date.split(' ')[1].substring(0, 3).toUpperCase()}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{activity.title}</h3>
              <p className="text-on-surface-variant text-sm mb-4 line-clamp-2">{activity.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-on-surface-variant text-xs">
                  <MapPin className="w-4 h-4" />
                  <span>{activity.location}</span>
                </div>
                <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">{activity.status}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  </motion.div>
);

const ArchivePage = ({ key }: { key?: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="pt-32 pb-20 px-6 max-w-7xl mx-auto"
  >
    <header className="mb-16 text-center">
      <h1 className="text-5xl md:text-6xl font-extrabold text-on-surface tracking-tight mb-4">
        Arsip <span className="text-primary">Kegiatan</span>
      </h1>
      <p className="text-on-surface-variant max-w-2xl mx-auto text-lg">
        Menjelajahi rekam jejak perjalanan dan kontribusi kami melalui arsip dokumentasi kegiatan yang telah terlaksana.
      </p>
    </header>

    <section className="mb-24">
      <div className="flex items-center gap-3 mb-10">
        <History className="text-primary w-8 h-8" />
        <h2 className="text-3xl font-bold tracking-tight">Dokumentasi Terkini</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ACTIVITIES.map((activity) => (
          <div key={activity.id} className="glass-panel rounded-xl overflow-hidden group hover:shadow-[0_0_30px_rgba(125,211,252,0.1)] transition-all duration-500">
            <div className="h-56 w-full overflow-hidden relative">
              <img 
                src={activity.image} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 glass-panel-elevated px-3 py-1 rounded-full text-xs font-bold text-on-surface-variant tracking-widest uppercase">
                {activity.status}
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-2 text-primary text-sm font-medium mb-3">
                <Calendar className="w-4 h-4" />
                {activity.date}
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{activity.title}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                {activity.description}
              </p>
              <button className="w-full py-3 rounded-lg border border-primary/30 text-primary font-semibold glass-panel-elevated hover:bg-primary/20 transition-all duration-300 active:scale-[0.98] flex items-center justify-center gap-2">
                <Eye className="w-4 h-4" />
                Lihat Detail & Komentar
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className="mb-24">
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center gap-3">
          <History className="text-on-surface-variant w-8 h-8" />
          <h2 className="text-3xl font-bold tracking-tight">Koleksi Masa Lalu</h2>
        </div>
        <button className="text-primary hover:underline text-sm font-medium">Lihat Semua Galeri</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[700px]">
        {/* Large Featured */}
        <div className="md:col-span-2 md:row-span-2 glass-panel rounded-xl overflow-hidden group relative">
          <img 
            src={PAST_COLLECTIONS[0].image} 
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-8 w-full">
            <div className="text-primary-fixed-dim text-xs font-bold mb-2 tracking-[0.2em] uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary-fixed-dim"></span>
              Selesai • {PAST_COLLECTIONS[0].category}
            </div>
            <h3 className="text-3xl font-bold mb-3 text-white">{PAST_COLLECTIONS[0].title}</h3>
            <p className="text-slate-200 text-sm max-w-md mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              {PAST_COLLECTIONS[0].description}
            </p>
            <div className="text-slate-400 text-xs italic">{PAST_COLLECTIONS[0].date}</div>
          </div>
        </div>
        {/* Smaller items */}
        {PAST_COLLECTIONS.slice(1).map((item, idx) => (
          <div 
            key={item.id} 
            className={cn(
              "glass-panel rounded-xl overflow-hidden group relative",
              idx === 0 ? "md:col-span-2 md:row-span-1" : "md:col-span-1 md:row-span-1"
            )}
          >
            <img 
              src={item.image} 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className={cn(
              "absolute inset-0",
              idx === 0 ? "bg-gradient-to-r from-background/90 to-transparent" : "bg-background/60 backdrop-blur-[2px]"
            )}></div>
            <div className="relative h-full flex flex-col justify-center p-8">
              <div className="text-[10px] text-primary/70 font-bold tracking-widest uppercase mb-1">Selesai</div>
              <h4 className="text-xl font-bold mb-2 text-white">{item.title}</h4>
              <p className="text-slate-300 text-xs max-w-[250px]">{item.description}</p>
              <div className="mt-4 text-primary text-xs font-medium">{item.date}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  </motion.div>
);

const StructurePage = ({ key }: { key?: string }) => {
  const [activePeriod, setActivePeriod] = useState('2023-2024');
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="pt-32 pb-20 px-6 max-w-7xl mx-auto"
    >
      <header className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-extrabold text-on-background tracking-tight mb-6">
          Struktur <span className="text-primary">Pengurus</span>
        </h1>
        <p className="text-on-surface-variant max-w-2xl mx-auto text-lg">
          Dedikasi dan visi kolektif untuk memajukan organisasi melalui kepemimpinan yang progresif di setiap masa jabatan.
        </p>
      </header>

      <div className="flex flex-col items-center mb-20">
        <div className="glass-panel p-1.5 rounded-full flex gap-1 inline-flex">
          {['2023-2024', '2022-2023', '2021-2022'].map((period) => (
            <button
              key={period}
              onClick={() => setActivePeriod(period)}
              className={cn(
                "px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 whitespace-nowrap",
                activePeriod === period 
                  ? "bg-primary/15 border border-primary/40 text-primary shadow-[0_0_20px_rgba(125,211,252,0.1)]" 
                  : "text-on-surface-variant hover:text-primary"
              )}
            >
              Periode {period}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activePeriod}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.3 }}
        >
          {/* Chairperson & Vice */}
          <section className="mb-24">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="md:col-span-8 glass-panel rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8 group">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <img 
                    src={MEMBERS[0].image} 
                    className="relative w-48 h-48 md:w-64 md:h-64 rounded-2xl object-cover border-2 border-primary/20"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="text-center md:text-left flex-1">
                  <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4 tracking-widest uppercase">Ketua Umum</span>
                  <h2 className="text-4xl font-bold text-on-surface mb-3 tracking-tight">{MEMBERS[0].name}</h2>
                  <p className="text-on-surface-variant text-lg leading-relaxed mb-6 italic">"{MEMBERS[0].quote}"</p>
                  <div className="flex justify-center md:justify-start gap-4">
                    <LinkIcon className="text-primary cursor-pointer hover:brightness-125" />
                    <Mail className="text-primary cursor-pointer hover:brightness-125" />
                  </div>
                </div>
              </div>
              <div className="md:col-span-4 glass-panel rounded-3xl p-8 flex flex-col items-center justify-center text-center group">
                <img 
                  src={MEMBERS[1].image} 
                  className="w-40 h-40 rounded-full object-cover border-2 border-tertiary/20 mb-6 group-hover:border-tertiary/50 transition-colors"
                  referrerPolicy="no-referrer"
                />
                <span className="px-3 py-1 rounded-full bg-tertiary/10 text-tertiary text-xs font-bold mb-3 tracking-widest uppercase">Wakil Ketua</span>
                <h3 className="text-2xl font-bold text-on-surface">{MEMBERS[1].name}</h3>
              </div>
            </div>
          </section>

          {/* BPH Grid */}
          <section className="mb-24">
            <h3 className="text-2xl font-bold mb-10 flex items-center gap-3">
              <span className="w-12 h-[2px] bg-primary"></span>
              Badan Pengurus Harian
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {MEMBERS.slice(2, 6).map((member) => (
                <div key={member.id} className="glass-panel p-6 rounded-2xl text-center hover:translate-y-[-4px] transition-transform duration-300">
                  <img 
                    src={member.image} 
                    className="w-24 h-24 mx-auto rounded-xl object-cover mb-4 border border-white/10"
                    referrerPolicy="no-referrer"
                  />
                  <p className={cn(
                    "text-xs font-bold uppercase tracking-widest mb-1",
                    member.role.includes('Bendahara') ? "text-tertiary" : "text-primary"
                  )}>
                    {member.role}
                  </p>
                  <p className="text-lg font-semibold">{member.name}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Departments */}
          <section>
            <h3 className="text-2xl font-bold mb-10 flex items-center gap-3">
              <span className="w-12 h-[2px] bg-primary"></span>
              Ketua Departemen
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {MEMBERS.slice(6).map((member) => (
                <div key={member.id} className="glass-panel overflow-hidden rounded-3xl group">
                  <div className={cn(
                    "h-24 opacity-50 group-hover:opacity-70 transition-opacity",
                    member.role.includes('Bakat') ? "bg-gradient-to-r from-tertiary-container to-surface-container-highest" : "bg-gradient-to-r from-primary-container to-surface-container-highest"
                  )}></div>
                  <div className="px-8 pb-8 -mt-12 text-center">
                    <img 
                      src={member.image} 
                      className="w-24 h-24 mx-auto rounded-full object-cover border-4 border-background mb-4"
                      referrerPolicy="no-referrer"
                    />
                    <p className={cn(
                      "text-xs font-bold uppercase tracking-widest mb-1",
                      member.role.includes('Bakat') ? "text-tertiary" : "text-primary"
                    )}>
                      {member.role}
                    </p>
                    <h4 className="text-xl font-bold mb-4">{member.name}</h4>
                    <div className="flex justify-center gap-2">
                      <div className="w-8 h-8 rounded-lg glass-panel-elevated flex items-center justify-center hover:bg-primary/20 cursor-pointer">
                        <Share className="w-4 h-4" />
                      </div>
                      <div className="w-8 h-8 rounded-lg glass-panel-elevated flex items-center justify-center hover:bg-primary/20 cursor-pointer">
                        <User className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

// --- Main App ---

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  // Scroll to top on tab change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {activeTab === 'home' && <HomePage key="home" onNavigate={setActiveTab} />}
          {activeTab === 'archive' && <ArchivePage key="archive" />}
          {activeTab === 'structure' && <StructurePage key="structure" />}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
