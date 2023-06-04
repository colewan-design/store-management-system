<template>
    <div class="main-div">
      <div class="content-header">
        <div class="container-fluid">
          <div class="row mb-2">
            <div class="col-sm-6">
              <h1 class="m-0">Purchase</h1>
            </div><!-- /.col -->
            <div class="col-sm-6">
              <ol class="breadcrumb float-sm-right">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item active">Purchase</li>
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
              <h5 class="modal-title" id="insertModalLabel">Order Information</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <!-- Purchase information form goes here -->
              <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" class="form-control" id="name" v-model="newPurchase.name">
              </div>
              <div class="form-group">
                <label for="category">Category:</label>
                <input type="text" class="form-control" id="category" v-model="newPurchase.category">
              </div>
              <div class="form-group">
                <label for="price">Price:</label>
                <input type="number" class="form-control" id="price" v-model="newPurchase.price">
              </div>
              <div class="form-group">
                <label for="quantity">Quantity:</label>
                <input type="number" class="form-control" id="quantity" v-model="newPurchase.quantity">
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
              <button type="button" class="btn btn-primary" @click="insertPurchase">Save</button>
            </div>
          </div>
        </div>
      </div>
          <div class="card">
            <div class="card-header">
              <h3 class="card-title"><i class="fas fa-list-alt"></i> Purchase List</h3>
  
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
                    <th>CreatedAt</th>
                    <th style="width: 8%" class="text-center">Action</th>
                  </tr>
                </thead>
                <tbody v-if="purchases.length > 0">
                  <tr v-for="purchase in purchases" :key="purchase.id">
                    <td>{{ purchase.name }}</td>
                    <td>{{ purchase.category }}</td>
                    <td>{{ purchase.price }}</td>
                    <td>{{ purchase.quantity }}</td>
                    <td>{{ purchase.created_at }}</td>
                    <td>
                      <!-- Edit Button Icon -->
                      <i class="fas fa-edit text-primary" :data-target="'#editModal-' + purchase.id" data-toggle="modal" @click="editPurchase(purchase)"></i>
  
                      <!-- Delete Icon -->
                      <i class="fas fa-trash-alt text-danger" @click="deletePurchase(purchase.id)"></i>
                    </td>
                  </tr>
                </tbody>
  
                <tbody v-else>
                  <tr>
                    <td colspan="4" align="center">No Purchases Found.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
  
     
  
      <!-- Edit Modal -->
      <div v-if="editedPurchase" v-bind:id="'editModal-' + editedPurchase.id" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="editModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="editModalLabel">Edit Purchase</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <!-- Edit form goes here -->
              <div class="form-group">
                <label for="edit-id">ID:</label>
                <input type="text" class="form-control" id="edit-id" v-model="editedPurchase.id">
              </div>
              <div class="form-group">
                <label for="edit-name">Name:</label>
                <input type="text" class="form-control" id="edit-name" v-model="editedPurchase.name">
              </div>
              <div class="form-group">
                <label for="edit-category">Category:</label>
                <input type="text" class="form-control" id="edit-category" v-model="editedPurchase.category">
              </div>
              <div class="form-group">
                <label for="edit-price">Price:</label>
                <input type="number" class="form-control" id="edit-price" v-model="editedPurchase.price">
              </div>
              <div class="form-group">
                <label for="edit-quantity">Quantity:</label>
                <input type="number" class="form-control" id="edit-quantity" v-model="editedPurchase.quantity">
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
              <button type="button" class="btn btn-primary" @click="updatePurchase">Save Changes</button>
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
        purchases: [],
        newPurchase: {
          name: '',
          category: '',
          price: '',
          quantity: '',
          created_at: '',
        },
        editedPurchase: null,
      };
    },
    mounted() {
      this.fetchPurchases();
    },
    methods: {
      fetchPurchases() {
        // Make an API call to fetch Purchases data
        axios.get('/api/purchase')
          .then(response => {
            this.purchases = response.data;
          })
          .catch(error => {
            console.error(error);
          });
      },
      // Create
      insertPurchase() {
        // Make an API call to insert a new purchase
        axios.post('/api/purchase/create', this.newPurchase)
          .then(() => {
            this.newPurchase = {
              name: '',
              category: '',
              price: '',
              quantity: '',
            };
            $('#insertModal').modal('hide');
            this.fetchPurchases(); // Fetch the updated list of purchases
          })
          .catch(error => {
            console.error(error);
          });
      },

      editPurchase(purchase) {
        // Set the editedpurchase to the selected purchase
        this.editedPurchase = { ...purchase };
      },
     // Update
      updatePurchase() {
        const purchaseId = this.editedPurchase.id;

        axios.put(`/api/purchase/update/${purchaseId}`, this.editedPurchase)
          .then(() => {
            this.editedPurchase = null;
            $(`#editModal-${purchaseId}`).modal('hide');
            this.fetchPurchases(); // Fetch the updated list of purchases
          })
          .catch(error => {
            console.error(error);
          });
      },
      
    // Delete
    deletePurchase(purchaseId) {
      axios.delete(`/api/purchase/delete/${purchaseId}`)
        .then(() => {
          this.purchases = this.purchases.filter(purchase => purchase.id !== purchaseId);
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
  