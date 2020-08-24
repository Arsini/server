const userModel = appG.db.model('user', {
    userName: {
        type: String,
        default: '',
    },
    password:{
        type: 'Mixed',
        default: 0,
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
    return userModel.deleteOne(data).then(res => {
        return res
    }).catch(err => {
        console.log(err)
        return false
    })
}

const updataUser = data => {
    const { _id } = data
    return userModel.updateOne({ _id }, data).then(res => {
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
    updataUser,
}