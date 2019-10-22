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
  // $('#XXX').on('click', events.onDeleteMemberByX)

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

  // $('#drop_list_hero').append('<option selected="selected" value="0"> Select </option>')
  // $(document).ready(function () {
  //   $('.dropdown ul>li').click(function () {
  //     $('#text').click(function () {
  //       $(this).toggleClass('cb-active')
  //     })
  //     $('.dropdown ul>li').each(function () {
  //       $(this).removeClass('drop-selected')
  //     })
  //     $(this).toggleClass('drop-selected')
  //     $('.dropdown>label:first-child').css({
  //       '-webkit-transform': 'scale(0.6)',
  //       'transform': 'scale(0.6)',
  //       'position': 'absolute'}); $('.dropdown>span').text($(this).attr('val'))
  //   })
  // })
  $('select').each(function () {
    const $this = $(this)
    const numberOfOptions = $(this).children('option').length

    $this.addClass('select-hidden')
    $this.wrap('<div class="select"></div>')
    $this.after('<div class="select-styled"></div>')

    const $styledSelect = $this.next('div.select-styled')
    $styledSelect.text($this.children('option').eq(0).text())

    const $list = $('<ul />', {
      'class': 'select-options'
    }).insertAfter($styledSelect)

    for (let i = 0; i < numberOfOptions; i++) {
      $('<li />', {
        text: $this.children('option').eq(i).text(),
        rel: $this.children('option').eq(i).val()
      }).appendTo($list)
    }

    const $listItems = $list.children('li')
    $styledSelect.click(function (e) {
      e.stopPropagation()
      $('div.select-styled.active').not(this).each(function () {
        $(this).removeClass('active').next('ul.select-options').hide()
      })
      $(this).toggleClass('active').next('ul.select-options').toggle()
    })
    $listItems.click(function (e) {
      e.stopPropagation()
      $styledSelect.text($(this).text()).removeClass('active')
      $this.val($(this).attr('rel'))
      $list.hide()
    })
    $(document).click(function () {
      $styledSelect.removeClass('active')
      $list.hide()
    })
  })
})
