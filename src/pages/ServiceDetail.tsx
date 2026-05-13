import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Phone, Mail } from 'lucide-react';

// Image imports (reusing existing ones)
import constructionImg from '../assets/construction.png';
import maintenanceImg from '../assets/maintenance.png';
import designImg from '../assets/design.png';
import saunaImg from '../assets/sauna.png';
import gardenHouseImg from '../assets/garden_house.png';

interface ServiceData {
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  image: string;
  features: string[];
  process: { step: string; desc: string }[];
  benefits: string[];
}

const serviceData: Record<string, ServiceData> = {
  'terrassid': {
    title: 'Terrassi Ehitus',
    subtitle: 'Kvaliteetsed ja kestvad terrassilahendused',
    description: 'Pakume täislahendust alates vundamendist kuni viimase kruvini. Kasutame vaid kvaliteetseid materjale ja kaasaegseid ehitusvõtteid.',
    longDescription: 'Terrass on kodu süda suvisel ajal. Meie eesmärk on luua väliala, mis ei ole mitte ainult ilus vaadata, vaid ka vastupidav Eesti muutlikule kliimale. Kasutame oma töös parimaid materjale – alates termotöödeldud puidust kuni modernse komposiitini. Iga projekt algab põhjalikust planeerimisest, kus arvestame nii maastiku eripärade kui ka kliendi soovidega.',
    image: constructionImg,
    features: [
      'Termopuidust terrassid (mänd, saar)',
      'Lehisest terrassid',
      'Komposiit (WPC) terrassid',
      'Eritellimusel trepid ja piirded',
      'Valgustuse integreerimine'
    ],
    process: [
      { step: '01. Konsultatsioon', desc: 'Arutame läbi teie soovid ja hindame objekti seisukorda.' },
      { step: '02. Hinnapakkumine', desc: 'Koostame detailse eelarve ja ajakava.' },
      { step: '03. Ettevalmistus', desc: 'Vundamendi rajamine ja materjalide tarnimine.' },
      { step: '04. Ehitustööd', desc: 'Professionaalne paigaldus kogenud meistrite poolt.' }
    ],
    benefits: [
      '5-aastane garantii tehtud töödele',
      'Ainult sertifitseeritud materjalid',
      'Tähtaegadest kinnipidamine',
      'Puhas ja korras töömaa'
    ]
  },
  'varjualused': {
    title: 'Varjualused ja Katused',
    subtitle: 'Kaitse ilmastiku eest stiilselt',
    description: 'Muuda oma terrass ilmastikukindlaks. Projekteerime ja ehitame stiilseid varjualuseid, mis sulanduvad kokku sinu kodu arhitektuuriga.',
    longDescription: 'Terrassikatus või varjualune pikendab terrassi kasutusiga mitme kuu võrra. See pakub kaitset nii liigse päikese kui ka ootamatu vihma eest. Meie lahendused on alati personaliseeritud – olgu see siis klaaskatusega modernne lahendus või klassikaline puitkarkass. Pöörame erilist tähelepanu konstruktsiooni tugevusele ja visuaalsele sobivusele olemasoleva hoonega.',
    image: designImg,
    features: [
      'Klaas- ja polükarbonaatkatused',
      'Puidust karkassilahendused',
      'Auto varjualused',
      'Prügimajad ja kuurid',
      'Lükandsüsteemide paigaldus'
    ],
    process: [
      { step: '01. Mõõdistamine', desc: 'Täpsed mõõdud ja arhitektuurne sobivus.' },
      { step: '02. Projekteerimine', desc: '3D visand ja konstruktsiooniarvutused.' },
      { step: '03. Paigaldus', desc: 'Kiire ja kvaliteetne ehitusprotsess.' },
      { step: '04. Viimistlus', desc: 'Värvimine ja liitekohtade tihendamine.' }
    ],
    benefits: [
      'Individuaalne disainilahendus',
      'Vastupidavus lumekoormusele',
      'Kvaliteetne furnituur',
      'Ilmastikukindel viimistlus'
    ]
  },
  'hooldus': {
    title: 'Hooldus ja Renoveerimine',
    subtitle: 'Sinu terrassi uus elu',
    description: 'Pikenda oma terrassi eluiga. Teostame põhjalikku süvapesu, õlitamist ja vajadusel vahetame välja kulunud lauad.',
    longDescription: 'Iga terrass vajab hoolt, et püsida ilus ja turvaline. Eesti kliima on puidule karm, mistõttu on regulaarne hooldus vältimatu. Meie hoolduspakett sisaldab professionaalset süvapesu, mis eemaldab mustuse ja vetikad, ning viimistlemist tippkvaliteetsete õlidega. Vajadusel teostame ka konstruktsiooni tugevdamist ja katkiste laudade vahetust.',
    image: maintenanceImg,
    features: [
      'Masinpesu ja süvapuhastus',
      'Lihvimine ja õlitamine',
      'Laudade vahetus',
      'Konstruktsiooni tugevdamine',
      'Piirete renoveerimine'
    ],
    process: [
      { step: '01. Ülevaatus', desc: 'Hindame puidu ja konstruktsiooni seisukorda.' },
      { step: '02. Puhastus', desc: 'Süvapesu spetsiaalse tehnikaga.' },
      { step: '03. Kuivatus', desc: 'Tagame õige niiskustaseme enne õlitamist.' },
      { step: '04. Õlitamine', desc: 'Kvaliteetne viimistlus kahes kihis.' }
    ],
    benefits: [
      'Pikem terrassi eluiga',
      'Värske ja uueväärne välimus',
      'Kaitse mädaniku ja hallituse eest',
      'Muretu suvehooaeg'
    ]
  },
  'saunad': {
    title: 'Eritellimus Saunad',
    subtitle: 'Luksuslik lõõgastus sinu õues',
    description: 'Ehitame unikaalseid välisaunu ja kümblustünne. Kasutame parimaid materjale, et tagada täiuslik saunaelamus.',
    longDescription: 'Saun on eestlasele püha koht. Meie ehitatud välisaunad ühendavad endas traditsioonilised väärtused ja moodsa disaini. Kasutame leiliruumis vaid parimat termotöödeldud haaba või leppa ning välisviimistluses teie kodu stiiliga sobivaid materjale. Iga saun on rätsepatöö, mis on valminud koostöös kliendiga.',
    image: saunaImg,
    features: [
      'Tünnsaunad ja kärgsaunad',
      'Modernsed klaasseintega saunad',
      'Kümblustünnide integreerimine',
      'Eritellimusel leiliruumid',
      'Saunavalgustuse lahendused'
    ],
    process: [
      { step: '01. Idee', desc: 'Sauna tüübi ja asukoha valik.' },
      { step: '02. Disain', desc: 'Sise- ja välisviimistluse valimine.' },
      { step: '03. Ehitus', desc: 'Kvaliteetne töö alates soojustusest.' },
      { step: '04. Käivitamine', desc: 'Kerise paigaldus ja esmane kütmine.' }
    ],
    benefits: [
      'Suurepärane leil ja ventilatsioon',
      'Energiasäästlikud lahendused',
      'Eksklusiivsed materjalid',
      'Täislahendus "võtmed kätte"'
    ]
  },
  'aiamajad': {
    title: 'Aiamajad ja Stuudiod',
    subtitle: 'Lisatuba sinu aias',
    description: 'Modernsed aiamajad, mis sobivad nii kodukontoriks, külalistemajaks kui ka laste mängualaks.',
    longDescription: 'Aiamaja ei pea olema lihtsalt kuur. See võib olla stiilne kaugtöö kontor, hubane külalistemaja või hoopis privaatne stuudio hobideks. Meie aiamajad on ehitatud samade standardite järgi nagu elumajad – need on soojustatud, vastupidavad ja esteetiliselt nauditavad. Pakume erinevaid moodullahendusi kui ka täiesti unikaalseid projekte.',
    image: gardenHouseImg,
    features: [
      'Soojustatud aiamajad',
      'Kodukontorid ja stuudiod',
      'Külalistemajad',
      'Panipaigad ja töökojad',
      'Suveköögid'
    ],
    process: [
      { step: '01. Planeerimine', desc: 'Otstarbe ja suuruse määramine.' },
      { step: '02. Vundament', desc: 'Stabiilse aluse rajamine.' },
      { step: '03. Püstitamine', desc: 'Karkassi ja katuse ehitus.' },
      { step: '04. Siseviimistlus', desc: 'Elekter, soojustus ja pinnatöötlus.' }
    ],
    benefits: [
      'Aastaringne kasutusvõimalus',
      'Kvaliteetne akna- ja ustepakett',
      'Väärtuse kasv kinnisvarale',
      'Paindlikud planeeringud'
    ]
  }
};

const ServiceDetail: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = serviceId ? serviceData[serviceId] : null;

  if (!service) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-4xl font-light mb-6">Teenust ei leitud</h1>
          <Link to="/teenused" className="text-[#d8f5a2] hover:underline flex items-center justify-center gap-2">
            <ArrowLeft size={20} /> Tagasi teenuste juurde
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="service-detail-page bg-[#0a0a0a] text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <Link to="/teenused" className="inline-flex items-center gap-2 text-[#d8f5a2] mb-6 hover:gap-4 transition-all">
                <ArrowLeft size={20} /> TAGASI TEENUSTE JUURDE
              </Link>
              <h1 className="text-5xl md:text-7xl font-light mb-4 tracking-tight">{service.title}</h1>
              <p className="text-xl text-white/80 font-light tracking-wide">{service.subtitle}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Left Side - Description */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-light mb-8 text-[#d8f5a2]">Ülevaade</h2>
                <p className="text-xl leading-relaxed text-white/70 mb-8 font-light italic">
                  "{service.description}"
                </p>
                <div className="prose prose-invert max-w-none">
                  <p className="text-lg leading-relaxed text-white/60 mb-12">
                    {service.longDescription}
                  </p>
                </div>

                <h3 className="text-2xl font-light mb-8">Tööprotsess</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                  {service.process.map((p, i) => (
                    <div key={i} className="bg-[#151515] p-6 rounded-2xl border border-white/5">
                      <span className="text-[#d8f5a2] font-mono mb-2 block">{p.step}</span>
                      <h4 className="text-lg mb-2">{p.desc.split(' ')[0]}</h4>
                      <p className="text-white/50 text-sm">{p.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Side - Sidebar */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="sticky top-32"
              >
                {/* Features Box */}
                <div className="bg-[#151515] p-8 rounded-3xl border border-white/5 mb-8">
                  <h3 className="text-xl font-light mb-6 border-b border-white/10 pb-4">Mida pakume?</h3>
                  <ul className="space-y-4">
                    {service.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-3 text-white/70">
                        <CheckCircle2 size={18} className="text-[#d8f5a2] mt-1 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits Box */}
                <div className="bg-[#d8f5a2]/5 p-8 rounded-3xl border border-[#d8f5a2]/20 mb-8">
                  <h3 className="text-xl font-light mb-6 text-[#d8f5a2]">Miks valida meid?</h3>
                  <ul className="space-y-4">
                    {service.benefits.map((b, i) => (
                      <li key={i} className="flex items-start gap-3 text-white/70">
                        <CheckCircle2 size={18} className="text-[#d8f5a2] mt-1 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Card */}
                <div className="bg-[#d8f5a2] p-8 rounded-3xl text-black text-center">
                  <h3 className="text-2xl font-semibold mb-2">Kas sul on projekt mõttes?</h3>
                  <p className="mb-6 opacity-80">Võta meiega ühendust ja leiame parima lahenduse.</p>
                  <div className="flex flex-col gap-4">
                    <a href="tel:+3725555555" className="bg-black text-white py-3 rounded-xl flex items-center justify-center gap-2 hover:scale-105 transition-transform">
                      <Phone size={18} /> +372 5555 555
                    </a>
                    <a href="mailto:info@terassikodu.ee" className="bg-white text-black py-3 rounded-xl border border-black/10 flex items-center justify-center gap-2 hover:scale-105 transition-transform">
                      <Mail size={18} /> info@terassikodu.ee
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services Link */}
      <section className="py-20 bg-[#070707] border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-light mb-12">Vaata ka teisi teenuseid</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {Object.entries(serviceData)
              .filter(([id]) => id !== serviceId)
              .map(([id, data]) => (
                <Link 
                  key={id} 
                  to={`/teenused/${id}`}
                  className="px-8 py-4 bg-[#151515] border border-white/5 rounded-full hover:border-[#d8f5a2]/50 hover:text-[#d8f5a2] transition-all"
                >
                  {data.title}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
