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

  // api.indexTeam()
  //   .then(ui.onIndexTeamSuccess)
  //   .catch(ui.onIndexTeamFailure)
}

const onIndexTeam = function (event) {
  event.preventDefault()
  $('#input_form_team').show()

  api.indexTeam()
    .then(ui.onIndexTeamSuccess)
    .catch(ui.onIndexTeamFailure)
}

const onCleanIndexTeam = function (event) {
  event.preventDefault()
  $('#all_teams_information').html('')
  $('#one_team_information').html('')
  $('#input_form_team').hide()
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

// const onHeroIcon = function (event) {
//   event.preventDefault()
//   console.log('event.target ', event.target)
// }

const onShowAllHeros = function (event) {
  event.preventDefault()
  api.showAllHeros()
    .then(ui.onShowAllHerosSuccess)
    .catch(ui.onShowAllHerosFailure)

  // $('.hero_icon').on('click', onHeroIcon)
}

const onShowAllHerosReset = function (event) {
  // event.preventDefault()
  api.showAllHeros()
    .then(ui.onShowAllHerosSuccess)
    .catch(ui.onShowAllHerosFailure)
}

const onCleanAllHeros = function (event) {
  event.preventDefault()
  $('#append_hero').html('')
}

const onCreateMember = function (event) {
  event.preventDefault()
  // const createMemberTeamId = document.getElementById('create_member_team_id').value
  const teamIdDropList = document.getElementById('dropTeam')
  const teamIdNeed = teamIdDropList.options[teamIdDropList.selectedIndex].value
  // console.log(teamIdNeed)
  // const createMemberHeroId = document.getElementById('create_member_hero_id').value
  const heroIdDropList = document.getElementById('dropHero')
  const heroIdNeed = heroIdDropList.options[heroIdDropList.selectedIndex].value
  // console.log(heroIdNeed)
  const dataObj = {
    member: {
      team_id: teamIdNeed,
      hero_id: heroIdNeed
    }
  }
  api.createMember(dataObj)
    .then(ui.onCreateMemberSuccess)
    .catch(ui.onCreateMemberFailure)

  // api.showTeam(teamIdNeed)
  //   .then(ui.onShowTeamSuccess)
  //   .catch(ui.onShowTeamFailure)

  // api.showAllMembers()
  //   .then(ui.onShowAllMembersSuccess)
  //   .catch(ui.onShowAllMembersFailure)
    // console.log('asd')
}

const onShowAllMembers = function (event) {
  event.preventDefault()
  api.indexTeam()
    .then(ui.onFillDropListSuccess)
    .catch(ui.onFillDropListFailure)

  api.showAllHeros()
    .then(ui.onFillDropListHeroSuccess)
    .catch(ui.onFillDropListFailure)
  $('#input_form_member').show()

  api.showAllMembers()
    .then(ui.onShowAllMembersSuccess)
    .catch(ui.onShowAllMembersFailure)
}

const onDeleteMember = function (event) {
  event.preventDefault()
  const deleteMemberId = document.getElementById('dropMember').value
  api.deleteMember(deleteMemberId)
    .then(ui.onDeleteMemberSuccess)
    .catch(ui.onDeleteMemberFailure)
}

const onCleanAllMembers = function (event) {
  event.preventDefault()
  $('#input_form_member').hide()
  $('#all_members_information').html('')
}

const onShowNewsPart = function (event) {
  event.preventDefault()
  $('#news').show()
  $('#new_chart_js').hide()
  $('#all_team_function').hide()
  $('#all_hero_function').hide()
  $('#all_member_function').hide()
  $('#one_three_container').hide()
  $('#all_teams_information').html('')
  $('#chart_1').hide()
  $('#chart_2').hide()
  $('#chart3').hide()
  $('#myChart3').hide()
  $('#one_team_information').html('')
  $('#append_hero').html('')
  $('#all_members_information').html('')

  ui.setZero()
}

const onShowTeamPart = function (event) {
  event.preventDefault()
  $('#news').hide()
  $('#new_chart_js').hide()
  $('#chart_1').hide()
  $('#chart_2').hide()
  $('#chart3').hide()
  $('#myChart3').hide()
  $('#all_team_function').show()
  $('#one_three_container').show()
  $('#all_hero_function').show()
  $('#all_member_function').show()
  $('#one_three_container').show()

  ui.setZero()
}

const onShowHeroPart = function (event) {
  event.preventDefault()
  $('#new_chart_js').show()
  $('#news').hide()
  $('#one_three_container').hide()
  $('#all_team_function').hide()
  $('#all_hero_function').hide()
  $('#all_member_function').hide()
  $('#all_teams_information').html('')
  $('#one_team_information').html('')
  $('#append_hero').html('')
  $('#all_members_information').html('')

  api.showAllHeros()
    .then(ui.onFillChartDropDownHeroSuccess)
    .catch(ui.onFillDropListFailure)
}

const onLogout = function (event) {
  event.preventDefault()

  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

const onChartOneDropDownForm = function (event) {
  event.preventDefault()

  const heroIdDropList = document.getElementById('chart1_dropdown')
  const heroIdNeed = heroIdDropList.options[heroIdDropList.selectedIndex].value
  // console.log('heroIdNeed ', heroIdNeed)
  api.showOneHero(heroIdNeed)
    .then(ui.onGetHeroInfoForChartOneSuccess)
    .catch(ui.showOneHeroFailure)
}

const onChartTwoDropDownForm = function (event) {
  event.preventDefault()

  const heroIdDropList = document.getElementById('chart2_dropdown')
  const heroIdNeed = heroIdDropList.options[heroIdDropList.selectedIndex].value
  // console.log('heroIdNeed ', heroIdNeed)
  api.showOneHero(heroIdNeed)
    .then(ui.onGetHeroInfoForChartTwoSuccess)
    .catch(ui.showOneHeroFailure)
}

const onChartThreeDropDownForm = function (event) {
  event.preventDefault()

  api.showOneHero(16)
    .then(ui.onGetHeroInfoForChartThreeSuccess)
    .catch(ui.showOneHeroFailure)
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
  onDestroyTeam,
  onShowAllHeros,
  onCleanAllHeros,
  onCreateMember,
  onShowAllMembers,
  onDeleteMember,
  onCleanAllMembers,
  onShowTeamPart,
  onShowNewsPart,
  onLogout,
  onShowAllHerosReset,
  onShowHeroPart,
  onChartOneDropDownForm,
  onChartTwoDropDownForm,
  onChartThreeDropDownForm
}
