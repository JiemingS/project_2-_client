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

  $('#changePassword_and_sign_out').hide()
  $('#all_team_function').hide()
  $('#all_hero_function').hide()
  $('#all_member_function').hide()
})
