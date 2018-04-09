import ReactComponent from 'react-hack/components/rembr-component';
import RembrCoolThingGuts from 'yolo';

export default ReactComponent.extend({
  didInsertElement() {
    this._super(...arguments);
    this.reactRender(<RembrCoolThingGuts />);
  }
});