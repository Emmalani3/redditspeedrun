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
            <div class="space"></div>
            <a class="kofi" href="https://ko-fi.com/emmalani" target="_blank" rel="noopener">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M3 5a2 2 0 0 0-2 2v7a5 5 0 0 0 5 5h7a5 5 0 0 0 5-5v-1h1.5A3.5 3.5 0 0 0 23 9.5v-1A3.5 3.5 0 0 0 19.5 5H3zm17 8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7h16.5A1.5 1.5 0 0 1 21 8.5v1A1.5 1.5 0 0 1 19.5 11H20v2zM6.5 9C7.88 9 9 10.12 9 11.5S7.88 14 6.5 14 4 12.88 4 11.5 5.12 9 6.5 9z"/></svg>
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