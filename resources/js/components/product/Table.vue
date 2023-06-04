<template>
    <div class="main-div">
      <div class="content-header">
        <div class="container-fluid">
          <div class="row mb-2">
            <div class="col-sm-6">
              <h1 class="m-0">Product</h1>
            </div><!-- /.col -->
            <div class="col-sm-6">
              <ol class="breadcrumb float-sm-right">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item active">Product</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
  
      <div class="content">
        <div class="container-fluid">
             <!-- Insert Button -->
            <div>
                <button class="btn btn-primary mb-2 " data-toggle="modal" data-target="#insertModal">
                <i class="fas fa-plus"></i> Insert Data
                </button>
            </div>

  
      <!-- Insert Modal -->
      <div class="modal fade" id="insertModal" tabindex="-1" role="dialog" aria-labelledby="insertModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="insertModalLabel">Product Information</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <!-- Product information form goes here -->
              <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" class="form-control" id="name" v-model="newProduct.name">
              </div>
              <div class="form-group">
                <label for="category">Category:</label>
                <input type="text" class="form-control" id="category" v-model="newProduct.category">
              </div>
              <div class="form-group">
                <label for="price">Price:</label>
                <input type="number" class="form-control" id="price" v-model="newProduct.price">
              </div>
              <div class="form-group">
                <label for="quantity">Quantity:</label>
                <input type="number" class="form-control" id="quantity" v-model="newProduct.quantity">
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
              <button type="button" class="btn btn-primary" @click="insertProduct">Save</button>
            </div>
          </div>
        </div>
      </div>
          <div class="card">
            <div class="card-header">
              <h3 class="card-title"><i class="fas fa-list-alt"></i> Product List</h3>
  
              <div class="card-tools">
                <button type="button" class="btn btn-tool" data-card-widget="collapse" title="Collapse">
                  <i class="fas fa-minus"></i>
                </button>
              </div>
            </div>
            <div class="card-body p-0">
                
              <table class="table table-striped projects">
                <thead>
                  <tr>
                    <th style="width: 1%">Name</th>
                    <th style="width: 20%">Category</th>
                    <th style="width: 30%">Price</th>
                    <th>Quantity</th>
                    <th style="width: 8%" class="text-center">Action</th>
                  </tr>
                </thead>
                <tbody v-if="products.length > 0">
                  <tr v-for="product in products" :key="product.id">
                    <td>{{ product.name }}</td>
                    <td>{{ product.category }}</td>
                    <td>{{ product.price }}</td>
                    <td>{{ product.quantity }}</td>
                    <td>
                      <!-- Edit Button Icon -->
                      <i class="fas fa-edit text-primary" :data-target="'#editModal-' + product.id" data-toggle="modal" @click="editProduct(product)"></i>
  
                      <!-- Delete Icon -->
                      <i class="fas fa-trash-alt text-danger" @click="deleteProduct(product.id)"></i>
                    </td>
                  </tr>
                </tbody>
  
                <tbody v-else>
                  <tr>
                    <td colspan="4" align="center">No Products Found.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
  
     
  
      <!-- Edit Modal -->
      <div v-if="editedProduct" v-bind:id="'editModal-' + editedProduct.id" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="editModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="editModalLabel">Edit Product</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <!-- Edit form goes here -->
              <div class="form-group">
                <label for="edit-id">ID:</label>
                <input type="text" class="form-control" id="edit-id" v-model="editedProduct.id">
              </div>
              <div class="form-group">
                <label for="edit-name">Name:</label>
                <input type="text" class="form-control" id="edit-name" v-model="editedProduct.name">
              </div>
              <div class="form-group">
                <label for="edit-category">Category:</label>
                <input type="text" class="form-control" id="edit-category" v-model="editedProduct.category">
              </div>
              <div class="form-group">
                <label for="edit-price">Price:</label>
                <input type="number" class="form-control" id="edit-price" v-model="editedProduct.price">
              </div>
              <div class="form-group">
                <label for="edit-quantity">Quantity:</label>
                <input type="number" class="form-control" id="edit-quantity" v-model="editedProduct.quantity">
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
              <button type="button" class="btn btn-primary" @click="updateProduct">Save Changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        products: [],
        newProduct: {
          name: '',
          category: '',
          price: '',
          quantity: '',
        },
        editedProduct: null,
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
      // Create
      insertProduct() {
        // Make an API call to insert a new product
        axios.post('/api/product/create', this.newProduct)
          .then(() => {
            this.newProduct = {
              name: '',
              category: '',
              price: '',
              quantity: '',
            };
            $('#insertModal').modal('hide');
            this.fetchProducts(); // Fetch the updated list of products
          })
          .catch(error => {
            console.error(error);
          });
      },

      editProduct(product) {
        // Set the editedProduct to the selected product
        this.editedProduct = { ...product };
      },
     // Update
      updateProduct() {
        const productId = this.editedProduct.id;

        axios.put(`/api/product/update/${productId}`, this.editedProduct)
          .then(() => {
            this.editedProduct = null;
            $(`#editModal-${productId}`).modal('hide');
            this.fetchProducts(); // Fetch the updated list of products
          })
          .catch(error => {
            console.error(error);
          });
      },
      
    // Delete
    deleteProduct(productId) {
      axios.delete(`/api/product/delete/${productId}`)
        .then(() => {
          this.products = this.products.filter(product => product.id !== productId);
        })
        .catch(error => {
          console.error(error);
        });
    },

    },
    // methods-end
  };
  </script>
  
  <style scoped>
  /* Add your custom styles here */
  </style>
  