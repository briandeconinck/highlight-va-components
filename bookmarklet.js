(function () {

    var components = [ 'va-accordion',
                        'va-additional-info',
                        'va-alert',
                        'va-back-to-top',
                        'va-banner',
                        'va-official-gov-banner',
                        'va-promo-banner',
                        'va-breadcrumbs',
                        'va-button',
                        'va-button-pair',
                        'va-card',
                        'va-checkbox',
                        'va-checkbox-group',
                        'va-crisis-line-modal',
                        'va-date',
                        'va-featured-content',
                        'va-file-input',
                        'va-link',
                        'va-loading-indicator',
                        'va-memorable-date',
                        'va-minimal-header',
                        'va-modal',
                        'va-need-help',
                        'va-notification',
                        'va-number-input',
                        'va-omb-info',
                        'va-on-this-page',
                        'va-pagination',
                        'va-privacy-agreement',
                        'va-process-list',
                        'va-progress-bar',
                        'va-segmented-progress-bar',
                        'va-radio',
                        'va-search-input',
                        'va-select',
                        'va-sidenav',
                        'va-table',
                        'va-telephone',
                        'va-text-input',
                        'va-textarea'];

    var styles = document.createElement('style');
    styles.innerText = '';

    components.forEach((element) => {
        console.log(element);
        styles.innerText += element + ' { outline: dashed 0.25rem purple; }';
        styles.innerText += element + ':after { content: "' + element + '"; color: #fff; background-color: purple; padding: 0.5rem; }';
        styles.innerText += element + '[uswds] { outline: dotted 0.25rem darkred; }';
        styles.innerText += element + '[uswds]:after { content: "' + element + ' [uswds v3]"; color: #fff; background-color: darkred; padding: 0.5rem; }';
        });

    document.head.appendChild(styles);
})();
