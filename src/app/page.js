import Link from 'next/link';
import React from 'react'
import "./globals.css";

const page = () => {
  const blog = [
    {
      imageUrl: 'https://geniusdigest.com/wp-content/uploads/2024/01/20240124_201940_0000.png',
      category: 'News',
      heading: 'BALDEZINHO',
      description: 'Nestled in the heart of Brazil, where football isn’t just a sport but a way of life, baldezinho has emerged as a compact, urban-friendly iteration of the game',
    },
    {
      imageUrl: 'https://geniusdigest.com/wp-content/uploads/2024/01/Blue-Modern-Company-Profile-Presentation_20240127_012251_0000-1536x864.jpg',
      category: 'News',
      heading: 'PUBG MOBILE RELEASE DATE',
      description: 'On March 19, 2018, PUBG Mobile, a free-to-play battle royale game developed by LightSpeed & Quantum Studio (a division of Tencent Games)',
    },
    {
      imageUrl: 'https://geniusdigest.com/wp-content/uploads/2024/01/Black-Yellow-Business-Facebook-Cover_20240129_005037_0000-1536x865.png',
      category: 'News',
      heading: 'The Social Media Button NYT',
      description: 'In the ever-evolving landscape of social media, one cannot ignore the pervasive influence of social media buttons.',
    }
    // Add more data objects as needed
  ];
  const news = [
    {
      imageUrl: 'https://geniusdigest.com/wp-content/uploads/2024/01/20240127_004216_0000-1536x865.png',
      category: 'News',
      heading: 'EXPLORING THE MARVEL SNAP META',
      description: 'The Marvel Cinematic Universe (MCU) stands as a cinematic juggernaut, weaving together a tapestry',
    },
    {
      imageUrl: 'https://geniusdigest.com/wp-content/uploads/2023/09/Freelancing-Promotion-Facebook-Cover-Photo_20230911_163644_0000-1536x865.png',
      category: 'News',
      heading: 'Anthropic Will Introduce Paid Access Plans to Claude',
      description: 'Anthropic polled users of Plans to Claude.ai to determine their interest in paying $50 per month for a premium edition of Claude',
    },
    {
      imageUrl: 'https://geniusdigest.com/wp-content/uploads/2023/09/20230911_160903_0000.png',
      category: 'News',
      heading: 'SOCIAL MEDIA APP BANALITY OF LIFE',
      description: 'Banality, in the realm of social media apps',
    }
    // Add more data objects as needed
  ];
  const socialmedia = [
    {
      imageUrl: 'https://geniusdigest.com/wp-content/uploads/2024/01/20240124_195030_0000.png',

      category: 'Social Media',
      heading: 'Connection Request on Social Media',
      description: 'A connection request on social media is a digital gesture initiated by one user',
    },
    {
      imageUrl: 'https://geniusdigest.com/wp-content/uploads/2024/01/1_20240124_154836_0000.png',

      heading: 'HYPERLOCAL SOCIAL MEDIA MARKETING',
      description: 'Hyperlocal social media marketing is a precise marketing approach centered',
    },
    {
      imageUrl: 'https://geniusdigest.com/wp-content/uploads/2024/01/Yellow-Black-Earn-Money-YouTube-Thumbnail_20240124_155921_0000.png',

      heading: 'SOCIAL MEDIA APP BANALITY OF LIFE',
      description: 'Banality, in the realm of social media apps',
    }
    // Add more data objects as needed
  ];
  const general = [
    {
      imageUrl: 'https://geniusdigest.com/wp-content/uploads/2024/02/Blue-Digital-Marketing-Agency-Instagram-Post_20240211_205409_0000.png',
      heading: 'General',
      description: 'Digital News Alert',
    },
    {
      imageUrl: 'https://geniusdigest.com/wp-content/uploads/2024/02/Orange-Modern-Digital-Marketing-Instagram-Post_20240211_202956_0000.png',
      heading: 'General',
      description: 'fxfinacer',
    },
    {
      imageUrl: 'https://geniusdigest.com/wp-content/uploads/2024/02/20240211_210249_0000.png',
      heading: 'General',
      description: 'Yenisak',
    }
    // Add more data objects as needed
  ];
  const technology = [
    {
      imageUrl: 'https://geniusdigest.com/wp-content/uploads/2023/07/Purple-Blue-Modern-Gradient-New-Blog-Post-Emoji-Twitter-Post-1-1536x864.png',
      heading: 'technology',
      description: 'How to block ads on iPhones & iPads?',
    },
    {
      imageUrl: 'https://geniusdigest.com/wp-content/uploads/2023/07/Purple-Blue-Modern-Gradient-New-Blog-Post-Emoji-Twitter-Post-1536x864.png',
      heading: 'technology',
      description: 'How to Update Apps on Android for Enhanced Performance',
    },
    {
      imageUrl: 'https://geniusdigest.com/wp-content/uploads/2023/07/voicemail.jpg',
      heading: 'technology',
      description: 'How do I set up voicemail on my mobile?',
    }
    // Add more data objects as needed
  ];
  return (
    <div>
    <div className='flex ' >
    
    <div className="p-7 mt-8   items-end justify-start mx-auto ">
    <Link href="/">
  <div className=" w-70 bg-cover bg-center  relative" style={{ backgroundImage: 'url("https://geniusdigest.com/wp-content/uploads/2024/02/Gemini_Generated_Image-2.jpeg")' }}>
    <div className="pt-80 pb-10 pl-10 pr-20 bg-black bg-opacity-20 p-6 text-white">
      <h1 className="text-xl bg-gray-400 inline-block font-bold">General</h1>
      <p className="mt-2 text-xl">Demystifying Dynamic Systems: Lan Astron’s Journey</p>
    </div>
  </div>
    </Link>
</div>
    <div className='m-6 '>
    {general.map((item, index) => (
      <div key={index} className="flex items-center justify-center p-0 m-4">
    <Link href="">
    <div className="max-w-2xl bg-white   flex flex-col md:flex-row items-center md:items-start overflow-hidden">
      <img
        className="w-80 h-36 object-cover"
        src={item.imageUrl}
        alt="Image"
      />
      <div className="p-6 w-80">
        <h2 className="text-l bg-gray-400 inline-block  text-white mt-2 mb-2">{item.heading}</h2>
        <p className="text-2xl font-bold max-w-xs">{item.description}</p>
      </div>
    </div>
    </Link>
  </div>
))}

    </div>
    </div>
    <div className='flex'>
      <div className='max-w-nine mt-10 ml-6 mr-6'>
        <div className='flex justify-between pl-4'>
          <div className='text-2xl font-bold'> Must Read</div>
          <div className='text-xl font-bold text-purple-500'>View All</div>
        </div>
        <div className='flex '>
        {general.map((item, index) => (
  <div key={index} className="m-4 ">
    <Link href="">
      <div className="max-w-64  overflow-hidden relative">
        <img
          className="w-64 h-60 object-cover"
          src={item.imageUrl}
          alt="Image"
        />
        <div className="absolute inset-0 flex  justify-start">
          <h2 className="inline-block h-6 m-4 rounded-sm text-sm font-semibold bg-white shadow-lg p-1">{item.heading}</h2>
        </div>
        <div className="p-6 w-80">
          <p className="text-2xl font-bold max-w-xs">{item.description}</p>
        </div>
      </div>
    </Link>
  </div>
))}
        </div>
        <div className='border-t border-b border-gray-300 mt-8'>
        <div className='flex justify-between pl-4 mt-8'>
          <div className='text-2xl font-bold'> Technology</div>
          <div className='text-xl font-bold text-purple-500'>More in Technology</div>
        </div>
        <div className='flex mt-4'>
        {technology.map((item, index) => (
  <div key={index} className="m-4 ">
    <Link href="">
      <div className="max-w-64  overflow-hidden relative">
        <img
          className="w-64 h-40 object-cover"
          src={item.imageUrl}
          alt="Image"
        />
        
        <div className="mt-4 mb-4 w-80 ">
          <p className="text-xl font-semibold max-w-xs">{item.description}</p>
        </div>
      </div>
    </Link>
  </div>
))}
        </div>
        </div>
      </div>
      <div className='mt-10 border border-gray-300'>
        {/* this is for right side */}
        <div className="max-w-96 mx-auto p-6">
  <h2 className="  text-2xl font-bold mb-4">Subscribe to our Newsletter</h2>
  <div className="flex items-center mb-4">
    <input
      type="email"
      placeholder="Enter your email"
      className="mt-4 flex-1 mr-2 py-2 px-4 border border-gray-300 rounded-3xl focus:outline-none focus:border-purple-500"
    />
  </div>
    <button className=" pl-28 pr-28 bg-purple-500 text-white py-2 px-4 rounded-3xl hover:bg-purple-600 transition duration-300">Subscribe</button>

<p className='mt-8 text-sm text-purple-500 font-semibold ' >
  GENERAL
</p>
<p className='text-lg font-semibold'>
Yenişaak
</p>
<p className='mt-8 text-sm text-purple-500 font-semibold '>
GENERAL
</p>
<p className='text-lg font-semibold'>
Jablw.rv
</p>
<p className='mt-8 text-sm text-purple-500 font-semibold '>
  BLOG
</p>
<p className='text-lg font-semibold'>
How to handle his snake Yumi sin and fit kitty
</p>
<p className='mt-8 text-sm text-purple-500 font-semibold '>
GENERAL
</p>
<p className='text-lg font-semibold'>
Trendzguruji.me Cyber Info
</p>
</div>
        </div>
      
      </div>
      <div className='m-8 border-b border-gray-300'>
      <div className='flex justify-between pl-4 m-8'>
          <div className='text-2xl font-bold'> Social Media</div>
          <div className='mr-2 text-xl font-bold text-purple-500'>View All</div>
        </div>
      
      <div className='flex m-8'>
        {socialmedia.map((item, index) => (
  <div key={index} className="m-2">
    <Link href="">
      <div className="max-w-96  overflow-hidden relative">
        <img
          className="w-96 h-52 object-cover"
          src={item.imageUrl}
          alt="Image"
          />
          </div>
    </Link>
        
        <div className="p-0 pt-4 pb-4 ">
          <p className="text-xl font-bold max-w-xs">{item.heading}</p>
          <p className="text-md text-gray-700 font-semibold max-w-80 w-full">{item.description}...</p>
        </div>
  </div>
))}
        </div>
        </div>
        <div className='m-8 border-b border-gray-300'>
      <div className='flex justify-between pl-4 m-8'>
          <div className='text-2xl font-bold'> News</div>
          <div className='mr-2 text-xl font-bold text-purple-500'>View All</div>
        </div>
      
      <div className='flex m-8'>
        {news.map((item, index) => (
  <div key={index} className="m-2">
    <Link href="">
      <div className="max-w-96  overflow-hidden relative">
        <img
          className="w-96 h-52 object-cover"
          src={item.imageUrl}
          alt="Image"
          />
          </div>
    </Link>
        
        <div className="p-0 pt-4 pb-4 ">
          <p className="text-xl font-bold max-w-xs">{item.heading}</p>
          <p className="text-md text-gray-700 font-semibold max-w-80 w-full">{item.description}...</p>
        </div>
  </div>
))}
        </div>
        </div>
        <div className='m-8 border-b border-gray-300'>
      <div className='flex justify-between pl-4 m-8'>
          <div className='text-2xl font-bold'> Blogs</div>
          <div className='mr-2 text-xl font-bold text-purple-500'>View All</div>
        </div>
      
      <div className='flex m-8'>
        {blog.map((item, index) => (
  <div key={index} className="m-2">
    <Link href="">
      <div className="max-w-96  overflow-hidden relative">
        <img
          className="w-96 h-52 object-cover"
          src={item.imageUrl}
          alt="Image"
          />
          </div>
    </Link>
        
        <div className="p-0 pt-4 pb-4 ">
          <p className="text-xl font-bold max-w-xs">{item.heading}</p>
          <p className="text-md text-gray-700 font-semibold max-w-80 w-full">{item.description}...</p>
        </div>
  </div>
))}
        </div>
        </div>
    </div>
  );
};

export default page