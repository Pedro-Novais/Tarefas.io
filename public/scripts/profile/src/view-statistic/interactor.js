import { get_json } from "../../../utils/functionsReq.js"
import { get_token } from "../../../utils/getToken.js"
import { convert_id_to_integer } from "../../../list/src/utils/priority_integer.js"

const api_statistic = "/api/user/statistic"

class Interactorstatistic {

    constructor() {

        this.start_hover()
        this.priority_statistic_hover()
        this.get_statistic()

    }

    async get_statistic() {

        const token = get_token()
        const response = await get_json(api_statistic, token)

        if (!response.ok) {

            console.log('erro ao requisitar as estatísticas')

            return false
        }

        const statistic_all = this.builder_all_statistic(response.responseData)

        this.builder_statistic(statistic_all)
        this.priority_action_statistic(response.responseData, statistic_all)
    }

    builder_statistic(statistic) {

        const statistic_create = document.querySelector('#statistic-created')
        const statistic_finished = document.querySelector('#statistic-finished')
        const statistic_canceled = document.querySelector('#statistic-canceled')

        statistic_create.innerHTML = statistic.created
        statistic_finished.innerHTML = statistic.finished
        statistic_canceled.innerHTML = statistic.canceled
    }

    priority_action_statistic(priority, priority_all) {

        const priority_statistic_element = document.querySelectorAll('.choose-priority-statistic')

        priority_statistic_element.forEach(element => {

            element.addEventListener('click', () => {
                this.reset_marked_element()

                element.setAttribute('marked', 'True')

                const priority_id = element.getAttribute('id')

                if (priority_id != "priority-all") {

                    this.builder_statistic(priority[priority_id])
                } else {
                
                    this.builder_statistic(priority_all)
                }
            })
        })
    }

    reset_marked_element(){

        const elements_priorities = document.querySelectorAll('.choose-priority-statistic')

        elements_priorities.forEach(element => {

            element.setAttribute('marked', 'False')

        })
    }

    builder_all_statistic(statistics) {

        let statistic_all = {
            created: 0,
            finished: 0,
            canceled: 0
        }

        const array_types_priority = ['priorityOne', 'priorityTwo', 'priorityThree']
        const array_types = ['created', 'finished', 'canceled']

        for (let i = 0; i < 3; i++) {

            for (let i_intern = 0; i_intern < 3; i_intern++) {

                statistic_all[array_types[i_intern]] += statistics[array_types_priority[i]][array_types[i_intern]]

            }
        }

        return statistic_all
    }

    priority_statistic_hover(){

        const element_priority_statistic = document.querySelectorAll('.choose-priority-statistic')

        element_priority_statistic.forEach(element =>{

            const id_element = element.getAttribute('id')
            const priority = convert_id_to_integer(id_element)

            element.addEventListener('mouseenter', ()=>{
                
                for(let i = 0; i < priority; i++){

                    element_priority_statistic[i].style.backgroundColor = '#05DBF2'
                }
            })

            element.addEventListener('mouseleave', this.out_hover_priority)
        })
    }

    out_hover_priority() {
    
        const elements_prioritys = document.querySelectorAll(`.choose-priority-statistic`)

        for (let i = 3; i >= 0; i--) {

            const marked_element = elements_prioritys[i].getAttribute('marked')

            if (marked_element == "False") {

                elements_prioritys[i].style.backgroundColor = '#0487d9'

            } else {

                break
            }
        }
    }

    start_hover(){
        
        const elements_prioritys = document.querySelectorAll(`.choose-priority-statistic`)

        elements_prioritys.forEach(element =>{

            element.style.backgroundColor = '#05DBF2'
        })
    }
}

new Interactorstatistic()