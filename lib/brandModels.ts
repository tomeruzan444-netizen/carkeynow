// רשימת דגמים דו-לשונית (עברית + אנגלית) לכל עמוד יצרן.
// מוזרקת דרך ה-template כסקשן "דגמים שאנחנו מטפלים בהם" - שורדת רגנרציה,
// ומבטיחה שכל דגם מופיע גם בעברית וגם באנגלית (כיסוי חיפוש דו-לשוני).

export interface BrandModels {
  name: string;
  models: string[];
}

export const BRAND_MODELS: Record<string, BrandModels> = {
  'שכפול-מפתח-לטויוטה': { name: 'טויוטה', models: ["קורולה (Corolla)","יאריס (Yaris)","ראב4 (RAV4)","קאמרי (Camry)","פריוס (Prius)","C-HR","קורולה קרוס (Corolla Cross)","אוריס (Auris)","היילקס (Hilux)","לנד קרוזר (Land Cruiser)","היילנדר (Highlander)","אייגו (Aygo)"] },
  'שכפול-מפתח-ליונדאי': { name: 'יונדאי', models: ["i10","i20","i25","i30","טוסון (Tucson)","קונה (Kona)","איוניק (Ioniq)","Ioniq 5","סנטה פה (Santa Fe)","אלנטרה (Elantra)","אקסנט (Accent)","באיון (Bayon)","סטריה (Staria)"] },
  'שכפול-מפתח-לקיה': { name: 'קיה', models: ["פיקנטו (Picanto)","ריו (Rio)","סיד (Ceed)","ספורטאז' (Sportage)","סורנטו (Sorento)","נירו (Niro)","סטוניק (Stonic)","סלטוס (Seltos)","סול (Soul)","קרניבל (Carnival)","EV6","סטינגר (Stinger)"] },
  'שכפול-מפתח-למאזדה': { name: 'מאזדה', models: ["מאזדה 2 (Mazda 2)","מאזדה 3 (Mazda 3)","מאזדה 6 (Mazda 6)","CX-3","CX-30","CX-5","CX-60","MX-5"] },
  'שכפול-מפתח-לניסאן': { name: 'ניסאן', models: ["מיקרה (Micra)","ג'וק (Juke)","קשקאי (Qashqai)","אקסטרייל (X-Trail)","ליף (Leaf)","נאוורה (Navara)","אריה (Ariya)","סנטרה (Sentra)","נוט (Note)"] },
  'שכפול-מפתח-לרנו': { name: 'רנו', models: ["קליאו (Clio)","מגאן (Megane)","קפצ'ור (Captur)","קדג'ר (Kadjar)","קוליוס (Koleos)","סניק (Scenic)","זואי (Zoe)","ארקנה (Arkana)","אוסטרל (Austral)","קנגו (Kangoo)","מאסטר (Master)","טראפיק (Trafic)"] },
  'שכפול-מפתח-לשברולט': { name: 'שברולט', models: ["ספארק (Spark)","אביאו (Aveo)","קרוז (Cruze)","מליבו (Malibu)","קפטיבה (Captiva)","טראקס (Trax)","טרוורס (Traverse)","קמארו (Camaro)","אורלנדו (Orlando)","קורבט (Corvette)"] },
  'שכפול-מפתח-לפורד': { name: 'פורד', models: ["פיאסטה (Fiesta)","פוקוס (Focus)","מונדיאו (Mondeo)","קוגה (Kuga)","פומה (Puma)","אקוספורט (EcoSport)","אקספלורר (Explorer)","אדג' (Edge)","מוסטנג (Mustang)","טרנזיט (Transit)","ריינג'ר (Ranger)","טריטורי (Territory)"] },
  'שכפול-מפתח-לפיגו': { name: "פיג'ו", models: ["208","308","508","2008","3008","5008","108","301","פרטנר (Partner)","ריפטר (Rifter)","אקספרט (Expert)","בוקסר (Boxer)"] },
  'שכפול-מפתח-לאופל': { name: 'אופל', models: ["קורסה (Corsa)","אסטרה (Astra)","אינסיגניה (Insignia)","מוקה (Mokka)","קרוסלנד (Crossland)","גרנדלנד (Grandland)","זאפירה (Zafira)","קומבו (Combo)","מריבה (Meriva)","ויוארו (Vivaro)"] },
  'שכפול-מפתח-לסוזוקי': { name: 'סוזוקי', models: ["סוויפט (Swift)","באלנו (Baleno)","ויטרה (Vitara)","SX4","ג'ימני (Jimny)","איגניס (Ignis)","סלריו (Celerio)","אלטו (Alto)","ספלאש (Splash)"] },
  'שכפול-מפתח-למיצובישי': { name: 'מיצובישי', models: ["ספייס סטאר (Space Star)","אטראז' (Attrage)","ASX","אקליפס קרוס (Eclipse Cross)","אאוטלנדר (Outlander)","לנסר (Lancer)","קולט (Colt)","פג'רו (Pajero)","טרייטון (Triton)"] },
  'שכפול-מפתח-למרצדס': { name: 'מרצדס', models: ["A-Class","B-Class","C-Class","E-Class","S-Class","CLA","GLA","GLB","GLC","GLE","ויטו (Vito)","ספרינטר (Sprinter)","V-Class"] },
  'שכפול-מפתח-לבמוו': { name: 'BMW', models: ["סדרה 1 (1 Series)","סדרה 3 (3 Series)","סדרה 5 (5 Series)","סדרה 7 (7 Series)","X1","X3","X5","X6","X7","Z4","i4","iX"] },
  'שכפול-מפתח-להונדה': { name: 'הונדה', models: ["סיוויק (Civic)","ג'אז (Jazz)","CR-V","HR-V","אקורד (Accord)","סיטי (City)","אינסייט (Insight)","ZR-V"] },
  'שכפול-מפתח-לסקודה': { name: 'סקודה', models: ["פאביה (Fabia)","אוקטביה (Octavia)","סופרב (Superb)","קודיאק (Kodiaq)","קארוק (Karoq)","קאמיק (Kamiq)","סקאלה (Scala)","ראפיד (Rapid)","אניאק (Enyaq)"] },
  'שכפול-מפתח-לסובארו': { name: 'סובארו', models: ["אימפרזה (Impreza)","לגאסי (Legacy)","אאוטבק (Outback)","פורסטר (Forester)","XV","BRZ","לבורג (Levorg)","WRX"] },
  'שכפול-מפתח-לוולוו': { name: 'וולוו', models: ["S60","S90","V40","V60","V90","XC40","XC60","XC90","C40","EX30"] },
  'שכפול-מפתח-לפולקסווגן': { name: 'פולקסווגן', models: ["פולו (Polo)","גולף (Golf)","פאסאט (Passat)","טיגואן (Tiguan)","T-Roc","T-Cross","טוראן (Touran)","ארטאון (Arteon)","ID.3","ID.4","ג'טה (Jetta)","קאדי (Caddy)","טרנספורטר (Transporter)","טוארג (Touareg)"] },
  'שכפול-מפתח-לאאודי': { name: 'אאודי', models: ["A1","A3","A4","A5","A6","A7","A8","Q2","Q3","Q5","Q7","Q8","TT","e-tron"] },
  'שכפול-מפתח-לסיטרואן': { name: 'סיטרואן', models: ["C1","C3","C4","C5","C3 Aircross","C5 Aircross","C4 Cactus","ברלינגו (Berlingo)","ג'אמפי (Jumpy)","ג'אמפר (Jumper)","נמו (Nemo)"] },
  'שכפול-מפתח-לפיאט': { name: 'פיאט', models: ["500","פנדה (Panda)","פונטו (Punto)","טיפו (Tipo)","500X","500L","דובלו (Doblo)","דוקאטו (Ducato)","פיורינו (Fiorino)"] },
  'שכפול-מפתח-למיני-קופר': { name: 'מיני קופר', models: ["וואן (One)","קופר (Cooper)","קופר S (Cooper S)","קלאבמן (Clubman)","קאנטרימן (Countryman)","קבריו (Cabrio)","JCW","חשמלית (Electric)"] },
  'שכפול-מפתח-לאינפיניטי': { name: 'אינפיניטי', models: ["Q30","Q50","Q60","Q70","QX30","QX50","QX60","QX70","QX80"] },
  'שכפול-מפתח-לביואיק': { name: 'ביואיק', models: ["אנקלייב (Enclave)","אנקור (Encore)","אנוויז'ן (Envision)","לקרוס (LaCrosse)","ריגאל (Regal)","ואראנו (Verano)"] },
  'שכפול-מפתח-לקאדילק': { name: 'קאדילק', models: ["ATS","CTS","XTS","CT4","CT5","CT6","SRX","XT4","XT5","XT6","אסקלייד (Escalade)"] },
  'שכפול-מפתח-לדייהטסו': { name: 'דייהטסו', models: ["סיריון (Sirion)","טריוס (Terios)","מטריה (Materia)","קואורה (Cuore)","YRV","צ'ארד (Charade)","קופן (Copen)"] },
  'שכפול-מפתח-לגילי': { name: 'גילי', models: ["אמגרנד (Emgrand)","קולריי (Coolray)","ג'יאומטרי C (Geometry C)","אטלס (Atlas)","טוגלה (Tugella)","מונג'רו (Monjaro)"] },
  'שכפול-מפתח-לצרי': { name: "צ'רי", models: ["טיגו 2 (Tiggo 2)","טיגו 4 (Tiggo 4)","טיגו 7 (Tiggo 7)","טיגו 8 (Tiggo 8)","אריזו (Arrizo)","אומודה 5 (Omoda 5)"] },
  'שכפול-מפתח-לדודג': { name: "דודג'", models: ["ראם (Ram)","צ'לנג'ר (Challenger)","צ'ארג'ר (Charger)","דוראנגו (Durango)","ג'ורני (Journey)","ניטרו (Nitro)","קליבר (Caliber)"] },
  'שכפול-מפתח-לגיפ': { name: "ג'יפ", models: ["רנגלר (Wrangler)","גרנד צ'ירוקי (Grand Cherokee)","צ'ירוקי (Cherokee)","קומפאס (Compass)","רנגייד (Renegade)","קומנדר (Commander)","גלדיאטור (Gladiator)","אוונגר (Avenger)"] },
  'שכפול-מפתח-לדאציה': { name: "דאצ'יה", models: ["דאסטר (Duster)","סנדרו (Sandero)","לוגאן (Logan)","לודג'י (Lodgy)","דוקר (Dokker)","ספרינג (Spring)","ג'וגר (Jogger)"] },
  'שכפול-מפתח-לסיאט': { name: 'סיאט', models: ["איביזה (Ibiza)","לאון (Leon)","ארונה (Arona)","אטקה (Ateca)","טאראקו (Tarraco)","קורדובה (Cordoba)","טולדו (Toledo)","קופרה (Cupra)","פורמנטור (Formentor)"] },
};

export function getBrandModels(slug: string): BrandModels | undefined {
  return BRAND_MODELS[slug];
}
