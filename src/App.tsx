import { useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  ChevronRight,
  Check,
  Menu,
  ShieldCheck,
  X,
  FileCheck2,
  Ruler,
  PackageCheck,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
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
    "Pakaian kerja tahan api untuk kebutuhan industri, ditentukan melalui penilaian risiko dan spesifikasi teknis.",
    "flame",
  ],
  [
    "Inherent Aramid & FR Blends",
    "Pilihan material teknis untuk kebutuhan daya tahan, perlindungan termal, dan evaluasi penggunaan tertentu.",
    "layers",
  ],
  [
    "Arc-Flash Workwear",
    "Untuk bahaya termal akibat busur listrik, dengan batas perlindungan yang jelas dari sengatan listrik.",
    "arc",
  ],
  [
    "Welding Workwear",
    "Konstruksi dan spesifikasi yang disesuaikan dengan kebutuhan pengelasan pelanggan.",
    "weld",
  ],
  [
    "Antistatic Workwear",
    "Perlindungan elektrostatis yang dipilih sesuai kondisi penggunaan dan penilaian risiko.",
    "shield",
  ],
  [
    "High-Visibility Workwear",
    "Warna dan material reflektif untuk tingkat visibilitas yang sesuai.",
    "visibility",
  ],
];

const industries = [
  [
    "Oil & Gas",
    "Tinjauan risiko, kenyamanan, daya tahan, dan pasokan berulang.",
    Factory,
  ],
  [
    "Energy & Utilities",
    "Untuk tim operasi, pemeliharaan, kelistrikan, dan engineering.",
    Zap,
  ],
  [
    "EPC & Contractors",
    "Untuk spesifikasi klien, mobilisasi, dan pengiriman ke berbagai lokasi.",
    HardHat,
  ],
  [
    "Chemical & Process",
    "Untuk paparan risiko, batasan pakaian kerja, dan perlengkapan APD.",
    Beaker,
  ],
  [
    "Mining",
    "Daya tahan, visibilitas, kesesuaian ukuran, dan konsistensi pasokan di lapangan.",
    Mountain,
  ],
  [
    "Manufacturing",
    "Standardisasi untuk pabrik, produksi, dan engineering.",
    Settings2,
  ],
];

const steps = [
  "Pahami",
  "Tentukan Spesifikasi",
  "Sampel & Kesesuaian Ukuran",
  "Kendalikan",
  "Pasok",
  "Tingkatkan",
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
  const [formProduct, setFormProduct] = useState("FR Industrial Workwear");
  const open = (product = "FR Industrial Workwear") => {
    setSent(false);
    setFormProduct(product);
    setModal(true);
  };
  const openTechPack = () => open("Dokumen Teknis / Sampel");
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
              Solusi Workwear
            </a>
            <a href="#industries" onClick={() => setMenu(false)}>
              Industri
            </a>
            <a href="#standards" onClick={() => setMenu(false)}>
              Standar Teknis
            </a>
            <a href="#program" onClick={() => setMenu(false)}>
              Program Terkelola
            </a>
            <a href="#about" onClick={() => setMenu(false)}>
              Tentang HELLMER
            </a>
            <a href="#insights" onClick={() => setMenu(false)}>
              Wawasan
            </a>
          </nav>
          <button className="header-cta" onClick={() => open()}>
            Konsultasi Teknis <ArrowRight size={15} />
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
              hanya dari foto, harga, atau label "premium". HELLMER membantu
              perusahaan memilih, menguji, mengelola, dan memasok workwear
              berdasarkan risiko kerja, kebutuhan lokasi, kenyamanan pekerja,
              sertifikasi dan bukti teknis, serta konsistensi setiap pesanan.
            </p>
            <div className="button-row">
              <Button onClick={() => open()}>Konsultasi Teknis</Button>
              <Button primary={false} onClick={() => open()}>
                Minta Sampel & Dokumen Teknis
              </Button>
            </div>
            <p className="reassurance">
              <Check size={16} /> Untuk oil and gas, energi, EPC, kimia,
              pertambangan, manufaktur, dan operasi industri di berbagai lokasi.
            </p>
          </div>
          <div className="hero-mark">
            <img src="/hellmer-mark.png" alt="" />
          </div>
          <div className="hero-spec">
            EST. INDONESIA&nbsp;&nbsp; / &nbsp;&nbsp; TECHNICAL WORKWEAR
          </div>
        </section>

        <section className="trust-bar">
          <div className="container trust-bar-grid">
            {[
              ["6", "Kategori Produk Teknis", "FR · Arc-Flash · Hi-Vis · Welding · Antistatic · Aramid"],
              ["6", "Segmen Industri", "Oil & Gas · EPC · Energy · Chemical · Mining · Manufacturing"],
              ["10+", "Standar Referensi", "EN ISO · NFPA · IEC · ASTM — dapat diverifikasi"],
              ["Jakarta", "Berbasis di Indonesia", "PT Barooka Global Indonesia"],
            ].map(([num, label, sub]) => (
              <div key={label} className="trust-stat">
                <strong>{num}</strong>
                <span>{label}</span>
                <p>{sub}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section problem">
          <div className="container split">
            <div>
              <p className="eyebrow">TANTANGAN</p>
              <h2>
                Wearpack yang{" "}
                <span className="accent-text">terlihat bagus</span> belum tentu
                siap menghadapi tuntutan industri.
              </h2>
            </div>
            <div className="prose">
              <p>
                Banyak perusahaan memilih workwear dari harga, tampilan, atau
                janji pemasok. Masalah biasanya baru terasa saat produk digunakan
                di lapangan.
              </p>
              <p>
                Ukuran tidak konsisten. Material atau detail pelengkap berubah saat pesanan
                berulang. Bukti uji, sertifikasi, atau dokumen teknis tidak siap
                ketika audit. Saat ada produk cacat, proses penggantiannya tidak
                jelas.
              </p>
              <p>
                Di lingkungan kerja berisiko tinggi, masalah workwear dapat
                memengaruhi{" "}
                <strong>
                  keselamatan, kenyamanan pekerja, kelancaran operasi, kepatuhan
                  pengadaan, dan reputasi perusahaan.
                </strong>
              </p>
            </div>
          </div>
        </section>

        <section className="section agitation">
          <div className="container">
            <p className="eyebrow orange">LEBIH DARI HARGA PER UNIT</p>
            <div className="agitate-line">
              <h2>
                Harga murah dapat menjadi{" "}
                <span className="accent-text">mahal</span> ketika spesifikasi,
                ukuran, serta sertifikasi dan bukti teknis tidak terkendali.
              </h2>
              <p>
                Biaya sebenarnya juga mencakup penukaran ukuran, penggantian,
                kehabisan stok, perbaikan logo, keterlambatan pengiriman, pembelian ulang
                darurat, kendala sertifikasi, dan waktu yang terbuang.
              </p>
            </div>
          </div>
        </section>

        <section className="section" id="solutions">
          <div className="container">
            <p className="eyebrow">PENDEKATAN HELLMER</p>
            <div className="section-head">
              <h2>
                Satu mitra untuk workwear teknis yang{" "}
                <span className="accent-text">siap dipertanggungjawabkan.</span>
              </h2>
              <p>
                Produk, bukti teknis, kesesuaian ukuran, quality control, dan layanan
                pasokan dalam satu alur kerja yang jelas.
              </p>
            </div>
            <div className="pillars">
              {[
                [
                  ShieldCheck,
                  "Dari risiko ke spesifikasi",
                  "Kami mulai dari kebutuhan pekerjaan dan risiko di lokasi kerja.",
                ],
                [
                  FileCheck2,
                  "Bukti teknis",
                  "Klaim produk harus didukung sertifikasi atau bukti teknis yang jelas dan mudah ditinjau.",
                ],
                [
                  Ruler,
                  "Kesesuaian ukuran",
                  "Sampel, set ukuran, survei ukuran, dan persetujuan untuk hasil yang lebih konsisten.",
                ],
                [
                  PackageCheck,
                  "Pasokan terkelola",
                  "Kelola SKU, kualitas, pengiriman, penggantian, ketertelusuran batch, dan pengisian ulang stok.",
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
                <p className="eyebrow">KATEGORI PRODUK</p>
                <h2>
                  Workwear teknis untuk{" "}
                  <span className="accent-text">kebutuhan operasi</span> yang
                  berbeda.
                </h2>
              </div>
              <p>
                Tidak ada satu wearpack yang tepat untuk semua risiko kerja. Kategori produk
                disusun berdasarkan kebutuhan penggunaan dan bukti
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
                  <button onClick={() => open()}>
                    Lihat solusi <ChevronRight size={17} />
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section industries" id="industries">
          <div className="container">
            <p className="eyebrow">INDUSTRI</p>
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
                    Selengkapnya <ArrowRight size={15} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="evidence" id="standards">
          <div className="container evidence-grid">
            <div>
              <p className="eyebrow light">BERDASARKAN BUKTI</p>
              <h2>
                Premium bukan hanya bahan. Premium adalah kemampuan untuk
                <span className="accent-text">
                  membuktikan dan mengelola kualitas.
                </span>
              </h2>
              <Button onClick={() => open()}>Minta Dokumen Teknis</Button>
            </div>
            <div className="evidence-card">
              <h3>Kebijakan bukti teknis HELLMER</h3>
              <p>
                Setiap SKU idealnya memiliki identitas model, komposisi
                material, konstruksi, ukuran, petunjuk perawatan, revisi,
                ketertelusuran, serta sertifikasi atau dokumen performa yang relevan.
              </p>
              <ul>
                <li>
                  <Check /> Bukti teknis milik HELLMER
                </li>
                <li>
                  <Check /> Referensi standar dari pihak ketiga
                </li>
                <li>
                  <Check /> Klaim pemasok — perlu verifikasi
                </li>
              </ul>
              <small>
                Kami tidak menggunakan istilah "bersertifikat", "disetujui", atau
                "sesuai standar" tanpa sertifikasi atau dokumen yang relevan dengan produk dan
                ruang lingkup klaim.
              </small>
            </div>
          </div>
        </section>

        <section className="section cert-section">
          <div className="container">
            <p className="eyebrow">STANDAR TEKNIS</p>
            <p className="cert-sub">
              HELLMER menggunakan standar internasional sebagai referensi spesifikasi produk.
              Status sertifikasi per SKU tercantum dalam dokumen teknis masing-masing produk.
            </p>
            <div className="cert-grid">
              {[
                ["EN ISO 11612", "Flame / Heat", "Perlindungan dari panas dan api terbuka"],
                ["EN ISO 11611", "Welding", "Pakaian kerja untuk pengelasan"],
                ["EN ISO 20471", "Hi-Visibility", "Pakaian visibilitas tinggi"],
                ["IEC 61482-2", "Arc Flash", "Perlindungan busur listrik"],
                ["NFPA 2112", "Flash Fire", "Perlindungan dari flash fire"],
                ["ASTM F1959", "ATPV Rating", "Arc Thermal Protection Value"],
              ].map(([code, type, desc]) => (
                <div key={code} className="cert-badge">
                  <span className="cert-code">{code}</span>
                  <span className="cert-type">{type}</span>
                  <p>{desc}</p>
                </div>
              ))}
            </div>
            <div className="tech-pack-banner">
              <div>
                <h3>Technical Specification Pack</h3>
                <p>
                  Dokumen teknis per SKU: komposisi material, standar referensi, konstruksi,
                  petunjuk perawatan, dan sertifikasi yang berlaku.
                </p>
              </div>
              <Button onClick={openTechPack}>Minta Technical Pack</Button>
            </div>
          </div>
        </section>

        <section className="section" id="program">
          <div className="container">
            <p className="eyebrow">PROGRAM WORKWEAR TERKELOLA</p>
            <div className="section-head">
              <h2>
                Dari pembelian garmen menjadi program workwear yang lebih
                <span className="accent-text">terkendali.</span>
              </h2>
              <p>
                Dari kebutuhan awal hingga pesanan berulang, kami menyusun alur yang
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
                        "Memahami lokasi kerja, pekerjaan, risiko, jumlah pekerja, ukuran, dan kebutuhan.",
                        "Menyusun brief, tujuan penggunaan, kebutuhan material, dan kriteria penerimaan.",
                        "Sampel, set ukuran, uji kesesuaian, masukan, dan persetujuan sebelum produksi.",
                        "Revisi, material, detail pelengkap, konstruksi, inspeksi, dan catatan batch.",
                        "Pengiriman, visibilitas pesanan, penggantian, sertifikasi dan bukti teknis, serta pengisian ulang stok.",
                        "Menggunakan data cacat, kesesuaian ukuran, ketepatan pengiriman, dan masukan untuk program berikutnya.",
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
              <p className="eyebrow">MENGAPA HELLMER</p>
              <span className="why-index">05 / PERBEDAANNYA</span>
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
                <b>Pemasok biasa</b>
                <b>Pendekatan HELLMER</b>
              </div>
              {[
                [
                  "Spesifikasi generik, tidak sesuai risiko kerja",
                  "Tinjauan risiko kerja dan spesifikasi yang jelas",
                ],
                [
                  "Ukuran sering tidak pas dan tidak konsisten",
                  "Survei ukuran, set ukuran, dan matriks ukuran",
                ],
                [
                  "Sertifikasi, bukti uji, dan data produk tidak lengkap",
                  "Bukti teknis per SKU yang mudah ditelusuri",
                ],
                [
                  "Pesanan berulang berubah kualitas atau spesifikasinya",
                  "SKU terkendali, revisi, dan ketertelusuran batch",
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
                  "Total biaya kepemilikan dan pasokan yang terkelola",
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

        <section className="section surface social-proof">
          <div className="container">
            <p className="eyebrow">KEPERCAYAAN INDUSTRI</p>
            <h2>
              Workwear yang{" "}
              <span className="accent-text">dipakai di operasi nyata.</span>
            </h2>
            <p className="social-intro">
              Kami melayani tim HSE, procurement, dan operasi di sektor-sektor
              berisiko tinggi di seluruh Indonesia.
            </p>
            <div className="sector-grid">
              {[
                [Factory, "Oil & Gas", "Onshore & offshore, produksi, maintenance"],
                [Zap, "Energy & Power", "PLTU, PLTG, transmisi dan distribusi"],
                [HardHat, "EPC & Konstruksi", "Proyek EPC, konstruksi, mobilisasi"],
                [Beaker, "Chemical & Process", "Pabrik kimia, petrokimia, refinery"],
                [Mountain, "Mining", "Open pit, underground, site multi-lokasi"],
                [Settings2, "Manufacturing", "Pabrik, assembly, heavy industry"],
              ].map(([Icon, name, desc]) => (
                <div key={name as string} className="sector-card">
                  <Icon size={24} />
                  <strong>{name as string}</strong>
                  <span>{desc as string}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-banner">
          <div className="container">
            <p className="eyebrow light">SIAP MEMULAI</p>
            <h2>
              Jangan mulai dari katalog.
              <br />
              Mulai dari{" "}
              <span className="accent-text">kebutuhan pekerjaan Anda.</span>
            </h2>
            <p>
              Kirimkan detail lokasi kerja, jumlah pekerja, risiko utama, spesifikasi
              saat ini, dan target pengadaan. Kami akan membantu menentukan
              langkah berikutnya.
            </p>
            <div className="button-row">
              <Button onClick={() => open()}>Konsultasi Teknis</Button>
              <a href="mailto:sales@hellmer.id" className="button button-secondary">
                Email HELLMER <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>

        <section className="section faq" id="insights">
          <div className="container split">
            <div>
              <p className="eyebrow">WAWASAN & FAQ</p>
              <h2>
                Pengetahuan workwear untuk{" "}
                <span className="accent-text">keputusan yang lebih baik.</span>
              </h2>
              <p>
                Kami membahas material, risiko kerja, standar, ukuran, pengadaan,
                dan workwear operasional dengan informasi yang jujur.
              </p>
            </div>
            <div className="faq-list">
              {[
                [
                  "Apakah HELLMER menjual wearpack tahan api?",
                  "HELLMER menyediakan workwear teknis untuk kebutuhan yang memerlukan perlindungan tahan api atau performa panas/api, sesuai penilaian risiko dan spesifikasi pelanggan.",
                ],
                [
                  "Apakah semua produk HELLMER sudah bersertifikat?",
                  "Status sertifikasi atau bukti pengujian berbeda menurut produk dan model. HELLMER hanya menyatakan standar atau sertifikasi apabila dokumen yang relevan tersedia.",
                ],
                [
                  "Apakah HELLMER dapat membuat desain corporate?",
                  "Ya. Kami dapat mendukung desain khusus, warna, logo, penandaan identitas, rentang ukuran, dan kebutuhan lokasi kerja tertentu setelah kebutuhan teknis disepakati.",
                ],
                [
                  "Berapa minimum order untuk workwear HELLMER?",
                  "Minimum order bervariasi tergantung kategori produk dan spesifikasi. Untuk program workwear terkelola, kami bekerja dengan perusahaan yang membutuhkan pasokan berulang — mulai dari kebutuhan tim kecil hingga program multi-site.",
                ],
                [
                  "Apakah HELLMER melayani pengiriman ke luar Jawa?",
                  "Ya. Kami mendukung pengiriman ke seluruh Indonesia, termasuk lokasi proyek dan site operasi di luar Jawa. Pengiriman ke lokasi terpencil dapat dibahas dalam konsultasi teknis.",
                ],
                [
                  "Bagaimana proses konsultasi teknis HELLMER?",
                  "Proses dimulai dengan brief kebutuhan: lokasi kerja, risiko utama, jumlah pekerja, dan spesifikasi saat ini jika ada. Kami kemudian menyusun rekomendasi produk, standar relevan, dan langkah berikutnya.",
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

        <section className="section about-section" id="about">
          <div className="container">
            <p className="eyebrow">TENTANG HELLMER</p>
            <div className="about-grid">
              <div>
                <h2>
                  Industrial workwear yang{" "}
                  <span className="accent-text">bisa dipertanggungjawabkan.</span>
                </h2>
                <p className="about-body">
                  HELLMER adalah brand workwear teknis dari PT Barooka Global
                  Indonesia, dibangun untuk membantu perusahaan di sektor
                  berisiko tinggi mengelola pakaian kerja mereka — dari
                  spesifikasi awal hingga pasokan berulang yang konsisten.
                </p>
                <p className="about-body">
                  Kami tidak menjual dari katalog generik. Setiap engagement
                  dimulai dengan memahami pekerjaan, risiko, dan lingkungan
                  operasi klien, kemudian memilih dan mengelola workwear
                  berdasarkan kebutuhan tersebut.
                </p>
              </div>
              <div>
                <div className="about-card">
                  <p className="footer-label">BADAN USAHA</p>
                  <p className="about-company-name">PT Barooka Global Indonesia</p>
                  <p>
                    <MapPin size={14} />
                    AD Premier 9th Floor, Jl. TB Simatupang No. 5 Ragunan,
                    Pasar Minggu, Jakarta Selatan 12550
                  </p>
                  <a href="tel:085647486700">
                    <Phone size={14} />
                    085647486700
                  </a>
                  <a href="mailto:sales@hellmer.id">
                    <Mail size={14} />
                    sales@hellmer.id
                  </a>
                  <a
                    href="https://wa.me/6285647486700"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MessageCircle size={14} />
                    WhatsApp
                  </a>
                </div>
                <div className="marketplace-links">
                  <p className="footer-label">TERSEDIA DI</p>
                  <div className="marketplace-links-row">
                    <a
                      href="https://www.tokopedia.com/search?st=product&q=hellmer+workwear"
                      target="_blank"
                      rel="noreferrer"
                      className="marketplace-btn"
                    >
                      Tokopedia
                    </a>
                    <a
                      href="https://shopee.co.id/search?keyword=hellmer+workwear"
                      target="_blank"
                      rel="noreferrer"
                      className="marketplace-btn"
                    >
                      Shopee
                    </a>
                  </div>
                </div>
              </div>
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
              Pasokan yang lebih <span className="accent-text">terkendali.</span>
            </h2>
            <p>
              HELLMER membantu perusahaan Indonesia mengelola workwear teknis
              dari spesifikasi hingga pesanan berulang.
            </p>
            <Button onClick={() => open()}>Konsultasi Teknis</Button>
          </div>
          <div className="footer-links">
            <div>
              <p className="footer-label">EKSPLORASI</p>
              <a href="#solutions">Solusi Workwear</a>
              <a href="#industries">Industri</a>
              <a href="#standards">Standar Teknis</a>
              <a href="#program">Program Workwear Terkelola</a>
              <a href="#insights">Wawasan</a>
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
              <a
                href="https://wa.me/6285647486700"
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>
              <div className="footer-marketplace">
                <p className="footer-label">TERSEDIA DI</p>
                <a
                  href="https://www.tokopedia.com/search?st=product&q=hellmer+workwear"
                  target="_blank"
                  rel="noreferrer"
                >
                  Tokopedia
                </a>
                <a
                  href="https://shopee.co.id/search?keyword=hellmer+workwear"
                  target="_blank"
                  rel="noreferrer"
                >
                  Shopee
                </a>
              </div>
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
            tujuan penggunaan harus dibaca berdasarkan dokumen produk serta ruang lingkup yang
            berlaku.
          </p>
        </div>
      </footer>
      <a
        className="whatsapp"
        href="https://wa.me/6285647486700"
        target="_blank"
        rel="noreferrer"
        aria-label="Hubungi HELLMER melalui WhatsApp"
      >
        <MessageCircle size={21} />
        <span>Hubungi HELLMER</span>
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
                  Permintaan Anda telah diterima. Tim HELLMER akan meninjau
                  informasi dan menghubungi Anda melalui email atau WhatsApp.
                </p>
                <Button onClick={() => setModal(false)}>Tutup</Button>
              </div>
            ) : (
              <>
                <p className="eyebrow orange">MARI BERDISKUSI</p>
                <h2>Konsultasi Teknis</h2>
                <form onSubmit={submit}>
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_subject" value="HELLMER — New Consultation Request" />
                  <div className="form-grid">
                    <label>
                      Nama lengkap
                      <input name="name" required placeholder="Nama lengkap" />
                    </label>
                    <label>
                      Nama perusahaan
                      <input name="company" required placeholder="Nama perusahaan" />
                    </label>
                    <label>
                      Email kantor
                      <input
                        name="email"
                        type="email"
                        required
                        placeholder="email@company.com"
                      />
                    </label>
                    <label>
                      Telepon / WhatsApp
                      <input name="whatsapp" required placeholder="Nomor WhatsApp" />
                    </label>
                  </div>
                  <label>
                    Kebutuhan produk
                    <select name="product" value={formProduct} onChange={(e) => setFormProduct(e.target.value)}>
                      <option>FR Industrial Workwear</option>
                      <option>Arc-Flash Workwear</option>
                      <option>High-Visibility Workwear</option>
                      <option>Corporate Workwear Program</option>
                      <option>Dokumen Teknis / Sampel</option>
                    </select>
                  </label>
                  <label>
                    Risiko utama atau kondisi kerja
                    <textarea
                      name="hazard"
                      placeholder="Ceritakan kondisi kerja atau kebutuhan Anda"
                      rows={4}
                    />
                  </label>
                  <p className="consent">
                    Dengan mengirimkan formulir ini, Anda menyetujui PT Barooka
                    Global Indonesia menghubungi Anda terkait kebutuhan workwear
                    dan konsultasi teknis.
                  </p>
                  <Button disabled={submitting}>
                    {submitting ? "Mengirim…" : "Kirim Permintaan Konsultasi"}
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
