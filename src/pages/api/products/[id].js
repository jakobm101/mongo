import products from "../../../../lib/products";

export default function handler(request, response) {
  const product = products.find(
    (product) => product._id.$oid === request.query.id
  );

  if (product) {
    response.status(200).json({ product: product });
    return;
  }
  response.status(404).json({ error: "Not found" });
  return;
}
