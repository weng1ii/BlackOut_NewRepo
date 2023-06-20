var theater = theaterJS()

theater
  .on('type:start, erase:start', function () {
    theater.getCurrentActor().$element.classList.add('actor__content--typing')
  })
  .on('type:end, erase:end', function () {
    theater.getCurrentActor().$element.classList.remove('actor__content--typing')
  })
  .on('type:start, erase:start', function () {
    if (theater.getCurrentActor().name === 'vader') {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  })

theater
  .addActor('vader', { speed: 0.8, accuracy: 0.6 })
  .addActor('luke')
  .addScene('vader:Гайда зробимо blackout русні?', 600)
  .addScene('luke:Нумо!', 400)
  .addScene('vader:Безпілотник blackout допоможе з цим!', 400)
  .addScene('luke:Без сумнівів!!!', 600)
  .addScene(theater.replay.bind(theater))