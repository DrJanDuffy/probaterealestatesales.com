import { Bed, Bath, Square, MapPin, Star } from 'lucide-react';

const properties = [
  {
    id: 1,
    title: 'Modern Family Home in Suburban Heights',
    address: '123 Oak Street, Suburban Heights, CA 90210',
    price: '$750,000',
    beds: 4,
    baths: 3,
    sqft: 2800,
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop',
    status: 'Available',
    rating: 4.8,
    description: 'Beautiful family home with modern amenities, spacious backyard, and excellent school district.'
  },
  {
    id: 2,
    title: 'Cozy Townhouse in Downtown District',
    address: '456 Main Avenue, Downtown, CA 90211',
    price: '$450,000',
    beds: 3,
    baths: 2.5,
    sqft: 1800,
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop',
    status: 'Under Contract',
    rating: 4.6,
    description: 'Charming townhouse with city views, updated kitchen, and convenient downtown location.'
  },
  {
    id: 3,
    title: 'Luxury Condo with Ocean Views',
    address: '789 Beach Boulevard, Coastal City, CA 90212',
    price: '$1,200,000',
    beds: 3,
    baths: 3,
    sqft: 2200,
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop',
    status: 'Available',
    rating: 4.9,
    description: 'Stunning oceanfront condo with premium finishes, private balcony, and resort-style amenities.'
  }
];

export default function FeaturedProperties() {
  return (
    <section className="section-padding bg-secondary-50">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Featured Properties
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Discover our carefully curated selection of properties available through probate sales. 
            Each property offers unique value and potential for buyers and investors.
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div key={property.id} className="card overflow-hidden group">
              {/* Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={property.image} 
                  alt={property.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    property.status === 'Available' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {property.status}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                    <Star className="h-4 w-4 text-accent-500 fill-current" />
                    <span className="text-sm font-medium text-secondary-900">{property.rating}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {property.title}
                </h3>
                
                <div className="flex items-center gap-2 text-secondary-500 mb-4">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{property.address}</span>
                </div>

                <p className="text-secondary-600 mb-4 line-clamp-2">
                  {property.description}
                </p>

                {/* Property Details */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4 text-sm text-secondary-600">
                    <div className="flex items-center gap-1">
                      <Bed className="h-4 w-4" />
                      <span>{property.beds}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bath className="h-4 w-4" />
                      <span>{property.baths}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Square className="h-4 w-4" />
                      <span>{property.sqft.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary-600">{property.price}</span>
                  <button className="btn-outline text-sm py-2 px-4">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Properties CTA */}
        <div className="text-center mt-12">
          <button className="btn-primary">
            View All Properties
          </button>
        </div>
      </div>
    </section>
  );
}
