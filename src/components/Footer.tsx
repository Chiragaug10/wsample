export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-xl font-bold mb-2">Tropical Food</h3>
          <p className="text-gray-400 text-sm mb-4">
            A Culinary Journey Through Five Distinctive Experiences
          </p>
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Tropical Food. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
