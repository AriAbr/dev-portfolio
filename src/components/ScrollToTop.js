import React from "react";
import { withRouter } from "react-router-dom";

class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    if (
      this.props.isScrolling === true
    ) {
      if(this.props.adjustedInnerWidth === 960){
        window.scrollTo(0, 236);
      } else if (this.props.adjustedInnerWidth < 960){
        window.scrollTo(0, 0);
      }
      this.props.updateIsScrolling(false);
    }
  }

  render() {
    return null;
  }
}

export default withRouter(ScrollToTop);
