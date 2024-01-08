const blogContent = [
  {
    id: 1,
    bName: "DreamySpaces",
    bImage: "assets/img/bedroom/1.webp",
    bTitle: "Crafting Your Dream Bedroom: A Guide to Blissful Interior Design",
    bh1: "Seeking Inspiration",
    bh2: "Color Palette Dynamics",
    bh3: "Furniture Layout and Harmony",
    bp1: "Your bedroom should be a sanctuary that reflects your style and personality. Finding inspiration from various sources such as design magazines, nature, or online platforms like Pinterest can kickstart your creative process.",
    bp2: "Choosing the right color palette is crucial in setting the desired mood. Soft pastels or calming neutrals create a tranquil environment, while bolder tones can add drama and flair to the space. Remember, bedding, curtains, and accessories contribute significantly to the overall color scheme.",
    bp3: "The furniture you select and its arrangement play a pivotal role in the functionality and aesthetics of your bedroom. Ensure the pieces complement the room's size and style. Experiment with layouts to find the perfect flow that maximizes space and comfort.",
    bp4: "When designing your dream space, remember Nate Berkus' wise words: 'Your home should tell the story of who you are, and be a collection of what you love.' Each design element should reflect your unique personality and create a haven where you can unwind.",
    bp5: "Creating a cozy atmosphere in your bedroom involves more than just design choices—it's about curating a space that resonates with your emotions and preferences. Let your bedroom become an extension of yourself, where comfort meets style in perfect harmony.",
    bp6: "Your bedroom isn't just a room; it's a canvas waiting for your personal touch. From the colors on the walls to the furniture arrangement, each choice contributes to the narrative of your space. Take the time to craft a design that speaks to you.",
    bq1: "As renowned interior designer Nate Berkus once said, 'Your home should tell the story of who you are, and be a collection of what you love.' This sentiment encapsulates the essence of bedroom interior design.",
    bi1: "assets/img/bedroom/2.webp",
  },
  {
    id: 2,
    bName: "CulinaryChic",
    bImage: "assets/img/kitchen/1.webp",
    bTitle: "Elevating Your Kitchen: A Guide to Stylish Interior Design",
    bh1: "Functional Aesthetics",
    bh2: "Appliance Integration",
    bh3: "Optimizing Space and Flow",
    bp1: "A perfect kitchen strikes a balance between functionality and aesthetics. Choose durable materials and a layout that complements your cooking habits. Blend style with practicality for a kitchen that's both beautiful and functional.",
    bp2: "Integrating appliances seamlessly into your kitchen's design is key. Consider built-in options or cleverly designed spaces to house appliances. This creates a streamlined look while maximizing available space.",
    bp3: "Optimizing space and flow is crucial. Whether it's through smart storage solutions or strategic placement of countertops and work areas, aim for a kitchen layout that allows for efficient movement and easy access to essentials.",
    bp4: "In the heart of every home lies the kitchen—a space where memories are made and culinary creations come to life. Make it a reflection of your taste and lifestyle, ensuring it's both inviting and practical for everyday use.",
    bp5: "Your kitchen should inspire creativity and joy. From the choice of colors and materials to the arrangement of cabinets and appliances, every detail contributes to an environment that encourages culinary adventures.",
    bp6: "Designing a kitchen isn't just about visual appeal; it's about enhancing functionality. Take time to plan the layout and consider how you'll use the space. Aim for a design that simplifies tasks and enhances your cooking experience.",
    bq1: "A perfect kitchen strikes a balance between functionality and aesthetics, blending style with practicality for a space that's both beautiful and functional.",
    bi1: "assets/img/kitchen/2.webp",
  },
  {
    id: 3,
    bName: "WallWonder",
    bImage: "assets/img/dining/5.webp",
    bTitle: "Elevating Your Space: The Art of Wall Decorations",
    bh1: "Choosing the Right Art",
    bh2: "Gallery Wall Mastery",
    bh3: "Statement Pieces and Textures",
    bp1: "Art on your walls can be the soul of your space. Select pieces that resonate with you, whether it's paintings, photographs, or sculptures. Art should evoke emotions and complement the room's style.",
    bp2: "Create a gallery wall for a visually striking focal point. Mix and match different-sized frames and artworks. Experiment with layouts before hanging to achieve a balanced and captivating display.",
    bp3: "Statement pieces like a large painting or an intricately designed mirror can add depth and character to a room. Consider textures like woven wall hangings or tapestries for a touch of uniqueness.",
    bp4: "Wall decorations aren't just about filling empty spaces; they're an extension of your personality. Let your walls narrate a story and reflect your tastes, whether it's through vintage posters or contemporary art.",
    bp5: "A gallery wall doesn't have to be confined to just artwork; include mirrors, decorative plates, or even plants to add visual interest and dimension. Mix and match to create an eclectic yet cohesive display.",
    bp6: "The beauty of wall decorations lies in their versatility. From minimalist designs to elaborate installations, explore options that complement your space and infuse it with charm and personality.",
    bq1: "Wall decorations aren't just about filling empty spaces; they're an extension of your personality. Let your walls narrate a story and reflect your tastes.",
    bi1: "assets/img/kids/1.webp",
  },
  {
    id: 4,
    bName: "LivingElegance",
    bImage: "assets/img/living_hall/1.webp",
    bTitle: "Elevate Your Living Space: The Art of Elegant Interior Design",
    bh1: "Functional Comfort",
    bh2: "Balancing Décor Elements",
    bh3: "Versatile Seating Arrangements",
    bp1: "The living room serves as a hub for relaxation and socializing. Opt for furniture that's not only aesthetically pleasing but also comfortable and functional. Create cozy corners and consider multifunctional pieces for added utility.",
    bp2: "Achieve harmony in your living space by balancing different décor elements. Mix textures, colors, and patterns thoughtfully. Incorporate statement pieces like rugs or artworks to anchor the room's design.",
    bp3: "Versatility is key when arranging seating in your living room. Create conversation areas by arranging furniture in a way that encourages interaction while maintaining an open and inviting atmosphere.",
    bp4: "The living room should reflect your lifestyle and personality. Infuse elements that speak to your tastes, whether it's through a curated bookshelf, unique lighting fixtures, or personalized décor accents.",
    bp5: "Consider the flow of the room when arranging furniture. Allow for easy movement and ensure that the layout facilitates both intimate gatherings and larger get-togethers, adapting to various occasions.",
    bp6: "Elegance in a living space isn't just about grandeur—it's about creating an inviting atmosphere that's both refined and comfortable. Pay attention to details and let your living room become a sophisticated reflection of your style.",
    bq1: "The living room should reflect your lifestyle and personality. Infuse elements that speak to your tastes, creating an inviting atmosphere that's both refined and comfortable.",
    bi1: "assets/img/living_hall/2.webp",
  },
];

const getParam = () => {
  const qp = new URLSearchParams(window.location.search);
  return qp.get("id");
};

const blogData = () => {
  const blogId = getParam();
  let blogData = blogContent.find((p) => p.id === +blogId);

  if (!blogData) {
    blogData = blogContent[0];
  }

  const classToPropertyMap = {
    bName: "bName",
    bImage: "bImage",
    bTitle: "bTitle",
    bh1: "bh1",
    bh2: "bh2",
    bh3: "bh3",
    bp1: "bp1",
    bp2: "bp2",
    bp3: "bp3",
    bp4: "bp4",
    bp5: "bp5",
    bp6: "bp6",
    bq1: "bq1",
    bi1: "bi1",
  };

  if (blogData) {
    for (const className in classToPropertyMap) {
      const elements = document.getElementsByClassName(className);
      Array.from(elements).forEach((element) => {
        const property = classToPropertyMap[className];
        if (property === "bImage" || "bi1") {
          element.src = blogData[property] || "assets/img/blog/blog-1.jpg";
        }
        element.innerHTML = blogData[property] || "";
      });
    }
  } else {
    // Handle the case where the blog post was not found
    // You can display an error message or redirect to a default page
  }
};

blogData();
