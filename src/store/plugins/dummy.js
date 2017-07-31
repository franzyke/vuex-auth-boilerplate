import auth from '@/store/modules/auth/dummyPluginHelper.js'

let modules = {
  auth
}

export default (store) => {
  store.subscribe((mutation, state) => {
    if (typeof mutation.type === 'undefined') {
      console.log('Uknown mutation', mutation)
      return
    }

    var moduleName = mutation.type.substr(0, mutation.type.indexOf('/'))
    var mutationName = mutation.type.substr((mutation.type.indexOf('/') + 1), mutation.length)

    if (typeof modules[moduleName] !== 'undefined' && typeof modules[moduleName][mutationName] === 'function') {
      let args = {
        store,
        mutation,
        state
      }
      modules[moduleName][mutationName](args)
    }
  })
}
