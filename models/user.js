const userModel = appG.db.model('user', {
    userName: {
        type: String,
        default: '',
    }
})

const createUser = postData => {
    const insertUser = new userModel(postData)
    return insertUser.save().then(res => {
        return res
    }).catch(err => {
        console.log(`fail ${err}`)
        return false
    })
}

const getUser = data => {
    return userModel.find(data).then(res => {
        return res
    }).catch(err => {
        console.log(err)
        return false
    })
}

const removeUser = data => {
    return userModel.remove(data).then(res => {
        return res
    }).catch(err => {
        console.log(err)
        return false
    })
}

module.exports = {
    createUser,
    getUser,
    removeUser,
}
