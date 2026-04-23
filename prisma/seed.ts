import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  await prisma.recipeIngredient.deleteMany();
  await prisma.recipeStep.deleteMany();
  await prisma.$executeRaw`DELETE FROM "_RecipeToTag"`;
  await prisma.recipe.deleteMany();
  await prisma.tag.deleteMany();

  const recipes = [
    {
      slug: "menemen",
      title: "Menemen",
      description:
        "Türk kahvaltısının vazgeçilmezi, közlenmiş biber ve domates ile pişirilmiş çırpılmış yumurta.",
      intro:
        "Menemen, Türk mutfağının en sevilen kahvaltı tariflerinden biridir. Taze domates ve yeşil biberle pişirilen bu lezzetli yumurtalı yemek, hem pratik hem de doyurucudur.",
      category: "Kahvaltı",
      difficulty: "Kolay",
      prepTime: 5,
      cookTime: 10,
      totalTime: 15,
      servings: 2,
      imageUrl:
        "https://images.unsplash.com/photo-1590412200988-a436970781fa?w=800",
      featured: true,
      popular: true,
      tags: [
        "kahvaltı",
        "kolay",
        "Türk mutfağı",
        "tavada",
        "vejetaryen",
        "pratik",
      ],
      ingredients: [
        { name: "domates", amount: "3 adet", notes: "olgun" },
        { name: "yeşil biber", amount: "2 adet" },
        { name: "yumurta", amount: "3 adet" },
        { name: "zeytinyağı", amount: "2 yemek kaşığı" },
        { name: "tuz", amount: "1 tutam" },
        { name: "karabiber", amount: "1 tutam" },
        { name: "kırmızı pul biber", amount: "1 tutam" },
      ],
      steps: [
        {
          order: 1,
          instruction:
            "Zeytinyağını tavaya alın ve orta ateşte ısıtın. Küp küp doğranmış biberleri ekleyip 3-4 dakika kavurun.",
          tip: "Biberleri çok fazla pişirmeyin, hafif çıtır kalmasını sağlayın.",
        },
        {
          order: 2,
          instruction:
            "Doğranmış domatesleri ekleyin, tuz ve karabiberi ilave edin. 5 dakika kadar pişirin.",
        },
        {
          order: 3,
          instruction:
            "Yumurtaları üzerine kırın ve tercihte göre karıştırın ya da karıştırmadan pişirin.",
          tip: "Yumurtaları çok pişirmeyin, yarı akışkan kalması lezzetini artırır.",
        },
        {
          order: 4,
          instruction:
            "Pul biberi serpin ve hemen sıcak servis edin. Yanında taze ekmekle servis yapın.",
        },
      ],
    },
    {
      slug: "mercimek-corbasi",
      title: "Mercimek Çorbası",
      description:
        "Kremalı ve besleyici, her sofranın baş tacı mercimek çorbası.",
      intro:
        "Türk mutfağının simgesi olan mercimek çorbası, hem sağlıklı hem de doyurucu bir başlangıç yemeğidir. Baharatların dengeli kullanımı bu çorbayı eşsiz kılar.",
      category: "Çorba",
      difficulty: "Kolay",
      prepTime: 10,
      cookTime: 25,
      totalTime: 35,
      servings: 4,
      imageUrl:
        "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800",
      featured: true,
      popular: true,
      tags: ["çorba", "kolay", "vejetaryen", "sağlıklı", "pratik", "Türk mutfağı"],
      ingredients: [
        { name: "kırmızı mercimek", amount: "1 su bardağı" },
        { name: "soğan", amount: "1 adet" },
        { name: "havuç", amount: "1 adet" },
        { name: "patates", amount: "1 adet" },
        { name: "sarımsak", amount: "2 diş" },
        { name: "zeytinyağı", amount: "2 yemek kaşığı" },
        { name: "tuz", amount: "1 tatlı kaşığı" },
        { name: "kimyon", amount: "1 tatlı kaşığı" },
        { name: "zerdeçal", amount: "½ tatlı kaşığı" },
        { name: "pul biber", amount: "1 tatlı kaşığı" },
        { name: "limon", amount: "1 adet" },
      ],
      steps: [
        {
          order: 1,
          instruction:
            "Soğanı ince doğrayın ve zeytinyağında altın rengi olana kadar kavurun.",
        },
        {
          order: 2,
          instruction:
            "Havuç ve patatesi küp küp doğrayıp soğana ekleyin. 2-3 dakika daha kavurun.",
        },
        {
          order: 3,
          instruction:
            "Yıkanmış mercimeği, sarımsağı ve baharatları ekleyin. 5 su bardağı su ilave edip kaynatın.",
          tip: "Mercimeği önceden ıslatmanıza gerek yok, direkt ekleyebilirsiniz.",
        },
        {
          order: 4,
          instruction:
            "Kısık ateşte 20-25 dakika pişirin, sebzeler ve mercimekler iyice yumuşayınca blenderdan geçirin.",
        },
        {
          order: 5,
          instruction:
            "Kıvamını ayarlayın, gerekirse su ekleyin. Servis sırasında limon sıkın ve pul biberli tereyağı gezdirin.",
        },
      ],
    },
    {
      slug: "imam-bayildi",
      title: "İmam Bayıldı",
      description:
        "Zeytinyağında yüzen patlıcan içine soğan ve domates dolması. Hem sıcak hem soğuk servis edilir.",
      intro:
        "Adını efsanevi bir hikayeden alan bu klasik Türk zeytinyağlısı, patlıcanın en lezzetli halidir. İçindeki soğan ve domates karışımı onu eşsiz kılar.",
      category: "Ana Yemek",
      difficulty: "Orta",
      prepTime: 20,
      cookTime: 40,
      totalTime: 60,
      servings: 4,
      imageUrl:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800",
      featured: true,
      popular: false,
      tags: [
        "ana yemek",
        "vejetaryen",
        "zeytinyağlı",
        "Türk mutfağı",
        "fırın",
        "patlıcan",
      ],
      ingredients: [
        { name: "patlıcan", amount: "4 adet", notes: "uzun" },
        { name: "soğan", amount: "2 adet" },
        { name: "domates", amount: "3 adet" },
        { name: "sarımsak", amount: "4 diş" },
        { name: "zeytinyağı", amount: "5 yemek kaşığı" },
        { name: "maydanoz", amount: "yarım demet" },
        { name: "tuz", amount: "1 tatlı kaşığı" },
        { name: "karabiber", amount: "1 tutam" },
        { name: "şeker", amount: "1 tatlı kaşığı" },
      ],
      steps: [
        {
          order: 1,
          instruction:
            "Patlıcanları yıkayın, alterneli şeritler halinde soyun. Tuzlu suda 15 dakika bekletin, ardından kurulayın.",
          tip: "Bu işlem patlıcanın acılığını alır ve yağ emmesini azaltır.",
        },
        {
          order: 2,
          instruction:
            "Patlıcanları zeytinyağında her tarafı kızarana kadar kavurun. Bir kenara alın.",
        },
        {
          order: 3,
          instruction:
            "Aynı tavada soğanları kavurun, sarımsak ve domatesleri ekleyin. Tuz, karabiber ve şekeri ilave edip 10 dakika pişirin.",
        },
        {
          order: 4,
          instruction:
            "Patlıcanları fırın kabına alın, ortalarını yarın. İç harç karışımını patlıcanların içine doldurun.",
        },
        {
          order: 5,
          instruction:
            "Üzerine zeytinyağı gezdirin, bir miktar su ekleyin. 180°C fırında 30-35 dakika pişirin.",
        },
        {
          order: 6,
          instruction:
            "Fırından çıkarın, üzerine taze maydanoz serpin. Oda sıcaklığında veya soğuk servis edin.",
        },
      ],
    },
    {
      slug: "sutlac",
      title: "Sütlaç",
      description:
        "Kremalı fırın sütlacı — üstü hafif kızarıncaya kadar fırınlanmış geleneksel Türk tatlısı.",
      intro:
        "Fırın sütlaç, Türk mutfağının en sevilen tatlılarından biridir. Kremsi dokusu ve hafif yanık üstüyle her yaştan insanın favorisidir.",
      category: "Tatlı",
      difficulty: "Kolay",
      prepTime: 5,
      cookTime: 40,
      totalTime: 45,
      servings: 6,
      imageUrl:
        "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800",
      featured: false,
      popular: true,
      tags: ["tatlı", "Türk mutfağı", "sütlü tatlı", "kolay", "fırın"],
      ingredients: [
        { name: "pirinç", amount: "½ su bardağı" },
        { name: "su", amount: "1 su bardağı" },
        { name: "süt", amount: "1 litre" },
        { name: "şeker", amount: "1 su bardağı" },
        { name: "nişasta", amount: "2 yemek kaşığı" },
        { name: "vanilya", amount: "1 paket" },
      ],
      steps: [
        {
          order: 1,
          instruction:
            "Pirinci yıkayın ve 1 su bardağı suda yumuşayıncaya kadar haşlayın.",
        },
        {
          order: 2,
          instruction:
            "Üzerine sütü ekleyin ve orta ateşte sürekli karıştırarak pişirmeye devam edin.",
          tip: "Tencerenin dibinin tutmaması için sürekli karıştırın.",
        },
        {
          order: 3,
          instruction:
            "Şeker ve nişastayı az miktarda soğuk sütte eritin, kaynar karışıma yavaşça ekleyin.",
        },
        {
          order: 4,
          instruction:
            "Krema kıvamına gelince vanilyayı ekleyin. Fırın kaplarına dökün.",
        },
        {
          order: 5,
          instruction:
            "Fırın kaplarını tepsiye dizin, tepsiyi kısmen su doldurun. 200°C'de üstü hafif kızarana kadar pişirin.",
          tip: "Su banyosu tatlının eşit pişmesini sağlar.",
        },
        {
          order: 6,
          instruction: "Soğuyunca buzdolabında en az 2 saat bekletin, soğuk servis edin.",
        },
      ],
    },
    {
      slug: "coban-salatasi",
      title: "Çoban Salatası",
      description:
        "Taze sebzeler, limon ve zeytinyağı ile hazırlanan, her sofranın yanında yer bulan klasik Türk salatası.",
      intro:
        "Çoban salatası, Türk mutfağının en vazgeçilmez yan yemeğidir. Taze sebzelerin zeytinyağı ve limonla buluşması bu salatayı harika kılar.",
      category: "Salata",
      difficulty: "Kolay",
      prepTime: 10,
      cookTime: 0,
      totalTime: 10,
      servings: 4,
      imageUrl:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800",
      featured: false,
      popular: true,
      tags: [
        "salata",
        "kolay",
        "vejetaryen",
        "vegan",
        "pratik",
        "Türk mutfağı",
        "sağlıklı",
      ],
      ingredients: [
        { name: "domates", amount: "3 adet" },
        { name: "salatalık", amount: "2 adet" },
        { name: "yeşil biber", amount: "2 adet" },
        { name: "kırmızı soğan", amount: "1 adet" },
        { name: "maydanoz", amount: "yarım demet" },
        { name: "zeytinyağı", amount: "3 yemek kaşığı" },
        { name: "limon", amount: "1 adet" },
        { name: "tuz", amount: "1 tutam" },
      ],
      steps: [
        {
          order: 1,
          instruction:
            "Tüm sebzeleri yıkayın. Domatesleri, salatalıkları ve biberleri küçük küpler halinde doğrayın.",
        },
        {
          order: 2,
          instruction:
            "Kırmızı soğanı ince ince doğrayın. İsteyenler soğanı tuzlu suda bekletip acısını alabilir.",
          tip: "Soğanı 10 dakika tuzlu suda bekletmek acılığını azaltır.",
        },
        {
          order: 3,
          instruction:
            "Tüm doğranmış sebzeleri büyük bir kaseye alın. Maydanozu ince kıyıp ekleyin.",
        },
        {
          order: 4,
          instruction:
            "Zeytinyağı, limon suyu ve tuzu üzerine gezdirin. Hafifçe karıştırın ve hemen servis edin.",
        },
      ],
    },
    {
      slug: "tavuk-sote",
      title: "Tavuk Sote",
      description:
        "Sebzelerle birlikte tavada kavrulan, lezzetli ve doyurucu tavuk sote.",
      intro:
        "Tavuk sote, hem hızlı hem de besleyici bir ana yemektir. Renkli sebzeler ve baharatlarla hazırlanan bu tarif, haftalık yemek listenizin başına geçecek.",
      category: "Ana Yemek",
      difficulty: "Kolay",
      prepTime: 10,
      cookTime: 20,
      totalTime: 30,
      servings: 4,
      imageUrl:
        "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=800",
      featured: false,
      popular: true,
      tags: ["ana yemek", "tavuk", "pratik", "sote", "Türk mutfağı"],
      ingredients: [
        {
          name: "tavuk göğsü",
          amount: "500 gram",
          notes: "küp doğranmış",
        },
        { name: "soğan", amount: "1 adet" },
        { name: "biber", amount: "2 adet", notes: "renkli" },
        { name: "domates", amount: "2 adet" },
        { name: "sarımsak", amount: "3 diş" },
        { name: "zeytinyağı", amount: "2 yemek kaşığı" },
        { name: "tuz", amount: "1 tatlı kaşığı" },
        { name: "karabiber", amount: "1 tutam" },
        { name: "kekik", amount: "1 tatlı kaşığı" },
        { name: "pul biber", amount: "1 tatlı kaşığı" },
      ],
      steps: [
        {
          order: 1,
          instruction:
            "Tavuk göğsünü küp küp doğrayın. Zeytinyağını geniş bir tavaya alın ve yüksek ateşte ısıtın.",
        },
        {
          order: 2,
          instruction:
            "Tavukları tavaya ekleyin ve her tarafı kızarana kadar kavurun. Tavukları bir kenara alın.",
          tip: "Tavukları sık karıştırmayın, güzel kızarması için bekleyin.",
        },
        {
          order: 3,
          instruction:
            "Aynı tavada soğanı kavurun, ardından biberleri ve sarımsağı ekleyin. 5 dakika pişirin.",
        },
        {
          order: 4,
          instruction:
            "Domatesleri ekleyin, baharatları ilave edin. Tavukları geri alın ve her şeyi birlikte 10 dakika pişirin.",
        },
        {
          order: 5,
          instruction:
            "Pirinç pilavı veya bulgur pilavı ile sıcak servis edin.",
        },
      ],
    },
    {
      slug: "revani",
      title: "Revani",
      description:
        "Üzerine şerbet dökülen irmik tatlısı — Osmanlı mutfağından gelen tatlı bir miras.",
      intro:
        "Revani, Osmanlı saray mutfağından günümüze ulaşan köklü bir tatlıdır. İrmik tabanı ve bol şerbetiyle her lokmada tatmin duygusu yaşatır.",
      category: "Tatlı",
      difficulty: "Orta",
      prepTime: 15,
      cookTime: 35,
      totalTime: 50,
      servings: 8,
      imageUrl:
        "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800",
      featured: true,
      popular: false,
      tags: ["tatlı", "irmikli", "Türk mutfağı", "şerbetli tatlı", "fırın"],
      ingredients: [
        { name: "irmik", amount: "1 su bardağı" },
        { name: "un", amount: "½ su bardağı" },
        { name: "şeker", amount: "1 su bardağı" },
        { name: "yumurta", amount: "3 adet" },
        { name: "yoğurt", amount: "1 su bardağı" },
        { name: "zeytinyağı", amount: "½ su bardağı" },
        { name: "kabartma tozu", amount: "1 paket" },
        {
          name: "şeker",
          amount: "2 su bardağı",
          notes: "şerbet için",
        },
        { name: "su", amount: "2 su bardağı", notes: "şerbet için" },
        { name: "limon", amount: "½ adet", notes: "şerbet için" },
      ],
      steps: [
        {
          order: 1,
          instruction:
            "Önce şerbeti hazırlayın: şeker ve suyu kaynatın, limon suyunu ekleyin. 10 dakika pişirip soğumaya bırakın.",
          tip: "Şerbet soğuk, tatlı sıcak olmalı — ya da tam tersi. İkisi de aynı sıcaklıkta olmamalı.",
        },
        {
          order: 2,
          instruction:
            "Yumurtaları şekerle çırpın, kremamsı hale gelene kadar devam edin.",
        },
        {
          order: 3,
          instruction:
            "Yoğurt ve zeytinyağını ekleyin, karıştırın. İrmik, un ve kabartma tozunu eleyin, yavaşça karıştırın.",
        },
        {
          order: 4,
          instruction:
            "Yağlanmış fırın kabına dökün. 180°C'de 30-35 dakika, üstü altın rengi olana kadar pişirin.",
        },
        {
          order: 5,
          instruction:
            "Fırından çıkar çıkmaz üzerine soğuk şerbeti dökün. En az 1 saat şerbet çekmesini bekleyin.",
        },
        {
          order: 6,
          instruction:
            "Eşit parçalara kesin. İsteğe göre üzerine dövülmüş fıstık veya hindistan cevizi serpin.",
        },
      ],
    },
    {
      slug: "ezogelin-corbasi",
      title: "Ezogelin Çorbası",
      description:
        "Mercimek, bulgur ve baharatların buluştuğu Türk mutfağının en sevilen çorbası.",
      intro:
        "Efsanevi bir aşk hikayesinden adını alan Ezogelin çorbası, Türk sofrasının vazgeçilmez lezzetlerinden biridir. Bulgur ve mercimeğin buluşması onu doyurucu kılar.",
      category: "Çorba",
      difficulty: "Kolay",
      prepTime: 10,
      cookTime: 30,
      totalTime: 40,
      servings: 6,
      imageUrl:
        "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800",
      featured: false,
      popular: true,
      tags: ["çorba", "Türk mutfağı", "mercimekli", "pratik", "sağlıklı"],
      ingredients: [
        { name: "kırmızı mercimek", amount: "1 su bardağı" },
        { name: "bulgur", amount: "¼ su bardağı" },
        { name: "pirinç", amount: "¼ su bardağı" },
        { name: "soğan", amount: "1 adet" },
        { name: "domates salçası", amount: "1 yemek kaşığı" },
        { name: "biber salçası", amount: "1 tatlı kaşığı" },
        { name: "tereyağı", amount: "2 yemek kaşığı" },
        { name: "tuz", amount: "1 tatlı kaşığı" },
        { name: "kırmızı pul biber", amount: "1 tatlı kaşığı" },
        { name: "nane", amount: "1 tatlı kaşığı" },
        { name: "kekik", amount: "½ tatlı kaşığı" },
      ],
      steps: [
        {
          order: 1,
          instruction:
            "Mercimek, bulgur ve pirinci ayrı ayrı yıkayın. Soğanı ince doğrayın.",
        },
        {
          order: 2,
          instruction:
            "Tereyağını eritin, soğanı altın rengi olana kadar kavurun.",
        },
        {
          order: 3,
          instruction:
            "Domates ve biber salçasını ekleyin, 2 dakika kavurun. Mercimek, bulgur ve pirinci ilave edin.",
        },
        {
          order: 4,
          instruction:
            "6-7 su bardağı su ekleyin, kaynatın. Kısık ateşte 25-30 dakika pişirin.",
          tip: "Çorba pişerken ara ara karıştırın ve gerekirse su ekleyin.",
        },
        {
          order: 5,
          instruction:
            "Tuz ve baharatları ekleyin. Servis sırasında üzerine kızdırılmış tereyağı + nane ve pul biber gezdirin.",
        },
      ],
    },
  ];

  for (const recipeData of recipes) {
    const { tags, ingredients, steps, ...recipe } = recipeData;

    await prisma.recipe.create({
      data: {
        ...recipe,
        tags: {
          connectOrCreate: tags.map((tag) => ({
            where: { name: tag },
            create: { name: tag },
          })),
        },
        ingredients: {
          create: ingredients,
        },
        steps: {
          create: steps,
        },
      },
    });

    console.log(`✓ Created: ${recipe.title}`);
  }

  console.log("\n✅ Seeding complete!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
