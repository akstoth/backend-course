import { randomUUID } from "crypto";
import type { Product } from "./05-produtos";

// E se for somente leitura?
const product1: Readonly <Product> = {
  name: 'Pair of Socks',
  amountInStock: 100,
  unitValue: 5,
  barCode: 'asgegrbdv', // A vírgula no final é uma boa prática para o git
}
//product1.name = 'Socks' -> Não deixa mais alterar o nome com o Readonly

// Esse type só possui um objeto/ método como opcional, e para ser todos?
const productAllOptional: Partial <Product> = {
  unitValue: 20,

}

// Agora todos são obrigatórios
const productAllRequired: Required <Product> = {
  name: 'Jaket',
  amountInStock: 30,
  unitValue: 180,
  barCode: '481a2006-dbca-4c7e-88df-8e8eb316506a',
}

// E se quiser retirar alguma propriedade?
const productOmitStokAndBarCode: Omit <Product, 
"amountInStock" | "barCode"> = {
  name: 'Shorts',
  unitValue: 80,
  //barCode: '12314'
}

// Quando temos muita propriedades, podemos escolher somente algumas
const productOnlyNameAndValue: Pick <Product, 
"name" | "unitValue"> = {
  name: 'Shorts',
  unitValue: 80,
  //barCode: '12314'
}