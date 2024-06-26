import { InteractorWelcome } from "./welcome/interactor.js"
import { InteractorLogin } from "./login/interactor.js"
import { InteractorRegister } from "./register/interactor.js"
import { InteractorList } from "./list/interactor.js"
import { InteractorRanking } from "./ranking/interactor.js"
import { InteractorProfile } from "./profile/interactor.js"
import { ChangePassword } from "./recall_password/interactor.js"
import { ChangeView } from "./nChangeView.js"
import { ChangeViewOut } from "./nChangeViewOut.js"
import { Responsive } from "./responsive/responsive.js"
import { modal } from "./utils/modals_views.js"

class Relocated {

    builder_page() {
        const dir = window.location.pathname
        
        const dir_name = convert_url_to_params(dir)

        const main = document.querySelector('main')

        if (dir_name == 'list') {
      
            main.setAttribute('identifier', dir_name)
            main.innerHTML = modal[dir_name]

            new ChangeView(dir_name)
            new InteractorList()

        }

        else if (dir_name == 'ranking') {
    
            main.setAttribute('identifier', dir_name)
            main.innerHTML = modal[dir_name]

            new ChangeView(dir_name)
            new InteractorRanking()

        }
   
        else if (dir_name == 'profile' || dir_name == 'statistic' || dir_name == 'config' || dir_name == 'personalizations') {
            
            main.setAttribute('identifier', 'profile')
            main.innerHTML = modal['profile']

            new ChangeView(dir_name)
            new InteractorProfile()

        }

        else if(dir_name == 'welcome'){
            
            main.setAttribute('identifier', 'welcome')
            main.innerHTML = modal[dir_name]

            new ChangeViewOut(dir_name)
            new InteractorWelcome()

        }

        else if(dir_name == 'login'){

            main.setAttribute('identifier', 'login')
            main.innerHTML = modal[dir_name]

            new ChangeViewOut(dir_name)
            new InteractorLogin()

        }

        else if(dir_name == 'recall'){

            new ChangePassword()

        }

        else if(dir_name == 'register'){

            main.setAttribute('identifier', 'register')
            main.innerHTML = modal[dir_name]

            new ChangeViewOut(dir_name)
            new InteractorRegister()

        }
    }

    get_width(){
        
        const width = window.innerWidth

        if(width < 800){

            new Responsive()
        }
    }

    event_popstate(){
        window.addEventListener('popstate', event  => {

            const dir = window.location.pathname
            window.location.href = dir
        })
    }
}

function convert_url_to_params(url) {

    if (url == '/list') {

        return 'list'
    }

    else if (url == '/ranking') {

        return 'ranking'
    }

    else if (url == '/profile') {

        return 'profile'
    }

    else if (url == '/statistic') {

        return 'statistic'
    }

    else if (url == '/configurations') {

        return 'config'
    }
    else if(url == '/personalizations' || url == '/personalizations?type=email' || url == '/personalizations?type=password'){

        return 'personalizations'
    }
    else if(url == '/welcome' || url == '/'){

        if(url == '/'){
            
            history.pushState({}, '', 'welcome')
        }

        return 'welcome'
    }
    else if(url == '/login'){

        return 'login'
    }

    else if('/recall'){

        return 'recall'
    }

    else if(url == '/register' || url == '/register?insert_code=true'){
        
        return 'register'
    }
}

document.addEventListener('DOMContentLoaded', () => {
    
    const instance = new Relocated();

    instance.builder_page()
    instance.get_width()
    instance. event_popstate()
});