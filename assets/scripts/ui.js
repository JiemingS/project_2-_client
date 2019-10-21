'use strict'

// require store object, so we can save the user
// and their token
const store = require('./store')
const showTeamsTemplate = require('./templates/team-listing.handlebars')
const selectTeamTemplate = require('./templates/team-showing.handlebars')
const showHerosTemplate = require('./templates/hero-listing.handlebars')
const showMembersTemplate = require('./templates/member-listing.handlebars')

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
  const bodyElement = document.getElementById('body')
  bodyElement.style.backgroundImage = "url('')"
  // $('#changePassword_and_sign_out').show()
  // $('#all_team_function').show()
  // $('#all_hero_function').show()
  // $('#all_member_function').show()
  $('#sign_in_and_sign_up').hide()
  $('#nav').show()
  $('#news').show()
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

  const bodyElement = document.getElementById('body')
  bodyElement.style.backgroundImage = "url('https://i.imgur.com/zRvYp9k.png')"

  $('#changePassword_and_sign_out').hide()
  $('#all_team_function').hide()
  $('#all_hero_function').hide()
  $('#all_member_function').hide()
  $('#sign_in_and_sign_up').show()
  $('#nav').hide()
  $('#news').hide()
  $('#one_three_container').hide()
  $('#all_teams_information').html('')
  $('#one_team_information').html('')
  $('#all_heros_information').html('')
  $('#all_members_information').html('')
  $('#input_form_team').hide()
  $('#input_form_member').hide()
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
  $('#popup1').hide()
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
  $('#all_teams_information').html('')

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

const onDestroyTeamSuccess = function (responseData) {
  successMessage('Delete team successfully!')
  setTimeout(function () { $('#user_message').text('') }, 2000)
  // console.log('responseData is ', responseData)
  $('#destroy_team').trigger('reset')
  $('#one_team_information').html('')
  $('#all_teams_information').html('')
}

const onDestroyTeamFailure = function (responseData) {
  failureMessage('Delete team failed')
  setTimeout(function () { $('#user_message').text('') }, 2000)
  // console.log('responseData is ', responseData)
  $('#destroy_team').trigger('reset')
}

const onShowAllHerosSuccess = function (responseData) {
  successMessage('Show heros successfully!')
  setTimeout(function () { $('#user_message').text('') }, 2000)
  console.log('All heros are: ', responseData)
  $('#show_all_heros').trigger('reset')
  $('#all_heros_information').html('')

  const showHerosHtml = showHerosTemplate({ heros: responseData.heros })
  console.log(showHerosHtml)
  $('#all_heros_information').append(showHerosHtml)
}

const onShowAllHerosFailure = function (responseData) {
  failureMessage('Show heros failed')
  setTimeout(function () { $('#user_message').text('') }, 2000)
  $('#show_all_heros').trigger('reset')
}

const onCreateMemberSuccess = function (responseData) {
  successMessage('Create Member successfully!')
  setTimeout(function () { $('#user_message').text('') }, 2000)
  console.log('onCreateMemberSuccess is ', responseData.member.team)
  $('#create_member').trigger('reset')
  // $('#one_team_information').html('')

  // const selectTeamHtml = selectTeamTemplate({ team: responseData.member })
  // console.log('selectTeamHtml is ', selectTeamHtml)
  // $('#one_team_information').append(selectTeamHtml)
}

const onCreateMemberFailure = function (responseData) {
  failureMessage('Create member failed')
  setTimeout(function () { $('#user_message').text('') }, 2000)
  // console.log('responseData is ', responseData)
  $('#create_member').trigger('reset')
}

const onShowAllMembersSuccess = function (responseData) {
  successMessage('Show All Members successfully!')
  setTimeout(function () { $('#user_message').text('') }, 2000)
  console.log('responseData is ', responseData)
  console.log('responseData is ', responseData.members)
  $('#all_members_information').html('')

  const showMembersHtml = showMembersTemplate({ members: responseData.members })
  console.log('is ', showMembersHtml)
  $('#all_members_information').append(showMembersHtml)
}

const onShowAllMembersFailure = function (responseData) {
  failureMessage('Show All Members failed')
  setTimeout(function () { $('#user_message').text('') }, 2000)
  console.log('responseData is ', responseData)
}

const onDeleteMemberSuccess = function (responseData) {
  successMessage('Delete member successfully!')
  setTimeout(function () { $('#user_message').text('') }, 2000)
  // console.log('responseData is ', responseData)
  $('#delete_member').trigger('reset')
}

const onDeleteMemberFailure = function (responseData) {
  failureMessage('Delete member failed')
  setTimeout(function () { $('#user_message').text('') }, 2000)
  // console.log('responseData is ', responseData)
  $('#delete_member').trigger('reset')
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
  onUpdateTeamFailure,
  onDestroyTeamSuccess,
  onDestroyTeamFailure,
  onShowAllHerosSuccess,
  onShowAllHerosFailure,
  onCreateMemberSuccess,
  onCreateMemberFailure,
  onShowAllMembersSuccess,
  onShowAllMembersFailure,
  onDeleteMemberSuccess,
  onDeleteMemberFailure
}
