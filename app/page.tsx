'use client';

import { useState } from 'react';
import {
  ArrowLeft, BatteryCharging, BriefcaseBusiness, CheckCircle2, ChevronDown, CircleDollarSign,
  Clock3, Cpu, Database, Gamepad2, HardDrive, Headphones, Laptop, MapPin, Menu, MemoryStick,
  MessageCircle, Monitor, PackageSearch, Phone, Play, Search, ShieldCheck, ShoppingCart, Star,
  Wrench, X, Zap,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const services = [
  { icon: Headphones, title: 'دعم عن بُعد', text: 'حل مشاكل النظام والبرامج فورًا وبأمان.', tag: 'الأسرع' },
  { icon: Search, title: 'تشخيص الأعطال', text: 'فحص دقيق وتقرير واضح قبل الإصلاح.' },
  { icon: Database, title: 'استعادة البيانات', text: 'محاولات احترافية لاسترجاع الملفات المهمة.' },
  { icon: Wrench, title: 'برامج وتعريفات', text: 'تثبيت وتجهيز كامل حسب احتياجك.' },
];

const parts = [
  ['معالجات', Cpu], ['لوحات أم', Zap], ['كروت شاشة', Gamepad2], ['ذاكرة RAM', MemoryStick],
  ['أقراص SSD وHDD', HardDrive], ['شواحن وبطاريات', BatteryCharging], ['شاشات وقطع لابتوب', Laptop], ['ملحقات الكمبيوتر', Monitor],
] as const;

const builds = [
  { icon: Gamepad2, title: 'ألعاب', text: 'أداء قوي ومعدل إطارات ثابت', color: 'bg-[#eaf2ff] text-[#1d4ed8]' },
  { icon: BriefcaseBusiness, title: 'عمل ودراسة', text: 'اعتمادية وهدوء وسرعة يومية', color: 'bg-[#eff6ff] text-[#1d4ed8]' },
  { icon: Monitor, title: 'تصميم ومونتاج', text: 'أداء قوي للتصميم والمونتاج الاحترافي', color: 'bg-[#e8efff] text-[#1e40af]' },
  { icon: CircleDollarSign, title: 'حسب الميزانية', text: 'أفضل قيمة ضمن ميزانيتك', color: 'bg-[#e4f0ff] text-[#2563eb]' },
];

const customerReviews = [
  ['محمد العتيبي', 'طلب صيانة', 'تعامل راقٍ وتشخيص دقيق. وضّحوا لي المشكلة والسعر قبل الإصلاح، واستلمت اللابتوب في نفس اليوم.'],
  ['سارة القحطاني', 'دعم عن بُعد', 'تم حل مشكلة النظام بسرعة، وكان الفني واضحًا ومتعاونًا في كل خطوة.'],
  ['عبدالله الحربي', 'طلب قطعة', 'وفّروا لي القطعة المناسبة لجهازي بسعر واضح، ووصلت في الموعد المتفق عليه.'],
];

const englishReviews = [
  ['Mohammed Alotaibi', 'Maintenance request', 'Professional service and accurate diagnosis. The issue and price were explained before the repair.'],
  ['Sarah Alqahtani', 'Remote support', 'My system issue was resolved quickly, and the technician was clear and helpful throughout.'],
  ['Abdullah Alharbi', 'Parts request', 'They sourced the right part for my device at a clear price and delivered it on time.'],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [supportSelection, setSupportSelection] = useState('');
  const [partSelection, setPartSelection] = useState('');
  const [sentBox, setSentBox] = useState<'support' | 'part' | null>(null);
  const [tracking, setTracking] = useState(false);

  function submitWhatsAppOrder(event: React.FormEvent<HTMLFormElement>, kind: 'support' | 'part') {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const prefix = kind === 'support' ? 'support' : 'part';
    const choice = kind === 'support' ? supportSelection : partSelection;
    const message = [
      'طلب جديد من موقع سوفت تيك',
      `نوع الطلب: ${kind === 'support' ? 'دعم فني' : 'قطعة كمبيوتر'}`,
      `${kind === 'support' ? 'الخدمة' : 'القطعة'}: ${choice}`,
      `الاسم: ${form.get(`${prefix}-name`)}`,
      `رقم الجوال: ${form.get(`${prefix}-phone`)}`,
      `البريد الإلكتروني: ${form.get(`${prefix}-email`)}`,
      `طريقة الدفع: ${form.get(`${prefix}-payment`)}`,
      'الأسعار تشمل ضريبة القيمة المضافة 15٪',
    ].join('\n');

    window.open(`https://wa.me/966551234567?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
    setSentBox(kind);
  }

  return (
    <main dir="rtl" lang="ar" className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="relative z-50 border-b border-white/10 bg-[#071b36]/95 text-white backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label="سوفت تيك - الرئيسية">
            <span className="grid size-11 place-items-center rounded-2xl bg-primary text-[#071b36] shadow-[0_0_30px_rgba(96,165,250,.25)]"><Cpu className="size-6" /></span>
            <strong className="block text-lg leading-none">سوفت تيك</strong>
          </a>
          <nav className="hidden items-center gap-7 text-sm text-white/70 lg:flex" aria-label="التنقل الرئيسي"><a className="transition hover:text-white" href="#services">خدماتنا</a><a className="transition hover:text-white" href="#maintenance">الصيانة</a><a className="transition hover:text-white" href="#parts">طلبات القطع</a><a className="transition hover:text-white" href="#builds">تجميع كمبيوتر</a><a className="transition hover:text-white" href="#track">تتبع الطلب</a></nav>
          <div className="flex items-center gap-3"><a href="#parts" className="hidden items-center gap-2 text-sm font-medium text-primary sm:flex"><ShoppingCart className="size-4" />سلة</a><button onClick={() => setMenuOpen(!menuOpen)} className="grid size-10 place-items-center rounded-xl bg-white/10 lg:hidden" aria-label="فتح القائمة">{menuOpen ? <X /> : <Menu />}</button></div>
        </div>
        {menuOpen && <nav className="border-t border-white/10 px-5 py-4 text-sm lg:hidden"><div className="mx-auto grid max-w-7xl gap-4"><a href="#services" onClick={() => setMenuOpen(false)}>خدماتنا</a><a href="#parts" onClick={() => setMenuOpen(false)}>طلبات القطع</a><a href="#builds" onClick={() => setMenuOpen(false)}>تجميع كمبيوتر</a><a href="#track" onClick={() => setMenuOpen(false)}>تتبع الطلب</a></div></nav>}
      </header>

      <section id="top" className="relative border-b border-[#dbe7f5] bg-white text-[#0f2747]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(96,165,250,.16),transparent_31%),radial-gradient(circle_at_82%_65%,rgba(219,234,254,.55),transparent_28%)]" />
        <div className="relative mx-auto grid min-h-[560px] max-w-7xl items-center gap-10 px-5 py-12 lg:grid-cols-[1.08fr_.92fr] lg:px-8 lg:py-14">
          <div>
            <h1 className="max-w-3xl text-4xl font-black leading-[1.2] tracking-tight sm:text-5xl lg:text-6xl">مشكلتك التقنية<br /><span className="text-primary">حلّها عندنا</span></h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#64748b]">دعم فني وصيانة احترافية لأجهزة الكمبيوتر، وتوفير القطع الأصلية حتى بابك، بتشخيص واضح وسعر تعرفه قبل ما نبدأ.</p>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#475569]"><span className="flex items-center gap-2"><CheckCircle2 className="size-4 text-[#2563eb]" /> تشخيص أولي مجاني</span><span className="flex items-center gap-2"><CheckCircle2 className="size-4 text-[#2563eb]" /> ضمان على الصيانة</span></div>
          </div>
          <div className="relative mx-auto w-full max-w-lg"><div className="absolute -inset-8 rounded-full bg-[#dbeafe]/70 blur-3xl" /><div className="relative rounded-[2rem] border border-[#bfdbfe] bg-white p-3 shadow-[0_24px_70px_rgba(37,99,235,.18)]"><div className="rounded-[1.5rem] bg-[#0b2347] p-7 text-white sm:p-9"><div className="mb-8 flex items-center justify-between"><div><p className="text-base font-bold text-white/70 sm:text-lg">كيف نقدر نخدمك؟</p></div><Headphones className="size-9 text-primary" /></div><div className="space-y-3"><a href="#services" className="group flex items-center gap-4 rounded-2xl border border-primary/30 bg-primary/10 p-5 transition hover:bg-primary/15"><span className="grid size-12 place-items-center rounded-xl bg-primary text-[#071b36]"><ShieldCheck /></span><span className="flex-1"><b className="block">جهازي يحتاج صيانة</b><small className="text-white/50">أرسل المشكلة ودعنا نشخّصها</small></span><ArrowLeft className="text-primary transition group-hover:-translate-x-1" /></a><a href="#parts" className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[.04] p-5 transition hover:bg-white/[.08]"><span className="grid size-12 place-items-center rounded-xl bg-white/10 text-[#60a5fa]"><Cpu /></span><span className="flex-1"><b className="block">أبحث عن قطعة</b><small className="text-white/50">نوفّرها لك بأفضل خيار</small></span><ArrowLeft className="text-white/40 transition group-hover:-translate-x-1" /></a></div></div></div></div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center"><p className="text-2xl font-black text-[#1d4ed8] sm:text-3xl">خدمات سوفت تيك</p><p className="mt-4 leading-7 text-[#64748b]">اختر خدمة الدعم الفني أو قطعة الكمبيوتر، ثم أكمل تفاصيل طلبك.</p></div>
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <form onSubmit={(event) => submitWhatsAppOrder(event, 'support')} className="rounded-[2rem] border border-[#dbe7f5] bg-white p-6 shadow-[0_20px_50px_rgba(30,64,175,.08)] sm:p-9">
            <div className="mb-6 flex items-center gap-3"><span className="grid size-11 place-items-center rounded-xl bg-[#eff6ff] text-[#1d4ed8]"><Headphones /></span><div><h2 className="text-xl font-black">الدعم الفني</h2><p className="text-xs text-[#64748b]">اختر الخدمة المطلوبة</p></div></div>
            {sentBox === 'support' ? <InlineSuccess onReset={() => setSentBox(null)} /> : <div className="space-y-4"><Field label="خدمات الدعم الفني"><select id="support-service" required value={supportSelection} onChange={(event) => setSupportSelection(event.target.value)} className="form-control h-12 text-base"><option value="">اختر من القائمة</option>{services.map(({ title }) => <option key={title} value={title}>{title}</option>)}</select></Field><IdentityFields prefix="support" /><PaymentField prefix="support" /><Button type="submit" className="h-12 w-full bg-[#0b2347] text-base font-bold text-white hover:bg-[#173e78]">اطلب الآن <ArrowLeft /></Button></div>}
          </form>
          <form id="parts" onSubmit={(event) => submitWhatsAppOrder(event, 'part')} className="rounded-[2rem] border border-[#dbe7f5] bg-white p-6 shadow-[0_20px_50px_rgba(30,64,175,.08)] sm:p-9">
            <div className="mb-6 flex items-center gap-3"><span className="grid size-11 place-items-center rounded-xl bg-[#eaf2ff] text-[#1d4ed8]"><Cpu /></span><div><h2 className="text-xl font-black">اطلب قطع الكمبيوتر</h2><p className="text-xs text-[#64748b]">اختر القطعة المطلوبة</p></div></div>
            {sentBox === 'part' ? <InlineSuccess onReset={() => setSentBox(null)} /> : <div className="space-y-4"><Field label="قطع الكمبيوتر"><select id="computer-part" required value={partSelection} onChange={(event) => setPartSelection(event.target.value)} className="form-control h-12 text-base"><option value="">اختر من القائمة</option>{parts.map(([name]) => <option key={name} value={name}>{name}</option>)}<option value="قطعة أخرى">قطعة أخرى غير موجودة</option></select></Field><IdentityFields prefix="part" /><PaymentField prefix="part" /><Button type="submit" className="h-12 w-full bg-[#0b2347] text-base font-bold text-white hover:bg-[#173e78]">اطلب الآن <ArrowLeft /></Button></div>}
          </form>
        </div>
      </section>

      <section id="maintenance" className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
          <div className="rounded-[2rem] bg-[#0b2347] p-8 text-white sm:p-11 lg:order-2"><p className="text-sm font-bold text-primary">صيانة تناسب كل الأجهزة</p><div className="mt-9 grid grid-cols-2 gap-3">{['أجهزة مكتبية','لابتوبات','أجهزة الألعاب','ترقية الأجهزة','تنظيف دوري','عقود الشركات'].map((item) => <a href="#services" key={item} className="flex items-center rounded-2xl bg-white/[.06] p-4 text-sm transition hover:bg-white/[.12] focus:outline-none focus:ring-2 focus:ring-primary">{item}</a>)}</div></div>
          <div className="lg:order-1"><SectionTitle eyebrow="" title="نعالج العطل، ونشرح لك السبب" text="نبدأ بفحص شامل، ثم نرسل لك التشخيص والتكلفة والوقت المتوقع. لن ننفذ أي إصلاح قبل موافقتك." align="right" /><ol className="mt-9 space-y-6">{[
            ['01','استلام وتشخيص','نسجل نوع الجهاز وموديله والأعراض التي ظهرت عليه، ثم نفحص القطع والنظام والحرارة والأداء لتحديد سبب المشكلة بدقة.'],
            ['02','عرض السعر','نرسل لك تقريرًا مختصرًا يوضح العطل، والحل المقترح، والقطع المطلوبة إن وجدت، مع السعر النهائي وموعد الإنجاز قبل البدء.'],
            ['03','الإصلاح والضمان','بعد موافقتك ننفذ الإصلاح باحتراف، ثم نختبر الجهاز بالكامل ونسلمك شرحًا لما تم مع ضمان واضح على الخدمة والقطع المستبدلة.'],
          ].map(([num,title,text]) => <li key={num} className="flex gap-5 rounded-2xl border border-[#dbe7f5] bg-[#f8fbf9] p-5"><span className="grid size-11 shrink-0 place-items-center rounded-full border border-[#bfdbfe] bg-white text-xs font-black text-[#1d4ed8]">{num}</span><span><b className="text-lg">{title}</b><p className="mt-2 text-sm leading-7 text-[#64748b]">{text}</p></span></li>)}</ol></div>
        </div>
      </section>

      <section id="builds" className="bg-[#eaf2fb] py-24"><div className="mx-auto max-w-7xl px-5 lg:px-8"><p className="mx-auto max-w-2xl text-center text-lg leading-8 text-[#64748b] sm:text-xl">نختار القطع المتوافقة، نركبها ونختبر الأداء والحرارة قبل التسليم.</p><div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">{builds.map(({icon:Icon,title,text,color}) => <article key={title} className="rounded-3xl bg-white p-7"><span className={`grid size-12 place-items-center rounded-2xl ${color}`}><Icon /></span><h3 className="mt-6 text-xl font-bold">{title}</h3><p className="mt-2 text-sm text-[#64748b]">{text}</p><a href="#parts" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#1d4ed8]">اطلب تجميعة <ArrowLeft className="size-4" /></a></article>)}</div></div></section>

      <section id="track" className="bg-[#0b2347] py-24 text-white"><div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8"><div><p className="text-sm font-bold text-primary">ابقَ على اطلاع</p><h2 className="mt-3 text-4xl font-black">تتبّع طلبك لحظة بلحظة</h2><p className="mt-4 max-w-lg leading-7 text-white/55">أدخل رقم الطلب لمعرفة حالة الصيانة، التكلفة المتوقعة وموعد الإنجاز.</p><form onSubmit={(e) => { e.preventDefault(); setTracking(true); }} className="mt-8 flex max-w-lg gap-2"><Input required placeholder="مثال: ST-2486" className="h-13 border-white/10 bg-white/10 text-white placeholder:text-white/35" /><Button type="submit" className="h-13 bg-primary px-6 font-bold text-[#071b36]">تتبع <Search /></Button></form></div><div className="rounded-3xl border border-white/10 bg-white/[.06] p-7">{tracking ? <><div className="flex items-center justify-between"><span><small className="text-white/40">الطلب ST-2486</small><b className="mt-1 block text-xl">صيانة لابتوب</b></span><span className="rounded-full bg-[#dbeafe] px-3 py-1 text-xs font-bold text-[#1e40af]">قيد الصيانة</span></div><div className="mt-8 h-2 overflow-hidden rounded-full bg-white/10"><div className="h-full w-2/3 rounded-full bg-primary" /></div><div className="mt-7 grid grid-cols-2 gap-3 text-sm"><TrackStat icon={CircleDollarSign} label="التكلفة المتوقعة" value="320 ر.س" /><TrackStat icon={Clock3} label="موعد الإنجاز" value="غدًا، 5:00 م" /></div></> : <div className="grid min-h-52 place-items-center text-center"><div><PackageSearch className="mx-auto size-12 text-primary" /><p className="mt-4 font-bold">حالة طلبك ستظهر هنا</p></div></div>}</div></div></section>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8"><SectionTitle eyebrow="" title="تجارب العملاء" text="" align="right" /><div className="mt-8 grid gap-5 md:grid-cols-3">{customerReviews.map(([name,type,review]) => <article key={name} className="flex h-full flex-col rounded-3xl border border-[#dbe7f5] bg-white p-7"><div className="flex gap-1 text-[#3b82f6]">{[1,2,3,4,5].map(i => <Star key={i} className="size-4 fill-current" />)}</div><p className="mt-5 flex-1 text-base leading-8">“{review}”</p><p className="mt-5 text-sm font-bold">{name}<span className="mr-2 font-normal text-[#64748b]">{type}</span></p></article>)}</div><div className="mx-auto mt-20 max-w-3xl"><SectionTitle eyebrow="" title="الأسئلة الشائعة" text="" align="right" /><div className="mt-7 divide-y divide-[#dbe7f5]">{[['هل التشخيص مجاني؟','نعم، التشخيص الأولي مجاني. إذا احتاج الجهاز فحصًا معمليًا سنوضح الرسوم مسبقًا.'],['هل يوجد ضمان على الصيانة؟','نعم، يشمل الضمان الخدمة والقطع المستبدلة بحسب نوع الإصلاح.'],['كم تستغرق الصيانة؟','تُنجز معظم الطلبات خلال 24–48 ساعة، ونحدد الوقت المتوقع بعد التشخيص.'],['هل توفرون عقودًا للشركات؟','نعم، نوفر صيانة دورية ودعمًا عن بُعد وزيارات ميدانية بعقود مرنة.']].map(([q,a]) => <details key={q} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between font-bold">{q}<ChevronDown className="size-5 transition group-open:rotate-180" /></summary><p className="pt-3 text-sm leading-7 text-[#64748b]">{a}</p></details>)}</div></div></section>

      <section id="about" className="bg-white py-20"><div className="mx-auto max-w-4xl px-5 text-center lg:px-8"><h2 className="text-3xl font-black sm:text-4xl">من نحن</h2><p className="mx-auto mt-5 max-w-3xl text-lg leading-9 text-[#64748b]">سوفت تيك جهة متخصصة في الدعم الفني وصيانة أجهزة الكمبيوتر وتوفير القطع المناسبة. نحرص على تشخيص واضح، وسعر معروف قبل بدء العمل، وتنفيذ احترافي يضمن للعميل تجربة سهلة وموثوقة من بداية الطلب حتى استلام الجهاز.</p></div></section>

      <footer id="contact" className="bg-[#06162f] text-white"><div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-8"><div><div className="flex items-center gap-3"><span className="grid size-10 place-items-center rounded-xl bg-primary text-[#071b36]"><Cpu /></span><b className="text-xl">سوفت تيك</b></div><p className="mt-4 text-sm leading-7 text-white/45">دعم فني، وصيانة، وقطع كمبيوتر.</p></div><FooterLinks title="الخدمات" links={['دعم عن بُعد','صيانة الكمبيوترات','طلبات القطع','تجميع كمبيوتر']} /><FooterLinks title="روابط مهمة" links={['تتبع الطلب','الأسعار والعروض','الأسئلة الشائعة','من نحن']} /><div><h3 className="font-bold">تواصل معنا</h3><div className="mt-4 space-y-3 text-sm text-white/50"><p className="flex items-center gap-2"><Phone className="size-4 shrink-0 text-primary" /><span dir="ltr">9200 12345</span></p><p className="flex items-center gap-2"><MessageCircle className="size-4 shrink-0 text-primary" /><span dir="ltr">055 123 4567</span></p><p className="flex items-center gap-2"><MapPin className="size-4 text-primary" /> جميع مناطق المملكة العربية السعودية</p></div></div></div><div className="border-t border-white/10 py-6 text-center text-xs text-white/35">© 2026 سوفت تيك. جميع الحقوق محفوظة.</div></footer>
    </main>
  );
}

function EnglishHome({ onArabic }: { onArabic: () => void }) {
  const [support, setSupport] = useState('');
  const [part, setPart] = useState('');
  const [tracking, setTracking] = useState(false);

  function sendOrder(event: React.FormEvent<HTMLFormElement>, kind: 'support' | 'part') {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const prefix = kind === 'support' ? 'en-support' : 'en-part';
    const message = ['New Soft Tech website request', `Request type: ${kind === 'support' ? 'Technical support' : 'Computer part'}`, `${kind === 'support' ? 'Service' : 'Part'}: ${kind === 'support' ? support : part}`, `Name: ${form.get(`${prefix}-name`)}`, `Mobile: ${form.get(`${prefix}-phone`)}`, `Email: ${form.get(`${prefix}-email`)}`, `Payment method: ${form.get(`${prefix}-payment`)}`, 'Prices include 15% VAT'].join('\n');
    window.open(`https://wa.me/966551234567?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  }

  const enServices = ['Remote support', 'Fault diagnosis', 'Data recovery', 'Software and drivers'];
  const enParts = ['Processors', 'Motherboards', 'Graphics cards', 'RAM', 'SSD and HDD drives', 'Chargers and batteries', 'Laptop screens and parts', 'Computer accessories', 'Other part'];
  const enBuilds = [
    [Gamepad2, 'Gaming', 'Powerful performance and stable frame rates', 'bg-[#eaf2ff] text-[#1d4ed8]'],
    [BriefcaseBusiness, 'Work and study', 'Reliable, quiet and fast for daily use', 'bg-[#eff6ff] text-[#1d4ed8]'],
    [Monitor, 'Design and editing', 'Professional performance for design and video editing', 'bg-[#e8efff] text-[#1e40af]'],
    [CircleDollarSign, 'By budget', 'The best value within your budget', 'bg-[#e4f0ff] text-[#2563eb]'],
  ] as const;

  return <main dir="ltr" lang="en" className="min-h-screen overflow-hidden bg-background text-foreground">
    <header className="relative z-50 border-b border-white/10 bg-[#071b36]/95 text-white backdrop-blur-xl"><div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8"><a href="#top" className="flex items-center gap-3"><span className="grid size-11 place-items-center rounded-2xl bg-primary text-[#071b36]"><Cpu className="size-6" /></span><strong className="text-lg">Soft Tech</strong></a><nav className="hidden items-center gap-7 text-sm text-white/70 lg:flex"><a href="#services">Services</a><a href="#maintenance">Maintenance</a><a href="#parts">Parts</a><a href="#builds">PC Builds</a><a href="#track">Track Order</a></nav><div className="flex items-center gap-3"><select aria-label="Select language" value="en" onChange={(event) => event.target.value === 'ar' && onArabic()} className="rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-sm text-white outline-none"><option className="text-[#071b36]" value="ar">العربية</option><option className="text-[#071b36]" value="en">English</option></select><a href="#parts" className="hidden items-center gap-2 text-sm font-medium text-primary sm:flex"><ShoppingCart className="size-4" />Cart</a></div></div></header>

    <section id="top" className="border-b border-[#dbe7f5] bg-white text-[#0f2747]"><div className="mx-auto grid min-h-[560px] max-w-7xl items-center gap-10 px-5 py-12 lg:grid-cols-[1.08fr_.92fr] lg:px-8"><div><h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">Your tech problem<br/><span className="text-primary">Solved with us</span></h1><p className="mt-6 max-w-xl text-lg leading-8 text-[#64748b]">Professional computer support, maintenance and genuine parts delivered to your door—with a clear diagnosis and price before we begin.</p><div className="mt-10 flex flex-wrap gap-6 text-sm text-[#475569]"><span className="flex items-center gap-2"><CheckCircle2 className="size-4 text-[#2563eb]"/>Free initial diagnosis</span><span className="flex items-center gap-2"><CheckCircle2 className="size-4 text-[#2563eb]"/>Maintenance warranty</span></div></div><div className="rounded-[2rem] bg-[#0b2347] p-8 text-white"><p className="text-sm text-white/50">How can we help?</p><div className="mt-7 space-y-3"><a href="#services" className="flex items-center gap-4 rounded-2xl bg-primary/10 p-5"><ShieldCheck className="text-primary"/><span><b className="block">My device needs maintenance</b><small className="text-white/50">Send the issue and let us diagnose it</small></span></a><a href="#parts" className="flex items-center gap-4 rounded-2xl bg-white/[.06] p-5"><Cpu className="text-primary"/><span><b className="block">I need a part</b><small className="text-white/50">We will source the best option</small></span></a></div></div></div></section>

    <section id="services" className="mx-auto max-w-7xl px-5 py-24 lg:px-8"><div className="text-center"><h2 className="text-3xl font-black text-[#1d4ed8]">Soft Tech Services</h2><p className="mt-4 text-[#64748b]">Choose technical support or a computer part, then complete your request.</p></div><div className="mt-12 grid gap-5 lg:grid-cols-2"><EnglishOrderForm kind="support" selection={support} setSelection={setSupport} options={enServices} onSubmit={sendOrder}/><EnglishOrderForm kind="part" selection={part} setSelection={setPart} options={enParts} onSubmit={sendOrder}/></div></section>

    <section id="maintenance" className="bg-white py-24"><div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8"><div><h2 className="text-4xl font-black">We diagnose, explain and repair</h2><p className="mt-4 leading-7 text-[#64748b]">We inspect your device, then send the diagnosis, cost and expected completion time. No repair begins without your approval.</p><ol className="mt-9 space-y-5">{[['01','Receive and diagnose','We record the device details and symptoms, then run a precise technical inspection.'],['02','Price quote','You receive a clear final price and expected completion date before work starts.'],['03','Repair and warranty','Professional repair, full testing and a clear warranty on the service.']].map(([n,t,d])=><li key={n} className="flex gap-5 rounded-2xl border border-[#dbe7f5] p-5"><span className="grid size-11 place-items-center rounded-full border text-xs font-black text-[#1d4ed8]">{n}</span><span><b className="text-lg">{t}</b><p className="mt-2 text-sm leading-7 text-[#64748b]">{d}</p></span></li>)}</ol></div><div className="mx-auto w-full max-w-lg rounded-[2rem] bg-[#0b2347] p-6 text-white sm:p-8"><p className="font-bold text-primary">Maintenance for every device</p><div className="mt-7 grid grid-cols-2 gap-3">{['Desktop PCs','Laptops','Gaming PCs','Upgrades','Routine cleaning','Business contracts'].map(item=><a href="#services" key={item} className="rounded-2xl bg-white/[.06] p-4 text-sm">{item}</a>)}</div></div></div></section>

    <section id="builds" className="bg-[#eaf2fb] py-24"><div className="mx-auto max-w-7xl px-5 lg:px-8"><p className="mx-auto max-w-2xl text-center text-xl leading-8 text-[#64748b]">We select compatible parts, assemble them, and test performance and temperature before delivery.</p><div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">{enBuilds.map(([Icon,title,text,color])=><article key={title} className="rounded-3xl bg-white p-7"><span className={`grid size-12 place-items-center rounded-2xl ${color}`}><Icon /></span><h3 className="mt-6 text-xl font-bold">{title}</h3><p className="mt-2 text-sm text-[#64748b]">{text}</p><a href="#parts" className="mt-6 inline-flex items-center gap-2 font-bold text-[#1d4ed8]">Request a build <ArrowLeft className="size-4 rotate-180" /></a></article>)}</div></div></section>

    <section id="track" className="bg-[#0b2347] py-24 text-white"><div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:px-8"><div><p className="font-bold text-primary">Stay updated</p><h2 className="mt-3 text-4xl font-black">Track your order</h2><p className="mt-4 text-white/55">Enter the order number to view maintenance status, estimated cost and completion time.</p><form onSubmit={(e)=>{e.preventDefault();setTracking(true)}} className="mt-8 flex gap-2"><Input required placeholder="Example: ST-2486" className="h-13 bg-white/10 text-white"/><Button className="h-13 bg-primary text-[#071b36]">Track</Button></form></div><div className="grid min-h-52 place-items-center rounded-3xl bg-white/[.06] p-7 text-center"><PackageSearch className="mx-auto size-12 text-primary"/><p className="mt-4 font-bold">{tracking ? 'Order ST-2486 is being serviced' : 'Your order status will appear here'}</p></div></div></section>

    <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8"><h2 className="text-4xl font-black">Customer reviews</h2><div className="mt-8 grid gap-5 md:grid-cols-3">{englishReviews.map(([name,type,review])=><article key={name} className="flex h-full flex-col rounded-3xl border border-[#dbe7f5] bg-white p-7"><div className="flex gap-1 text-[#3b82f6]">{[1,2,3,4,5].map(i=><Star key={i} className="size-4 fill-current"/>)}</div><p className="mt-5 flex-1 leading-8">“{review}”</p><p className="mt-5 text-sm font-bold">{name}<span className="ml-2 font-normal text-[#64748b]">{type}</span></p></article>)}</div></section>
    <section id="about" className="bg-white py-20"><div className="mx-auto max-w-4xl px-5 text-center"><h2 className="text-4xl font-black">About us</h2><p className="mt-5 text-lg leading-9 text-[#64748b]">Soft Tech specializes in technical support, computer maintenance and sourcing compatible parts. We provide a clear diagnosis, an agreed price before work starts and professional service from request to delivery.</p></div></section>
    <footer className="bg-[#06162f] text-white"><div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:grid-cols-3 lg:px-8"><div><b className="text-xl">Soft Tech</b><p className="mt-4 text-sm text-white/50">Technical support, maintenance and computer parts.</p></div><div><h3 className="font-bold">Services</h3><p className="mt-4 text-sm leading-8 text-white/50">Remote support<br/>Computer maintenance<br/>Parts requests<br/>PC builds</p></div><div><h3 className="font-bold">Contact us</h3><p className="mt-4 flex items-center gap-2 text-white/50"><Phone className="size-4 text-primary"/><span>9200 12345</span></p><p className="mt-3 flex items-center gap-2 text-white/50"><MessageCircle className="size-4 text-primary"/><span>055 123 4567</span></p></div></div><div className="border-t border-white/10 py-6 text-center text-xs text-white/35">© 2026 Soft Tech. All rights reserved.</div></footer>
  </main>;
}

function EnglishOrderForm({ kind, selection, setSelection, options, onSubmit }: { kind: 'support' | 'part'; selection: string; setSelection: (value: string) => void; options: string[]; onSubmit: (event: React.FormEvent<HTMLFormElement>, kind: 'support' | 'part') => void }) {
  const prefix = kind === 'support' ? 'en-support' : 'en-part';
  const FormIcon = kind === 'support' ? Headphones : Cpu;
  return <form id={kind === 'part' ? 'parts' : undefined} onSubmit={(event)=>onSubmit(event,kind)} className="rounded-[2rem] border border-[#dbe7f5] bg-white p-6 shadow-[0_20px_50px_rgba(30,64,175,.08)] sm:p-9"><div className="flex items-center gap-3"><span className="grid size-11 place-items-center rounded-xl bg-[#eff6ff] text-[#1d4ed8]"><FormIcon /></span><h2 className="text-xl font-black">{kind === 'support' ? 'Technical support' : 'Order computer parts'}</h2></div><div className="mt-6 space-y-4"><Field label={kind === 'support' ? 'Support service' : 'Computer part'}><select required value={selection} onChange={(e)=>setSelection(e.target.value)} className="form-control h-12"><option value="">Select from the list</option>{options.map(option=><option key={option}>{option}</option>)}</select></Field><Field label="Name"><Input required name={`${prefix}-name`} placeholder="Full name" className="form-control h-12"/></Field><Field label="Mobile number"><Input required name={`${prefix}-phone`} placeholder="05xxxxxxxx" className="form-control h-12"/></Field><Field label="Email"><Input required type="email" name={`${prefix}-email`} placeholder="name@example.com" className="form-control h-12"/></Field><Field label="Payment method"><select required name={`${prefix}-payment`} defaultValue="" className="form-control h-12"><option value="" disabled>Select payment method</option><option>Apple Pay</option><option>Mada</option><option>Visa</option><option>Mastercard</option></select></Field><p className="rounded-xl bg-[#eff6ff] px-4 py-3 text-sm text-[#1e40af]">Prices include 15% VAT</p><Button type="submit" className="h-12 w-full bg-[#0b2347] font-bold text-white">Submit now</Button></div></form>;
}

function SectionTitle({ eyebrow, title, text, align = 'center' }: { eyebrow: string; title: string; text: string; align?: 'center' | 'right' }) { return <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-xl text-right'}>{eyebrow && <p className="text-sm font-black text-[#1d4ed8]">{eyebrow}</p>}<h2 className={eyebrow ? 'mt-3 text-3xl font-black tracking-tight sm:text-4xl' : 'text-3xl font-black tracking-tight sm:text-4xl'}>{title}</h2>{text && <p className="mt-4 leading-7 text-[#64748b]">{text}</p>}</div>; }
function Field({ label, children }: { label: string; children: React.ReactNode }) { return <label className="block"><span className="mb-2 block text-sm font-bold">{label}</span>{children}</label>; }
function IdentityFields({ prefix }: { prefix: string }) { return <><Field label="الاسم"><Input required name={`${prefix}-name`} autoComplete="name" placeholder="الاسم الكامل" className="form-control h-12" /></Field><Field label="رقم الجوال"><Input required name={`${prefix}-phone`} autoComplete="tel" inputMode="tel" placeholder="05xxxxxxxx" className="form-control h-12" /></Field><Field label="البريد الإلكتروني"><Input required name={`${prefix}-email`} autoComplete="email" type="email" placeholder="name@example.com" className="form-control h-12" /></Field></>; }
function PaymentField({ prefix }: { prefix: string }) { return <><Field label="طريقة الدفع"><select required name={`${prefix}-payment`} defaultValue="" className="form-control h-12 text-base"><option value="" disabled>اختر طريقة الدفع</option><option value="Apple Pay">Apple Pay</option><option value="مدى">مدى</option><option value="Visa">Visa</option><option value="Mastercard">Mastercard</option></select></Field><p className="rounded-xl bg-[#eff6ff] px-4 py-3 text-sm font-medium text-[#1e40af]">الأسعار تشمل ضريبة القيمة المضافة 15٪</p></>; }
function InlineSuccess({ onReset }: { onReset: () => void }) { return <div className="grid min-h-72 place-items-center text-center"><div><span className="mx-auto grid size-16 place-items-center rounded-full bg-[#eaf3ff] text-[#1d4ed8]"><CheckCircle2 className="size-8" /></span><h3 className="mt-5 text-xl font-black">تم تجهيز طلبك</h3><p className="mt-2 text-sm text-[#64748b]">أرسل الرسالة المفتوحة في واتساب لتأكيد الطلب.</p><Button type="button" onClick={onReset} variant="outline" className="mt-5">طلب جديد</Button></div></div>; }
function TrackStat({ icon: Icon, label, value }: { icon: React.ComponentType<{className?: string}>; label: string; value: string }) { return <div className="rounded-2xl bg-white/[.06] p-4"><Icon className="size-5 text-primary" /><small className="mt-3 block text-white/40">{label}</small><b className="mt-1 block">{value}</b></div>; }
function FooterLinks({ title, links }: { title: string; links: string[] }) { return <div><h3 className="font-bold">{title}</h3><ul className="mt-4 space-y-3 text-sm text-white/50">{links.map(link => <li key={link}><a href={link === 'دعم عن بُعد' ? '#services' : link === 'من نحن' ? '#about' : '#'} className="transition hover:text-primary">{link}</a></li>)}</ul></div>; }
