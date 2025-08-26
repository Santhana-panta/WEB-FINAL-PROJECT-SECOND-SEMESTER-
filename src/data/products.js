const products = [
  {
    id: 1,
    title: 'Chocolate Eclair',
    price: 120,
    rating: 4.5,
    image: '/images/pastry1.png',
    description:
      'Classic French pastry filled with rich chocolate cream and topped with glossy chocolate glaze.',
    bullets: [
      'Freshly baked daily',
      'Silky chocolate filling',
      'Perfect for dessert lovers',
      'Complimentary message card included',
    ],
    specs: { Flavor: 'Chocolate', Size: 'Large', Origin: 'France', ShelfLife: '2 days refrigerated' },
  },
  {
    id: 2,
    title: 'Strawberry Tart',
    price: 150,
    rating: 4,
    image: '/images/pastry2.png',
    description:
      'Crispy tart shell filled with vanilla custard and topped with fresh strawberries.',
    bullets: [
      'Handmade crust',
      'Seasonal strawberries',
      'Light and refreshing',
      'Gift-ready packaging',
    ],
    specs: { Flavor: 'Strawberry', Size: 'Medium', Origin: 'Italy', ShelfLife: '1 day refrigerated' },
  },
  {
    id: 3,
    title: 'Macaron Box',
    price: 200,
    rating: 5,
    image: '/images/pastry3.png',
    description:
      'Assorted French macarons in a variety of flavors. Perfect for gifting or sharing.',
    bullets: [
      '6 flavors per box',
      'Gluten-free',
      'Colorful and festive',
      'Luxury gift box',
    ],
    specs: { Flavors: 'Assorted', Pieces: '12', Origin: 'France', ShelfLife: '5 days refrigerated' },
  },
  {
    id: 4,
    title: 'Lemon Meringue Pie',
    price: 180,
    rating: 4,
    image: '/images/pastry4.png',
    description:
      'Tangy lemon filling topped with fluffy, toasted meringue in a buttery pie crust.',
    bullets: [
      'Zesty lemon flavor',
      'Hand-whipped meringue',
      'Perfect for summer',
      'Complimentary card included',
    ],
    specs: { Flavor: 'Lemon', Size: 'Large', Origin: 'USA', ShelfLife: '2 days refrigerated' },
  },
  {
    id: 5,
    title: 'Red Velvet Cupcake',
    price: 90,
    rating: 4.5,
    image: '/images/pastry5.png',
    description:
      'Moist red velvet cupcake topped with creamy cheese frosting and red sprinkles.',
    bullets: [
      'Rich cocoa flavor',
      'Smooth cream cheese frosting',
      'Single-serve treat',
      'Gift-ready wrap',
    ],
    specs: { Flavor: 'Red Velvet', Size: 'Single', Origin: 'USA', ShelfLife: '3 days refrigerated' },
  },
  {
    id: 6,
    title: 'Almond Croissant',
    price: 110,
    rating: 4,
    image: '/images/pastry6.png',
    description:
      'Flaky croissant filled with almond paste and dusted with powdered sugar.',
    bullets: [
      'Buttery layers',
      'Sweet almond filling',
      'Perfect for breakfast',
      'Complimentary card included',
    ],
    specs: { Flavor: 'Almond', Size: 'Large', Origin: 'France', ShelfLife: '2 days refrigerated' },
  },
  {
    id: 7,
    title: 'Blueberry Danish',
    price: 130,
    rating: 4,
    image: '/images/pastry7.png',
    description:
      'Golden pastry filled with blueberry compote and finished with vanilla icing.',
    bullets: [
      'Sweet blueberry filling',
      'Soft, flaky pastry',
      'Ideal for brunch',
      'Gift-ready packaging',
    ],
    specs: { Flavor: 'Blueberry', Size: 'Medium', Origin: 'Denmark', ShelfLife: '2 days refrigerated' },
  },
  {
    id: 8,
    title: 'Pistachio Cannoli',
    price: 140,
    rating: 4.5,
    image: '/images/pastry8.png',
    description:
      'Crispy cannoli shell filled with pistachio cream and topped with crushed pistachios.',
    bullets: [
      'Authentic Italian recipe',
      'Creamy pistachio filling',
      'Crunchy shell',
      'Luxury wrap',
    ],
    specs: { Flavor: 'Pistachio', Size: 'Single', Origin: 'Italy', ShelfLife: '2 days refrigerated' },
  },
]

export default products