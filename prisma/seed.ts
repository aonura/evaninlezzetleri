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
      slug: "pasta-carbonara",
      title: "Pasta Carbonara",
      description:
        "Roma'nın efsanevi makarnası — yumurta, pecorino ve guanciale ile kremamsı, lezzet dolu bir klasik.",
      intro:
        "Gerçek carbonara krema içermez. Sırrı, yumurta ve peynirin ısıyla birleşerek oluşturduğu ipeksi sostur. İtalya'nın en ikonik tariflerinden biri.",
      category: "İtalyan",
      difficulty: "Orta",
      prepTime: 10,
      cookTime: 20,
      totalTime: 30,
      servings: 4,
      imageUrl: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800",
      featured: true,
      popular: true,
      tags: ["İtalyan", "makarna", "hızlı", "akşam yemeği", "klasik"],
      ingredients: [
        { name: "spaghetti", amount: "400 gram" },
        { name: "guanciale veya pancetta", amount: "150 gram", notes: "küp doğranmış" },
        { name: "yumurta sarısı", amount: "4 adet" },
        { name: "pecorino romano", amount: "80 gram", notes: "rendelenmiş" },
        { name: "parmesan", amount: "40 gram", notes: "rendelenmiş" },
        { name: "karabiber", amount: "bol miktarda", notes: "taze çekilmiş" },
        { name: "tuz", amount: "gerektiği kadar" },
      ],
      steps: [
        {
          order: 1,
          instruction: "Büyük bir tencerede bol tuzlu su kaynatın. Spagetti'yi al dente pişirin, pişirme suyundan 1 bardak ayırın.",
          tip: "Makarna suyu sosun kıvamını ayarlamak için kritik — mutlaka saklayın.",
        },
        {
          order: 2,
          instruction: "Guanciale'yi kuru bir tavada orta ateşte yağı çıkana kadar kızartın. Ateşten alın, biraz soğumaya bırakın.",
        },
        {
          order: 3,
          instruction: "Bir kasede yumurta sarıları, pecorino, parmesan ve bol karabiber karıştırın.",
        },
        {
          order: 4,
          instruction: "Süzülen spagetti'yi guanciale'nin olduğu tavaya alın. Ateşi kapatın. Yumurta karışımını döküp hızlıca karıştırın.",
          tip: "Tava çok sıcaksa yumurta pişer — ateşi kapatmak şart.",
        },
        {
          order: 5,
          instruction: "İstediğiniz kıvama gelene kadar makarna suyu ekleyerek karıştırın. Hemen servis edin.",
        },
      ],
    },
    {
      slug: "pad-thai",
      title: "Pad Thai",
      description:
        "Tayland'ın ulusal yemeği — pirinç eriştesi, karides, yumurta ve tamarind sosuyla ekşi-tatlı bir sokak lezzeti.",
      intro:
        "Pad Thai Bangkok sokaklarında doğdu. Tamarind'in ekşiliği, balık sosu ve fıstığın dengesi bu tarifi benzersiz kılar.",
      category: "Asya",
      difficulty: "Orta",
      prepTime: 20,
      cookTime: 15,
      totalTime: 35,
      servings: 2,
      imageUrl: "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=800",
      featured: true,
      popular: true,
      tags: ["Asya", "Tayland", "wok", "erişte", "deniz ürünleri"],
      ingredients: [
        { name: "pirinç eriştesi", amount: "200 gram", notes: "geniş" },
        { name: "karides", amount: "200 gram", notes: "ayıklanmış" },
        { name: "yumurta", amount: "2 adet" },
        { name: "tamarind sosu", amount: "3 yemek kaşığı" },
        { name: "balık sosu", amount: "2 yemek kaşığı" },
        { name: "şeker", amount: "1 yemek kaşığı" },
        { name: "soya sosu", amount: "1 yemek kaşığı" },
        { name: "sarımsak", amount: "3 diş" },
        { name: "taze soğan", amount: "3 sap" },
        { name: "kuru kavrulmuş fıstık", amount: "4 yemek kaşığı", notes: "kaba kıyılmış" },
        { name: "limon", amount: "1 adet", notes: "servis için" },
        { name: "bitkisel yağ", amount: "3 yemek kaşığı" },
      ],
      steps: [
        {
          order: 1,
          instruction: "Erişteni ılık suda 20-30 dakika yumuşatın, süzün. Tamarind sosu, balık sosu, şeker ve soya sosunu karıştırın.",
        },
        {
          order: 2,
          instruction: "Wok'u çok yüksek ateşte kızdırın. Yağı ekleyin, sarımsağı 30 saniye kavurun.",
        },
        {
          order: 3,
          instruction: "Karidesleri ekleyin, pembe olana kadar 2 dakika pişirin. Wok'un kenarına itin, yumurtaları ortaya kırın ve karıştırarak pişirin.",
        },
        {
          order: 4,
          instruction: "Erişteni ve sosu ekleyin. Yüksek ateşte sürekli karıştırarak 3-4 dakika pişirin.",
          tip: "Erişte yapışıyorsa az su ekleyin, ıslatmayın.",
        },
        {
          order: 5,
          instruction: "Servis tabağına alın. Üzerine fıstık, taze soğan ve limon dilimleri koyun.",
        },
      ],
    },
    {
      slug: "hummus",
      title: "Hummus",
      description:
        "Orta Doğu'nun vazgeçilmezi — nohut, tahini ve limonla hazırlanan kadifemsi, besleyici bir ezme.",
      intro:
        "İyi bir hummusun sırrı nohutların iyice pişmesi ve tahininin kalitesidir. Ev yapımı hummus market versiyonunu tamamen unutturur.",
      category: "Orta Doğu",
      difficulty: "Kolay",
      prepTime: 15,
      cookTime: 0,
      totalTime: 15,
      servings: 6,
      imageUrl: "https://images.unsplash.com/photo-1576783800509-0d07f58c4b5e?w=800",
      featured: false,
      popular: true,
      tags: ["Orta Doğu", "vegan", "vejetaryen", "mezze", "sağlıklı", "kolay"],
      ingredients: [
        { name: "nohut", amount: "400 gram", notes: "konserveden, süzülmüş" },
        { name: "tahini", amount: "4 yemek kaşığı" },
        { name: "limon suyu", amount: "3 yemek kaşığı", notes: "taze sıkılmış" },
        { name: "sarımsak", amount: "2 diş" },
        { name: "zeytinyağı", amount: "3 yemek kaşığı" },
        { name: "kimyon", amount: "½ tatlı kaşığı" },
        { name: "tuz", amount: "1 tatlı kaşığı" },
        { name: "buz gibi su", amount: "3-4 yemek kaşığı" },
        { name: "pul biber ve zeytinyağı", amount: "servis için" },
      ],
      steps: [
        {
          order: 1,
          instruction: "Nohutları blender'a alın, sarımsak, limon suyu ve tuzu ekleyin. 1 dakika çekin.",
          tip: "Nohutların kabuklarını soyarsanız hummus çok daha pürüzsüz olur.",
        },
        {
          order: 2,
          instruction: "Tahini ve zeytinyağını ekleyin, 2 dakika daha çekin. Makine çalışırken buz gibi su ekleyerek kıvamı ayarlayın.",
          tip: "Su ne kadar soğuk olursa hummus o kadar beyaz ve kremsi olur.",
        },
        {
          order: 3,
          instruction: "Kimyonu ekleyin, tatlandırın. Servis tabağına alın, ortasını kaşıkla çukurlaştırın.",
        },
        {
          order: 4,
          instruction: "Üzerine zeytinyağı gezdirin, pul biber ve isteğe göre maydanoz serpin. Sıcak pide veya sebzelerle servis edin.",
        },
      ],
    },
    {
      slug: "tacos-al-pastor",
      title: "Tacos al Pastor",
      description:
        "Meksika'nın en sevilen sokak yemeği — marineli domuz eti, ananas ve kişniş ile servis edilen renkli tacos.",
      intro:
        "Al pastor pişirme tekniği Orta Doğu'dan Meksika'ya göç eden Lübnanlı göçmenlerin döneriyle geldi. Bugün Mexico City sokaklarının simgesi.",
      category: "Amerikan",
      difficulty: "Orta",
      prepTime: 30,
      cookTime: 25,
      totalTime: 55,
      servings: 4,
      imageUrl: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800",
      featured: true,
      popular: true,
      tags: ["Meksika", "sokak yemeği", "taco", "et", "Amerikan"],
      ingredients: [
        { name: "domuz filetosu", amount: "600 gram", notes: "ince dilimlenmiş" },
        { name: "ananas", amount: "½ adet", notes: "dilimlenmiş" },
        { name: "chipotle biber", amount: "2 adet", notes: "adobo sosunda" },
        { name: "kırmızı soğan", amount: "1 adet" },
        { name: "sarımsak", amount: "4 diş" },
        { name: "elma sirkesi", amount: "3 yemek kaşığı" },
        { name: "portakal suyu", amount: "4 yemek kaşığı" },
        { name: "kimyon", amount: "1 tatlı kaşığı" },
        { name: "kırmızı toz biber", amount: "1 tatlı kaşığı" },
        { name: "küçük mısır tortilyası", amount: "12 adet" },
        { name: "kişniş", amount: "1 demet", notes: "servis için" },
        { name: "limon", amount: "2 adet", notes: "servis için" },
      ],
      steps: [
        {
          order: 1,
          instruction: "Chipotle, soğan, sarımsak, sirke, portakal suyu, kimyon ve kırmızı biberi blender'da pürüzsüz bir sos haline getirin.",
        },
        {
          order: 2,
          instruction: "Et dilimlerini sos ile kaplayın, en az 2 saat (tercihen gece boyunca) buzdolabında marine edin.",
        },
        {
          order: 3,
          instruction: "Tavayı çok yüksek ateşte kızdırın. Etleri kısa sürede her iki taraftan da kızartın, 2-3 dakika.",
        },
        {
          order: 4,
          instruction: "Ananasları aynı tavada karamelleştirin.",
          tip: "Anamıza karamel olunca tatlılığı dengelenir ve dumanlı bir aroma kazanır.",
        },
        {
          order: 5,
          instruction: "Tortillaları kuru tavada ısıtın. Üzerine et, ananas, kişniş ve limon ile servis edin.",
        },
      ],
    },
    {
      slug: "tonkotsu-ramen",
      title: "Tonkotsu Ramen",
      description:
        "Japonya'nın Fukuoka'sından gelen sütlü, zengin domuz kemiği suyu ile hazırlanan derin lezzetli ramen.",
      intro:
        "Tonkotsu ramen'in kremsi beyaz suyu, domuz kemiklerinin saatlerce kaynatılmasıyla elde edilir. Sabır isteyen ama sonucu harikulade olan bir tarif.",
      category: "Asya",
      difficulty: "Zor",
      prepTime: 30,
      cookTime: 240,
      totalTime: 270,
      servings: 4,
      imageUrl: "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=800",
      featured: true,
      popular: true,
      tags: ["Japon", "çorba", "ramen", "Asya", "umami"],
      ingredients: [
        { name: "domuz boyun kemiği", amount: "1 kg" },
        { name: "ramen eriştesi", amount: "400 gram" },
        { name: "soya sosu", amount: "4 yemek kaşığı" },
        { name: "mirin", amount: "2 yemek kaşığı" },
        { name: "sarımsak", amount: "6 diş" },
        { name: "zencefil", amount: "30 gram", notes: "dilimlenmiş" },
        { name: "taze soğan", amount: "4 sap" },
        { name: "haşlanmış yumurta", amount: "4 adet", notes: "soy sosuyla marine edilmiş" },
        { name: "nori yaprağı", amount: "4 yaprak" },
        { name: "bamboo shoot", amount: "100 gram" },
        { name: "susam yağı", amount: "1 yemek kaşığı" },
      ],
      steps: [
        {
          order: 1,
          instruction: "Kemikleri soğuk suda bir gece bekletin. Kaynar suda 10 dakika haşlayıp yıkayın — kanı ve köpüğü alın.",
          tip: "Bu adımı atlamayın; berrak ve temiz bir su için şart.",
        },
        {
          order: 2,
          instruction: "Temizlenmiş kemikleri 4-5 litre suyla tencereye koyun. Sarımsak ve zencefili ekleyin. Yüksek ateşte kaynatın.",
        },
        {
          order: 3,
          instruction: "Kaynayınca ateşi kısın, kapaksız 4 saat çok hafif kaynayacak şekilde pişirin. Su beyazlaşacak.",
        },
        {
          order: 4,
          instruction: "Suyu süzün. Soya sosu ve mirin ekleyerek tadlandırın.",
        },
        {
          order: 5,
          instruction: "Erişteni pişirin. Kaselere koyun, üzerine sıcak et suyu dökün. Yumurta, nori, taze soğan ve bambu ile süsleyin.",
        },
      ],
    },
    {
      slug: "tiramisu",
      title: "Tiramisu",
      description:
        "İtalya'nın en ünlü tatlısı — espresso'ya batırılmış ladyfinger bisküvi ve mascarpone kremadan oluşan kadifemsi bir lezzet.",
      intro:
        "Tiramisu, İtalyanca 'beni yukarı kaldır' anlamına gelir. 1960'larda Veneto'da ortaya çıkan bu tatlı, dünya genelinde en çok sevilen İtalyan tatlısı haline geldi.",
      category: "Tatlılar",
      difficulty: "Orta",
      prepTime: 30,
      cookTime: 0,
      totalTime: 30,
      servings: 8,
      imageUrl: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800",
      featured: true,
      popular: true,
      tags: ["İtalyan", "tatlı", "kahveli", "soğuk tatlı", "klasik"],
      ingredients: [
        { name: "ladyfinger bisküvi", amount: "300 gram" },
        { name: "mascarpone peyniri", amount: "500 gram" },
        { name: "yumurta sarısı", amount: "4 adet" },
        { name: "şeker", amount: "100 gram" },
        { name: "espresso", amount: "300 ml", notes: "soğutulmuş" },
        { name: "amaretto veya kahve likörü", amount: "3 yemek kaşığı", notes: "isteğe bağlı" },
        { name: "kakao tozu", amount: "2 yemek kaşığı", notes: "servis için" },
      ],
      steps: [
        {
          order: 1,
          instruction: "Yumurta sarıları ve şekeri benmari usulü çırpın — açık sarı ve köpüklü olana kadar, yaklaşık 8 dakika.",
          tip: "Benmari sıcaklığı 60°C'yi geçmesin, yumurta pişmesin.",
        },
        {
          order: 2,
          instruction: "Ateşten alın, soğuyunca mascarpone'yi ekleyin. Dikkatli karıştırarak pürüzsüz bir krem yapın.",
        },
        {
          order: 3,
          instruction: "Espresso ve likörü geniş bir kaba alın. Bisküvileri 2-3 saniye batırıp servis kabına dizin.",
          tip: "Çok fazla ıslatmayın, bisküvi dağılır.",
        },
        {
          order: 4,
          instruction: "Üzerine mascarpone kreminin yarısını serin. Tekrar bisküvi katı yapın, kalan kremayı döküp düzeltin.",
        },
        {
          order: 5,
          instruction: "Üzerine ince elek ile kakao tozu eleyin. En az 4 saat, tercihen geceyi buzdolabında bekletin.",
        },
      ],
    },
    {
      slug: "creme-brulee",
      title: "Crème Brûlée",
      description:
        "Fransız mutfağının şaheseri — vanilyalı kremamsı puding ve üzerindeki çıtır karamel kabuğuyla mükemmel bir denge.",
      intro:
        "Crème brûlée'nin sırrı, fırından çıktıktan sonra yeterince soğutmak ve şekerin anında karamelize edilmesidir. O 'kır' anı geri kalan her şeyi haklı çıkarır.",
      category: "Fransız",
      difficulty: "Orta",
      prepTime: 20,
      cookTime: 40,
      totalTime: 60,
      servings: 6,
      imageUrl: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=800",
      featured: false,
      popular: true,
      tags: ["Fransız", "tatlı", "klasik", "fırın", "vanilya"],
      ingredients: [
        { name: "krema", amount: "500 ml", notes: "tam yağlı" },
        { name: "yumurta sarısı", amount: "5 adet" },
        { name: "şeker", amount: "100 gram" },
        { name: "vanilya çubuğu", amount: "1 adet" },
        { name: "şeker", amount: "6 yemek kaşığı", notes: "üzeri için" },
      ],
      steps: [
        {
          order: 1,
          instruction: "Kremayı vanilyayla birlikte orta ateşte ısıtın, kaynamadan hemen önce alın. 10 dakika demlenmeye bırakın.",
        },
        {
          order: 2,
          instruction: "Yumurta sarıları ve şekeri açık sarı olana kadar çırpın. Sıcak kremayı yavaşça karıştırarak ekleyin.",
          tip: "Kremayı çok hızlı eklerseniz yumurtalar pişer — ince bir iple yavaş yavaş dökün.",
        },
        {
          order: 3,
          instruction: "Karışımı süzün, ramekinlere dökün. Benmari usulü 150°C fırında 35-40 dakika pişirin.",
        },
        {
          order: 4,
          instruction: "Soğuyunca en az 2 saat buzdolabında bekletin.",
        },
        {
          order: 5,
          instruction: "Servis öncesi üzerine ince şeker serpin, mutfak meşalesiyle karamelize edin.",
          tip: "Meşale yoksa broiler kullanabilirsiniz — ama meşale çok daha iyi sonuç verir.",
        },
      ],
    },
    {
      slug: "ratatouille",
      title: "Ratatouille",
      description:
        "Provence'ın güneşini sofranıza getiren Fransız sebze güveci — patlıcan, kabak, domates ve biber ile.",
      intro:
        "Ratatouille köylü mutfağından çıkmış, önce dünyayı sonra Disney'i fetheden bir sebze güvecidir. İnce dilimleme ve doğru pişirme sırası her şeyi değiştirir.",
      category: "Fransız",
      difficulty: "Kolay",
      prepTime: 25,
      cookTime: 45,
      totalTime: 70,
      servings: 6,
      imageUrl: "https://images.unsplash.com/photo-1572453800999-e8d2d1589b7c?w=800",
      featured: false,
      popular: false,
      tags: ["Fransız", "vejetaryen", "vegan", "fırın", "Akdeniz", "sağlıklı"],
      ingredients: [
        { name: "patlıcan", amount: "2 adet" },
        { name: "kabak", amount: "2 adet" },
        { name: "domates", amount: "4 adet" },
        { name: "kırmızı biber", amount: "2 adet" },
        { name: "sarımsak", amount: "4 diş" },
        { name: "soğan", amount: "1 adet" },
        { name: "zeytinyağı", amount: "5 yemek kaşığı" },
        { name: "kekik", amount: "1 dal" },
        { name: "biberiye", amount: "1 dal" },
        { name: "tuz ve karabiber", amount: "gerektiği kadar" },
        { name: "fesleğen", amount: "servis için" },
      ],
      steps: [
        {
          order: 1,
          instruction: "Soğan ve sarımsağı zeytinyağında 5 dakika kavurun. 2 domates rendeleyin, ekleyip 10 dakika pişirerek sos yapın.",
        },
        {
          order: 2,
          instruction: "Patlıcan, kabak, kalan domates ve biberleri 3 mm kalınlığında yuvarlak dilimleyin.",
        },
        {
          order: 3,
          instruction: "Sosu fırın kabına dökün. Dilimleri şerit şerit, birbiriyle örtüşecek şekilde sıralayın.",
          tip: "Renk sırası: patlıcan, kabak, domates, biber — görsellik için dönüşümlü dizin.",
        },
        {
          order: 4,
          instruction: "Üzerine zeytinyağı gezdirin, kekik ve biberiye koyun. 190°C fırında 40-45 dakika pişirin.",
        },
        {
          order: 5,
          instruction: "Fırından çıkarın, taze fesleğen serpin. Sıcak veya oda sıcaklığında servis edin.",
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
        ingredients: { create: ingredients },
        steps: { create: steps },
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
