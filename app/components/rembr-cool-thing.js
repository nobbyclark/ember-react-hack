import ReactComponent from 'react-hack/components/rembr-component';
import RembrCoolThingGuts from 'react-hack/components/rembr-cool-thing-guts';

export default ReactComponent.extend({
  didInsertElement() {
    this._super(...arguments);
    this.reactRender(<RembrCoolThingGuts name="Nick" />);
  }
});