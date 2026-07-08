// רשימת דגמים מלאה ודו-לשונית (עברית + אנגלית) לכל עמוד יצרן.
// דגמים בעלי שם נהגה מוצגים כ"עברית (English)"; דגמים אלפאנומריים
// (CX-5, Q50, 208, A4, X5...) נשארים בלטינית - שם אין צורה עברית טבעית.
// מוזרקת דרך ה-template כסקשן "דגמים שאנחנו מטפלים בהם" (שורדת רגנרציה).

export interface BrandModels {
  name: string;
  models: string[];
}

export const BRAND_MODELS: Record<string, BrandModels> = {
  'שכפול-מפתח-לטויוטה': { name: 'טויוטה', models: ["קורולה (Corolla)","קורולה קרוס (Corolla Cross)","יאריס (Yaris)","יאריס קרוס (Yaris Cross)","ראב4 (RAV4)","C-HR","קאמרי (Camry)","פריוס (Prius)","אוריס (Auris)","אייגו (Aygo)","היילקס (Hilux)","לנד קרוזר (Land Cruiser)","היילנדר (Highlander)","אבנסיס (Avensis)","ורסו (Verso)","סופרה (Supra)","האייס (Hiace)","פרואייס (Proace)","bZ4X"] },
  'שכפול-מפתח-ליונדאי': { name: 'יונדאי', models: ["i10","i20","i25","i30","i35","טוסון (Tucson)","קונה (Kona)","איוניק (Ioniq)","איוניק 5 (Ioniq 5)","איוניק 6 (Ioniq 6)","סנטה פה (Santa Fe)","אלנטרה (Elantra)","אקסנט (Accent)","גטס (Getz)","באיון (Bayon)","סטריה (Staria)","סונטה (Sonata)","ווניו (Venue)","פליסייד (Palisade)","H1"] },
  'שכפול-מפתח-לקיה': { name: 'קיה', models: ["פיקנטו (Picanto)","ריו (Rio)","סיד (Ceed)","פרוסיד (ProCeed)","אקסיד (XCeed)","ספורטאז' (Sportage)","סורנטו (Sorento)","נירו (Niro)","סטוניק (Stonic)","סלטוס (Seltos)","סול (Soul)","קרניבל (Carnival)","EV6","EV9","סטינגר (Stinger)","אופטימה (Optima)","סרטו (Cerato)","קרנס (Carens)"] },
  'שכפול-מפתח-למאזדה': { name: 'מאזדה', models: ["מאזדה 2 (Mazda 2)","מאזדה 3 (Mazda 3)","מאזדה 6 (Mazda 6)","CX-3","CX-30","CX-5","CX-60","CX-9","MX-5"] },
  'שכפול-מפתח-לניסאן': { name: 'ניסאן', models: ["מיקרה (Micra)","ג'וק (Juke)","קשקאי (Qashqai)","אקסטרייל (X-Trail)","ליף (Leaf)","נוט (Note)","נאוורה (Navara)","אריה (Ariya)","סנטרה (Sentra)","פולסאר (Pulsar)","מוראנו (Murano)","פאתפיינדר (Pathfinder)","אלמרה (Almera)"] },
  'שכפול-מפתח-לרנו': { name: 'רנו', models: ["קליאו (Clio)","מגאן (Megane)","קפצ'ור (Captur)","קדג'ר (Kadjar)","קוליוס (Koleos)","סניק (Scenic)","זואי (Zoe)","ארקנה (Arkana)","אוסטרל (Austral)","אספס (Espace)","קנגו (Kangoo)","מאסטר (Master)","טראפיק (Trafic)","פלואנס (Fluence)","טווינגו (Twingo)","לגונה (Laguna)"] },
  'שכפול-מפתח-לשברולט': { name: 'שברולט', models: ["ספארק (Spark)","אביאו (Aveo)","קרוז (Cruze)","מליבו (Malibu)","קפטיבה (Captiva)","טראקס (Trax)","טרוורס (Traverse)","טרייל בלייזר (Trailblazer)","אקווינוקס (Equinox)","אורלנדו (Orlando)","קמארו (Camaro)","קורבט (Corvette)","סוניק (Sonic)"] },
  'שכפול-מפתח-לפורד': { name: 'פורד', models: ["פיאסטה (Fiesta)","פוקוס (Focus)","מונדיאו (Mondeo)","קוגה (Kuga)","פומה (Puma)","אקוספורט (EcoSport)","אקספלורר (Explorer)","אדג' (Edge)","מוסטנג (Mustang)","מאך-E (Mach-E)","טרנזיט (Transit)","טרנזיט קונקט (Transit Connect)","ריינג'ר (Ranger)","גלקסי (Galaxy)","S-Max","C-Max","טריטורי (Territory)"] },
  'שכפול-מפתח-לפיגו': { name: "פיג'ו", models: ["108","208","308","508","2008","3008","5008","301","206","207","307","408","RCZ","פרטנר (Partner)","ריפטר (Rifter)","אקספרט (Expert)","בוקסר (Boxer)","טרוולר (Traveller)"] },
  'שכפול-מפתח-לאופל': { name: 'אופל', models: ["קורסה (Corsa)","אסטרה (Astra)","אינסיגניה (Insignia)","מוקה (Mokka)","קרוסלנד (Crossland)","גרנדלנד (Grandland)","זאפירה (Zafira)","קומבו (Combo)","מריבה (Meriva)","ויוארו (Vivaro)","אדם (Adam)","קארל (Karl)","וקטרה (Vectra)","אנטרה (Antara)"] },
  'שכפול-מפתח-לסוזוקי': { name: 'סוזוקי', models: ["סוויפט (Swift)","באלנו (Baleno)","ויטרה (Vitara)","S-Cross","SX4","ג'ימני (Jimny)","איגניס (Ignis)","סלריו (Celerio)","אלטו (Alto)","ספלאש (Splash)","גרנד ויטרה (Grand Vitara)","אקרוס (Across)"] },
  'שכפול-מפתח-למיצובישי': { name: 'מיצובישי', models: ["ספייס סטאר (Space Star)","אטראז' (Attrage)","ASX","אקליפס קרוס (Eclipse Cross)","אאוטלנדר (Outlander)","לנסר (Lancer)","קולט (Colt)","פג'רו (Pajero)","פג'רו ספורט (Pajero Sport)","טרייטון (Triton)","L200","מיראז' (Mirage)","גרנדיס (Grandis)"] },
  'שכפול-מפתח-למרצדס': { name: 'מרצדס', models: ["A-Class","B-Class","C-Class","E-Class","S-Class","CLA","CLS","GLA","GLB","GLC","GLE","GLS","GLK","ML","SLC","ויטו (Vito)","ויאנו (Viano)","ספרינטר (Sprinter)","V-Class","סיטאן (Citan)","EQA","EQB","EQC","EQE","EQS","G-Class"] },
  'שכפול-מפתח-לבמוו': { name: 'BMW', models: ["סדרה 1 (1 Series)","סדרה 2 (2 Series)","סדרה 3 (3 Series)","סדרה 4 (4 Series)","סדרה 5 (5 Series)","סדרה 6 (6 Series)","סדרה 7 (7 Series)","סדרה 8 (8 Series)","X1","X2","X3","X4","X5","X6","X7","Z4","i3","i4","i5","i7","iX","iX1","iX3","M3","M4","M5"] },
  'שכפול-מפתח-להונדה': { name: 'הונדה', models: ["סיוויק (Civic)","ג'אז (Jazz)","CR-V","HR-V","ZR-V","אקורד (Accord)","סיטי (City)","אינסייט (Insight)","e:Ny1","FR-V","סטרים (Stream)","לג'נד (Legend)"] },
  'שכפול-מפתח-לסקודה': { name: 'סקודה', models: ["פאביה (Fabia)","אוקטביה (Octavia)","סופרב (Superb)","קודיאק (Kodiaq)","קארוק (Karoq)","קאמיק (Kamiq)","סקאלה (Scala)","ראפיד (Rapid)","אניאק (Enyaq)","סיטיגו (Citigo)","ייטי (Yeti)","רומסטר (Roomster)"] },
  'שכפול-מפתח-לסובארו': { name: 'סובארו', models: ["אימפרזה (Impreza)","לגאסי (Legacy)","אאוטבק (Outback)","פורסטר (Forester)","XV","קרוסטרק (Crosstrek)","BRZ","לבורג (Levorg)","WRX","סולטרה (Solterra)","טרייבקה (Tribeca)"] },
  'שכפול-מפתח-לוולוו': { name: 'וולוו', models: ["S40","S60","S80","S90","V40","V50","V60","V70","V90","XC40","XC60","XC70","XC90","C30","C40","EX30","EX90"] },
  'שכפול-מפתח-לפולקסווגן': { name: 'פולקסווגן', models: ["פולו (Polo)","גולף (Golf)","פאסאט (Passat)","טיגואן (Tiguan)","T-Roc","T-Cross","טוראן (Touran)","ארטאון (Arteon)","ID.3","ID.4","ID.5","ID.7","ID.Buzz","ג'טה (Jetta)","אפ (Up)","קאדי (Caddy)","טרנספורטר (Transporter)","טוארג (Touareg)","חיפושית (Beetle)","סירוקו (Scirocco)","שרן (Sharan)","אמארוק (Amarok)"] },
  'שכפול-מפתח-לאאודי': { name: 'אאודי', models: ["A1","A3","A4","A5","A6","A7","A8","Q2","Q3","Q4 e-tron","Q5","Q7","Q8","TT","R8","e-tron","e-tron GT","S3","RS3","RS6"] },
  'שכפול-מפתח-לסיטרואן': { name: 'סיטרואן', models: ["C1","C3","C3 Aircross","C4","C4 Cactus","C4 X","C5","C5 Aircross","C5 X","ברלינגו (Berlingo)","ג'אמפי (Jumpy)","ג'אמפר (Jumper)","נמו (Nemo)","C-אליזה (C-Elysee)","ספייס טורר (SpaceTourer)","DS3","DS4","DS5"] },
  'שכפול-מפתח-לפיאט': { name: 'פיאט', models: ["500","500e","500X","500L","פנדה (Panda)","פונטו (Punto)","טיפו (Tipo)","דובלו (Doblo)","דוקאטו (Ducato)","פיורינו (Fiorino)","קובו (Qubo)","טאלנטו (Talento)","סקודו (Scudo)","124 ספיידר (124 Spider)","ברבו (Bravo)","ליניאה (Linea)"] },
  'שכפול-מפתח-למיני-קופר': { name: 'מיני קופר', models: ["וואן (One)","קופר (Cooper)","קופר S (Cooper S)","קופר SE (Cooper SE)","קלאבמן (Clubman)","קאנטרימן (Countryman)","קבריו (Cabrio)","JCW (John Cooper Works)","פייסמן (Paceman)","רודסטר (Roadster)"] },
  'שכפול-מפתח-לאינפיניטי': { name: 'אינפיניטי', models: ["Q30","Q50","Q60","Q70","QX30","QX50","QX55","QX60","QX70","QX80","FX","EX","G37","M"] },
  'שכפול-מפתח-לביואיק': { name: 'ביואיק', models: ["אנקלייב (Enclave)","אנקור (Encore)","אנקור GX (Encore GX)","אנוויז'ן (Envision)","לקרוס (LaCrosse)","ריגאל (Regal)","ואראנו (Verano)","קסקדה (Cascada)","לוצרן (Lucerne)"] },
  'שכפול-מפתח-לקאדילק': { name: 'קאדילק', models: ["ATS","CTS","XTS","CT4","CT5","CT6","SRX","XT4","XT5","XT6","אסקלייד (Escalade)","ליריק (Lyriq)","BLS","STS","DTS"] },
  'שכפול-מפתח-לדייהטסו': { name: 'דייהטסו', models: ["סיריון (Sirion)","טריוס (Terios)","מטריה (Materia)","קואורה (Cuore)","YRV","צ'ארד (Charade)","מוב (Move)","קופן (Copen)","גראן מקס (Gran Max)","אפלאוז (Applause)","פרוזה (Feroza)","רוקי (Rocky)"] },
  'שכפול-מפתח-לגילי': { name: 'גילי', models: ["אמגרנד (Emgrand)","קולריי (Coolray)","ג'יאומטרי C (Geometry C)","אטלס (Atlas)","אטלס פרו (Atlas Pro)","טוגלה (Tugella)","מונג'רו (Monjaro)","GX3"] },
  'שכפול-מפתח-לצרי': { name: "צ'רי", models: ["טיגו 2 (Tiggo 2)","טיגו 3 (Tiggo 3)","טיגו 4 (Tiggo 4)","טיגו 7 (Tiggo 7)","טיגו 8 (Tiggo 8)","אריזו (Arrizo)","אומודה 5 (Omoda 5)","eQ","QQ"] },
  'שכפול-מפתח-לדודג': { name: "דודג'", models: ["ראם (Ram)","צ'לנג'ר (Challenger)","צ'ארג'ר (Charger)","דוראנגו (Durango)","ג'ורני (Journey)","ניטרו (Nitro)","קליבר (Caliber)","גרנד קרוואן (Grand Caravan)","אבנג'ר (Avenger)","דארט (Dart)"] },
  'שכפול-מפתח-לגיפ': { name: "ג'יפ", models: ["רנגלר (Wrangler)","גרנד צ'ירוקי (Grand Cherokee)","צ'ירוקי (Cherokee)","קומפאס (Compass)","רנגייד (Renegade)","קומנדר (Commander)","גלדיאטור (Gladiator)","אוונגר (Avenger)","פטריוט (Patriot)"] },
  'שכפול-מפתח-לדאציה': { name: "דאצ'יה", models: ["דאסטר (Duster)","סנדרו (Sandero)","סנדרו סטפוויי (Sandero Stepway)","לוגאן (Logan)","לודג'י (Lodgy)","דוקר (Dokker)","ספרינג (Spring)","ג'וגר (Jogger)"] },
  'שכפול-מפתח-לסיאט': { name: 'סיאט', models: ["איביזה (Ibiza)","לאון (Leon)","ארונה (Arona)","אטקה (Ateca)","טאראקו (Tarraco)","קורדובה (Cordoba)","טולדו (Toledo)","אלהמברה (Alhambra)","Mii","קופרה (Cupra)","פורמנטור (Formentor)","אלטאה (Altea)"] },
};

export function getBrandModels(slug: string): BrandModels | undefined {
  return BRAND_MODELS[slug];
}
