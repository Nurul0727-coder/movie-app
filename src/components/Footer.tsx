export const Footer = () => {
  return (
    <footer className="bg-indigo-700 text-white py-8 mt-12 shadow-lg w-full h-[280px]">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row justify-between items-start gap-8">
        <div className="flex flex-col items-start ml-10">
          <img src="/logoWhite.png" alt="logo" className="w-32" />
          <p className="text-xs mt-3">
            &copy; 2024 Movie Z. All Rights Reserved.
          </p>
        </div>

        <div className="ml-60">
          <p className="font-semibold mb-2">Contact Information</p>
          <div className="flex items-start mb-2 text-sm">
            <img src="/mail.png" alt="mail" className="w-5 h-5 mt-1" />
            <div className="ml-3">
              <p>Email:</p>
              <p>support@movieZ.com</p>
            </div>
          </div>
          <div className="flex items-start text-sm">
            <img src="/phone.png" alt="phone" className="w-5 h-5 mt-1" />
            <div className="ml-3">
              <p>Phone:</p>
              <p>+976 (11) 123-4567</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col mr-10 text-sm ">
          <p className="font-semibold mb-2">Follow us</p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://www.instagram.com"
              target="_blank"
              className="text-gray-300 hover:text-pink-500 transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              Twitter
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              className="text-gray-300 hover:text-blue-600 transition-colors"
            >
              Facebook
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              className="text-gray-300 hover:text-red-500 transition-colors"
            >
              YouTube
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
