import './styles/app.css'
import 'normalize.css'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/fontawesome'

class Page {
  constructor () {
    this.initSelectors()
    this.respond()
    this.initListeners()
  }

  initSelectors () {
    this.searchBtn = document.querySelector('.header__search-btn')
    this.sectionLink = document.querySelector('.header__section-link')
    this.accountBtn = document.querySelector('.header__account-btn')
    this.shareBtn = document.querySelector('.article__share-btn')
    this.articlesSidebar = document.querySelector('.articles-sidebar')
    this.sidebarImages = document.querySelectorAll('.articles-sidebar__image')
    this.recommendedArticlesBar = document.querySelector('.recommended-articles')
    this.youtubeVideoContainer = document.querySelector('.youtube-video')

    this.suggestedNewsletters =
      document.querySelectorAll('.suggested-newsletters__newsletter')

    this.sitemapPagesContainers = document.querySelectorAll('.sitemap__pages')
    this.sitemapPageHeaders = document.querySelectorAll('.sitemap__section-header')
  }

  initListeners () {
    window.addEventListener('resize', this.respond.bind(this))

    this.suggestedNewsletters.forEach(newsletter => {
      newsletter.addEventListener('mouseover', this.hoverButton)
      newsletter.addEventListener('mouseleave', this.leaveButton)
      newsletter.addEventListener('click', this.addNewsletter)
    })

    this.sitemapPageHeaders.forEach(header => {
      header.addEventListener('click', this.toggleSitemapSection)
    })
  }

  respond () {
    if (window.innerWidth > 1000) {
      this.respondToNormalWidth()
      this.adjustVideoHeight(0.27)

      if (window.innerWidth <= 1150) {
        this.respondTo1150px()
      }
    } else if (window.innerWidth <= 1000 && window.innerWidth > 750) {
      this.respondTo1000px()
      this.adjustVideoHeight(0.37)
    } else if (window.innerWidth <= 750) {
      this.respondTo750px()
      this.adjustVideoHeight(0.5)
    }
  }

  respondToNormalWidth () {
    this.accountBtn.classList.add('header__account-btn_hidden')
    this.recommendedArticlesBar.classList.add('recommended-articles_hidden')

    this.shareBtn.classList.remove('article__share-btn_hidden')
    this.sectionLink.classList.remove('header__section-link_hidden')
    this.searchBtn.classList.remove('header__search-btn_hidden')

    this.sidebarImages.forEach(image => {
      image.classList.remove('articles-sidebar__image_hidden')
    })

    this.articlesSidebar.classList.remove('articles-sidebar_hidden')

    this.sitemapPagesContainers.forEach(container => {
      container.classList.remove('sitemap__pages_hidden')
    })

    this.sitemapPageHeaders.forEach(header => {
      header.classList.remove('sitemap__section-header_open')
    })
  }

  respondTo1150px () {
    this.sidebarImages.forEach(image => {
      image.classList.add('articles-sidebar__image_hidden')
    })

    this.sitemapPagesContainers.forEach(container => {
      container.classList.add('sitemap__pages_hidden')
    })
  }

  respondTo1000px () {
    this.sectionLink.classList.add('header__section-link_hidden')
    this.searchBtn.classList.add('header__search-btn_hidden')
    this.articlesSidebar.classList.add('articles-sidebar_hidden')
    this.recommendedArticlesBar.classList.add('recommended-articles_hidden')

    this.accountBtn.classList.remove('header__account-btn_hidden')
    this.shareBtn.classList.remove('article__share-btn_hidden')

    this.sitemapPagesContainers.forEach(container => {
      container.classList.add('sitemap__pages_hidden')
    })

    this.sitemapPageHeaders.forEach(header => {
      header.classList.remove('sitemap__section-header_open')
    })
  }

  respondTo750px () {
    this.shareBtn.classList.add('article__share-btn_hidden')
    this.articlesSidebar.classList.add('articles-sidebar_hidden')

    this.recommendedArticlesBar.classList.remove('recommended-articles_hidden')

    this.sitemapPagesContainers.forEach(container => {
      container.classList.add('sitemap__pages_hidden')
    })

    this.sitemapPageHeaders.forEach(header => {
      header.classList.remove('sitemap__section-header_open')
    })
  }

  adjustVideoHeight (value) {
    this.youtubeVideoContainer.style.height = window.innerWidth * value + 'px'
  }

  addNewsletter (event) {
    const addBtn =
      event.currentTarget.querySelector('.suggested-newsletters__add-btn')
    const link =
      event.currentTarget.querySelector('.suggested-newsletters__latest-link')

    if (event.target !== link) {
      addBtn.click()
    }
  }

  hoverButton (event) {
    const addBtn =
      event.currentTarget.querySelector('.suggested-newsletters__add-btn')
    addBtn.classList.add('suggested-newsletters__add-btn_hover')
  }

  leaveButton (event) {
    const addBtn =
      event.currentTarget.querySelector('.suggested-newsletters__add-btn')
    addBtn.classList.remove('suggested-newsletters__add-btn_hover')
  }

  toggleSitemapSection (event) {
    if (window.innerWidth < 1150) {
      event.currentTarget.classList.toggle('sitemap__section-header_open')
      const ul = event.currentTarget.parentElement.querySelector('.sitemap__pages')
      ul.classList.toggle('sitemap__pages_hidden')
    }
  }
}

// eslint-disable-next-line no-new
new Page()
