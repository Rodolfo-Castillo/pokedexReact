import axios from "axios";

const HTTP = axios.create({
    baseURL: "https://pokeapi.co/api/v2/pokemon",
});

// HTTP.interceptors.request.use((request) => {
//     if (localStorage.getItem("token"))
//         request.headers.Authorization = `Bearer ${localStorage.getItem(
//             "token"
//         )}`;
//     if (localStorage.getItem("tokenDB"))
//         request.headers["tokendb"] = `${localStorage.getItem("tokenDB")}`;
//     console.log(request);
//     return request;
// });

HTTP.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // if error.response.status == 401 Unauthorized send to login
        return Promise.reject(error);
    }
);

export const HttpPost = async (url, params, dispatch) => {
    try {
        const res = await HTTP.post(url, params);
        return res.data;
    } catch (error) {
        return error.response.data;
    }
};

export const HttpPostMedia = async (url, params, dispatch) => {
    try {
        const res = await HTTP.post(url, params, {
            headers: {
                "Content-type": "multipart/form-data",
            },
        });
        return res.data;
    } catch (error) {
        return error.response.data;
    }
};

export const HttpPut = async (url, params, dispatch) => {
    try {
        const res = await HTTP.put(url, params);
        return res.data;
    } catch (error) {
        return error.response.data;
    }
};

export const HttpDelete = async (url, params, dispatch) => {
    try {
        const res = await HTTP.delete(url, params);
        return res.data;
    } catch (error) {
        return error.response.data;
    }
};

export const HttpGet = async (url, params, dispatch) => {
    try {
        const res = await HTTP.get(url, params);
        return res.data;
    } catch (error) {
        return error.response.data;
    }
};
