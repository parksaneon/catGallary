import ImageView from './components/ImageView';
import BreadCrumb from './components/BreadCrumb';
import Nodes from './components/Nodes';
import request from './utils/fetch';

export default function App($app) {
  this.state = {
    isRoot: false,
    nodes: [],
    depth: [],
  };

  const imageView = new ImageView({ $app, initialState: this.state.selectedNodeImage });
  const breadsCrumb = new BreadCrumb({ $app, initialState: this.state.depth });
  const nodes = new Nodes({
    $app,
    initialState: { isRoot: this.state.isRoot, nodes: this.state.nodes },
  });

  this.setState = (nextState) => {
    this.state = nextState;
    breadsCrumb.setState(this.state.depth);
    nodes.setState({
      isRoot: this.state.isRoot,
      nodes: this.state.nodes,
    });
  };

  const init = async () => {
    try {
      const rootNodes = await request();
      this.setState({ ...this.state, isRoot: true, nodes: rootNodes });
    } catch (error) {
      throw new Error(`에러 발생 ${e.message}`);
    }
  };

  onClick = async (node) => {
    try {
      if (node.type === 'DIRECTORY') {
        const nextNodes = await request(node.id);
        this.setState({ ...this.state, depth: [...this.state.depth, node], nodes: nextNodes });
      } else if (type === 'FILE') {
      }
    } catch (error) {}
  };
}
