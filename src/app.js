import './styles/app.css'
import 'normalize.css'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/brands'
import '@fortawesome/fontawesome-free/js/fontawesome'

class Page {
  constructor () {
    this.searchBtn = document.querySelector('.header__search-btn')
    this.sectionLink = document.querySelector('.header__section-link')
    this.accountBtn = document.querySelector('.header__account-btn')
    this.shareBtn = document.querySelector('.article__share-btn')
    this.articlesSidebar = document.querySelector('.articles-sidebar')
    this.sidebarImages = document.querySelectorAll('.articles-sidebar__image')

    this.respond()
    this.initListeners()
  }

  initListeners () {
    window.addEventListener('resize', this.respond.bind(this))
  }

  respond () {
    console.log(window.innerWidth)
    if (window.innerWidth > 1000) {
      this.respondToNormalWidth()

      if (window.innerWidth <= 1150) {
        this.respondTo1150px()
      }
    } else if (window.innerWidth <= 1000 && window.innerWidth > 650) {
      this.respondTo1000px()
    } else if (window.innerWidth <= 650) {
      this.respondTo650px()
    }
  }

  respondToNormalWidth () {
    this.accountBtn.classList.add('header__account-btn_hidden')

    this.shareBtn.classList.remove('article__share-btn_hidden')
    this.sectionLink.classList.remove('header__section-link_hidden')
    this.searchBtn.classList.remove('header__search-btn_hidden')
    this.sidebarImages.forEach(image => {
      image.classList.remove('articles-sidebar__image_hidden')
    })
    this.articlesSidebar.classList.remove('articles-sidebar_hidden')
  }

  respondTo1150px () {
    this.sidebarImages.forEach(image => {
      image.classList.add('articles-sidebar__image_hidden')
    })
  }

  respondTo1000px () {
    this.sectionLink.classList.add('header__section-link_hidden')
    this.searchBtn.classList.add('header__search-btn_hidden')
    this.articlesSidebar.classList.add('articles-sidebar_hidden')

    this.accountBtn.classList.remove('header__account-btn_hidden')
    this.shareBtn.classList.remove('article__share-btn_hidden')
  }

  respondTo650px () {
    this.shareBtn.classList.add('article__share-btn_hidden')
    this.articlesSidebar.classList.add('articles-sidebar_hidden')
  }
}

// eslint-disable-next-line no-new
new Page()
