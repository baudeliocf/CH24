//Write a function that takes in a DNA string (for example 'CTAGGGTA') and returns a new string with any non-canonical DNA base values removed.
// Canonical base values are single characters: 'C', 'T', 'A', and 'G' only.
// Make the function case sensitive - meaning 'c' (lower case) should be removed from the string, but 'C' (upper case) is a good value and should remain.
// If the DNA string is empty, just return an empty string.

// Explore the string in to seatch the values of CTAG, compare and save in another string
function dna(dna_in) {
  let dna_out = "";
  for (let i = 0; i < dna_in.length; i++) {
    if (dna_in[i] == "C") dna_out += dna_in[i];
    if (dna_in[i] == "T") dna_out += dna_in[i];
    if (dna_in[i] == "A") dna_out += dna_in[i];
    if (dna_in[i] == "G") dna_out += dna_in[i];
  }
  return dna_out;
}

// function dnaV2(dna_in) {
//   let dna_out = "";
//   const values = "CTAG";
//   for (i in dna_in) {
//     for (j in values) {
//       dna_in[i] == values[j] ? (dna_out += dna_in[i]) : dna_out;
//     }
//   }
//   return dna_out;
// }

// console.log(dna("FCHAGKCSJGFBQWAELCJGDHAFKTLJCGDRKGJFHA"));
// console.log(dnaV2("FCHAGKCSJGFBQWAELCJGDHAFKTLJCGDRKGJFHA"));

module.exports = dna;
