function BreadCrumb({ $app, initialState }) {
  this.state = initialState;

  this.$target = document.createElement('nav');
  this.$target.className = 'BreadScrumb';
  $app.appendChild(this.$target);

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    this.$target.innerHTML = `<div class="nav-item">root</div>
      ${this.state.nodes
        .map(({ name }, index) => `<div class="nav-item" data-index=${index}>${name}</div>`)
        .join('')}
    `;
  };
}
