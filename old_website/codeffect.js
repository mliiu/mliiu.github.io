(function(){
  'use strict';

function PR(props) {
  return(
    <div className="columnx">
    <ReactTransitionGroup.TransitionGroup>
    {props.pr.map(function(columnx) {
      return(
    <ReactTransitionGroup.CSSTransition
      key={columnx.id}
      classNames={{
        enter:"animated",
        enterActive:"zoomIn",
        exit:"animated",
        exitActive:"zoomout"
      }}
      timeout={1000}>
    <PR columnx={columnx}/>
    </ReactTransitionGroup.CSSTransition>
  );
})}
    </ReactTransitionGroup.TransitionGroup>
    </div>
  );
}

  render() {
    return(
      <PR pr={this.state.pr} />
      </div>
    )
  )
    }
  }

//insert the HTML DIV

const domContainer = document.querySelector('#react_tool');
ReactDOM.render(<PR>, domContainer);
