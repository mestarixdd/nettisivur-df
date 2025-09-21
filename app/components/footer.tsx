export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-gray-600 font-poppins">© {new Date().getFullYear()} Riku Illukka</p>
        </div>
      </div>
    </footer>
  )
}
