const React = require('react');
const VisJsComponent = require('react-visjs-timeline').default;
const IdyllComponent = require('idyll-component');
const VisComponent = require('vis');

const options = {
  layout: {
    hierarchical: true
  },
  edges: {
    color: "#000000"
  }
};

const events = {
    select: function(event) {
        const { nodes, edges } = event;
        console.log("Selected nodes:", nodes);
        console.log("Selected edges:", edges);
    }
};

class TimelineComponent extends IdyllComponent {

  constructor(props) {
    super(props)
    this.state = {
      data: this.props.data
    }
  }
  
  render() {
    return (
       <Timeline
         data={this.state.data}
         options={options}
         events={events}
       />
    );
  }
}

module.exports = TimelineComponent;