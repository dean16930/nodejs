import MainLayout from './main.vue';
import '@asset/css/base.css';
import createLayout from '../layout';
export default createLayout('Layout', { MainLayout }, '<div id="app"><MainLayout><div class="page" slot="main"><slot></slot></div></MainLayout></div>');
