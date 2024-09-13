import Vue from 'vue';
import VueI18n from 'vue-i18n';

// Register the plugin with Vue
Vue.use(VueI18n);

// Define the translations for different languages
const messages = {
  en: {
    // HOME
    carousel1: "IMI began in 2019 with two junior consultants working from a small apartment. Year after year, we have continued to grow, expanding our solutions and competencies while developing a new mindset in serving our clients. By 2024, IMI has grown to include 33 members across the Application, Programming, Technical, and Support departments.",
    carousel2: "The members of IMI are enthusiastic young consultants with a strong sense of curiosity and a great desire to learn, embracing the philosophy of 'learning to serve, serving to learn.'",
    carousel3: "We believe in successful implementation, adequate competence, professional communication with clients, and ultimately, attentive and responsive daily support.",
    eventTitle: "Upcoming Event",
    eventText: "IMI Conference on October 16, 2024, at Hotel Harris.",

    // SOLUTIONS
    heroHeaderTitle: "Learning to Serve, Serving to Learn",
    heroHeaderText: "The things we do on a daily basis:",
    heroHeaderSub1: "Implementing ERP systems in the manufacturing industry accurately and fully integrated.",
    heroHeaderSub2: "Carrying out continuous, step-by-step development to consistently improve efficiency for all clients.",
    heroHeaderSub3: "Providing excellent and responsive services to support the daily operations of our clients.",
    heroHeaderSub4: "Continuously learning new concepts and technologies to better serve all our clients.",
    heroHeaderSub5: "Developing ERP systems as a key support for the growth of the company.",

    solutionHeader1: "ERP Implementation for Manufacturing Companies",
    solutionText1: "At IMI, we are consultants with a primary focus on implementing integrated systems in factories and manufacturing companies. We believe in several fundamental principles that are key to the success of ERP system implementation:",
    solutionSub1_1: "Choosing the right ERP system.",
    solutionSub1_2: "Designing a medium- and long-term system implementation plan.",
    solutionSub1_3: "The adequate quality of consultants.",
    solutionSub1_4: "Understanding and standardizing business processes.",
    solutionSub1_5: "The correct implementation methodology.",
    solutionSub1_6: "Support after the implementation process is completed.",
    solutionTitle1_1: "Choosing the right ERP system",
    solutionText1_1: "Choosing an ERP system is a complex and often confusing task, typically starting with poorly defined company requirements. This challenge is not uncommon, and documenting these needs upfront is not an easy task. As a result, the selection team can easily be drawn into non-fundamental and technical aspects, such as focusing on the system's appearance, dashboards, reports, the number of available modules, or choosing the cheapest option, without addressing the essential and more critical requirements. This often leads to one outcome: extensive customization of the system, which ultimately makes the implementation less ideal, or even leads to failure. The process of evaluating ERP suitability can certainly be assisted by consultants (not salespeople) from the ERP vendors under consideration, with one crucial caveat—the need for professionalism in determining whether the system being considered can truly meet the company's needs. We firmly believe this assessment should be done from the start to prevent clients from encountering problems during implementation. This process is not merely about acquiring clients and selling licenses; it must be driven by good intentions and a genuine desire to help clients run their operations more effectively with the assistance of the system.",
    solutionTitle1_2: "Suitability vs Complexity",
    solutionText1_2: "The next important aspect is that it's not just about how comprehensive the chosen system is; there are more fundamental considerations, such as:",
    solutionSub_1_2_1: "How easy is it to set up the system initially?",
    solutionSub_1_2_2: "How easy is it to reconfigure the system when process changes occur?",
    solutionSub_1_2_3: "How user-friendly is the system for all departments, especially in the production area?",
    solutionSub_1_2_4: "How easy is it to add or adjust functionalities when needed?",
    solutionText1_3: "Since ERP systems are inherently comprehensive, the main issue is: how easy is the system to use? This is something we always consider, as ease of use is the key to a successful implementation.",

    solutionHeader2: "Add-on Program or Application",
    solutionTitle2_1: "Additional programs or applications",
    solutionText2_1: "We recognize that no system can meet every need within a company. Therefore, we also develop additional programs and applications for specific requirements, enhancing the flexibility and ease of use of the ERP system. This approach is used to avoid direct customization of the standard ERP program.",
    solutionText2_2: "Some areas that typically require additional functionality beyond the standard ERP include:",
    solutionSub2_1: "Inventory transactions in the warehouse, with additional validation, mobile device access, QR code enablement, etc.",
    solutionSub2_2: "Medium- and long-term system implementation planning.",
    solutionSub2_3: "Various types of additional validations and approvals.",
    solutionSub2_4: "Data on visits and sales from salespeople traveling to customers.",
    solutionSub2_5: "And many more.",
    solutionText2_3: "Of course, many ERP modules (both standard and additional) can perform the additional functions mentioned, such as WMS (Warehouse Management System), CRM (Customer Relationship Management), and others. However, the challenge is that most companies only need the basic functions, while the system provides an abundance of features. This often makes the implementation process more complicated, time-consuming, and expensive.",

    // TESTIMONIALS
    testimonialsText: "Here are some words from a few of our customers:",
    customer1: "The QAD system used in our company has been in place for over 10 years, and we have made several improvements in collaboration with the IMI (QAD) team. With quick and flexible support, we've implemented QR code usage, production scheduling, and integration with production machines, which has optimized productivity and operational efficiency. As a result, operators are now more focused on business growth and development.",
    customer2: "We have been using QAD for over 10 years and have gone through several version upgrades. This software has greatly supported daily production operations, particularly due to the system's flexibility in allowing customizations.",

    // CONTACT US
    contactUsTitle: "Contact Us",
    contactUsText: "Contact us for more information on what we can do for you. Good communication and excellent service are the core principles that guide our daily approach.",
    contactUsCardText: "Please fill your enquiry below",
    contactUsCardName: "Name",
    contactUsCardMessage: "Message",
    submit: "Submit",
  },
  id: {
    // HOME
    carousel1: "IMI dimulai di 2019 dengan 2 konsultan junior yang bekerja di apartemen kecil, kami terus bertumbuh tahun demi tahun, mengembangkan solusi dan kompetensi, juga membentuk pola pikir baru dalam melayani klien-klien.  Di 2024 IMI sudah beranggotakan 33 orang yang terdiri dari bagian Application, Programming, Technical dan Support.",
    carousel2: "Anggota IMI adalah konsultan-konsultan muda yang penuh semangat dengan rasa ingin tau dan keinginan belajar yang besar, learning to serve, serving to learn.",
    carousel3: "Kami percaya pada implementasi yang sukses, kompetensi yang memadai, komunikasi dengan klien yang professional dan pada akhirnya daily support yang atentif dan responsif.",
    eventTitle: "Event Mendatang",
    eventText: "IMI Conference 16 Oktober, 2024 di Hotel Harris.",

    // SOLUTIONS
    heroHeaderTitle: "Learning to Serve, Serving to Learn",
    heroHeaderText: "Hal-hal yang kami lakukan setiap harinya:",
    heroHeaderSub1: "Melakukan penerapan ERP sistem di industri manufaktur secara benar dan terintegrasi lengkap.",
    heroHeaderSub2: "Melakukan pengembangan berkelanjutan tahap demi tahap untuk terus meningkatkan efisiensi di semua klien.",
    heroHeaderSub3: "Memberikan layanan yang baik dan responsif untuk mendukung operasional klien sehari-hari.",
    heroHeaderSub4: "Terus belajar hal-hal baru secara konsep dan teknologi untuk di semua klien.",
    heroHeaderSub5: "Membuat sistem ERP sebagai penunjang pertumbuhan Perusahaan.",

    solutionHeader1: "ERP Implementation for Manufacturing Companies",
    solutionText1: "Di IMI, kami adalah konsultan-konsultan yang mempunyai fokus utama melakukan implementasi sistem ter-integrasi di pabrik, perusahaan manufaktur. Kami percaya pada beberapa hal mendasar yang menjadi kunci keberhasilan implementasi sistem ERP:",
    solutionSub1_1: "Pemilihan ERP yang sesuai.",
    solutionSub1_2: "Rancangan penerapan sistem jangka menengah dan panjang.",
    solutionSub1_3: "Kualitas konsultan yang memadai.",
    solutionSub1_4: "Pemahaman dan standarisasi proses bisnis.",
    solutionSub1_5: "Cara (metodologi) implementasi yang benar.",
    solutionSub1_6: "Dukungan (support) setelah proses implementasi selesai.",
    solutionTitle1_1: "Pemilihan ERP yang sesuai",
    solutionText1_1: "Memilih ERP adalah tugas yang rumit dan bisa membingungkan, dan ini biasanya diawali dengan dokumentasi kebutuhan perusahaan yang tidak didefinisikan dengan baik di awal, dan hal ini memang juga tidak mudah dilakukan. Sehingga pada akhirnya tim pemilih bisa 'terjerumus' ke hal-hal yang tidak fundamental dan bersifat teknis : melihat tampilan, dashboard, laporan, berapa banyak modul yang disediakan, investasi yang paling murah, tanpa membahas esensi kebutuhan yang mendasar dan lebih penting. Dan semua ini berujung pada 1 hal: banyaknya customisasi terhadap sistem yang pada akhirnya membuat implementasi tidak ideal, bahkan gagal. Proses penilaian kecocokan ini tentunya bisa juga dibantu oleh konsultan-konsultan (bukan salesman) dari ERP yang sedang diseleksi, dengan satu catatan penting, perlunya profesionalisme untuk mengatakan apakah sistem yang akan diterapkan bisa menjawab kebutuhan perusahaan, dan inilah yang kami yakini seharusnya dilakukan di awal untuk tidak membuat klien mengalami masalah saat implementasi. Proses ini bukan sekedar proses mencari klien dan menjual lisensi, tapi juga harus dilandasi niat baik, keinginan untuk membantu klien untuk menjalankan kegiatan operasional dengan lebih baik dengan bantuan sistem.",
    solutionTitle1_2: "Kecocokan vs Kerumitan",
    solutionText1_2: "Hal penting berikutnya adalah, bukan hanya seberapa lengkap sistem yang dipilih, ada pertimbangan-pertimbangan yang lebih mendasar:",
    solutionSub_1_2_1: "Seberapa mudah sistem di setup untuk pertama kali?",
    solutionSub_1_2_2: "Seberapa mudah sistem di konfigurasi ulang jika terjadi perubahan proses?",
    solutionSub_1_2_3: "Seberapa mudah sistem dipakai untuk semua bagian, terutama di area produksi?",
    solutionSub_1_2_4: "Seberapa mudah jika diperlukan penambahan atau penyesuaian fungsi?",
    solutionText1_3: "Karena ERP sistem pada dasarnya sudah lengkap, yang menjadi masalah utama adalah: seberapa mudah sistem ini dipakai? Ini adalah hal yang selalu menjadi pemikiran kami, karena kemudahan pemakaian sistem adalah kunci keberhasilan implementasi.",

    solutionHeader2: "Add-on Program or Application",
    solutionTitle2_1: "Tambahan program atau aplikasi",
    solutionText2_1: "Kami sadar bahwa tidak ada sistem yang bisa menjawab semua kebutuhan di suatu perusahaan, sehingga kami juga membuat program dan aplikasi tambahan untuk kebutuhan tertentu untuk menambah fleksibilitas dan kemudahan pemakaian sistem ERP. Cara ini dipakai agar tidak perlu melakukan customisasi langsung terhadap program standard ERP.",
    solutionText2_2: "Beberapa hal yang biasanya membutuhkan fungsi tambahan terhadap standard ERP:",
    solutionSub2_1: "Transaksi inventory di gudang, dengan validasi tambahan, lewat mobile device, QR code enabled, dll.",
    solutionSub2_2: "Rancangan penerapan sistem jangka menengah dan panjang.",
    solutionSub2_3: "Berbagai jenis validasi dan approval tambahan.",
    solutionSub2_4: "Data kunjungan, penjualan salesman yang berkeliling ke para pelanggan.",
    solutionSub2_5: "Dan masih banyak lainnya.",
    solutionText2_3: "Tentu saja banyak modul di ERP (standard maupun tambahan) yang bisa melakukan fungsi-fungsi tambahan tadi, modul WMS (warehouse management system), CRM (customer relationship management), dll, tapi masalahnya: yang diperlukan kebanyakan perusahaan hanya fungsi dasar saja tapi yang disediakan sangat banyak sehingga menyebabkan penerapannya tidak mudah, lama dan tidak murah.",

    // TESTIMONIALS
    testimonialsText: "Berikut adalah kata-kata dari beberapa customer kami:",
    customer1: "QAD yg digunakan diperusahaan kami sudah lebih dari 10tahun, kami sudah beberapa kali melakukan improvisasi bersama tim IMI(QAD) dengan support yg cepat & fleksibel yaitu penggunaan QRcode, production scheduling serta integrasi dengan mesin-mesin produksi sehingga produktifitas dan efektifitas kerja menjadi lebih optimal. Operator jadi lebih fokus pada pertumbuhan dan perkembangan bisnis.",
    customer2: "Kami menggunakan QAD sudah lebih dari 10 tahun dan sudah mengalami beberapa kali upgrade versi. Penggunaan software ini sudah banyak membantu operasional harian produksi terutama fleksibilitas system dalam melakukan kustomisasi.",

    // CONTACT US
    contactUsTitle: "Hubungi Kami",
    contactUsText: "Hubungi kami untuk informasi mengenai apa saja yang bisa kami lakukan untuk Bapak-Ibu, komunikasi dan pelayanan yang baik adalah hal utama yang menjadi dasar sikap kami sehari-hari.",
    contactUsCardText: "Silahkan isi form berikut",
    contactUsCardName: "Nama",
    contactUsCardMessage: "Pesan",
    submit: "Kirim",
  }
};

// Create the VueI18n instance
const i18n = new VueI18n({
  locale: 'en', // Set default language
  messages, // Set the locale messages
});

export default i18n;
