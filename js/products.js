const products = [
  // Beds
  { id: 'b1', name: 'Blue Wingback Bed', category: 'Beds', price: 25000, image: 'assets/bed-blue-wingback.jpg', description: 'Luxurious blue wingback bed with premium fabric upholstery and sturdy wooden frame.', dimensions: '5 by 6', material: 'Fabric, Hardwood', availability: 'In Stock' },
  { id: 'b2', name: 'Cream Wingback Bed', category: 'Beds', price: 25000, image: 'assets/bed-cream-wingback.jpg', description: 'Elegant cream wingback bed perfect for a modern bedroom aesthetic.', dimensions: '5 by 6', material: 'Fabric, Hardwood', availability: 'In Stock' },
  { id: 'b3', name: 'Pink Studio Bed', category: 'Beds', price: 27000, image: 'assets/bed_pink_studio.jpg', description: 'Chic pink bed frame with a soft, minimalist headboard.', dimensions: 'Double / Queen', material: 'Fabric, MDF', availability: 'Made to Order' },
  { id: 'b4', name: 'Wood Studio Bed', category: 'Beds', price: 37000, image: 'assets/bed_wood_studio.jpg', description: 'Classic wooden bed frame with a natural finish.', dimensions: '5 by 6', material: 'Solid Wood', availability: 'In Stock' },
  { id: 'b5', name: 'White Minimalist Bed', category: 'Beds', price: 15000, image: 'assets/restaged_02_white_bed.jpg', description: 'Clean white bed frame with a sleek, contemporary design.', dimensions: '5 by 6', material: 'MDF, Hardwood', availability: 'In Stock' },
  { id: 'b6', name: 'Grey Bed Frame', category: 'Beds', price: 15000, image: 'assets/restaged_06_grey_bed_frame.jpg', description: 'Modern grey bed frame with a low profile.', dimensions: '5 by 6', material: 'Fabric, Hardwood', availability: 'In Stock' },
  { id: 'b7', name: 'Blue Channel Bed', category: 'Beds', price: 25000, image: 'assets/restaged_07_blue_channel_bed.jpg', description: 'Stunning blue bed with channel tufting detail.', dimensions: '5 by 6', material: 'Velvet, Hardwood', availability: 'Made to Order' },
  { id: 'b8', name: 'Green Tufted Bed', category: 'Beds', price: 14000, image: 'assets/restaged_08_green_tufted_bed.jpg', description: 'Emerald green tufted bed for a bold bedroom statement.', dimensions: '5 by 6', material: 'Velvet, Hardwood', availability: 'Made to Order' },
  { id: 'b9', name: 'Grey Tufted Bed', category: 'Beds', price: 12000, image: 'assets/restaged_09_grey_tufted_bed.jpg', description: 'Classic grey tufted bed offering supreme comfort and style.', dimensions: '4 by 6', material: 'Fabric, Hardwood', availability: 'In Stock' },
  { id: 'b10', name: 'Grey Sunburst Bed', category: 'Beds', price: 15000, image: 'assets/restaged_12_grey_sunburst_bed.jpg', description: 'Unique grey bed featuring a sunburst headboard pattern.', dimensions: '5 by 6', material: 'Fabric, Hardwood', availability: 'In Stock' },
  { id: 'b11', name: 'Mahogany Bed', category: 'Beds', price: 12000, image: 'assets/restaged_14_mahogany_bed.jpg', description: 'Premium solid mahogany bed with intricate detailing.', dimensions: 'Queen / King', material: 'Solid Mahogany', availability: 'In Stock' },
  { id: 'b12', name: 'White Paneled Bed', category: 'Beds', price: 18000, image: 'assets/restaged_15_white_paneled_bed.jpg', description: 'White bed with a timeless paneled headboard.', dimensions: 'Queen / King', material: 'MDF, Hardwood', availability: 'In Stock' },
  { id: 'b13', name: 'White Wrapped Bed', category: 'Beds', price: 25000, image: 'assets/restaged_16_white_wrapped_bed.jpg', description: 'Elegant white upholstered bed frame.', dimensions: 'Queen / King', material: 'Fabric, Hardwood', availability: 'Made to Order' },
  { id: 'b14', name: 'Crimson Luxe Bed', category: 'Beds', price: 25000, image: 'assets/crimson-luxe-bed.png', description: 'Elegant crimson luxe bed offering both comfort and a striking aesthetic.', dimensions: '5 by 6', material: 'Fabric, Hardwood', availability: 'In Stock' },

  // Sofas
  { id: 's1', name: 'Teal Sectional', category: 'Sofas', price: 36000, image: 'assets/restaged_04_teal_sectional.jpg', description: 'Spacious teal sectional sofa for modern living rooms.', dimensions: 'L-Shape 2.5m x 2m', material: 'Fabric, High-density Foam', availability: 'In Stock' },
  { id: 's2', name: 'Blue Sectional', category: 'Sofas', price: 35000, image: 'assets/restaged_20_blue_sectional.jpg', description: 'Comfortable blue sectional sofa with plush cushions.', dimensions: 'L-Shape 2.5m x 2m', material: 'Fabric, High-density Foam', availability: 'Made to Order' },
  { id: 's3', name: 'Teal Modern Sectional', category: 'Sofas', price: 36000, image: 'assets/sectional-teal.jpg', description: 'Sleek teal sectional sofa with metallic legs.', dimensions: 'L-Shape 2.8m x 2m', material: 'Fabric, Metal, Foam', availability: 'In Stock' },
  { id: 's4', name: 'Cream Sofa', category: 'Sofas', price: 18000, image: 'assets/sofa-cream.jpg', description: 'Elegant 3-seater cream sofa.', dimensions: '2.1m length', material: 'Fabric, Hardwood', availability: 'In Stock' },
  { id: 's5', name: 'Cream Studio Sofa', category: 'Sofas', price: 35000, image: 'assets/sofa_cream_studio.jpg', description: 'Premium cream sofa with deep seating.', dimensions: '2.2m length', material: 'Fabric, Hardwood', availability: 'Made to Order' },
  { id: 's6', name: 'Grey Studio Sofa', category: 'Sofas', price: 35000, image: 'assets/sofa_grey_studio.jpg', description: 'Modern grey 3-seater sofa perfect for any decor.', dimensions: '2.1m length', material: 'Fabric, Hardwood', availability: 'In Stock' },

  // TV Consoles
  { id: 't1', name: 'Modern TV Console', category: 'TV Consoles', price: 12000, image: 'assets/restaged_01_tv_console.jpg', description: 'Minimalist TV console with ample storage.', dimensions: '1.8m length', material: 'MDF, Wood Veneer', availability: 'In Stock' },
  { id: 't2', name: 'Slatted TV Console', category: 'TV Consoles', price: 12000, image: 'assets/restaged_03_slatted_console.jpg', description: 'Contemporary TV console with slatted wood doors.', dimensions: '2.0m length', material: 'Solid Wood, MDF', availability: 'In Stock' },
  { id: 't3', name: 'White & Grey Console', category: 'TV Consoles', price: 12000, image: 'assets/restaged_11_white_grey_tv_console.jpg', description: 'Two-tone TV console with a modern aesthetic.', dimensions: '1.8m length', material: 'MDF', availability: 'In Stock' },
  { id: 't4', name: 'Marble Top Console', category: 'TV Consoles', price: 12000, image: 'assets/restaged_18_marble_tv_console.jpg', description: 'Luxury TV console featuring a faux marble top.', dimensions: '2.0m length', material: 'MDF, Faux Marble', availability: 'Made to Order' },
  { id: 't5', name: 'Walnut TV Console', category: 'TV Consoles', price: 12000, image: 'assets/tv-console-walnut.jpg', description: 'Rich walnut finish TV console with sleek handles.', dimensions: '1.8m length', material: 'Walnut Veneer, MDF', availability: 'In Stock' },
  { id: 't6', name: 'Marble TV Stand', category: 'TV Consoles', price: 12000, image: 'assets/tv-stand-marble.jpg', description: 'Elegant TV stand with marble accents.', dimensions: '1.8m length', material: 'MDF, Marble finish', availability: 'In Stock' },
  { id: 't7', name: 'Studio TV Stand', category: 'TV Consoles', price: 12000, image: 'assets/tvstand_studio.jpg', description: 'Compact and functional TV stand.', dimensions: '1.5m length', material: 'MDF', availability: 'In Stock' },

  // Bookshelves
  { id: 'bk1', name: 'Black & White Bookshelf', category: 'Bookshelves', price: 9000, image: 'assets/bookshelf-black-white.jpg', description: 'Modern two-tone bookshelf.', dimensions: '1.8m H x 0.8m W', material: 'MDF, Metal', availability: 'In Stock' },
  { id: 'bk2', name: 'White X Bookshelf', category: 'Bookshelves', price: 9000, image: 'assets/bookshelf-white-x.jpg', description: 'Stylish bookshelf with X-shaped side supports.', dimensions: '1.8m H x 0.9m W', material: 'MDF', availability: 'In Stock' },
  { id: 'bk3', name: 'Classic Bookshelf', category: 'Bookshelves', price: 9000, image: 'assets/restaged_10_bookshelf.jpg', description: 'Classic wooden bookshelf for home or office.', dimensions: '1.8m H x 0.8m W', material: 'MDF, Wood Veneer', availability: 'In Stock' },
  { id: 'bk4', name: 'Modern Bookshelf', category: 'Bookshelves', price: 7500, image: 'assets/modern-bookshelf.jpg', description: 'A sleek and modern bookshelf perfect for any contemporary space.', dimensions: '1.8m H x 0.8m W', material: 'MDF', availability: 'In Stock' },

  // Tables
  { id: 'tb1', name: 'Studio Desk', category: 'Tables', price: 4500, image: 'assets/desk_studio.jpg', description: 'Minimalist study or home office desk.', dimensions: '1.2m L x 0.6m W', material: 'MDF, Metal legs', availability: 'In Stock' },
  { id: 'tb2', name: 'Walnut Nesting Tables', category: 'Tables', price: 5000, image: 'assets/nesting-tables-walnut.jpg', description: 'Set of nesting tables in a rich walnut finish.', dimensions: 'Various sizes', material: 'Walnut Veneer', availability: 'In Stock' },
  { id: 'tb3', name: 'Studio Nesting Tables', category: 'Tables', price: 12000, image: 'assets/nesttables_studio.jpg', description: 'Modern nesting tables with a sleek design.', dimensions: 'Various sizes', material: 'MDF, Metal', availability: 'In Stock' },
  { id: 'tb4', name: 'Grey Coffee Table', category: 'Tables', price: 4500, image: 'assets/restaged_17_grey_coffee_table.jpg', description: 'Contemporary grey coffee table.', dimensions: '1.0m L x 0.6m W', material: 'MDF', availability: 'In Stock' },
  { id: 'tb5', name: 'White Round Tables', category: 'Tables', price: 5000, image: 'assets/restaged_19_white_round_tables.jpg', description: 'Set of white round accent tables.', dimensions: 'Various sizes', material: 'MDF', availability: 'In Stock' },

  // Sideboards
  { id: 'sd1', name: 'Wood Sideboard', category: 'Sideboards', price: 12000, image: 'assets/restaged_05_wood_sideboard.jpg', description: 'Classic wood sideboard with ample dining storage.', dimensions: '1.6m L', material: 'Solid Wood, MDF', availability: 'In Stock' },
  { id: 'sd2', name: 'Mahogany Dresser', category: 'Sideboards', price: 13000, image: 'assets/restaged_13_mahogany_dresser.jpg', description: 'Premium mahogany dresser with multiple drawers.', dimensions: '1.4m L', material: 'Solid Mahogany', availability: 'In Stock' },
  { id: 'sd3', name: 'Studio Sideboard', category: 'Sideboards', price: 9000, image: 'assets/sideboard_studio.jpg', description: 'Modern sideboard with clean lines.', dimensions: '1.5m L', material: 'MDF, Wood Veneer', availability: 'In Stock' },

  // Shoe Racks
  { id: 'sh1', name: 'White Shoe Shelf', category: 'Shoe Racks', price: 13000, image: 'assets/shoe-shelf-white.jpg', description: 'Practical and stylish white shoe rack.', dimensions: '1.0m H x 0.8m W', material: 'MDF', availability: 'In Stock' }
];

const categories = [
  'All',
  'Beds',
  'Sofas',
  'TV Consoles',
  'Bookshelves',
  'Tables',
  'Sideboards',
  'Shoe Racks'
];
