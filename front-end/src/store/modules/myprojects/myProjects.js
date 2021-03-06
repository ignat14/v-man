import axios from "axios";

const myProjectsDefaultState = () => {
    return {
        myProjects: []
    }
}

const state = myProjectsDefaultState()

export default {

    state,

    mutations: {

        updateMyProjects(state, myProjects) { state.myProjects = myProjects },
        resetMyProjects(state) { Object.assign(state, myProjectsDefaultState()) }

    },

    actions: {

        getMyProjects({commit}) {

            return new Promise((resolve, reject) => {

                axios({

                    url: `${this.state.api}users/self/projects`,
                    method: 'GET',
                    headers: { 'x-access-token' : localStorage.getItem('token') }
    
                })
    
                .then(response => {

                    commit( 'updateMyProjects', response.data )

                    resolve(response)
    
                })
    
                .catch(error => reject(error))

            })

        } 

    }
    
}