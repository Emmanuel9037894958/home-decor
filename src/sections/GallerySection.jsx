export default function GallerySection() {
  const images = Array.from(
    { length: 44 },
    (_, i) => `https://picsum.photos/800/800?random=${i + 1}`
  );

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">Featured Gallery</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {images.map((img, index) => (
            <div
              key={index}
              className="h-[280px] overflow-hidden rounded-2xl shadow-md"
            >
              <img
                src={img}
                alt="gallery"
                className="w-full h-full object-cover"
              />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}