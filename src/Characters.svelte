<script>

    import { characters, character, comics, searchFilter, currentComponent } from './store.js';
    
    function toggle(event) {
            const div = event.path[1]
            const eleInfo = div.querySelector('.card__information');
            div.classList.toggle('card--active');
            if (!div.classList.contains('card--active'))
                eleInfo.classList.toggle('card__information--collapse')
            else
                setTimeout(() => eleInfo.classList.toggle('card__information--collapse'), 270);
        }   
        
    function goTo(id) {
      character.selectCharacter(id)
      comics.getComics(id)
      currentComponent.update(n=>1)
    }
</script>
<nav>
    <a href="/"> Home </a>
    <div class="separador">
      <input id="query" type="text" class="input" placeholder="Search for a Character" bind:value={$searchFilter}>
      <input type="button" value="search" class="close-btn" on:click={characters.filter($searchFilter)}>
    </div>
</nav>
<div class="container__cards">
        {#each $characters as character}
            <div class="card" on:click="{goTo(character.id)}"> 
                <img class="card__image" src="{character.thumbnail.path}/standard_fantastic.{character.thumbnail.extension}" alt="${character.id}"/>
                <h3 class="card__title">{character.name}</h3>
                <div class="card__information">
                    <h4 class="card__subtitle">comics</h4>
                    {#each character.comics.items.slice(0,3) as comic}
                        <ul>
                            <li>{comic.name}</li>
                        </ul>
                    {/each}
                    <h4 class="card__subtitle">description</h4>
                    {#if character.description != ''}
                        <p>
                            {character.description}
                        </p>
                    {:else}
                        <p v-else>
                            This character doesnt have a description.
                        </p>
                    {/if}
                </div>
            </div>
        {/each}
</div>

<style lang="css">
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
    .card__information--collapse {
      opacity: 1;
      height: calc(100% - 2.35rem);
    }
    .card__link {
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
    }
    .card__link:hover {
      background-color: var(--white);
    }
    /* Active */
    .card--active .card__title {
      bottom: calc(100% - 2.4rem);
      box-shadow: 0 0.65rem 1rem rgba(0,0,0,0.25), 0 .7rem 1.2rem rgba(0,0,0,0.22);
    }
    .card--active .card__title:after {
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