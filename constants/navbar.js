const NAVBAR_LINKS = [
    { pathname: "/", label: "Beranda" },

    {
        label: "Cara Wudhu",
        SubWudhu: [
            {pathname: "/wudhu/rukun", label: "Rukun Wudhu"},
            {pathname: "/wudhu/niat", label: "Niat Wudhu"},
            {pathname: "/wudhu/membasuhkeduatelapaktangan", label: "Membasuh Telapak Tangan"},
            {pathname: "/wudhu/berkumur", label: "Berkumur-kumur"},
            {pathname: "/wudhu/membasuhwajah", label: "Membasuh Wajah"},
            {pathname: "/wudhu/membasuhkeduatangan", label: "Membasuh Tangan"},
            {pathname: "/wudhu/mengusapkepala", label: "Mengusap Kepala"},
            {pathname: "/wudhu/membasuhkaki", label: "Membasuh kaki"},
            {pathname: "/wudhu/tertib", label: "Tertib"},
            {pathname: "/wudhu/doasetelahwudhu", label: "Doa Setelah Wudhu"},
            {pathname: "/wudhu/batalwudhu", label: "Yang Membatalkan Wudhu"},
        ],
    },
    {
        label: "Cara Sholat",
        SubWudhu: [
            {pathname: "/sholat/rukun", label: "Rukun Sholat"},
            {pathname: "/sholat/berdiri", label: "Berdiri Bila Mampu"},
            {pathname: "/sholat/niatsholat", label: "Niat dan Takbiratul Ikram"},
            {pathname: "/sholat/iftitah", label: "Doa Iftitah"},
            {pathname: "/sholat/alfatihan", label: "Surah Al-Fatihah"},
            {pathname: "/sholat/rukuk", label: "Rukuk"},
            {pathname: "/sholat/itidal", label: "I'tidal"},
            {pathname: "/sholat/sujud", label: "Sujud"},
            {pathname: "/sholat/dudukantaraduasujud", label: "Duduk Antara Dua Sujud"},
            {pathname: "/sholat/tasyahud", label: "Tasyahud"},
            {pathname: "/sholat/sholawat", label: "Membaca Sholawat"},
            {pathname: "/sholat/salam", label: "Salam"},
        ],
    },
];

export default NAVBAR_LINKS;