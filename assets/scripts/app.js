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
})
