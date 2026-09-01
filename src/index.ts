function greet(user: string): string {
  return `hello ${user}`;
}



console.log(greet("ali"));

console.log(greet("geet"));


const user: string = "chai or TS";

console.log(greet(user));








// type narrowing 


function getChai(kind: string | number) {
  if (typeof kind === 'string') {
    return `Making ${kind} chaii ....`
  }

  return `Chai order: ${kind}`
}


// we are assure kay bhae  jab kind ki type string ho to bhaee if mai jay ga and jab number hoga order to woh jay ga else mai

// ab ap string mai . lagao gay to apko string kay sath jo methods hoty hain wohi milain gay 

// yani apko maloom he ho kay bhaee agar string aya to yeh msg if mai jay ga warna apny us ka aik or msg bh likh rakha hai kay agar string nh ata to yeh is case mai woh msg show kardy .....

function orderChai(size: "small" | "medium" | "large" | number) {
  if (size === "small") {
    return (`One ${size} chai lagado `)
  }

  if (size === "medium" || size === "large") {
    return (`Thori extra ${size} Chai `)
  }
  return `Chai order #${size}`
}


// these are safety checks or guards 




class KuladChai {
  serve() {
    return `Serving kulad chai `
  }
}


class CuttingChai {
  serve() {
    return `Serving cutting chai `
  }
}

function serve(chai: KuladChai | CuttingChai) {
  if (chai instanceof KuladChai) {
    return chai.serve();
  }
  // specifying kay bhaee class KuladChai ho to he serve ko return karo .....
}


// Easy formula yaad rakhna:

// Type Guard = TypeScript ko batana/check karna ke actual type kya hai.
// Type Narrowing = us check ke baad TypeScript ka type ko chhota/more specific kar dena.


function serveExample(chai: KuladChai | CuttingChai) {

  // chai = KuladChai | CuttingChai

  if (chai instanceof KuladChai) {

    // chai = KuladChai ✅

    return chai.serve();
  }

  // yahan chai effectively CuttingChai hai
}


// yeh example hmy ai ny di hai ai keh rha hai kay bhaee apny type to specify kardi hai kay is var ko yehi type mily ge lekin agar kcuh aisa ho kay type specify ho lekin ho skta hai is condition kay ilawa bh koi or condition aa jay ? so apny us ko karna haii handle ....
