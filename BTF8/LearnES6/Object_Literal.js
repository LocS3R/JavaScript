function addressMaker(city, state) {
  const newAddress = { tp: city, dc: state };
  console.log(newAddress);
}

// addressMaker("New York", "NY");
//

function addressMaker2(address) {
  const { city, state } = address;
  const newAddress = {
    city,
    state,
    country: "Viet Nam",
  };
  console.log(`${newAddress.city} ${newAddress.state} ${newAddress.country}`);
}

addressMaker2({ city: "THANH HOA", state: "TH" });
