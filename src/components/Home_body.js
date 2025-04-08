import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const stylesData = [
  {
    name: "minimalist",
    shortDescription: "A clean and simple setup.",
    longDescription: `
  Love clarity, simplicity, and a workspace that helps you focus? The **Minimalist Theme** is all about  
  clean lines, neutral tones, and functional design—creating a calm, distraction-free environment  
  that boosts productivity and peace of mind.

  🌿 Clean tones & natural light:  
  Stick to a palette of white, grey, and soft wood. Pair it with natural daylight or warm-toned lamps  
  like the Yeelight Smart Lamp D2 for a cozy but clear ambiance.

  🧩 Thoughtful, space-saving decor:  
  Use hidden cable organizers, floating shelves, and a slim monitor arm to keep everything tidy.  
  A small bonsai or a ceramic cup adds just the right touch of personality without the clutter.

  🖥 Essential, not excessive tech:  
  Choose one main monitor, a minimalist keyboard like the Keychron K3, and wireless accessories  
  to maintain clean lines across your desk. A compact speaker or a pair of studio earbuds completes the setup.

  🪑 Sleek yet comfortable workspace:  
  A neutral ergonomic chair, clean desk mat, and subtle drawer system keep your space practical  
  without visual noise.

  🚀 Who is this style for?  
  Ideal for minimalists, deep thinkers, writers, and those who value calm, mindful work environments  
  with zero distractions.

  Let your space breathe. Redefine your productivity with the **Minimalist Theme**.
`,

    cardImage: "/Home_image/minimalist.jpg",
    descriptionImage: "/Home_image/minimalist_modal.jpg",
  },
  {
    name: "modern",
    shortDescription: "A stylish and sleek workspace.",
    longDescription: `
  Want a workspace that reflects innovation, confidence, and sleek design? The **Modern Theme** blends  
  cutting-edge technology with sharp aesthetics, giving you a professional, stylish, and performance-driven environment.

  🖤 Sleek color palette & contrast:  
  Monochrome tones with metallic or matte finishes make everything feel curated. Use directional lighting  
  like the BenQ ScreenBar or Govee Desk Lamp to highlight your setup with precision.

  🖼 Sophisticated & sharp decor:  
  Incorporate framed abstract prints, a geometric desk clock, or a minimalist sculpture  
  to give your space a gallery-inspired edge.

  💻 Smart, high-function gear:  
  Think dual monitors, a 75% mechanical keyboard, a wireless charging pad, and noise-canceling headphones.  
  Combine function and form with tools like the Logitech MX Keys or the Elgato Stream Deck.

  🪑 Ergonomic meets executive:  
  Go for a premium chair like the Herman Miller Sayl or Secretlab Neue, matched with a motorized  
  sit-stand desk and polished aluminum accessories.

  🚀 Who is this style for?  
  Perfect for professionals, content creators, and anyone who wants their desk to look as smart as it performs.

  Shape your workspace with intention and innovation. Choose the **Modern Theme**.
`,

    cardImage: "/Home_image/modern.jpg",
    descriptionImage: "/Home_image/modern_modal.png",
  },
  {
    name: "gaming",
    shortDescription: "A powerful gaming setup.",
    longDescription: `Are you a gamer looking for a professional, modern, and stylish gaming space? A well-designed Gaming Setup not only enhances smooth gameplay but also creates a unique, tech-driven workstation.

  🎮 **High-performance gaming monitor:** Use a curved Acer Nitro XZ306C monitor or a multi-screen 
  setup for an expanded field of view and an immersive gaming experience.

  💡 **Customizable RGB lighting system:** Utilize Nanoleaf Elements, LED strips, or Cololight Mix Acid 
  to create vibrant lighting effects that boost the gaming atmosphere.

  🖥 **Powerful PC case & RGB cooling:** A high-performance gaming PC with a transparent case, water cooling, 
  or RGB cooling system optimizes performance while showcasing your setup.

  ⌨ **Professional gaming gear:**  
  - G715 Gaming Keyboard with smooth switches and fast response.  
  - G705 Gaming Mouse with high sensitivity and an ergonomic design.  
  - Gaming headset for immersive audio, bringing your virtual world to life.  

  🪑 **Comfortable & ergonomic gaming chair:** The Technisport Gaming Chair provides lumbar and neck support 
  for long gaming sessions.

  🛠 **Organized & efficient layout:**  
  - A spacious desk like the Linnmon Desk from IKEA for easy device arrangement.  
  - Storage solutions like Alex Drawers and wall-mounted shelves keep the space clutter-free.  

  🔥 **Who is this setup for?** Perfect for gamers, streamers, or anyone looking for a futuristic and 
  tech-inspired gaming corner.

  Elevate your gaming experience with the ultimate Gaming Setup!`,
    cardImage: "/Home_image/gaming.jpg",
    descriptionImage: "/Home_image/gaming_modal.jpg",
  },
  {
    name: "cyberpunk",
    shortDescription: "Futuristic neon-lit environment.",
    longDescription: `
  Are you drawn to futuristic aesthetics, neon vibes, and a workspace that feels like it's part of a sci-fi city?  
  The **Cyberpunk Theme** is your perfect match. With bold lighting, edgy decor, and high-tech elements,  
  this setup transforms your room into a digital haven straight out of a dystopian future.

  🌃 Neon tones & reactive lighting:  
  Dive into a world of glowing hues and chromatic contrasts. Use RGB strips, Govee Neon Lights, or  
  the Nanoleaf Lines to bring that iconic cyberpunk energy into your space.

  🎭 Futuristic art & tech soul:  
  Display digital art frames, anime statues like Cyber Miku or Arasaka-inspired figures, and dynamic LED panels  
  to express a gritty yet vibrant personality.

  📺 High-tech immersion:  
  Equip your setup with a frameless OLED monitor, Divoom Pixoo-64 for pixel animations, and compact  
  soundbars with reactive lights. These not only enhance your experience but double as digital decor.

  🧩 Tech-industrial fusion:  
  Combine metallic accessories, clear keycaps with neon backlighting, a smoked acrylic desk mat,  
  and gear with exposed circuits to strike the balance between raw and refined.

  🚀 Who is this style for?  
  Perfect for gamers, streamers, digital rebels, or anyone who wants their space to scream **futuristic attitude**.  
  Especially ideal for fans of *Cyberpunk 2077*, *Blade Runner*, and high-tech visual storytelling.

  Bring the future into your room with the **Cyberpunk Theme**—where technology meets rebellion and light cuts through the night.
`,
    cardImage: "/Home_image/cyberpunk.jpg",
    descriptionImage: "/Home_image/cyberpunk_modal.png",
  },
  {
    name: "dark_black",
    shortDescription: "A bold and elegant dark theme.",
    longDescription: `
  A Dark/Black Setup is the perfect blend of sophistication, modern aesthetics, and high-performance technology. With deep tones, ambient lighting, and premium accessories, this setup creates a sleek and immersive workspace.

  🎮 **Immersive Display Experience:**  
  - Alienware 34" AW3423DWF OLED Monitor ($749.99)  
  - Ultrarm Vision Monitor Arm ($137)  

  💡 **Ambient & Functional Lighting:**  
  - Lymax Light Bar ($36.49) for screen illumination  
  - Taobao Generic RGB Tube Light ($15) for a stylish glow  
  - Industrial Edison Desk Lamp ($18.99) adds a vintage touch  

  🎧 **High-End Audio Experience:**  
  - Edifier STAX Spirit S5 Headphones ($499.99) for an immersive soundstage  
  - Edifier QR65 Speakers ($369.99) deliver rich and deep sound  
  - Edifier T5 Subwoofers ($149.99) enhance the bass for a cinematic feel  

  🖥 **Premium Workstation Accessories:**  
  - Neo Ergo Keyboard ($183) for smooth typing  
  - Logitech MX Master 3S ($99.99) for precision control  
  - Ultrarm Modular Desk Shelf + Mat & Accessories ($213) for organization  

  🪑 **Ergonomic & Stylish Seating:**  
  - Spacemy Ergonomic Seat Pro ($274.99) supports posture  
  - Stealtho Roller Blade Chair Wheels ($34.99) for smooth movement  

  🏡 **Dark-Themed Decor & Comfort:**  
  - IKEA Karlby Tabletop ($249) for a clean aesthetic  
  - Flexispot E7 Desk Frame ($329.99) for adjustable height  
  - IKEA Knarndrüp Rug ($99) adds warmth and comfort  
  - Artificial Banana Plant ($30) brings a touch of greenery  

  🚀 **Who is this setup for?**  
  Perfect for gamers, content creators, and professionals who appreciate a sleek, dark aesthetic 
  with high-performance gear.

  Transform your workspace into the ultimate **Dark/Black Setup** with style and functionality!
`,
    cardImage: "/Home_image/dark_black.jpg",
    descriptionImage: "/Home_image/dark_black_modal.jpg",
  },
  {
    name: "white theme",
    shortDescription: "A bright and clean workspace.",
    longDescription: `
    Do you love sophistication, modern aesthetics, and a workspace filled with artistic vibes? The White/Light Theme is the perfect decor style for you. Featuring a dominant white tone 
    combined with soft lighting and unique decorative elements, this style brings an elegant, clean, yet highly personalized feel.
  
    ✨ White tones & cool lighting: With a primarily white color scheme, your workspace becomes more 
    spacious and modern. Pair it with LED lights like the Cololight Mix Acid to create a gentle yet 
    captivating effect.
  
    🎨 Artistic & unique personality: Pinterest Prints and anime figures like White Rock Shooter Figma, 
    Rem Tenshi Version, or Miku Append Nendoroid turn your desk into a stylish display corner.
  
    📺 Modern technology: A Gamdias monitor with a monochrome wallpaper, mini speakers, and a Divoom Pixoo-64 
    enhance your visual and auditory experience while adding a futuristic touch to your space.
  
    🌬 Minimalist yet refined decor: Goldfish Glass Windchime, spherical LED lamps, and a keyboard stand 
    create a seamless blend of technology and art, offering a soothing and relaxing ambiance.
  
    🚀 Who is this style for? Perfect for those who love minimalism but still want to express their unique 
    personality—especially tech enthusiasts, designers, and digital artists.
  
    Turn your workspace into an inspiring haven with the White/Light Theme!
  `,
    cardImage: "/Home_image/white.jpg",
    descriptionImage: "/Home_image/white_light_modal.jpg",
  },
  {
    name: "nature_wood",
    shortDescription: "A warm, natural wooden setup.",
    longDescription: `
  Bring the essence of nature into your workspace with the Nature/Wood Design! Inspired by the rustic and calming beauty of nature, this style harmoniously combines warm wooden materials, refreshing greenery, and delicate decor elements to create a workspace that is both aesthetic and relaxing.

  🌿 Natural wood materials & earthy tones: Use a light wooden desk paired with decor 
  accessories in earthy brown, green, and white tones to maintain visual balance.

  🌱 Greenery & natural elements: Plants like Marble Pothos, Heartleaf Philodendron, 
  or well-placed faux plants create a fresh and nature-friendly atmosphere.

  💡 Soft lighting: The IKEA-Upplyst cloud-shaped lamp adds a gentle accent, while natural 
  light from the window keeps the space lively and full of energy.

  🎮 Seamless tech integration: The ASUS Rog Strix monitor, G715 keyboard, and G705 mouse 
  in white-gray tones blend well with accessories like a laptop stand, Divoom Ditoo speaker, 
  and Nintendo Switch controller, ensuring a modern yet natural vibe.

  🌸 Small details that add character: A rose-shaped scented candle, Arboretum artwork, dried flowers, 
  or small collectibles like Pokemon Figures make the space more personal and cozy.

  📌 Who is this style for? Ideal for those who love serenity, a touch of nature, and a workspace 
  that sparks creativity and inspiration.

  Transform your workspace into a refreshing and inspiring haven with the Nature/Wood Design today!`,
    cardImage: "/Home_image/nature_wood.jpg",
    descriptionImage: "/Home_image/nature_wood_modal.jpg",
  },
  {
    name: "industrial",
    shortDescription: "A raw and edgy industrial theme.",
    longDescription: `
  Inspired by industrial spaces, the Industrial style blends raw materials, neutral tones, and bold design elements to create a workspace that is both edgy and modern. It’s the perfect choice for those who love minimalism yet crave artistic and creative expression.

  🔩 **Raw & durable materials:** A natural wood desk with a black metal frame adds a sturdy, 
  robust feel. Steel shelving units or wall-mounted racks optimize space while maintaining 
  the industrial aesthetic.

  🎨 **Neutral & minimalist color palette:** Black, gray, wood brown, and concrete/metallic tones 
  create the perfect balance between modernity and vintage charm.

  💡 **Warm & dramatic lighting:** Edison bulbs, Nanoleaf Elements, or LED strip lights with warm 
  tones add depth and ambiance to the space.

  🖥 **Technology seamlessly integrated with design:** A dual-monitor or ultrawide setup, combined 
  with an open-case PC featuring RGB cooling, highlights cutting-edge tech amidst the rugged 
  industrial setting.

  🌿 **Natural elements to soften the look:** Green plants like Heart Leaf Philodendron or Marble 
  Pothos help balance the raw industrial feel and bring life to the workspace.

  🚀 **Who is this style for?** Perfect for creatives, tech professionals, designers, or anyone 
  who enjoys bold, unconventional workspaces with an industrial edge.

  Transform your space into a masterpiece with the Industrial style—rugged, powerful, yet 
  brimming with creative inspiration!
`,
    cardImage: "/Home_image/industrial.jpg",
    descriptionImage: "/Home_image/industrial_modal.jpg",
  },
];

const Home_body = () => {
  return (
    <section>
      <div className="container col-lg-10 col-xl-10">
        <div className="row">
          <div className="col-12 col-md-12 col-sm-12 col-lg-8 p-3 rounded-lg overflow-hidden">
            <video autoPlay loop muted playsInline style={{ maxWidth: "100%" }}>
              <source src={"/Home_image/home_video.mp4"} type="video/mp4" />
              Your browser does not support video.
            </video>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-4 p-1">
            <h1 className="px-3 font-weight-bold">
              Welcome to Decor Dream – Where Your Space Becomes Extraordinary!
            </h1>
            <p>
              We understand that every space has its own story, and our mission
              is to help you create a space that reflects your personal
              touch—from elegant decor pieces to unique setups. Whether you're
              looking for small details to refresh a room or planning to
              transform your entire living space, Decor Dream is the perfect
              destination for those who love creativity and have a passion for
              decoration.
            </p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="container col-lg-10 col-xl-10">
          <p className="bg-secondary rounded pt-3 pb-3 mb-3 text-white text-center">
            Explore our collection – where carefully curated, high-quality decor
            pieces await, allowing you to freely express your style and
            personality. Don’t just live in a space—create one that is truly
            your own!
          </p>
        </div>
      </div>

      <div className="container col-10">
        <div className="row">
          {stylesData.map((item, index) => (
            <div className="col-md-3 col-sm-6 mb-4" key={index}>
              <div className="card h-100">
                <img src={item.cardImage} alt={item.name} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">
                    {item.name.replace("_", " ").toUpperCase()}
                  </h5>
                  <p className="card-text">{item.shortDescription}</p>
                </div>
                <div className="card-footer text-left">
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target={`#modal${index + 1}`}
                  >
                    More Info
                  </button>

                  {/* Modal */}
                  <div
                    className="modal fade"
                    id={`modal${index + 1}`}
                    tabIndex="-1"
                    aria-labelledby={`modalLabel${index + 1}`}
                    aria-hidden="true"
                    style={{
                      background: "rgba(0,0,0,0.5)",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: "100%",
                      maxWidth: "700px",
                      height: "100%",
                      flex: 1
                    }}
                  >
                    <div className="modal-dialog modal-lg" >
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id={`modalLabel${index + 1}`}>
                            {item.name.replace("_", " ").toUpperCase()}
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          <img src={item.descriptionImage} alt={item.name} className="img-fluid mb-3" />
                          <p style={{
                            flexGrow: 1,

                            overflowY: "auto",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word"
                          }}>{item.longDescription}</p>



                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Modal */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section >
  );
};

export default Home_body;
