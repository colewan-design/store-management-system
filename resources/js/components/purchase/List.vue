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
                  <li class="breadcrumb-item active">Category</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        
        <div class="content">
        <div class="container-fluid">
        <div class="card">
        <div class="card-header">
          <h3 class="card-title"><i class="fas fa-list-alt"></i> Categories</h3>

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
                      <th style="width: 1%">
                          #
                      </th>
                      <th style="width: 20%">
                          Parent
                      </th>
                      <th style="width: 30%">
                          Title
                      </th>
                      <th>
                          Status
                      </th>
                      <th style="width: 8%" class="text-center">
                          Action
                      </th>
                  </tr>
                </thead>
                <tbody v-if="categories.length > 0">
                    <tr v-for="(category,key) in categories" :key="key">
                        <td>{{ category.id }}</td>
                        <td>{{ category.parent_id }}</td>
                        <td>{{ category.title }}</td>
                        <td>{{ category.status }}</td>
                        <td>
                            
                        </td>
                    </tr>
                </tbody>
                <tbody v-else>
                    <tr>
                        <td colspan="4" align="center">No Categories Found.</td>
                    </tr>
                </tbody>
          </table>
        </div>
        <!-- /.card-body -->
      </div>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"category",
    data(){
        return {
            categories:[]
        }
    },
    mounted(){
        this.getCategories()
    },
    methods:{
        async getCategories(){
            await this.axios.get('/api/category').then(response=>{
                this.categories = response.data
            }).catch(error=>{
                console.log(error)
                this.categories = []
            })
        },
        deleteCategory(id){
            if(confirm("Are you sure to delete this category ?")){
                this.axios.delete(`/api/category/${id}`).then(response=>{
                    this.getCategories()
                }).catch(error=>{
                    console.log(error)
                })
            }
        }
    }
}
</script>