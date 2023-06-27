function displayNatoEquivalent(string) {
  // Define the NATO alphabet mapping
  const natoAlphabet = {
    A: "Alpha",
    B: "Bravo",
    C: "Charlie",
    D: "Delta",
    E: "Echo",
    F: "Foxtrot",
    G: "Golf",
    H: "Hotel",
    I: "India",
    J: "Juliet",
    K: "Kilo",
    L: "Lima",
    M: "Mike",
    N: "November",
    O: "Oscar",
    P: "Papa",
    Q: "Quebec",
    R: "Romeo",
    S: "Sierra",
    T: "Tango",
    U: "Uniform",
    V: "Victor",
    W: "Whiskey",
    X: "X-ray",
    Y: "Yankee",
    Z: "Zulu",
    0: "Zero",
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: "Nine",
    ".": "Dot",
    " ": "Space",
    "@": "At",
  };

  // Convert the string to uppercase
  const uppercaseString = string.toUpperCase();

  // Initialize the NATO equivalent string
  const natoEquivalent = [];

  for (let i = 0; i < uppercaseString.length; i++) {
    const char = uppercaseString[i];
    if (/[A-Z0-9.\s@'"]/i.test(char)) {
      const pair = `${char} - ${natoAlphabet[char]}`;
      natoEquivalent.push(pair);
    }
  }

  // Return the NATO equivalent string
  return natoEquivalent;
}
function updateNatoEquivalent(inputValue, divId) {
  const natoEquivalent = displayNatoEquivalent(inputValue);
  const divElement = document.getElementById(divId);
  // Clear the content of the div element
  divElement.innerHTML = "";
  // Create a span element for the NATO equivalent string
  const natoSpan = document.createElement("span");

  // Iterate over each NATO equivalent pair
  for (let i = 0; i < natoEquivalent.length; i++) {
    const pair = natoEquivalent[i];

    // Create a span element for each pair
    const pairSpan = document.createElement("span");
    pairSpan.textContent = pair;

    // Apply the border style to the span element
    pairSpan.style.border = "1px solid #eee";
    pairSpan.style.padding = "5px";
    pairSpan.style.marginRight = "5px";
    pairSpan.style.display = "inline-block";
    pairSpan.style.margin = "5px";
    pairSpan.style.padding = "8px 15px";
    pairSpan.style.backgroundColor = "#fff";
    pairSpan.style.borderRadius = "4px";
    pairSpan.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
    pairSpan.style.fontSize = "16px";
    console.log(pair[0]);

    if (pair[0] == "." || pair[0][0] == " " || pair[0][0] == "@") {
      // console.log(pair[0][0]);
      pairSpan.style.border = "0";
      pairSpan.style.color = "#999";
      pairSpan.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
      if (pair[0][0] == " ") {
        pairSpan.textContent = "<<>>";
      } else {
        pairSpan.textContent = pair[0][0];
      }
      
    }

    // Append the pair span element to the NATO span element
    natoSpan.appendChild(pairSpan);
  }

  // Append the NATO span element to the main div element
  divElement.appendChild(natoSpan);
}

/*

          .space {
          backgroundColor: #f2f2f2;
          fontWeight: bold;
          }
          */
