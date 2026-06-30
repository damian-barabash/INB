// Default content for INB — PL verbatim from inbi.pl + EN translation.
// DB (content table) overrides any key by language. This is the fallback source of truth.
// Each key: { pl, en }. Lists are enumerated as separate keys (…liN).

export const DEFAULTS = {
  // ---------- BRAND / NAV ----------
  'brand.sub':            { pl: 'INSURANCE', en: 'INSURANCE' },
  'nav.about':            { pl: 'O nas', en: 'About us' },
  'nav.management':       { pl: 'Władze', en: 'Management' },
  'nav.experience':       { pl: 'Doświadczenie', en: 'Experience' },
  'nav.offer':            { pl: 'Nasza oferta', en: 'Our offer' },
  'nav.tenders':          { pl: 'Zamówienia publiczne', en: 'Public tenders' },
  'nav.contact':          { pl: 'Kontakt', en: 'Contact' },

  // ---------- HOME ----------
  'home.hero.kicker':     { pl: 'Broker ubezpieczeniowy', en: 'Insurance broker' },
  'home.hero.title1':     { pl: 'Jesteśmy prekursorem', en: 'We are a pioneer of' },
  'home.hero.title2':     { pl: 'innowacyjnych rozwiązań', en: 'innovative solutions' },
  'home.hero.lead':       {
    pl: 'Dostarczamy naszym Klientom kompetentną i wiarygodną ochronę ubezpieczeniową ich aktywów i interesów.',
    en: 'We provide our Clients with competent and reliable insurance protection of their assets and interests.',
  },
  'home.hero.cta':        { pl: 'Konsultacja', en: 'Consultation' },

  'home.stat1.num':       { pl: '20+', en: '20+' },
  'home.stat1.label':     { pl: 'lat na rynku ubezpieczeń', en: 'years on the insurance market' },
  'home.stat2.num':       { pl: '1999', en: '1999' },
  'home.stat2.label':     { pl: 'od tego roku w branży', en: 'in the industry since' },
  'home.stat3.num':       { pl: '100%', en: '100%' },
  'home.stat3.label':     { pl: 'indywidualne podejście', en: 'individual approach' },
  'home.stat4.num':       { pl: '24/7', en: '24/7' },
  'home.stat4.label':     { pl: 'monitoring szkód', en: 'claims monitoring' },

  'home.belief':          {
    pl: 'Wierzymy, że nasza wiedza w połączeniu z elastycznością serwisu stworzonego dla naszych Klientów, gwarantują usługę na najwyższym poziomie.',
    en: 'We believe that our knowledge, combined with the flexibility of the service created for our Clients, guarantees a service at the highest level.',
  },
  'home.group':           {
    pl: 'Działamy jako GRUPA INB, powiązanych kapitałowo firm, zajmujących się diagnozą oraz optymalizacją ryzyka przedsiębiorstw.',
    en: 'We operate as GRUPA INB — a group of capital-linked companies dealing with the diagnosis and optimisation of enterprise risk.',
  },
  'home.offer':           {
    pl: 'Oferujemy nowoczesne technologie i innowacyjne rozwiązania, poprzez które nasi Klienci osiągają wymierne korzyści biznesowe.',
    en: 'We offer modern technologies and innovative solutions through which our Clients achieve measurable business benefits.',
  },
  'home.team':            {
    pl: 'INBI to zespół najlepszych specjalistów z doświadczeniem zdobytym w pracy dla międzynarodowych brokerów.',
    en: 'INBI is a team of the best specialists with experience gained working for international brokers.',
  },
  'home.cooperation':     {
    pl: 'Współpraca z INBI procentuje sprawną likwidacją ewentualnych szkód oraz skutecznym rozwiązywaniem wszelkich spraw konfliktowych z towarzystwami ubezpieczeń.',
    en: 'Cooperation with INBI pays off through efficient claims settlement and effective resolution of any disputes with insurance companies.',
  },

  'home.why.title':       { pl: 'Dlaczego warto nam zaufać?', en: 'Why can you trust us?' },

  'home.card1.title':     { pl: 'Audyt ubezpieczeniowy', en: 'Insurance audit' },
  'home.card1.body':      {
    pl: 'Każdy nasz audyt posiada zalecenia dotyczące poprawy bezpieczeństwa i podwyższenia poziomu ochrony ubezpieczeniowej.',
    en: 'Each of our audits includes recommendations for improving safety and raising the level of insurance protection.',
  },
  'home.card2.title':     { pl: 'Likwidacja szkód', en: 'Claims settlement' },
  'home.card2.body':      {
    pl: 'Wśród naszych Klientów wprowadziliśmy zasadę, że szkodę zgłaszamy osobiście, niezwłocznie po otrzymaniu informacji.',
    en: 'Among our Clients we have introduced a rule that we report a claim personally, immediately after receiving the information.',
  },
  'home.card3.title':     { pl: 'Negocjacje programu', en: 'Programme negotiation' },
  'home.card3.body':      {
    pl: 'INBI koncentruje się na przygotowaniu programu ubezpieczeniowego, który zagwarantuje Klientowi optymalizację kosztów.',
    en: 'INBI focuses on preparing an insurance programme that guarantees the Client cost optimisation.',
  },

  'home.process.title':   { pl: 'Jak wygląda proces ubezpieczenia?', en: 'How does the insurance process work?' },
  'home.process.sub':     { pl: 'Z nami zrozumienie ubezpieczeń jest proste.', en: 'Understanding insurance is simple with us.' },
  'home.step1.title':     { pl: 'Audyt i analiza ryzyk', en: 'Audit and risk analysis' },
  'home.step1.body':      { pl: 'Identyfikujemy i analizujemy ryzyka ubezpieczeniowe Klienta.', en: 'We identify and analyse the Client’s insurance risks.' },
  'home.step2.title':     { pl: 'Koncepcja i negocjacje', en: 'Concept and negotiation' },
  'home.step2.body':      { pl: 'Przygotowujemy koncepcję programu i negocjujemy najlepsze warunki.', en: 'We prepare the programme concept and negotiate the best terms.' },
  'home.step3.title':     { pl: 'Wdrożenie i obsługa', en: 'Implementation and service' },
  'home.step3.body':      { pl: 'Wdrażamy program i zapewniamy stałą obsługę oraz likwidację szkód.', en: 'We implement the programme and provide ongoing service and claims handling.' },

  'home.closing':         {
    pl: 'Dokładamy wszelkich starań, by świadczone przez nas usługi zawsze były indywidualnie dostosowywane do potrzeb i zasobów finansowych naszych Klientów.',
    en: 'We make every effort to ensure that the services we provide are always individually tailored to the needs and financial resources of our Clients.',
  },

  // ---------- ABOUT (o-nas) ----------
  'about.title':          { pl: 'O nas', en: 'About us' },
  'about.p1':             {
    pl: 'INBI Spółka z o.o. jest firmą świadczącą usługi doradztwa i pośrednictwa ubezpieczeniowego. Jako broker ubezpieczeniowy dostarczamy naszym Klientom kompetentną i wiarygodną ochronę ubezpieczeniową ich aktywów i interesów. We współpracy stawiamy na jakość, doświadczenie i uczciwość. Wierzymy, że nasza wiedza w połączeniu z elastycznością serwisu stworzonego dla naszych Klientów, gwarantują usługę na najwyższym poziomie.',
    en: 'INBI Spółka z o.o. is a company providing insurance advisory and brokerage services. As an insurance broker, we provide our Clients with competent and reliable insurance protection of their assets and interests. In our cooperation we focus on quality, experience and integrity. We believe that our knowledge, combined with the flexibility of the service created for our Clients, guarantees a service at the highest level.',
  },
  'about.p2':             {
    pl: 'Działamy jako GRUPA INB, powiązanych kapitałowo firm, zajmujących się diagnozą oraz optymalizacją ryzyka przedsiębiorstw. Jednym z podmiotów grupy jest INB Consulting Sp. z o. o., oferująca wszelkiego rodzaju nowoczesne technologie i innowacyjne rozwiązania, poprzez które nasi Klienci osiągają wymierne korzyści biznesowe.',
    en: 'We operate as GRUPA INB — a group of capital-linked companies dealing with the diagnosis and optimisation of enterprise risk. One of the entities of the group is INB Consulting Sp. z o. o., offering all kinds of modern technologies and innovative solutions through which our Clients achieve measurable business benefits.',
  },
  'about.list.title':     { pl: 'INBI to:', en: 'INBI means:' },
  'about.li1':            { pl: 'Pracownicy z wieloletnim doświadczeniem', en: 'Staff with many years of experience' },
  'about.li2':            { pl: 'Gwarancja wysokiej jakości usług', en: 'A guarantee of high-quality services' },
  'about.li3':            { pl: 'Prekursor wielu innowacyjnych rozwiązań', en: 'A pioneer of many innovative solutions' },
  'about.li4':            { pl: 'Indywidualne podejście do każdego Klienta', en: 'An individual approach to every Client' },
  'about.li5':            { pl: 'Możliwość monitorowania szkód w czasie rzeczywistym', en: 'Real-time claims monitoring' },
  'about.li6':            { pl: 'Współpraca z międzynarodowymi brokerami', en: 'Cooperation with international brokers' },

  // ---------- MANAGEMENT (wladze) ----------
  'wladze.title':         { pl: 'Władze', en: 'Management' },
  'wladze.name':          { pl: 'Arkadiusz Przybyszewski', en: 'Arkadiusz Przybyszewski' },
  'wladze.role':          { pl: 'Prezes Zarządu', en: 'President of the Board' },
  'wladze.bio1':          {
    pl: 'Absolwent Podyplomowych Studiów Diagnostyki Ryzyk i Likwidacji Szkód Ubezpieczeniowych w Ubezpieczeniach Majątkowych i Osobowych Akademii Finansów w Warszawie.',
    en: 'Graduate of Postgraduate Studies in Risk Diagnostics and Insurance Claims Settlement in Property and Personal Insurance at the Academy of Finance in Warsaw.',
  },
  'wladze.bio2':          {
    pl: 'Z branżą ubezpieczeniową związany od 1999 r. W latach 2003-2019 związany z Europejskim Konsorcjum Ubezpieczeniowym Sp. z o. o. gdzie pełnił funkcję Członka Zarządu. W okresie 2019-2020 r. związany z WDB S.A. gdzie pełnił funkcję Członka Zarządu. Podczas ponad siedemnastoletniej pracy uczestniczył w przygotowaniu i realizacji programów ubezpieczenia dla największych instytucji publicznych między innymi Straży Granicznej, Izby Celnej, Kasy Rolniczego Ubezpieczenia Społecznego oraz opracowaniu nowatorskich produktów ochronnych, niedostępnych standardowo na rynku ubezpieczeń. Posiada doświadczenie w przeprowadzaniu postępowań przetargowych zgodnie z ustawą Prawo zamówień publicznych. Organizator szkoleń związanych z problematyką ubezpieczeń. Doświadczenie w opracowaniu nowatorskich produktów ochronnych, niedostępnych standardowo na rynku ubezpieczeń, jak również opracowywanie i wdrażanie konkurencyjnych rozwiązań w zakresie produktów ubezpieczeniowych.',
    en: 'Connected with the insurance industry since 1999. In 2003-2019 associated with Europejskie Konsorcjum Ubezpieczeniowe Sp. z o. o., where he served as a Member of the Board. In 2019-2020 associated with WDB S.A., where he served as a Member of the Board. During more than seventeen years of work he participated in the preparation and implementation of insurance programmes for the largest public institutions, including the Border Guard, the Customs Chamber and the Agricultural Social Insurance Fund, as well as in developing innovative protection products not normally available on the insurance market. He has experience in conducting tender procedures in accordance with the Public Procurement Law. Organiser of training related to insurance issues. Experience in developing innovative protection products not normally available on the insurance market, as well as designing and implementing competitive solutions in the field of insurance products.',
  },

  // ---------- EXPERIENCE (doswiadczenie) ----------
  'exp.title':            { pl: 'Doświadczenie', en: 'Experience' },
  'exp.p1':               {
    pl: 'Zespół najlepszych specjalistów z wieloletnim doświadczeniem zdobytym w pracy dla międzynarodowych brokerów, którzy brali udział w tworzeniu oraz wdrażaniu innowacyjnych produktów przygotowanych specjalnie na potrzeby konkretnej branży. Wieloletnie doświadczenie członków naszego zespołu w aranżowaniu i obsłudze umów ubezpieczenia dla Klientów o zróżnicowanych potrzebach oraz strukturze ryzyka, są doskonałą przesłanką, gwarantującą sukces proponowanego przedsięwzięcia. Oprócz możliwości korzystania z wiedzy i doświadczenia profesjonalistów w zakresie właściwego pokrycia ryzyk oraz korzyści związanych ze stałym monitoringiem rynku ubezpieczeń, współpraca z INBI Sp. z o.o. procentuje sprawną likwidacją ewentualnych szkód oraz skutecznym rozwiązywaniem wszelkich spraw konfliktowych z towarzystwami ubezpieczeń.',
    en: 'A team of the best specialists with many years of experience gained working for international brokers, who took part in creating and implementing innovative products prepared specifically for the needs of a given industry. The many years of experience of our team members in arranging and servicing insurance contracts for Clients with diverse needs and risk structures are an excellent premise guaranteeing the success of the proposed undertaking. In addition to the ability to draw on the knowledge and experience of professionals in the field of proper risk coverage and the benefits of constant monitoring of the insurance market, cooperation with INBI Sp. z o.o. pays off through efficient claims settlement and effective resolution of any disputes with insurance companies.',
  },
  'exp.p2':               {
    pl: 'W przypadku obsługi programów globalnych INBI współpracuje z międzynarodowymi sieciami brokerskimi.',
    en: 'For the servicing of global programmes, INBI cooperates with international broker networks.',
  },

  // ---------- OFFER (nasza oferta) ----------
  'offer.title':          { pl: 'Nasza oferta', en: 'Our offer' },
  'offer.s1.title':       { pl: 'Audyt ubezpieczeniowy — identyfikacja i analiza ryzyk ubezpieczeniowych', en: 'Insurance audit — identification and analysis of insurance risks' },
  'offer.s1.body':        {
    pl: 'Na początku współpracy oferujemy każdemu Klientowi analizę ochrony ubezpieczeniowej, opartej na weryfikacji zapisów zawartych umów ubezpieczenia pod kątem występujących u Klienta ryzyk, związanych z prowadzeniem działalności gospodarczej i posiadanym mieniem. Każdy nasz audyt posiada zalecenia dotyczące poprawy bezpieczeństwa i podwyższenia poziomu ochrony ubezpieczeniowej ze wskazaniem najkorzystniejszych, w sferze ubezpieczeń rozwiązań optymalizacji ochrony ubezpieczeniowej i kosztów ubezpieczenia.',
    en: 'At the start of our cooperation we offer every Client an analysis of insurance protection, based on a review of the provisions of concluded insurance contracts in terms of the risks present at the Client, related to running a business and to owned property. Each of our audits includes recommendations for improving safety and raising the level of insurance protection, indicating the most advantageous insurance solutions for optimising protection and insurance costs.',
  },
  'offer.s2.title':       { pl: 'Przygotowanie koncepcji programu ubezpieczeniowego', en: 'Preparation of the insurance programme concept' },
  'offer.s2.body':        {
    pl: 'Na podstawie przeprowadzonej analizy ryzyk występujących u Klienta, przygotowujemy koncepcje programu ubezpieczeniowego zawierające pełen zakres ubezpieczenia z rozszerzeniem klauzul dodatkowych przystosowanych do specyfiki działalności. Przygotowana koncepcja posłuży do negocjacji warunków ubezpieczenia z ubezpieczycielem.',
    en: 'Based on the analysis of the risks present at the Client, we prepare an insurance programme concept covering the full scope of insurance with additional clauses tailored to the specifics of the business. The prepared concept is used to negotiate the insurance terms with the insurer.',
  },
  'offer.s3.title':       { pl: 'Negocjacje programu', en: 'Programme negotiation' },
  'offer.s3.body':        {
    pl: 'INBI koncentruje się na przygotowaniu programu ubezpieczeniowego, który poprzez negocjacje nowych warunków lub renegocjacje obowiązujących umów ubezpieczenia zagwarantuje Klientowi optymalizację kosztów ubezpieczenia. Nasz zespół składa się z doświadczonych brokerów pracujących na rynku ubezpieczeniowym od ponad 20 lat. Nasi brokerzy uczestniczyli przy negocjacji programów ubezpieczeniowych dla największych podmiotów na rynku krajowym i zagranicznym.',
    en: 'INBI focuses on preparing an insurance programme that, through the negotiation of new terms or the renegotiation of existing insurance contracts, guarantees the Client the optimisation of insurance costs. Our team consists of experienced brokers working on the insurance market for over 20 years. Our brokers have participated in negotiating insurance programmes for the largest entities on the domestic and foreign markets.',
  },
  'offer.s4.title':       { pl: 'Wdrożenie programu', en: 'Programme implementation' },
  'offer.s4.body':        {
    pl: 'Po akceptacji przez Klienta programu ubezpieczeniowego ostatecznie aktualizujemy dane do ubezpieczenia i przygotowujemy wnioski do ubezpieczycieli. Do naszych zadań należy sprawdzenie pod względem formalnym i faktycznym poprawności wystawionych przez ubezpieczyciela umów/polis ubezpieczeniowych. Kolejnym zadaniem jest przygotowanie informatorów zawierających instrukcję postępowania w przypadku wystąpienia szkody oraz nabycia lub zbycia majątku.',
    en: 'After the Client accepts the insurance programme, we finalise the insurance data and prepare applications to the insurers. Our tasks include checking the formal and factual correctness of the insurance contracts/policies issued by the insurer. The next task is preparing guides containing instructions on how to proceed in the event of a claim and the acquisition or disposal of property.',
  },
  'offer.s5.title':       { pl: 'Obsługa programu ubezpieczeniowego', en: 'Insurance programme servicing' },
  'offer.s5.intro':       { pl: 'Obsługa programu składa się w szczególności z następujących zagadnień:', en: 'Programme servicing consists in particular of the following:' },
  'offer.s5.li1':         { pl: 'formułowanie odpowiednich roszczeń odszkodowawczych do ubezpieczycieli', en: 'formulating appropriate claims for compensation to insurers' },
  'offer.s5.li2':         { pl: 'sprawowanie nadzoru nad prawidłową, co do zasady i terminowości realizacją odszkodowań przez towarzystwo ubezpieczeniowe', en: 'supervising the correct and timely payment of compensation by the insurance company' },
  'offer.s5.li3':         { pl: 'monitoring zmian majątku (doubezpieczenie, czynności związane z rozliczeniem składki z tytułu zbycia ubezpieczonego mienia)', en: 'monitoring changes in property (additional insurance, settlement of premiums on the disposal of insured property)' },
  'offer.s5.li4':         { pl: 'monitoring terminów płatności rat i wysokości składek do zapłaty', en: 'monitoring instalment payment deadlines and the amounts of premiums due' },
  'offer.s5.li5':         { pl: 'przygotowanie niezbędnych dokumentów dotyczących realizowanych ubezpieczeń np. cesji praw', en: 'preparing the necessary documents relating to the insurance, e.g. assignments of rights' },
  'offer.s5.intro2':      { pl: 'Świadczenie dodatkowych usług w zależności od potrzeb:', en: 'Provision of additional services depending on needs:' },
  'offer.s5.li6':         { pl: 'doradztwo w zakresie ubezpieczenia ryzyk ponadstandardowych', en: 'advice on insuring non-standard risks' },
  'offer.s5.li7':         { pl: 'bieżąca analiza rynku ubezpieczeniowego pod kątem tendencji zachodzących zmian, mających lub mogących mieć znaczenie albo zastosowanie w ubezpieczeniu', en: 'ongoing analysis of the insurance market for trends that have or may have significance or application in insurance' },
  'offer.s6.title':       { pl: 'Likwidacja szkód', en: 'Claims settlement' },
  'offer.s6.body':        {
    pl: 'W przypadku wszelkiego rodzaju szkód istotne jest sprawne i właściwe zgłaszanie ich do Towarzystw Ubezpieczeniowych. Z doświadczeń naszych wynika, iż błędy popełnione na tym etapie skutkują zaniżeniem wypłaty odszkodowania lub całkowitym jej brakiem. Dlatego wśród naszych Klientów wprowadziliśmy zasadę, że szkodę zgłaszamy osobiście, niezwłocznie po otrzymaniu informacji.',
    en: 'For all types of claims, it is essential to report them efficiently and correctly to the Insurance Companies. Our experience shows that mistakes made at this stage result in an understated payout of compensation or its complete absence. That is why, among our Clients, we have introduced a rule that we report a claim personally, immediately after receiving the information.',
  },
  'offer.s7.title':       { pl: 'Szkolenia z zakresu ubezpieczeń dostosowane do potrzeb Klienta:', en: 'Insurance training tailored to the Client’s needs:' },
  'offer.s7.li1':         { pl: 'specjalistyczne szkolenia przeznaczone dla związków branżowych, grup zawodowych, zarządów spółek i jednostek administracji publicznej', en: 'specialist training for industry associations, professional groups, company boards and public administration units' },
  'offer.s7.li2':         { pl: 'wystąpienia na konferencjach naukowych, branżowych', en: 'presentations at scientific and industry conferences' },
  'offer.s7.li3':         { pl: 'szkolenia informacyjne dotyczące nowych, dostępnych na rynku ubezpieczeniowym', en: 'informational training on new products available on the insurance market' },
  'offer.s8.title':       { pl: 'Obsługiwane ubezpieczenia:', en: 'Insurance lines we handle:' },
  'offer.ins1':           { pl: 'Ubezpieczenie mienia', en: 'Property insurance' },
  'offer.ins2':           { pl: 'Ubezpieczenie sprzętu elektronicznego', en: 'Electronic equipment insurance' },
  'offer.ins3':           { pl: 'Ubezpieczenie maszyn od awarii', en: 'Machinery breakdown insurance' },
  'offer.ins4':           { pl: 'Ubezpieczenie maszyn od szkód elektrycznych', en: 'Machinery electrical damage insurance' },
  'offer.ins5':           { pl: 'Ubezpieczenie mienia w transporcie', en: 'Goods-in-transit insurance' },
  'offer.ins6':           { pl: 'Ubezpieczenie odpowiedzialności cywilnej', en: 'Civil liability insurance' },
  'offer.ins7':           { pl: 'Ubezpieczenie odpowiedzialności cywilnej Zarządu', en: 'Directors & Officers liability insurance' },
  'offer.ins8':           { pl: 'Ubezpieczenie odpowiedzialności cywilnej przewoźnika', en: 'Carrier’s civil liability insurance' },
  'offer.ins9':           { pl: 'Ubezpieczenie odpowiedzialności cywilnej spedytora', en: 'Freight forwarder’s civil liability insurance' },
  'offer.ins10':          { pl: 'Ubezpieczenia odpowiedzialności cywilnej zawodowej', en: 'Professional civil liability insurance' },
  'offer.ins11':          { pl: 'Ubezpieczenie mienia w budowie i montażu', en: 'Construction and erection all-risk insurance' },
  'offer.ins12':          { pl: 'Ubezpieczenia komunikacyjne', en: 'Motor insurance' },
  'offer.ins13':          { pl: 'Ubezpieczenia finansowe', en: 'Financial insurance' },
  'offer.ins14':          { pl: 'Ubezpieczenia zdrowotne', en: 'Health insurance' },
  'offer.ins15':          { pl: 'Ubezpieczenia grupowe na życie', en: 'Group life insurance' },
  'offer.closing':        {
    pl: 'Dokładamy wszelkich starań, by świadczone przez nas usługi zawsze były indywidualnie dostosowywane do potrzeb i zasobów finansowych naszych Klientów.',
    en: 'We make every effort to ensure that the services we provide are always individually tailored to the needs and financial resources of our Clients.',
  },

  // ---------- PUBLIC TENDERS (zamówienia publiczne) ----------
  'zam.title':            { pl: 'Zamówienia publiczne', en: 'Public tenders' },
  'zam.lead':             {
    pl: 'Wspieramy jednostki sektora publicznego w przygotowaniu i przeprowadzeniu postępowań na ubezpieczenia, zgodnie z ustawą Prawo zamówień publicznych.',
    en: 'We support public sector entities in preparing and conducting insurance tenders in accordance with the Public Procurement Law.',
  },
  'zam.p1':               {
    pl: 'Posiadamy wieloletnie doświadczenie w obsłudze programów ubezpieczeniowych dla największych instytucji publicznych, między innymi Straży Granicznej, Izby Celnej oraz Kasy Rolniczego Ubezpieczenia Społecznego. Znamy specyfikę sektora publicznego i wymogi formalne stawiane przez ustawę Prawo zamówień publicznych.',
    en: 'We have many years of experience servicing insurance programmes for the largest public institutions, including the Border Guard, the Customs Chamber and the Agricultural Social Insurance Fund. We know the specifics of the public sector and the formal requirements of the Public Procurement Law.',
  },
  'zam.p2':               {
    pl: 'Jako broker przygotowujemy opis przedmiotu zamówienia, doradzamy przy wyborze trybu postępowania, wspieramy komisję przetargową na każdym etapie oraz nadzorujemy realizację umowy ubezpieczenia po rozstrzygnięciu postępowania.',
    en: 'As a broker, we prepare the description of the subject of the contract, advise on the choice of procedure, support the tender committee at every stage and supervise the performance of the insurance contract after the award.',
  },
  'zam.c1.title':         { pl: 'Opis przedmiotu zamówienia', en: 'Description of the contract' },
  'zam.c1.body':          { pl: 'Przygotowanie szczegółowej specyfikacji ochrony ubezpieczeniowej oraz kryteriów oceny ofert.', en: 'Preparation of a detailed specification of insurance protection and bid-evaluation criteria.' },
  'zam.c2.title':         { pl: 'Doradztwo proceduralne', en: 'Procedural advisory' },
  'zam.c2.body':          { pl: 'Wybór trybu postępowania i wsparcie merytoryczne zgodne z ustawą Prawo zamówień publicznych.', en: 'Selection of the procedure and substantive support compliant with the Public Procurement Law.' },
  'zam.c3.title':         { pl: 'Wsparcie komisji przetargowej', en: 'Tender committee support' },
  'zam.c3.body':          { pl: 'Udział w pracach komisji, ocena ofert oraz przygotowanie wyjaśnień i odpowiedzi dla wykonawców.', en: 'Participation in the committee, bid evaluation and preparation of clarifications and answers for contractors.' },
  'zam.c4.title':         { pl: 'Nadzór nad realizacją umowy', en: 'Contract supervision' },
  'zam.c4.body':          { pl: 'Monitoring realizacji umowy ubezpieczenia oraz obsługa i likwidacja szkód po rozstrzygnięciu.', en: 'Monitoring the insurance contract and handling claims after the award.' },
  'zam.closing':          {
    pl: 'Zapraszamy jednostki administracji publicznej, spółki komunalne oraz podmioty zobowiązane do stosowania ustawy Prawo zamówień publicznych do współpracy.',
    en: 'We invite public administration units, municipal companies and entities obliged to apply the Public Procurement Law to cooperate.',
  },

  // ---------- CHART (donut on Doświadczenie) ----------
  'chart.title':          { pl: 'Struktura obsługiwanych ubezpieczeń', en: 'Structure of insurance lines we handle' },
  'chart.sub':            { pl: '15 rodzajów ubezpieczeń w 5 kategoriach — najedź, aby zobaczyć udział.', en: '15 insurance lines across 5 categories — hover to see the share.' },
  'chart.cat1':           { pl: 'Majątkowe', en: 'Property' },
  'chart.cat2':           { pl: 'Odpowiedzialność cywilna', en: 'Civil liability' },
  'chart.cat3':           { pl: 'Komunikacyjne', en: 'Motor' },
  'chart.cat4':           { pl: 'Finansowe', en: 'Financial' },
  'chart.cat5':           { pl: 'Zdrowotne i na życie', en: 'Health & life' },
  'chart.unit':           { pl: 'rodzajów', en: 'lines' },

  // ---------- FAQ (accordion on Oferta) ----------
  'faq.title':            { pl: 'Najczęstsze pytania', en: 'Frequently asked questions' },
  'faq.q1':               { pl: 'Ile kosztuje współpraca z brokerem?', en: 'How much does working with a broker cost?' },
  'faq.a1':               { pl: 'Wynagrodzenie brokera pochodzi z prowizji wypłacanej przez zakład ubezpieczeń — dla naszych Klientów usługi doradcze pozostają bezpłatne.', en: 'The broker’s remuneration comes from a commission paid by the insurer — for our Clients the advisory services remain free of charge.' },
  'faq.q2':               { pl: 'Czym broker różni się od agenta?', en: 'How is a broker different from an agent?' },
  'faq.a2':               { pl: 'Broker reprezentuje Klienta i działa w jego interesie, negocjując warunki z wieloma ubezpieczycielami. Agent reprezentuje konkretny zakład ubezpieczeń.', en: 'A broker represents the Client and acts in their interest, negotiating terms with many insurers. An agent represents a specific insurance company.' },
  'faq.q3':               { pl: 'Jak wygląda rozpoczęcie współpracy?', en: 'What does starting cooperation look like?' },
  'faq.a3':               { pl: 'Zaczynamy od bezpłatnego audytu obecnej ochrony ubezpieczeniowej i analizy ryzyk, na podstawie których przygotowujemy rekomendacje i koncepcję programu.', en: 'We start with a free audit of the current insurance protection and a risk analysis, on which we base our recommendations and the programme concept.' },
  'faq.q4':               { pl: 'Czy zajmujecie się likwidacją szkód?', en: 'Do you handle claims settlement?' },
  'faq.a4':               { pl: 'Tak — zgłaszamy i prowadzimy likwidację szkód osobiście, niezwłocznie po otrzymaniu informacji, dbając o najwyższą wypłatę odszkodowania.', en: 'Yes — we report and handle claims personally, immediately after receiving the information, ensuring the highest possible compensation.' },

  // ---------- CONTACT ----------
  'kontakt.title':        { pl: 'Kontakt', en: 'Contact' },
  'kontakt.cta':          { pl: 'Zapraszamy do współpracy', en: 'We invite you to cooperate' },
  'kontakt.formtitle':    { pl: 'Napisz do nas', en: 'Write to us' },
  'form.name':            { pl: 'Imię i nazwisko', en: 'Full name' },
  'form.email':           { pl: 'E-mail', en: 'E-mail' },
  'form.phone':           { pl: 'Telefon', en: 'Phone' },
  'form.message':         { pl: 'Wiadomość', en: 'Message' },
  'form.submit':          { pl: 'Wyślij wiadomość', en: 'Send message' },
  'form.sending':         { pl: 'Wysyłanie…', en: 'Sending…' },
  'form.ok':              { pl: 'Dziękujemy! Wiadomość została wysłana.', en: 'Thank you! Your message has been sent.' },
  'form.err':             { pl: 'Coś poszło nie tak. Spróbuj ponownie.', en: 'Something went wrong. Please try again.' },
  'form.consent':         { pl: 'Wysyłając formularz akceptujesz politykę prywatności.', en: 'By sending the form you accept the privacy policy.' },

  // ---------- COMPANY / FOOTER ----------
  'company.name':         { pl: 'INBI Sp. z o. o.', en: 'INBI Sp. z o. o.' },
  'company.street':       { pl: 'ul. Śmiała 26', en: 'ul. Śmiała 26' },
  'company.city':         { pl: '01-524 Warszawa', en: '01-524 Warsaw' },
  'company.tel':          { pl: '22 327 16 55', en: '22 327 16 55' },
  'company.email':        { pl: 'biuro@inbi.pl', en: 'biuro@inbi.pl' },
  'company.www':          { pl: 'inbi.pl', en: 'inbi.pl' },
  'company.nip':          { pl: 'NIP 5252822075', en: 'NIP 5252822075' },
  'company.regon':        { pl: 'REGON 385981301', en: 'REGON 385981301' },
  'company.krs':          { pl: 'KRS 0000838814', en: 'KRS 0000838814' },
  'footer.rights':        { pl: 'Wszelkie prawa zastrzeżone.', en: 'All rights reserved.' },
  'footer.tagline':       { pl: 'Kompetentna i wiarygodna ochrona ubezpieczeniowa.', en: 'Competent and reliable insurance protection.' },

  // ---------- RISK CALCULATOR (home) ----------
  'calc.title':           { pl: 'Kalkulator ryzyka', en: 'Risk calculator' },
  'calc.sub':             { pl: 'Określ profil swojej firmy, a wskażemy zakres ochrony wart rozważenia.', en: 'Define your company profile and we will indicate the protection scope worth considering.' },
  'calc.q.industry':      { pl: 'Branża', en: 'Industry' },
  'calc.q.size':          { pl: 'Wielkość firmy', en: 'Company size' },
  'calc.q.assets':        { pl: 'Co dotyczy Twojej działalności?', en: 'What applies to your business?' },
  'calc.ind.production':  { pl: 'Produkcja i przemysł', en: 'Manufacturing & industry' },
  'calc.ind.transport':   { pl: 'Transport i logistyka', en: 'Transport & logistics' },
  'calc.ind.construction':{ pl: 'Budownictwo', en: 'Construction' },
  'calc.ind.services':    { pl: 'Usługi i handel', en: 'Services & trade' },
  'calc.ind.public':      { pl: 'Sektor publiczny', en: 'Public sector' },
  'calc.ind.finance':     { pl: 'Finanse i IT', en: 'Finance & IT' },
  'calc.size1':           { pl: 'Mikro (<10)', en: 'Micro (<10)' },
  'calc.size2':           { pl: 'Mała (10–49)', en: 'Small (10–49)' },
  'calc.size3':           { pl: 'Średnia (50–249)', en: 'Medium (50–249)' },
  'calc.size4':           { pl: 'Duża (250+)', en: 'Large (250+)' },
  'calc.opt.fleet':       { pl: 'Flota pojazdów', en: 'Vehicle fleet' },
  'calc.opt.machinery':   { pl: 'Park maszynowy', en: 'Machinery park' },
  'calc.opt.transport':   { pl: 'Transport mienia', en: 'Goods in transit' },
  'calc.opt.board':       { pl: 'Odpowiedzialność zarządu', en: 'Board liability' },
  'calc.result.title':    { pl: 'Rekomendowany zakres ochrony', en: 'Recommended protection scope' },
  'calc.result.empty':    { pl: 'Wybierz branżę i wielkość firmy, aby zobaczyć rekomendacje.', en: 'Select an industry and company size to see recommendations.' },
  'calc.result.count':    { pl: 'dopasowanych ubezpieczeń', en: 'matched insurance lines' },
  'calc.cta':             { pl: 'Zamów bezpłatny audyt', en: 'Request a free audit' },
  'calc.disclaimer':      { pl: 'Wynik ma charakter poglądowy. Ostateczny zakres ustalamy podczas indywidualnego audytu.', en: 'The result is indicative. The final scope is determined during an individual audit.' },

  // ---------- GROUP DIAGRAM (about) ----------
  'group.title':          { pl: 'Struktura GRUPA INB', en: 'GRUPA INB structure' },
  'group.sub':            { pl: 'Powiązane kapitałowo firmy zajmujące się diagnozą i optymalizacją ryzyka. Najedź na element, aby poznać jego rolę.', en: 'Capital-linked companies dealing with the diagnosis and optimisation of risk. Hover over an element to learn its role.' },
  'group.center':         { pl: 'GRUPA INB', en: 'GRUPA INB' },
  'group.n1.name':        { pl: 'INBI Sp. z o.o.', en: 'INBI Sp. z o.o.' },
  'group.n1.role':        { pl: 'Pośrednictwo i doradztwo ubezpieczeniowe — broker działający w interesie Klienta.', en: 'Insurance brokerage and advisory — a broker acting in the Client’s interest.' },
  'group.n2.name':        { pl: 'INB Consulting Sp. z o.o.', en: 'INB Consulting Sp. z o.o.' },
  'group.n2.role':        { pl: 'Nowoczesne technologie i innowacyjne rozwiązania dające wymierne korzyści biznesowe.', en: 'Modern technologies and innovative solutions delivering measurable business benefits.' },
  'group.n3.name':        { pl: 'Diagnoza ryzyk', en: 'Risk diagnosis' },
  'group.n3.role':        { pl: 'Identyfikacja i analiza ryzyk przedsiębiorstwa na każdym etapie działalności.', en: 'Identification and analysis of enterprise risks at every stage of operation.' },
  'group.n4.name':        { pl: 'Optymalizacja ryzyka', en: 'Risk optimisation' },
  'group.n4.role':        { pl: 'Obniżenie kosztów i podniesienie poziomu ochrony ubezpieczeniowej.', en: 'Reducing costs and raising the level of insurance protection.' },

  // ---------- CAREER TIMELINE (wladze) ----------
  'tl.title':             { pl: 'Doświadczenie zawodowe', en: 'Professional experience' },
  'tl.sub':               { pl: 'Ponad dwie dekady w branży ubezpieczeniowej.', en: 'Over two decades in the insurance industry.' },
  'tl.i1.year':           { pl: '1999', en: '1999' },
  'tl.i1.title':          { pl: 'Początek w branży ubezpieczeniowej', en: 'Start in the insurance industry' },
  'tl.i1.body':           { pl: 'Pierwsze doświadczenia w obszarze ubezpieczeń majątkowych i osobowych.', en: 'First experience in property and personal insurance.' },
  'tl.i2.year':           { pl: '2003–2019', en: '2003–2019' },
  'tl.i2.title':          { pl: 'Europejskie Konsorcjum Ubezpieczeniowe Sp. z o.o.', en: 'Europejskie Konsorcjum Ubezpieczeniowe Sp. z o.o.' },
  'tl.i2.body':           { pl: 'Członek Zarządu. Programy ubezpieczeń dla instytucji publicznych: Straż Graniczna, Izba Celna, KRUS.', en: 'Member of the Board. Insurance programmes for public institutions: Border Guard, Customs Chamber, KRUS.' },
  'tl.i3.year':           { pl: '2019–2020', en: '2019–2020' },
  'tl.i3.title':          { pl: 'WDB S.A.', en: 'WDB S.A.' },
  'tl.i3.body':           { pl: 'Członek Zarządu. Rozwój nowatorskich produktów ochronnych niedostępnych standardowo na rynku.', en: 'Member of the Board. Development of innovative protection products not normally available on the market.' },
  'tl.i4.year':           { pl: 'od 2020', en: 'since 2020' },
  'tl.i4.title':          { pl: 'INBI Sp. z o.o.', en: 'INBI Sp. z o.o.' },
  'tl.i4.body':           { pl: 'Prezes Zarządu. Budowa zespołu i programów ubezpieczeniowych dla wymagających Klientów.', en: 'President of the Board. Building the team and insurance programmes for demanding Clients.' },

  // ---------- SECTOR TABS (doswiadczenie donut) ----------
  'sector.hint':          { pl: 'Wybierz profil Klienta, aby zobaczyć dopasowanie kategorii ubezpieczeń.', en: 'Choose a Client profile to see how the insurance categories match.' },
  'sector.all':           { pl: 'Wszystkie', en: 'All' },
  'sector.public':        { pl: 'Sektor publiczny', en: 'Public sector' },
  'sector.business':      { pl: 'Biznes i przemysł', en: 'Business & industry' },
  'sector.finance':       { pl: 'Instytucje finansowe', en: 'Financial institutions' },

  // ---------- CONFIGURATOR (oferta) ----------
  'cfg.title':            { pl: 'Skonfiguruj swój zakres ochrony', en: 'Configure your protection scope' },
  'cfg.sub':              { pl: 'Zaznacz ubezpieczenia, które Cię interesują — przygotujemy indywidualną ofertę.', en: 'Select the insurance lines you are interested in — we will prepare an individual offer.' },
  'cfg.selected':         { pl: 'Wybrane', en: 'Selected' },
  'cfg.empty':            { pl: 'Nie wybrano jeszcze żadnego ubezpieczenia.', en: 'No insurance line selected yet.' },
  'cfg.cta':              { pl: 'Zamów ofertę na wybrane', en: 'Request an offer for the selection' },

  // ---------- CONTACT WIZARD (kontakt) ----------
  'wiz.step1':            { pl: 'Temat', en: 'Topic' },
  'wiz.step2':            { pl: 'Dane kontaktowe', en: 'Contact details' },
  'wiz.step3':            { pl: 'Wiadomość', en: 'Message' },
  'wiz.next':             { pl: 'Dalej', en: 'Next' },
  'wiz.back':             { pl: 'Wstecz', en: 'Back' },
  'wiz.topic.label':      { pl: 'Czego dotyczy Twoje zapytanie?', en: 'What is your enquiry about?' },
  'wiz.topic1':           { pl: 'Audyt ubezpieczeniowy', en: 'Insurance audit' },
  'wiz.topic2':           { pl: 'Nowy program ubezpieczeń', en: 'New insurance programme' },
  'wiz.topic3':           { pl: 'Likwidacja szkody', en: 'Claims settlement' },
  'wiz.topic4':           { pl: 'Zamówienia publiczne', en: 'Public tenders' },
  'wiz.topic5':           { pl: 'Inne', en: 'Other' },

  // ---------- TENDER PROCESS (zamowienia) ----------
  'tp.title':             { pl: 'Jak przebiega postępowanie?', en: 'How does the procedure work?' },
  'tp.sub':               { pl: 'Pięć etapów współpracy — kliknij, aby poznać szczegóły każdego z nich.', en: 'Five stages of cooperation — click to learn the details of each.' },
  'tp.s1.title':          { pl: 'Opis przedmiotu zamówienia', en: 'Description of the contract' },
  'tp.s1.body':           { pl: 'Przygotowujemy szczegółową specyfikację ochrony ubezpieczeniowej oraz kryteria oceny ofert dopasowane do potrzeb jednostki.', en: 'We prepare a detailed specification of insurance protection and bid-evaluation criteria tailored to the entity’s needs.' },
  'tp.s2.title':          { pl: 'Wybór trybu postępowania', en: 'Choice of procedure' },
  'tp.s2.body':           { pl: 'Doradzamy przy wyborze trybu zgodnego z ustawą Prawo zamówień publicznych i przygotowujemy dokumentację.', en: 'We advise on choosing a procedure compliant with the Public Procurement Law and prepare the documentation.' },
  'tp.s3.title':          { pl: 'Publikacja i ocena ofert', en: 'Publication and bid evaluation' },
  'tp.s3.body':           { pl: 'Wspieramy komisję przetargową: oceniamy oferty, przygotowujemy wyjaśnienia i odpowiedzi dla wykonawców.', en: 'We support the tender committee: we evaluate bids and prepare clarifications and answers for contractors.' },
  'tp.s4.title':          { pl: 'Rozstrzygnięcie i umowa', en: 'Award and contract' },
  'tp.s4.body':           { pl: 'Pomagamy w wyłonieniu najkorzystniejszej oferty i sprawdzamy poprawność zawieranej umowy ubezpieczenia.', en: 'We help select the most advantageous bid and verify the correctness of the insurance contract concluded.' },
  'tp.s5.title':          { pl: 'Nadzór nad realizacją', en: 'Performance supervision' },
  'tp.s5.body':           { pl: 'Monitorujemy realizację umowy oraz prowadzimy obsługę i likwidację szkód przez cały okres ochrony.', en: 'We monitor the performance of the contract and handle claims throughout the protection period.' },

  // ---------- 404 ----------
  '404.kicker':           { pl: 'Błąd 404', en: 'Error 404' },
  '404.title':            { pl: 'Ta strona nie jest objęta ochroną', en: 'This page isn’t covered' },
  '404.body':             {
    pl: 'Wygląda na to, że strona, której szukasz, nie istnieje lub została przeniesiona. Nic straconego — wróćmy w bezpieczne miejsce.',
    en: 'It looks like the page you’re looking for doesn’t exist or has been moved. No worries — let’s get you back to safety.',
  },
  '404.cta':              { pl: 'Wróć na stronę główną', en: 'Back to homepage' },
  '404.links':            { pl: 'Albo przejdź do:', en: 'Or jump to:' },

  // ---------- PRIVACY ----------
  'privacy.title':        { pl: 'Polityka prywatności', en: 'Privacy policy' },
  'privacy.body':         {
    pl: 'Administratorem danych osobowych jest INBI Sp. z o. o. z siedzibą w Warszawie, ul. Śmiała 26, 01-524 Warszawa. Dane podane w formularzu kontaktowym przetwarzamy wyłącznie w celu udzielenia odpowiedzi na zapytanie oraz nawiązania współpracy. Dane nie są przekazywane podmiotom trzecim w celach marketingowych. Masz prawo dostępu do swoich danych, ich sprostowania, usunięcia oraz ograniczenia przetwarzania. W sprawach dotyczących danych osobowych prosimy o kontakt: biuro@inbi.pl.',
    en: 'The controller of personal data is INBI Sp. z o. o. with its registered office in Warsaw, ul. Śmiała 26, 01-524 Warsaw. We process the data provided in the contact form solely to respond to your enquiry and to establish cooperation. The data is not shared with third parties for marketing purposes. You have the right to access your data, rectify it, delete it and restrict its processing. For matters concerning personal data, please contact: biuro@inbi.pl.',
  },
}

// External URL — public procurement portal (kept as-is).
export const TENDERS_URL = 'https://zamowienia.inbi.pl'
