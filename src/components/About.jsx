import React from 'react'

function About() {
  return (
    <>
        <section id="support" class="center">
            <h2>Support the Creator</h2>
            <img
                class="headshot"
                src="../assets/Head-Shot-2.jpg"
                alt="Emma Lani — programming student"
            />
            <p class="sub">If you enjoy this project and want to help us build more you can donate to our Ko-Fi</p>
            <a class="kofi" href="https://ko-fi.com/emmalani" target="_blank" rel="noopener">
                Buy me a Ko‑fi
            </a>
        </section>

        <section id="contact">
            <h2>Commissions & Contact</h2>
            <p class="sub">Have an idea for a custom project or comments on this one? Send a note below and I'll get back to you.</p>
            <div class="space"></div>
            <form action="https://formspree.io/f/mjkwbbjn" method="POST" class="card" aria-label="Commission contact form">
                <label>
                Your name
                <br/>
                <input type="text" name="name" required placeholder="Your name" />
                </label>
                <label>
                Email
                <br/>
                <input type="email" name="email" required placeholder="you@example.com" />
                </label>
                <label>
                What would you like to make together?
                <br />
                <textarea name="message" rows="6" required placeholder="Tell me about your idea…"></textarea>
                </label>
                <button type="submit">Send request</button>
            </form>
        </section>

        <section id="OtherProjects">
            <h2>Other Projects</h2>
            <p class="sub">Emma has other ongoing projects and designs you can check out. If you like what you see take a look at these links!</p>
            <a href="https://emmalani3.github.io/buttonGame/" alt="ButtonGame" ><button>Button Game</button></a>
            <p class="sub">Play the button game and watch out for the get-wrecked button!</p>
            <a href="https://emmalani3.github.io/BoopTheSnoot/" alt="Boop the snoot game" ><button>Boop The snoot Game</button></a>
            <p class="sub">These animals are waiting for you to make their day and boop ther snoots. This is a zen game
                for stress relief that lets you boop as long as you want.</p>
            <a href="https://emmalani3.github.io/kelvintheweatherrock/" alt="Kelvin the weather rock" ><button>Kelvin The Weather Rock</button></a>
            <p class="sub">Ever wanted a weatehr rock? Kelvin the rock always wanted to be a weather man so we made his 
                dreams come true. Check out Kelvin and his expressive weather reports.</p>
            <a href="https://emmalani3.github.io/homepage/" alt="Multi-Media Portfolio" ><button>Multi-Media Portfolio</button></a>
            <p class="sub">Want to see more art by Emma? Check out our home page, one of our first website designs that 
                showcases different multi-media projects!</p>

        </section>
</>
  )
}

export default About