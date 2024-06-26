const API = {

    // Endpoints de views
    url_view_profile: `/profile`,
    url_view_personalization: '/personalizations',
    url_view_list: '/list',
    url_view_ranking: '/ranking',
    url_singout: '/sign-out',
    url_welcome: '/welcome',
    url_login: '/login',
    url_register: '/register',

    //Endpoint das views do profile
    url_view_profile_user: '/profile',
    url_view_profile_statistic: '/statistic',
    url_view_profile_config: '/configurations', 

    url_get_user: '/api/user',
    url_get_user_personalization: '/api/user/personalization',
    url_get_task: '/api/user/tasks',
    url_statistic: '/api/user/statistic',
    url_config: '/api/user/config',
    url_ranking: '/api/ranking',
    url_search_ranking: '/api/search',
    url_view_profile_ranking: '/api/view-profile',

    url_verify_login: '/api/login',
    url_recall_code: '/api/recall-code',
    url_recall_password: '/api/recall-pass',
    url_make_register: '/api/register',

    url_verify_password: '/api/user/security',
    url_create_code: '/api/confirmation',
    url_verify_code: '/api/verify',
}

export { API }