<template>
    <div class="main-div">
      <div class="content-header">
        <!-- Header Content -->
      </div>
  
      <div class="content">
        <div class="container-fluid">
            <div class="row">
            <!-- First Column -->
            <div class="col-md-12">
            <div class="card">
                <div class="card-header">
                <!-- Card Header Content -->
                <h1 class="m-0">Search Product</h1>
                </div>
                <div class="card-body p-0">
                <div class="input-group">
                    <input type="text" class="form-control" v-model="searchQuery" @input="searchProducts" placeholder="Search product">
                    <div class="input-group-append">
                    <button class="btn btn-primary" @click="addOrder">Add Order</button>
                    </div>
                </div>

                <!-- Display search results -->
                <div v-if="searchResults.length > 0">
                <h3 class="m-0 pl-3">Search Results:</h3>
                <ul class="search-results-list">
                    <li v-for="result in searchResults" :key="result.id">
                    <a href="#" @click="copyToSearchBar(result.name)">{{ result.name }}</a>
                    </li>
                </ul>
                </div>

                </div>
            </div>
            </div>
        </div>

          <div class="row">
            <!-- First Column -->
            <div class="col-md-8">
            <div class="card">
                <div class="card-header">
                <!-- Card Header Content -->
                <h1>Ordered Products</h1>
                </div>
                <div class="card-body p-0">
                <table class="table ordered-products-table">
                    <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="product in orderedProducts" :key="product.id">
                        <td>{{ product.name }}</td>
                        <td>${{ product.sale_price }}</td>
                        <td>{{ product.quantity }}</td>
                        <td>
                        <button @click="increaseQuantity(product)" class="btn btn-primary">+</button>
                        <button @click="removeProduct(product)" class="btn btn-danger">Remove</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>
            </div>



            <!-- Second Column -->
            <div class="col-md-4">
            <div class="card">
                <div class="card-header bg-success text-white">
                <!-- Card Header Content -->
                <h1>Total: ${{ calculateTotal() }}</h1>
                </div>
                <div class="card-body p-0">
                
                </div>
            </div>
            </div>


            
          </div>
        </div>
      </div>
    </div>
  </template>
  
  
  <script>
export default {
  data() {
    return {
      searchQuery: "",
      searchResults: [],
      orderedProducts: [],
      products: [],
    };
  },
  mounted() {
      this.fetchProducts();
    },
  methods: {
    fetchProducts() {
        // Make an API call to fetch products data
        axios.get('/api/product')
          .then(response => {
            this.products = response.data;
          })
          .catch(error => {
            console.error(error);
          });
      },

    searchProducts() {
      this.searchResults = this.products.filter((product) =>
        product.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },

    addOrder() {
    const orderedProduct = {
        id: Date.now(),
        name: this.searchQuery,
        sale_price: this.getProductPrice(this.searchQuery), // Set the price using a helper method
        quantity: 1 // Set the quantity initially as 1
    };
    this.orderedProducts.push(orderedProduct);
    this.searchQuery = ""; // Clear the searchQuery after adding the order
    },

    calculateTotal() {
        let total = 0;
        for (const product of this.orderedProducts) {
        const sale_price = parseFloat(product.sale_price);
        const quantity = parseInt(product.quantity);
        if (!isNaN(sale_price) && !isNaN(quantity)) {
            total += sale_price * quantity;
        }
        }
        return total.toFixed(2);
    },

    removeProduct(product) {
    const index = this.orderedProducts.findIndex(p => p.id === product.id);
    if (index !== -1) {
    this.orderedProducts.splice(index, 1);
    }
    },

    getProductPrice(productName) {
    const product = this.products.find((p) => p.name === productName);
    return product ? product.sale_price : "";
    },


    increaseQuantity(product) {
    product.quantity++;
    },

    copyToSearchBar(result) {
    this.searchQuery = result;
    this.searchResults = []; // Reset searchResults to hide the search results
    },

  },
};
</script>
  
<style>
.search-results-list {
  list-style: none; /* Remove the bullet points from the <li> elements */
  padding-left: 1rem; /* Remove any default padding from the <ul> element */
}

.search-results-list li {
  /* Optional: Add padding or margin if desired */
}

.search-results-list li a {
  text-decoration: none; /* Remove the underline from the <a> tags */
}

.ordered-products-list li {
  list-style: none;
}

h3{
    font-size: 20px;
    padding-top: 1rem;
}

</style>