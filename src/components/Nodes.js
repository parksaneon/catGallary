export default function Nodes({ $app, initialState, onClick, onBackClick }) {
  this.state = initialState;
  this.onClick = onClick;
  this.onBackClick = onBackClick;

  this.$target = document.createElement('ul');
  $app.appendChild(this.$target);

  this.setState = (nextState) => {
    this.state = nextState;
    this.render;
  };

  this.render = () => {
    if (!this.state.nodes) return;
    const nodesTemplate = this.state.nodes
      .map(({ type, id, name }) => {
        const iconPath = type === 'FILE ' ? './assets/file.png' : './assets/directory.png';
        return `<div class="Node" data-node-id="${id}">
        <img src="${iconPath}"/>
        <div>${name}</div>
      </div>`;
      })
      .join('');
    this.$target.innerHTML = !this.state.isRoot
      ? `<div class="Node">
      <img src="/assets/prev.png"/>
    </div>${nodesTemplate}`
      : nodesTemplate;
  };

  this.$target.addEventListener('click', (e) => {
    const $node = e.target.closet('.Node');

    if ($node) {
      const { nodeId } = $node.dataset;

      if (!nodeId) {
        this.onBackClick();
        return;
      }

      const selectedNode = this.state.nodes.find(({ id }) => id === nodeId);

      if (selectedNode) {
        this.onClick(selectedNode);
      }
    }
  });

  this.render;
}
