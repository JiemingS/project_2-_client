'use strict'

// require store object, so we can save the user
// and their token
const store = require('./store')
const showTeamsTemplate = require('./templates/team-listing.handlebars')
const selectTeamTemplate = require('./templates/team-showing.handlebars')

const successMessage = function (newText) {
  $('#user_message').text(newText)
  $('#user_message').removeClass('failure')
  $('#user_message').addClass('success')
}

const failureMessage = function (newText) {
  $('#user_message').text(newText)
  $('#user_message').removeClass('success')
  $('#user_message').addClass('failure')
}

const onSignUpSuccess = function () {
  successMessage('Signed up successfully!')
  setTimeout(function () { $('#user_message').text('') }, 2000)
  $('#sign-up').trigger('reset')
}

const onSignUpFailure = function () {
  failureMessage('Sign up failed')
  setTimeout(function () { $('#user_message').text('') }, 2000)
  $('#sign-up').trigger('reset')
}

const onSignInSuccess = function (responseData) {
  successMessage('Signed in successfully!')
  setTimeout(function () { $('#user_message').text('') }, 2000)
  $('#sign-in').trigger('reset')
  // save the `user` we got from the API inside of `store`
  // so we can use it later, from any file
  // console.log(responseData)
  store.user = responseData.user
  // console.log('store is', store)
}

const onSignInFailure = function () {
  failureMessage('Sign in failed')
  setTimeout(function () { $('#user_message').text('') }, 2000)
  $('#sign-in').trigger('reset')
}

const onChangePasswordSuccess = function () {
  successMessage('Changed password successfully!')
  setTimeout(function () { $('#user_message').text('') }, 2000)
  $('#change-password').trigger('reset')
}

const onChangePasswordFailure = function () {
  failureMessage('Change password failed')
  setTimeout(function () { $('#user_message').text('') }, 2000)
  $('#change-password').trigger('reset')
}

const onSignOutSuccess = function () {
  successMessage('Sign out successfully!')
  setTimeout(function () { $('#user_message').text('') }, 2000)
}

const onSignOutFailure = function () {
  failureMessage('Sign out failed')
  setTimeout(function () { $('#user_message').text('') }, 2000)
}

const onCreateTeamSuccess = function (responseData) {
  successMessage('Create team successfully!')
  setTimeout(function () { $('#user_message').text('') }, 2000)
  // console.log('responseData is ', responseData)
  $('#create_team').trigger('reset')
}

const onCreateTeamFailure = function (responseData) {
  failureMessage('Create team failed')
  setTimeout(function () { $('#user_message').text('') }, 2000)
  // console.log('responseData is ', responseData)
  $('#create_team').trigger('reset')
}

const onIndexTeamSuccess = function (responseData) {
  successMessage('Index team successfully!')
  setTimeout(function () { $('#user_message').text('') }, 2000)
  console.log('responseData is ', responseData)
  $('#index_team').trigger('reset')
  $('#one_team_information').html('')
  $('#all_teams_information').html('')

  const showTeamsHtml = showTeamsTemplate({ teams: responseData.teams })
  console.log(showTeamsHtml)
  $('#all_teams_information').append(showTeamsHtml)
}

const onIndexTeamFailure = function (responseData) {
  failureMessage('Index team failed')
  setTimeout(function () { $('#user_message').text('') }, 2000)
  console.log('responseData is ', responseData)
  $('#index_team').trigger('reset')
}

const onShowTeamSuccess = function (responseData) {
  successMessage('Show team successfully!')
  setTimeout(function () { $('#user_message').text('') }, 2000)
  console.log('responseData is ', responseData)
  $('#show_team').trigger('reset')
  $('#one_team_information').html('')
  $('#all_teams_information').html('')

  const selectTeamHtml = selectTeamTemplate({ team: responseData })
  console.log('selectTeamHtml is ', selectTeamHtml)
  $('#one_team_information').append(selectTeamHtml)
}

const onShowTeamFailure = function (responseData) {
  failureMessage('Show team failed')
  setTimeout(function () { $('#user_message').text('') }, 2000)
  console.log('responseData is ', responseData)
  $('#show_team').trigger('reset')
}

const onUpdateTeamSuccess = function (responseData) {
  successMessage('Update team successfully!')
  setTimeout(function () { $('#user_message').text('') }, 2000)
  console.log('responseData is ', responseData)
  $('#update_team').trigger('reset')
  $('#one_team_information').html('')

  const selectTeamHtml = selectTeamTemplate({ team: responseData })
  console.log('selectTeamHtml is ', selectTeamHtml)
  $('#one_team_information').append(selectTeamHtml)
}

const onUpdateTeamFailure = function (responseData) {
  failureMessage('Update team failed')
  setTimeout(function () { $('#user_message').text('') }, 2000)
  console.log('responseData is ', responseData)
  $('#update_team').trigger('reset')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onCreateTeamSuccess,
  onCreateTeamFailure,
  onIndexTeamSuccess,
  onIndexTeamFailure,
  onShowTeamSuccess,
  onShowTeamFailure,
  onUpdateTeamSuccess,
  onUpdateTeamFailure
}
