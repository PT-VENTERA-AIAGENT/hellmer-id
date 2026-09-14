import { useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  ChevronRight,
  Check,
  Menu,
  ShieldCheck,
  X,
  Flame,
  FileCheck2,
  Ruler,
  PackageCheck,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Layers3,
  Factory,
  HardHat,
  Zap,
  Beaker,
  Mountain,
  Settings2,
} from "lucide-react";

type ProductIconType =
  "flame" | "layers" | "arc" | "weld" | "shield" | "visibility";
const products: [string, string, ProductIconType][] = [
  [
    "FR Industrial Workwear",
    "Workwear flame-resistant untuk use-case industrial yang ditentukan melalui hazard assessment dan spesifikasi teknis.",
    "flame",
  ],
  [
    "Inherent Aramid & FR Blends",
    "Pilihan material teknis untuk kebutuhan durability, thermal performance, dan evaluasi penggunaan tertentu.",
    "layers",
  ],
  [
    "Arc-Flash Workwear",
    "Untuk thermal hazard dari electric arc, dengan pemisahan yang jelas dari electric-shock protection.",
    "arc",
  ],
  [
    "Welding Workwear",
    "Konstruksi dan spesifikasi yang disesuaikan dengan kebutuhan welding pelanggan.",
    "weld",
  ],
  [
    "Antistatic Workwear",
    "Electrostatic performance yang dipilih bersama kondisi penggunaan dan risk assessment.",
    "shield",
  ],
  [
    "High-Visibility Workwear",
    "Warna dan retroreflective material untuk konfigurasi visibility yang relevan.",
    "visibility",
  ],
];

const industries = [
  [
    "Oil & Gas",
    "Hazard review, comfort, durability, dan repeat supply.",
    Factory,
  ],
  [
    "Energy & Utilities",
    "Untuk tim operasi, maintenance, electrical, dan engineering.",
    Zap,
  ],
  [
    "EPC & Contractors",
    "Untuk specification client, mobilization, dan multi-site delivery.",
    HardHat,
  ],
  [
    "Chemical & Process",
    "Untuk exposure, garment limitation, dan PPE ensemble.",
    Beaker,
  ],
  [
    "Mining",
    "Durability, visibility, fit, dan supply consistency di lapangan.",
    Mountain,
  ],
  [
    "Manufacturing",
    "Standardisasi untuk plant, production, dan engineering.",
    Settings2,
  ],
];

const steps = [
  "Understand",
  "Specify",
  "Sample & Fit",
  "Control",
  "Supply",
  "Improve",
];

function ProductIcon({ type }: { type: ProductIconType }) {
  const paths: Record<ProductIconType, React.ReactNode> = {
    flame: (
      <>
        <path d="M13 2c1 4-2 5-2 8 0 2 1 3 3 3 3 0 4-3 3-6 4 3 5 7 3 11-2 4-8 4-11 1-3-3-2-8 2-11 0 3 1 4 2 4 2 0 3-3 3-10Z" />
      </>
    ),
    layers: (
      <>
        <path d="m12 3 8 4-8 4-8-4 8-4Z" />
        <path d="m4 12 8 4 8-4M4 17l8 4 8-4" />
      </>
    ),
    arc: (
      <>
        <path d="m14 2-9 11h6l-1 9 9-12h-6l1-8Z" />
      </>
    ),
    weld: (
      <>
        <path d="M5 10h14l2 4v5H3v-5l2-4Z" />
        <path d="M8 10V6m4 4V4m4 6V6M7 16h10" />
      </>
    ),
    shield: (
      <>
        <path d="M12 3 19 6v5c0 5-3 8-7 10-4-2-7-5-7-10V6l7-3Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
    visibility: (
      <>
        <path d="M5 3h10l4 4v14H5V3Z" />
        <path d="M15 3v5h5M8 14h8M8 18h5" />
        <path d="m6 10 3 2 3-2 3 2 3-2" />
      </>
    ),
  };
  return (
    <span className={`product-icon product-icon-${type}`} aria-hidden="true">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {paths[type]}
      </svg>
    </span>
  );
}

function Brand() {
  return (
    <a href="#top" className="brand" aria-label="HELLMER home">
      <img src="/hellmer-mark.png" alt="HELLMER emblem" />
      <span>HELLMER</span>
    </a>
  );
}
function Button({
  children,
  primary = true,
  onClick,
  disabled,
}: {
  children: React.ReactNode;
  primary?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`button ${primary ? "button-primary" : "button-secondary"}`}
    >
      {children}
      <ArrowRight size={16} />
    </button>
  );
}

export default function App() {
  const [menu, setMenu] = useState(false);
  const [modal, setModal] = useState(false);
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const open = () => {
    setSent(false);
    setModal(true);
  };
  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const data = new FormData(e.currentTarget);
      await fetch("https://formsubmit.co/sales@hellmer.id", {
        method: "POST",
        body: data,
      });
    } finally {
      setSubmitting(false);
      setSent(true);
    }
  };
  return (
    <>
      <header>
        <div className="header-inner">
          <Brand />
          <nav className={menu ? "open" : ""}>
            <a href="#solutions" onClick={() => setMenu(false)}>
              Workwear Solutions
            </a>
            <a href="#industries" onClick={() => setMenu(false)}>
              Industries
            </a>
            <a href="#standards" onClick={() => setMenu(false)}>
              Technical Standards
            </a>
            <a href="#program" onClick={() => setMenu(false)}>
              Managed Program
            </a>
            <a href="#about" onClick={() => setMenu(false)}>
              About HELLMER
            </a>
            <a href="#insights" onClick={() => setMenu(false)}>
              Insights
            </a>
          </nav>
          <button className="header-cta" onClick={open}>
            Request Consultation <ArrowRight size={15} />
          </button>
          <button
            className="menu"
            onClick={() => setMenu(!menu)}
            aria-label="Toggle menu"
          >
            {menu ? <X /> : <Menu />}
          </button>
        </div>
      </header>
      <main id="top">
        <section className="hero">
          <div className="hero-grid"></div>
          <div className="container hero-content">
            <p className="eyebrow light">MANAGED INDUSTRIAL WORKWEAR</p>
            <h1>
              Workwear berstandar industri untuk perusahaan yang{" "}
              <em>tidak bisa mengambil risiko.</em>
            </h1>
            <p className="hero-copy">
              Pakaian kerja untuk operasi berisiko tinggi tidak boleh dipilih
              hanya dari foto, harga, atau label “premium”. HELLMER membantu
              perusahaan memilih, menguji, mengelola, dan memasok workwear
              berdasarkan hazard, kebutuhan site, kenyamanan pekerja,
              dokumentasi, serta konsistensi antar-order.
            </p>
            <div className="button-row">
              <Button onClick={open}>Request Technical Consultation</Button>
              <Button primary={false} onClick={open}>
                Request Sample & Technical Pack
              </Button>
            </div>
            <p className="reassurance">
              <Check size={16} /> Untuk oil and gas, energi, EPC, chemical,
              mining, manufacturing, dan operasi industrial multi-site.
            </p>
          </div>
          <div className="hero-mark">
            <img src="/hellmer-mark.png" alt="" />
          </div>
          <div className="hero-spec">
            EST. INDONESIA&nbsp;&nbsp; / &nbsp;&nbsp; TECHNICAL WORKWEAR
          </div>
        </section>

        <section className="section problem">
          <div className="container split">
            <div>
              <p className="eyebrow">THE PROBLEM</p>
              <h2>
                Wearpack yang{" "}
                <span className="accent-text">terlihat bagus</span> belum tentu
                siap menghadapi tuntutan industri.
              </h2>
            </div>
            <div className="prose">
              <p>
                Banyak perusahaan memilih workwear dari harga, tampilan, atau
                janji supplier. Masalah biasanya baru terasa saat produk dipakai
                di lapangan.
              </p>
              <p>
                Ukuran tidak konsisten. Material atau trim berubah saat repeat
                order. Bukti uji, sertifikasi, atau dokumen teknis tidak siap
                ketika audit. Saat ada produk cacat, proses penggantiannya tidak
                jelas.
              </p>
              <p>
                Di lingkungan kerja berisiko tinggi, masalah workwear dapat
                memengaruhi{" "}
                <strong>
                  keselamatan, kenyamanan pekerja, kelancaran operasi, kepatuhan
                  procurement, dan reputasi perusahaan.
                </strong>
              </p>
            </div>
          </div>
        </section>

        <section className="section agitation">
          <div className="container">
            <p className="eyebrow orange">BEYOND UNIT PRICE</p>
            <div className="agitate-line">
              <h2>
                Harga murah dapat menjadi{" "}
                <span className="accent-text">mahal</span> ketika spesifikasi,
                ukuran, dan dokumentasi tidak terkendali.
              </h2>
              <p>
                Biaya sebenarnya juga mencakup size exchange, replacement,
                stockout, rework logo, keterlambatan delivery, pembelian ulang
                darurat, penolakan dokumen, dan waktu yang terbuang.
              </p>
            </div>
          </div>
        </section>

        <section className="section" id="solutions">
          <div className="container">
            <p className="eyebrow">THE HELLMER APPROACH</p>
            <div className="section-head">
              <h2>
                Satu partner untuk workwear teknis yang{" "}
                <span className="accent-text">siap dipertanggungjawabkan.</span>
              </h2>
              <p>
                Produk, bukti teknis, fitting, quality control, dan layanan
                supply dalam satu alur kerja yang jelas.
              </p>
            </div>
            <div className="pillars">
              {[
                [
                  ShieldCheck,
                  "Hazard-to-specification",
                  "Kami mulai dari kebutuhan pekerjaan dan risiko di site.",
                ],
                [
                  FileCheck2,
                  "Technical evidence",
                  "Klaim produk harus memiliki dasar yang jelas dan mudah ditinjau.",
                ],
                [
                  Ruler,
                  "Fit and adoption",
                  "Sample, size-set, size survey, dan approval untuk fit yang lebih konsisten.",
                ],
                [
                  PackageCheck,
                  "Managed supply",
                  "Kelola SKU, kualitas, delivery, replacement, batch traceability, dan replenishment.",
                ],
              ].map(([Icon, title, text], i) => (
                <article className="pillar" key={String(title)}>
                  <span className="number">0{i + 1}</span>
                  <Icon size={25} />
                  <h3>{title as string}</h3>
                  <p>{text as string}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section surface" id="products">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="eyebrow">PRODUCT FAMILIES</p>
                <h2>
                  Technical workwear untuk{" "}
                  <span className="accent-text">kebutuhan operasi</span> yang
                  berbeda.
                </h2>
              </div>
              <p>
                Tidak ada satu wearpack yang tepat untuk semua hazard. Product
                family disusun berdasarkan kebutuhan penggunaan dan bukti
                performa yang tersedia.
              </p>
            </div>
            <div className="product-showcase">
              <img
                src="/hellmer-workwear-collection.png"
                alt="Koleksi coverall industrial HELLMER dalam warna navy, graphite, dan high-visibility"
              />
              <div>
                <span>WORKWEAR COLLECTION / 01—03</span>
                <h3>
                  Desain yang terlihat profesional, dibangun dengan perhatian
                  pada konstruksi.
                </h3>
                <p>
                  Material, fit, trim, dan detail konstruksi dipilih untuk
                  mendukung kebutuhan penggunaan yang telah ditentukan bersama
                  tim Anda.
                </p>
              </div>
            </div>
            <div className="product-grid">
              {products.map(([title, text, type]) => (
                <article className="product" key={title}>
                  <ProductIcon type={type} />
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <button onClick={open}>
                    Explore solution <ChevronRight size={17} />
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section industries" id="industries">
          <div className="container">
            <p className="eyebrow">INDUSTRIES</p>
            <h2>
              Dibuat untuk lingkungan kerja yang{" "}
              <span className="accent-text">menuntut lebih.</span>
            </h2>
            <div className="industry-grid">
              {industries.map(([title, text, Icon], i) => (
                <article key={title as string}>
                  <span>0{i + 1}</span>
                  <Icon size={30} />
                  <h3>{title as string}</h3>
                  <p>{text as string}</p>
                  <a href="#contact">
                    Learn more <ArrowRight size={15} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="evidence" id="standards">
          <div className="container evidence-grid">
            <div>
              <p className="eyebrow light">BUILT ON EVIDENCE</p>
              <h2>
                Premium bukan hanya bahan. Premium adalah kemampuan untuk
                <span className="accent-text">
                  membuktikan dan mengelola kualitas.
                </span>
              </h2>
              <Button onClick={open}>Request a Technical Pack</Button>
            </div>
            <div className="evidence-card">
              <h3>HELLMER evidence policy</h3>
              <p>
                Setiap SKU idealnya memiliki identitas model, komposisi
                material, konstruksi, ukuran, care instruction, revision,
                traceability, dan dokumen performa yang relevan.
              </p>
              <ul>
                <li>
                  <Check /> HELLMER-owned evidence
                </li>
                <li>
                  <Check /> Third-party standard reference
                </li>
                <li>
                  <Check /> Supplier claim — subject to verification
                </li>
              </ul>
              <small>
                Kami tidak menggunakan istilah “certified”, “approved”, atau
                “compliant” tanpa dokumen yang sesuai dengan produk dan scope
                klaim.
              </small>
            </div>
          </div>
        </section>

        <section className="section" id="program">
          <div className="container">
            <p className="eyebrow">MANAGED WORKWEAR PROGRAM</p>
            <div className="section-head">
              <h2>
                Dari pembelian garment menjadi program workwear yang lebih
                <span className="accent-text">terkendali.</span>
              </h2>
              <p>
                Dari requirement hingga repeat order, kami menyusun alur yang
                lebih terkendali untuk tim Anda.
              </p>
            </div>
            <div className="timeline">
              {steps.map((step, i) => (
                <article key={step}>
                  <span>0{i + 1}</span>
                  <div></div>
                  <h3>{step}</h3>
                  <p>
                    {
                      [
                        "Memahami site, pekerjaan, hazard, jumlah pekerja, ukuran, dan requirement.",
                        "Menyusun brief, intended use, material requirement, dan acceptance criteria.",
                        "Sample, size-set, fitting, feedback, dan approval sebelum produksi.",
                        "Revision, material, trim, konstruksi, inspection, dan batch record.",
                        "Delivery, order visibility, replacement, dokumentasi, dan replenishment.",
                        "Menggunakan data defect, fit, OTIF, dan feedback untuk program berikutnya.",
                      ][i]
                    }
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section surface why">
          <div className="container">
            <div className="why-intro">
              <p className="eyebrow">WHY HELLMER</p>
              <span className="why-index">05 / THE DIFFERENCE</span>
              <h2>
                Mengapa perusahaan memilih{" "}
                <span className="accent-text">pendekatan HELLMER?</span>
              </h2>
              <p>
                Karena kebutuhan workwear yang kompleks memerlukan lebih dari
                sekadar produk yang terlihat baik.
              </p>
            </div>
            <div className="comparison">
              <div className="comparison-row heading">
                <b>Supplier biasa</b>
                <b>Pendekatan HELLMER</b>
              </div>
              {[
                [
                  "Spesifikasi generik, tidak sesuai risiko kerja",
                  "Review risiko kerja dan spesifikasi yang jelas",
                ],
                [
                  "Ukuran sering tidak pas dan tidak konsisten",
                  "Size survey, size-set, dan size matrix",
                ],
                [
                  "Sertifikasi, bukti uji, dan data produk tidak lengkap",
                  "Bukti teknis per SKU yang mudah ditelusuri",
                ],
                [
                  "Repeat order berubah kualitas atau spesifikasinya",
                  "SKU terkendali, revision, dan traceability batch",
                ],
                [
                  "Waktu kirim tidak jelas dan sulit dipantau",
                  "Konfirmasi order dan visibilitas pengiriman",
                ],
                [
                  "Produk cacat atau salah ukuran sulit diganti",
                  "Proses penggantian dan perbaikan yang jelas",
                ],
                [
                  "Harga murah, tetapi biaya masalah bertambah",
                  "Total biaya kepemilikan dan supply yang terkelola",
                ],
              ].map(([a, b]) => (
                <div className="comparison-row" key={a}>
                  <span>{a}</span>
                  <strong>
                    <Check size={16} />
                    {b}
                  </strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-banner" id="about">
          <div className="container">
            <p className="eyebrow light">READY TO BEGIN</p>
            <h2>
              Jangan mulai dari katalog.
              <br />
              Mulai dari{" "}
              <span className="accent-text">kebutuhan pekerjaan Anda.</span>
            </h2>
            <p>
              Kirimkan detail site, jumlah pekerja, hazard utama, spesifikasi
              saat ini, dan target pengadaan. Kami akan membantu menentukan
              langkah berikutnya.
            </p>
            <div className="button-row">
              <Button onClick={open}>Request Technical Consultation</Button>
              <Button
                primary={false}
                onClick={() => (location.href = "mailto:sales@hellmer.id")}
              >
                Email HELLMER
              </Button>
            </div>
          </div>
        </section>

        <section className="section faq" id="insights">
          <div className="container split">
            <div>
              <p className="eyebrow">INSIGHTS & FAQ</p>
              <h2>
                Pengetahuan workwear untuk{" "}
                <span className="accent-text">keputusan yang lebih baik.</span>
              </h2>
              <p>
                Kami membahas material, hazard, standard, sizing, procurement,
                dan operational workwear dengan batasan yang jujur.
              </p>
            </div>
            <div className="faq-list">
              {[
                [
                  "Apakah HELLMER menjual wearpack tahan api?",
                  "HELLMER menyediakan technical workwear untuk use-case yang membutuhkan flame-resistant atau heat/flame performance sesuai hazard assessment dan spesifikasi pelanggan.",
                ],
                [
                  "Apakah semua produk HELLMER sudah bersertifikat?",
                  "Status sertifikasi atau test evidence berbeda berdasarkan produk dan model. HELLMER hanya menyatakan standar atau sertifikasi jika dokumen yang relevan tersedia.",
                ],
                [
                  "Apakah HELLMER dapat membuat desain corporate?",
                  "Ya. Kami dapat mendukung custom design, warna, logo, identification marking, size range, dan kebutuhan site tertentu setelah requirement teknis disepakati.",
                ],
              ].map(([q, a]) => (
                <details key={q}>
                  <summary>
                    {q}
                    <ChevronDown size={18} />
                  </summary>
                  <p>{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer id="contact">
        <div className="container footer-top">
          <div>
            <Brand />
            <h2>
              Workwear yang <span className="accent-text">lebih jelas.</span>
              <br />
              Supply yang lebih <span className="accent-text">terkendali.</span>
            </h2>
            <p>
              HELLMER membantu perusahaan Indonesia mengelola technical workwear
              dari spesifikasi hingga repeat order.
            </p>
            <Button onClick={open}>Request Technical Consultation</Button>
          </div>
          <div className="footer-links">
            <div>
              <p className="footer-label">EXPLORE</p>
              <a href="#solutions">Workwear Solutions</a>
              <a href="#industries">Industries</a>
              <a href="#standards">Technical Standards</a>
              <a href="#program">Managed Workwear Program</a>
              <a href="#insights">Insights</a>
            </div>
            <div>
              <p className="footer-label">CONTACT</p>
              <p className="company-name">PT Barooka Global Indonesia</p>
              <p>
                <MapPin size={16} />
                AD Premier 9th Floor, Jl. TB Simatupang No. 5 Ragunan, Pasar
                Minggu, South Jakarta 12550, Indonesia
              </p>
              <a href="tel:085647486700">
                <Phone size={16} />
                085647486700
              </a>
              <a href="mailto:sales@hellmer.id">
                <Mail size={16} />
                sales@hellmer.id
              </a>
            </div>
          </div>
        </div>
        <div className="container footer-bottom">
          <p>
            © {new Date().getFullYear()} PT Barooka Global Indonesia. All rights
            reserved.
          </p>
          <p>
            Informasi mengenai standar, performa, material, sertifikasi, dan
            intended use harus dibaca berdasarkan dokumen produk dan scope yang
            berlaku.
          </p>
        </div>
      </footer>
      <a
        className="whatsapp"
        href="https://wa.me/6285647486700"
        target="_blank"
        rel="noreferrer"
        aria-label="Talk to HELLMER on WhatsApp"
      >
        <MessageCircle size={21} />
        <span>Talk to HELLMER</span>
      </a>
      {modal && (
        <div className="modal-backdrop" onClick={() => setModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setModal(false)}>
              <X />
            </button>
            {sent ? (
              <div className="success">
                <Check size={38} />
                <h2>Terima kasih.</h2>
                <p>
                  Request Anda telah diterima. Tim HELLMER akan meninjau
                  informasi dan menghubungi Anda melalui email atau WhatsApp.
                </p>
                <Button onClick={() => setModal(false)}>Close</Button>
              </div>
            ) : (
              <>
                <p className="eyebrow orange">LET’S TALK</p>
                <h2>Request Technical Consultation</h2>
                <form onSubmit={submit}>
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_subject" value="HELLMER — New Consultation Request" />
                  <div className="form-grid">
                    <label>
                      Full name
                      <input name="name" required placeholder="Nama lengkap" />
                    </label>
                    <label>
                      Company name
                      <input name="company" required placeholder="Nama perusahaan" />
                    </label>
                    <label>
                      Work email
                      <input
                        name="email"
                        type="email"
                        required
                        placeholder="email@company.com"
                      />
                    </label>
                    <label>
                      Phone / WhatsApp
                      <input name="whatsapp" required placeholder="Nomor WhatsApp" />
                    </label>
                  </div>
                  <label>
                    Product requirement
                    <select name="product">
                      <option>FR Industrial Workwear</option>
                      <option>Arc-Flash Workwear</option>
                      <option>High-Visibility Workwear</option>
                      <option>Corporate Workwear Program</option>
                      <option>Technical Pack / Sample</option>
                    </select>
                  </label>
                  <label>
                    Main hazard or work condition
                    <textarea
                      name="hazard"
                      placeholder="Ceritakan kondisi kerja atau kebutuhan Anda"
                      rows={4}
                    />
                  </label>
                  <p className="consent">
                    Dengan mengirimkan formulir ini, Anda menyetujui PT Barooka
                    Global Indonesia menghubungi Anda terkait kebutuhan workwear
                    dan technical consultation.
                  </p>
                  <Button disabled={submitting}>
                    {submitting ? "Mengirim…" : "Submit Consultation Request"}
                  </Button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
