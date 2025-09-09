<template>
  <div class="shop-container">
    <div class="content">
      <h2>Webshop</h2>
      <p class="intro-paragraph">
        Här kan du köpa våra produkter direkt med Swish.  
        (Mockad checkout – ingen riktig betalning).
      </p>

      <!-- Product Grid -->
      <div class="product-grid">
        <div 
          v-for="product in products" 
          :key="product.id" 
          class="product-card"
        >
          <img :src="product.image" :alt="product.name" />
          <h3>{{ product.name }}</h3>
          <p class="price">{{ product.price }} kr</p>
          <button @click="mockCheckout(product)">
            Swish-betala
          </button>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Footer from '../components/Footer.vue';

export default {
  name: "Shop",
  components: { Footer },
  data() {
    return {
      products: [
        { id: 1, name: "T-shirt Stuck On", price: 300, image: "../assets/tshirt.png" },
        { id: 2, name: "Tygväska Stuck On", price: 350, image: "../assets/vinyl.png" },
        { id: 3, name: "Mugg Stuck On", price: 150, image: "../assets/mug.png" },
        { id: 4, name: "Poster Moln", price: 500, image: "../assets/poster.png" },
        { id: 5, name: "Tygpatch", price: 60, image: "../assets/poster.png" }
      ]
    };
  },
  methods: {
    mockCheckout(product) {
      alert(`Tack för ditt köp av ${product.name}! Swisha ${product.price} kr till 123 456 7890 📱`);
    }
  }
};
</script>

<style scoped>
.shop-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: 0 20px 20px;
  width: 100%;
}

.content {
  width: 100%;
  max-width: 1400px;
  padding: 0 20px;
  margin: 40px 0 62px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

h2 {
  color: #FFFFFF;
  font-family: var(--font-main);
  font-size: 50px;
  line-height: 42px;
  font-weight: 1000;
  margin-bottom: 24px;
  text-transform: uppercase;
}

.intro-paragraph {
  color: #FFFFFF;
  max-width: 500px;
  margin-bottom: 40px;
  line-height: 22px;
  font-size: 18px;
  font-weight: 400;
  font-family: var(--font-main);
}

.product-grid {
  display: grid;
  gap: 30px;
  width: 100%;
  grid-template-columns: 1fr; /* default 1 column */
}

@media (min-width: 600px) {
  .product-grid {
    grid-template-columns: repeat(2, 1fr); /* 2 columns */
  }
}

@media (min-width: 1200px) {
  .product-grid {
    grid-template-columns: repeat(4, 1fr); /* 4 columns */
  }
}

.product-card {
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  box-shadow: 0px 4px 12px rgba(0,0,0,0.1);
}

.product-card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
}

.product-card h3 {
  font-size: 20px;
  margin: 15px 0 5px;
}

.price {
  font-size: 18px;
  font-weight: bold;
  color: var(--primary-color);
  margin-bottom: 15px;
}

button {
  padding: 12px 20px;
  font-size: 16px;
  background-color: var(--primary-color);
  color: #ffffff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: rgb(170, 4, 4);
}
</style>
