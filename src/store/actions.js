import firebase from 'firebase'
import router from '@/router'

export const actions = {
  userSignUp ({commit}, payload) {
    commit('setLoading', true)
    firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
      .then(firebaseUser => {
        commit('setUser', firebaseUser)
        commit('setLoading', false)
        router.push('/')
      })
      .catch(error => {
        commit('setError', error.message)
        commit('setLoading', false)
      })
  }
}