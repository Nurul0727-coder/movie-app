
export const Footer = () => {
    return (
      <footer className="bg-indigo-700 text-white py-6 mt-12 shadow-lg">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
        <img src="logoWhite.png" alt="logo" />
          <p className="text-sm mr-[110px] mt-[10px]">&copy; 2024 Movie Z. All Rights Reserved.</p>
          <div>
          <div className="mt-[20px] mr-[200px]">Contact information

<div className="flex justify-start mt-[10px]">
    <img className="w-[16px] h-[16px] -pt-[25px] mt-[17px]" src="mail.png" alt="mail logo"/>
    <div className="ml-[15px]">
    <div className="pr-[155px]">Email:</div>
    <div className="mr-[45px]">support@movieZ.com</div>
    </div>
</div>
<div className="flex justify-start mt-[25px]">
    <img className="w-[16px] h-[16px] -pt-[25px] mt-[17px]" src="phone.png" alt="mail logo"/>
    <div className="ml-[15px]">
    <div className="pr-[155px]">Phone:</div>
    <div className="mr-[65px]">+976 (11) 123-4567</div>
    </div>
</div>
</div>

<div className="flex justify-center">
<div className=" flex justify-center gap-3  mt-4 ">Follow us
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
  className="text-gray-300 hover:text-blue-600 transition-colors"
>
  Youtube
</a>
</div>
</div>
          </div>
        </div>
      </footer>
    );
  };
  
