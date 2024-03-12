let modalEdit = "         <h1>Editar Tarefa</h1>         <div class='content-modal'>             <input type='text' id='input-edit' class='input' placeholder='Nova task'>             <div class='content-priority'>                 <div>                     <p>Prioridade</p>                 </div>                 <div class='content-level'>                     <div class='choose-priority' id='priority-one'></div>                     <div class='choose-priority' id='priority-two'></div>                     <div class='choose-priority' id='priority-three'></div>                 </div>             </div>         </div>         <div class='content-btn'>             <button type='button' class='btn-edit' id='btn-edit-cancel'>                 <img src='svg/xmark-solid.svg' alt='Cancelar' height='40px'>             </button>             <button type='button' class='btn-edit' id='btn-edit-edit'>                 <img src='svg/check-solid.svg' alt='Alterar' height='40px'>             </button>         </div>     ";
let modalRemovetext = " <h1 id='title-determinate'></h1> <div class='tasks' id='task-remove'> <p class='task-puted' id='task-remove-text'></p> <div class='content-priority'> <div class='content-level'> <div class='priority-level' level='priority'></div> <div class='priority-level' level='priority'></div> <div class='priority-level' level='priority'></div> </div> </div> </div> <div class='content-btn'> <button type='button' class='btn-edit' id='btn-edit-cancel'> <img src='svg/xmark-solid.svg' alt='Cancelar' height='40px'> </button> <button type='button' class='btn-edit' id='btn-edit-edit'> <img src='svg/check-solid.svg' alt='Alterar' height='40px'> </button>"

let viewBarsCode = " <div class='container-name-symbol'> <h1>List-To-Do</h1> <img src='./svg/xmark-solid.svg' alt='Cancelar' height='20px' id='cancel-bar' class='actions'> </div> <div class='container-bars'> <div class='seeing-options-bar' id='visit-profile-responsive'><p>Perfil</p></div> <div class='seeing-options-bar' id='visit-list-responsive'><p>List To-do</p></div> <div class='seeing-options-bar' id='visit-about-responsive'><p>Sair</p></div> </div>"
let initialViewBarsCode = " <div class='container-name-symbol'> <h1>List-To-Do</h1> <img src='../svg/xmark-solid.svg' alt='Cancelar' height='20px' id='cancel-bar' class='actions'> </div> <div class='container-bars'> <div class='seeing-options-bar' id='visit-welcome-responsive'><p>Welcome</p></div> <div class='seeing-options-bar' id='visit-login-responsive'><p>Entrar</p></div> <div class='seeing-options-bar' id='visit-register-reponsive'><p>Registrar-se</p></div> </div> "

let pageProfile = "  <h1 class='style-to-title'>Perfil</h1> <div class='container-infos-user'> <div class='container-primary-infos'> <div class='box-description'> <p id='user-name'></p> <div class='box-user-infos'> <div class='boxs-infos-user'> <div class='box-infos'>Desde de: <p id='info-since'></p> </div> <div class='box-infos'>Conexões: <p id='info-connections'></p> </div> <div class='box-infos'>Ranking: <p id='info-ranking'></p> </div> </div> <div class='boxs-infos-user'> <div class='box-infos'>Tarefas Criadas: <p id='info-task-created'></p> </div> <div class='box-infos'>Tarefas Concluídas: <p id='info-task-finished'></p> </div> <div class='box-infos'>Tarefas Canceladas: <p id='info-task-canceled'></p> </div> </div> </div> </div> </div> <div class='container-second-infos'> <div class='box-user-description' id='user-description'> <h3>Descrição</h3> <p id='text-user-description'>  </p> </div> <div class='box-user-description' id='user-infos-general'> <h3>Desempenho</h3> <div class='box-infos-general'>  </div> </div> </div> </div> </div> <div id='btn-save-user' class='btn-configs'>Personalizar</div>"
let pageStatistic = " <h1 class='style-to-title'>Estatísticas</h1><div class='choose-priority-view'> <div class='select-priority'> <p>Prioridade</p> <div class='box-priority-statistic'> <div class='choose-priority-statistic' id='priority-one'></div> <div class='choose-priority-statistic' id='priority-two'></div> <div class='choose-priority-statistic' id='priority-three'></div> <div class='choose-priority-statistic' id='priority-all'><p>#</p></div> </div> </div> </div> <div class='box-statistics'> <div class='style-box-statistics'> <p class='name-type-statitic'>Tasks Criadas</p> <p class= 'number-statistic' id='statistic-created'>-</p> </div> <div class='style-box-statistics'> <p class='name-type-statitic'>Tasks Finalizadas</p> <p class= 'number-statistic' id='statistic-finished'>-</p> </div> <div class='style-box-statistics'> <p class='name-type-statitic'>Tasks Canceladas</p> <p class= 'number-statistic' id='statistic-canceled'>-</p> </div> </div> <div class='container-statistic-bar'> <div class='statistic-bar'> <div id='bar-task-finished'></div> <div id='bar-task-canceled'></div> </div> <div class='statistic-bar-info'> <p id='number-finished'></p> <p id='number-canceled'></p></div> </div> "
let pageConfigText = " <h1 class='style-to-title'>Configurações</h1> <div class='box-configs'> <div class='box-configurations'> <div class='line-config'> <p class='style-to-name-config'>Organizar Lista por ordem de prioridade</p> <div class='ball-option' id='config-one'> <div class='active-order-priority'></div> </div> </div> <div class='line-config'> <p class='style-to-name-config'>Permitir perfils visualizarem suas Estatísticas</p> <div class='ball-option' id='config-two'> <div class='active-order-priority'></div> </div> </div> </div> </div> <div id='btn-save-configs' class='btn-configs'>Salvar</div>"

let profile = " <div id='container-profile'> <div class='select-page'> <div id='container-select'> <div class='select-box-style' id='section-profile'> <img src='./svg/user-solid.svg' alt='Profile' height='25rem'> </div> <div class='select-box-style' id='section-statistic'><img src='./svg/chart-simple-solid.svg' alt='Statistic' height='25rem'> </div> <div class='select-box-style' id='section-config'><img src='./svg/gear-solid.svg' alt='Config' height='25rem'></div> </div> </div> <div class='view-infos' id='view-infos-unique'> </div> </div>"
let listToDo = " <h2>List-To-Do</h2> <div id='container-info'> <input type='text' id='task-add' placeholder='New Task' maxlength='35'> <div id='priority'> <div> <p>Prioridade</p> </div> <div id='level'> <div class='choose-priority' id='priority-one' mark='priority'></div> <div class='choose-priority' id='priority-two' mark='priority'></div> <div class='choose-priority' id='priority-three' mark='priority'></div> </div> </div> <div id='btn-add'><img src='svg/plus-solid.svg' alt='Adicionar task' height='25rem'></div> </div> <div id='task-made'> </div>"
let alertAddTask = " <div class='box-info-add-task'> <div class='info-add-task'> <p>Adicione Novas Tarefas </p> </div> </div> "

let login = " <h1>Login</h1> <div class='box-credentials'> <div class='box-inputs'> <label for='value-email'> <p class='title-input'>Email:</p> </label> <input type='email' name='email' class='inputs-credentials' id='value-email' placeholder='Digite seu Email' mark='0'> </div> <div class='box-inputs'> <label for='value-password'> <p class='title-input'>Senha:</p> </label> <input type='password' name='password' class='inputs-credentials' id='value-password' placeholder='Digite sua Senha' mark='1'> </div> <p id='forget-password'>Esqueci minha senha?</p> </div> <button type='button' id='btn-login' class='btn-sign'>Login</button> "
let register = " <h1>Cadastro</h1> <div class='box-credentials'> <div class='box-inputs'> <label for='value-name'> <p class='title-input'>Nome:</p> </label> <input type='text' name='name' class='inputs-credentials' id='value-name' placeholder='Digite seu nome' mark='0'> </div> <div class='box-inputs'> <label for='value-email'> <p class='title-input'>Email:</p> </label> <input type='email' name='email' class='inputs-credentials' id='value-email' placeholder='Digite seu Email' mark='1'> </div> <div class='box-inputs'> <label for='value-password'> <p class='title-input'>Senha:</p> </label> <input type='password' name='password' class='inputs-credentials' id='value-password' placeholder='Digite sua Senha' mark='2'> </div> </div> <button type='button' id='btn-register' class='btn-sign'>Cadastrar</button>"
let digitCode = " <h1>Código de Confirmação</h1> <div class='box-credentials'> <div class='box-inputs'> <label for='value-code'> </label> <input type='text' name='code' class='inputs-credentials' id='value-code' placeholder='Digite o código'> </div> <button type='button' id='btn-verify-code' class='btn-sign'>Verificar</button> <p id='re-send-code'>Reenviar código</p>  <p id='back-page'>Voltar</p>"

export { modalEdit, modalRemovetext, viewBarsCode, initialViewBarsCode, pageStatistic, listToDo, profile, pageConfigText, pageProfile, login, register, digitCode, alertAddTask }