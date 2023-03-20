
function FormatPrice({price}) {
  return Intl.NumberFormat("ba-BD", {
    style: "currency", 
    currency: "BDT",
    maximumFractionDigits:2
}).format(price/100);
};

export default FormatPrice
