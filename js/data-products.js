// dataProductAll
const productList = [
    {
        code: "MSP1",
        imgUrl: "./images/tron-1.png",
        name: "NÓN BẢO HIỂM ATG-DN052",
        discount: 50,
        price: 239000,
        categories: ["Vitamins", "Supplements", "Nón Bảo Hiểm Trơn"],
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, doloribus ut omnis obcaecati excepturi facilis placeat, reprehenderit sed quo ad labore inventore illum nihil molestias rerum quaerat pariatur tempora. Consectetur!",
        brand: "Nón Bảo Hiểm Trơn",
    },
    {
        code: "MSP2",
        imgUrl: "./images/tron-2.png",
        name: "NÓN BẢO HIỂM ATG-XH520",
        discount: 50,
        price: 299000,
        categories: ["Nón Bảo Hiểm Trơn"],
        desc: "Delicious and nutritious, our pet food is crafted with real meat and wholesome grains to keep your furry friend happy and healthy.",
        brand: "Blue Buffalo",
    },
    {
        code: "MSP3",
        imgUrl: "./images/tron-3.png",
        name: "MŨ BẢO HIỂM ATG-XM186",
        discount: 50,
        price: 320000,
        categories: ["Nón Bảo Hiểm Trơn"],
        desc: "Made from high-quality ingredients, our pet food provides essential nutrients for your beloved companion's overall well-being.",
        brand: "Freshpet",
    },
    {
        code: "MSP4",
        imgUrl: "./images/tron-4.png",
        name: "MŨ BẢO HIỂM ATG-NU719",
        discount: 50,
        price: 400000,
        categories: ["Nón Bảo Hiểm Trơn"],
        desc: "Specially formulated for optimal digestion and energy, our pet food supports your pet's active lifestyle.",
        brand: "Nón Bảo Hiểm Trơn",
    },
    {
        code: "MSP5",
        imgUrl: "./images/kinh-1.png",
        name: "Mũ Bảo Hiểm Kính BKT-XM179",
        discount: 0,
        price: 100000,
        categories: ["Nón Bảo Hiểm Có Kính"],
        desc: "Nourish your pet from the inside out with our premium pet food, packed with vitamins and minerals for shiny coats and strong muscles.",
        brand: "Nón Bảo Hiểm Có Kính",
    },
    {
        code: "MSP6",
        imgUrl: "./images/kinh-2.png",
        name: "Mũ Bảo Hiểm Kính BKT-XM520",
        discount: 0,
        price: 100000,
        categories: ["Nón Bảo Hiểm Có Kính"],
        desc: "Give your pet the gift of taste and nutrition with our expertly crafted pet food, free from artificial additives and fillers.",
        brand: "Nón Bảo Hiểm Có Kính",
    },
    {
        code: "MSP7",
        imgUrl: "./images/kinh-3.png",
        name: "Mũ Bảo Hiểm Kính AKP-TR066",
        discount: 0,
        price: 100000,
        categories: ["Nón Bảo Hiểm Có Kính"],
        desc: "Every bite of our pet food is a testament to our commitment to quality and your pet's satisfaction.",
        brand: "Nón Bảo Hiểm Có Kính",
    },
    {
        code: "MSP8",
        imgUrl: "./images/kinh-4.png",
        name: "Mũ Bảo Hiểm Kính BKT-XM474",
        discount: 51,
        price: 800000,
        categories: ["Nón Bảo Hiểm Có Kính"],
        desc: "With our pet food, you can trust that your pet is getting the nutrition they need to live their best life.",
        brand: "Nón Bảo Hiểm Có Kính",
    },
    {
        code: "MSP9",
        imgUrl: "./images/mai-1.png",
        name: "Mũ Bảo Hiểm ASM-DN117",
        discount: 0,
        price: 80000,
        categories: ["Nón Bảo Hiểm Sơn Mài"],
        desc: "From puppyhood to senior years, our pet food provides consistent, balanced nutrition for your loyal companion.",
        brand: "Nón Bảo Hiểm Sơn Mài",
    },
    {
        code: "MSP10",
        imgUrl: "./images/mai-2.png",
        name: "Mũ Bảo Hiểm ASM-NU716",
        discount: 0,
        price: 70000,
        categories: ["Nón Bảo Hiểm Sơn Mài"],
        desc: "Make mealtime a joyous occasion for your pet with our delectable pet food, backed by years of research and expertise.",
        brand: "Nón Bảo Hiểm Sơn Mài",
    },
    {
        code: "MSP11",
        imgUrl: "./images/mai-3.png",
        name: "Mũ Bảo Hiểm ASM-XH511",
        discount: 0,
        price: 80000,
        categories: ["Nón Bảo Hiểm Sơn Mài"],
        desc: "Our pet food is formulated with natural ingredients, giving you peace of mind knowing your pet is getting the best nature has to offer.",
        brand: "Nón Bảo Hiểm Sơn Mài",
    },
    {
        code: "MSP12",
        imgUrl: "./images/mai-4.png",
        name: "Mũ Bảo Hiểm ASM-DN095",
        discount: 0,
        price: 100000,
        categories: ["Nón Bảo Hiểm Sơn Mài"],
        desc: "Tailored to satisfy even the pickiest eaters, our pet food is sure to become your pet's new favorite meal.",
        brand: "Nón Bảo Hiểm Sơn Mài",
    },
    {
        code: "MSP13",
        imgUrl: "./images/tiet-1.png",
        name: "Mũ Bảo Hiểm SV-DO355",
        discount: 10,
        price: 200000,
        categories: ["Nón Bảo Hiểm Họa Tiết"],
        desc: "From puppyhood to senior years, our pet food provides consistent, balanced nutrition for your loyal companion.",
        brand: "Nón Bảo Hiểm Họa Tiết",
    },
    {
        code: "MSP14",
        imgUrl: "./images/tiet-2.png",
        name: "Mũ Bảo Hiểm AMP-DN120",
        discount: 0,
        price: 150000,
        categories: ["Nón Bảo Hiểm Họa Tiết"],
        desc: "Make mealtime a joyous occasion for your pet with our delectable pet food, backed by years of research and expertise.",
        brand: "Nón Bảo Hiểm Họa Tiết",
    },
    {
        code: "MSP15",
        imgUrl: "./images/tiet-3.png",
        name: "Mũ Bảo Hiểm AMP-TR120",
        discount: 0,
        price: 150000,
        categories: ["Nón Bảo Hiểm Họa Tiết"],
        desc: "Our pet food is formulated with natural ingredients, giving you peace of mind knowing your pet is getting the best nature has to offer.",
        brand: "Nón Bảo Hiểm Họa Tiết",
    },

    {
        code: "MSP16",
        imgUrl: "./images/tiet-4.png",
        name: "Mũ Bảo Hiểm AMP-TR121",
        discount: 10,
        price: 100000,
        categories: ["Nón Bảo Hiểm Họa Tiết"],
        desc: "Our pet food is formulated with natural ingredients, giving you peace of mind knowing your pet is getting the best nature has to offer.",
        brand: "Nón Bảo Hiểm Họa Tiết",
    },

    {
        code: "MSP17",
        imgUrl: "./images/ful-1.png",
        name: "Mũ Bảo Hiểm ROYAL MO2",
        discount: 5,
        price: 500000,
        categories: ["Nón Bảo Hiểm FullFace"],
        desc: "Our pet food is formulated with natural ingredients, giving you peace of mind knowing your pet is getting the best nature has to offer.",
        brand: "Nón Bảo Hiểm FullFace",
    },
    {
        code: "MSP18",
        imgUrl: "./images/ful-2.png",
        name: "Mũ Bảo Hiểm ROYAL M136",
        discount: 10,
        price: 500000,
        categories: ["Nón Bảo Hiểm FullFace"],
        desc: "Our pet food is formulated with natural ingredients, giving you peace of mind knowing your pet is getting the best nature has to offer.",
        brand: "Nón Bảo Hiểm FullFace",
    },
    {
        code: "MSP19",
        imgUrl: "./images/ful-3.png",
        name: "Mũ Bảo Hiểm ROYAL M266",
        discount: 0,
        price: 760000,
        categories: ["Nón Bảo Hiểm FullFace"],
        desc: "Our pet food is formulated with natural ingredients, giving you peace of mind knowing your pet is getting the best nature has to offer.",
        brand: "Nón Bảo Hiểm FullFace",
    },
    {
        code: "MSP19",
        imgUrl: "./images/ful-4.png",
        name: "Mũ Bảo Hiểm ROYAL M138",
        discount: 0,
        price: 750000,
        categories: ["Nón Bảo Hiểm FullFace"],
        desc: "Our pet food is formulated with natural ingredients, giving you peace of mind knowing your pet is getting the best nature has to offer.",
        brand: "Nón Bảo Hiểm FullFace",
    },
];
