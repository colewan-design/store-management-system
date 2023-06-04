<template>
    <div class="wrapper">

  <!-- Preloader -->
  <div class="preloader flex-column justify-content-center align-items-center">
    <img class="animation__shake" src="dist/img/StoreLogo.png" alt="StoreLogo" height="60" width="60">
  </div>

  <!-- Navbar -->
  <nav class="main-header navbar navbar-expand navbar-white navbar-light">
    <!-- Left navbar links -->
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
      </li>
    </ul>

    <!-- Right navbar links -->
    <ul class="navbar-nav ml-auto">
    
      <li class="nav-item">
        <a class="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button">
        </a>
      </li>
    </ul>
  </nav>
  <!-- /.navbar -->

  <!-- Main Sidebar Container -->
  <aside class="main-sidebar sidebar-light-primary elevation-4">
    <!-- Brand Logo -->
    <router-link to="/" class="brand-link">
      <img src="dist/img/StoreLogo.png" alt="Store Logo" class="brand-image img-circle elevation-3" style="opacity: .8">
      <span class="brand-text font-weight-light">Sari-Sari Store</span>
    </router-link>

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user panel (optional) -->
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img src="dist/img/avatar3.png" class="img-circle elevation-2" alt="User Image">
        </div>
        <div class="info">
          <a href="#" class="d-block">Aling Gloria</a>
        </div>
      </div>

      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
               <li class="nav-item">
          <router-link exact-active-class="active" to="/" class="nav-link">
            <i class="nav-icon fas fa-tachometer-alt"></i>
            Dashboard
          </router-link>
        </li>
        <li class="nav-item">
          <router-link exact-active-class="active" to="/cashierview" class="nav-link">
            <i class="nav-icon fas fa-cash-register"></i>
            Cashier
          </router-link>
        </li>

        <li class="nav-item">
          <router-link exact-active-class="active" to="/productdetailsview" class="nav-link">
            <i class="nav-icon fas fa-info-circle"></i>
            Product Details
          </router-link>
        </li>   
        <li class="nav-item">
          <router-link exact-active-class="active" to="/producttableview" class="nav-link">
            <i class="nav-icon fas fa-table"></i>
            Product Management
          </router-link>
        </li>  
        <li class="nav-item">
          <router-link exact-active-class="active" to="/purchaseview" class="nav-link">
            <i class="nav-icon fas fa-shopping-cart"></i>
            Purchase
          </router-link>
        </li>  
        <li class="nav-item">
          <router-link exact-active-class="active" to="/salesview" class="nav-link">
            <i class="nav-icon fas fa-chart-line"></i>
            Sales
          </router-link>
        </li> 
        <li class="nav-item">
          <router-link exact-active-class="active" to="/reportview" class="nav-link">
            <i class="nav-icon fas fa-file-alt"></i>
            Report
          </router-link>
        </li>

        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>

  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <router-view></router-view>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->
  <footer class="main-footer">
    <strong>Copyright &copy; 2023 <a target="_blank" href="https://christiancolewan.netlify.app">Christian Colewan</a></strong>
    All rights reserved.
  </footer>

  <!-- Control Sidebar -->
  <aside class="control-sidebar control-sidebar-dark">
    <!-- Control sidebar content goes here -->
  </aside>
  <!-- /.control-sidebar -->
</div>

</template>
 
<script>
    export default {}
</script>