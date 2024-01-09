import scroll_to_hash from '../router/scroll_to_hash';
export default {
    mounted() {
        scroll_to_hash();
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('showMe');
          }
        });
      }, {
        rootMargin: '0px',
        threshold: 0.1
      });
  
      const hiddenElements = this.$el.querySelectorAll('.hidMe');
      hiddenElements.forEach((el) => observer.observe(el));
    }
  }
  
  