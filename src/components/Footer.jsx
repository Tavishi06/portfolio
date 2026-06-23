export default function Footer() {
  return (
    <footer
      className="
      bg-black
      border-t
      border-zinc-800
      py-8
      "
    >
      <div className="max-w-6xl mx-auto px-6">

        <div
          className="
          flex
          flex-col
          md:flex-row
          justify-between
          items-center
          gap-4
          "
        >
          <h3
            className="
            text-xl
            font-bold
            text-white
            "
          >
            Tavishi Kashyap
          </h3>

          <p className="text-gray-500">
            Full Stack Developer • Machine Learning Enthusiast
          </p>

          <p className="text-gray-600 text-sm">
            © 2026 All Rights Reserved
          </p>
        </div>

      </div>
    </footer>
  );
}