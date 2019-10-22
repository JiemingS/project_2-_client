'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const events = require('./events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', events.onSignUp)
  $('#sign-in').on('submit', events.onSignIn)
  $('#change-password').on('submit', events.onChangePassword)
  $('#sign-out').on('submit', events.onSignOut)
  $('#create_team').on('submit', events.onCreateTeam)
  $('#index_team').on('submit', events.onIndexTeam)
  $('#clean_index_team').on('submit', events.onCleanIndexTeam)
  $('#show_team').on('submit', events.onShowTeam)
  $('#update_team').on('submit', events.onUpdateTeam)
  $('#destroy_team').on('submit', events.onDestroyTeam)
  $('#show_all_heros').on('submit', events.onShowAllHeros)
  $('#clean_all_heros').on('submit', events.onCleanAllHeros)
  $('#create_member').on('submit', events.onCreateMember)
  $('#show_all_members').on('submit', events.onShowAllMembers)
  $('#delete_member').on('submit', events.onDeleteMember)
  $('#clean_all_members').on('submit', events.onCleanAllMembers)
  $('#nav_news').on('click', events.onShowNewsPart)
  $('#nav_teams').on('click', events.onShowTeamPart)
  $('#nav_logout').on('click', events.onLogout)

  $('#changePassword_and_sign_out').hide()
  $('#all_team_function').hide()
  $('#all_hero_function').hide()
  $('#all_member_function').hide()
  $('#nav').hide()
  $('#news').hide()
  $('#one_three_container').hide()
  $('#input_form_team').hide()
  $('#input_form_member').hide()
  $('.heroInfo').hide()

  $('.div_news').on('click', function () {
    $(this).toggleClass('show-description')
  })

  $('.trigger_popup_fricc').click(function () {
    $('.hover_bkgr_fricc').show()
  })
  $('.popupCloseButton').click(function () {
    $('.hover_bkgr_fricc').hide()
  })
  $('.popupCloseButtonhero').click(function () {
    $('.heroInfo').hide()
  })
})
