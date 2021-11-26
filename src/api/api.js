import * as axios from 'axios';


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '190abbc0-e0de-4efd-8af4-41c93990abe3'
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    follow(userId) {
        return instance.post(`follow/${userId}`, {} )
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId) {
        console.warn('Obsolete method. Please use profileAPI object')
        return profileAPI.getProfile(userId)
    }
}
export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
}
export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance.put(`profile/status/`, {status: status})
    }
}





// async function getTimeAfterProcessing() {
//     return new Promise((resolve, reject) => {
//         try {
//             setTimeout(() => {
//                 resolve(new Date())
//             }, 4000)
//         } catch (error) {
//             console.log(error)
//             reject(error)
//         }
//     })
// }
// const instanse2 = {
//     get() {
//         return new Promise(async(resolve, reject) => {
//             try {
//                 const time = await getTimeAfterProcessing()
//                 resolve(time)
//             } catch(error) {
//                 reject(error)
//             }
//         })
//     }
// }

// console.log(new Date())
// instanse2.get()
//     .then(time => console.log(time))
//     .catch(error => console.log('our error', error))