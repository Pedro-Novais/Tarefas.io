import { InteractorRanking } from "../interactor.js"
import { PopUpGlobal } from "../../utils/popup_global.js"
import { ViewProfileFromUser } from "./viewProfileFromUsers.js"
import { get_token } from "../../utils/getToken.js"
import { post } from "../../utils/functionsReq.js"
import { API } from "../../utils/endPoints.js"

export class ButtonsActionsRanking {

    constructor() {

        this.adding_event()
    }

    adding_event() {

        const btn_recall = document.querySelector('#refresh')
        const btn_search = document.querySelector('#search')

        btn_recall.addEventListener('click', this.recall_ranking)
        btn_search.addEventListener('click', this.search_user)

    }

    async search_user() {

        const user_to_search = document.querySelector('#input-name-search')

        const trim = user_to_search.value.trim()

        if (user_to_search.value == "" || trim == "") {

            user_to_search.setAttribute('class', 'watch-out')

            user_to_search.addEventListener('click', () => {

                user_to_search.removeAttribute('class', 'watch-out')

            })

            return false

        }

        const token = get_token()

        const data = {

            search: user_to_search.value
        }

        const response = await post(API.url_search_ranking, data, token)

        if (response.status == 404) {

            new PopUpGlobal('#container-ranking', 'Informação!', 'Nenhum usuário foi encontrado!')
            return false
        }

        if (!response.ok) {

            new PopUpGlobal('#container-ranking', 'Erro!', 'Algum erro ocorreu ao realizar a busca!')
            return false
        }

        const positions = document.querySelectorAll('.position-users')

        positions.forEach(element => {
            element.remove()
        })
   
        new InteractorRanking(response.responseData)

    }

    get_data(){
        
        const positions_elements = document.querySelectorAll('.position-users')

        positions_elements.forEach(element => {

            element.addEventListener('click', () => {

                const name = element.getAttribute('name')
                const position = element.getAttribute('position')
                const id = element.getAttribute('id')

                this.view_profile(name, position, id)
            })
        })
    }

    async view_profile(name, position, id){

        const token = get_token()

        const data = {
            name: name,
            position: position,
            id: id
        }  

        const response = await post(API.url_view_profile_ranking, data, token)

        if(!response.ok){

            new PopUpGlobal('#container-ranking', 'Erro!', `Algum erro ocorreu ao visualizar o perfil do usuário ${name}!`)
            return false
        }

        new ViewProfileFromUser(response.responseData)
    }

    recall_ranking() {

        const btn_recall = document.querySelector('#refresh')

        btn_recall.removeEventListener('click', this.recall_ranking)

        const position_element = document.querySelectorAll('.position-users')

        position_element.forEach(element => {

            element.remove()

        })
        const user_to_search = document.querySelector('#input-name-search')

        user_to_search.value = ""

        user_to_search.removeAttribute('class', 'watch-out')
        new InteractorRanking()

    }
}