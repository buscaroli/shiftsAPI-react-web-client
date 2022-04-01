import React from 'react'

const TextBlock = (props) => {
  return <p className="py-3 first-letter:text-4xl">{props.children}</p>
}

function Main() {
  return (
    <main className="text-xl px-4">
      <TextBlock>
        Chuck Norris invented airplanes because he was tired of being the only
        person that could fly. Chuck Norris has never blinked in his entire
        life. Never. Chuck Norris can sit in the corner of a round room. Chuck
        Norris once shattered the space-time continuum. He felt so bad, he put
        it back together. It takes Chuck Norris 20 minutes to watch 60 Minutes.
      </TextBlock>
      <TextBlock>
        Chuck Norris named his daughter Mercy. The day she was born was the only
        day Chuck Norris ever had Mercy. Death once had a near-Chuck-Norris
        experience. Chuck Norris knows Victoria’s secret. Chuck Norris’ tears
        cure cancer. Too bad he has never cried. Chuck Norris can strangle you
        with a cordless phone.
      </TextBlock>
      <TextBlock>
        Chuck Norris once won an underwater breathing contest. With a fish.
        Chuck Norris can sit in the corner of a round room. When God said, “Let
        there be light!” Chuck said, “Say Please.”. Chuck Norris narrates Morgan
        Freeman’s life. Chuck Norris can kill your imaginary friends.
      </TextBlock>
    </main>
  )
}

export default Main
