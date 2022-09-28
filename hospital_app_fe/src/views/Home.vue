<template>
  <div class="about">
    <div class="container-fluid text-center color-bg">
      <div class="row">
        <div class="col ">
          <div class="container my-5 ">
            <div class="row ">
              <div class="col align-self-center">
                <div class="card text-center">
                  <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                      <button class="nav-link text-dark active" id="paciente-tab" data-bs-toggle="tab"
                        data-bs-target="#paciente-tab-pane" type="button" role="tab" aria-controls="paciente-tab-pane"
                        aria-selected="true">Paciente</button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button class="nav-link text-dark" id="familiar-tab" data-bs-toggle="tab"
                        data-bs-target="#familiar-tab-pane" type="button" role="tab" aria-controls="familiar-tab-pane"
                        aria-selected="false">familiar</button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button class="nav-link text-dark" id="Medico-tab" data-bs-toggle="tab"
                        data-bs-target="#Medico-tab-pane" type="button" role="tab" aria-controls="Medico-tab-pane"
                        aria-selected="false">Medico</button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button class="nav-link text-dark" id="Enfermero-tab" data-bs-toggle="tab"
                        data-bs-target="#Enfermero-tab-pane" type="button" role="tab" aria-controls="Enfermero-tab-pane"
                        aria-selected="false">Enfermero</button>
                    </li>

                  </ul>
                  <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="paciente-tab-pane" role="tabpanel"
                      aria-labelledby="paciente-tab" tabindex="0">
                      <div class="card m-3">
                          <div class="card-header">
                            <h5 class="card-title">registro paciente</h5>
                          </div>
                          <div class="card-body">
                            <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">@</span>
                        <input type="text" class="form-control" placeholder="Username" aria-label="Username"
                          aria-describedby="basic-addon1">
                      </div>

                      <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Recipient's username"
                          aria-label="Recipient's username" aria-describedby="basic-addon2">
                        <span class="input-group-text" id="basic-addon2">@example.com</span>
                      </div>

                      <label for="basic-url" class="form-label">Your vanity URL</label>
                      <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon3">https://example.com/users/</span>
                        <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">
                      </div>

                      <div class="input-group mb-3">
                        <span class="input-group-text">$</span>
                        <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
                        <span class="input-group-text">.00</span>
                      </div>

                      <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Username" aria-label="Username">
                        <span class="input-group-text">@</span>
                        <input type="text" class="form-control" placeholder="Server" aria-label="Server">
                      </div>

                      <div class="input-group">
                        <span class="input-group-text">With textarea</span>
                        <textarea class="form-control" aria-label="With textarea"></textarea>
                      </div>

                            
                          </div>
                        </div>
                      
                    </div>
                    <div class="tab-pane fade" id="familiar-tab-pane" role="tabpanel" aria-labelledby="familiar-tab"
                      tabindex="0">familiar</div>
                    <div class="tab-pane fade" id="Medico-tab-pane" role="tabpanel" aria-labelledby="Medico-tab"
                      tabindex="0">medico</div>
                    <div class="tab-pane fade" id="Enfermero-tab-pane" role="tabpanel" aria-labelledby="Enfermero-tab"
                      tabindex="0">Enfermero</div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<script type="text/javascript">
  var titulo
  var contenido
  var estado

  function SaveData() {
    titulo = $('#title').val();

    contenido = $('#content').val()
    estado = $('#status').val()
    if (titulo == undefined || titulo == null || titulo == '') {
      $('#message-Error-Title').show();
      return false
    } else {
      $('#message-Error-Title').hide();
    }
    if (contenido == undefined || contenido == null || contenido == '') {
      $('#message-Error-Content').show();
      return false
    } else {
      $('#message-Error-Content').hide();
    }
    if (estado == undefined || estado == null || estado == '') {
      $('#message-Error-State').show();
      return false
    } else {
      $('#message-Error-State').hide();
    }
    $('#button1').click();
  }
</script>