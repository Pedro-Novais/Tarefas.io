let modalEdit = "         <h1>Editar Tarefa</h1>         <div class='content-modal'>             <input type='text' id='input-edit' class='input' placeholder='Nova task'>             <div class='content-priority'>                 <div>                     <p>Prioridade</p>                 </div>                 <div class='content-level'>                     <div class='choose-priority' id='priority-one'></div>                     <div class='choose-priority' id='priority-two'></div>                     <div class='choose-priority' id='priority-three'></div>                 </div>             </div>         </div>         <div class='content-btn'>             <button type='button' class='btn-edit' id='btn-edit-cancel'>                 <img src='svg/xmark-solid.svg' alt='Cancelar' height='40px'>             </button>             <button type='button' class='btn-edit' id='btn-edit-edit'>                 <img src='svg/check-solid.svg' alt='Alterar' height='40px'>             </button>         </div>     ";
let modalRemovetext = "<h1 id='title-determinate'></h1> <div class='tasks' id='task-remove'> <p class='task-puted' id='task-remove-text'></p> <div class='content-priority'> <div class='content-level'> <div class='priority-level' level='priority'></div> <div class='priority-level' level='priority'></div> <div class='priority-level' level='priority'></div> </div> </div> </div> <div class='content-btn'> <button type='button' class='btn-edit' id='btn-edit-cancel'> <img src='svg/xmark-solid.svg' alt='Cancelar' height='40px'> </button> <button type='button' class='btn-edit' id='btn-edit-edit'> <img src='svg/check-solid.svg' alt='Alterar' height='40px'> </button>"
let viewBarsCode = " <div class='container-name-symbol'> <h1>List-To-Do</h1> <img src='../svg/xmark-solid.svg' alt='Cancelar' height='20px' id='cancel-bar' class='actions'> </div> <div class='container-bars'> <div class='seeing-options-bar' id='visit-profile-responsive'><p>Perfil</p></div> <div class='seeing-options-bar' id='visit-list-responsive'><p>List To-do</p></div> <div class='seeing-options-bar' id='visit-about-responsive'><p>Sobre o Desenvolvedor</p></div> </div>"
let pageStatistic = "<h1 class='style-to-title'>Estatísticas</h1> <div class='box-statistics'> <div class='style-box-statistics'> <p class='name-type-statitic'>Tasks Criadas</p> <p class= 'number-statistic' id='statistic-created'>17</p> </div> <div class='style-box-statistics'> <p class='name-type-statitic'>Tasks Finalizadas</p> <p class= 'number-statistic' id='statistic-finished'>9</p> </div> <div class='style-box-statistics' id='statistic-canceled'> <p class='name-type-statitic'>Tasks Canceladas</p> <p class= 'number-statistic' id='statistic-created'>5</p> </div> </div> <div class='container-statistic-bar'> <div class='statistic-bar'> <div id='bar-task-finished'></div> <div id='bar-task-canceled'></div> </div> <div class='statistic-bar-info'> <p>Tasks concluídas: 82%</p> <p>Tasks canceladas: 18%</p> </div> </div> "
let pageConfigText = "<h1 class='style-to-title'>Configurações</h1> <div class='box-configs'> <div class='box-configurations'> <div class='line-config'> <p class='style-to-name-config'>Organizar Lista por ordem de prioridade</p> <div class='ball-option' id='config-one'> <div class='active-order-priority'></div> </div> </div> <div class='line-config'> <p class='style-to-name-config'>Permitir perfils visualizares suas Estatísticas</p> <div class='ball-option' id='config-two'> <div class='active-order-priority'></div> </div> </div> </div> </div> <div id='btn-save-configs' class='btn-configs'>Salvar</div>"

let profile = "<div id='container-statistic'> <div class='select-page'> <div id='container-select'> <div class='select-box-style' id='section-profile'> <img src='../svg/user-solid.svg' alt='Profile' height='25rem'> </div> <div class='select-box-style' id='section-statistic'><img src='../svg/chart-simple-solid.svg' alt='Statistic' height='25rem'> </div> <div class='select-box-style' id='section-config'><img src='../svg/gear-solid.svg' alt='Config' height='25rem'></div> </div> </div> <div class='view-infos' id='view-infos-unique'> </div> </div>"
let listToDo = "<h1>List-To-Do</h1> <div id='container-info'> <input type='text' id='task-add' placeholder='New To-Do' maxlength='35'> <div id='priority'> <div> <p>Prioridade</p> </div> <div id='level'> <div class='choose-priority' id='priority-one' mark='priority'></div> <div class='choose-priority' id='priority-two' mark='priority'></div> <div class='choose-priority' id='priority-three' mark='priority'></div> </div> </div> <div id='btn-add'><img src='svg/plus-solid.svg' alt='Adicionar task' height='25rem'></div> </div> <div id='task-made'> </div>"

export {modalEdit, modalRemovetext, viewBarsCode, pageStatistic, listToDo, profile, pageConfigText}