import InfiniteScroll from './directive';

const install = function (Vue) {
  Vue.directive('InfiniteScroll', InfiniteScroll);
};

if (process.browser && window.Vue) {
  window.infiniteScroll = InfiniteScroll;
  Vue.use(install); // eslint-disable-line
}

InfiniteScroll.install = install;
export default InfiniteScroll;
