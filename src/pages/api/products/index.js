import products from "../../../../lib/products";

export default function handler(request, response) {
  response.status(200).json(products);
}
