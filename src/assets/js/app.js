import  slider from './modules/slider';
import  sportslider from './modules/sportslider';
import tabs from './modules/tabs';

window.addEventListener ('DOMContentLoaded', () => {
    // search ();
    // stock ();
    // timer ('.timers', '2021-04-20');
    slider ({
        blocks: '.main__block',
        btnLeft: '.fa-chevron-left',
        btnRight: '.fa-chevron-right',
        numberBlocks: '.main__nav-block',
        container: '.main__item',
        field: '.main__field'
    });
    sportslider ({
        blocks: '.sport__block',
        btnLeft: '.fa-chevron-left',
        btnRight: '.fa-chevron-right',
        numberBlocks: '.main__nav-block',
        container: '.sport__item',
        field: '.sport__field'
    });
    tabs ('.matches__column', '.matches__tabs-btn', '.matches__tabs', 'active-tabs');
});
