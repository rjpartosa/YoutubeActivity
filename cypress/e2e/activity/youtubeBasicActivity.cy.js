describe('Basic YouTube Video Testing', () => {
    it('searches for a specific video on YouTube', () => {
        cy.visit('https://www.youtube.com')
        cy.get('input#search').type('i made a sandwich | 🇪🇸 SPANISH VLOG for Spanish Learners!')
        cy.get('button#search-icon-legacy').click()
        cy.get('a[title*="i made a sandwich"]').click()
        
        //Checks if correct video is selected
        cy.title().should('include', 'i made a sandwich | 🇪🇸 SPANISH VLOG for Spanish Learners!')
    })

    it('can change the subtitles/captions of the video to Spanish', ()  => {
        cy.visit('https://www.youtube.com')
        cy.get('input#search').type('i made a sandwich | 🇪🇸 SPANISH VLOG for Spanish Learners!')
        cy.get('button#search-icon-legacy').click()
        cy.get('a[title*="i made a sandwich"]').click()
        cy.wait(10000)
        //Skips the video ads
        cy.get('.ytp-ad-skip-button-modern').then(($skip) => {
            if ($skip.length){
                cy.get('.ytp-ad-skip-button-modern').click()
            }
            else{

            }
        })
        //Selects Spanish on the subtitles/captions 
        cy.get('div#player button.ytp-settings-button').click()
        cy.get('div#player div.ytp-menuitem:nth-child(3)').click()
        cy.get('div.ytp-popup div.ytp-menuitem:nth-child(10)').click()

        //Checks if selected language is Spanish
        cy.get('div#player div.ytp-menuitem:nth-child(3) div.ytp-menuitem-content').should('have.text', 'Spanish')

        cy.scrollTo('top')

    })

    it('can seek to the middle part of the video', () => {
        cy.visit('https://www.youtube.com')
        cy.get('input#search').type('i made a sandwich | 🇪🇸 SPANISH VLOG for Spanish Learners!')
        cy.get('button#search-icon-legacy').click()
        cy.get('a[title*="i made a sandwich"]').click()
        cy.wait(10000)
        //Skips the video ads
        cy.get('.ytp-ad-skip-button-modern').then(($skip) => {
            if ($skip.length){
                cy.get('.ytp-ad-skip-button-modern').click()
            }
            else{

            }
        })
        cy.get('div.ytp-progress-bar').click('center')
        cy.scrollTo('top')
        
    })
})