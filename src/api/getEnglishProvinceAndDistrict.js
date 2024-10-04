const provinceMapping = {
  "प्रदेश न. १": "province_1",
  "प्रदेश न. २": "province_2",
  "बाग्मती": "bagmati",
  "गण्डकी": "gandaki",
  "लुम्बिनी": "lumbini",
  "कर्णाली": "karnali",
  "सुदुर पश्चिमाञ्चल": "sudur_paschim"
};

  
const districtMapping = {
  "अछाम": "achham",
  "अर्घाखाँची": "arghakhanchi",
  "बागलुङ": "baglung",
  "बैतडी": "baitadi",
  "बाँके": "banke",
  "बारा": "bara",
  "बर्दिया": "bardiya",
  "भक्तपुर": "bhaktapur",
  "भोजपुर": "bhojpur",
  "चितवन": "chitwan",
  "दाङ": "dang",
  "दैलेख": "dailekh",
  "डडेल्धुरा": "dadeldhura",
  "डोल्पा": "dolpa",
  "धादिङ": "dhading",
  "धनकुटा": "dhanusha",
  "धनुषा": "dhanusha",
  "दोलखा": "dolakha",
  "डोटी": "doti",
  "गोरखा": "gorkha",
  "गुल्मी": "gulmi",
  "हुम्ला": "humla",
  "इलाम": "ilam",
  "जाजरकोट": "jajarkot",
  "झापा": "jhapa",
  "जुम्ला": "jumla",
  "कैलाली": "kailali",
  "कालिकोट": "kalikot",
  "कञ्चनपुर": "kanchanpur",
  "कपिलवस्तु": "kapilvastu",
  "कास्की": "kaski",
  "काठमान्डौ": "kathmandu",
  "कावासोती": "kavrepalanchok",
  "खोटाङ": "khotang",
  "लमजुङ": "lamjung",
  "ललितपुर": "lalitpur",
  "मकवानपुर": "makwanpur",
  "मनाङ": "manang",
  "मोरङ": "morang",
  "मुगु": "mugu",
  "म्याग्दी": "myagdi",
  "नवलपरासी": "nawalparasi",
  "नुवाकोट": "nuwakot",
  "ओखलढुङ्गा": "okhaldhunga",
  "पाल्पा": "palpa",
  "पाँचथर": "panchthar",
  "पर्सा": "parsa",
  "प्युठान": "pyuthan",
  "रोल्पा": "rolpa",
  "रुकुम पूर्व": "rukum east",
  "रुकुम पश्चिम": "rukum west",
  "रुपन्देही": "rupandehi",
  "साल्यान": "salyan",
  "साङ्खुवासभा": "sankhuwasabha",
  "सप्तरी": "saptari",
  "सर्लाही": "sarlahi",
  "सिन्धुली": "sindhuli",
  "सिन्धुपाल्चोक": "sindhupalchok",
  "सुर्खेत": "surkhet",
  "स्याङ्जा": "syangja",
  "ताप्लेजुङ": "taplejung",
  "तेह्रथुम": "terhathum",
  "उदयपुर": "udayapur",
  "बाजुरा": "bajura",
  "बाजाङ": "bajhang",
  "बाँके": "banke",
  "बारा": "bara",
  "बर्दिया": "bardiya",
  "दैलेख": "dailekh",
  "दाङ": "dang",
  "डोल्पा": "dolpa",
  "रौतहट": "rautahat",
  "सिरहा": "siraha",
  "सोलुखुम्बु": "solukhumbu",
  "तानाहुं": "tanahun",
  "रौतहट": "rautahat",
  "कालीकोट": "kalikot",
  "मुस्ताङ": "mustang"
};

  

export const getEnglishProvinceAndDistrict = (nepaliProvince, nepaliDistrict) => {
    const englishProvince = provinceMapping[nepaliProvince];
    const englishDistrict = districtMapping[nepaliDistrict];
  
    if (!englishProvince || !englishDistrict) {
      throw new Error("Province or District not found in mapping");
    }
  
    return { englishProvince, englishDistrict };
  };