<script>
    import { character, comics } from './store.js';

    function toggle(event) {
        const div = event.path[1]
        const eleInfo = div.querySelector('.card__information');
        div.classList.toggle('card--active');
        if (!div.classList.contains('card--active'))
            eleInfo.classList.toggle('card__information--collapse')
        else
            setTimeout(() => eleInfo.classList.toggle('card__information--collapse'), 270);
    }  

</script>

<nav>
    <a href="/"> Home </a>
</nav>
    <div>
        <div class="container">
            <img class="caracter-image" src="{$character.thumbnail.path}/standard_fantastic.{$character.thumbnail.extension}" alt="{$character.id}"/>
            <div class="dummy"></div>
            <div class="description">
                <h1 class="char-name">{$character.name}</h1>
                <p class="description-par">{$character.description ? $character.description: "Este personaje no cuenta con una descripción"}</p>
            </div>
        </div>
        <div>
            <h1 class="char-name center">Featured Comics</h1>
            <div class="container__cards">
                {#each $comics as comic}
                    <div class="card" on:click="{toggle}"> 
                        <img class="card__image" src="{comic.thumbnail.path}/standard_fantastic.{comic.thumbnail.extension}" alt="{comic.id}"/>
                        <h3 class="card__title">{comic.title}</h3>
                        <div class="card__information">
                            <h4 class="card__subtitle">stories</h4>
                            {#if comic.stories}
                                {#each comic.stories.items.slice(0,3) as story}
                                    <ul>
                                        <li>{story.name}</li>
                                    </ul>
                                    <h4 class="card__subtitle">description</h4>
                                    {#if comic.description != ""}
                                        <p>
                                            {comic.description}
                                        </p>
                                    {:else}
                                        <p>
                                            This comic doesnt have a description.
                                        </p>
                                    {/if}
                                {/each}
                            {/if}
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>


<style lang="css">
    .container {
        display: flex;
        padding: 2% 20%;
    }
    .caracter-image{
        width: 100%;
        border: 5px solid rgb(0, 0, 0);
        max-width: 300px;
    }
    .description{
        border: 5px solid rgb(0, 0, 0);
        background-color: white;
        flex-direction: column;
        min-width: 400px;
    }
    .dummy{
        padding-left: 3%;
    }
    .char-name{
      line-height: 1.5;
      font-family: var(--font-family-title);
      font-weight: var(--font-weight-bold);
      font-size: 25px;
      padding: 2%;
    }
    .description-par {
        padding: 5%;
    }
    .center {
        text-align: center;
        font-size: 30px;
    }
    .container__cards {
      display: grid;
      grid-gap: 1rem;
      margin: 1rem auto;
      padding: 1rem;
      max-width: 85rem;
      align-items: center;
      grid-template-columns: repeat(4, 1fr);
    }
    .card {
      position: relative;
      line-height: 0;
      width: 90%;
      cursor: pointer;
      border-radius: .2rem;
      background-color: var(--white);
      box-shadow: 0 .01rem .03rem rgba(0,0,0,0.12), 0 .1rem .5rem rgba(0,0,0,0.24);
      transition: box-shadow var(--transition-duration) var(--transition-function);
    }
    .card:hover {
      box-shadow: 0 .5rem 2rem rgba(0,0,0,0.25), 0 .5rem .9rem rgba(0,0,0,0.22);
    }
    .card__image {
      width: 100%;
    }
    .card__title {
      margin: 0;
      width: 110%;
      font-size: 1.4rem;
      color: var(--white);
      padding: .2rem .4rem;
      background-color: var(--primary-color);
      box-shadow: 0 -.35rem 3rem rgba(0,0,0,0.25), 0 -.6rem 1.9rem rgba(0,0,0,0.22);
      bottom: 0;
      position: absolute;
      will-change: bottom;
      transition-property: all;
      transition-duration: var(--transition-duration);
      transition-timing-function: var(--transition-function);
    }
    .card__title:after {
      z-index: -1;
      content: '';
      width: 3rem;
      position: absolute;
      transform: skew(50deg);
      background-color: var(--primary-color);
      top: -2rem;
      height: 2rem;
      right: 1.2rem;
      transition: all var(--transition-duration) var(--transition-function);
    }
    @media only screen and (max-width: 78rem) {
      .container__cards {
        grid-template-columns: repeat(3, 1fr);
      }
    }
    @media only screen and (max-width: 60rem) {
      .container__cards {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    @media only screen and (max-width: 31rem) {
      .container__cards {
        grid-template-columns: 1fr;
      }
    }
    .container__cards {
      display: grid;
      grid-gap: 1rem;
      margin: 1rem auto;
      padding: 1rem;
      max-width: 85rem;
      align-items: center;
      grid-template-columns: repeat(4, 1fr);
    }
    .card {
      position: relative;
      line-height: 0;
      width: 90%;
      cursor: pointer;
      border-radius: .2rem;
      background-color: var(--white);
      box-shadow: 0 .01rem .03rem rgba(0,0,0,0.12), 0 .1rem .5rem rgba(0,0,0,0.24);
      transition: box-shadow var(--transition-duration) var(--transition-function);
    }
    .card:hover {
      box-shadow: 0 .5rem 2rem rgba(0,0,0,0.25), 0 .5rem .9rem rgba(0,0,0,0.22);
    }
    .card__image {
      width: 100%;
    }
    .card__title {
      margin: 0;
      width: 110%;
      font-size: 1.4rem;
      color: var(--white);
      padding: .2rem .4rem;
      background-color: var(--primary-color);
      box-shadow: 0 -.35rem 3rem rgba(0,0,0,0.25), 0 -.6rem 1.9rem rgba(0,0,0,0.22);
      bottom: 0;
      position: absolute;
      will-change: bottom;
      transition-property: all;
      transition-duration: var(--transition-duration);
      transition-timing-function: var(--transition-function);
    }
    .card__title:after {
      z-index: -1;
      content: '';
      width: 3rem;
      position: absolute;
      transform: skew(50deg);
      background-color: var(--primary-color);
      top: -2rem;
      height: 2rem;
      right: 1.2rem;
      transition: all var(--transition-duration) var(--transition-function);
    }
    .card__subtitle {
      font-size: 1.2rem;
      margin: .5rem 0;
    }
    .card__information {
      height: 0;
      opacity: 0;
      width: 100%;
      top: 2.35rem;
      padding: .5rem;
      overflow-y: auto;
      line-height: 1.4;
      position: absolute;
      color: var(--white);
      will-change: height;
      transition-property: height, opacity;
      background-color: rgba(0,0,0,.65);
      transition-duration: var(--transition-duration);
      transition-timing-function: var(--transition-function);
    }
    :global(.card__information--collapse) {
      opacity: 1 !important;
      height: calc(100% - 2.35rem) !important;
    }
    :global(.card__link) {
      display: block;
      width: max-content;
      margin: .5rem auto;
      color: var(--dark);
      border-radius: .3rem;
      padding: .2rem .5rem;
      text-decoration: none;
      text-transform: uppercase;
      font-weight: var(--font-weight-bold);
      background-color: rgba(255, 255, 255, .7);
      cursor: pointer;
    }
    :global(.card__link:hover) {
      background-color: var(--white);
    }
    /* Active */
    :global(.card--active .card__title) {
      bottom: calc(100% - 2.4rem);
      box-shadow: 0 0.65rem 1rem rgba(0,0,0,0.25), 0 .7rem 1.2rem rgba(0,0,0,0.22);
    }
    :global(.card--active .card__title:after) {
      top: 2.4rem;
      transform: skew(-50deg);
    }
    @media only screen and (max-width: 78rem) {
      .container__cards {
        grid-template-columns: repeat(3, 1fr);
      }
    }
    @media only screen and (max-width: 60rem) {
      .container__cards {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    @media only screen and (max-width: 31rem) {
      .container__cards {
        grid-template-columns: 1fr;
      }
    }
</style>