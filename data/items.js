const items = [
    {
        id: "1",
        title: "Raflesia Arnoldi",
        shortDescription: "Bunga raksasa yang terkenal karena baunya yang menyengat.",
        description: "Raflesia Arnoldi adalah bunga raksasa yang tumbuh di hutan hujan tropis Sumatra dan Kalimantan. Bunga ini dikenal karena baunya yang menyengat, yang digunakan untuk menarik serangga penyerbuk. Ukurannya dapat mencapai hingga satu meter dan beratnya bisa mencapai 10 kilogram.",
        image: require('../assets/images/raflesia-arnoldi.jpg'),
        category: "Flora"
    },
    {
        id: "2",
        title: "Anaphalis Javanica",
        shortDescription: "Bunga abadi khas pegunungan Indonesia.",
        description: "Anaphalis Javanica, atau Edelweiss Jawa, adalah tanaman yang tumbuh di pegunungan tinggi Indonesia. Bunga ini tahan lama dan sering dijuluki sebagai bunga keabadian karena tidak mudah layu, menjadikannya simbol cinta yang abadi di kalangan para pendaki.",
        image: require('../assets/images/anaphalis-javanica.jpg'),
        category: "Flora"
    },
    {
        id: "3",
        title: "Acinonyx Jubatus",
        shortDescription: "Hewan tercepat di darat, dikenal juga sebagai cheetah.",
        description: "Acinonyx Jubatus, atau cheetah, adalah hewan darat tercepat di dunia, mampu mencapai kecepatan hingga 112 km/jam dalam waktu singkat. Cheetah memiliki tubuh ramping dan otot yang kuat, menjadikannya pemangsa yang sangat efisien di padang rumput Afrika.",
        image: require('../assets/images/acinonyx-jubatus.jpg'),
        category: "Fauna"
    },
    {
        id: "4",
        title: "Phoenicopterus",
        shortDescription: "Burung berwarna merah muda yang anggun, dikenal sebagai flamingo.",
        description: "Phoenicopterus, atau flamingo, adalah burung yang dikenal dengan warna merah mudanya yang mencolok, hasil dari pigmen yang didapat dari makanannya. Flamingo sering ditemukan di daerah berawa dan danau air asin, di mana mereka mencari makan dengan cara menyaring air.",
        image: require('../assets/images/phoenicopterus,.jpg'),
        category: "Fauna"
    },
    {
        id: "5",
        title: "Lily of the Valley",
        shortDescription: "Bunga kecil beraroma manis yang melambangkan kesucian.",
        description: "Lily of the Valley adalah bunga berwarna putih dengan aroma manis yang memikat. Bunga ini sering diasosiasikan dengan kesucian dan kebahagiaan, dan memiliki peran simbolis dalam berbagai budaya dan tradisi, termasuk pernikahan kerajaan.",
        image: require('../assets/images/lily-of-the-valley.jpg'),
        category: "Flora"
    },
    {
        id: "6",
        title: "Chelonioidea",
        shortDescription: "Kura-kura laut yang mengarungi lautan dunia.",
        description: "Chelonioidea adalah sekelompok kura-kura laut yang menghuni samudra-samudra dunia. Mereka memiliki umur panjang dan dapat bermigrasi ribuan kilometer untuk bertelur. Kura-kura laut menghadapi ancaman besar dari perburuan, polusi, dan perubahan iklim.",
        image: require('../assets/images/chelonioidea.jpg'),
        category: "Fauna"
    },
    {
        id: "7",
        title: "Hippocampus",
        shortDescription: "Ikan unik berbentuk kuda, dikenal sebagai kuda laut.",
        description: "Hippocampus, atau kuda laut, adalah ikan kecil dengan bentuk tubuh menyerupai kuda. Mereka hidup di perairan dangkal dan memiliki kemampuan unik untuk berpegangan pada tanaman laut. Kuda laut jantan yang bertanggung jawab mengandung dan melahirkan anak-anak mereka.",
        image: require('../assets/images/hippocampus.jpg'),
        category: "Fauna"
    },
    {
        id: "8",
        title: "Pinnipedia",
        shortDescription: "Mamalia laut berkaki sirip seperti anjing laut.",
        description: "Pinnipedia adalah kelompok mamalia laut yang mencakup anjing laut, singa laut, dan walrus. Mereka dikenal dengan tubuh yang ramping dan kaki yang termodifikasi menjadi sirip, memudahkan mereka berenang di lautan. Pinnipedia hidup di berbagai lingkungan, dari daerah kutub hingga pantai tropis.",
        image: require('../assets/images/pinnipedia.jpg'),
        category: "Fauna"
    },
    {
        id: "9",
        title: "Crocodylidae",
        shortDescription: "Reptil purba yang mendominasi perairan tropis.",
        description: "Crocodylidae, atau keluarga buaya, adalah reptil besar yang hidup di perairan air tawar dan payau. Mereka memiliki rahang yang kuat dan dikenal karena kemampuan berburu yang luar biasa. Buaya telah ada sejak zaman dinosaurus dan merupakan salah satu predator tertua di dunia.",
        image: require('../assets/images/crocodylidae.jpg'),
        category: "Fauna"
    },
    {
        id: "10",
        title: "Camelus",
        shortDescription: "Mamalia besar dengan punuk yang tahan hidup di gurun.",
        description: "Camelus, atau unta, adalah hewan padang pasir yang mampu bertahan hidup dalam kondisi ekstrim. Mereka memiliki punuk yang berfungsi sebagai cadangan lemak, memungkinkan mereka bertahan tanpa air dalam waktu lama. Unta digunakan sebagai hewan angkut dan sumber makanan oleh masyarakat gurun.",
        image: require('../assets/images/camelus.jpg'),
        category: "Fauna"
    },
    {
        id: "11",
        title: "Chrysanthemum Indicum",
        shortDescription: "Bunga cantik yang mekar di musim gugur.",
        description: "Chrysanthemum Indicum, atau krisan, adalah bunga yang mekar di musim gugur. Bunga ini memiliki beragam warna dan sering digunakan dalam tradisi budaya, terutama di Asia, sebagai simbol ketenangan dan panjang umur.",
        image: require('../assets/images/chrysanthemum-indicum.jpg'),
        category: "Flora"
    },
    {
        id: "12",
        title: "Nelumbo Nucifera",
        shortDescription: "Teratai suci yang melambangkan kemurnian dan pencerahan.",
        description: "Nelumbo Nucifera, atau bunga teratai, adalah tanaman air yang dianggap suci di banyak budaya Asia. Bunga ini melambangkan kemurnian, karena tumbuh indah di air berlumpur tanpa noda. Teratai sering digunakan dalam seni dan keagamaan karena maknanya yang mendalam.",
        image: require('../assets/images/nelumbo-nucifera.jpg'),
        category: "Flora"
    },
    {
        id: "13",
        title: "Jasminum",
        shortDescription: "Bunga kecil beraroma harum, simbol cinta dan keanggunan.",
        description: "Jasminum, atau melati, adalah bunga kecil dengan aroma manis yang banyak digunakan dalam pembuatan parfum. Bunga ini melambangkan keanggunan dan cinta, serta sering digunakan dalam upacara keagamaan dan pernikahan di berbagai budaya.",
        image: require('../assets/images/jasminum.jpg'),
        category: "Flora"
    },
    {
        id: "14",
        title: "Plumeria",
        shortDescription: "Bunga tropis indah yang melambangkan kebahagiaan.",
        description: "Plumeria, atau bunga kamboja, adalah bunga tropis yang memiliki aroma harum dan kelopak berwarna cerah. Bunga ini melambangkan kebahagiaan dan sering digunakan dalam dekorasi serta ritual keagamaan di daerah tropis, terutama di Asia Tenggara dan Pasifik.",
        image: require('../assets/images/plumeria.jpg'),
        category: "Flora"
    },
    {
        id: "15",
        title: "Esox Lucius",
        shortDescription: "Ikan predator yang dikenal dengan kecepatan dan ketangkasannya.",
        description: "Esox Lucius, atau ikan tombak, adalah predator air tawar yang hidup di danau dan sungai. Ikan ini dikenal dengan bentuk tubuh yang ramping dan gerakan cepat, membuatnya pemburu yang handal. Esox Lucius sering menjadi target dalam olahraga memancing.",
        image: require('../assets/images/esox-lucius.jpg'),
        category: "Fauna"
    },
    {
        id: "16",
        title: "Lycoris Radiata",
        shortDescription: "Bunga merah cerah yang dikenal sebagai bunga neraka.",
        description: "Lycoris Radiata, atau bunga neraka, adalah bunga merah cerah yang sering muncul di akhir musim panas hingga awal musim gugur. Bunga ini dikenal dalam cerita rakyat sebagai simbol perpisahan dan misteri, dan sering tumbuh di pemakaman di Asia Timur.",
        image: require('../assets/images/lycoris-radiata.jpg'),
        category: "Flora"
    },
    {
        id: "17",
        title: "Aquila Chrysaetos",
        shortDescription: "Elang emas yang megah dan kuat.",
        description: "Aquila Chrysaetos, atau elang emas, adalah burung pemangsa besar yang memiliki kemampuan terbang tinggi dan penglihatan tajam. Mereka dikenal karena cakar kuatnya dan menjadi simbol kekuatan dan kebebasan di berbagai budaya.",
        image: require('../assets/images/aquila-chrysaetos.jpg'),
        category: "Fauna"
    },
    {
        id: "18",
        title: "Brachyura",
        shortDescription: "Kepiting berkaki sepuluh dengan cangkang keras.",
        description: "Brachyura, atau kepiting, adalah krustasea berkaki sepuluh yang memiliki cangkang keras untuk melindungi tubuhnya. Kepiting hidup di berbagai lingkungan, dari laut hingga perairan tawar, dan merupakan sumber makanan penting di banyak budaya.",
        image: require('../assets/images/brachyura.jpg'),
        category: "Fauna"
    },
    {
        id: "19",
        title: "Gliridae",
        shortDescription: "Keluarga hewan pengerat kecil yang dikenal sebagai dormice.",
        description: "Gliridae, atau dormice, adalah hewan pengerat kecil yang aktif di malam hari dan dikenal karena kebiasaan hibernasi mereka yang panjang. Dormice hidup di hutan dan semak belukar, dan memiliki ekor berbulu yang membantu mereka menjaga keseimbangan.",
        image: require('../assets/images/gliridae.jpg'),
        category: "Fauna"
    },
    {
        id: "20",
        title: "Ambystoma Mexicanum",
        shortDescription: "Salamander yang tidak pernah tumbuh dewasa, dikenal sebagai axolotl.",
        description: "Ambystoma Mexicanum, atau axolotl, adalah salamander unik yang tetap dalam bentuk larva sepanjang hidupnya, sebuah fenomena yang dikenal sebagai neotenia. Axolotl dapat meregenerasi anggota tubuh yang hilang dan merupakan subjek penelitian penting dalam ilmu biologi.",
        image: require('../assets/images/ambystoma-mexicanum.jpg'),
        category: "Fauna"
    }
];

export default items