<template>
  <div class="shop-container">
    <div class="content">

      <div class="product-grid">
        <div 
          v-for="product in products" 
          :key="product.id" 
          class="product-card"
        >
          <img :src="product.image" :alt="product.name" />
          <h3>{{ product.name }}</h3>
          <p class="price">{{ product.price }} kr</p>

          <!-- Visa knapp eller instruktion beroende på status -->
          <div v-if="!product.showSwishInfo">
            <button @click="showSwishInfo(product)">
              Swish-betala
            </button>
          </div>
          <div v-else class="swish-info">
            <p>Swisha <strong>{{ product.price }} kr</strong> till <strong>123 456 7890</strong></p>
            <p>Skriv: <em>{{ product.name }}</em> + ditt namn, och eventuell storlek, i meddelandet</p>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Footer from '../components/Footer.vue';
import MugPicture from '../assets/MerchMug.jpg';

export default {
  name: "Shop",
  components: { Footer },
  data() {
    return {
      products: [
        { id: 1, name: "T-shirt Stuck On", price: 300, image: MugPicture, showSwishInfo: false },
        { id: 2, name: "Tygväska Stuck On", price: 350, image: MugPicture, showSwishInfo: false },
        { id: 3, name: "Mugg Stuck On", price: 150, image: MugPicture, showSwishInfo: false },
        { id: 4, name: "Tygpatch", price: 60, image: MugPicture, showSwishInfo: false }
      ]
    };
  },
  methods: {
    showSwishInfo(product) {
      product.showSwishInfo = true;
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

.product-grid {
  display: grid;
  gap: 30px;
  width: 100%;
  grid-template-columns: 1fr;
  box-sizing: border-box;
}

@media (min-width: 600px) {
  .product-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1200px) {
  .product-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.product-card {
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  box-shadow: 0px 4px 12px rgba(0,0,0,0.1);
  overflow: hidden;
}

/* 🔹 Ändringen här: bilden fyller 90% av kortet och beskärs proportionerligt */
.product-card img {
  width: 100%;
  height: 90%;
  max-height: 300px;             /* fyller 90% av kortets höjd */
  object-fit: cover;       /* beskär bilden snyggt */
  border-radius: 8px;
  margin: 0 auto 15px;
  display: block;
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

/* Info-texten som visas efter klick */
.swish-info {
  background-color: #f7f7f7;
  border-radius: 8px;
  padding: 12px;
  font-size: 15px;
  color: #333;
  animation: fadeIn 0.4s ease;
}

.swish-info p {
  margin: 5px 0;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(5px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
