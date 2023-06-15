<template>
    
        <nav class="navbar navbar-dark bg-dark">
            <div class="container">
            <a class="navbar-brand" href="#">Josiel Pinto</a>
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="navbar-brand" href="#">Todos los Dispositivos</a>
                </li>
            </ul>
            </div>
        </nav>
        
        <div class="bg-image">
            
            <div class="container pt-5">
                <div class="row justify-content-center">
                    <div class="col-md-10">
                    <div class="card bg-dark text-white">
                        <div class="card-header d-flex justify-content-between align-items-center pt-3">
                            <h5 class="m-0">Lista de Dispositivos</h5>
                            <button class="btn btn-outline-light">Registrar Nuevo Dispositivo</button>
                        </div>
                        <div class="card-body p-2">
                        <table class="table table-dark text-white text-center">
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Descripción</th>
                                <th>Marca</th>
                                <th>Editar</th>
                                <th>Eliminar</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>1</td>
                                <td>Dispositivo 1</td>
                                <td>Descripción del dispositivo 1</td>
                                <td>Marca del dispositivo 1</td>
                                <td>
                                    <a href="#">
                                        <i class="fa fa-pencil text-white"></i>
                                    </a>
                                </td>
                                <td>
                                    <a href="#">
                                        <i class="fa fa-trash text-white"></i>
                                    </a>
                                </td>
                            </tr>
  
                  
                            </tbody>
                        </table>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

        </div>

        <footer class="navbar navbar-dark bg-dark">
            <div class="container">
                <p class="navbar-text">Test Josiel Pinto 2023</p>
            </div>
        </footer>
   
</template>

<script>
export default {
  methods: {
    irAVista2() {
      this.$router.push('/vista2')
    }
  }
}
</script>

<style>

.bg-image {
  background-image: url('../../../public/imagen/fondo.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  opacity: 0.7;
  height: calc(100vh - 110px);
}

</style>