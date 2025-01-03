
export const Footer = () => {
    return (
      <footer className="bg-indigo-700 text-white py-6 mt-12 shadow-lg">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
        <img src="logoWhite.png" alt="logo" />
          <p className="text-sm mr-[110px] mt-[10px]">&copy; 2024 Movie Z. All Rights Reserved.</p>
          <div className="mt-[20px] mr-[200px]">Contact information

          </div>
          <div className="flex justify-center gap-6 mt-4">
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
          </div>
        </div>
      </footer>
    );
  };
  
