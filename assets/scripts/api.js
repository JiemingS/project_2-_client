'use strict'

const config = require('./config')
// const ui = require('./ui')
// require `store` so we have access to our `token`
// so the API knows who we are
const store = require('./store')

const signUp = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data: formData
  })
}

const signIn = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    data: formData
  })
}

const changePassword = function (formData) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/change-password',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createTeam = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/teams',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const indexTeam = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/teams',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const showTeam = function (showTeamId) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/teams/' + showTeamId,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateTeam = function (dataObj, updateTeamId) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/teams/' + updateTeamId,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: dataObj
  })
}

const destroyTeam = function (destroyTeamId) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/teams/' + destroyTeamId,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const showAllHeros = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/heros',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createMember = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/members',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const showAllMembers = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/members',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteMember = function (deleteMemberId) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/members/' + deleteMemberId,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const showOneHero = function (id) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/heros/' + id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  createTeam,
  indexTeam,
  showTeam,
  updateTeam,
  destroyTeam,
  showAllHeros,
  createMember,
  showAllMembers,
  deleteMember,
  showOneHero
}
