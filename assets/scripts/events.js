'use strict'

const getFormFields = require('../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('./store')

const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  // console.log('My sign-up formData is ' + formData)
  api.signUp(formData)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  // console.log('My sign-in formData is ' + formData)
  api.signIn(formData)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  // console.log('My change_pwd formData is ' + formData)
  api.changePassword(formData)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()

  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

const onCreateTeam = function (event) {
  event.preventDefault()
  // const form = event.target
  // const formData = getFormFields(form)
  // console.log('My create_team formData is ' + formData.team)
  const teamName = document.getElementById('create_team_name').value
  const teamCreateDate = document.getElementById('create_team_create_date').value
  const teamComment = document.getElementById('create_team_comment').value
  const dataObj = {
    team: {
      name: teamName,
      create_date: teamCreateDate,
      comment: teamComment,
      user_id: store.user.id
    }
  }
  api.createTeam(dataObj)
    .then(ui.onCreateTeamSuccess)
    .catch(ui.onCreateTeamFailure)
}

const onIndexTeam = function (event) {
  event.preventDefault()

  api.indexTeam()
    .then(ui.onIndexTeamSuccess)
    .catch(ui.onIndexTeamFailure)
}

const onCleanIndexTeam = function (event) {
  event.preventDefault()
  $('#all_teams_information').html('')
  $('#one_team_information').html('')
}

const onShowTeam = function (event) {
  event.preventDefault()
  const showTeamId = document.getElementById('show_team_id').value
  api.showTeam(showTeamId)
    .then(ui.onShowTeamSuccess)
    .catch(ui.onShowTeamFailure)
}

const onUpdateTeam = function (event) {
  event.preventDefault()
  const updateTeamId = document.getElementById('update_team_id').value
  const updateTeamName = document.getElementById('update_team_name').value
  const updateTeamComment = document.getElementById('update_team_comment').value
  const dataObj = {
    team: {
      name: updateTeamName,
      comment: updateTeamComment
    }
  }
  api.updateTeam(dataObj, updateTeamId)
    .then(ui.onUpdateTeamSuccess)
    .catch(ui.onUpdateTeamFailure)
}

const onDestroyTeam = function (event) {
  event.preventDefault()
  const destroyTeamId = document.getElementById('destroy_team_id').value
  api.destroyTeam(destroyTeamId)
    .then(ui.onDestroyTeamSuccess)
    .catch(ui.onDestroyTeamFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onCreateTeam,
  onIndexTeam,
  onCleanIndexTeam,
  onShowTeam,
  onUpdateTeam,
  onDestroyTeam
}
