<template>
    <div class="solutions-container text-lg">
        <!-- Hero Section -->
        <div class="hero-wrapper">
            <div class="hero-section relative flex items-start justify-end text-left">
                <div class="text-content p-8">
                    <h1 class="text-3xl font-bold text-white mb-4">Learning to Serve, Serving to Learn</h1>
                    <p class="text-white text-lg max-w-xl font-bold">{{ $t('heroHeaderText') }}</p>
                    <ul class="list-disc text-white text-lg max-w-2xl font-semibold mt-3 leading-relaxed text-justify">
                        <li>{{ $t('heroHeaderSub1') }}</li>
                        <li>{{ $t('heroHeaderSub2') }}</li>
                        <li>{{ $t('heroHeaderSub3') }}</li>
                        <li>{{ $t('heroHeaderSub4') }}</li>
                        <li>{{ $t('heroHeaderSub5') }}</li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- First Row -->
        <div class="container mx-auto p-5 mt-10">
            <!-- Title -->
            <h2 class="text-3xl font-bold mb-10 text-center">{{ $t('solutionHeader1') }}</h2>

            <!-- Content in 5 columns (2/5 for text, 3/5 for image) -->
            <div class="grid grid-cols-1 md:grid-cols-5 gap-4">
                <!-- Left Column (Text, spans 2/5 of the grid) -->
                <div class="col-span-2">
                    <p class="text-justify leading-relaxed">
                        {{ $t('solutionText1') }}
                    </p>
                    <ul class="list-disc ml-5 leading-relaxed mt-4">
                        <li>{{ $t('solutionSub1_1') }}</li>
                        <li>{{ $t('solutionSub1_2') }}</li>
                        <li>{{ $t('solutionSub1_3') }}</li>
                        <li>{{ $t('solutionSub1_4') }}</li>
                        <li>{{ $t('solutionSub1_5') }}</li>
                        <li>{{ $t('solutionSub1_6') }}</li>
                    </ul>
                </div>

                <!-- Right Column (Image, spans 3/5 of the grid) -->
                <div class="col-span-3 flex justify-center">
                    <div class="w-full bg-gray-200">
                        <img src="@/assets/solution-1.png" alt="Solution Image"
                            class="object-contain w-full h-full rounded">
                    </div>
                </div>
            </div>

            <!-- Additional content -->
            <div class="mt-2">
                <p><strong>Pemilihan ERP yang sesuai</strong></p>
                <p class="text-justify mt-3 leading-relaxed">
                    Memilih ERP adalah tugas yang rumit dan bisa membingungkan, dan ini biasanya diawali dengan
                    dokumentasi kebutuhan perusahaan yang tidak didefinisikan dengan baik di awal, dan hal ini memang
                    juga tidak mudah dilakukan. Sehingga pada akhirnya tim pemilih bisa 'terjerumus' ke hal-hal yang
                    tidak fundamental dan bersifat teknis : melihat tampilan, dashboard, laporan, berapa banyak modul
                    yang disediakan, investasi yang paling murah, tanpa membahas esensi kebutuhan yang mendasar dan
                    lebih penting.

                    Dan semua ini berujung pada 1 hal: banyaknya customisasi terhadap sistem yang pada akhirnya membuat
                    implementasi tidak ideal, bahkan gagal.

                    Proses penilaian kecocokan ini tentunya bisa juga dibantu oleh konsultan-konsultan (bukan salesman)
                    dari ERP yang sedang diseleksi, dengan satu catatan penting, perlunya profesionalisme untuk
                    mengatakan apakah sistem yang akan diterapkan bisa menjawab kebutuhan perusahaan, dan inilah yang
                    kami yakini seharusnya dilakukan di awal untuk tidak membuat klien mengalami masalah saat
                    implementasi. Proses ini bukan sekedar proses mencari klien dan menjual lisensi, tapi juga harus
                    dilandasi niat baik, keinginan untuk membantu klien untuk menjalankan kegiatan operasional dengan
                    lebih baik dengan bantuan sistem.</p>

                <p class="mt-5 mb-3"><strong>Kecocokan vs Kerumitan</strong></p>
                <p>Hal penting berikutnya adalah, bukan hanya seberapa lengkap sistem yang dipilih, ada
                    pertimbangan-pertimbangan yang lebih mendasar:</p>
                <ul class="list-disc ml-5 leading-relaxed mt-4">
                    <li>Seberapa mudah sistem di setup untuk pertama kali?</li>
                    <li>Seberapa mudah sistem di konfigurasi ulang jika terjadi perubahan proses?</li>
                    <li>Seberapa mudah sistem dipakai untuk semua bagian, terutama di area produksi?</li>
                    <li>Seberapa mudah jika diperlukan penambahan atau penyesuaian fungsi?</li>
                </ul>
                <p class="mt-3 leading-relaxed">
                    Karena ERP sistem pada dasarnya sudah lengkap, yang menjadi masalah utama adalah: seberapa mudah
                    sistem ini dipakai?
                    Ini adalah hal yang selalu menjadi pemikiran kami, karena kemudahan pemakaian sistem adalah kunci
                    keberhasilan implementasi.</p>
            </div>
        </div>

        <!-- Other Sections Below (Unchanged) -->
        <!-- Second Row -->
        <div class="container mx-auto p-5 mt-0">
            <!-- Title -->
            <h2 class="text-3xl font-bold mb-10 text-center">Add-on Program or Application</h2>

            <!-- Content in 5 columns (2/5 for text, 3/5 for image) -->
            <div class="grid grid-cols-1 md:grid-cols-5 gap-4">
                <!-- Left Column (Text, spans 2/5 of the grid) -->
                <!-- Right Column (Image, spans 3/5 of the grid) -->
                <div class="col-span-3 flex justify-center">
                    <div class="w-full bg-gray-200">
                        <img src="@/assets/solution-2.png" alt="Solution Image"
                            class="object-fill w-full h-full rounded">
                    </div>
                </div>
                <div class="col-span-2">
                    <p class="mb-3"><strong>Tambahan program atau aplikasi</strong></p>
                    <p class="text-justify leading-relaxed">
                        Kami sadar bahwa tidak ada sistem yang bisa menjawab semua kebutuhan di suatu perusahaan,
                        sehingga kami juga membuat program dan aplikasi tambahan untuk kebutuhan tertentu untuk menambah
                        fleksibilitas dan kemudahan pemakaian sistem ERP. Cara ini dipakai agar tidak perlu melakukan
                        customisasi langsung terhadap program standard ERP.
                    </p>

                    <p class="text-justify leading-relaxed mt-3">Beberapa hal yang biasanya membutuhkan fungsi tambahan
                        terhadap standard ERP:</p>
                    <ul class="list-disc ml-5 leading-relaxed mt-4">
                        <li>Transaksi inventory di gudang, dengan validasi tambahan, lewat mobile device, QR code
                            enabled, dll</li>
                        <li>Rancangan penerapan sistem jangka menengah dan panjang.</li>
                        <li>Berbagai jenis validasi dan approval tambahan.</li>
                        <li>Data kunjungan, penjualan salesman yang berkeliling ke para pelanggan.</li>
                        <li>Dan masih banyak lainnya.</li>
                    </ul>


                </div>
            </div>

            <!-- Additional content -->
            <div class="mt-0">
                <p class="text-justify leading-relaxed mt-3">Tentu saja banyak modul di ERP
                    (standard maupun tambahan) yang bisa melakukan fungsi-fungsi tambahan tadi, modul WMS (warehouse
                    management system), CRM (customer relationship management), dll, tapi masalahnya: yang diperlukan
                    kebanyakan perusahaan hanya fungsi dasar saja tapi yang disediakan sangat banyak sehingga
                    menyebabkan penerapannya tidak mudah, lama dan tidak murah.</p>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'SolutionsPage',
    };
</script>

<style scoped>
    .solutions-container {
        width: 100%;
    }

    /* Hero Section Styling */
    .hero-section {
        height: 78vh;
        background-image: url('@/assets/solution-bg.png');
        /* Replace with your image path */
        background-size: cover;
        background-position: center;
        position: relative;
        /* For the dimmed effect and absolute positioning */
    }

    /* Dimmed overlay */
    .hero-section::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.6);
        /* Semi-transparent black overlay for dimming */
        z-index: 1;
    }

    /* Text content will be above the dimmed effect */
    .text-content {
        z-index: 2;
        margin-right: 5%;
        /* Adjust right margin to keep text away from the edge */
    }

    .image-container img {
        max-width: 100%;
        height: auto;
    }
</style>
