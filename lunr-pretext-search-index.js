var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "sec-definition-polynomials",
  "level": "1",
  "url": "sec-definition-polynomials.html",
  "type": "Section",
  "number": "1.1",
  "title": "Definition",
  "body": " Definition  Let be a ring with unity. We give definition of a polynomial in one variable with coefficients in a ring .   Definition of a polynomial   A polynomial in one variable with coefficients in a ring is defined as a map such that the image of under is denoted by and the set is finite.      Given we define such that and for all .      We define such that and for all .     Ring of polynomials   For two polynomials their addition, is defined as the addition of functions, i.e., . Their product is defined as follows:   The set of all polynomials in one indeterminate with coefficients in a ring is denoted by . The set is a ring with unity, where the unity is the polynomial such that and for all .     Note that every polynomial can be uniquely written as . So, from now onwards write for the polynomial that maps to for and to for .  As usual, for a nonzero polynomial the largest integer for which the coefficient of is not zero is called the leading coefficient of and is called the degree of . A polynomial is called a monic polynomial if the leading coefficient is .    Polynomial function   Let be a ring and let be a polynomial in . The polynomial function is defined as follows:      Root of a polynomial   Keep notation as in . An element is called a root of the polynomial if .      Convince yourself that the usual definition given in terms of formal sums of monomials is equivalent to the definition given above.      Convince yourself that distinguishes a polynomial and a polynomial function.  Indeed, let be a finite field. The polynomial is not a zero polynomial, but the polynomial function is a zero function.     Ring of polynomials in several variables   Let . The ring of polynomials in variables with coefficients in a ring is denoted by . It is defined in a similar way as above .    We state the following theorem without proof. The proof is similar to the proof of the division algorithm in field case.   Euclidean Division   Let be a commutative ring with unity and be polynomials. If the leading coefficient of is invertible in , then there exist unique polynomials such that and .      Let . We show that divides .  Suppose that . Note that . As is a monic polynomial in , there exists such that with . Therefore, for all . As is an infinite field, we get that . Hence, by separating the odd and the even degree terms, we get that , i.e., . Therefore, divides .      Let be a commutative ring with unity. Show that is a root of a polynomial if and only if divides .    "
},
{
  "id": "def-polynomial",
  "level": "2",
  "url": "sec-definition-polynomials.html#def-polynomial",
  "type": "Definition",
  "number": "1.1.1",
  "title": "Definition of a polynomial.",
  "body": " Definition of a polynomial   A polynomial in one variable with coefficients in a ring is defined as a map such that the image of under is denoted by and the set is finite.   "
},
{
  "id": "sec-definition-polynomials-4",
  "level": "2",
  "url": "sec-definition-polynomials.html#sec-definition-polynomials-4",
  "type": "Example",
  "number": "1.1.2",
  "title": "",
  "body": "  Given we define such that and for all .   "
},
{
  "id": "sec-definition-polynomials-5",
  "level": "2",
  "url": "sec-definition-polynomials.html#sec-definition-polynomials-5",
  "type": "Example",
  "number": "1.1.3",
  "title": "",
  "body": "  We define such that and for all .   "
},
{
  "id": "def-ring-of-polynomials",
  "level": "2",
  "url": "sec-definition-polynomials.html#def-ring-of-polynomials",
  "type": "Definition",
  "number": "1.1.4",
  "title": "Ring of polynomials.",
  "body": " Ring of polynomials   For two polynomials their addition, is defined as the addition of functions, i.e., . Their product is defined as follows:   The set of all polynomials in one indeterminate with coefficients in a ring is denoted by . The set is a ring with unity, where the unity is the polynomial such that and for all .   "
},
{
  "id": "sec-definition-polynomials-7",
  "level": "2",
  "url": "sec-definition-polynomials.html#sec-definition-polynomials-7",
  "type": "Remark",
  "number": "1.1.5",
  "title": "",
  "body": " Note that every polynomial can be uniquely written as . So, from now onwards write for the polynomial that maps to for and to for .  As usual, for a nonzero polynomial the largest integer for which the coefficient of is not zero is called the leading coefficient of and is called the degree of . A polynomial is called a monic polynomial if the leading coefficient is .  "
},
{
  "id": "def-polynomial-function",
  "level": "2",
  "url": "sec-definition-polynomials.html#def-polynomial-function",
  "type": "Definition",
  "number": "1.1.6",
  "title": "Polynomial function.",
  "body": " Polynomial function   Let be a ring and let be a polynomial in . The polynomial function is defined as follows:    "
},
{
  "id": "def-root-of-a-polynomial",
  "level": "2",
  "url": "sec-definition-polynomials.html#def-root-of-a-polynomial",
  "type": "Definition",
  "number": "1.1.7",
  "title": "Root of a polynomial.",
  "body": " Root of a polynomial   Keep notation as in . An element is called a root of the polynomial if .   "
},
{
  "id": "sec-definition-polynomials-10",
  "level": "2",
  "url": "sec-definition-polynomials.html#sec-definition-polynomials-10",
  "type": "Checkpoint",
  "number": "1.1.8",
  "title": "",
  "body": "  Convince yourself that the usual definition given in terms of formal sums of monomials is equivalent to the definition given above.   "
},
{
  "id": "sec-definition-polynomials-11",
  "level": "2",
  "url": "sec-definition-polynomials.html#sec-definition-polynomials-11",
  "type": "Checkpoint",
  "number": "1.1.9",
  "title": "",
  "body": "  Convince yourself that distinguishes a polynomial and a polynomial function.  Indeed, let be a finite field. The polynomial is not a zero polynomial, but the polynomial function is a zero function.   "
},
{
  "id": "def-ring-of-polynomials-in-several-variables",
  "level": "2",
  "url": "sec-definition-polynomials.html#def-ring-of-polynomials-in-several-variables",
  "type": "Definition",
  "number": "1.1.10",
  "title": "Ring of polynomials in several variables.",
  "body": " Ring of polynomials in several variables   Let . The ring of polynomials in variables with coefficients in a ring is denoted by . It is defined in a similar way as above .   "
},
{
  "id": "thm-euclidean-division",
  "level": "2",
  "url": "sec-definition-polynomials.html#thm-euclidean-division",
  "type": "Theorem",
  "number": "1.1.11",
  "title": "Euclidean Division.",
  "body": " Euclidean Division   Let be a commutative ring with unity and be polynomials. If the leading coefficient of is invertible in , then there exist unique polynomials such that and .   "
},
{
  "id": "sec-definition-polynomials-15",
  "level": "2",
  "url": "sec-definition-polynomials.html#sec-definition-polynomials-15",
  "type": "Example",
  "number": "1.1.12",
  "title": "",
  "body": "  Let . We show that divides .  Suppose that . Note that . As is a monic polynomial in , there exists such that with . Therefore, for all . As is an infinite field, we get that . Hence, by separating the odd and the even degree terms, we get that , i.e., . Therefore, divides .   "
},
{
  "id": "sec-definition-polynomials-16",
  "level": "2",
  "url": "sec-definition-polynomials.html#sec-definition-polynomials-16",
  "type": "Checkpoint",
  "number": "1.1.13",
  "title": "",
  "body": "  Let be a commutative ring with unity. Show that is a root of a polynomial if and only if divides .   "
},
{
  "id": "sec-characteristic-of-ring",
  "level": "1",
  "url": "sec-characteristic-of-ring.html",
  "type": "Section",
  "number": "2.1",
  "title": "Characteristic of a ring",
  "body": " Characteristic of a ring  In this section we define the characteristic of a ring that contains a subfield .    Let be a unique ring homomorphism. The kernel of is generated by the unique positive integer , . The integer is called the characteristic of .      Find the characteristic of the following fields.       Find the characteristic of the following rings.     "
},
{
  "id": "def-characteristic-of-ring",
  "level": "2",
  "url": "sec-characteristic-of-ring.html#def-characteristic-of-ring",
  "type": "Definition",
  "number": "2.1.1",
  "title": "",
  "body": "  Let be a unique ring homomorphism. The kernel of is generated by the unique positive integer , . The integer is called the characteristic of .   "
},
{
  "id": "sec-characteristic-of-ring-4",
  "level": "2",
  "url": "sec-characteristic-of-ring.html#sec-characteristic-of-ring-4",
  "type": "Checkpoint",
  "number": "2.1.2",
  "title": "",
  "body": "  Find the characteristic of the following fields.    "
},
{
  "id": "sec-characteristic-of-ring-5",
  "level": "2",
  "url": "sec-characteristic-of-ring.html#sec-characteristic-of-ring-5",
  "type": "Checkpoint",
  "number": "2.1.3",
  "title": "",
  "body": "  Find the characteristic of the following rings.    "
},
{
  "id": "sec-prime-subfield",
  "level": "1",
  "url": "sec-prime-subfield.html",
  "type": "Section",
  "number": "2.2",
  "title": "Prime subfield",
  "body": " Prime subfield  We begin with the definition of a prime subfield of a field .    A field is said to be prime if it is isomorphic to or to one of the finite fields .      Let be a ring with a subfield. Then has a unique subfield which is a prime field. Furthermore, is contained in every subfield of , and also in the center of .    Let be a unique ring homomorphism, and let be a subfield of . We put . Note that . Therefore, is either or it is generated by some prime number . If , then is injective and can be extended to a field isomomorphism of with a subfield . If then, defines an isomorphism from to a subfield .    "
},
{
  "id": "def-prime-subfield",
  "level": "2",
  "url": "sec-prime-subfield.html#def-prime-subfield",
  "type": "Definition",
  "number": "2.2.1",
  "title": "",
  "body": "  A field is said to be prime if it is isomorphic to or to one of the finite fields .   "
},
{
  "id": "thm-prime-subfield",
  "level": "2",
  "url": "sec-prime-subfield.html#thm-prime-subfield",
  "type": "Theorem",
  "number": "2.2.2",
  "title": "",
  "body": "  Let be a ring with a subfield. Then has a unique subfield which is a prime field. Furthermore, is contained in every subfield of , and also in the center of .    Let be a unique ring homomorphism, and let be a subfield of . We put . Note that . Therefore, is either or it is generated by some prime number . If , then is injective and can be extended to a field isomomorphism of with a subfield . If then, defines an isomorphism from to a subfield .   "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
