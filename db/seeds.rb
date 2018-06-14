20.times do
  Item.create(
    name: Faker::Commerce.product_name,
    description: Faker::Hipster.sentence,
    price: Faker::Commerce.price.to_f,
  )
end