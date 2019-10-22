'use strict'

// require store object, so we can save the user
// and their token
const store = require('./store')
const api = require('./api')
const showTeamsTemplate = require('./templates/team-listing.handlebars')
const selectTeamTemplate = require('./templates/team-showing.handlebars')
const showHerosTemplate = require('./templates/hero-listing.handlebars')
const showMembersTemplate = require('./templates/member-listing.handlebars')
const showHerosIconTemplate = require('./templates/hero-icon.handlebars')
const fillDropListTeam = require('./templates/drop-list-team.handlebars')
const fillDropListHero = require('./templates/drop-list-hero.handlebars')
const fillDropListMember = require('./templates/drop-list-member.handlebars')

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
  $('#append_hero').html('')
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

const showOneHeroSuccess = function (responseData) {
  successMessage('Show one hero successfully!')
  setTimeout(function () { $('#user_message').text('') }, 2000)
  console.log('responseData is ', responseData.hero)
  // const reallyImportant = showHerosIconTemplate({ heros: responseData.hero })
  const oneHeroReally = showHerosTemplate({ hero: responseData })
  console.log('really reallyImportant ', oneHeroReally)
  $('.oneHeroInfo').append(oneHeroReally)
  $('.heroInfo').show()
}

const showOneHeroFailure = function (responseData) {
  failureMessage('Show one hero failed!')
  setTimeout(function () { $('#user_message').text('') }, 2000)
  console.log('responseData is ', responseData)
}

const onHeroIcon = function (event) {
  console.log('into')
  $('.oneHeroInfo').html('')
  event.preventDefault()
  console.log('event.target ', event.target)
  const id = parseInt(event.target.id)
  console.log('id', id)
  api.showOneHero(id)
    .then(showOneHeroSuccess)
    .catch(showOneHeroFailure)
}

const onShowAllHerosSuccess = function (responseData) {
  // $('#all_heros_information').html('')
  successMessage('Show heros successfully!')
  setTimeout(function () { $('#user_message').text('') }, 2000)
  console.log('All heros are: ', responseData)
  $('#show_all_heros').trigger('reset')
  $('#append_hero').html('')
  // $('.oneHeroInfo').html('')

  // showHerosIconTemplate
  // const showHerosIcon = showHerosIconTemplate({heros: responseData.heros})
  // const showHerosHtml = showHerosTemplate({ heros: responseData.heros })
  const showHerosHtml = showHerosIconTemplate({ heros: responseData.heros })
  console.log('showHerosHtml', showHerosHtml)
  $('#append_hero').append(showHerosHtml)

  $('.hero_icon').on('click', onHeroIcon)
  // const x = document.getElementsByClassName('icon_image')
  // const y = document.getElementsByClassName('icon')
  // console.log('x', x)
  // const objArray = x
  // for (let i = 0; i < objArray.length; i++) {
  //   console.log('x[' + i + ']', x[i])
  //   y[i].addEventListener('click', function (event) {
  //     // alert(i)
  //     //   console.log('event target', event.target)
  //     // $('.oneHeroInfo').html(i)
  //     $('.hero_info_hide').show()
  //     $('.oneHeroInfo').html('')
  //     $('.oneHeroInfo').append(objArray[i])
  //     $('.heroInfo').show()
  //     $('#all_heros_information').html('')
  //   })
  // }
  // $('#all_heros_information').html('')
  // $('#all_heros_information').append(showHerosIcon)
  // $('.hero_info_hide').hide()

  // const x = document.getElementsByClassName('icon_image')
  // console.log('x', x)
  // const objArray = x
  // for (let i = 0; i < objArray.length; i++) {
  //   console.log('x[' + i + ']', x[i])
  //   x[i].addEventListener('click', function (event) {
  //     // alert(i)
  //     //   console.log('event target', event.target)
  //     // $('.oneHeroInfo').html(i)
  //     $('.hero_info_hide').show()
  //     $('.oneHeroInfo').html('')
  //     $('.oneHeroInfo').append(objArray[i])
  //     $('.heroInfo').show()
  //     $('#all_heros_information').html('')
  //   })
  // }
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

const onDeleteMemberByX = function (event) {
  event.preventDefault()
  console.log('event.target.value ', event.target.getAttribute('value'))
  const idValue = event.target.getAttribute('value')
  // const deleteMemberIdXXX = document.getElementById('XXX_member_id').value
  // console.log('deleteMemberIdXXX', deleteMemberIdXXX)
  api.deleteMember(idValue)
    .then(onDeleteMemberSuccess)
    .catch(onDeleteMemberFailure)
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

  const dropListMemberHtml = fillDropListMember({ members: responseData.members })
  console.log('dropListMemberHtml ', dropListMemberHtml)
  // const dropListHeroHtml = fillDropListHero({ heros: responseData.heros })
  // console.log('dropListHeroHtml ', dropListHeroHtml)
  $('#dropMember').html('')
  $('#dropMember').append(dropListMemberHtml)

  $('#XXX').on('click', onDeleteMemberByX)
  // const allX = document.getElementsByClassName('XXX')
  // console.log('allX !!!!!', allX)
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

const onFillDropListSuccess = function (responseData) {
  // $('#drop_list_team').html('<option value="hide">-- Team --</option>')
  successMessage('Fill drop list successfully!')
  setTimeout(function () { $('#user_message').text('') }, 2000)

  const dropListTeamHtml = fillDropListTeam({ teams: responseData.teams })
  console.log('dropListTeamHtml ', dropListTeamHtml)
  $('#dropTeam').html('')
  $('#dropTeam').append(dropListTeamHtml)
  // $('#dropTeam').append('<option value="0"> Select </option>')
//   var select = document.getElementById("dropTeam");
// select.options[select.options.length] = new Option('Text 1', 'Value1');
}

const onFillDropListFailure = function (responseData) {
  failureMessage('Fill drop list failed!')
  setTimeout(function () { $('#user_message').text('') }, 2000)
}

const onFillDropListHeroSuccess = function (responseData) {
  successMessage('Fill drop list successfully!')
  setTimeout(function () { $('#user_message').text('') }, 2000)
  const dropListHeroHtml = fillDropListHero({ heros: responseData.heros })
  console.log('dropListHeroHtml ', dropListHeroHtml)
  $('#dropHero').html('')
  $('#dropHero').append(dropListHeroHtml)
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
  onDeleteMemberFailure,
  onFillDropListSuccess,
  onFillDropListFailure,
  onFillDropListHeroSuccess
}
