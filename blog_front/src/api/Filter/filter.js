import axios from 'axios'
import * as RESULT_CODE from 'api/Constant/resultCode'
import { _getToken,_removeToken } from 'base/js/cookie'
import * as userActions from '@/store/actions/user'
import PubSub from 'pubsub-js'
// 每次请求携带LOGIN_TOKEN
axios.interceptors.request.use(
    config => {
        if (_getToken()) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
            config.headers.__TOKEN__  = _getToken();
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    }
);

// 每次检查TOKEN过期
axios.interceptors.response.use(
    response => {
    	if ( response.data.code == RESULT_CODE.TOKEN_TOLOGIN 
            || response.data.code == RESULT_CODE.TOKEN_NOTUSER
            || response.data.code == RESULT_CODE.TOKEN_REDIS_NOT_MATCH ) {
    		// 删除token和用户信息
            // 跳转登录
            global.store.dispatch(userActions.save(undefined))
            _removeToken() 
            PubSub.publish(global.RediectLoginSubscribe,false);
            
    	} else if (response.data.code == RESULT_CODE.TOKEN_MATURITY) {
            // 删除token和用户信息
            global.store.dispatch(userActions.save(undefined))
            _removeToken()
        }
        return response;
    },
    err => {
    	return Promise.reject(err);
    }
);