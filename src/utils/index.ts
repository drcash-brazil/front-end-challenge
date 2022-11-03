import { CleaveOptions } from "cleave.js/options";

export const formatPhone = (phone: string) => {
  return phone
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{4})(\d{4})/, "$1-$2");
};

export const PhoneFormat: CleaveOptions = {
  delimiters: ["(", ")", "\u0020", "-"],
  blocks: [0, 2, 0, 5, 4],
  uppercase: true,
  numericOnly: true,
};

export const CnpjFormat: CleaveOptions = {
  delimiters: [".", ".", "/", "-"],
  blocks: [2, 3, 3, 4, 2],
  numericOnly: true,
  delimiterLazyShow: true,
};

export const CpfFormat: CleaveOptions = {
  delimiters: [".", ".", "-"],
  blocks: [3, 3, 3, 2],
  numericOnly: true,
  delimiterLazyShow: true,
};

export const cpfIsValid = (value: string) => {
  if (!value || !/^(\d{3}\.){2}\d{3}-\d{2}$/.test(value)) return false;

  const withoutSpecialCharacters = value.replaceAll(/\.|-/g, "");
  const length = withoutSpecialCharacters.length;

  if (length !== 11 || /\b(\d)\1+\b/g.test(withoutSpecialCharacters))
    return false;

  let result = withoutSpecialCharacters.slice(0, length - 2);

  for (let i = 9; i <= 10; i++) {
    let sumAux = 0;

    for (let b = i; b >= 1; b--) {
      sumAux += (b + 1) * parseInt(result.charAt(result.length - b));
    }

    const rest = sumAux % 11;
    if (rest >= 2) {
      result = result.concat(`${11 - rest}`);
    } else {
      result = result.concat("0");
    }
  }
  return result === withoutSpecialCharacters;
};

export const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const addressToUrlMaps = (address: string) => {
  const addressFormated = address.replaceAll(" ", "+");
  const link = `https://www.google.com.br/maps/search/${addressFormated}`;
  
  return link;
};

