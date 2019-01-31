import axios from 'axios';
export const FETCH_POST = 'fetch_posts';
export const CREATE_POST = 'create_posts';
export const DELETE_POST = 'delete_post';

export const SHOW_POST='show_post';
const ROOT_URL=`http://reduxblog.herokuapp.com/api`;
const API_KEY='?key=karanPost0102';
export function fetchPosts() {
    const request=axios.get(`${ROOT_URL}/posts${API_KEY}`);
    return{
        type:FETCH_POST,
        payload:request
    };
}
export function createPost(values,callback) {
    const request=axios.post(`${ROOT_URL}/posts${API_KEY}`,values)
        .then(()=>callback());

    return{
        type:CREATE_POST,
        payload:request
    };
}

export function showPost(id) {
    const request=axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`)

    return{
        type:SHOW_POST,
        payload:request
    };
}
export function deletePost(id,callback) {
    const request=axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
        .then(()=>callback());

    return{
        type:DELETE_POST,
        payload:id
    };
}
