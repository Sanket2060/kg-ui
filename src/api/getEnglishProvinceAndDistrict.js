const provinceMapping = {
    "बाग्मती": "bagmati",
    "गण्डकी": "gandaki",
    // Add more provinces as needed
  };
  
  const districtMapping = {
    "सिन्धुली": "sindhuli",
    "कास्की": "kaski",
    "लमजुङ": "lamjung",
    // Add more districts as needed
  };
  

export const getEnglishProvinceAndDistrict = (nepaliProvince, nepaliDistrict) => {
    const englishProvince = provinceMapping[nepaliProvince];
    const englishDistrict = districtMapping[nepaliDistrict];
  
    if (!englishProvince || !englishDistrict) {
      throw new Error("Province or District not found in mapping");
    }
  
    return { englishProvince, englishDistrict };
  };