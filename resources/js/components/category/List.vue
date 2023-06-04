<template>
  <div class="main-div">
    <div class="content-header">
      <!-- Header Content -->
    </div>

    <div class="content">
      <div class="container-fluid">
        <div class="card">
          <div class="card-header">
            <!-- Card Header Content -->
          </div>
          <div class="card-body p-0">
            <table class="table table-striped projects">
              <!-- Table Header -->
              <thead>
                <tr>
                  <th style="width: 1%">#</th>
                  <th style="width: 20%">Parent</th>
                  <th style="width: 30%">Title</th>
                  <th>Status</th>
                  <th style="width: 8%" class="text-center">Action</th>
                </tr>
              </thead>
              <tbody v-if="categories.length > 0">
                <!-- Table Rows for Categories -->
                <tr v-for="(category, key) in categories" :key="key">
                  <td>{{ category.id }}</td>
                  <td>{{ category.parent_id }}</td>
                  <td>{{ category.title }}</td>
                  <td>{{ category.status }}</td>
                  <td>
                    <i class="fas fa-edit text-primary" @click="editCategory(category)"></i>
                    <i class="fas fa-trash-alt text-danger" @click="deleteCategory(category.id)"></i>
                  </td>
                </tr>
              </tbody>

              <tbody v-else>
                <!-- Table Row for No Categories Found -->
                <tr>
                  <td colspan="4" align="center">No Categories Found.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Insert Button -->
          <button class="btn btn-primary" data-toggle="modal" data-target="#insertModal">
            <i class="fas fa-plus"></i> Insert Data
          </button>

          <!-- Insert Modal -->
          <div class="modal fade" id="insertModal" tabindex="-1" role="dialog" aria-labelledby="insertModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="insertModalLabel">Insert Data</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <!-- Insert data form goes here -->
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary">Save</button>
                </div>
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
  name: "category",
  data() {
    return {
      categories: [],
    };
  },
  mounted() {
    this.getCategories();
  },
  methods: {
    async getCategories() {
      await this.axios
        .get("/api/category")
        .then((response) => {
          this.categories = response.data;
        })
        .catch((error) => {
          console.log(error);
          this.categories = [];
        });
    },
    deleteCategory(id) {
      if (confirm("Are you sure to delete this category?")) {
        this.axios
          .delete(`/api/category/${id}`)
          .then((response) => {
            this.getCategories();
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    // Other methods for additional functionality
  },
};
</script>
