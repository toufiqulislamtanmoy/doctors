export const getTherapistData = async (searchText = "") => {
  const res = await fetch("/therapists.json");
  const data = await res.json();
  console.log(searchText);
  
  if (searchText) {
    const filteredData = data.filter((therapist) => {
      const lowerCaseSearchText = searchText.toLowerCase();
      const lowerCaseCity = therapist.address.city.toLowerCase();
      
      const zipCode = therapist.address.zip;

      return (
        lowerCaseCity.includes(lowerCaseSearchText) ||
        zipCode.includes(lowerCaseSearchText)
      );
    });
    return filteredData;
  }

  return data;
};
