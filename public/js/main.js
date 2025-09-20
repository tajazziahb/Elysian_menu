document.addEventListener("DOMContentLoaded", () => {
  // Get the elements for age verification
  const yesBtn = document.getElementById("btn-yes");
  const noBtn = document.getElementById("btn-no");
  const ageGate = document.getElementById("age-gate");
  const nav = document.getElementById("main-nav");
  const hero = document.getElementById("hero");
  const main = document.getElementById("main-page");

  // Age Gate Button Click Handlers
  yesBtn?.addEventListener("click", () => {
    // Hide the age gate modal
    ageGate.classList.add("hidden");

    // Show the rest of the content
    nav.classList.remove("hidden");
    hero.classList.remove("hidden");
    main.classList.remove("hidden");
  });

  noBtn?.addEventListener("click", () => {
    alert("Sorry, you must be 21 or older to enter.");
    window.location.href = "https://www.google.com"; // Redirect to another page or close the window
  });

  // Cart modal and buttons
  const cartToggle = document.getElementById("cart-toggle"); // Cart icon
  const cartModal = document.getElementById("cart-modal"); // Cart modal
  const closeCartBtn = document.getElementById("close-cart-btn"); // Close button in the modal

  // Cart modal open/close functionality
  cartToggle.addEventListener("click", () => {
    cartModal.classList.remove("hidden"); // Show the modal when cart icon is clicked
    cartModal.classList.add("cart-slide-in"); // Optional: add slide-in animation

      // Scroll the modal into view smoothly
  cartModal.scrollIntoView({ behavior: "smooth", block: "center" });
  });

  // Close the cart modal when the close button is clicked
  closeCartBtn.addEventListener("click", () => {
    cartModal.classList.add("hidden"); // Hide the modal when close button is clicked
  });
  // HERO Section Text Change
  const heroMessages = [
    "🌿 Flower of the Week",
    "🔥 Potent Concentrates",
    "🍬 Trending Edibles",
    "💨 Must-Have Vaporizers",
    "🌈 New Tinctures Just In",
    "🧴 Topicals for Wellness",
    "🧢 Elevate Your Style: Apparel In",
    "🧰 High Utility Accessories"
  ];

  let heroIndex = 0;
  const heroText = document.getElementById("hero-text");

  if (heroText) {
    setInterval(() => {
      heroIndex = (heroIndex + 1) % heroMessages.length;
      heroText.classList.add("fade-out");
      setTimeout(() => {
        heroText.textContent = heroMessages[heroIndex];
        heroText.classList.remove("fade-out");
        heroText.classList.add("fade-in");
        setTimeout(() => heroText.classList.remove("fade-in"), 500);
      }, 500);
    }, 4000);
  }

  const tabs = document.querySelectorAll(".tab");
  const productContainer = document.getElementById("product-container");
  const productSection = document.getElementById("product-section");


  // PRODUCTS data (with images for each category)
  const PRODUCTS = {
    flower: [
      { id: "f1", name: "Blue Dream", price: 45, type: "Sativa", potency: 18, brand: "Green Fields", effects: "Uplifting, Creative", img: "./flowers/bluedream.png", weight: "3.5g", description: "A classic strain known for its balanced effects and sweet berry aroma." },
      { id: "f2", name: "Northern Lights", price: 50, type: "Indica", potency: 22, brand: "Aurora Farms", effects: "Relaxing, Sleepy", img: "./flowers/northernlights.png", weight: "7g", description: "A legendary indica strain perfect for relaxation and stress relief." },
      { id: "f3", name: "Gorilla Glue", price: 55, type: "Hybrid", potency: 20, brand: "Sticky Fingers", effects: "Euphoric, Relaxing", img: "./flowers/gg.png", weight: "14g", description: "A potent hybrid known for its sticky resin and strong effects." },
      { id: "f4", name: "Pineapple Express", price: 60, type: "Sativa", potency: 19, brand: "Tropical Highs", effects: "Energetic, Happy", img: "./flowers/pexpress.png", weight: "28g", description: "A tropical sativa that delivers a burst of energy and creativity." }
    ],
    edibles: [
      { id: "e1", name: "Wild Berry Gummies", price: 25, type: "Indica", potency: 10, brand: "Caminos", effects: "Relaxing, Happy", img: "./edibles/wildberry.png", pack: "20 pieces (100mg total, 5mg each)", description: "Delicious berry-flavored gummies for a sweet and relaxing experience." },
      { id: "e2", name: "Caramel Chews", price: 20, type: "CBD", potency: 5, brand: "Golden Goodies", effects: "Calming, Focused", img: "./edibles/caramel.png", pack: "20 pieces (100mg total, 5mg each)", description: "Smooth caramel chews infused with CBD for calm and focus." },
      { id: "e3", name: "Chocolate Brownies", price: 30, type: "Indica", potency: 15, brand: "Baked Bliss", effects: "Sleepy, Relaxing", img: "./edibles/brownies.png", pack: "20 pieces (100mg total, 5mg each)", description: "Rich chocolate brownies perfect for a relaxing evening." },
      { id: "e4", name: "Sour Worms", price: 18, type: "Sativa", potency: 12, brand: "Tangy Treats", effects: "Energetic, Uplifting", img: "./edibles/worms.png", pack: "20 pieces (100mg total, 5mg each)", description: "Tangy sour worms that deliver an uplifting sativa buzz." }
    ],
    prerolls: [
      { id: "p1", name: "Sunset Sherbert", price: 12, type: "Hybrid", potency: 18, brand: "Roll Masters", effects: "Relaxing, Euphoric", img: "cat-images/prerolls.png", pack: "1g (2 x 0.5g)", description: "A flavorful hybrid pre-roll for a relaxing and euphoric experience." },
      { id: "p2", name: "OG Kush", price: 10, type: "Indica", potency: 20, brand: "Classic Rolls", effects: "Sleepy, Relaxing", img: "cat-images/prerolls.png", pack: "1g (2 x 0.5g)", description: "A classic indica pre-roll ideal for unwinding and better sleep." },
      { id: "p3", name: "Strawberry Cough", price: 15, type: "Sativa", potency: 17, brand: "Berry Bliss", effects: "Uplifting, Energetic", img: "cat-images/prerolls.png", pack: "7 pack (3.5g total, 0.5g each)", description: "A sweet and fruity sativa pre-roll for an energetic boost." },
      { id: "p4", name: "Mango Tango", price: 14, type: "Sativa", potency: 16, brand: "Tropical Rolls", effects: "Happy, Creative", img: "cat-images/prerolls.png", pack: "7 pack (3.5g total, 0.5g each)", description: "A tropical sativa pre-roll that sparks creativity and joy." }
    ],
    vaporizers: [
      { id: "v1", name: "Lemon Haze Cart", price: 45, type: "Sativa", potency: 85, brand: "Vape Elite", effects: "Energetic, Uplifting", img: "cat-images/vaporizers.png", weight: "0.5g", description: "A citrusy vape cart delivering an energetic and uplifting high." },
      { id: "v2", name: "Pineapple Express", price: 40, type: "Hybrid", potency: 80, brand: "Cloud Nine", effects: "Happy, Relaxing", img: "cat-images/vaporizers.png", weight: "1g", description: "A hybrid vape cart with tropical flavors and balanced effects." },
      { id: "v3", name: "Blueberry Kush", price: 50, type: "Indica", potency: 90, brand: "Berry Clouds", effects: "Calming, Sleepy", img: "cat-images/vaporizers.png", weight: "2g", description: "A smooth indica vape cart for relaxation and restful sleep." },
      { id: "v4", name: "Sour Diesel", price: 55, type: "Sativa", potency: 88, brand: "Diesel Vapes", effects: "Focused, Energetic", img: "cat-images/vaporizers.png", weight: "0.3g", description: "A potent sativa vape cart for focus and energy." }
    ],
    concentrates: [
      { id: "c1", name: "Shatter Diesel", price: 60, type: "Sativa", potency: 75, brand: "Pure Extracts", effects: "Energetic, Uplifting", img: "cat-images/concentrates.png", weight: "0.5g", description: "A premium sativa concentrate for an uplifting experience." },
      { id: "c2", name: "Live Resin Zkittlez", price: 65, type: "Indica", potency: 78, brand: "Resin Masters", effects: "Relaxing, Sleepy", img: "cat-images/concentrates.png", weight: "1g", description: "A flavorful indica concentrate for deep relaxation." },
      { id: "c3", name: "Wax OG Kush", price: 70, type: "Hybrid", potency: 80, brand: "Wax Works", effects: "Euphoric, Relaxing", img: "cat-images/concentrates.png", weight: "0.5g", description: "A potent hybrid wax for a euphoric and relaxing high." },
      { id: "c4", name: "Budder Pineapple Express", price: 75, type: "Sativa", potency: 82, brand: "Golden Budder", effects: "Happy, Energetic", img: "cat-images/concentrates.png", weight: "1g", description: "A tropical sativa budder for a happy and energetic vibe." }
    ],
    tinctures: [
      { id: "t1", name: "Relax Drops", price: 35, type: "CBD", potency: 25, brand: "Calm Co.", effects: "Relaxing, Calming", img: "cat-images/tinctures.png", description: "CBD tincture designed to promote relaxation and calmness." },
      { id: "t2", name: "Focus Drops", price: 40, type: "Sativa", potency: 30, brand: "Focus Labs", effects: "Focused, Energetic", img: "cat-images/tinctures.png", description: "A sativa tincture to enhance focus and energy." },
      { id: "t3", name: "Sleep Drops", price: 50, type: "Indica", potency: 35, brand: "Dream Drops", effects: "Sleepy, Relaxing", img: "cat-images/tinctures.png", description: "An indica tincture crafted for better sleep and relaxation." },
      { id: "t4", name: "Energy Drops", price: 45, type: "Hybrid", potency: 28, brand: "Vital Boost", effects: "Energetic, Uplifting", img: "cat-images/tinctures.png", description: "A hybrid tincture to boost energy and uplift your mood." }
    ],
    topicals: [
      { id: "tp1", name: "CBD Balm", price: 30, type: "CBD", potency: 0, brand: "Soothing Touch", effects: "Pain Relief, Relaxing", img: "cat-images/topicals.png", description: "A soothing balm for targeted pain relief and relaxation." },
      { id: "tp2", name: "Pain Relief Cream", price: 25, type: "CBD", potency: 0, brand: "Relief Co.", effects: "Soothing, Calming", img: "cat-images/topicals.png", description: "A cream designed to relieve pain and provide calming effects." },
      { id: "tp3", name: "Cooling Gel", price: 20, type: "CBD", potency: 0, brand: "Cool Relief", effects: "Cooling, Relaxing", img: "cat-images/topicals.png", description: "A cooling gel for soothing relief and relaxation." },
      { id: "tp4", name: "Moisturizing Lotion", price: 15, type: "CBD", potency: 0, brand: "HydraCare", effects: "Hydrating, Soothing", img: "cat-images/topicals.png", description: "A hydrating lotion for soft and nourished skin." }
    ],
    apparel: [
      { id: "a1", name: "Elysian Hoodie", price: 55, type: "CBD", potency: 0, img: "./apparel/hoodie.png" },
      { id: "a2", name: "Chronic T-Shirt", price: 25, type: "CBD", potency: 0, img: "./apparel/t-shirt.png" },
      { id: "a3", name: "High Life Cap", price: 20, type: "CBD", potency: 0, img: "./apparel/cap.png" },
      { id: "a4", name: "Stoner Socks", price: 15, type: "CBD", potency: 0, img: "./apparel/socks.png" }
    ],
    accessories: [
      { id: "ac1", name: "Grinder Pro", price: 25, type: "CBD", potency: 0, img: "./accessories/grinder.png" },
      { id: "ac2", name: "Rolling Tray", price: 15, type: "CBD", potency: 0, img: "./accessories/tray.png" },
      { id: "ac3", name: "Storage Jar", price: 10, type: "CBD", potency: 0, img: " ./accessories/jar.png" },
      { id: "ac4", name: "Bong Cleaner", price: 12, type: "CBD", potency: 0, img: "./accessories/cleaner.png" }
    ]
  };

  // Current category (initial)
  let currentCategory = "flower";

  // Cart functionality
  const cartCount = document.getElementById("cart-count");
  const cartItemsContainer = document.getElementById("cart-items");
  let cart = []; // Store cart items here

  // Render products for a given category
  const renderProducts = (category) => {
    const products = PRODUCTS[category];
    productSection.classList.remove("hidden");
    productContainer.innerHTML = ""; // Clear previous products

    // Check if the category exists in the PRODUCTS object
    if (!products) {
      return;
    }

    // Create a product card for each product
    products.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.classList.add("flip-card");

      productCard.innerHTML = `
        <div class="flip-inner">
          <!-- Front of the card -->
          <div class="flip-front">
        <h3 class="mb-4">${product.name}</h3>
        <img src="${product.img}" alt="${product.name}" style="width: 150px; height: 150px; border-radius: 8px; object-fit: cover;" />
        <p class="mt-4">${product.brand}</p>
        <p>THC: ${product.potency}%</p>
        <p>${product.type}</p>
        <div style="display: flex; justify-content: space-between; align-items: center; gap: 10px;">
          ${product.weight ? `<p>${product.weight}|</p>` : ""}
          <p class="price">$${product.price.toFixed(2)}</p>
        </div>
        <button class="btn add-to-cart-btn" style="font-size: 0.8rem; padding: 5px 10px;">+ Add to Cart</button>
          </div>
      
          <!-- Back of the card with only the description -->
          <div class="flip-back" style="display: flex; justify-content: center; align-items: center; text-align: center; padding: 10px;">
          <p>${product.description}</p>
          </div>
        </div>
      `;
      productContainer.appendChild(productCard);

      // Add flip functionality
      productCard.addEventListener("click", () => {
        productCard.classList.toggle("flipped");
      });

      // Add to Cart functionality
      const addToCartBtn = productCard.querySelector(".add-to-cart-btn");
      addToCartBtn.addEventListener("click", (event) => {
        event.stopPropagation(); // Prevent card flip
        addProductToCart(product);
      });
    });
  };

  // Handle tab switching (clicking tabs)
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      const category = tab.dataset.category;
      renderProducts(category);
    });
  });

  // Initially render products for "flower" category
  renderProducts("flower");

  // Add product to cart
  const addProductToCart = (product) => {
  const existingProduct = cart.find((item) => item.id === product.id);
  if (existingProduct) {
    existingProduct.quantity += 1; // Increase the quantity of the existing product
  } else {
    cart.push({ ...product, quantity: 1 }); // Add new product with quantity 1
  }

  updateCart(); // Update the cart display after adding the product
  showToast(`${product.name} added to cart!`); // Show a toast notification

  
};
  

  // Update the cart display (updates both the cart modal and the cart count)
const updateCart = () => {
  cartCount.textContent = cart.length; // Update the number of items in the cart
  cartCount.classList.remove("hidden"); // Make the cart count visible

  // Render cart items in the modal
  cartItemsContainer.innerHTML = "";
  let total = 0;

  cart.forEach((item) => {
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");
    cartItem.innerHTML = `
      <p>${item.name} - $${item.price} x ${item.quantity}</p>
      <p>Quantity: ${item.quantity}</p>
      <button class="increase-btn" data-id="${item.id}">+</button>
      <button class="decrease-btn" data-id="${item.id}">-</button>
      <button class="remove-btn" data-id="${item.id}">Remove</button>
    `;
    cartItemsContainer.appendChild(cartItem);

    total += item.price * item.quantity; // Calculate the total price of the cart
  });

  document.getElementById("cart-total").textContent = total.toFixed(2); // Update total price
};
  // Increase and decrease item quantity, remove item
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("increase-btn")) {
      const productId = e.target.getAttribute("data-id");
      const product = cart.find((item) => item.id === productId);
      if (product) {
        product.quantity++;
        updateCart();
      }
    }

    if (e.target.classList.contains("decrease-btn")) {
      const productId = e.target.getAttribute("data-id");
      const product = cart.find((item) => item.id === productId);
      if (product && product.quantity > 1) {
        product.quantity--;
        updateCart();
      }
    }

    if (e.target.classList.contains("remove-btn")) {
      const productId = e.target.getAttribute("data-id");
      cart = cart.filter((item) => item.id !== productId);
      updateCart();
    }
    
  });

  // Close cart modal
  closeCartBtn.addEventListener("click", () => {
    cartModal.classList.add("hidden");
  });
  // Show toast notification
  function showToast(message) {
    const toast = document.createElement('div');
    toast.classList.add('toast');
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('show');
    }, 100);

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        toast.remove();
      }, 500);
    }, 3000);
  }


});