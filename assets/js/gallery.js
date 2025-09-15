const galleryData = [
  {
    category: "Bedroom",
    categoryClass: "filter-bedroom",
    items: [
      {
        title: "Bedroom - 1",
        img: "assets/img/Interior Claw - Bedroom/Interior Claw - Bedroom.webp",
      },
      // Add more items as needed
      {
        title: "Bedroom - 2",
        img: "assets/img/Interior Claw - Bedroom/Interior Claw - Bedroom - 2.webp",
      },
      {
        title: "Bedroom - 3",
        img: "assets/img/Interior Claw - Bedroom/Interior Claw - Bedroom - 3.webp",
      },
      // Add more items as needed
    ],
  },
  // Add data for other categories here
  {
    category: "Decoration",
    categoryClass: "filter-decoration",
    items: [
      {
        title: "Decoration - 1",
        img: "assets/img/Interior Claw - Decoration/Interior Claw - Decoration - 1.webp",
      },
      // Add more items as needed
      {
        title: "Decoration - 2",
        img: "assets/img/Interior Claw - Decoration/Interior Claw - Decoration - 2.webp",
      },
      {
        title: "Decoration - 3",
        img: "assets/img/Interior Claw - Decoration/Interior Claw - Decoration - 3.webp",
      },
      // Add more items as needed
    ],
  },
  {
    category: "Dining",
    categoryClass: "filter-dining",
    items: [
      {
        title: "Dining - 1",
        img: "assets/img/Interior Claw - Dining/Interior Claw - Dining.webp",
      },
      // Add more items as needed
    ],
  },
  {
    category: "Kitchen",
    categoryClass: "filter-kitchen",
    items: [
      {
        title: "Kitchen - 1",
        img: "assets/img/Interior Claw - Kitchen/Interior Claw - Kitchen.webp",
      },
      // Add more items as needed
      {
        title: "Kitchen - 2",
        img: "assets/img/Interior Claw - Kitchen/Interior Claw - Kitchen - 2.webp",
      },
      {
        title: "Kitchen - 3",
        img: "assets/img/Interior Claw - Kitchen/Interior Claw - Kitchen - 3.webp",
      },
      // Add more items as needed
    ],
  },
  {
    category: "Living Room",
    categoryClass: "filter-living-room",
    items: [
      {
        title: "Living Room - 1",
        img: "assets/img/Interior Claw - Living Room/Interior Claw - Living Room.webp",
      },
      // Add more items as needed
      {
        title: "Living Room - 2",
        img: "assets/img/Interior Claw - Living Room/Interior Claw - Living Room - 2.webp",
      },
      {
        title: "Living Room - 3",
        img: "assets/img/Interior Claw - Living Room/Interior Claw - Living Room - 3.webp",
      },
      // Add more items as needed
    ],
  },
  {
    category: "Wardrobes",
    categoryClass: "filter-wardrobes",
    items: [
      {
        title: "Wardrobes - 1",
        img: "assets/img/Interior Claw - Wardrobes/Interior Claw - Wardrobes.webp",
      },
      // Add more items as needed
      {
        title: "Wardrobes - 2",
        img: "assets/img/Interior Claw - Wardrobes/Interior Claw - Wardrobes - 2.webp",
      },
      {
        title: "Wardrobes - 3",
        img: "assets/img/Interior Claw - Wardrobes/Interior Claw - Wardrobes - 3.webp",
      },
      // Add more items as needed
    ],
  },
];

// You can use the galleryData array as needed in your application
//console.log(galleryData);

// const galleryHTML = `<div class="col-lg-4 col-md-6 portfolio-item ${categoryClass}">
//             <img src="${img}" class="img-fluid" alt="">
//             <div class="portfolio-info">
//               <h4>${title}</h4>
//               <p>${category}</p>
//               <a href="${img}" data-gallery="portfolioGallery"
//                 class="portfolio-lightbox preview-link" title="Bedroom 1"><i class="bx bx-plus"></i></a>
//             </div>
//           </div>`;

const galleryContainer = document.getElementById("gallery-container");
const galleryFilter = document.getElementById("portfolio-flters");

galleryData.forEach((galleryItem) => {
  let listItem = document.createElement("li");
  listItem.setAttribute("data-filter", "." + galleryItem.categoryClass);
  listItem.textContent = galleryItem.category;
  galleryFilter.appendChild(listItem);
});

const galleryTxt = galleryData.reduce((accumulatorP, galleryItem) => {
  const htmlTxt = galleryItem.items.reduce((accumulator, item) => {
    console.log(galleryItem);
    return (
      accumulator +
      `<div class="col-lg-4 col-md-6 portfolio-item ${galleryItem.categoryClass}">
            <img src="${item.img}" class="img-fluid" alt="">
            <div class="portfolio-info">
              <h4>${item.title}</h4>
              <p>${galleryItem.category}</p>
              <a href="${item.img}" data-gallery="portfolioGallery"
                class="portfolio-lightbox preview-link" title=${item.title}><i class="bx bx-plus"></i></a>
                </div>
          </div>`
    );
  }, "");
  console.log(htmlTxt);
  return accumulatorP + htmlTxt;
}, "");

console.log(galleryTxt);
galleryContainer.innerHTML = galleryTxt;
