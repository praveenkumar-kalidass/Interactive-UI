import React, {Component} from "react";
import {Link} from "react-router-dom";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography
} from "@material-ui/core";
import "./style.scss";

class ElementCard extends Component {
  render() {
    const {attributes} = this.props;

    return (
      <Card className="ui-element-card">
        <CardContent>
          <Typography color="textSecondary">
            {attributes.path}
          </Typography>
          <Typography variant="headline" component="h2">
            {attributes.key.toUpperCase()}
          </Typography>
          <Typography color="textSecondary">
            {attributes.tags.join(", ")}
          </Typography>
          <Typography component="p">
            {attributes.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="outlined">
            <Link to={attributes.path}>Open</Link>
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default ElementCard;
