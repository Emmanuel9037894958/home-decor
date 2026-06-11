export default function GalleryPage() {
  // 40 local images from public/gallery/
  const images = Array.from(
    { length: 40 },
    (_, i) => `/hero${i + 1}.jpg`
  );

  return (
    <main className="min-h-screen bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Featured Gallery
          </h1>

          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Premium interior designs featuring curtains, blinds, and luxury home decoration works.
          </p>
        </div>

        {/* GALLERY GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {images.map((img, index) => (
            <div
              key={index}
              className="relative h-[280px] overflow-hidden rounded-2xl shadow-md group bg-gray-100"
            >
              <img
                src={img}
                alt={`Interior design ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />

              {/* hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-300"></div>
            </div>
          ))}

        </div>
      </div>
          <p className=" animate-bounce pt-5">Loading more....</p>
    </main>
  );
}